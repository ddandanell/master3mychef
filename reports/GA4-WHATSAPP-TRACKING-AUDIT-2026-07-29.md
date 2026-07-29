# GA4 WhatsApp Conversion Tracking Audit — mychef.id

**Date:** 29 July 2026
**Property:** mychef.id — `G-W0PQH8ZKTF` (property 510246176)
**Container:** `GTM-KCBNZBL9`
**Method:** Live network inspection of `/g/collect` payloads on mychef.id + GA4 Realtime verification + source code review of `master3mychef`.

---

## 1. Headline finding

**WhatsApp tracking exists and works. It is counting every click twice.**

Live proof: 4 test WhatsApp clicks → GA4 Realtime reported **8 `generate_lead` key events** (screenshot-verified in Realtime overview, Key events card = 8, 100% `generate_lead`).

Your conversion numbers in GA4 are therefore **inflated by ~2×** — and unevenly, so ratios between pages are also wrong (see §4).

---

## 2. Verified: the tag stack is installed and transmitting

| Check | Result |
|---|---|
| GTM container loaded | ✅ `GTM-KCBNZBL9` |
| GA4 gtag loaded | ✅ `G-W0PQH8ZKTF` (direct `gtag('config')` in `index.html`) |
| `/g/collect` hits reaching Google | ✅ confirmed (`analytics.google.com/g/collect`, `tid=G-W0PQH8ZKTF`) |
| Data arriving in GA4 | ✅ confirmed live in Realtime |
| WhatsApp anchors on homepage | 14 (`a[href*="wa.me"]`), 12 carrying `data-source` |
| `generate_lead` marked as Key Event | ✅ |

No installation problem. The problem is duplication and missing report configuration.

---

## 3. Root cause — three independent systems fire on the same click

```
User clicks a WhatsApp link
│
├─ [1] React app — src/components/Layout.tsx
│      Document-level delegated listener on a[href*="wa.me"]
│      → gtag('event','generate_lead', {source, method:'WhatsApp', event_category:'conversion'})
│      → EVENT A
│
├─ [2] GTM GTM-KCBNZBL9
│      Trigger: Link Click, Click URL contains "wa.me"
│      Tag: GA4 event "whatsapp_click" (params link_url, link_text)
│      → EVENT B
│
└─ [3] GA4 Admin → Events → Modifications
       Rule "Map WhatsApp Click to Conversion": event_name = whatsapp_click → generate_lead
       → EVENT B is RENAMED to generate_lead
       → 2 × generate_lead per click
```

Captured payloads from a single click (both `en=generate_lead`, sequence `_s=2` and `_s=3`):

```
en=generate_lead ... ep.link_url=https%3A%2F%2Fwa.me%2F6289674072020...&ep.link_text=GET YOUR QUOTE WITHIN 2 HOURS →   ← GTM
en=generate_lead ... ep.source=homepage-hero&ep.method=WhatsApp&ep.event_category=conversion                          ← app code
```

The identical pattern applies to phone: rule 2 maps `phone_click` → `generate_lead`, and `Layout.tsx` also fires `generate_lead` for `tel:` links. **Phone clicks are double-counted too, and they land in the same `generate_lead` bucket as WhatsApp** — the two channels are indistinguishable in reports today.

---

## 4. Second-order problem: the inflation is not uniform

Because GTM only fires on real `<a>` link clicks, and several conversion paths use `window.open()` on a button instead:

| Path | App event | GTM event | Total counted |
|---|---|---|---|
| Anchor WhatsApp CTAs (most of the site) | 1 | 1 | **2×** |
| Area pages — `PrivateChefAreaPage.tsx` (4 CTAs with both an inline `onClick` **and** the global listener) | 2 | 1 | **3×** |
| `ContactPage`, `PartnersPage`, `BookingForm`, `BookingFormCatering`, `ConciergeWidget` (`window.open`) | 1 | 0 | **1×** |

Consequence: page-to-page and CTA-to-CTA comparisons are distorted. Area pages look ~3× better than contact/booking forms purely as an artefact of instrumentation.

---

## 5. Third problem: zero custom dimensions registered

**GA4 → Admin → Custom definitions: 0 of 0.**

