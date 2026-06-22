# myCHEF.ID — GA4 Settings Optimization (tuned for a Bali / non-EU, no-cookie-banner setup)

Property: `p510246176` · Measurement ID `G-W0PQH8ZKTF` · GTM `GTM-KCBNZBL9`
Date: 2026-06-22

**Why a checklist and not "done":** GA4's admin UI was freezing the automated browser this session (it keeps realtime connections open so the page never goes idle, which blocks reliable clicks/screenshots). Each item below is the exact path + value + reason. Most take <30 seconds. The two HIGH-impact ones (data retention, time zone/currency) are worth doing today.

---

## Priority 1 — do today (data quality, irreversible-if-missed)

### 1. Data retention → 14 months (HIGH)
**Admin → Data collection and modification → Data retention**
- Event data retention: change **2 months → 14 months** (14 is the max for the free tier).
- "Reset user data on new activity": **ON**.
- **Why:** retention only applies going forward — data discarded at 2 months is gone permanently. This is the single most important setting and the most common one left at default. Explorations/funnels can only look back as far as retention allows.

### 2. Reporting time zone + currency (HIGH)
**Admin → Property details (Property Settings)**
- Reporting time zone: **(GMT+08:00) — choose an Indonesia / WITA city (Makassar/Bali, UTC+8)**. Bali = WITA.
- Currency displayed as: **Indonesian Rupiah (IDR / Rp)**.
- **Why:** day boundaries (what counts as "today") and any revenue/value display must match Bali time, or every daily report is shifted by hours and "best day/time to post" analysis is wrong. Set this before you accumulate more data — changing it later doesn't retroactively fix historic days.

---

## Priority 2 — this week (measurement completeness)

### 3. Enhanced Measurement — confirm all ON (HIGH for your SPA)
**Admin → Data streams → "mychef" web stream → Enhanced measurement (gear)**
- **Page changes based on browser history events: ON** ← critical. Your site is a React single-page app; without this, route changes (e.g. `/` → `/pricing`) don't fire `page_view`.
- Also ON: Outbound clicks, Site search, Form interactions, Scrolls, File downloads.
- **Why:** outbound-click + form tracking gives you secondary engagement signals for free; the history-events toggle is what makes SPA pageviews work at all.

### 4. Search Console ↔ GA4 link — confirm Active
**Admin → Product links → Search Console links**
- Confirm the mychef.id property link shows **Active** (it already appears under Reports → Search Console, so it is linked — just verify and, if needed, enable the "Search Console" reports under Library so they show in the left nav for everyone).
- **Why:** this is what feeds organic query / impression / CTR / position data into GA4 and into the weekly AI report's `top_search_queries` slot.

### 5. Mark `whatsapp_click` as a key event (when it appears)
**Admin → Events → Key events** (or Events list → toggle "Mark as key event")
- Once a real visitor clicks a WhatsApp button, `whatsapp_click` will appear; toggle it to **key event**.
- Keep `generate_lead` as key event until then (it's the redundant fallback).
- **Why:** key events are what the dashboard and forecast treat as conversions.

---

## Priority 3 — clean reporting (optional but recommended)

### 6. Internal traffic filter → define + activate
**Admin → Data streams → web stream → Configure tag settings → Show all → Define internal traffic** → add a rule (your home/office IP, `traffic_type = internal`).
Then **Admin → Data settings → Data filters → "Internal Traffic"** → set state **Testing → Active**.
- **Why:** stops your own visits (and test clicks) from inflating numbers. It's currently in **Testing** (doesn't exclude yet). Only activate after the IP rule is defined, or you'll exclude nothing / the wrong thing.

### 7. Reporting identity → Blended
**Admin → Reporting identity → Blended** (User-ID → Google signals → Device).
- **Why:** with no EU consent constraints, Blended gives the most accurate user/session de-duplication across devices.

### 8. Unwanted referrals
**Admin → Data streams → web stream → Configure tag settings → List unwanted referrals** → add `wa.me`, `whatsapp.com` (and any payment domain you add later).
- **Why:** prevents WhatsApp/3rd-party hops from being miscredited as the traffic source of a session.

---

## Your "no cookies / not in Europe" point — what it means for GA4

You're correct that Indonesia has **no GDPR-style consent-banner requirement**, so:

- **You do not need a cookie consent banner** for GA4 on mychef.id. (You'd only need one if you deliberately target EU/EEA/UK visitors or run Google Ads into the EEA.)
- **Leave GA4 Consent Mode at default = granted.** Do **not** add a CMP that defaults consent to "denied" — that would suppress your own data for no legal benefit in your market.
- **Keep "Granular location and device data collection" ON** (Admin → Data streams → web stream → Configure tag settings) — no EU restriction applies, so you get full city/device detail for your Bali + tourist-origin analysis.
- **Google signals:** safe to **enable** (Admin → Data collection → Google signals) — it powers Demographics & Interests reports (age, gender, tourist-origin country interest). Note Google no longer uses signals for cross-device *reporting identity*, but the demographics reports are still useful and there's no consent blocker for you.

**One caveat (data-driven honesty):** "no banner required" is about Indonesian/non-EU law and your current Bali-tourist audience. If you ever (a) run Google/Meta ads targeting EU residents, or (b) a large share of traffic is provably EU-based, revisit consent mode then. For today's setup, no banner is the correct, optimized choice.

---

## Verification after you apply these
1. Realtime shows your visit when internal filter is in Testing; disappears once Active (confirms the filter works).
2. Reports → Search Console → Queries returns rows (confirms the GSC link feeds data).
3. Explore → try a 12-month date range (confirms 14-month retention took effect — won't backfill, but stops the 2-month cutoff going forward).
4. DebugView (via GTM Preview) shows `whatsapp_click` with `link_url`/`link_text` when you click a WhatsApp CTA.

I can apply all of Priority 1 + 2 with you live in a few minutes once the GA4 tab is responsive (or walk you through it click-by-click).
