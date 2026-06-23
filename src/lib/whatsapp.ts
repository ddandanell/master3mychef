// Single source of truth for building qualified WhatsApp enquiry links.
//
// Keeps the canonical WhatsApp number and the enquiry message shape in ONE place
// so every CTA sends a useful, service-matched enquiry (service + date + guests +
// area + what they want next) instead of a generic "Hi". Unknown fields default to
// "not sure yet" so the prefilled message stays natural and the visitor can edit it.
//
// Usage:
//   const WA_LINK = buildWhatsAppUrl({ serviceName: 'BBQ catering in Bali', intent: 'menu options and pricing' })

export const WHATSAPP_NUMBER = '628113803488'

export interface WhatsAppEnquiry {
  /** What the visitor is interested in, e.g. "BBQ catering in Bali". */
  serviceName: string
  /** What they want next, e.g. "menu options and pricing". Defaults to pricing + availability. */
  intent?: string
  /** Known values when available; otherwise default to "not sure yet". */
  date?: string
  guests?: string
  area?: string
  /** Optional trailing sentence for extra context. */
  extraContext?: string
}

export function buildWhatsAppMessage({
  serviceName,
  intent = 'pricing and availability',
  date = 'not sure yet',
  guests = 'not sure yet',
  area = 'not sure yet',
  extraContext,
}: WhatsAppEnquiry): string {
  const parts = [
    `Hi myCHEF, I'm interested in ${serviceName}.`,
    `Date: ${date}. Guests: ${guests}. Area: ${area}.`,
    `I'd like ${intent}.`,
  ]
  if (extraContext) parts.push(extraContext)
  return parts.join(' ')
}

export function buildWhatsAppUrl(enquiry: WhatsAppEnquiry): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(enquiry))}`
}