Every descriptive parameter the site sends is collected but **cannot be used in any report**:

`source`, `method`, `page_source`, `form_id`, `service_type`, `cta_text`, `destination_url`, `time_to_complete`, `link_url`, `link_text`

This is why you can see *how many* conversions but not *which button, which page, or WhatsApp vs phone*.

---

## 6. Other observations

- **Nine key events are starred but dead.** `ads_conversion_Contact_1`, `ads_conversion_Outbound_click_Page_loa_1`, `ads_conversion_Request_quote_Page_load_1`, `ads_conversion_SUBMIT_LEAD_FORM_1`, `ads_conversion_SUBMIT_LEAD_FORM_2`, `close_convert_lead`, `conversion_event_book_appointment`, `qualify_lead` — all "No stream data detected" for 28 days. Legacy Google Ads imports; they clutter the key-event list.
- **`quote_submitted` is NOT a key event.** Form submissions are being collected but not counted as conversions.
- **`form_complete` never appears** in the last 28 days despite `trackFormComplete()` existing in `src/lib/analytics.ts` — it is either unwired or superseded by `quote_submitted`. Worth confirming.
- **Parameter named `source` is a poor choice.** It collides conceptually with GA4's built-in traffic-source dimensions and will be confusing once registered as a custom dimension. Recommend renaming to `cta_source`.
- **`transport_type: 'beacon'`** in `analytics.ts` is a Universal Analytics parameter. GA4 ignores it and it is being stored as a junk event parameter. Remove.
- **Two parallel GA4 loaders** (GTM `__googtag` tag ID 3 + hardcoded `gtag('config')` in `index.html`). This currently works but is fragile — a future GTM edit re-enabling a GA4 config could duplicate `page_view` as well.

---

## 7. Recommended fix (in order)

### Priority 1 — Stop the double count (choose ONE source of truth)

**Recommended: keep the app-side tracking, remove the GTM path.**
Rationale: the app-side listener covers `window.open()` button flows that GTM's Link Click trigger cannot see, and it already emits a meaningful `source` value per CTA. GTM's version only knows the raw link URL and button text.

Steps:
1. GA4 → Admin → Events → Custom configurations → Modifications → **delete** "Map WhatsApp Click to Conversion" and "Map Phone Click to Conversion".
2. GTM → **pause or delete** the two GA4 event tags (`whatsapp_click`, `phone_click`) and their Link Click triggers.
3. Code: remove the 4 redundant inline `onClick={() => trackWhatsAppClick(...)}` handlers in `src/components/PrivateChefAreaPage.tsx` (lines ~254, 338, 585, 746) — the global `Layout.tsx` listener already covers those anchors.
4. Re-test: 1 click must produce exactly 1 `generate_lead` in Realtime.

*(Alternative if you prefer GTM as the single source: strip `trackWhatsAppClick`/`trackPhoneClick` from the app instead, and add `window.open` dataLayer pushes for the 5 button-based flows. More work, less coverage — not recommended.)*

### Priority 2 — Split WhatsApp from phone
Both currently land in `generate_lead`. Either send distinct event names (`whatsapp_click` / `phone_click`) and mark both as key events, or keep `generate_lead` and rely on the `method` parameter — which requires Priority 3 to be usable.

### Priority 3 — Register custom dimensions
GA4 → Admin → Custom definitions → Create, event-scoped:

| Dimension name | Parameter |
|---|---|
| CTA Source | `cta_source` (after rename; `source` today) |
| Contact Method | `method` |
| Page Source | `page_source` |
| Service Type | `service_type` |
| Form ID | `form_id` |
| CTA Text | `cta_text` |

Note: custom dimensions are **not retroactive**. Data before registration stays unusable.

### Priority 4 — Housekeeping
- Remove `transport_type: 'beacon'` from `src/lib/analytics.ts`.
- Confirm whether `trackFormComplete()` is wired to anything.
- **Do NOT mark `quote_submitted` as a key event** — see §9, correction 1.
- **Do NOT un-star the 8 legacy key events without checking Google Ads first** — see §9, correction 2.

---

## 8. What was actually implemented — 29 July 2026

### Code (`master3mychef`) — committed to working tree, **NOT yet deployed**

