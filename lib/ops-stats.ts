import { getSql } from './db.js'

export type EventCount = { event_name: string; n: number }
export type LeadStatusCount = { status: string; n: number }
export type RecentEvent = {
  occurred_at: string
  event_name: string
  page_path: string | null
  service_area: string | null
  lead_ref: string | null
}
export type RecentLead = {
  created_at: string
  lead_ref: string | null
  source: string | null
  status: string | null
  page_path: string | null
  channel: string | null
  name: string | null
}
export type TopPage = { page_path: string | null; n: number }

export type OpsSnapshot = {
  generated_at: string
  property: { slug: string; domain: string; country_code: string; region: string | null }
  counts: {
    visitors: number
    sessions: number
    events: number
    leads: number
    page_views: number
    whatsapp_clicks: number
    form_submits: number
    phone_clicks: number
  }
  events_by_name: EventCount[]
  leads_by_status: LeadStatusCount[]
  top_pages: TopPage[]
  recent_events: RecentEvent[]
  recent_leads: RecentLead[]
}

function num(rows: Array<{ n: number } | undefined>): number {
  return Number(rows[0]?.n ?? 0)
}

function countNamed(rows: EventCount[], name: string): number {
  return rows.find((r) => r.event_name === name)?.n ?? 0
}

export async function getOpsSnapshot(): Promise<OpsSnapshot> {
  const sql = getSql()

  const [propertyRows, visitorRows, sessionRows, eventTotalRows, leadTotalRows, byName, byStatus, topPages, recentEvents, recentLeads] =
    await Promise.all([
      sql`SELECT slug, domain, country_code, region FROM properties WHERE slug = 'mychef-id' LIMIT 1`,
      sql`SELECT COUNT(*)::int AS n FROM visitors`,
      sql`SELECT COUNT(*)::int AS n FROM sessions`,
      sql`SELECT COUNT(*)::int AS n FROM events`,
      sql`SELECT COUNT(*)::int AS n FROM leads`,
      sql`SELECT event_name, COUNT(*)::int AS n FROM events GROUP BY 1 ORDER BY 2 DESC`,
      sql`SELECT COALESCE(status, 'unknown') AS status, COUNT(*)::int AS n FROM leads GROUP BY 1 ORDER BY 2 DESC`,
      sql`SELECT page_path, COUNT(*)::int AS n FROM events GROUP BY 1 ORDER BY 2 DESC LIMIT 15`,
      sql`
        SELECT e.occurred_at, e.event_name, e.page_path, e.service_area, v.lead_ref
        FROM events e
        JOIN visitors v ON v.id = e.visitor_id
        ORDER BY e.id DESC
        LIMIT 40
      `,
      sql`
        SELECT created_at, lead_ref, source, status, page_path, channel, name
        FROM leads
        ORDER BY id DESC
        LIMIT 40
      `,
    ])

  const eventsByName = byName as EventCount[]
  const property = propertyRows[0] as OpsSnapshot['property'] | undefined

  return {
    generated_at: new Date().toISOString(),
    property: property ?? { slug: 'unknown', domain: 'mychef.id', country_code: 'ID', region: 'Bali' },
    counts: {
      visitors: num(visitorRows as Array<{ n: number }>),
      sessions: num(sessionRows as Array<{ n: number }>),
      events: num(eventTotalRows as Array<{ n: number }>),
      leads: num(leadTotalRows as Array<{ n: number }>),
      page_views: countNamed(eventsByName, 'page_view'),
      whatsapp_clicks: countNamed(eventsByName, 'whatsapp_click'),
      form_submits: countNamed(eventsByName, 'form_submit'),
      phone_clicks: countNamed(eventsByName, 'phone_click'),
    },
    events_by_name: eventsByName,
    leads_by_status: byStatus as LeadStatusCount[],
    top_pages: topPages as TopPage[],
    recent_events: (recentEvents as RecentEvent[]).map((row) => ({
      ...row,
      occurred_at: new Date(row.occurred_at).toISOString(),
    })),
    recent_leads: (recentLeads as RecentLead[]).map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
    })),
  }
}
