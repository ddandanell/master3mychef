/**
 * Apply sql/005_ga_parity.sql. Usage: npx tsx scripts/migrate-ga-parity.ts
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

await sql`ALTER TABLE visitors ADD COLUMN IF NOT EXISTS first_source text`
await sql`ALTER TABLE visitors ADD COLUMN IF NOT EXISTS first_medium text`
await sql`ALTER TABLE visitors ADD COLUMN IF NOT EXISTS first_landing text`
await sql`ALTER TABLE visitors ADD COLUMN IF NOT EXISTS session_count int NOT NULL DEFAULT 0`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS hostname text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS language text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS device_category text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS os_name text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS browser text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS screen text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS country text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS region text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS city text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS referrer_url text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS exit_path text`
await sql`ALTER TABLE sessions ADD COLUMN IF NOT EXISTS engaged boolean NOT NULL DEFAULT false`
await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS page_title text`
await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS page_location text`
await sql`ALTER TABLE events ADD COLUMN IF NOT EXISTS hostname text`
await sql`CREATE INDEX IF NOT EXISTS sessions_country_idx ON sessions (country)`
await sql`CREATE INDEX IF NOT EXISTS sessions_device_idx ON sessions (device_category)`
await sql`CREATE INDEX IF NOT EXISTS sessions_source_medium_idx ON sessions (utm_source, utm_medium)`

console.log('GA-parity columns ready.')
