-- =============================================================
-- MUMSA Initiative — Target Demographics / Focus Areas
-- Migration: 006_focus_areas.sql
-- =============================================================

CREATE TABLE IF NOT EXISTS focus_areas (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  description  text,
  image_url    text,
  border       text DEFAULT 'card-green-top',
  order_index  integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE focus_areas ENABLE ROW LEVEL SECURITY;

-- Select policies
CREATE POLICY "Allow public select on published focus areas" 
  ON focus_areas FOR SELECT USING (is_published = true);

-- Admin policies
CREATE POLICY "Allow admin all on focus areas" 
  ON focus_areas FOR ALL TO authenticated 
  USING (true) WITH CHECK (true);

-- Seed Focus Areas
INSERT INTO focus_areas (title, description, image_url, border, order_index, is_published) VALUES
  (
    'Women',
    'Unlocking economic independence, leadership potential, and access to financial systems for mothers and young girls.',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80',
    'card-green-top',
    1,
    true
  ),
  (
    'Youth',
    'Equipping young minds with technical, vocational, digital, and entrepreneurship capabilities to tackle unemployment.',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
    'card-blue-top',
    2,
    true
  ),
  (
    'Children',
    'Supporting basic education access, nutritional support, and safety guidelines for vulnerable and out-of-school kids.',
    'https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80',
    'card-black-top',
    3,
    true
  ),
  (
    'Underserved Communities',
    'Strengthening health systems, environmental climate resilience, and infrastructure inside marginalized rural areas.',
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
    'card-green-top',
    4,
    true
  )
ON CONFLICT DO NOTHING;
