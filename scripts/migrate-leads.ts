/**
 * Create the leads table on Neon. Reads DATABASE_URL from the environment.
 * Usage: npx tsx scripts/migrate-leads.ts
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
  CREATE TABLE IF NOT EXISTS leads (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL DEFAULT now(),
    source text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text,
    subject text,
    message text NOT NULL,
    metadata jsonb
  )
`
await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`
await sql`CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email)`
await sql`CREATE INDEX IF NOT EXISTS leads_source_idx ON leads (source)`

const rows = await sql`SELECT COUNT(*)::int AS n FROM leads`
console.log(`Leads table ready. Current rows: ${rows[0]?.n ?? 0}`)
