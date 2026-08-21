export const ANALYTICS_METRICS = [
  'visitors',
  'sessions',
  'page_views',
  'events',
  'bounce_rate',
  'avg_duration_ms',
  'whatsapp_clicks',
  'form_submits',
  'leads',
  'bookings',
  'revenue_idr',
] as const

export type AnalyticsMetric = (typeof ANALYTICS_METRICS)[number]
export type MetricValues = Record<AnalyticsMetric, number>

export type MetricComparison = {
  current: number
  previous: number
  delta: number
  delta_pct: number | null
}

export type AnalyticsResponse = {
  generated_at: string
  range: {
    from: string
    to: string
    endExclusive: string
    compareFrom: string
    compareTo: string
    compareEndExclusive: string
    days: number
    bucket: 'day' | 'week' | 'month'
  }
  summary: Record<AnalyticsMetric, MetricComparison>
  trend: Array<{ bucket: string } & MetricValues>
  dimensions: {
    sources: Array<{ name: string; n: number }>
    landing_pages: Array<{ name: string; n: number }>
    devices: Array<{ name: string; n: number }>
  }
  inventory: {
    rows: Record<'events' | 'sessions' | 'visitors' | 'leads' | 'bookings', number>
    total_rows: number
    database_bytes: number | null
    first_event_at: string | null
    last_event_at: string | null
    days_collected: number
  }
}
