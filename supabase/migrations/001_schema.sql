-- =============================================================
-- MUMSA Initiative — Database Schema
-- Migration: 001_schema.sql
-- Run in Supabase SQL Editor
-- =============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================
-- PROFILES (extends auth.users)
-- =============================================================
CREATE TABLE IF NOT EXISTS profiles (
  id          uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email       text,
  full_name   text,
  role        text DEFAULT 'admin',
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

-- =============================================================
-- PROGRAMS
-- =============================================================
CREATE TABLE IF NOT EXISTS programs (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  slug         text UNIQUE,
  category     text,
  description  text,
  objectives   text,
  activities   text,
  outcomes     text,
  cover_url    text,
  order_index  integer DEFAULT 0,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- PROJECTS
-- =============================================================
CREATE TABLE IF NOT EXISTS projects (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  slug         text UNIQUE,
  donor        text,
  budget       text,
  location     text,
  duration     text,
  status       text DEFAULT 'Ongoing',
  description  text,
  objectives   text,
  activities   text,
  results      text,
  cover_url    text,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- IMPACT STATS
-- =============================================================
CREATE TABLE IF NOT EXISTS impact_stats (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label       text NOT NULL,
  value       bigint NOT NULL,
  suffix      text DEFAULT '',
  icon        text,
  description text,
  order_index integer DEFAULT 0,
  created_at  timestamptz DEFAULT now(),
  updated_at  timestamptz DEFAULT now()
);

-- =============================================================
-- TEAM MEMBERS (leadership, board, advisory, staff, volunteers)
-- =============================================================
CREATE TABLE IF NOT EXISTS team_members (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL,
  role         text NOT NULL,
  category     text DEFAULT 'staff',
  bio          text,
  photo_url    text,
  linkedin_url text,
  twitter_url  text,
  order_index  integer DEFAULT 0,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- PARTNERS
-- =============================================================
CREATE TABLE IF NOT EXISTS partners (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name         text NOT NULL,
  category     text,
  country      text,
  description  text,
  website      text,
  logo_url     text,
  order_index  integer DEFAULT 0,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- PUBLICATIONS / RESOURCES
-- =============================================================
CREATE TABLE IF NOT EXISTS publications (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  type         text,
  year         integer,
  description  text,
  file_url     text,
  cover_url    text,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- NEWS & EVENTS
-- =============================================================
CREATE TABLE IF NOT EXISTS news (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL,
  slug         text UNIQUE,
  type         text DEFAULT 'News',
  excerpt      text,
  content      text,
  published_at timestamptz,
  cover_url    text,
  location     text,
  is_published boolean DEFAULT false,
  created_at   timestamptz DEFAULT now(),
  updated_at   timestamptz DEFAULT now()
);

-- =============================================================
-- GALLERY
-- =============================================================
CREATE TABLE IF NOT EXISTS gallery (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text,
  type        text DEFAULT 'photo',
  url         text NOT NULL,
  caption     text,
  category    text,
  is_published boolean DEFAULT true,
  created_at  timestamptz DEFAULT now()
);

-- =============================================================
-- CONTACTS (form submissions)
-- =============================================================
CREATE TABLE IF NOT EXISTS contacts (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text NOT NULL,
  email      text NOT NULL,
  phone      text,
  subject    text,
  message    text NOT NULL,
  is_read    boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- =============================================================
-- VOLUNTEERS
-- =============================================================
CREATE TABLE IF NOT EXISTS volunteers (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  email       text NOT NULL,
  phone       text,
  area        text,
  message     text,
  status      text DEFAULT 'pending',
  created_at  timestamptz DEFAULT now()
);

-- =============================================================
-- DONATIONS (records only — no live payment gateway)
-- =============================================================
CREATE TABLE IF NOT EXISTS donations (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name   text,
  donor_email  text,
  amount       numeric,
  currency     text DEFAULT 'NGN',
  type         text DEFAULT 'one-time',
  purpose      text,
  reference    text,
  status       text DEFAULT 'pending',
  created_at   timestamptz DEFAULT now()
);

-- =============================================================
-- SETTINGS
-- =============================================================
CREATE TABLE IF NOT EXISTS settings (
  id              integer PRIMARY KEY DEFAULT 1,
  site_name       text DEFAULT 'MUMSA Initiative',
  tagline         text,
  contact_email   text,
  contact_phone   text,
  address         text,
  facebook        text,
  linkedin        text,
  instagram       text,
  twitter         text,
  updated_at      timestamptz DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Insert default settings row
INSERT INTO settings (id) VALUES (1) ON CONFLICT (id) DO NOTHING;
