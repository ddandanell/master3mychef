# Conversion Measurement — WhatsApp lead-quality (set up 2026-06-23)

_How to tell whether the qualified-CTA work (June 2026) actually improves lead quality. **No GTM/GA4 changes were made** — this is a watch-list using the tracking that already exists._

## What changed (baseline to measure against)
Every important WhatsApp entry point now prefills a **qualified** enquiry (service + Date/Guests/Area scaffold + intent) instead of "Hi"/"price?", built from the single helper `src/lib/whatsapp.ts`:
- `/pricing` + `/calculator` calculator CTA (interactive: When/Area/Intent/Notes)
- 35 commercial service pages (catering, in-villa, events, staffing, dining, private-chef)
- Global **footer** CTAs, **floating** WhatsApp button, **sticky mobile** CTA (this sprint)
- `ConciergeWidget` was already route-aware (unchanged)

## Tracking is unchanged and intact
- WhatsApp/phone clicks fire `generate_lead` via the existing global listener in `Layout.tsx` (single source; no double-fire). GTM `GTM-KCBNZBL9` + GA4 mapping unchanged.
- Every upgraded CTA still carries a **`data-source`** attribute (verified). The canonical number `628113803488` is preserved everywhere (now supplied by the helper).

## What to watch in GA4 (no new config needed)
1. **`generate_lead` total** — overall conversion volume (WhatsApp + phone). Trend week-over-week from 2026-06-23.
2. **WhatsApp clicks by `data-source`** — compare the qualified entry points:
   - `pricing-calculator-cta` (pricing/calculator)
   - `catering-bbq-cta`, `catering-drop-off-cta`, `service-mixology-cta`, `events-birthdays-cta`, `staffing-villa-staff-cta`, … (per-service pages)
   - `footer-social`, `footer-top` (global footer)
   - `*--floating-button` (floating WhatsApp button, page-scoped)
   - `*--sticky-mobile-cta` (mobile sticky bar, page-scoped)
3. **Pricing-page CTA clicks** (`pricing-calculator-cta`) — does the interactive selector convert better than before?
4. **Service-page CTA clicks** vs **footer/floating fallback** — are visitors using the in-context (more qualified) CTA?
5. **Mobile sticky CTA clicks** (`*--sticky-mobile-cta`) — mobile conversion share.

## What to watch manually (the real signal)
6. **WhatsApp inbox lead quality** — are incoming messages now structured ("interested in X, Date/Guests/Area, want pricing/availability") instead of "Hi" / "price?"? This is the fastest qualitative read on whether the change worked, and informs reply speed.

## Suggested cadence
Check 1–2 weeks after 2026-06-23, then monthly. If `generate_lead` holds or rises **and** inbox messages are visibly more qualified, the work succeeded. If GA4/GSC get connected, add CTR-by-source and impressions for the money pages.
