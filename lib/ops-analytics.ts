import { getSql } from './db.js'
import { parseAnalyticsRange } from './ops-analytics-range.js'
import type { AnalyticsRangeInput } from './ops-analytics-range.js'
import { ANALYTICS_METRICS } from '../shared/ops-analytics-contract.js'
import type {
  AnalyticsMetric,
  AnalyticsResponse,
  MetricComparison,
  MetricValues,
} from '../shared/ops-analytics-contract.js'

type RawPeriod = {
  current_visitors?: number
  previous_visitors?: number
  current_sessions?: number
  previous_sessions?: number
  current_bounces?: number
  previous_bounces?: number
  current_duration?: number
  previous_duration?: number
  current_events?: number
  previous_events?: number
  current_page_views?: number
  previous_page_views?: number
  current_whatsapp?: number
  previous_whatsapp?: number
  current_forms?: number
  previous_forms?: number
  current_leads?: number
  previous_leads?: number
  current_bookings?: number
  previous_bookings?: number
  current_revenue?: number
  previous_revenue?: number
}

type TrendRow = { bucket: string | Date } & Partial<MetricValues> & {
    bounces?: number
    duration_sum?: number
  }

function number(value: unknown): number {
  const parsed = Number(value ?? 0)
  return Number.isFinite(parsed) ? parsed : 0
}

function comparison(current: number, previous: number): MetricComparison {
  return {
    current,
    previous,
    delta: current - previous,
    delta_pct: previous === 0 ? (current === 0 ? 0 : null) : (current - previous) / previous,
  }
}

function emptyMetrics(): MetricValues {
  return {
    visitors: 0,
    sessions: 0,
    page_views: 0,
    events: 0,
    bounce_rate: 0,
    avg_duration_ms: 0,
    whatsapp_clicks: 0,
    form_submits: 0,
    leads: 0,
    bookings: 0,
    revenue_idr: 0,
  }
}

function bucketKey(value: string | Date): string {
  return new Date(value).toISOString().slice(0, 10)
}

function mergeTrend(
  sessionRows: TrendRow[],
  eventRows: TrendRow[],
  leadRows: TrendRow[],
  bookingRows: TrendRow[]
): AnalyticsResponse['trend'] {
  const buckets = new Map<string, MetricValues>()
  const get = (value: string | Date) => {
    const key = bucketKey(value)
    const metrics = buckets.get(key) || emptyMetrics()
    buckets.set(key, metrics)
    return metrics
  }

  for (const row of sessionRows) {
    const point = get(row.bucket)
    point.visitors = number(row.visitors)
    point.sessions = number(row.sessions)
    point.bounce_rate = point.sessions > 0 ? number(row.bounces) / point.sessions : 0
    point.avg_duration_ms = point.sessions > 0 ? number(row.duration_sum) / point.sessions : 0
  }
  for (const row of eventRows) {
    const point = get(row.bucket)
    point.events = number(row.events)
    point.page_views = number(row.page_views)
    point.whatsapp_clicks = number(row.whatsapp_clicks)
    point.form_submits = number(row.form_submits)
  }
  for (const row of leadRows) get(row.bucket).leads = number(row.leads)
  for (const row of bookingRows) {
    const point = get(row.bucket)
    point.bookings = number(row.bookings)
    point.revenue_idr = number(row.revenue_idr)
  }

  return [...buckets.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([bucket, metrics]) => ({ bucket, ...metrics }))
}

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    console.error('[ops-analytics] optional query failed:', error)
    return fallback
  }
}

