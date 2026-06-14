-- =============================================================
-- MUMSA Initiative — Row Level Security Policies
-- Migration: 002_rls.sql
-- Run AFTER 001_schema.sql
-- =============================================================

-- Enable RLS on all tables
ALTER TABLE profiles      ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs      ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects      ENABLE ROW LEVEL SECURITY;
ALTER TABLE impact_stats  ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members  ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners      ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications  ENABLE ROW LEVEL SECURITY;
ALTER TABLE news          ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery       ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts      ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers    ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations     ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings      ENABLE ROW LEVEL SECURITY;

-- =============================================================
-- PUBLIC READ — only published rows are visible to anonymous
-- =============================================================

-- Programs: public can read published
CREATE POLICY "Public read published programs" ON programs
  FOR SELECT USING (is_published = true);

-- Projects: public can read published
CREATE POLICY "Public read published projects" ON projects
  FOR SELECT USING (is_published = true);

-- Impact stats: public can read all
CREATE POLICY "Public read impact_stats" ON impact_stats
  FOR SELECT USING (true);

-- Team members: public can read published
CREATE POLICY "Public read published team_members" ON team_members
  FOR SELECT USING (is_published = true);

-- Partners: public can read published
CREATE POLICY "Public read published partners" ON partners
  FOR SELECT USING (is_published = true);

-- Publications: public can read published
CREATE POLICY "Public read published publications" ON publications
  FOR SELECT USING (is_published = true);

-- News: public can read published
CREATE POLICY "Public read published news" ON news
  FOR SELECT USING (is_published = true);

-- Gallery: public can read published
CREATE POLICY "Public read published gallery" ON gallery
  FOR SELECT USING (is_published = true);

-- Settings: public can read
CREATE POLICY "Public read settings" ON settings
  FOR SELECT USING (true);

-- =============================================================
-- PUBLIC WRITE — contacts and volunteers only (no auth required)
-- =============================================================

CREATE POLICY "Public insert contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public insert volunteers" ON volunteers
  FOR INSERT WITH CHECK (true);

-- =============================================================
-- ADMIN FULL ACCESS — authenticated users can do everything
-- =============================================================

CREATE POLICY "Admin full access profiles" ON profiles
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access programs" ON programs
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access projects" ON projects
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access impact_stats" ON impact_stats
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access team_members" ON team_members
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access partners" ON partners
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access publications" ON publications
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access news" ON news
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access gallery" ON gallery
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access contacts" ON contacts
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access volunteers" ON volunteers
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access donations" ON donations
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admin full access settings" ON settings
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

-- =============================================================
-- STORAGE BUCKETS
-- =============================================================

-- Create gallery bucket (if not exists)
INSERT INTO storage.buckets (id, name, public)
  VALUES ('gallery', 'gallery', true)
  ON CONFLICT (id) DO NOTHING;

-- Allow public to read files from gallery bucket
CREATE POLICY "Public read gallery bucket" ON storage.objects
  FOR SELECT USING (bucket_id = 'gallery');

-- Allow authenticated users to upload/delete
CREATE POLICY "Admin upload gallery" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'gallery' AND auth.uid() IS NOT NULL);

CREATE POLICY "Admin delete gallery" ON storage.objects
  FOR DELETE USING (bucket_id = 'gallery' AND auth.uid() IS NOT NULL);
