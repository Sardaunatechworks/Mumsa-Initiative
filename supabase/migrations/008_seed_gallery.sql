-- =============================================================
-- MUMSA Initiative — Seed Gallery Data
-- Migration: 008_seed_gallery.sql
-- Seeds new photos and galleries in the Media section
-- =============================================================

-- Clean up any conflicting records
DELETE FROM gallery WHERE id IN (
  'a0e1f1a1-b1c1-4123-8123-111111111111',
  'a0e1f1a1-b1c1-4123-8123-222222222222',
  'a0e1f1a1-b1c1-4123-8123-333333333333',
  'a0e1f1a1-b1c1-4123-8123-444444444444',
  'a0e1f1a1-b1c1-4123-8123-555555555555'
);

-- Seed Gallery
INSERT INTO gallery (id, title, type, url, caption, category, is_published) VALUES
  (
    'a0e1f1a1-b1c1-4123-8123-111111111111',
    'Digital Literacy & Computer Assembly Training',
    'photo',
    '/gallery/media__1781527445219.jpg',
    'Participants learning hardware maintenance and system setup under the TVET digital program.',
    'Education & TVET',
    true
  ),
  (
    'a0e1f1a1-b1c1-4123-8123-222222222222',
    'Youth Innovation Challenge Brainstorming',
    'photo',
    '/gallery/media__1781527445277.jpg',
    'Ningi youth mapping out solutions for sustainable agriculture and health food models.',
    'Youth Empowerment',
    true
  ),
  (
    'a0e1f1a1-b1c1-4123-8123-333333333333',
    'Presentation at the Green Futures Hackathon',
    'photo',
    '/gallery/media__1781527445318.jpg',
    'A participant presenting climate adaptation and green technology ideas to fellow learners.',
    'Climate Action & Sustainability',
    true
  ),
  (
    'a0e1f1a1-b1c1-4123-8123-444444444444',
    'Interactive Digital Literacy Session',
    'photo',
    '/gallery/media__1781527445355.jpg',
    'A trainer guiding students through computer-based assessments and software environments.',
    'Education & TVET',
    true
  ),
  (
    'a0e1f1a1-b1c1-4123-8123-555555555555',
    'MUMSA Initiative & TEDA Foundation Coordination',
    'photo',
    '/gallery/media__1781527445391.jpg',
    'Team members and representatives of MUMSA Initiative and TEDA Foundation during a strategic coordination visit.',
    'Partnerships',
    true
  )
ON CONFLICT (id) DO NOTHING;
