# myCHEF.ID Analytics & Optimization System — Handover (2026-06-22)

Status: **Foundation built, deployed, and CONFIRMED RECORDING.** Tag Assistant verified `page_view` hits send, and GA4 now shows live real-visitor data (e.g. 2026-06-22: 1 active user, 21 events, 8 views in-day) — the earlier "0 in Realtime" was GA4 bot-filtering the automated/test browser, not a tracking failure. Remaining open item: mark `whatsapp_click` as key event once a real visitor generates it. See also `GA4-SETTINGS-OPTIMIZATION.md` for the tuned property-settings checklist.

---

## A. What was set up

### Google Tag Manager (NEW)
- **Account:** myCHEF.ID — account ID `6362130619`
- **Container:** mychef.id (Web) — **Container ID `GTM-KCBNZBL9`** — container ID `256177628`
- **Published:** Version 2 (live), owner daviddandanell@gmail.com
- **Tags in container:**
  - `GA4 - Configuration (All Pages)` — Google Tag, ID `G-W0PQH8ZKTF`, trigger *Initialization – All Pages* (sends page_view)
  - `GA4 Event - whatsapp_click` — GA4 Event, event name **`whatsapp_click`**, params `link_url` = {{Click URL}}, `link_text` = {{Click Text}}
  - Trigger: `WhatsApp Click` — Click / Just Links, fires when **Click URL contains `wa.me`** (every WhatsApp CTA on the site uses `wa.me/628113803488`)
  - Built-in Click variables enabled (Click URL, Click Text, Click Element)

### GA4 (existing property)
- Account `a372747303`, **property `p510246176`**, **measurement ID `G-W0PQH8ZKTF`**, stream "mychef"
- Earlier this session: retired the broken `whatsapp_contact` conversion (it fired on every page_view) and made `generate_lead` the key event. (Going forward, the GTM `whatsapp_click` is the intended WhatsApp conversion — see "Remaining work".)

### Website code changes (deployed to production, Vercel)
1. **`index.html`** — removed hardcoded `gtag('config','G-W0PQH8ZKTF')` + gtag.js loader; added the GTM head snippet (in `<head>`) and the GTM noscript (after `<body>`). GA4 now loads **only** via GTM.
2. **`src/components/Layout.tsx`** — removed the manual `trackPageView()` call → SPA route-change pageviews now rely on GA4 Enhanced Measurement (history events), eliminating duplicate pageviews.
3. **`scripts/generate-redirects.ts` + `vercel.json`** — **CSP fix** (critical). The old Content-Security-Policy (`script-src 'self' …`) was blocking *all* Google tracking domains — it would have blocked GTM and GA4 entirely. New CSP allows `googletagmanager.com` (scripts) and `google-analytics.com` (collect/connect) and `'unsafe-inline'` for the GTM bootstrap.

### Deploys made this session (all production, READY)
- `c8824dc` — WhatsApp/phone number changed sitewide to +62 811-3803-488
- `0d507c8` — migrate GA4 to GTM + remove duplicate pageview
- `4aadd1e` — CSP fix (allow GTM + GA4)

---

## B. What was confirmed vs. open

**Confirmed working on the live site (mychef.id):**
- GTM (`GTM-KCBNZBL9`) loads — `gtm.js` 200
- GA4 tag loads via GTM — `gtag/js?id=G-W0PQH8ZKTF` 200; gtag fires (Google audience ping observed with the GA4 ID + a valid client ID)
- New CSP live and correct (script-src + connect-src include the Google domains)
- Duplicate pageviews structurally removed (both old sources deleted)

**OPEN — must verify:** GA4 was **not yet showing my test visits** in Realtime (0 active users), and the "Today" totals were static. This is **ambiguous** — most likely an **active "Internal traffic" data filter** excluding the office/test IP (in which case real visitors track fine), or processing lag. Could not finish the in-UI filter check because the GA4 Admin page froze the browser during the session. The CSP block (now fixed) was almost certainly the real cause of tracking going flat.

---

## C. HOW TO VERIFY GA4 IS RECORDING (do this once real visitors have hit the site)

1. Open GA4 → **Reports → Realtime** during a time you know real visitors are on the site. If you see active users + `page_view` events → **tracking works.**
2. Open GA4 → **Admin → Data collection and modification → Data filters.** If there is an **"Internal Traffic" filter** with state = **Active**, that is why your own/office visits don't show (this is normal/benign — real users still track). If you want to see your own visits too, set it to **Testing** temporarily.
3. To test a WhatsApp conversion: on the live site click any "Chat on WhatsApp" button, then in GA4 **Realtime** (or **DebugView** via GTM Preview) look for the **`whatsapp_click`** event with `link_url` / `link_text` params.
4. If after real traffic GA4 still shows nothing: the next suspects are GA4 **consent mode** and the GTM tag firing — diagnose with **GTM → Preview (Tag Assistant)** on a normal (non-automated) browser, which shows exactly whether the GA4 config tag fired and sent the hit.

---

## D. Remaining work to finish the system (per project spec)

1. **Confirm GA4 hits** (section C) — gates everything below.
2. **Mark `whatsapp_click` as the GA4 key event** (Admin → Events) once it appears, and retire/keep `generate_lead` accordingly (it still fires from code as a redundant secondary signal — can be removed later for full cleanliness).
3. **Looker Studio dashboard (3 pages):** Weekly Decision Board (scorecards, trends, page/source/device/service tables, funnel, opportunities) · Diagnostic · AI-input page. Source = GA4 (`p510246176`).
4. **Weekly automated Claude optimization brief:** native weekly scheduled task that pulls GA4 data, applies the recommendation rules (high-traffic/low-conversion, mobile underperformance, etc.), and writes a JSON + Markdown brief to your folder. (BigQuery deferred per your decision — not needed at current traffic.)
5. **QA + final sign-off.**

### Page / service classification (built, ready to reuse in dashboard + brief)
- **Service:** Catering `/catering*` · Events `/events*`,`/corporate-*` · Fine Dining/Private Chef `/fine-dining*`,`/private-chef-bali*`,`/chefs*` · In-Villa Service `/in-villa-service*` · Staffing `/staffing*`,`/partner-platform` · Retreats `/events/retreats`,`/catering/retreat-catering` · Locations `/locations/*` · Other (pricing, contact, help, blog, legal)
- **Page type:** homepage `/` · hub `/catering`,`/events`,`/fine-dining`,`/in-villa-service` · service `*/sub` · landing `/locations/*` · article `/blog/*` · trust `/about`,`/faq`,`/help/*` · contact `/contact`,`/book`

---

## E. Notes, risks, ownership

- **Where things live:** GTM container `GTM-KCBNZBL9` (account myCHEF.ID) · GA4 property `p510246176` (G-W0PQH8ZKTF) · website repo github.com/ddandanell/master3mychef (Vercel auto-deploys `main`) · CSP source of truth = `scripts/generate-redirects.ts` (regenerates `vercel.json` on build — edit CSP there, not in vercel.json directly).
- **Security tradeoff:** the CSP now allows `'unsafe-inline'` scripts (required for the standard GTM bootstrap). This is a common, acceptable tradeoff for GTM; can be hardened later with a nonce/hash if desired.
- **Mirror:** the unused `app/` directory was updated for the number change but its own GTM/CSP weren't migrated (it is not the deployed source — root `src/`/`index.html` is). Safe to ignore or clean up later.
- **WhatsApp trigger** matches `wa.me` only (all site links use it). If `api.whatsapp.com` links are ever added, update the trigger to a RegEx (`wa\.me|api\.whatsapp\.com`).
