# myCHEF.id — Tracking & Campaign Runbook

**Goal:** know which Google Ads campaign produces WhatsApp enquiries, and which of those become bookings.
**Written:** 30 July 2026
**Blocked on:** Google Ads overdue balance. Steps 1–3 are done. Steps 4 onward need write access.

---

## Current state — verified, not assumed

| System | State | Notes |
|---|---|---|
| **GA4** `mychef.id` (`G-W0PQH8ZKTF`) | ✅ Live, collecting | 16 active users, 166 events, 71 views on 30 Jul. The historic "zero /collect hits" bug is fixed. |
| **GTM** `GTM-KCBNZBL9` | ✅ Loaded | Container fires; GA4 config now loads directly from `index.html`. |
| **Site event tracking** | ✅ Already good | `trackWhatsAppClick()` → GA4 `generate_lead` with value, `service_type`, `cta_source`. Fans out to GA4 + GTM + Vercel + PostHog. |
| **WhatsApp → campaign attribution** | ✅ **Built today** | See section below. |
| **Google Ads conversion actions** | 🔴 3 Misconfigured, 1 Needs attention | Cannot be fixed — account read-only. |
| **Google Ads ↔ GA4 link** | 🔴 Not possible yet | Link creation needs Ads write access. |
| **Google Business Profile ↔ Ads** | 🔴 Not possible yet | Location assets need Ads write access. |
| **Search Console ↔ GA4** | ⚠️ Unverified | Doable independently of the suspension. |

**Key correction to the original plan:** the four "Misconfigured" goals were a **Google Ads-side** problem, not a website problem. The site was already sending good conversion events. Nothing needed rebuilding on `mychef.id` — what was missing was the wiring into Ads, which is what the payment gates.

---

## What was built today: WhatsApp → campaign attribution

### The problem

myCHEF closes on WhatsApp, off-site. Google Ads could record a *click* on a WhatsApp button, but the conversation arrived on the phone with no campaign attached. So "which campaign works" was only answerable as "which produced enquiries" — never "which produced bookings."

The codebase bridged that gap with a blended assumption in `analytics.ts`:

```
average booking value  IDR 7,500,000
lead → booking rate    20%
estimated lead value   IDR 1,500,000
```

**That single blended rate is the weakest link in the whole measurement chain.** If BBQ leads close at 40% and wedding leads at 5%, Smart Bidding optimising on that constant will systematically push budget toward the wrong service line. It cannot be fixed by better assumptions — only by observing real close rates per campaign.

### The fix

Every WhatsApp enquiry now arrives stamped with a short reference:

> Hi myCHEF, I'm interested in BBQ catering in Bali. Date: 14 Aug. Guests: 12. Area: Canggu. I'd like menu options and pricing. **(Ref: MC-7QX3K2)**

That same `lead_ref` is sent to GA4, GTM and PostHog alongside the full `gclid`, campaign, source and landing page. So:

1. Enquiry lands on WhatsApp with `MC-7QX3K2`.
2. Search `MC-7QX3K2` in PostHog or GA4 → the exact ad click behind it.
3. When it becomes a booking, log the ref against the real booking value.
4. After ~30 bookings you have **real close rates and real values per campaign** — and can replace the 20% guess.

### Files changed

| File | Change |
|---|---|
| `src/lib/attribution.ts` | **New.** Captures `gclid`/`gbraid`/`wbraid`/`msclkid` + all five UTMs, persists 90 days, mints the stable ref. |
| `src/lib/whatsapp.ts` | Added `appendLeadRef()` and `installWhatsAppAttribution()`. |
| `src/lib/analytics.ts` | Attribution merged into `generate_lead` / `form_complete` / `quote_submitted` inside `trackEvent()`. |
| `src/main.tsx` | Calls `captureAttribution()` and `installWhatsAppAttribution()` at startup. |
| `BookingForm.tsx`, `BookingFormCatering.tsx`, `PartnersPage.tsx`, `ContactPage.tsx` | The four programmatic `window.open()` launches wrapped in `appendLeadRef()`. |

