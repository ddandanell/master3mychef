// Single source of truth for building qualified WhatsApp enquiry links.
//
// Keeps the canonical WhatsApp number and the enquiry message shape in ONE place
// so every CTA sends a useful, service-matched enquiry (service + date + guests +
// area + what they want next) instead of a generic "Hi". Unknown fields default to
// "not sure yet" so the prefilled message stays natural and the visitor can edit it.
//
// Usage:
//   const WA_LINK = buildWhatsAppUrl({ serviceName: 'BBQ catering in Bali', intent: 'menu options and pricing' })

export const WHATSAPP_NUMBER = '6289674072020'

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

/** In-villa cooking class — never a chef/catering generic prefill. */
export const COOKING_CLASS_ENQUIRY: WhatsAppEnquiry = {
  serviceName: 'a private Indonesian cooking class at my Bali villa',
  intent: 'a 2.5 or 3-hour class quote with diploma',
}

const COOKING_CLASS_PATHS = new Set([
  '/experiences/cooking-class',
  '/experiences/private-cooking-class',
])

export function isCookingClassPath(pathname: string): boolean {
  const clean = pathname.replace(/\/$/, '') || '/'
  return COOKING_CLASS_PATHS.has(clean)
}

export function buildWhatsAppUrlForPath(pathname: string, fallback: WhatsAppEnquiry): string {
  if (isCookingClassPath(pathname)) return buildWhatsAppUrl(COOKING_CLASS_ENQUIRY)
  return buildWhatsAppUrl(fallback)
}

// ── Campaign attribution stamping ────────────────────────────────────────────
//
// WHY THIS IS NOT DONE INSIDE buildWhatsAppUrl()
//
// The site is prerendered (scripts/prerender.ts drives a real Chromium), so
// anything buildWhatsAppUrl() returns at build time gets baked into the static
// HTML. Minting a reference code there would burn ONE code into the shipped
// markup and every visitor on earth would enquire with the same ref — worse
// than no attribution, because it looks like it works.
//
// So buildWhatsAppUrl() stays pure and prerender-safe, and the reference is
// injected in the visitor's own browser at the moment of the click.
//
// Coverage: a single delegated listener on `document` handles all 193 anchor
// call sites without editing any of them, and covers any added later. The four
// places that call window.open() directly cannot be intercepted this way and
// must wrap their URL in appendLeadRef() explicitly.

import { getAttribution, getLeadRef } from './attribution'

/**
 * Whether to stamp a reference onto enquiries from NON-paid visitors too.
 *
 * Left ON deliberately. The ref is how an enquiry is matched to a booking, and
 * that is worth having for organic and direct traffic as well — otherwise you
 * can only measure the channel you are paying for, and have nothing to compare
 * it against. Set to false if you want refs on paid traffic only.
 */
const SHOW_REF_FOR_ORGANIC = true

/** Opener used when a wa.me link carries no prefilled text of its own. */
const DEFAULT_ENQUIRY_MESSAGE = "Hi myCHEF, I'd like to enquire about your services in Bali."

/**
 * Appends the visitor's reference code to a wa.me URL's prefilled text.
 *
 * Idempotent: a URL that already carries a "Ref:" is returned untouched, so a
 * double-invoked handler cannot produce "Ref: X Ref: X".
 *
 * Never throws. Attribution is worth having but never worth breaking a CTA for,
 * so any failure returns the original URL and the click proceeds normally.
 */
export function appendLeadRef(url: string): string {
  try {
    if (typeof window === 'undefined') return url
    if (!url.includes('wa.me')) return url

    const parsed = new URL(url)
    const existing = parsed.searchParams.get('text') ?? ''
    if (/\bRef:/i.test(existing)) return url

    if (!SHOW_REF_FOR_ORGANIC && !getAttribution()?.clickId) return url

    const ref = getLeadRef()
    if (!ref) return url

    // Several CTAs are bare wa.me links with no prefilled text (PremiumPage,
    // StaffingPage, ContactPage's contact row, BookingFormCatering's fallback).
    // Appending the ref to an empty message would send a WhatsApp message whose
    // entire body is "(Ref: MC-XXXXXX)" — which reads as spam to whoever opens it
    // and tells the team nothing about what the person wants. Give those links a
    // neutral opener so the ref is always attached to an actual sentence.
    const body = existing || DEFAULT_ENQUIRY_MESSAGE

    // The ref goes at the FRONT of the message, not the end.
    //
    // It used to be appended. The prefilled text is editable in WhatsApp before
    // sending, and visitors routinely fill in their real date, guest count and
    // area — typing at the end, which is precisely where a trailing ref sits.
    // Observed 10 Aug 2026: an enquiry arrived with the standard template
    // hand-edited, line-broken and extended with the guest's own sentence, and
    // the ref gone entirely; another guest who edited mid-message kept theirs.
    // Leading the message costs a little elegance and buys attribution that
    // survives the guest making the message their own.
    parsed.searchParams.set('text', `(Ref: ${ref}) ${body}`)
    return parsed.toString()
  } catch {
    return url
  }
}

/**
 * Installs the delegated click handler that stamps refs onto WhatsApp anchors.
 *
 * Call once, at app startup. Returns a teardown function.
 *
 * Uses the CAPTURE phase so the href is rewritten before any component-level
 * onClick runs — several CTAs call trackWhatsAppClick() in their own handler,
 * and this must not race with them.
 *
 * The href is mutated in place rather than the navigation being cancelled and
 * re-issued. Calling preventDefault() and then window.open() would be blocked
 * as a popup on some browsers and would break cmd/ctrl-click and "open in new
 * tab", which matters because these anchors are target="_blank".
 */
export function installWhatsAppAttribution(): () => void {
  if (typeof document === 'undefined') return () => {}

  const onClick = (event: Event) => {
    try {
      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest('a[href*="wa.me"]')
      if (!(anchor instanceof HTMLAnchorElement)) return

      const stamped = appendLeadRef(anchor.href)
      if (stamped !== anchor.href) anchor.href = stamped
    } catch {
      /* Never interfere with the click. */
    }
  }

  // Also handles keyboard activation: browsers dispatch a synthetic click for
  // Enter on a focused anchor, so this covers accessibility paths too.
  document.addEventListener('click', onClick, true)
  document.addEventListener('auxclick', onClick, true)

  return () => {
    document.removeEventListener('click', onClick, true)
    document.removeEventListener('auxclick', onClick, true)
  }
}
