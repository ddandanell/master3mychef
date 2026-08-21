import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSql } from '../lib/db.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'
import { LEAD_STAGES } from '../lib/ops-stats.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })

  let body: {
    id?: number
    stage?: string
  }
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as typeof body
  } catch {
    return res.status(400).json({ error: 'Invalid request body' })
  }
  const id = Number(body?.id)
  const stage = body?.stage
  if (!id || !stage || !LEAD_STAGES.includes(stage as (typeof LEAD_STAGES)[number])) {
    return res.status(400).json({ error: 'Invalid id or stage' })
  }

  try {
    const sql = getSql()
    await sql`UPDATE leads SET stage = ${stage}, last_contact_at = now() WHERE id = ${id}`
    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('ops-leads failed:', error)
    return res.status(500).json({ error: 'Update failed' })
  }
}
