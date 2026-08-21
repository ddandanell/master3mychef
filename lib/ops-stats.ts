import { getSql } from './db.js'
import { refreshFactsDaily } from './ops-facts.js'
import { getNamedFunnel } from './ops-funnels.js'
import type { FunnelDropoff, FunnelStep } from './ops-funnels.js'

export type NamedCount = { name: string; n: number }
export type RecentEvent = {
  occurred_at: string
  event_name: string
  page_path: string | null
  service_area: string | null
  lead_ref: string | null
}
export type RecentLead = {
  id: number
  created_at: string
  lead_ref: string | null
  source: string | null
  status: string | null
  stage: string | null
  page_path: string | null
  channel: string | null
  name: string | null
  email: string | null
  phone: string | null
  assigned_to: string | null
  next_action: string | null
  city: string | null
  country: string | null
  guest_count: string | null
  estimated_value_idr: number | null
}

export type PulseSlice = {
  visitors: number
  sessions: number
  bounce_rate: number
  avg_duration_ms: number
  whatsapp: number
  forms: number
  leads: number
}

export type FactRow = {
  day: string
  source: string
  landing_path: string
  visitors: number
  sessions: number
  bounces: number
  page_views: number
  whatsapp: number
  forms: number
  leads: number
  duration_ms: number
  revenue_idr: number
}

export type BookingRow = {
  id: number
  created_at: string
  lead_ref: string | null
  value_idr: number | null
  cost_idr: number | null
  service_area: string | null
  status: string
}

export type OpsSnapshot = {
  generated_at: string
  property: { slug: string; domain: string; country_code: string; region: string | null }
  periods: {
    visitors_today: number
    visitors_7d: number
    visitors_30d: number
    leads_today: number
    leads_7d: number
    leads_30d: number
    whatsapp_today: number
    whatsapp_7d: number
    forms_today: number
    forms_7d: number
    page_views_today: number
    page_views_7d: number
    page_views_30d: number
  }
  counts: {
    visitors: number
    sessions: number
    events: number
    leads: number
    page_views: number
    whatsapp_clicks: number
    form_submits: number
    phone_clicks: number
    bookings: number
    revenue_idr: number
    online_5m: number
  }
  conversion: {
    visitor_to_whatsapp: number
    visitor_to_lead: number
    lead_to_booking: number
  }
  funnel: { step: string; n: number; connected: boolean }[]
  sources: NamedCount[]
  services: NamedCount[]
  cities: NamedCount[]
  countries: NamedCount[]
  devices: NamedCount[]
  browsers: NamedCount[]
  mediums: NamedCount[]
  session_countries: NamedCount[]
  new_users: number
  returning_users: number
  pages: { page_path: string | null; events: number; leads: number }[]
  recent_events: RecentEvent[]
  recent_leads: RecentLead[]
  recommendations: Array<{
    id: number
    created_at: string
    priority: string
    problem: string
    evidence: string | null
    action: string
    expected_impact: string | null
    status: string
    owner: string | null
    page_path: string | null
  }>
  tasks: Array<{ id: number; created_at: string; title: string; status: string; assignee: string | null }>
  changes: Array<{ id: number; created_at: string; change_type: string; summary: string; page_path: string | null }>
  alerts: Array<{ id: number; created_at: string; severity: string; title: string; detail: string | null }>
  connections: {
    postgres: boolean
    collect: boolean
    last_event_at: string | null
    search_console: boolean
    ads: boolean
    ga4: boolean
    whatsapp_inbox: boolean
    bookings: boolean
  }
  pulse: {
    today: PulseSlice
    yesterday: PulseSlice
    d7: PulseSlice
    d30: PulseSlice
  }
  compare: FactRow[]
  bookings_list: BookingRow[]
  funnel_named: FunnelStep[]
  dropoffs: FunnelDropoff[]
  health: {
    events_last_hour: number
    posthog_identity_pct: number
    gsc_last_day: string | null
  }
}

function n(rows: Array<{ n?: number } | undefined>): number {
  return Number(rows[0]?.n ?? 0)
}

function emptyPulse(): PulseSlice {
  return { visitors: 0, sessions: 0, bounce_rate: 0, avg_duration_ms: 0, whatsapp: 0, forms: 0, leads: 0 }
}

