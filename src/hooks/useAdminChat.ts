import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Message, Conversation } from './useChatWidget';

const ADMIN_ID = 'admin-1'; // Unique identifier for this admin session

export const useAdminChat = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisitorTyping, setIsVisitorTyping] = useState(false);
  const [unreadCounts, setUnreadCounts] = useState<Record<string, number>>({});
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const presenceIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Update admin presence
  const updatePresence = useCallback(async (isOnline: boolean) => {
    await supabase
      .from('admin_presence')
      .upsert({
        admin_id: ADMIN_ID,
        is_online: isOnline,
        last_seen_at: new Date().toISOString(),
      }, { onConflict: 'admin_id' });
  }, []);

  // Set up presence tracking
  useEffect(() => {
    updatePresence(true);
    
    // Heartbeat every 30 seconds
    presenceIntervalRef.current = setInterval(() => {
      updatePresence(true);
    }, 30000);

    // Set offline on unmount
    return () => {
      if (presenceIntervalRef.current) {
        clearInterval(presenceIntervalRef.current);
      }
      updatePresence(false);
    };
  }, [updatePresence]);

  const fetchConversations = useCallback(async () => {
    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error fetching conversations:', error);
      return;
    }

    setConversations(data as Conversation[]);

    // Fetch unread counts for each conversation
    const counts: Record<string, number> = {};
    for (const conv of data) {
      const { count } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true })
        .eq('conversation_id', conv.id)
        .eq('sender_type', 'visitor')
        .is('read_at', null);
      counts[conv.id] = count || 0;
    }
    setUnreadCounts(counts);
    setIsLoading(false);
  }, []);

  const fetchMessages = useCallback(async (conversationId: string) => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching messages:', error);
      return;
    }

    setMessages(data as Message[]);

    // Mark visitor messages as read
    await supabase
      .from('messages')
      .update({ read_at: new Date().toISOString() })
      .eq('conversation_id', conversationId)
      .eq('sender_type', 'visitor')
      .is('read_at', null);

    setUnreadCounts((prev) => ({ ...prev, [conversationId]: 0 }));
  }, []);

  const sendMessage = async (content: string) => {
    if (!selectedConversation || !content.trim()) return;

    await supabase
      .from('messages')
      .insert({
        conversation_id: selectedConversation.id,
        sender_type: 'admin',
        content: content.trim(),
      });

    await supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', selectedConversation.id);
  };

  const setTypingStatus = async (isTyping: boolean) => {
    if (!selectedConversation) return;

    await supabase
      .from('typing_status')
      .upsert({
        conversation_id: selectedConversation.id,
        sender_type: 'admin',
        is_typing: isTyping,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'conversation_id,sender_type' });
  };

  const handleTyping = () => {
    setTypingStatus(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setTypingStatus(false);
    }, 2000);
  };

  // Close/archive conversation
  const updateConversationStatus = async (conversationId: string, status: 'active' | 'closed' | 'archived') => {
    await supabase
      .from('conversations')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', conversationId);

    // Update local state
    setConversations(prev => 
      prev.map(c => c.id === conversationId ? { ...c, status } : c)
    );

    // Update selected conversation if it's the one being modified
    if (selectedConversation?.id === conversationId) {
      setSelectedConversation(prev => prev ? { ...prev, status } : null);
    }
  };

  // Update conversation notes
  const updateConversationNotes = async (conversationId: string, notes: string) => {
    await supabase
      .from('conversations')
      .update({ notes, updated_at: new Date().toISOString() })
      .eq('id', conversationId);

    // Update local state
    setConversations(prev => 
      prev.map(c => c.id === conversationId ? { ...c, notes } : c)
    );

    // Update selected conversation if it's the one being modified
    if (selectedConversation?.id === conversationId) {
      setSelectedConversation(prev => prev ? { ...prev, notes } : null);
    }
  };

  // Subscribe to realtime conversations
  useEffect(() => {
    fetchConversations();

    const conversationsChannel = supabase
      .channel('admin-conversations')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations',
        },
        () => {
          fetchConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(conversationsChannel);
    };
  }, [fetchConversations]);

  // Subscribe to realtime messages for selected conversation
  useEffect(() => {
    if (!selectedConversation) return;

    fetchMessages(selectedConversation.id);

    const messagesChannel = supabase
      .channel(`admin-messages-${selectedConversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${selectedConversation.id}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => [...prev, newMessage]);

          // Mark as read immediately
          if (newMessage.sender_type === 'visitor') {
            supabase
              .from('messages')
              .update({ read_at: new Date().toISOString() })
              .eq('id', newMessage.id);
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${selectedConversation.id}`,
        },
        (payload) => {
          setMessages((prev) =>
            prev.map((m) => (m.id === payload.new.id ? (payload.new as Message) : m))
          );
        }
      )
      .subscribe();

    // Subscribe to typing status
    const typingChannel = supabase
      .channel(`admin-typing-${selectedConversation.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'typing_status',
          filter: `conversation_id=eq.${selectedConversation.id}`,
        },
        (payload) => {
          const status = payload.new as { sender_type: string; is_typing: boolean };
          if (status.sender_type === 'visitor') {
            setIsVisitorTyping(status.is_typing);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(messagesChannel);
      supabase.removeChannel(typingChannel);
    };
  }, [selectedConversation, fetchMessages]);

  return {
    conversations,
    selectedConversation,
    setSelectedConversation,
    messages,
    sendMessage,
    isLoading,
    isVisitorTyping,
    handleTyping,
    unreadCounts,
    updateConversationStatus,
    updateConversationNotes,
  };
};
