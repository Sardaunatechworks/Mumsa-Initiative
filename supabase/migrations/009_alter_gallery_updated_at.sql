-- =============================================================
-- MUMSA Initiative — Alter Gallery Schema
-- Migration: 009_alter_gallery_updated_at.sql
-- Adds updated_at column to gallery table for schema cache consistency
-- =============================================================

ALTER TABLE gallery ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();
