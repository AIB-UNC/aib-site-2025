-- Create members table for current student-athletes
CREATE TABLE IF NOT EXISTS public.members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  sport TEXT,
  class_year TEXT,
  major TEXT,
  interests TEXT[],
  profile_photo_url TEXT,
  email TEXT,
  is_active BOOLEAN DEFAULT true
);

-- Create alumni table
CREATE TABLE IF NOT EXISTS public.alumni (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  sport TEXT,
  graduation_year TEXT,
  job_title TEXT,
  company TEXT,
  location TEXT,
  industry TEXT,
  profile_photo_url TEXT,
  email TEXT,
  linkedin_url TEXT
);

-- Create partners table for corporate partners
CREATE TABLE IF NOT EXISTS public.partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  company_name TEXT NOT NULL,
  partnership_type TEXT,
  industry TEXT,
  description TEXT,
  logo_url TEXT,
  website_url TEXT,
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alumni ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to active members" ON public.members
  FOR SELECT USING (is_active = true);

CREATE POLICY "Allow public read access to alumni" ON public.alumni
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to active partners" ON public.partners
  FOR SELECT USING (is_active = true);