### Three design decisions worth knowing

1. **The ref is injected at click time, not render time.** The site prerenders through a real Chromium (`scripts/prerender.ts`). Generating the ref during render would have baked **one shared code into the static HTML** — every visitor on earth enquiring with the same ref. That failure mode looks like working attribution, which makes it worse than none. A single delegated listener on `document` covers all 193 anchor call sites with zero edits, plus any added later.

2. **`gbraid` and `wbraid` are captured, not just `gclid`.** On iOS traffic Google increasingly sends these *instead* of `gclid`. Since the campaign targets AU/US/UK/SG — and iPhone users skew toward the premium buyer myCHEF wants — capturing only `gclid` would have silently lost the most valuable segment.

3. **A direct return visit does not overwrite a stored ad click.** Someone clicks an ad, leaves, returns by typing the URL, then enquires. Naive last-touch would credit that booking to Direct. This is the single most common way self-built tracking under-reports paid spend. TTL is 90 days, matching Google Ads' own lookback so the two systems agree.

Ref alphabet excludes `I`, `L`, `O`, `U` — codes get read aloud and retyped by staff, so the visually colliding characters are removed.

### Verified

- `tsc --noEmit` → clean
- `eslint` on all 8 touched files → clean
- 10 behavioural checks (stamping, idempotency, bare URLs, non-WhatsApp URLs, message preservation, malformed input, ref alphabet) → all pass

**Not yet verified:** live browser behaviour. Test before trusting it — see step 3.

---

## Steps

### ✅ 1. Site-side attribution — DONE

### ⬜ 2. Deploy

```bash
npm run lint
npm run build      # runs prerender + validators
git add -A && git commit -m "Add GCLID→WhatsApp campaign attribution"
git push
```

⚠️ `vite build` and the pre-commit hook **cannot run in the Linux sandbox** — run these on your Mac.

### ⬜ 3. Verify live (do this before spending anything)

1. Visit `https://mychef.id/?gclid=TEST123&utm_source=google&utm_medium=cpc&utm_campaign=verification`
2. Click any WhatsApp button. **The prefilled message must end with `(Ref: MC-XXXXXX)`.**
3. In GA4 → Realtime, confirm `generate_lead` carries `lead_ref`, `attr_click_id=TEST123`, `attr_campaign=verification`.
4. Open a **new** tab directly to `https://mychef.id/` (no parameters) and click WhatsApp again. The ref must be **the same**, and `attr_campaign` must still read `verification` — proving direct visits don't wipe attribution.
5. Test on a real iPhone, not just desktop Chrome.

### ⬜ 4. Register the custom dimensions in GA4

GA4 discards event parameters that have no registered dimension. **Until this is done, `lead_ref` will not appear in any report** — the data is collected but unqueryable.

Admin → Custom definitions → Create custom dimension, scope **Event**, for each:

| Dimension name | Event parameter |
|---|---|
| Lead Ref | `lead_ref` |
| Attr Click ID | `attr_click_id` |
| Attr Click ID Type | `attr_click_id_type` |
| Attr Source | `attr_source` |
| Attr Medium | `attr_medium` |
| Attr Campaign | `attr_campaign` |
| Attr Term | `attr_term` |
| Attr Landing Path | `attr_landing_path` |
| Service Type | `service_type` |
| CTA Source | `cta_source` |

Not retroactive — dimensions only populate from creation onward. Do this **before** launching ads.

### ⬜ 5. Mark key events in GA4

Admin → Events → mark as key event: `generate_lead`, `form_complete`, `quote_submitted`.

### ⬜ 6. Link Search Console → GA4

Admin → Product links → Search Console links. Independent of the Ads suspension — can be done now.

---

## 🔒 Everything below requires the overdue balance to be paid

### ⬜ 7. Clear the four account blockers

1. Pay the overdue balance
2. Complete advertiser verification — **slowest item, start immediately**
3. Submit Indonesia NIK / DGT tax information
4. Confirm the suspension has actually lifted

