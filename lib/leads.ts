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

  if (leadRef) {
    await sql`
      INSERT INTO leads (
        source, name, email, phone, subject, message, metadata,
        lead_ref, page_path, channel, status
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
        ${'form'}
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
        status = 'form'
    `
    return
  }

  await sql`
    INSERT INTO leads (source, name, email, phone, subject, message, metadata, page_path, channel, status)
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
      ${'form'}
    )
  `
}
