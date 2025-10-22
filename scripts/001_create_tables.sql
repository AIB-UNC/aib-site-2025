-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('workshop', 'networking', 'speaker', 'social', 'other')),
  date DATE NOT NULL,
  time TIME NOT NULL,
  location TEXT NOT NULL,
  registration_link TEXT,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('career', 'academic', 'wellness', 'financial', 'networking')),
  resource_type TEXT NOT NULL CHECK (resource_type IN ('article', 'video', 'document', 'link', 'tool')),
  url TEXT,
  file_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create leadership table
CREATE TABLE IF NOT EXISTS leadership (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT NOT NULL,
  image_url TEXT,
  linkedin TEXT,
  order_position INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create get_involved_submissions table
CREATE TABLE IF NOT EXISTS get_involved_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  athlete_status TEXT NOT NULL CHECK (athlete_status IN ('current', 'former', 'non-athlete')),
  graduation_year INTEGER,
  interests TEXT[] NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on all tables (public read access, no write access from client)
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE leadership ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE get_involved_submissions ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Allow public read access to events" ON events FOR SELECT USING (true);
CREATE POLICY "Allow public read access to resources" ON resources FOR SELECT USING (true);
CREATE POLICY "Allow public read access to leadership" ON leadership FOR SELECT USING (true);

-- Allow public insert for submissions
CREATE POLICY "Allow public insert to contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert to get_involved_submissions" ON get_involved_submissions FOR INSERT WITH CHECK (true);
