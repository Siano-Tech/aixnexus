-- Add notes column to conversations
ALTER TABLE public.conversations ADD COLUMN IF NOT EXISTS notes text;

-- Create admin_presence table for tracking admin online status
CREATE TABLE IF NOT EXISTS public.admin_presence (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id text NOT NULL UNIQUE,
  is_online boolean NOT NULL DEFAULT false,
  last_seen_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.admin_presence ENABLE ROW LEVEL SECURITY;

-- Everyone can view admin presence (to show online status)
CREATE POLICY "Anyone can view admin presence" ON public.admin_presence FOR SELECT USING (true);

-- Anyone can update presence (simplified for demo)
CREATE POLICY "Anyone can update admin presence" ON public.admin_presence FOR UPDATE USING (true);

-- Anyone can insert presence
CREATE POLICY "Anyone can insert admin presence" ON public.admin_presence FOR INSERT WITH CHECK (true);

-- Enable realtime for admin_presence
ALTER PUBLICATION supabase_realtime ADD TABLE public.admin_presence;