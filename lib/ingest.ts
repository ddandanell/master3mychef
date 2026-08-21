import { getSql } from './db.js'

const DEFAULT_PROPERTY_SLUG = 'mychef-id'

const EVENT_NAMES = new Set(['page_view', 'whatsapp_click', 'form_submit', 'phone_click'])

export type CollectPayload = {
  event_name?: string
  lead_ref?: string
  session_id?: string
  page_path?: string
  service_area?: string
  referrer?: string
  landing_path?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  click_id?: string
  click_id_type?: string
  source?: string
  metadata?: Record<string, unknown>
}

function asText(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed.slice(0, max)
}

function channelFrom(payload: CollectPayload): string {
  if (payload.click_id) return 'paid'
  if (payload.utm_source) return payload.utm_source.slice(0, 80)
  return 'direct'
}

function leadStatus(eventName: string): string {
  if (eventName === 'form_submit') return 'form'
  if (eventName === 'whatsapp_click') return 'clicked_whatsapp'
  return 'clicked_whatsapp'
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

export async function ingestCollectEvent(payload: CollectPayload): Promise<void> {
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
  const metadata = {
    ...(payload.metadata && typeof payload.metadata === 'object' ? payload.metadata : {}),
    source: asText(payload.source, 120),
  }

  const propertyRows = await sql`
    SELECT id FROM properties WHERE slug = ${DEFAULT_PROPERTY_SLUG} LIMIT 1
  `
  const propertyId = propertyRows[0]?.id as number | undefined
  if (!propertyId) {
    throw new Error('Default property is missing')
  }

  const visitorRows = await sql`
    INSERT INTO visitors (property_id, lead_ref, last_seen_at)
    VALUES (${propertyId}, ${leadRef}, now())
    ON CONFLICT (lead_ref) DO UPDATE SET last_seen_at = now()
    RETURNING id
  `
  const visitorId = visitorRows[0]?.id as number

  const sessionRows = await sql`
    INSERT INTO sessions (
      property_id, visitor_id, client_session_id, landing_path, referrer,
      utm_source, utm_medium, utm_campaign, utm_term, utm_content, click_id, click_id_type
    )
    VALUES (
      ${propertyId},
      ${visitorId},
      ${clientSessionId},
      ${asText(payload.landing_path, 500) ?? pagePath},
      ${asText(payload.referrer, 255)},
      ${asText(payload.utm_source, 120)},
      ${asText(payload.utm_medium, 120)},
      ${asText(payload.utm_campaign, 180)},
      ${asText(payload.utm_term, 180)},
      ${asText(payload.utm_content, 180)},
      ${asText(payload.click_id, 200)},
      ${asText(payload.click_id_type, 40)}
    )
    ON CONFLICT (client_session_id) DO UPDATE SET visitor_id = EXCLUDED.visitor_id
    RETURNING id
  `
  const sessionId = sessionRows[0]?.id as number

  await sql`
    INSERT INTO events (property_id, visitor_id, session_id, event_name, page_path, service_area, metadata)
    VALUES (
      ${propertyId},
      ${visitorId},
      ${sessionId},
      ${eventName},
      ${pagePath},
      ${serviceArea},
      ${metadata}
    )
  `

  if (eventName === 'whatsapp_click' || eventName === 'form_submit') {
    const status = leadStatus(eventName)
    const source = asText(payload.source, 80) || eventName
    const ch = channelFrom(payload)
    await sql`
      INSERT INTO leads (
        source, name, email, message, property_id, visitor_id, lead_ref, page_path, channel, status, metadata
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
        ${metadata}
      )
      ON CONFLICT (lead_ref) DO UPDATE SET
        visitor_id = EXCLUDED.visitor_id,
        property_id = COALESCE(leads.property_id, EXCLUDED.property_id),
        page_path = COALESCE(leads.page_path, EXCLUDED.page_path),
        channel = COALESCE(leads.channel, EXCLUDED.channel),
        status = CASE
          WHEN leads.status = 'form' THEN leads.status
          ELSE EXCLUDED.status
        END
    `
  }
}