A suspension for *"concerns about future payments"* is not purely mechanical. Paying may not auto-restore serving; budget time for an appeal.

### ⬜ 8. Remove the old campaigns — FIRST, before anything else

Per your decision: **remove both.** Neither ever served an impression, so there is no history to lose.

⚠️ **Do this before you import anything.** `General keywords` is currently **Enabled**, all-broad-match, zero negatives, IDR 399,487/day. The moment the suspension lifts it starts spending.

1. Campaigns → select `General keywords` → Edit → Remove
2. Campaigns → select `ads 1` (Performance Max) → Edit → Remove
3. Confirm the campaign list is empty

### ⬜ 9. Delete the four old conversion goals

Goals → Conversions → Summary. Remove: `Submit lead form`, `Book appointment`, `Request quote`, `Outbound click`.

Safe to remove — all four are misconfigured and have recorded zero conversions.

### ⬜ 10. Link Google Ads ↔ GA4, then import conversions

1. Ads → Tools → Data manager → Google Analytics 4 → link property `mychef.id`
2. Import `generate_lead`, `quote_submitted`, `form_complete` as conversion actions
3. Set **`generate_lead` as the only Primary** action. Everything else Secondary.

**Why only one primary:** if all three count as primary, one visitor who clicks WhatsApp *and* submits the quote form records 2–3 conversions. Smart Bidding then optimises toward a phantom conversion rate. Get this wrong and every downstream number is wrong.

4. Conversion window: **90 days** (matches the attribution TTL, and a pre-trip planner may search in August and book in October)
5. Attribution model: **data-driven**
6. Count: **One** per click, not Every

### ⬜ 11. Google Business Profile → Ads

Ads → Tools → Assets → Location assets → link the Business Profile. Enables location extensions and store-visit style signals.

### ⬜ 12. Import the campaign

Google Ads Editor → Import → from file:

1. `01-keywords.csv`
2. `02-responsive-search-ads.csv`
3. `03-negative-keywords.csv`

Then set manually (CSV cannot carry these):
- Location option → **Presence**, not "Presence or interest"
- Confirm Search Partners **off** and Display **off**
- Confirm budget IDR 118,000/day

**Review the Editor diff before posting. Post nothing you have not read.**

### ⬜ 13. First 30 days

- **Search Terms report every 2–3 days.** Add negatives. This is where money is saved on a new campaign.
- **Stay on Maximize Clicks.** Do not switch to Smart Bidding until ~15–30 conversions/month.
- **Log every WhatsApp ref against its booking outcome.** This is the whole point — a simple sheet of `ref | date | service | quoted | booked | value` is enough. After ~30 bookings, replace the 20% blended close rate with real per-service numbers.
- Leave the budget alone until search-term data justifies more.

---

## Open items for you

1. **4 or 5 guest minimum?** The site says four (`PillarSubPage.tsx`); my earlier notes said five. Ad copy currently says 4, matching the site.
2. **IDR or converted currency in ads?** IDR 700K reads as a large number to an Australian; it's ~AUD 66, which is genuinely competitive. Currently IDR, matching the site.
3. **Is a visible `(Ref: MC-XXXXXX)` acceptable in customer messages?** It reads as a normal booking reference and is what makes the loop closable. Set `SHOW_REF_FOR_ORGANIC = false` in `whatsapp.ts` to limit it to paid traffic only, or tell me and I'll remove it from the message and rely on GA4 alone — weaker, but invisible.
4. **Does the estimated IDR 1.5M lead value still hold?** It drives GA4's revenue columns and, later, Smart Bidding.

---

## One strategic caution

The core term `private chef bali` is ~600 searches/month *globally*. Total addressable commercial intent is ~1,500–3,000/month. Your site already has substantial content ranking for these terms, and the SEO work is live.

Before scaling paid spend, it is worth measuring whether Google Ads actually beats organic per rupiah here. The attribution built today will tell you that — `attr_source` distinguishes paid from organic on every single lead. Give it 60 days of real data before deciding how much this channel deserves.
