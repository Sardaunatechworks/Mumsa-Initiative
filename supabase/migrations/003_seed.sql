-- =============================================================
-- MUMSA Initiative — Seed Data
-- Migration: 003_seed.sql
-- Seeds initial impact stats and settings
-- =============================================================

-- Impact Stats (from official MUMSA content)
INSERT INTO impact_stats (label, value, suffix, icon, order_index) VALUES
  ('Beneficiaries Reached',         35000, '+', 'Users',         1),
  ('Children Supported',            23000, '+', 'BookOpen',      2),
  ('Youth & Women Trained',          3500, '+', 'GraduationCap', 3),
  ('Communities Reached',              40, '+', 'MapPin',        4),
  ('Strategic Partnerships',           25, '+', 'Handshake',     5),
  ('Volunteers & Fellows Annually',   350, '+', 'Heart',         6)
ON CONFLICT DO NOTHING;

-- Site Settings
UPDATE settings SET
  site_name     = 'MUMSA Initiative',
  tagline       = 'Empowering Communities for Sustainable Change',
  contact_email = 'mumsainitiative@gmail.com',
  contact_phone = '+2349061313202',
  address       = 'No: 002 Ahmadu Bello Way Ningi, Bauchi State, Nigeria.',
  facebook      = 'https://web.facebook.com/profile.php?id=100089495294944',
  linkedin      = 'https://www.linkedin.com/company/mumsa-initiative/',
  instagram     = 'https://www.instagram.com/mumsainitiativeng/',
  twitter       = 'https://x.com/MumsaInitiative'
WHERE id = 1;
