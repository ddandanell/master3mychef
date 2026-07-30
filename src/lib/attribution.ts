/**
 * Campaign attribution capture, for closing the WhatsApp loop.
 *
 * THE PROBLEM THIS SOLVES
 * ----------------------------------------------------------------------------
 * myCHEF closes on WhatsApp, off-site. Google Ads can record the *click* on a
 * WhatsApp CTA, but the conversation itself lands on a phone with no campaign
 * attached. So "which campaign is working" was only ever answerable down to
 * "which campaign produced enquiries", never "which produced bookings".
 *
 * This module captures the ad click identifiers on landing, persists them, and
 * mints a short human-readable REFERENCE CODE. buildWhatsAppUrl() stamps that
 * ref into the prefilled message, and trackWhatsAppClick() sends the same ref
 * (plus the full identifiers) to GA4 / GTM / PostHog.
 *
 * The result: a WhatsApp message arrives saying "Ref: MC-7QX3K2". Search that
 * ref in GA4 or PostHog and you get the gclid, campaign, source and landing
 * page behind it. When that enquiry becomes a booking, you can attribute real
 * revenue to a real campaign instead of relying on a blended close-rate guess.
 *
 * WHY A REF CODE AND NOT THE RAW GCLID
 * ----------------------------------------------------------------------------
 * A gclid is 60–100 characters of opaque base64. Pasting that into a customer's
 * own WhatsApp message looks like spam and invites them to delete it — which
 * would destroy the attribution it exists to provide. Six characters reads as a
 * booking reference, which is normal and expected in hospitality.
 *
 * ATTRIBUTION MODEL
 * ----------------------------------------------------------------------------
 * LAST non-direct click wins, with a 90-day TTL. This deliberately matches
 * Google Ads' own default lookback so the two systems agree. A direct visit
 * does NOT overwrite a stored campaign — otherwise a visitor who clicks an ad,
 * leaves, then returns by typing the URL would have their attribution wiped,
 * which is the single most common way self-built tracking under-reports paid.
 *
 * The ref code is minted ONCE per visitor and then held stable, so a visitor
 * who enquires twice produces one ref, not two.
 *
 * PRIVACY
 * ----------------------------------------------------------------------------
 * Nothing here is personal data: no name, email, phone or IP. Click IDs and UTM
 * values are campaign metadata. The ref code is random, not derived from the
 * visitor. Storage is best-effort — localStorage throws in Safari private mode
 * and some embedded webviews, so every access is guarded and failure degrades
 * to "no attribution" rather than a broken page.
 *
 * Opt-out is respected: shouldExcludeFromAnalytics() short-circuits capture, so
 * a browser opted out with ?va-disable=1 stores nothing.
 */

import { shouldExcludeFromAnalytics } from './analytics-privacy'

const STORAGE_KEY = 'mychef-attribution'
const REF_KEY = 'mychef-lead-ref'

/** 90 days, matching the recommended Google Ads conversion window. */
const TTL_MS = 90 * 24 * 60 * 60 * 1000

/**
 * Ad-platform click identifiers, in priority order.
 *
 * gclid  — standard Google Ads click ID.
 * gbraid — Google Ads click ID for iOS app-to-web journeys (ATT-constrained).
 * wbraid — Google Ads click ID for web-to-web journeys where gclid is withheld.
 * msclkid — Microsoft Advertising, captured now so a future Bing test needs no
 *           code change.
 *
 * gbraid/wbraid matter more than they look: on iOS traffic — which is a large
 * share of the AU/US/UK audience this campaign targets — Google increasingly
 * sends these INSTEAD of gclid. Capturing only gclid silently loses that
 * segment, and iPhone users skew exactly toward the premium buyer myCHEF wants.
 */
const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid', 'msclkid'] as const

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

export interface Attribution {
  /** Short reference shown to the customer, e.g. "MC-7QX3K2". */
  ref: string
  /** Whichever click identifier was present, verbatim. */
  clickId?: string
  /** Which parameter the click ID came from, e.g. "gclid". */
  clickIdType?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  /** Referrer hostname at capture time. Empty string for direct. */
  referrer?: string
  /** Landing path where the campaign click arrived. */
  landingPath?: string
  /** Epoch ms of capture, used for the TTL check. */
  capturedAt: number
}

/** localStorage throws in Safari private mode and some embedded webviews. */
function safeStorage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null
    return window.localStorage
  } catch {
    return null
  }
}

/**
 * Crockford-style alphabet: no I, L, O, U.
 *
 * These codes get read aloud over the phone and retyped by staff. Excluding the
 * characters that collide visually (1/I/L, 0/O) removes the most common
 * transcription failure, and dropping U avoids accidental profanity in a
 * customer-facing string.
 */
