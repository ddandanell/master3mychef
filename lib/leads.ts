import { getSql } from './db.js'

type LeadInput = {
  source: string
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
  metadata?: Record<string, string | string[] | undefined>
  leadRef?: string
  pagePath?: string
  channel?: string
}

function metaText(
  metadata: Record<string, string | string[]>,
  keys: string[]
): string | null {
  for (const key of keys) {
    const value = metadata[key]
    if (typeof value === 'string' && value.trim()) return value.trim().slice(0, 80)
    if (Array.isArray(value) && value[0]) return String(value[0]).trim().slice(0, 80)
  }
  return null
}

export async function insertLead(lead: LeadInput): Promise<void> {
  const sql = getSql()
  const metadata = lead.metadata
    ? Object.fromEntries(
        Object.entries(lead.metadata).filter(([, value]) => value !== undefined && value !== '')
      )
    : {}

  const leadRef = lead.leadRef?.trim() || null
  const pagePath = lead.pagePath?.trim() || null
  const channel = lead.channel?.trim() || null
  const guestCount = metaText(metadata as Record<string, string | string[]>, ['Group Size', 'guests', 'guest_count', 'Guests'])
  const city = metaText(metadata as Record<string, string | string[]>, ['city', 'City', 'villa_area', 'Area', 'location'])

  if (leadRef) {
    await sql`
      INSERT INTO leads (
        source, name, email, phone, subject, message, metadata,
        lead_ref, page_path, channel, status, stage, guest_count, city
      )
      VALUES (
        ${lead.source},
        ${lead.name},
        ${lead.email},
        ${lead.phone ?? null},
        ${lead.subject ?? null},
        ${lead.message},
        ${metadata},
        ${leadRef},
        ${pagePath},
        ${channel},
        ${'form'},
        ${'new'},
        ${guestCount},
        ${city}
      )
      ON CONFLICT (lead_ref) DO UPDATE SET
        source = EXCLUDED.source,
        name = EXCLUDED.name,
        email = EXCLUDED.email,
        phone = COALESCE(EXCLUDED.phone, leads.phone),
        subject = COALESCE(EXCLUDED.subject, leads.subject),
        message = EXCLUDED.message,
        metadata = EXCLUDED.metadata,
        page_path = COALESCE(EXCLUDED.page_path, leads.page_path),
        channel = COALESCE(EXCLUDED.channel, leads.channel),
        status = 'form',
        stage = COALESCE(leads.stage, ${'new'}),
        guest_count = COALESCE(EXCLUDED.guest_count, leads.guest_count),
        city = COALESCE(EXCLUDED.city, leads.city)
    `
    return
  }

  await sql`
    INSERT INTO leads (
      source, name, email, phone, subject, message, metadata, page_path, channel, status, stage, guest_count, city
    )
    VALUES (
      ${lead.source},
      ${lead.name},
      ${lead.email},
      ${lead.phone ?? null},
      ${lead.subject ?? null},
      ${lead.message},
      ${metadata},
      ${pagePath},
      ${channel},
      ${'form'},
      ${'new'},
      ${guestCount},
      ${city}
    )
  `
}