export async function getOpsAnalytics(input: AnalyticsRangeInput): Promise<AnalyticsResponse> {
  const range = parseAnalyticsRange(input)
  const sql = getSql()
  const propertyRows = await sql`SELECT id FROM properties WHERE slug = 'mychef-id' LIMIT 1`
  const propertyId = number(propertyRows[0]?.id)
  if (!propertyId) throw new Error('MyChef analytics property is not configured')

  const [
    sessionPeriodRows,
    eventPeriodRows,
    leadPeriodRows,
    bookingPeriodRows,
    sessionTrendRows,
    eventTrendRows,
    leadTrendRows,
    bookingTrendRows,
    sourceRows,
    landingRows,
    deviceRows,
    inventoryRows,
  ] = await Promise.all([
    sql`
      SELECT
        COUNT(DISTINCT visitor_id) FILTER (
          WHERE started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
        )::int AS current_visitors,
        COUNT(DISTINCT visitor_id) FILTER (
          WHERE started_at >= ${range.compareFrom}::timestamptz AND started_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_visitors,
        COUNT(*) FILTER (
          WHERE started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
        )::int AS current_sessions,
        COUNT(*) FILTER (
          WHERE started_at >= ${range.compareFrom}::timestamptz AND started_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_sessions,
        COUNT(*) FILTER (
          WHERE bounced AND started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
        )::int AS current_bounces,
        COUNT(*) FILTER (
          WHERE bounced AND started_at >= ${range.compareFrom}::timestamptz AND started_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_bounces,
        COALESCE(AVG(duration_ms) FILTER (
          WHERE started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
        ), 0)::float AS current_duration,
        COALESCE(AVG(duration_ms) FILTER (
          WHERE started_at >= ${range.compareFrom}::timestamptz AND started_at < ${range.compareEndExclusive}::timestamptz
        ), 0)::float AS previous_duration
      FROM sessions
      WHERE property_id = ${propertyId}
        AND started_at >= ${range.compareFrom}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
    `,
    sql`
      SELECT
        COUNT(*) FILTER (
          WHERE occurred_at >= ${range.from}::timestamptz AND occurred_at < ${range.endExclusive}::timestamptz
        )::int AS current_events,
        COUNT(*) FILTER (
          WHERE occurred_at >= ${range.compareFrom}::timestamptz AND occurred_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_events,
        COUNT(*) FILTER (
          WHERE event_name = 'page_view' AND occurred_at >= ${range.from}::timestamptz AND occurred_at < ${range.endExclusive}::timestamptz
        )::int AS current_page_views,
        COUNT(*) FILTER (
          WHERE event_name = 'page_view' AND occurred_at >= ${range.compareFrom}::timestamptz AND occurred_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_page_views,
        COUNT(*) FILTER (
          WHERE event_name = 'whatsapp_click' AND occurred_at >= ${range.from}::timestamptz AND occurred_at < ${range.endExclusive}::timestamptz
        )::int AS current_whatsapp,
        COUNT(*) FILTER (
          WHERE event_name = 'whatsapp_click' AND occurred_at >= ${range.compareFrom}::timestamptz AND occurred_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_whatsapp,
        COUNT(*) FILTER (
          WHERE event_name = 'form_submit' AND occurred_at >= ${range.from}::timestamptz AND occurred_at < ${range.endExclusive}::timestamptz
        )::int AS current_forms,
        COUNT(*) FILTER (
          WHERE event_name = 'form_submit' AND occurred_at >= ${range.compareFrom}::timestamptz AND occurred_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_forms
      FROM events
      WHERE property_id = ${propertyId}
        AND occurred_at >= ${range.compareFrom}::timestamptz AND occurred_at < ${range.endExclusive}::timestamptz
    `,
    sql`
      SELECT
        COUNT(*) FILTER (
          WHERE created_at >= ${range.from}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
        )::int AS current_leads,
        COUNT(*) FILTER (
          WHERE created_at >= ${range.compareFrom}::timestamptz AND created_at < ${range.compareEndExclusive}::timestamptz
        )::int AS previous_leads
      FROM leads
      WHERE property_id = ${propertyId}
        AND created_at >= ${range.compareFrom}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
    `,
    safe(
      () => sql`
        SELECT
          COUNT(*) FILTER (
            WHERE created_at >= ${range.from}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
          )::int AS current_bookings,
          COUNT(*) FILTER (
            WHERE created_at >= ${range.compareFrom}::timestamptz AND created_at < ${range.compareEndExclusive}::timestamptz
          )::int AS previous_bookings,
          COALESCE(SUM(value_idr) FILTER (
            WHERE created_at >= ${range.from}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
          ), 0)::float AS current_revenue,
          COALESCE(SUM(value_idr) FILTER (
            WHERE created_at >= ${range.compareFrom}::timestamptz AND created_at < ${range.compareEndExclusive}::timestamptz
          ), 0)::float AS previous_revenue
        FROM bookings
        WHERE property_id = ${propertyId}
          AND created_at >= ${range.compareFrom}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
      `,
      [{}]
    ),
    sql`
      SELECT
        date_trunc(${range.bucket}, started_at AT TIME ZONE 'UTC')::date AS bucket,
        COUNT(DISTINCT visitor_id)::int AS visitors,
        COUNT(*)::int AS sessions,
        COUNT(*) FILTER (WHERE bounced)::int AS bounces,
        COALESCE(SUM(duration_ms), 0)::float AS duration_sum
      FROM sessions
      WHERE property_id = ${propertyId}
        AND started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
      GROUP BY 1 ORDER BY 1
    `,
    sql`
      SELECT
        date_trunc(${range.bucket}, occurred_at AT TIME ZONE 'UTC')::date AS bucket,
        COUNT(*)::int AS events,
        COUNT(*) FILTER (WHERE event_name = 'page_view')::int AS page_views,
        COUNT(*) FILTER (WHERE event_name = 'whatsapp_click')::int AS whatsapp_clicks,
        COUNT(*) FILTER (WHERE event_name = 'form_submit')::int AS form_submits
      FROM events
      WHERE property_id = ${propertyId}
        AND occurred_at >= ${range.from}::timestamptz AND occurred_at < ${range.endExclusive}::timestamptz
      GROUP BY 1 ORDER BY 1
    `,
    sql`
      SELECT date_trunc(${range.bucket}, created_at AT TIME ZONE 'UTC')::date AS bucket, COUNT(*)::int AS leads
      FROM leads
      WHERE property_id = ${propertyId}
        AND created_at >= ${range.from}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
      GROUP BY 1 ORDER BY 1
    `,
    safe(
      () => sql`
        SELECT
          date_trunc(${range.bucket}, created_at AT TIME ZONE 'UTC')::date AS bucket,
          COUNT(*)::int AS bookings,
          COALESCE(SUM(value_idr), 0)::float AS revenue_idr
        FROM bookings
        WHERE property_id = ${propertyId}
          AND created_at >= ${range.from}::timestamptz AND created_at < ${range.endExclusive}::timestamptz
        GROUP BY 1 ORDER BY 1
      `,
      []
    ),
    sql`
      SELECT COALESCE(NULLIF(utm_source, ''), 'direct') AS name, COUNT(*)::int AS n
      FROM sessions
      WHERE property_id = ${propertyId}
        AND started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
      GROUP BY 1 ORDER BY 2 DESC LIMIT 12
    `,
    sql`
      SELECT COALESCE(NULLIF(landing_path, ''), '/') AS name, COUNT(*)::int AS n
      FROM sessions
      WHERE property_id = ${propertyId}
        AND started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
      GROUP BY 1 ORDER BY 2 DESC LIMIT 12
    `,
    sql`
      SELECT COALESCE(NULLIF(device_category, ''), 'unknown') AS name, COUNT(*)::int AS n
      FROM sessions
      WHERE property_id = ${propertyId}
        AND started_at >= ${range.from}::timestamptz AND started_at < ${range.endExclusive}::timestamptz
      GROUP BY 1 ORDER BY 2 DESC LIMIT 12
    `,
    safe(
      () => sql`
        SELECT
          (SELECT COUNT(*)::int FROM events WHERE property_id = ${propertyId}) AS events,
          (SELECT COUNT(*)::int FROM sessions WHERE property_id = ${propertyId}) AS sessions,
          (SELECT COUNT(*)::int FROM visitors WHERE property_id = ${propertyId}) AS visitors,
          (SELECT COUNT(*)::int FROM leads WHERE property_id = ${propertyId}) AS leads,
          (SELECT COUNT(*)::int FROM bookings WHERE property_id = ${propertyId}) AS bookings,
          (SELECT MIN(occurred_at) FROM events WHERE property_id = ${propertyId}) AS first_event_at,
          (SELECT MAX(occurred_at) FROM events WHERE property_id = ${propertyId}) AS last_event_at,
          (
            pg_total_relation_size('events') +
            pg_total_relation_size('sessions') +
            pg_total_relation_size('visitors') +
            pg_total_relation_size('leads') +
            pg_total_relation_size('bookings')
          )::bigint AS database_bytes
      `,
      [{}]
    ),
  ])

  const raw: RawPeriod = {
    ...((sessionPeriodRows[0] || {}) as RawPeriod),
    ...((eventPeriodRows[0] || {}) as RawPeriod),
    ...((leadPeriodRows[0] || {}) as RawPeriod),
    ...((bookingPeriodRows[0] || {}) as RawPeriod),
  }
  const currentSessions = number(raw.current_sessions)
  const previousSessions = number(raw.previous_sessions)
  const current: MetricValues = {
    visitors: number(raw.current_visitors),
    sessions: currentSessions,
    page_views: number(raw.current_page_views),
    events: number(raw.current_events),
    bounce_rate: currentSessions > 0 ? number(raw.current_bounces) / currentSessions : 0,
    avg_duration_ms: number(raw.current_duration),
    whatsapp_clicks: number(raw.current_whatsapp),
    form_submits: number(raw.current_forms),
    leads: number(raw.current_leads),
    bookings: number(raw.current_bookings),
    revenue_idr: number(raw.current_revenue),
  }
  const previous: MetricValues = {
    visitors: number(raw.previous_visitors),
    sessions: previousSessions,
    page_views: number(raw.previous_page_views),
    events: number(raw.previous_events),
    bounce_rate: previousSessions > 0 ? number(raw.previous_bounces) / previousSessions : 0,
    avg_duration_ms: number(raw.previous_duration),
    whatsapp_clicks: number(raw.previous_whatsapp),
    form_submits: number(raw.previous_forms),
    leads: number(raw.previous_leads),
    bookings: number(raw.previous_bookings),
    revenue_idr: number(raw.previous_revenue),
  }

  const summary = Object.fromEntries(
    ANALYTICS_METRICS.map((metric) => [metric, comparison(current[metric], previous[metric])])
  ) as Record<AnalyticsMetric, MetricComparison>

  const inventory = (inventoryRows[0] || {}) as Record<string, unknown>
  const firstEvent = inventory.first_event_at ? new Date(String(inventory.first_event_at)) : null
  const lastEvent = inventory.last_event_at ? new Date(String(inventory.last_event_at)) : null
  const rows = {
    events: number(inventory.events),
    sessions: number(inventory.sessions),
    visitors: number(inventory.visitors),
    leads: number(inventory.leads),
    bookings: number(inventory.bookings),
  }

  return {
    generated_at: new Date().toISOString(),
    range,
    summary,
    trend: mergeTrend(
      sessionTrendRows as TrendRow[],
      eventTrendRows as TrendRow[],
      leadTrendRows as TrendRow[],
      bookingTrendRows as TrendRow[]
    ),
    dimensions: {
      sources: (sourceRows as Array<{ name: string; n: number }>).map((row) => ({ name: row.name, n: number(row.n) })),
      landing_pages: (landingRows as Array<{ name: string; n: number }>).map((row) => ({ name: row.name, n: number(row.n) })),
      devices: (deviceRows as Array<{ name: string; n: number }>).map((row) => ({ name: row.name, n: number(row.n) })),
    },
    inventory: {
      rows,
      total_rows: Object.values(rows).reduce((sum, value) => sum + value, 0),
      database_bytes: inventory.database_bytes == null ? null : number(inventory.database_bytes),
      first_event_at: firstEvent?.toISOString() ?? null,
      last_event_at: lastEvent?.toISOString() ?? null,
      days_collected:
        firstEvent && lastEvent ? Math.floor((lastEvent.getTime() - firstEvent.getTime()) / 86_400_000) + 1 : 0,
    },
  }
}
