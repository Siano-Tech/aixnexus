import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface Message {
  id: string;
  conversation_id: string;
  sender_type: 'visitor' | 'admin';
  content: string;
  created_at: string;
}

export interface Conversation {
  id: string;
  visitor_id: string;
  visitor_name: string;
  status: 'active' | 'closed';
  created_at: string;
  updated_at: string;
}

const getVisitorId = () => {
  let visitorId = localStorage.getItem('chat_visitor_id');
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem('chat_visitor_id', visitorId);
  }
  return visitorId;
};

export const useChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const visitorId = getVisitorId();

  const initConversation = useCallback(async () => {
    setIsLoading(true);
    try {
      // Check for existing active conversation
      const { data: existingConv } = await supabase
        .from('conversations')
        .select('*')
        .eq('visitor_id', visitorId)
        .eq('status', 'active')
        .maybeSingle();

      if (existingConv) {
        setConversation(existingConv as Conversation);
        // Load existing messages
        const { data: existingMessages } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', existingConv.id)
          .order('created_at', { ascending: true });

        if (existingMessages) {
          setMessages(existingMessages as Message[]);
        }
      } else {
        // Create new conversation
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

    const { data, error } = await supabase
      .from('messages')
      .insert({
        conversation_id: conversation.id,
        sender_type: 'visitor',
        content: content.trim(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error sending message:', error);
      return;
    }

    // Update conversation timestamp
    await supabase
      .from('conversations')
      .update({ updated_at: new Date().toISOString() })
      .eq('id', conversation.id);
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
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversation]);

  // Initialize conversation when chat opens
  useEffect(() => {
    if (isOpen && !conversation) {
      initConversation();
    }
  }, [isOpen, conversation, initConversation]);

  return {
    isOpen,
    setIsOpen,
    messages,
    conversation,
    sendMessage,
    isLoading,
  };
};
