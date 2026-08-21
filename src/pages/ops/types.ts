export type NamedCount = { name: string; n: number }
export { ANALYTICS_METRICS } from '../../../shared/ops-analytics-contract'
export type { AnalyticsMetric, AnalyticsResponse } from '../../../shared/ops-analytics-contract'

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
  funnel_named?: FunnelStep[]
  dropoffs?: FunnelDropoff[]
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
  recent_events: Array<{
    occurred_at: string
    event_name: string
    page_path: string | null
    service_area: string | null
    lead_ref: string | null
  }>
  recent_leads: Array<{
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
  }>
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
  health?: {
    events_last_hour: number
    posthog_identity_pct: number
    gsc_last_day: string | null
  }
}

export type VisitorFile = {
  lead_ref: string
  visitor: {
    first_seen_at: string
    last_seen_at: string
    posthog_distinct_id?: string | null
  } | null
  sessions: Array<{
    started_at: string
    landing_path: string | null
    utm_source: string | null
    duration_ms: number
    pageview_count: number
    bounced: boolean
    posthog_session_id?: string | null
  }>
  events: Array<{
    occurred_at: string
    event_name: string
    page_path: string | null
    service_area: string | null
    metadata: unknown
  }>
  lead: {
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    stage: string | null
    source: string | null
  } | null
  bookings: Array<{ value_idr: number | null; status: string; created_at: string }>
  posthog_replay_hint?: { distinct_id: string; url: string }
}

export type ExperimentRow = {
  id: number
  created_at: string
  flag_key: string
  hypothesis: string
  status: string
  result_summary: string | null
  owner: string | null
}

export const TAXONOMY_CORE = [
  'page_view',
  'session_start',
  'first_visit',
  'scroll_depth',
  'time_on_page',
  'page_heartbeat',
  'cta_click',
  'outbound_click',
  'file_download',
  'whatsapp_click',
  'phone_click',
  'form_submit',
  'session_end',
  'view_search_results',
] as const

export const TAXONOMY_BUSINESS = [
  'form_start',
  'form_abandon',
  'quote_step_viewed',
  'quote_submitted',
  'quote_addon_selected',
  'exit_intent_shown',
  'concierge_opened',
  'service_view',
  'pricing_view',
  'menu_view',
] as const
