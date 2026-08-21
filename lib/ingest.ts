import { getSql } from './db.js'
import { parseUserAgent } from './user-agent.js'

const DEFAULT_PROPERTY_SLUG = 'mychef-id'

const EVENT_NAMES = new Set([
  'page_view',
  'whatsapp_click',
  'form_submit',
  'phone_click',
  'scroll_depth',
  'time_on_page',
  'page_heartbeat',
  'cta_click',
  'session_end',
  'session_start',
  'first_visit',
  'outbound_click',
  'file_download',
  'view_search_results',
  'user_engagement',
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
])

const CONVERSION_EVENTS = new Set(['whatsapp_click', 'form_submit', 'phone_click'])
const LEAD_EVENTS = new Set(['whatsapp_click', 'form_submit'])
const BOUNCE_MS = 10_000
const ENGAGED_MS = 10_000

export type CollectRequestContext = {
  country?: string | null
  region?: string | null
  city?: string | null
  userAgent?: string | null
}

export type CollectPayload = {
  event_name?: string
  lead_ref?: string
  session_id?: string
  page_path?: string
  page_title?: string
  page_location?: string
  hostname?: string
  language?: string
  screen?: string
  service_area?: string
  referrer?: string
  referrer_url?: string
  landing_path?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  click_id?: string
  click_id_type?: string
  source?: string
  posthog_distinct_id?: string
  posthog_session_id?: string
  metadata?: Record<string, unknown>
}

function asText(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed.slice(0, max)
}

function decodeHeader(value: string | string[] | undefined): string | null {
  if (!value) return null
  const raw = Array.isArray(value) ? value[0] : value
  try {
    return decodeURIComponent(raw).slice(0, 80)
  } catch {
    return raw.slice(0, 80)
  }
}

function channelFrom(payload: CollectPayload): string {
  if (payload.click_id) return 'paid'
  if (payload.utm_source) return payload.utm_source.slice(0, 80)
  return 'direct'
}

function mediumFrom(payload: CollectPayload): string {
  if (payload.utm_medium) return payload.utm_medium.slice(0, 80)
  if (payload.click_id) return 'cpc'
  if (payload.referrer) return 'referral'
  return 'none'
}

function leadStatus(eventName: string): string {
  if (eventName === 'form_submit') return 'form'
  if (eventName === 'whatsapp_click') return 'clicked_whatsapp'
  return 'clicked_whatsapp'
}

function elapsedMs(metadata: Record<string, unknown>): number | null {
  const raw = metadata.elapsed_ms ?? metadata.duration_ms ?? metadata.engagement_time_msec
  if (typeof raw === 'number' && Number.isFinite(raw) && raw >= 0) return Math.round(raw)
  if (typeof raw === 'string' && raw.trim()) {
    const n = Number(raw)
    if (Number.isFinite(n) && n >= 0) return Math.round(n)
  }
  return null
}

export function parseCollectBody(raw: unknown): CollectPayload | null {
  if (raw == null) return null
  if (typeof raw === 'string') {
    try {
      return JSON.parse(raw) as CollectPayload
    } catch {
      return null
    }
  }
  if (Buffer.isBuffer(raw)) {
    try {
      return JSON.parse(raw.toString('utf8')) as CollectPayload
    } catch {
      return null
    }
  }
  if (typeof raw === 'object') return raw as CollectPayload
  return null
}

export function requestContextFromHeaders(headers: Record<string, string | string[] | undefined>): CollectRequestContext {
  return {
    country: decodeHeader(headers['x-vercel-ip-country']),
    region: decodeHeader(headers['x-vercel-ip-country-region']),
    city: decodeHeader(headers['x-vercel-ip-city']),
    userAgent: typeof headers['user-agent'] === 'string' ? headers['user-agent'] : null,
  }
}

