import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSql } from '../lib/db.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })

  let body: {
    lead_ref?: string
    value_idr?: number
    cost_idr?: number
    service_area?: string
    status?: string
    city?: string
    country?: string
    landing_page?: string
    channel?: string
  }
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as typeof body
  } catch {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  const leadRef = body?.lead_ref?.trim() || ''
  if (!/^MC-[0-9A-Z]{6}$/i.test(leadRef)) {
    return res.status(400).json({ error: 'lead_ref is required (MC-XXXXXX)' })
  }
  const value = Number(body.value_idr)
  if (!Number.isFinite(value) || value < 0) {
    return res.status(400).json({ error: 'value_idr must be a number' })
  }
  const costRaw = Number(body.cost_idr)
  const cost = Number.isFinite(costRaw) ? costRaw : 0
  const status = (body.status || 'confirmed').slice(0, 40)

  try {
    const sql = getSql()
    const leadRows = await sql`
      SELECT id, page_path, channel, city, country FROM leads WHERE lead_ref = ${leadRef} LIMIT 1
    `
    const lead = leadRows[0] as
      | { id: number; page_path: string | null; channel: string | null; city: string | null; country: string | null }
      | undefined
    const propertyRows = await sql`SELECT id FROM properties WHERE slug = 'mychef-id' LIMIT 1`
    const propertyId = propertyRows[0]?.id as number | undefined

    await sql`
      INSERT INTO bookings (
        lead_id, property_id, lead_ref, value_idr, cost_idr, service_area, city, country,
        landing_page, channel, status
      )
      VALUES (
        ${lead?.id ?? null},
        ${propertyId ?? null},
        ${leadRef},
        ${value},
        ${Number.isFinite(cost) ? cost : 0},
        ${body.service_area?.slice(0, 80) ?? null},
        ${body.city?.slice(0, 80) ?? lead?.city ?? null},
        ${body.country?.slice(0, 40) ?? lead?.country ?? 'ID'},
        ${body.landing_page?.slice(0, 500) ?? lead?.page_path ?? null},
        ${body.channel?.slice(0, 80) ?? lead?.channel ?? null},
        ${status}
      )
    `
    if (lead?.id) {
      await sql`UPDATE leads SET stage = 'won' WHERE id = ${lead.id} AND stage IS DISTINCT FROM 'lost'`
    }
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('ops-sales failed:', error)
    return res.status(500).json({ error: 'Failed to save booking' })
  }
}
