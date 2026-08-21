import type { VercelRequest, VercelResponse } from '@vercel/node'
import { getSql } from '../lib/db.js'
import { isOpsAuthorized } from '../lib/ops-auth.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  if (!isOpsAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' })

  const ref = typeof req.query.ref === 'string' ? req.query.ref.trim() : ''
  if (!/^MC-[0-9A-Z]{6}$/i.test(ref)) {
    return res.status(400).json({ error: 'Invalid lead_ref' })
  }

  try {
    const sql = getSql()
    const [visitors, sessions, events, leads, bookings] = await Promise.all([
      sql`
        SELECT id, lead_ref, first_seen_at, last_seen_at, posthog_distinct_id, first_source, first_medium, first_landing
        FROM visitors WHERE lead_ref = ${ref} LIMIT 1
      `,
      sql`
        SELECT id, started_at, ended_at, landing_path, referrer, utm_source, utm_medium, utm_campaign,
               click_id, pageview_count, duration_ms, bounced, posthog_session_id, device_category, country, city
        FROM sessions
        WHERE visitor_id = (SELECT id FROM visitors WHERE lead_ref = ${ref} LIMIT 1)
        ORDER BY started_at DESC
      `,
      sql`
        SELECT e.occurred_at, e.event_name, e.page_path, e.service_area, e.metadata
        FROM events e
        JOIN visitors v ON v.id = e.visitor_id
        WHERE v.lead_ref = ${ref}
        ORDER BY e.id DESC
        LIMIT 200
      `,
      sql`
        SELECT id, created_at, source, name, email, phone, subject, message, status, stage,
               page_path, channel, guest_count, city, country, estimated_value_idr
        FROM leads WHERE lead_ref = ${ref} LIMIT 1
      `,
      sql`
        SELECT id, created_at, value_idr, cost_idr, service_area, status, landing_page, channel
        FROM bookings WHERE lead_ref = ${ref} ORDER BY id DESC
      `,
    ])

    const visitor = visitors[0] as
      | { lead_ref: string; posthog_distinct_id: string | null }
      | undefined
    const distinctId = visitor?.posthog_distinct_id || ref
    const host = (process.env.POSTHOG_PROJECT_HOST || 'https://us.posthog.com').replace(/\/$/, '')
    const projectId = process.env.POSTHOG_PROJECT_ID || ''

    return res.status(200).json({
      lead_ref: ref,
      visitor: visitors[0] ?? null,
      sessions,
      events,
      lead: leads[0] ?? null,
      bookings,
      posthog_replay_hint: {
        distinct_id: distinctId,
        url: projectId
          ? `${host}/project/${projectId}/person/${encodeURIComponent(distinctId)}`
          : `${host}/persons`,
      },
    })
  } catch (error) {
    console.error('ops-visitor failed:', error)
    return res.status(500).json({ error: 'Failed to load visitor' })
  }
}
