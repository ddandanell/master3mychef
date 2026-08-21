/**
 * Apply sql/002_command_center.sql one statement at a time (Neon HTTP driver).
 * Usage: npx tsx scripts/migrate-command-center.ts
 */
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { neon } from '@neondatabase/serverless'

function loadLocalEnv() {
  const path = resolve(import.meta.dirname, '..', '.env.local')
  try {
    const text = readFileSync(path, 'utf8')
    for (const line of text.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue
      const eq = trimmed.indexOf('=')
      const key = trimmed.slice(0, eq)
      const value = trimmed.slice(eq + 1)
      if (!process.env[key]) process.env[key] = value
    }
  } catch {
    // .env.local is optional when vars are already in the environment
  }
}

loadLocalEnv()

const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL
if (!url) {
  console.error('Set DATABASE_URL (or DATABASE_URL_UNPOOLED) before migrating.')
  process.exit(1)
}

const sql = neon(url)

await sql`
  CREATE TABLE IF NOT EXISTS properties (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug text NOT NULL UNIQUE,
    domain text NOT NULL UNIQUE,
    country_code text NOT NULL,
    region text,
    timezone text NOT NULL DEFAULT 'UTC',
    created_at timestamptz NOT NULL DEFAULT now()
  )
`
await sql`
  INSERT INTO properties (slug, domain, country_code, region, timezone)
  VALUES ('mychef-id', 'mychef.id', 'ID', 'Bali', 'Asia/Makassar')
  ON CONFLICT (slug) DO NOTHING
`
await sql`
  CREATE TABLE IF NOT EXISTS visitors (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    property_id bigint NOT NULL REFERENCES properties (id),
    lead_ref text NOT NULL UNIQUE,
    anonymous_id text,
    first_seen_at timestamptz NOT NULL DEFAULT now(),
    last_seen_at timestamptz NOT NULL DEFAULT now()
  )
`
await sql`CREATE INDEX IF NOT EXISTS visitors_property_id_idx ON visitors (property_id)`
await sql`
  CREATE TABLE IF NOT EXISTS sessions (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    property_id bigint NOT NULL REFERENCES properties (id),
    visitor_id bigint NOT NULL REFERENCES visitors (id),
    client_session_id text NOT NULL UNIQUE,
    started_at timestamptz NOT NULL DEFAULT now(),
    landing_path text,
    referrer text,
    utm_source text,
    utm_medium text,
    utm_campaign text,
    utm_term text,
    utm_content text,
    click_id text,
    click_id_type text
  )
`
await sql`CREATE INDEX IF NOT EXISTS sessions_visitor_id_idx ON sessions (visitor_id)`
await sql`CREATE INDEX IF NOT EXISTS sessions_property_started_idx ON sessions (property_id, started_at DESC)`
await sql`
  CREATE TABLE IF NOT EXISTS events (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    property_id bigint NOT NULL REFERENCES properties (id),
    visitor_id bigint NOT NULL REFERENCES visitors (id),
    session_id bigint NOT NULL REFERENCES sessions (id),
    occurred_at timestamptz NOT NULL DEFAULT now(),
    event_name text NOT NULL,
    page_path text,
    service_area text,
    metadata jsonb
  )
`
await sql`CREATE INDEX IF NOT EXISTS events_property_occurred_idx ON events (property_id, occurred_at DESC)`
await sql`CREATE INDEX IF NOT EXISTS events_name_occurred_idx ON events (event_name, occurred_at DESC)`
await sql`CREATE INDEX IF NOT EXISTS events_visitor_id_idx ON events (visitor_id)`
await sql`CREATE INDEX IF NOT EXISTS events_page_path_idx ON events (page_path)`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS property_id bigint REFERENCES properties (id)`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS visitor_id bigint REFERENCES visitors (id)`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS lead_ref text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS page_path text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS channel text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS status text`
await sql`ALTER TABLE leads ALTER COLUMN name DROP NOT NULL`
await sql`ALTER TABLE leads ALTER COLUMN email DROP NOT NULL`
await sql`ALTER TABLE leads ALTER COLUMN message DROP NOT NULL`
await sql`CREATE UNIQUE INDEX IF NOT EXISTS leads_lead_ref_uidx ON leads (lead_ref)`
await sql`CREATE INDEX IF NOT EXISTS leads_property_created_idx ON leads (property_id, created_at DESC)`
await sql`CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status)`
await sql`
  UPDATE leads
  SET property_id = (SELECT id FROM properties WHERE slug = 'mychef-id'),
      status = COALESCE(status, 'form')
  WHERE property_id IS NULL
`

const counts = await sql`
  SELECT
    (SELECT COUNT(*)::int FROM properties) AS properties,
    (SELECT COUNT(*)::int FROM visitors) AS visitors,
    (SELECT COUNT(*)::int FROM events) AS events,
    (SELECT COUNT(*)::int FROM leads) AS leads
`
console.log('Command center schema ready.', counts[0])
