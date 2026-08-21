import { shouldExcludeFromAnalytics } from './analytics-privacy'
import { getAttribution, getLeadRef } from './attribution'
import { getPostHogIds, identifyLeadRef } from './posthog'

const SESSION_KEY = 'mychef-session-id'
const SESSION_AT_KEY = 'mychef-session-at'
const FIRST_VISIT_KEY = 'mychef-first-visit'
const IDLE_MS = 30 * 60 * 1000
const STRIP_QUERY = /^(email|e-mail|phone|tel|name|token|password|code|ref_code)$/i

export type FirstPartyEventName =
  | 'page_view'
  | 'whatsapp_click'
  | 'form_submit'
  | 'phone_click'
  | 'scroll_depth'
  | 'time_on_page'
  | 'page_heartbeat'
  | 'cta_click'
  | 'session_end'
  | 'session_start'
  | 'first_visit'
  | 'outbound_click'
  | 'file_download'
  | 'view_search_results'
  | 'user_engagement'
  | 'form_start'
  | 'form_abandon'
  | 'quote_step_viewed'
  | 'quote_submitted'
  | 'quote_addon_selected'
  | 'exit_intent_shown'
  | 'concierge_opened'
  | 'service_view'
  | 'pricing_view'
  | 'menu_view'

export function getClientSessionId(): string {
  return sessionState().id
}

function sessionState(): { id: string; started: boolean } {
  const fallback = () =>
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `s-${Date.now()}-${Math.random().toString(36).slice(2)}`

  try {
    const at = Number(sessionStorage.getItem(SESSION_AT_KEY) || 0)
    let id = sessionStorage.getItem(SESSION_KEY)
    let started = false
    if (!id || Date.now() - at > IDLE_MS) {
      id = fallback()
      sessionStorage.setItem(SESSION_KEY, id)
      started = true
    }
    sessionStorage.setItem(SESSION_AT_KEY, String(nowSafe()))
    return { id, started }
  } catch {
    return { id: fallback(), started: true }
  }
}

function nowSafe() {
  return Date.now()
}

function attributionFields() {
  const attribution = getAttribution()
  return {
    landing_path: attribution?.landingPath,
    utm_source: attribution?.utm_source,
    utm_medium: attribution?.utm_medium,
    utm_campaign: attribution?.utm_campaign,
    utm_term: attribution?.utm_term,
    utm_content: attribution?.utm_content,
    click_id: attribution?.clickId,
    click_id_type: attribution?.clickIdType,
    channel: attribution?.clickId ? 'paid' : attribution?.utm_source || 'direct',
  }
}

function safeSearch(search: string): string {
  try {
    const params = new URLSearchParams(search)
    for (const key of [...params.keys()]) {
      if (STRIP_QUERY.test(key)) params.delete(key)
    }
    const next = params.toString()
    return next ? `?${next}` : ''
  } catch {
    return ''
  }
}

function contextFields() {
  let referrerHost = ''
  let referrerUrl = ''
  try {
    if (document.referrer) {
      const ref = new URL(document.referrer)
      referrerHost = ref.hostname
      referrerUrl = `${ref.origin}${ref.pathname}${safeSearch(ref.search)}`.slice(0, 500)
    }
  } catch {
    referrerHost = ''
  }

  return {
    page_title: document.title.slice(0, 300),
    page_location: `${window.location.pathname}${safeSearch(window.location.search)}`.slice(0, 500),
    hostname: window.location.hostname.slice(0, 120),
    language: (navigator.language || '').slice(0, 40),
    screen: `${window.screen.width}x${window.screen.height}`,
    referrer: referrerHost,
    referrer_url: referrerUrl,
  }
}

/** Fields to attach to /api/send-email so the lead row shares the visitor ref. */
export function formLeadFields() {
  if (typeof window === 'undefined') {
    return { lead_ref: undefined, page_path: undefined, channel: undefined }
  }
  return {
    lead_ref: getLeadRef(),
    page_path: window.location.pathname,
    channel: attributionFields().channel,
  }
}

function sendBody(eventName: FirstPartyEventName, extra?: {
  source?: string
  service_area?: string
  page_path?: string
  metadata?: Record<string, unknown>
}) {
  const session = sessionState()
  const leadRef = getLeadRef()
  identifyLeadRef(leadRef)
  const ph = getPostHogIds()

  return JSON.stringify({
    event_name: eventName,
    lead_ref: leadRef,
    session_id: session.id,
    page_path: extra?.page_path || window.location.pathname,
    service_area: extra?.service_area,
    source: extra?.source,
    metadata: extra?.metadata,
    posthog_distinct_id: ph.distinctId || leadRef,
    posthog_session_id: ph.sessionId,
    ...contextFields(),
    ...attributionFields(),
  })
}

function postCollect(body: string) {
  const blob = new Blob([body], { type: 'application/json' })
  if (typeof navigator.sendBeacon === 'function' && navigator.sendBeacon('/api/collect', blob)) {
    return
  }
  void fetch('/api/collect', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  })
}

/**
 * First-party event to Neon. Never throws. Uses sendBeacon/keepalive so a
 * WhatsApp app handoff does not cancel the write the way GA4 fetch can.
 */
export function collectFirstParty(
  eventName: FirstPartyEventName,
  extra?: { source?: string; service_area?: string; page_path?: string; metadata?: Record<string, unknown> }
): void {
  if (typeof window === 'undefined') return
  if (window.location.pathname.startsWith('/ops')) return
  if (shouldExcludeFromAnalytics()) return

  try {
    const session = sessionState()
    if (session.started && eventName !== 'session_start' && eventName !== 'first_visit') {
      postCollect(sendBody('session_start', extra))
      try {
        if (!localStorage.getItem(FIRST_VISIT_KEY)) {
          localStorage.setItem(FIRST_VISIT_KEY, '1')
          postCollect(sendBody('first_visit', extra))
        }
      } catch {
        /* private mode */
      }
    }

    const search = new URLSearchParams(window.location.search)
    const q = search.get('q') || search.get('query')
    if (eventName === 'page_view' && q) {
      postCollect(sendBody('view_search_results', { ...extra, metadata: { search_term: q.slice(0, 120) } }))
    }

    postCollect(sendBody(eventName, extra))
  } catch {
    /* Collect must never break a CTA. */
  }
}
