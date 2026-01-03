-- Add read_at column to messages for read receipts
ALTER TABLE public.messages ADD COLUMN read_at TIMESTAMP WITH TIME ZONE DEFAULT NULL;

-- Add typing status table for real-time typing indicators
CREATE TABLE public.typing_status (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('visitor', 'admin')),
  is_typing BOOLEAN NOT NULL DEFAULT false,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(conversation_id, sender_type)
);

-- Enable RLS
ALTER TABLE public.typing_status ENABLE ROW LEVEL SECURITY;

-- Policies for typing status
CREATE POLICY "Anyone can view typing status" ON public.typing_status FOR SELECT USING (true);
CREATE POLICY "Anyone can insert typing status" ON public.typing_status FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update typing status" ON public.typing_status FOR UPDATE USING (true);

-- Enable realtime for typing status
ALTER PUBLICATION supabase_realtime ADD TABLE public.typing_status;

-- Create admin_users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- No public access to admin_users - only through edge function
CREATE POLICY "No direct access to admin users" ON public.admin_users FOR SELECT USING (false);