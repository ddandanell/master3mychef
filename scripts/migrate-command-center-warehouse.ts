/**
 * Apply sql/004_command_center_warehouse.sql. Usage: npx tsx scripts/migrate-command-center-warehouse.ts
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
      let value = trimmed.slice(eq + 1)
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
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

await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS ended_at timestamptz`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS pageview_count int NOT NULL DEFAULT 0`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS duration_ms bigint NOT NULL DEFAULT 0`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS bounced boolean NOT NULL DEFAULT true`
await sql`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS lead_ref text`
await sql`CREATE INDEX IF NOT EXISTS bookings_lead_ref_idx ON bookings (lead_ref)`
await sql`CREATE INDEX IF NOT EXISTS bookings_created_at_idx ON bookings (created_at DESC)`
await sql`CREATE INDEX IF NOT EXISTS events_session_occurred_idx ON events (session_id, occurred_at)`
await sql`
  CREATE TABLE IF NOT EXISTS facts_daily (
    day date NOT NULL,
    source text NOT NULL DEFAULT 'direct',
    landing_path text NOT NULL DEFAULT '/',
    visitors int NOT NULL DEFAULT 0,
    sessions int NOT NULL DEFAULT 0,
    bounces int NOT NULL DEFAULT 0,
    page_views int NOT NULL DEFAULT 0,
    whatsapp int NOT NULL DEFAULT 0,
    forms int NOT NULL DEFAULT 0,
    leads int NOT NULL DEFAULT 0,
    duration_ms bigint NOT NULL DEFAULT 0,
    revenue_idr numeric NOT NULL DEFAULT 0,
    PRIMARY KEY (day, source, landing_path)
  )
`
await sql`CREATE INDEX IF NOT EXISTS facts_daily_day_idx ON facts_daily (day DESC)`

console.log('Warehouse tables ready.')
