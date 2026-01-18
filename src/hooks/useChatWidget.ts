import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Message {
  id: string;
  conversation_id: string;
  sender_type: 'visitor' | 'admin';
  content: string;
  created_at: string;
  read_at: string | null;
}

export interface Conversation {
  id: string;
  visitor_id: string;
  visitor_name: string;
  status: 'active' | 'closed' | 'archived';
  created_at: string;
  updated_at: string;
  notes: string | null;
}

export interface AdminPresence {
  id: string;
  admin_id: string;
  is_online: boolean;
  last_seen_at: string;
}

const getVisitorId = () => {
  let visitorId = localStorage.getItem('chat_visitor_id');
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem('chat_visitor_id', visitorId);
  }
  return visitorId;
};

// Notification sound
const playNotificationSound = () => {
  const audio = new Audio('/notification.mp3');
  audio.volume = 0.5;
  audio.play().catch(() => {
    // Ignore autoplay errors
  });
};

export const useChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isAdminTyping, setIsAdminTyping] = useState(false);
  const [isAdminOnline, setIsAdminOnline] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visitorId = getVisitorId();

  // Check admin presence
  const checkAdminPresence = useCallback(async () => {
    const { data } = await supabase
      .from('admin_presence')
      .select('*')
      .eq('is_online', true)
      .gte('last_seen_at', new Date(Date.now() - 5 * 60 * 1000).toISOString());
    
    setIsAdminOnline((data?.length || 0) > 0);
  }, []);

  // Subscribe to admin presence changes
  useEffect(() => {
    checkAdminPresence();
    
    const presenceChannel = supabase
      .channel('admin-presence-visitor')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'admin_presence',
        },
        () => {
          checkAdminPresence();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(presenceChannel);
    };
  }, [checkAdminPresence]);

  const initConversation = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data: existingConv } = await supabase
        .from('conversations')
        .select('*')
        .eq('visitor_id', visitorId)
        .eq('status', 'active')
        .maybeSingle();

      if (existingConv) {
        setConversation(existingConv as Conversation);
        const { data: existingMessages } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', existingConv.id)
          .order('created_at', { ascending: true });

        if (existingMessages) {
          setMessages(existingMessages as Message[]);
          // Count unread admin messages
          const unread = existingMessages.filter(
            (m) => m.sender_type === 'admin' && !m.read_at
          ).length;
          setUnreadCount(unread);
        }
      } else {
        const { data: newConv, error } = await supabase
          .from('conversations')
          .insert({ visitor_id: visitorId })
          .select()
          .single();

        if (error) throw error;
        setConversation(newConv as Conversation);
      }
    } catch (error) {
      console.error('Error initializing conversation:', error);
    } finally {
      setIsLoading(false);
    }
  }, [visitorId]);

  const sendMessage = async (content: string) => {
    if (!conversation || !content.trim()) return;

    await supabase
      .from('messages')
      .insert({
        conversation_id: conversation.id,
        sender_type: 'visitor',
        content: content.trim(),
      });

    await supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', conversation.id);
  };

  const markMessagesAsRead = async () => {
    if (!conversation) return;

    await supabase
      .from('messages')
      .update({ read_at: new Date().toISOString() })
      .eq('conversation_id', conversation.id)
      .eq('sender_type', 'admin')
      .is('read_at', null);

    setUnreadCount(0);
  };

  const setTypingStatus = async (isTyping: boolean) => {
    if (!conversation) return;

    await supabase
      .from('typing_status')
      .upsert({
        conversation_id: conversation.id,
        sender_type: 'visitor',
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

  // Subscribe to realtime messages
  useEffect(() => {
    if (!conversation) return;

    const channel = supabase
      .channel(`messages-${conversation.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversation.id}`,
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => [...prev, newMessage]);

          if (newMessage.sender_type === 'admin') {
            if (!isOpen) {
              setUnreadCount((prev) => prev + 1);
              playNotificationSound();
            } else {
              // Mark as read immediately if chat is open
              supabase
                .from('messages')
                .update({ read_at: new Date().toISOString() })
                .eq('id', newMessage.id);
            }
          }
        }
      )
      .subscribe();

    // Subscribe to typing status
    const typingChannel = supabase
      .channel(`typing-${conversation.id}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'typing_status',
          filter: `conversation_id=eq.${conversation.id}`,
        },
        (payload) => {
          const status = payload.new as { sender_type: string; is_typing: boolean };
          if (status.sender_type === 'admin') {
            setIsAdminTyping(status.is_typing);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      supabase.removeChannel(typingChannel);
    };
  }, [conversation, isOpen]);

  // Initialize conversation when chat opens
  useEffect(() => {
    if (isOpen && !conversation) {
      initConversation();
    }
    if (isOpen && conversation) {
      markMessagesAsRead();
    }
  }, [isOpen, conversation, initConversation]);

  return {
    isOpen,
    setIsOpen,
    messages,
    conversation,
    sendMessage,
    isLoading,
    unreadCount,
    isAdminTyping,
    isAdminOnline,
    handleTyping,
    markMessagesAsRead,
  };
};
