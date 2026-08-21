/**
 * Sync Google Search Console search analytics into seo_page_query_daily.
 *
 * Usage:
 *   npx tsx scripts/sync-gsc-daily.ts
 *   npx tsx scripts/sync-gsc-daily.ts --days=7
 *
 * Auth (first match wins):
 *   GOOGLE_APPLICATION_CREDENTIALS=/path/to/sa.json
 *   GSC_SERVICE_ACCOUNT_JSON=<raw json string>
 *   GOOGLE_SERVICE_ACCOUNT_JSON=<raw json string>
 *
 * Site:
 *   GSC_SITE_URL=sc-domain:mychef.id   (default)
 */
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { neon } from '@neondatabase/serverless'
import { google } from 'googleapis'

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

function credentials() {
  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (path) return JSON.parse(readFileSync(path, 'utf8'))
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON || process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (raw) return JSON.parse(raw)
  return null
}

loadLocalEnv()

const dbUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL || process.env.POSTGRES_URL
if (!dbUrl) {
  console.error('Set DATABASE_URL')
  process.exit(1)
}

const creds = credentials()
if (!creds) {
  console.error(
    'Missing GSC credentials. Set GOOGLE_APPLICATION_CREDENTIALS or GSC_SERVICE_ACCOUNT_JSON.'
  )
  process.exit(1)
}

const siteUrl = process.env.GSC_SITE_URL || 'sc-domain:mychef.id'
const daysArg = process.argv.find((a) => a.startsWith('--days='))
const days = Math.min(28, Math.max(1, Number(daysArg?.split('=')[1] || 3)))

const auth = new google.auth.GoogleAuth({
  credentials: creds,
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
})
const searchconsole = google.searchconsole({ version: 'v1', auth })
const sql = neon(dbUrl)

const propertyRows = await sql`SELECT id FROM properties WHERE slug = 'mychef-id' LIMIT 1`
const propertyId = propertyRows[0]?.id as number | undefined

let upserted = 0
for (let offset = 1; offset <= days; offset++) {
  const day = new Date()
  day.setUTCDate(day.getUTCDate() - offset)
  const dayStr = day.toISOString().slice(0, 10)

  const res = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: dayStr,
      endDate: dayStr,
      dimensions: ['page', 'query'],
      rowLimit: 25000,
    },
  })

  const rows = res.data.rows || []
  for (const row of rows) {
    const page = (row.keys?.[0] || '/').replace(/^https?:\/\/[^/]+/, '') || '/'
    const query = row.keys?.[1] || ''
    const clicks = Number(row.clicks || 0)
    const impressions = Number(row.impressions || 0)
    const ctr = Number(row.ctr || 0)
    const position = Number(row.position || 0)

    await sql`
      INSERT INTO seo_page_query_daily (day, property_id, page, query, clicks, impressions, ctr, position)
      VALUES (
        ${dayStr}::date,
        ${propertyId ?? null},
        ${page.slice(0, 500)},
        ${query.slice(0, 300)},
        ${clicks},
        ${impressions},
        ${ctr},
        ${position}
      )
      ON CONFLICT (day, page, query) DO UPDATE SET
        clicks = EXCLUDED.clicks,
        impressions = EXCLUDED.impressions,
        ctr = EXCLUDED.ctr,
        position = EXCLUDED.position,
        property_id = COALESCE(EXCLUDED.property_id, seo_page_query_daily.property_id)
    `
    upserted++
  }
  console.log(`${dayStr}: ${rows.length} rows`)
}

console.log(`Done. Upserted ${upserted} page×query rows for last ${days} day(s).`)
