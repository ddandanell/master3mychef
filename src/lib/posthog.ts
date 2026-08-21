/**
 * PostHog — behaviour analytics, session replay and error tracking.
 *
 * WHY POSTHOG WHEN GA4, GTM AND VERCEL ARE ALREADY WIRED UP
 * ---------------------------------------------------------
 * The three existing sinks each have a hard limit that PostHog does not:
 *
 *   GA4     — aggregate only. Tells you 40% abandon the quote funnel, never
 *             which field they were on when they gave up.
 *   Vercel  — 2 custom event properties per event on the Pro plan (see the
 *             constraints block in analytics.ts). Anything past the second
 *             property is silently discarded.
 *   GTM     — a transport, not an analysis tool.
 *
 * PostHog adds the three things that are actually needed to raise conversion
 * rate on a lead-generation site with no on-site checkout:
 *
 *   1. Session replay — watch the individual visitor who abandoned.
 *   2. Confusion signals — $rageclick and $dead_click are captured
 *      automatically and are queryable like any other event. These are the
 *      machine-readable version of "the visitor was confused here", which is
 *      what makes automated analysis possible at all.
 *   3. Unlimited event properties — the full param object from trackEvent()
 *      arrives intact, so service_type, cta_source, form_id, page_source and
 *      time_to_complete can all be segmented on together.
 *
 * PRIVACY POSTURE
 * ---------------
 * This site collects real customer PII on the quote funnel, booking form,
 * catering form, bar service enquiry form and contact page: names, emails,
 * phone numbers and villa addresses.
 *
 *   - maskAllInputs is true, set BOTH here and on the project (belt and
 *     braces — the project setting alone does not mask <textarea>, which is
 *     where "special requests" free text lands).
 *   - Email and phone are additionally stripped from event properties and
 *     from the recorded URL in scrubProperties() below, because a form that
 *     GETs its values into the querystring would otherwise leak them into
 *     $current_url even with input masking on.
 *   - Nothing here identifies visitors by email. Everyone stays anonymous
 *     under PostHog's generated distinct_id. Calling posthog.identify() with
 *     a customer email would make this a materially different privacy
 *     question and is deliberately not done.
 *
 * Add the class `ph-no-capture` to any element that must never be recorded or
 * autocaptured. It excludes the element from BOTH session replay and
 * autocapture, and is the correct tool for anything sensitive that inevitably
 * renders as text rather than as an input value.
 *
 * EXCLUSIONS
 * ----------
 * shouldExcludeFromAnalytics() is shared with Vercel Analytics — see
 * analytics-privacy.ts. This matters more for PostHog than for Vercel:
 * playwright.config.ts points its E2E suite at https://mychef.id (production),
 * so without the navigator.webdriver check every test run would produce real
 * session recordings, burn replay quota, and pollute the funnels with a
 * perfectly-converting robot.
 */

import posthog from 'posthog-js'
import { shouldExcludeFromAnalytics } from './analytics-privacy'

/**
 * Project API key for mychef.id (PostHog project 458871, US cloud).
 *
 * This is a WRITE-ONLY client key and is designed to be public — it is visible
 * in the built bundle exactly like the GA4 measurement ID above it in
 * index.html. It cannot read data back out. Do not confuse it with a personal
 * API key (phx_…), which is server-only and must never appear here.
 *
 * Overridable via VITE_POSTHOG_KEY so a staging project can be pointed at
 * without a code change. Note the env var MUST carry the VITE_ prefix to be
 * visible to client code at all — the bare POSTHOG_API_KEY currently sitting
 * in .env.local is invisible to the browser bundle and was never in effect.
 */
const POSTHOG_KEY =
  import.meta.env.VITE_POSTHOG_KEY ?? 'phc_BoYL6PtkTDoKW444FLE5ZvERG3jzwxYLXpekyX3Dp7rh'

/**
 * Ingestion host — a FIRST-PARTY path, not PostHog's domain.
 *
 * `/ingest` is rewritten to PostHog by the `rewrites` block in vercel.json (generated
 * from scripts/generate-redirects.ts — edit it there, never in vercel.json).
 *
 * This is not a nicety — it is what the site's own Content-Security-Policy
 * requires. The CSP in scripts/generate-redirects.ts allows 'self', Google and
 * Vercel in connect-src/script-src and nothing from PostHog, so pointing api_host
 * at https://us.i.posthog.com means the browser refuses every request. Verified on
 * 2026-07-30, minutes after the first deploy: both us.i.posthog.com and
 * us-assets.i.posthog.com failed outright while mychef.id itself returned 200.
 *
 * posthog-js pulls its remote config from us-assets during init, so when that host
 * is blocked the SDK never finishes bootstrapping — no events, no session
 * recording, nothing. A single blocked domain costs the whole visitor, silently.
 *
 * Do not "simplify" this back to the direct host without also widening the CSP.
 *
 * ui_host must stay set so links PostHog renders in the app still point at the real
 * dashboard rather than at mychef.id/ingest.
 */
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST ?? '/ingest'
const POSTHOG_UI_HOST = 'https://us.posthog.com'

let initialised = false

/** Matches an email address anywhere in a string. */
const EMAIL_RE = /[\w.+-]+@[\w-]+\.[\w.-]+/gi

/**
 * Matches a phone number loosely: 8+ digits with optional +, spaces, dashes,
 * parens. Deliberately greedy — a false positive costs one redacted analytics
 * value, a false negative leaks a customer's phone number.
 */
const PHONE_RE = /\+?\d[\d\s()-]{7,}\d/g