| File | Change |
|---|---|
| `src/components/PrivateChefAreaPage.tsx` | Removed 4 inline `onClick={() => trackWhatsAppClick(...)}` handlers + now-unused import. The anchors already carry `data-source`, so the global listener still tracks them — 3× firing on area pages is gone. |
| `src/lib/analytics.ts` | Renamed param `source` → `cta_source` in `trackWhatsAppClick` and `trackPhoneClick`. Removed dead `transport_type: 'beacon'` (Universal Analytics leftover, ignored by GA4). |
| `src/components/QuoteFunnel.tsx` | Renamed `source` → `cta_source`, and added `data-skip-lead-track="true"` to the submit anchor so it no longer also fires `generate_lead` (see §9). |
| `src/components/Layout.tsx` | Added a comment block marking the delegated listener as the single source of truth, listing the `window.open()` flows it does not cover, and recording why GTM was removed. Added the `data-skip-lead-track` opt-out. |

`tsc --noEmit` and `eslint` both pass.

### Google Tag Manager (`GTM-KCBNZBL9`) — **published live as Version 4**
- `GA4 Event - whatsapp_click` → **paused**
- `GA4 Event - phone_click` → **paused**
- `GA4 - Configuration (All Pages)` → left untouched
- Verified in the live container: both now serialise as `{"function":"__paused"}`

### Google Analytics 4 (`G-W0PQH8ZKTF`)
- Deleted event modification **"Map WhatsApp Click to Conversion"**
- Deleted event modification **"Map Phone Click to Conversion"**
- Modifications list is now empty
- Registered 6 event-scoped custom dimensions: **CTA Source** (`cta_source`), **Contact Method** (`method`), **Page Source** (`page_source`), **Service Type** (`service_type`), **Form ID** (`form_id`), **CTA Text** (`cta_text`)

### Key events — cleaned up
Confirmed safe first: **no Google Ads campaigns are currently running**, and GA4 → Admin → Data import shows **0 data sources**, so nothing (web, offline, or Ads-side) feeds these events.

Un-starred all 8 dead key events:
`ads_conversion_Contact_1`, `ads_conversion_Outbound_click_Page_loa_1`, `ads_conversion_Request_quote_Page_load_1`, `ads_conversion_SUBMIT_LEAD_FORM_1`, `ads_conversion_SUBMIT_LEAD_FORM_2`, `close_convert_lead`, `conversion_event_book_appointment`, `qualify_lead`

Marked `quote_submitted` as a **key event**.

Key events are now exactly two: **`generate_lead`** and **`quote_submitted`**.

---

## 9. Making form submissions count — without recreating the double count

A completed quote funnel is a real win and should be a conversion. But `QuoteFunnel.tsx` fires `quote_submitted` from an `onClick` on an `<a href={waLink}>` — and that same click was also being caught by the `Layout.tsx` delegated listener, which fires `generate_lead`. Simply starring `quote_submitted` would have made one submission count as **two** conversions: the exact bug this audit removed.

Fix: the two events are now **mutually exclusive**.

- `QuoteFunnel.tsx` submit anchor carries `data-skip-lead-track="true"`
- `Layout.tsx` skips any `wa.me` anchor carrying that attribute

Result:

| User action | Event fired | Key event? |
|---|---|---|
| Completes the quote funnel and sends | `quote_submitted` only | ✅ |
| Clicks any other WhatsApp CTA | `generate_lead` only | ✅ |
| Clicks a phone link | `generate_lead` only (`method: Phone`) | ✅ |

Total conversions = `generate_lead` + `quote_submitted`, with **no overlap**. A submission is counted once, and as the deeper of the two events.

The same `data-skip-lead-track` pattern can be applied to the other four form flows (Contact, Partners, Booking, Catering) later if you want each to report as its own conversion type rather than as `generate_lead` with a distinct `cta_source`.

---

## 10. Important caveat on historical data

Deleting the duplicate does **not** correct history. All `generate_lead` figures prior to the fix remain roughly 2× inflated (3× on area pages, 1× on form flows). Treat pre-fix conversion counts as unreliable for absolute reporting, and annotate the fix date in GA4 (Admin → Data display → Annotations) so trend charts don't read the correction as a performance drop.
