-- =============================================================
-- MUMSA Initiative — Redesign Schema Expansion
-- Migration: 004_redesign_schema.sql
-- =============================================================

-- =============================================================
-- SUCCESS STORIES
-- =============================================================
CREATE TABLE IF NOT EXISTS success_stories (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  category     text,
  metrics      text,
  content      text NOT NULL,
  author       text,
  image_url    text,
  order_index  integer DEFAULT 0,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- EVENTS
-- =============================================================
CREATE TABLE IF NOT EXISTS events (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  event_date   date NOT NULL,
  location     text,
  description  text,
  cover_url    text,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- REPORTS
-- =============================================================
CREATE TABLE IF NOT EXISTS reports (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  type         text,
  year         integer,
  file_url     text,
  cover_url    text,
  description  text,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================================

ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Select policies
CREATE POLICY "Allow public select on published success stories" 
  ON success_stories FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public select on published events" 
  ON events FOR SELECT USING (is_published = true);

CREATE POLICY "Allow public select on published reports" 
  ON reports FOR SELECT USING (is_published = true);

-- Admin policies
CREATE POLICY "Allow admin all on success stories" 
  ON success_stories FOR ALL TO authenticated 
  USING (true) WITH CHECK (true);

CREATE POLICY "Allow admin all on events" 
  ON events FOR ALL TO authenticated 
  USING (true) WITH CHECK (true);

CREATE POLICY "Allow admin all on reports" 
  ON reports FOR ALL TO authenticated 
  USING (true) WITH CHECK (true);

-- =============================================================
-- SEED DATA
-- =============================================================

-- Seed success stories
INSERT INTO success_stories (title, category, metrics, content, author, image_url, is_published, order_index) VALUES
  (
    'Empowering Young Girls Through Bring Back to School', 
    'Education', 
    '23,000+ Girls Supported', 
    'Through community mobilization and partner support, MUMSA has successfully reintegrated young girls back to school, providing learning kits and scholarships.',
    'Sulaiman Ashiru',
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80',
    true,
    1
  ),
  (
    'Vocational Training Transforms Youth in Ningi', 
    'TVET', 
    '3,500+ Youth Empowered', 
    'Youth across Ningi are gaining technical and vocational skills that support employment and self-reliance, paving the way for sustainable community development.',
    'Abba Ashiru',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80',
    true,
    2
  )
ON CONFLICT DO NOTHING;

-- Seed reports
INSERT INTO reports (title, type, year, file_url, cover_url, description, is_published) VALUES
  (
    'MUMSA Annual Impact Report 2025',
    'Annual Report',
    2025,
    'https://placeholder.com/annual_report_2025.pdf',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    'Detailed breakdown of the social, educational, and environmental impacts achieved in 2025.',
    true
  ),
  (
    'MUMSA Policy Brief: Youth Skills & Employment in Nigeria',
    'Policy Brief',
    2024,
    'https://placeholder.com/policy_brief_2024.pdf',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    'A policy document outlining the recommendations for strengthening vocational education paths for rural youth.',
    true
  )
ON CONFLICT DO NOTHING;

-- Seed events
INSERT INTO events (title, event_date, location, description, cover_url, is_published) VALUES
  (
    'Annual Community Education Summit 2026',
    '2026-10-15',
    'Ningi, Bauchi State',
    'A gathering of educators, policy makers, and community leaders to discuss strategies for school reintegration.',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80',
    true
  )
ON CONFLICT DO NOTHING;