const REF_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

function randomRef(): string {
  let body = ''
  const cryptoObj = typeof window !== 'undefined' ? window.crypto : undefined

  if (cryptoObj?.getRandomValues) {
    const bytes = new Uint8Array(6)
    cryptoObj.getRandomValues(bytes)
    for (const byte of bytes) body += REF_ALPHABET[byte % REF_ALPHABET.length]
  } else {
    for (let i = 0; i < 6; i++) {
      body += REF_ALPHABET[Math.floor(Math.random() * REF_ALPHABET.length)]
    }
  }

  return `MC-${body}`
}

/**
 * Returns this visitor's stable reference code, minting one on first call.
 *
 * Stable across the whole visit and across return visits, so repeat enquiries
 * from the same person share one ref instead of fragmenting into several.
 */
export function getLeadRef(): string {
  const store = safeStorage()
  if (!store) return randomRef()

  try {
    const existing = store.getItem(REF_KEY)
    if (existing) return existing
    const fresh = randomRef()
    store.setItem(REF_KEY, fresh)
    return fresh
  } catch {
    return randomRef()
  }
}

function readStored(): Attribution | null {
  const store = safeStorage()
  if (!store) return null

  try {
    const raw = store.getItem(STORAGE_KEY)
    if (!raw) return null

    const parsed = JSON.parse(raw) as Attribution
    if (typeof parsed?.capturedAt !== 'number') return null
    if (Date.now() - parsed.capturedAt > TTL_MS) {
      store.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    // Corrupt or unparseable — treat as absent rather than throwing into render.
    return null
  }
}

/**
 * Reads campaign parameters from the current URL and persists them if present.
 *
 * Call once on app startup and again on SPA route change: a visitor can land on
 * any page, and Google appends the click ID to whatever URL the ad points at.
 *
 * Returns the attribution now in effect, or null if there has never been one.
 */
export function captureAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null
  if (shouldExcludeFromAnalytics()) return null

  const params = new URLSearchParams(window.location.search)

  let clickId: string | undefined
  let clickIdType: string | undefined
  for (const key of CLICK_ID_KEYS) {
    const value = params.get(key)
    if (value) {
      clickId = value
      clickIdType = key
      break
    }
  }

  const utm: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) utm[key] = value
  }

  const hasCampaignSignal = Boolean(clickId) || Object.keys(utm).length > 0

  // No campaign signal in this URL: keep whatever is already stored. A direct
  // return visit must not erase a real ad click — see the header note.
  if (!hasCampaignSignal) return readStored()

  let referrer = ''
  try {
    referrer = document.referrer ? new URL(document.referrer).hostname : ''
  } catch {
    referrer = ''
  }

  const attribution: Attribution = {
    ref: getLeadRef(),
    clickId,
    clickIdType,
    ...utm,
    referrer,
    landingPath: window.location.pathname,
    capturedAt: Date.now(),
  }

  const store = safeStorage()
  try {
    store?.setItem(STORAGE_KEY, JSON.stringify(attribution))
  } catch {
    /* Quota or private mode — in-memory return value is still correct. */
  }

  return attribution
}

/** Current attribution, if any is stored and unexpired. */
export function getAttribution(): Attribution | null {
  return readStored()
}

/**
 * Flat, primitive-only parameter bag for analytics events.
 *
 * Keys are prefixed so they cannot collide with GA4 reserved names, except
 * lead_ref which is the field you will actually search on.
 */
export function attributionParams(): Record<string, string> {
  const attribution = readStored()
  const params: Record<string, string> = { lead_ref: getLeadRef() }
  if (!attribution) return params

  if (attribution.clickId) params.attr_click_id = attribution.clickId
  if (attribution.clickIdType) params.attr_click_id_type = attribution.clickIdType
  if (attribution.utm_source) params.attr_source = attribution.utm_source
  if (attribution.utm_medium) params.attr_medium = attribution.utm_medium
  if (attribution.utm_campaign) params.attr_campaign = attribution.utm_campaign
  if (attribution.utm_term) params.attr_term = attribution.utm_term
  if (attribution.utm_content) params.attr_content = attribution.utm_content
  if (attribution.landingPath) params.attr_landing_path = attribution.landingPath

  return params
}

/**
 * True when this visitor arrived from a paid ad click.
 *
 * Useful for deciding whether to surface the reference in the WhatsApp message
 * at all — see SHOW_REF_FOR_ORGANIC in whatsapp.ts.
 */
export function isPaidVisitor(): boolean {
  const attribution = readStored()
  return Boolean(attribution?.clickId)
}
