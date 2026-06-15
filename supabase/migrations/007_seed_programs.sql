-- =============================================================
-- MUMSA Initiative — Dynamic Programs & Interventions
-- Migration: 007_seed_programs.sql
-- =============================================================

-- Add extra columns to programs if they do not exist
ALTER TABLE programs ADD COLUMN IF NOT EXISTS subprograms text[];
ALTER TABLE programs ADD COLUMN IF NOT EXISTS icon text;
ALTER TABLE programs ADD COLUMN IF NOT EXISTS color text;

-- Clean existing data to avoid conflicts
DELETE FROM programs;

-- Seed all 9 Programs
INSERT INTO programs (id, title, slug, category, description, subprograms, icon, color, order_index, is_published) VALUES
  (
    'd1e1f1a1-b1c1-4123-8123-111111111111',
    'Education, Learning & School Reintegration',
    'education-reintegration',
    'Education & Skills Development',
    'Ensuring Every Child Has Access to Quality Education through school enrollment support, learning kits, and child mentorship.',
    ARRAY[
      'Bring Back to School Project',
      'Empowering Young Minds Initiative',
      'School-Based Mentorship and Child Development Programmes'
    ],
    'BookOpen',
    'primary',
    1,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-222222222222',
    'Technical & Vocational Education (TVET) and Employability',
    'tvet-employability',
    'Education & Skills Development',
    'Building practical, market-driven skills for employment, entrepreneurship, and economic inclusion among youth and women.',
    ARRAY[
      'Fellow Learner Fellowship Programme (FLFP)',
      'TVET & Skills-to-Jobs Partnership Programme',
      'Career Readiness and Employability Workshops'
    ],
    'GraduationCap',
    'secondary',
    2,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-333333333333',
    'Youth Leadership, Entrepreneurship & Economic Empowerment',
    'youth-leadership',
    'Youth Economic Empowerment',
    'Empowering young people to lead change through leadership capacity building, startup incubation, and graduate fellowships.',
    ARRAY[
      'Youth Leadership and Civic Engagement Programme',
      'Youth Innovation and Enterprise Development Programme',
      'Nigeria Jubilee Fellows Programme (NJFP)'
    ],
    'TrendingUp',
    'primary',
    3,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-444444444444',
    'Women''s Rights & Economic Empowerment',
    'womens-rights',
    'Women Empowerment',
    'Advancing gender equality and social inclusion for girls and women through financial literacy, leadership, and policy dialogue.',
    ARRAY[
      'Women''s Economic Empowerment Programme',
      'Women''s Economic Empowerment Policy Dialogue',
      'Girls'' Education and Empowerment Initiative'
    ],
    'Star',
    'secondary',
    4,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-555555555555',
    'Healthcare, Nutrition & Community Health',
    'healthcare-nutrition',
    'Health & Wellbeing',
    'Improving community health outcomes through free medical screenings, maternal support, and hearing health campaigns.',
    ARRAY[
      'Community Medical Outreach Programme',
      'Community Health Education and Nutrition Initiative',
      'Hearing Health and Disability Inclusion Programme'
    ],
    'HeartPulse',
    'primary',
    5,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-666666666666',
    'Mental Health, Psychosocial Support & Rehabilitation',
    'mental-health-rehab',
    'Health & Wellbeing',
    'Strengthening resilience and well-being through rehabilitation education and student mental health support.',
    ARRAY[
      'Psychosocial Rehabilitation and Mental Health Programme',
      'World Rehabilitation Awareness Week Initiative',
      'Student Mental Health Support Programme'
    ],
    'Shield',
    'secondary',
    6,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-777777777777',
    'Climate Action, Environmental Sustainability & Green Innovation',
    'climate-action-resilience',
    'Climate Action & Sustainability',
    'Building climate-resilient communities through renewable green solutions (like SolarRain+) and drought land restoration.',
    ARRAY[
      'SolarRain+ Climate Adaptation Innovation',
      'Land Restoration and Environmental Resilience Programme',
      'Youth Climate Leadership Programme'
    ],
    'Leaf',
    'primary',
    7,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-888888888888',
    'Digital Literacy, Innovation & Online Safety',
    'digital-literacy-safety',
    'Education & Skills Development',
    'Preparing youth and women for the digital future with essential computer skills, tech hackathons, and online safety campaigns.',
    ARRAY[
      'Digital Literacy and Innovation Programme',
      'Digital Safety and Gender Inclusion Initiative',
      'Open Data and Innovation Hackathons'
    ],
    'Globe',
    'secondary',
    8,
    true
  ),
  (
    'd1e1f1a1-b1c1-4123-8123-999999999999',
    'Humanitarian Response & Social Protection',
    'humanitarian-response',
    'Human Rights & Social Inclusion',
    'Supporting vulnerable households, orphans, and underserved populations in times of crisis with emergency social welfare.',
    ARRAY[
      'Community Social Support Initiative',
      'Child Welfare and Protection Programme',
      'Community Resilience and Inclusion Programme'
    ],
    'Award',
    'primary',
    9,
    true
  )
ON CONFLICT (id) DO NOTHING;
