/**
 * Apply sql/006_backend_motor.sql + sql/007_seo_page_query_daily.sql
 * Usage: npx tsx scripts/migrate-backend-motor.ts
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

await sql`ALTER TABLE visitors ADD COLUMN IF NOT EXISTS posthog_distinct_id text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS posthog_session_id text`
await sql`CREATE INDEX IF NOT EXISTS events_name_occurred_idx ON events (event_name, occurred_at DESC)`
await sql`CREATE INDEX IF NOT EXISTS visitors_posthog_distinct_idx ON visitors (posthog_distinct_id)`
await sql`
  CREATE TABLE IF NOT EXISTS ops_experiments (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    flag_key text NOT NULL,
    variants jsonb,
    hypothesis text NOT NULL,
    started_at timestamptz,
    ended_at timestamptz,
    status text NOT NULL DEFAULT 'running',
    result_summary text,
    owner text
  )
`
await sql`CREATE INDEX IF NOT EXISTS ops_experiments_status_idx ON ops_experiments (status)`
await sql`
  CREATE TABLE IF NOT EXISTS seo_page_query_daily (
    day date NOT NULL,
    property_id bigint REFERENCES properties (id),
    page text NOT NULL DEFAULT '/',
    query text NOT NULL DEFAULT '',
    clicks int NOT NULL DEFAULT 0,
    impressions int NOT NULL DEFAULT 0,
    ctr numeric,
    position numeric,
    PRIMARY KEY (day, page, query)
  )
`
await sql`CREATE INDEX IF NOT EXISTS seo_page_query_daily_day_idx ON seo_page_query_daily (day DESC)`
await sql`CREATE INDEX IF NOT EXISTS seo_page_query_daily_page_idx ON seo_page_query_daily (page)`

console.log('Backend motor schema ready.')
