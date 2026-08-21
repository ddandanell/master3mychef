import { shouldExcludeFromAnalytics } from './analytics-privacy'
import { getAttribution, getLeadRef } from './attribution'

const SESSION_KEY = 'mychef-session-id'
const SESSION_AT_KEY = 'mychef-session-at'
const IDLE_MS = 30 * 60 * 1000

export type FirstPartyEventName = 'page_view' | 'whatsapp_click' | 'form_submit' | 'phone_click'

function sessionId(): string {
  const fallback = () =>
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `s-${Date.now()}-${Math.random().toString(36).slice(2)}`

  try {
    const at = Number(sessionStorage.getItem(SESSION_AT_KEY) || 0)
    let id = sessionStorage.getItem(SESSION_KEY)
    if (!id || Date.now() - at > IDLE_MS) {
      id = fallback()
      sessionStorage.setItem(SESSION_KEY, id)
    }
    sessionStorage.setItem(SESSION_AT_KEY, String(Date.now()))
    return id
  } catch {
    return fallback()
  }
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

/**
 * First-party event to Neon. Never throws. Uses sendBeacon/keepalive so a
 * WhatsApp app handoff does not cancel the write the way GA4 fetch can.
 */
export function collectFirstParty(
  eventName: FirstPartyEventName,
  extra?: { source?: string; service_area?: string; page_path?: string; metadata?: Record<string, unknown> }
): void {
  if (typeof window === 'undefined') return
  if (shouldExcludeFromAnalytics()) return

  try {
      let referrer = ''
      try {
        referrer = document.referrer ? new URL(document.referrer).hostname : ''
      } catch {
        referrer = ''
      }

      const body = JSON.stringify({
        event_name: eventName,
        lead_ref: getLeadRef(),
        session_id: sessionId(),
        page_path: extra?.page_path || window.location.pathname,
        service_area: extra?.service_area,
        referrer,
        source: extra?.source,
        metadata: extra?.metadata,
        ...attributionFields(),
      })

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
  } catch {
    /* Collect must never break a CTA. */
  }
}