/** Replace anything that looks like PII with a fixed marker. */
function redact(text: string): string {
  return text.replace(EMAIL_RE, '[email]').replace(PHONE_RE, '[phone]')
}

/**
 * Strips PII from every string value in an event's properties, including the
 * URL fields PostHog attaches automatically ($current_url, $referrer,
 * $pathname). Recurses one level into arrays; leaves non-strings alone.
 */
function scrubProperties(properties: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(properties)) {
    if (typeof value === 'string') {
      out[key] = redact(value)
    } else if (Array.isArray(value)) {
      out[key] = value.map((item) => (typeof item === 'string' ? redact(item) : item))
    } else {
      out[key] = value
    }
  }
  return out
}

/**
 * Initialise PostHog. Safe to call more than once — subsequent calls no-op.
 * Call before React renders so the initial $pageview is not missed.
 */
export function initPostHog(): void {
  if (initialised || typeof window === 'undefined') return
  if (!POSTHOG_KEY) return
  initialised = true

  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      ui_host: POSTHOG_UI_HOST,

      // SPA mode. react-router-dom navigates via the history API and fires no
      // page load, so the default (page-load only) would record exactly one
      // pageview per visit no matter how many pages were actually viewed.
      capture_pageview: 'history_change',
      capture_pageleave: true,

      // Clicks, input changes and form submissions on a/button/form/input/
      // select/textarea/label. This is what powers heatmaps and, more
      // importantly, $dead_click detection — without it there is no automatic
      // confusion signal to analyse.
      autocapture: true,

      // Uncaught JS exceptions become error-tracking issues. This is the
      // "fix errors" half of the brief; it needs no try/catch anywhere in the
      // app to work.
      capture_exceptions: true,

      // Console output is attached to the replay timeline, so a recording of a
      // broken booking form also carries the error that broke it.
      enable_recording_console_log: true,

      session_recording: {
        // Every <input> value is replaced before it leaves the browser.
        maskAllInputs: true,
        maskInputOptions: {
          password: true,
          email: true,
          tel: true,
          text: true,
          textarea: true,
          select: true,
          number: true,
          search: false, // search terms are genuinely useful and carry no PII
        },
      },

      // Slower, richer person profiles are pointless here: there are no
      // accounts and nobody logs in. 'always' would still create a profile per
      // anonymous visitor and bill for it.
      person_profiles: 'identified_only',

      // Drop excluded traffic and scrub PII. Returning null discards the
      // event entirely — nothing reaches the network.
      before_send: (event) => {
        if (!event) return null
        if (shouldExcludeFromAnalytics()) return null
        if (event.properties) {
          event.properties = scrubProperties(event.properties)
        }
        return event
      },
    })

    // A browser that opted out with ?va-disable=1 should not be recorded at
    // all. before_send already drops the events, but opt_out_capturing also
    // stops the replay recorder from running, which saves the visitor
    // bandwidth and saves replay quota.
    //
    // The opt_in branch is NOT redundant, and omitting it was a real bug caught
    // on 2026-07-30: opt_out_capturing() writes its own persistent flag
    // (__ph_opt_in_out_<key> in localStorage), which survives independently of
    // the `va-disable` key that analytics-privacy.ts manages. So once a browser
    // had opted out, visiting ?va-disable=0 cleared OUR flag while PostHog
    // stayed opted out forever — the re-enable path silently did nothing.
    //
    // Calling opt_in_capturing() whenever the visitor is not excluded keeps the
    // two flags in agreement in both directions. It is safe to call on every
    // init for an already-opted-in browser.
    if (shouldExcludeFromAnalytics()) {
      posthog.opt_out_capturing()
    } else if (posthog.has_opted_out_capturing()) {
      posthog.opt_in_capturing()
    }
  } catch {
    /* Analytics must never break the page. */
    initialised = false
  }
}

/**
 * Send a custom event to PostHog with its FULL property set.
 *
 * Called from trackEvent() in analytics.ts, so every existing call site
 * reports here without being touched. Unlike the Vercel branch, nothing is
 * dropped: PostHog has no per-event property ceiling, which is the whole
 * reason it is worth having as a fourth sink.
 */
export function capturePostHog(event: string, params?: Record<string, unknown>): void {
  if (!initialised) return
  try {
    posthog.capture(event, params)
  } catch {
    /* never break the page */
  }
}

/**
 * Join key for Neon ↔ PostHog ↔ WhatsApp. Uses lead_ref (MC-XXXXXX), not email.
 * person_profiles is identified_only, so this also enables person profiles for replay linking.
 */
export function identifyLeadRef(leadRef: string): void {
  if (!initialised || !leadRef) return
  try {
    if (shouldExcludeFromAnalytics()) return
    posthog.identify(leadRef, { lead_ref: leadRef })
  } catch {
    /* never break the page */
  }
}

export function getPostHogIds(): { distinctId?: string; sessionId?: string } {
  if (!initialised) return {}
  try {
    return {
      distinctId: posthog.get_distinct_id?.() || undefined,
      sessionId: posthog.get_session_id?.() || undefined,
    }
  } catch {
    return {}
  }
}

/**
 * Playback URL for the current session, for pasting into a bug report or a
 * WhatsApp thread with a customer who hit a problem.
 */
export function currentReplayUrl(): string | undefined {
  if (!initialised) return undefined
  try {
    return posthog.get_session_replay_url({ withTimestamp: true }) ?? undefined
  } catch {
    return undefined
  }
}

export { posthog }
