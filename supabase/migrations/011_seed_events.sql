-- =============================================================
-- MUMSA Initiative — Seed Events Data
-- Migration: 011_seed_events.sql
-- Seeds new upcoming events into the news table (type = 'Event')
-- =============================================================

-- Clean up any conflicting records
DELETE FROM news WHERE slug IN (
  'new-year-2026-impact-hope',
  'world-cancer-day-2026-campaign',
  'zero-tolerance-female-genital-mutilation-2026',
  'ramadan-kareem-2026-message',
  'birthday-fatima-muftau-2026',
  'world-ngo-day-2026',
  'democracy-day-2026',
  'inclusive-governance-ambassadors-project-2026'
);

-- Seed Events
INSERT INTO news (id, title, slug, type, excerpt, content, published_at, cover_url, location, is_published) VALUES
  (
    'c0e1f1a1-b1c1-4123-8123-111111111111',
    'Happy New Year 2026: A Year of Impact and Hope',
    'new-year-2026-impact-hope',
    'Event',
    'MUMSA Initiative welcomes the new year, reaffirming our commitment to inclusive education, accessible healthcare, reproductive health rights, digital literacy, and climate action.',
    'As we step into 2026, MUMSA Initiative is excited to continue working alongside our partners and communities to drive sustainable progress. We are dedicated to scaling our impact across primary healthcare outreach, digital TVET skills programs, women economic empowerment policy dialogue, and green innovations. We thank our volunteers, sponsors, and community members for standing with us to make a lasting difference in Nigeria.',
    '2026-01-01T08:00:00Z',
    '/events/new_year_2026.jpg',
    'Ningi & Bauchi State Communities',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-222222222222',
    'World Cancer Day 2026 Awareness & Screening',
    'world-cancer-day-2026-campaign',
    'Event',
    'Reaffirming our commitment to good health and accessible healthcare for all with cancer awareness, prevention, and early detection.',
    'In observance of World Cancer Day 2026 on February 4th, MUMSA Initiative will host a community medical outreach featuring basic screening, preventative health education sessions, and referrals. Let us work together to raise awareness and support accessible healthcare platforms that save lives through early detection.',
    '2026-02-04T09:00:00Z',
    '/events/world_cancer_day_2026.jpg',
    'Kafin Danyaya Medical Center, Ningi',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-333333333333',
    'Zero Tolerance for Female Genital Mutilation (FGM) Seminar',
    'zero-tolerance-female-genital-mutilation-2026',
    'Event',
    'MUMSA Initiative makes a call to protect the health, rights, and dignity of girls and women, promoting safe and healthy communities.',
    'On February 6th, 2026, we convene youth advocates, community leaders, and healthcare workers to promote awareness against female genital mutilation. Through dialogue and policy advocacy, we strive to build safer environments and uphold women''s rights across Bauchi State.',
    '2026-02-06T10:00:00Z',
    '/events/fgm_zero_tolerance_2026.jpg',
    'Ningi Town Hall',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-444444444444',
    'Ramadan Kareem 2026: Positive Action & Sustainable Change',
    'ramadan-kareem-2026-message',
    'Event',
    'Every positive action today contributes to a better tomorrow. Join MUMSA Initiative in building a stronger, more sustainable future.',
    'As the holy month of Ramadan begins, we encourage everyone to engage in acts of kindness, support vulnerable children and underserved households, and collaborate on building resilient, equitable communities. Let''s use this season to spread peace and make a positive social impact.',
    '2026-03-10T18:00:00Z',
    '/events/ramadan_kareem_2026.jpg',
    'Ningi LG, Bauchi State',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-555555555555',
    'Birthday Celebration: Fatima Muftau (MERL Officer)',
    'birthday-fatima-muftau-2026',
    'Event',
    'Wishing a very happy birthday to our Monitoring, Evaluation, Research & Learning (MERL) Officer, Fatima Muftau!',
    'MUMSA Initiative celebrates our dedicated MERL Officer, Fatima Muftau. We wish her joy, good health, and continued success in all her endeavors. May the year ahead bring new achievements, happiness, and impact. Thank you for your leadership in guiding our data-driven community interventions.',
    '2026-02-15T09:00:00Z',
    '/events/birthday_fatima.jpg',
    'MUMSA Initiative Headquarters',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-666666666666',
    'World NGO Day 2026 Commemoration',
    'world-ngo-day-2026',
    'Event',
    'On World NGO Day, we stand committed to transforming lives, strengthening communities, and creating lasting impact.',
    'MUMSA Initiative joins global civil society in celebrating World NGO Day. We reaffirm our commitment to empowering vulnerable populations, promoting social inclusion, and implementing community-led solutions to development challenges across Nigeria.',
    '2026-02-27T10:00:00Z',
    '/events/world_ngo_day_2026.jpg',
    'Ningi LGA, Bauchi State',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-777777777777',
    'Democracy Day 2026: Knowledge & Skills for Future-Shaping',
    'democracy-day-2026',
    'Event',
    'Democracy is more than voting, it is empowering people with knowledge, skills, and opportunities to shape their own future.',
    'On Democracy Day, MUMSA Initiative celebrates the power of active citizenship. We believe that true democratic development starts with education, youth economic empowerment, and accessible platforms where every community member has a voice.',
    '2026-06-12T08:00:00Z',
    '/events/democracy_day_2026.jpg',
    'Bauchi State, Nigeria',
    true
  ),
  (
    'c0e1f1a1-b1c1-4123-8123-888888888888',
    'Inclusive Governance Ambassadors Project Training',
    'inclusive-governance-ambassadors-project-2026',
    'Event',
    'Spotlight for Transparency and Accountability Initiative in partnership with MUMSA Initiative presents inclusive governance training for young women and PWDs.',
    'Join us for the Inclusive Governance Ambassadors Project: Training Young Women & People with Disabilities (PWDs) as Civic Engagement Champions in Ningi L.G.A., Bauchi State. Supported by the Nigeria Youth Futures Fund, this workshop aims to build civic capacity and promote transparent governance participation.',
    '2026-04-26T10:00:00Z',
    '/events/inclusive_governance_training.jpg',
    'Sen. Bala Muhammad Hall, Ningi LGA',
    true
  )
ON CONFLICT (id) DO NOTHING;
