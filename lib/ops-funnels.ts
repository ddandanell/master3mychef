import { getSql } from './db.js'

export type FunnelStep = {
  step: string
  event: string
  n: number
  rate_from_prev: number | null
}

export type FunnelDropoff = {
  from: string
  to: string
  lost: number
  loss_rate: number
}

export async function getNamedFunnel(): Promise<{ funnel_named: FunnelStep[]; dropoffs: FunnelDropoff[] }> {
  const sql = getSql()

  const [visitors, service, pricing, quote, leads, qualified, bookings] = await Promise.all([
    sql`
      SELECT COUNT(DISTINCT visitor_id)::int AS n FROM events
      WHERE occurred_at >= now() - interval '30 days'
        AND event_name IN ('session_start', 'page_view', 'first_visit')
    `,
    sql`
      SELECT COUNT(DISTINCT visitor_id)::int AS n FROM events
      WHERE occurred_at >= now() - interval '30 days' AND event_name = 'service_view'
    `,
    sql`
      SELECT COUNT(DISTINCT visitor_id)::int AS n FROM events
      WHERE occurred_at >= now() - interval '30 days'
        AND (event_name = 'pricing_view' OR page_path = '/pricing')
    `,
    sql`
      SELECT COUNT(DISTINCT visitor_id)::int AS n FROM events
      WHERE occurred_at >= now() - interval '30 days'
        AND (event_name = 'quote_step_viewed' OR page_path = '/quote')
    `,
    sql`
      SELECT COUNT(*)::int AS n FROM leads WHERE created_at >= now() - interval '30 days'
    `,
    sql`
      SELECT COUNT(*)::int AS n FROM leads
      WHERE created_at >= now() - interval '30 days'
        AND stage IN ('qualified', 'quote_sent', 'follow_up', 'won')
    `,
    sql`
      SELECT COUNT(*)::int AS n FROM bookings WHERE created_at >= now() - interval '30 days'
    `,
  ])

  const counts = [
    { step: 'Visitors', event: 'session', n: Number(visitors[0]?.n ?? 0) },
    { step: 'Service views', event: 'service_view', n: Number(service[0]?.n ?? 0) },
    { step: 'Pricing views', event: 'pricing_view', n: Number(pricing[0]?.n ?? 0) },
    { step: 'Quote started', event: 'quote_step_viewed', n: Number(quote[0]?.n ?? 0) },
    { step: 'Leads', event: 'lead', n: Number(leads[0]?.n ?? 0) },
    { step: 'Qualified', event: 'qualified', n: Number(qualified[0]?.n ?? 0) },
    { step: 'Bookings', event: 'booking', n: Number(bookings[0]?.n ?? 0) },
  ]

  const funnel_named: FunnelStep[] = counts.map((row, i) => ({
    ...row,
    rate_from_prev: i === 0 || counts[i - 1].n === 0 ? null : row.n / counts[i - 1].n,
  }))

  const dropoffs: FunnelDropoff[] = []
  for (let i = 1; i < counts.length; i++) {
    const prev = counts[i - 1]
    const cur = counts[i]
    const lost = Math.max(0, prev.n - cur.n)
    dropoffs.push({
      from: prev.step,
      to: cur.step,
      lost,
      loss_rate: prev.n > 0 ? lost / prev.n : 0,
    })
  }

  return { funnel_named, dropoffs }
}
