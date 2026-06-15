-- =============================================================
-- MUMSA Initiative — Seed More Gallery Data
-- Migration: 010_seed_more_gallery.sql
-- Seeds five additional photos in the Media section
-- =============================================================

-- Clean up conflicting records
DELETE FROM gallery WHERE id IN (
  'b0e1f1a1-b1c1-4123-8123-111111111111',
  'b0e1f1a1-b1c1-4123-8123-222222222222',
  'b0e1f1a1-b1c1-4123-8123-333333333333',
  'b0e1f1a1-b1c1-4123-8123-444444444444',
  'b0e1f1a1-b1c1-4123-8123-555555555555'
);

-- Seed Gallery
INSERT INTO gallery (id, title, type, url, caption, category, is_published) VALUES
  (
    'b0e1f1a1-b1c1-4123-8123-111111111111',
    'Stakeholder Engagement Workshop',
    'photo',
    '/gallery/media__1781531467213.jpg',
    'Community leaders, youth representatives, and project coordinators discussing regional development goals.',
    'Partnerships',
    true
  ),
  (
    'b0e1f1a1-b1c1-4123-8123-222222222222',
    'Advocacy and Digital Rights Presentation',
    'photo',
    '/gallery/media__1781531467243.jpg',
    'A stakeholder presenting during the Digital Rights Academy and leadership workshop.',
    'Youth Empowerment',
    true
  ),
  (
    'b0e1f1a1-b1c1-4123-8123-333333333333',
    'MUMSA Initiative Policy Dialogue Seminar',
    'photo',
    '/gallery/media__1781531467275.jpg',
    'A broad stakeholder engagement session convening partners, policymakers, and civic leaders.',
    'Partnerships',
    true
  ),
  (
    'b0e1f1a1-b1c1-4123-8123-444444444444',
    'Strategic Planning and Focus Group Review',
    'photo',
    '/gallery/media__1781531467345.jpg',
    'Collaborators and team members reviewing project implementation plans and focus area targets.',
    'Partnerships',
    true
  ),
  (
    'b0e1f1a1-b1c1-4123-8123-555555555555',
    'Capacity Building Workshop Working Group',
    'photo',
    '/gallery/media__1781531467357.jpg',
    'Participants working on group assignments during the youth leadership and civic training workshop.',
    'Youth Empowerment',
    true
  )
ON CONFLICT (id) DO NOTHING;