export async function ingestCollectEvent(
  payload: CollectPayload,
  requestCtx: CollectRequestContext = {}
): Promise<void> {
  const eventName = asText(payload.event_name, 40)
  const leadRef = asText(payload.lead_ref, 32)
  const clientSessionId = asText(payload.session_id, 80)
  if (!eventName || !EVENT_NAMES.has(eventName) || !leadRef || !clientSessionId) {
    throw new Error('Invalid collect payload')
  }
  if (!/^MC-[0-9A-Z]{6}$/i.test(leadRef)) {
    throw new Error('Invalid lead_ref')
  }

  const sql = getSql()
  const pagePath = asText(payload.page_path, 500)
  const serviceArea = asText(payload.service_area, 80)
  const pageTitle = asText(payload.page_title, 300)
  const pageLocation = asText(payload.page_location, 500)
  const hostname = asText(payload.hostname, 120)
  const language = asText(payload.language, 40)
  const screen = asText(payload.screen, 40)
  const device = parseUserAgent(requestCtx.userAgent || undefined)
  const country = asText(requestCtx.country, 8)
  const region = asText(requestCtx.region, 80)
  const city = asText(requestCtx.city, 80)
  const utmSource = asText(payload.utm_source, 120)
  const utmMedium = asText(payload.utm_medium, 120) || mediumFrom(payload)
  const landing = asText(payload.landing_path, 500) ?? pagePath
  const metadata = {
    ...(payload.metadata && typeof payload.metadata === 'object' ? payload.metadata : {}),
    source: asText(payload.source, 120),
    language,
    screen,
    device_category: device.device_category,
    os_name: device.os_name,
    browser: device.browser,
    country,
    city,
  }

  const posthogDistinctId = asText(payload.posthog_distinct_id, 120) || leadRef
  const posthogSessionId = asText(payload.posthog_session_id, 120)

  const propertyRows = await sql`
    SELECT id FROM properties WHERE slug = ${DEFAULT_PROPERTY_SLUG} LIMIT 1
  `
  const propertyId = propertyRows[0]?.id as number | undefined
  if (!propertyId) {
    throw new Error('Default property is missing')
  }

  const visitorRows = await sql`
    INSERT INTO visitors (
      property_id, lead_ref, last_seen_at, first_source, first_medium, first_landing, session_count,
      posthog_distinct_id
    )
    VALUES (
      ${propertyId}, ${leadRef}, now(), ${utmSource || channelFrom(payload)}, ${utmMedium}, ${landing}, 0,
      ${posthogDistinctId}
    )
    ON CONFLICT (lead_ref) DO UPDATE SET
      last_seen_at = now(),
      first_source = COALESCE(visitors.first_source, EXCLUDED.first_source),
      first_medium = COALESCE(visitors.first_medium, EXCLUDED.first_medium),
      first_landing = COALESCE(visitors.first_landing, EXCLUDED.first_landing),
      posthog_distinct_id = COALESCE(EXCLUDED.posthog_distinct_id, visitors.posthog_distinct_id)
    RETURNING id
  `
  const visitorId = visitorRows[0]?.id as number

  const sessionRows = await sql`
    INSERT INTO sessions (
      property_id, visitor_id, client_session_id, landing_path, referrer, referrer_url,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, click_id, click_id_type,
      hostname, language, device_category, os_name, browser, screen, country, region, city,
      posthog_session_id
    )
    VALUES (
      ${propertyId},
      ${visitorId},
      ${clientSessionId},
      ${landing},
      ${asText(payload.referrer, 255)},
      ${asText(payload.referrer_url, 500)},
      ${utmSource},
      ${utmMedium},
      ${asText(payload.utm_campaign, 180)},
      ${asText(payload.utm_term, 180)},
      ${asText(payload.utm_content, 180)},
      ${asText(payload.click_id, 200)},
      ${asText(payload.click_id_type, 40)},
      ${hostname},
      ${language},
      ${device.device_category},
      ${device.os_name},
      ${device.browser},
      ${screen},
      ${country},
      ${region},
      ${city},
      ${posthogSessionId}
    )
    ON CONFLICT (client_session_id) DO UPDATE SET
      visitor_id = EXCLUDED.visitor_id,
      country = COALESCE(sessions.country, EXCLUDED.country),
      region = COALESCE(sessions.region, EXCLUDED.region),
      city = COALESCE(sessions.city, EXCLUDED.city),
      device_category = COALESCE(sessions.device_category, EXCLUDED.device_category),
      os_name = COALESCE(sessions.os_name, EXCLUDED.os_name),
      browser = COALESCE(sessions.browser, EXCLUDED.browser),
      posthog_session_id = COALESCE(EXCLUDED.posthog_session_id, sessions.posthog_session_id)
    RETURNING id, started_at, pageview_count, duration_ms, bounced, engaged, (xmax = 0) AS is_insert
  `
  const session = sessionRows[0] as {
    id: number
    started_at: string
    pageview_count: number
    duration_ms: number
    bounced: boolean
    engaged: boolean
    is_insert: boolean
  }
  const sessionId = session.id

  if (session.is_insert) {
    await sql`UPDATE visitors SET session_count = session_count + 1 WHERE id = ${visitorId}`
  }

  await sql`
    INSERT INTO events (
      property_id, visitor_id, session_id, event_name, page_path, service_area, metadata,
      page_title, page_location, hostname
    )
    VALUES (
      ${propertyId},
      ${visitorId},
      ${sessionId},
      ${eventName},
      ${pagePath},
      ${serviceArea},
      ${metadata},
      ${pageTitle},
      ${pageLocation},
      ${hostname}
    )
  `

  const fromStart = Math.max(0, Date.now() - new Date(session.started_at).getTime())
  const reported = elapsedMs(metadata)
  const duration = Math.max(Number(session.duration_ms) || 0, reported ?? fromStart)
  const pageviews = (Number(session.pageview_count) || 0) + (eventName === 'page_view' ? 1 : 0)
  const converted = CONVERSION_EVENTS.has(eventName) || session.bounced === false
  const bounced = !(converted || pageviews > 1 || duration >= BOUNCE_MS)
  const engaged = session.engaged || converted || pageviews > 1 || duration >= ENGAGED_MS

  await sql`
    UPDATE sessions
    SET
      ended_at = now(),
      pageview_count = ${pageviews},
      duration_ms = ${duration},
      bounced = ${bounced},
      engaged = ${engaged},
      exit_path = COALESCE(${pagePath}, exit_path)
    WHERE id = ${sessionId}
  `

  if (LEAD_EVENTS.has(eventName)) {
    const status = leadStatus(eventName)
    const source = asText(payload.source, 80) || eventName
    const ch = channelFrom(payload)
    await sql`
      INSERT INTO leads (
        source, name, email, message, property_id, visitor_id, lead_ref, page_path, channel, status, stage, metadata,
        country, city
      )
      VALUES (
        ${source},
        NULL,
        NULL,
        NULL,
        ${propertyId},
        ${visitorId},
        ${leadRef},
        ${pagePath},
        ${ch},
        ${status},
        ${'new'},
        ${metadata},
        ${country},
        ${city}
      )
      ON CONFLICT (lead_ref) DO UPDATE SET
        visitor_id = EXCLUDED.visitor_id,
        property_id = COALESCE(leads.property_id, EXCLUDED.property_id),
        page_path = COALESCE(leads.page_path, EXCLUDED.page_path),
        channel = COALESCE(leads.channel, EXCLUDED.channel),
        country = COALESCE(leads.country, EXCLUDED.country),
        city = COALESCE(leads.city, EXCLUDED.city),
        stage = COALESCE(leads.stage, ${'new'}),
        status = CASE
          WHEN leads.status = 'form' THEN leads.status
          ELSE EXCLUDED.status
        END
    `
  }
}