function pulseFrom(
  sess: Record<string, number>,
  prefix: string,
  ev: Record<string, number>
): PulseSlice {
  const sessions = Number(sess[`${prefix}_sessions`] ?? 0)
  const bounces = Number(sess[`${prefix}_bounces`] ?? 0)
  return {
    visitors: Number(sess[`${prefix}_visitors`] ?? 0),
    sessions,
    bounce_rate: sessions > 0 ? bounces / sessions : 0,
    avg_duration_ms: Number(sess[`${prefix}_duration`] ?? 0),
    whatsapp: Number(ev[`${prefix}_wa`] ?? 0),
    forms: Number(ev[`${prefix}_forms`] ?? 0),
    leads: Number(ev[`${prefix}_leads`] ?? 0),
  }
}

function isoDay(value: string | Date): string {
  const d = new Date(value)
  return d.toISOString().slice(0, 10)
}

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn()
  } catch {
    return fallback
  }
}

export async function getOpsSnapshot(): Promise<OpsSnapshot> {
  const sql = getSql()
  await refreshFactsDaily().catch((error) => console.error('facts_daily rollup failed:', error))

  const propertyRows = await sql`SELECT slug, domain, country_code, region FROM properties WHERE slug = 'mychef-id' LIMIT 1`
  const property = (propertyRows[0] as OpsSnapshot['property'] | undefined) ?? {
    slug: 'unknown',
    domain: 'mychef.id',
    country_code: 'ID',
    region: 'Bali',
  }

  const [
    visitorRows,
    sessionRows,
    eventTotalRows,
    leadTotalRows,
    byName,
    period,
    sources,
    services,
    cities,
    countries,
    pages,
    recentEvents,
    recentLeads,
    bookingAgg,
    leadPeriods,
    lastEvent,
    online,
    recommendations,
    tasks,
    changes,
    alerts,
  ] = await Promise.all([
    sql`SELECT COUNT(*)::int AS n FROM visitors`,
    sql`SELECT COUNT(*)::int AS n FROM sessions`,
    sql`SELECT COUNT(*)::int AS n FROM events`,
    sql`SELECT COUNT(*)::int AS n FROM leads`,
    sql`SELECT event_name AS name, COUNT(*)::int AS n FROM events GROUP BY 1`,
    sql`
      SELECT
        COUNT(*) FILTER (WHERE occurred_at >= date_trunc('day', now()) AND event_name = 'page_view')::int AS page_views_today,
        COUNT(*) FILTER (WHERE occurred_at >= now() - interval '7 days' AND event_name = 'page_view')::int AS page_views_7d,
        COUNT(*) FILTER (WHERE occurred_at >= now() - interval '30 days' AND event_name = 'page_view')::int AS page_views_30d,
        COUNT(*) FILTER (WHERE occurred_at >= date_trunc('day', now()) AND event_name = 'whatsapp_click')::int AS whatsapp_today,
        COUNT(*) FILTER (WHERE occurred_at >= now() - interval '7 days' AND event_name = 'whatsapp_click')::int AS whatsapp_7d,
        COUNT(*) FILTER (WHERE occurred_at >= date_trunc('day', now()) AND event_name = 'form_submit')::int AS forms_today,
        COUNT(*) FILTER (WHERE occurred_at >= now() - interval '7 days' AND event_name = 'form_submit')::int AS forms_7d,
        COUNT(DISTINCT visitor_id) FILTER (WHERE occurred_at >= date_trunc('day', now()))::int AS visitors_today,
        COUNT(DISTINCT visitor_id) FILTER (WHERE occurred_at >= now() - interval '7 days')::int AS visitors_7d,
        COUNT(DISTINCT visitor_id) FILTER (WHERE occurred_at >= now() - interval '30 days')::int AS visitors_30d
      FROM events
    `,
    sql`SELECT COALESCE(NULLIF(utm_source, ''), 'direct') AS name, COUNT(*)::int AS n FROM sessions GROUP BY 1 ORDER BY 2 DESC LIMIT 12`,
    sql`SELECT COALESCE(NULLIF(service_area, ''), 'unknown') AS name, COUNT(*)::int AS n FROM events GROUP BY 1 ORDER BY 2 DESC LIMIT 12`,
    sql`SELECT COALESCE(NULLIF(city, ''), 'Bali') AS name, COUNT(*)::int AS n FROM leads GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT COALESCE(NULLIF(country, ''), 'ID') AS name, COUNT(*)::int AS n FROM leads GROUP BY 1 ORDER BY 2 DESC`,
    sql`
      SELECT e.page_path,
        COUNT(*)::int AS events,
        COUNT(*) FILTER (WHERE e.event_name IN ('whatsapp_click', 'form_submit'))::int AS leads
      FROM events e
      GROUP BY 1
      ORDER BY 2 DESC
      LIMIT 40
    `,
    sql`
      SELECT e.occurred_at, e.event_name, e.page_path, e.service_area, v.lead_ref
      FROM events e JOIN visitors v ON v.id = e.visitor_id
      ORDER BY e.id DESC LIMIT 50
    `,
    sql`
      SELECT id, created_at, lead_ref, source, status, stage, page_path, channel, name, email, phone,
             assigned_to, next_action, city, country, guest_count, estimated_value_idr
      FROM leads ORDER BY id DESC LIMIT 80
    `,
    safe(
      () => sql`SELECT COUNT(*)::int AS n, COALESCE(SUM(value_idr), 0)::float AS revenue FROM bookings`,
      [{ n: 0, revenue: 0 }]
    ),
    sql`
      SELECT
        COUNT(*) FILTER (WHERE created_at >= date_trunc('day', now()))::int AS leads_today,
        COUNT(*) FILTER (WHERE created_at >= now() - interval '7 days')::int AS leads_7d,
        COUNT(*) FILTER (WHERE created_at >= now() - interval '30 days')::int AS leads_30d
      FROM leads
    `,
    sql`SELECT MAX(occurred_at) AS last_at FROM events`,
    sql`SELECT COUNT(DISTINCT visitor_id)::int AS n FROM events WHERE occurred_at >= now() - interval '5 minutes'`,
    safe(
      () => sql`SELECT id, created_at, priority, problem, evidence, action, expected_impact, status, owner, page_path FROM ops_recommendations ORDER BY id DESC LIMIT 40`,
      []
    ),
    safe(
      () => sql`SELECT id, created_at, title, status, assignee FROM ops_tasks ORDER BY id DESC LIMIT 40`,
      []
    ),
    safe(
      () => sql`SELECT id, created_at, change_type, summary, page_path FROM ops_changes ORDER BY id DESC LIMIT 40`,
      []
    ),
    safe(
      () => sql`SELECT id, created_at, severity, title, detail FROM ops_alerts ORDER BY id DESC LIMIT 40`,
      []
    ),
  ])

  const nameCounts = byName as NamedCount[]
  const pick = (name: string) => nameCounts.find((r) => r.name === name)?.n ?? 0
  const pageViews = pick('page_view')
  const wa = pick('whatsapp_click')
  const forms = pick('form_submit')
  const leadsTotal = n(leadTotalRows as Array<{ n: number }>)
  const bookings = Number((bookingAgg as Array<{ n: number; revenue?: number }>)[0]?.n ?? 0)
  const revenue = Number((bookingAgg as Array<{ n: number; revenue?: number }>)[0]?.revenue ?? 0)
  const p = (period[0] || {}) as Record<string, number>
  const lp = (leadPeriods[0] || {}) as Record<string, number>
  const lastAt = (lastEvent[0] as { last_at?: string } | undefined)?.last_at

  const visitorToWa = pageViews > 0 ? wa / pageViews : 0
  const visitorToLead = pageViews > 0 ? leadsTotal / pageViews : 0
  const leadToBooking = leadsTotal > 0 ? bookings / leadsTotal : 0

  const snapshot: OpsSnapshot = {
    generated_at: new Date().toISOString(),
    property,
    periods: {
      visitors_today: Number(p.visitors_today ?? 0),
      visitors_7d: Number(p.visitors_7d ?? 0),
      visitors_30d: Number(p.visitors_30d ?? 0),
      leads_today: Number(lp.leads_today ?? 0),
      leads_7d: Number(lp.leads_7d ?? 0),
      leads_30d: Number(lp.leads_30d ?? 0),
      whatsapp_today: Number(p.whatsapp_today ?? 0),
      whatsapp_7d: Number(p.whatsapp_7d ?? 0),
      forms_today: Number(p.forms_today ?? 0),
      forms_7d: Number(p.forms_7d ?? 0),
      page_views_today: Number(p.page_views_today ?? 0),
      page_views_7d: Number(p.page_views_7d ?? 0),
      page_views_30d: Number(p.page_views_30d ?? 0),
    },
    counts: {
      visitors: n(visitorRows as Array<{ n: number }>),
      sessions: n(sessionRows as Array<{ n: number }>),
      events: n(eventTotalRows as Array<{ n: number }>),
      leads: leadsTotal,
      page_views: pageViews,
      whatsapp_clicks: wa,
      form_submits: forms,
      phone_clicks: pick('phone_click'),
      bookings,
      revenue_idr: revenue,
      online_5m: n(online as Array<{ n: number }>),
    },
    conversion: {
      visitor_to_whatsapp: visitorToWa,
      visitor_to_lead: visitorToLead,
      lead_to_booking: leadToBooking,
    },
    funnel: [
      { step: 'Visitor', n: pageViews, connected: true },
      { step: 'Service / page', n: pageViews, connected: true },
      { step: 'Quote page', n: (pages as Array<{ page_path: string | null; events: number }>).find((r) => r.page_path === '/quote')?.events ?? 0, connected: true },
      { step: 'WhatsApp / form', n: wa + forms, connected: true },
      { step: 'Lead', n: leadsTotal, connected: true },
      { step: 'Quote sent', n: (recentLeads as RecentLead[]).filter((l) => l.stage === 'quote_sent').length, connected: true },
      { step: 'Booking', n: bookings, connected: bookings > 0 },
      { step: 'Revenue', n: revenue, connected: revenue > 0 },
    ],
    sources: sources as NamedCount[],
    services: services as NamedCount[],
    cities: cities as NamedCount[],
    countries: countries as NamedCount[],
    devices: [],
    browsers: [],
    mediums: [],
    session_countries: [],
    new_users: 0,
    returning_users: 0,
    pages: (pages as Array<{ page_path: string | null; events: number; leads: number }>).map((row) => ({
      page_path: row.page_path,
      events: Number(row.events),
      leads: Number(row.leads),
    })),
    recent_events: (recentEvents as RecentEvent[]).map((row) => ({
      ...row,
      occurred_at: new Date(row.occurred_at).toISOString(),
    })),
    recent_leads: (recentLeads as RecentLead[]).map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
      estimated_value_idr: row.estimated_value_idr == null ? null : Number(row.estimated_value_idr),
    })),
    recommendations: (recommendations as OpsSnapshot['recommendations']).map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
    })),
    tasks: (tasks as OpsSnapshot['tasks']).map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
    })),
    changes: (changes as OpsSnapshot['changes']).map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
    })),
    alerts: (alerts as OpsSnapshot['alerts']).map((row) => ({
      ...row,
      created_at: new Date(row.created_at).toISOString(),
    })),
    connections: {
      postgres: true,
      collect: Boolean(lastAt),
      last_event_at: lastAt ? new Date(lastAt).toISOString() : null,
      search_console: false,
      ads: false,
      ga4: false,
      whatsapp_inbox: false,
      bookings: bookings > 0,
    },
    pulse: { today: emptyPulse(), yesterday: emptyPulse(), d7: emptyPulse(), d30: emptyPulse() },
    compare: [],
    bookings_list: [],
    funnel_named: [],
    dropoffs: [],
    health: { events_last_hour: 0, posthog_identity_pct: 0, gsc_last_day: null },
  }

  const [sessPulseRows, evPulseRows, leadPulseRows, factRows, bookingList, devices, browsers, mediums, sessionCountries, userMix] = await Promise.all([
    sql`
      SELECT
        COUNT(DISTINCT visitor_id) FILTER (WHERE started_at >= date_trunc('day', now()))::int AS today_visitors,
        COUNT(*) FILTER (WHERE started_at >= date_trunc('day', now()))::int AS today_sessions,
        COUNT(*) FILTER (WHERE bounced AND started_at >= date_trunc('day', now()))::int AS today_bounces,
        COALESCE(AVG(duration_ms) FILTER (WHERE started_at >= date_trunc('day', now())), 0)::float AS today_duration,
        COUNT(DISTINCT visitor_id) FILTER (WHERE started_at >= date_trunc('day', now()) - interval '1 day' AND started_at < date_trunc('day', now()))::int AS yesterday_visitors,
        COUNT(*) FILTER (WHERE started_at >= date_trunc('day', now()) - interval '1 day' AND started_at < date_trunc('day', now()))::int AS yesterday_sessions,
        COUNT(*) FILTER (WHERE bounced AND started_at >= date_trunc('day', now()) - interval '1 day' AND started_at < date_trunc('day', now()))::int AS yesterday_bounces,
        COALESCE(AVG(duration_ms) FILTER (WHERE started_at >= date_trunc('day', now()) - interval '1 day' AND started_at < date_trunc('day', now())), 0)::float AS yesterday_duration,
        COUNT(DISTINCT visitor_id) FILTER (WHERE started_at >= now() - interval '7 days')::int AS d7_visitors,
        COUNT(*) FILTER (WHERE started_at >= now() - interval '7 days')::int AS d7_sessions,
        COUNT(*) FILTER (WHERE bounced AND started_at >= now() - interval '7 days')::int AS d7_bounces,
        COALESCE(AVG(duration_ms) FILTER (WHERE started_at >= now() - interval '7 days'), 0)::float AS d7_duration,
        COUNT(DISTINCT visitor_id) FILTER (WHERE started_at >= now() - interval '30 days')::int AS d30_visitors,
        COUNT(*) FILTER (WHERE started_at >= now() - interval '30 days')::int AS d30_sessions,
        COUNT(*) FILTER (WHERE bounced AND started_at >= now() - interval '30 days')::int AS d30_bounces,
        COALESCE(AVG(duration_ms) FILTER (WHERE started_at >= now() - interval '30 days'), 0)::float AS d30_duration
      FROM sessions
    `,
    sql`
      SELECT
        COUNT(*) FILTER (WHERE event_name = 'whatsapp_click' AND occurred_at >= date_trunc('day', now()))::int AS today_wa,
        COUNT(*) FILTER (WHERE event_name = 'form_submit' AND occurred_at >= date_trunc('day', now()))::int AS today_forms,
        COUNT(*) FILTER (WHERE event_name = 'whatsapp_click' AND occurred_at >= date_trunc('day', now()) - interval '1 day' AND occurred_at < date_trunc('day', now()))::int AS yesterday_wa,
        COUNT(*) FILTER (WHERE event_name = 'form_submit' AND occurred_at >= date_trunc('day', now()) - interval '1 day' AND occurred_at < date_trunc('day', now()))::int AS yesterday_forms,
        COUNT(*) FILTER (WHERE event_name = 'whatsapp_click' AND occurred_at >= now() - interval '7 days')::int AS d7_wa,
        COUNT(*) FILTER (WHERE event_name = 'form_submit' AND occurred_at >= now() - interval '7 days')::int AS d7_forms,
        COUNT(*) FILTER (WHERE event_name = 'whatsapp_click' AND occurred_at >= now() - interval '30 days')::int AS d30_wa,
        COUNT(*) FILTER (WHERE event_name = 'form_submit' AND occurred_at >= now() - interval '30 days')::int AS d30_forms
      FROM events
    `,
    sql`
      SELECT
        COUNT(*) FILTER (WHERE created_at >= date_trunc('day', now()))::int AS today_leads,
        COUNT(*) FILTER (WHERE created_at >= date_trunc('day', now()) - interval '1 day' AND created_at < date_trunc('day', now()))::int AS yesterday_leads,
        COUNT(*) FILTER (WHERE created_at >= now() - interval '7 days')::int AS d7_leads,
        COUNT(*) FILTER (WHERE created_at >= now() - interval '30 days')::int AS d30_leads
      FROM leads
    `,
    sql`
      SELECT day, source, landing_path, visitors, sessions, bounces, page_views, whatsapp, forms, leads, duration_ms, revenue_idr
      FROM facts_daily
      WHERE day >= CURRENT_DATE - 14
      ORDER BY day DESC, visitors DESC
    `,
    sql`
      SELECT id, created_at, lead_ref, value_idr, cost_idr, service_area, status
      FROM bookings
      ORDER BY id DESC
      LIMIT 50
    `,
    sql`SELECT COALESCE(NULLIF(device_category, ''), 'unknown') AS name, COUNT(*)::int AS n FROM sessions GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT COALESCE(NULLIF(browser, ''), 'unknown') AS name, COUNT(*)::int AS n FROM sessions GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT COALESCE(NULLIF(utm_medium, ''), 'none') AS name, COUNT(*)::int AS n FROM sessions GROUP BY 1 ORDER BY 2 DESC`,
    sql`SELECT COALESCE(NULLIF(country, ''), 'unknown') AS name, COUNT(*)::int AS n FROM sessions GROUP BY 1 ORDER BY 2 DESC`,
    sql`
      SELECT
        COUNT(*) FILTER (WHERE session_count <= 1)::int AS new_users,
        COUNT(*) FILTER (WHERE session_count > 1)::int AS returning_users
      FROM visitors
    `,
  ]).catch((error) => {
    console.error('ops pulse/compare failed:', error)
    return [[{}], [{}], [{}], [], [], [], [], [], [], [{}]] as const
  })

  const sess = (sessPulseRows[0] || {}) as Record<string, number>
  const ev = {
    ...((evPulseRows[0] || {}) as Record<string, number>),
    ...((leadPulseRows[0] || {}) as Record<string, number>),
  }

  snapshot.pulse = {
    today: pulseFrom(sess, 'today', ev),
    yesterday: pulseFrom(sess, 'yesterday', ev),
    d7: pulseFrom(sess, 'd7', ev),
    d30: pulseFrom(sess, 'd30', ev),
  }
  snapshot.compare = (factRows as FactRow[]).map((row) => ({
    ...row,
    day: isoDay(row.day),
    visitors: Number(row.visitors),
    sessions: Number(row.sessions),
    bounces: Number(row.bounces),
    page_views: Number(row.page_views),
    whatsapp: Number(row.whatsapp),
    forms: Number(row.forms),
    leads: Number(row.leads),
    duration_ms: Number(row.duration_ms),
    revenue_idr: Number(row.revenue_idr),
  }))
  snapshot.bookings_list = (bookingList as BookingRow[]).map((row) => ({
    ...row,
    created_at: new Date(row.created_at).toISOString(),
    value_idr: row.value_idr == null ? null : Number(row.value_idr),
    cost_idr: row.cost_idr == null ? null : Number(row.cost_idr),
  }))
  snapshot.devices = (devices as NamedCount[]) || []
  snapshot.browsers = (browsers as NamedCount[]) || []
  snapshot.mediums = (mediums as NamedCount[]) || []
  snapshot.session_countries = (sessionCountries as NamedCount[]) || []
  snapshot.new_users = Number((userMix as Array<{ new_users?: number }>)[0]?.new_users ?? 0)
  snapshot.returning_users = Number((userMix as Array<{ returning_users?: number }>)[0]?.returning_users ?? 0)

  try {
    const named = await getNamedFunnel()
    snapshot.funnel_named = named.funnel_named
    snapshot.dropoffs = named.dropoffs
  } catch (error) {
    console.error('named funnel failed:', error)
  }

  try {
    const [hourRows, phRows, gscRows] = await Promise.all([
      sql`SELECT COUNT(*)::int AS n FROM events WHERE occurred_at >= now() - interval '1 hour'`,
      sql`
        SELECT
          COUNT(*)::int AS total,
          COUNT(*) FILTER (WHERE posthog_distinct_id IS NOT NULL)::int AS with_ph
        FROM visitors
      `,
      safe(
        () => sql`SELECT MAX(day)::text AS last_day FROM seo_page_query_daily`,
        [{ last_day: null }]
      ),
    ])
    const total = Number(phRows[0]?.total ?? 0)
    const withPh = Number(phRows[0]?.with_ph ?? 0)
    snapshot.health = {
      events_last_hour: Number(hourRows[0]?.n ?? 0),
      posthog_identity_pct: total > 0 ? withPh / total : 0,
      gsc_last_day: (gscRows as Array<{ last_day: string | null }>)[0]?.last_day ?? null,
    }
    snapshot.connections.search_console = Boolean(snapshot.health.gsc_last_day)
  } catch (error) {
    console.error('health block failed:', error)
  }

  return snapshot
}

export const LEAD_STAGES = ['new', 'contacted', 'qualified', 'quote_sent', 'follow_up', 'won', 'lost'] as const
