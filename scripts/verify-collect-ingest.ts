/**
 * One-shot Phase 1 ingest check. Loads .env.local.
 * Usage: npx tsx scripts/verify-collect-ingest.ts
 */
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { neon } from '@neondatabase/serverless'
import { ingestCollectEvent } from '../lib/ingest.ts'

function loadLocalEnv() {
  const path = resolve(import.meta.dirname, '..', '.env.local')
  const text = readFileSync(path, 'utf8')
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue
    const eq = trimmed.indexOf('=')
    const key = trimmed.slice(0, eq)
    const value = trimmed.slice(eq + 1)
    if (!process.env[key]) process.env[key] = value
  }
}

loadLocalEnv()

const ref = 'MC-A2B3C4'
const session = '11111111-1111-4111-8111-111111111111'

await ingestCollectEvent({
  event_name: 'page_view',
  lead_ref: ref,
  session_id: session,
  page_path: '/',
  service_area: 'homepage',
})
await ingestCollectEvent({
  event_name: 'whatsapp_click',
  lead_ref: ref,
  session_id: session,
  page_path: '/quote',
  source: 'phase1-verify',
  service_area: 'private-chef',
})

const sql = neon(process.env.DATABASE_URL || process.env.POSTGRES_URL || '')
const rows = await sql`
  SELECT l.lead_ref, l.status, e.event_name, e.page_path
  FROM leads l
  JOIN visitors v ON v.id = l.visitor_id
  JOIN events e ON e.visitor_id = v.id
  WHERE l.lead_ref = ${ref}
  ORDER BY e.id
`
if (rows.length < 2) {
  console.error('VERIFY_FAIL', rows)
  process.exit(1)
}
const names = rows.map((r) => r.event_name)
if (!names.includes('page_view') || !names.includes('whatsapp_click')) {
  console.error('VERIFY_FAIL events', names)
  process.exit(1)
}
if (rows.some((r) => r.lead_ref !== ref)) {
  console.error('VERIFY_FAIL lead_ref mismatch')
  process.exit(1)
}
console.log('VERIFY_OK', { lead_ref: ref, events: names, status: rows[0]?.status })
