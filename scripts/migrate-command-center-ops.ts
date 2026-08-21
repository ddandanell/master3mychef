/**
 * Apply sql/003_command_center_ops.sql. Usage: npx tsx scripts/migrate-command-center-ops.ts
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
    /* optional */
  }
}

loadLocalEnv()
const url = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL
if (!url) {
  console.error('Set DATABASE_URL before migrating.')
  process.exit(1)
}
const sql = neon(url)

await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS stage text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS assigned_to text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_contact_at timestamptz`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS next_action text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS guest_count text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS estimated_value_idr numeric`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS city text`
await sql`ALTER TABLE leads ADD COLUMN IF NOT EXISTS country text`
await sql`UPDATE leads SET stage = 'new' WHERE stage IS NULL`
await sql`
  CREATE TABLE IF NOT EXISTS bookings (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    lead_id bigint REFERENCES leads (id),
    property_id bigint REFERENCES properties (id),
    value_idr numeric,
    cost_idr numeric,
    service_area text,
    city text,
    country text,
    landing_page text,
    channel text,
    status text NOT NULL DEFAULT 'confirmed'
  )
`
await sql`
  CREATE TABLE IF NOT EXISTS ops_recommendations (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    priority text NOT NULL,
    problem text NOT NULL,
    evidence text,
    action text NOT NULL,
    expected_impact text,
    status text NOT NULL DEFAULT 'open',
    owner text,
    page_path text,
    result text
  )
`
await sql`
  CREATE TABLE IF NOT EXISTS ops_tasks (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    recommendation_id bigint REFERENCES ops_recommendations (id),
    title text NOT NULL,
    status text NOT NULL DEFAULT 'suggested',
    assignee text,
    result text
  )
`
await sql`
  CREATE TABLE IF NOT EXISTS ops_changes (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    page_path text,
    change_type text NOT NULL,
    summary text NOT NULL,
    actor text
  )
`
await sql`
  CREATE TABLE IF NOT EXISTS ops_alerts (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    severity text NOT NULL,
    title text NOT NULL,
    detail text,
    acknowledged boolean NOT NULL DEFAULT false
  )
`
await sql`
  INSERT INTO ops_alerts (severity, title, detail)
  SELECT 'medium',
    'First-party tracking is live, volume is still mostly test data',
    'Collect and form leads are writing to Neon. GSC, Ads, WhatsApp inbox, and bookings are not connected yet.'
  WHERE NOT EXISTS (SELECT 1 FROM ops_alerts LIMIT 1)
`

console.log('Ops tables ready.')
