-- =============================================================
-- MUMSA Initiative — Seed Gallery Meetings Data
-- Migration: 012_seed_gallery_meetings.sql
-- Seeds partnership and internal meetings photos in the Media section
-- =============================================================

-- Clean up conflicting records
DELETE FROM gallery WHERE id IN (
  'd0e1f1a1-b1c1-4123-8123-111111111111',
  'd0e1f1a1-b1c1-4123-8123-222222222222',
  'd0e1f1a1-b1c1-4123-8123-333333333333',
  'd0e1f1a1-b1c1-4123-8123-444444444444'
);

-- Seed Gallery
INSERT INTO gallery (id, title, type, url, caption, category, is_published) VALUES
  (
    'd0e1f1a1-b1c1-4123-8123-111111111111',
    'Strategic Tech Partnership Presentation',
    'photo',
    '/gallery/media__1781535908391.jpg',
    'Presentation of technical equipment and identity systems during a partnership engagement.',
    'Partnerships',
    true
  ),
  (
    'd0e1f1a1-b1c1-4123-8123-222222222222',
    'MUMSA Initiative Team Coordination',
    'photo',
    '/gallery/media__1781535908456.jpg',
    'Group photo of MUMSA Initiative core team members and delegates at the CEO conference table.',
    'Internal Meetings',
    true
  ),
  (
    'd0e1f1a1-b1c1-4123-8123-333333333333',
    'Internal Operations and Tech Review',
    'photo',
    '/gallery/media__1781535908494.jpg',
    'MUMSA Initiative team members reviewing database schemas and program platforms.',
    'Internal Meetings',
    true
  ),
  (
    'd0e1f1a1-b1c1-4123-8123-444444444444',
    'Collaborative Coding & Content Session',
    'photo',
    '/gallery/media__1781535908510.jpg',
    'Team members collaborating on operational software frameworks and media content during a work meeting.',
    'Internal Meetings',
    true
  )
ON CONFLICT (id) DO NOTHING;
