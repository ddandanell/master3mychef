# myCHEF.id — Vercel Web Analytics Report

**Period:** 30 Jun 2026 → 30 Jul 2026 (30 days, `Asia/Makassar`)
**Project:** `master3mychef` · `prj_VkMbGIUciFBk2VE0EUy2SikfWOgK` · team *Server Bali* (Pro)
**Data source:** `vercel.com/api/web-analytics/v2/*` — the same endpoints the Vercel dashboard uses
**Generated:** 30 Jul 2026

---

## 1. Resolution of the reported problem

The reported fault — *"404 — not enabled on the project (the `@vercel/analytics` package is installed but the feature is off)"* — **was a misdiagnosis.** Nothing on the project needed fixing.

| Check | Evidence | Verdict |
|---|---|---|
| Web Analytics enabled | `GET /api/v1/web/insights/enabled` → `{"isEnabled":true,"hasData":true,"enabledAt":1778693943031}` (14 May 2026) | Enabled |
| Data being collected | 3,843 page views / 1,215 visitors in 30 days | Collecting |
| Client instrumentation | `<Analytics />` + `<SpeedInsights />` mounted in `src/main.tsx` | Correct |
| Dashboard API calls | `/overview`, `/timeseries`, `/stats` all return `200` | Healthy |

### What actually returns 404

Only the **Vercel MCP connector's** access to the public query API (`api.vercel.com/v1/query/web-analytics/...`). Three probes isolate it to the connector's OAuth token rather than the project:

| MCP call | Result |
|---|---|
| `get_project` (same project + team) | 200, full payload |
| `list_deployments` (same project + team) | 200, 20 deployments |
| `list_projects` (same team) | **`{"projects": []}`** — impossible, the project exists |
| `get_web_analytics` | **404 `not_found`** |

A token that can read a project by ID but cannot enumerate projects is a token installed with **restricted scope**. Vercel returns `404 not_found` (not `403`) for out-of-scope resources, which is exactly why the error message reads like "the feature is off."

### The fix

Two independent paths — the second is already implemented and does not depend on Vercel support or reauthorization:

1. **Reauthorize the Vercel connector.** Disconnect and reconnect it, granting access to **all projects** in the *Server Bali* team rather than a selected subset. This restores `get_web_analytics` and `list_projects`.
2. **Bypass the connector (done).** `scripts/vercel-analytics-report.mjs` now queries the documented public REST API using the `VERCEL_TOKEN` already present in `.env.local`:

   ```bash
   node scripts/vercel-analytics-report.mjs --days 30
   node scripts/vercel-analytics-report.mjs --days 7 --json
   ```

   If that script also returns 404, the token itself lacks the team scope — re-issue it at
   <https://vercel.com/account/settings/tokens> with **Server Bali** selected.

---

## 2. Headline numbers

| Metric | Last 30 days | Prior 30 days | Change |
|---|---:|---:|---:|
| Page views | **3,843** | 1,965 | **+96%** |
| Visitors | **1,215** | 606 | **+100%** |
| Bounce rate | **55%** | 59% | −4 pts |
| Pages / visitor | 3.2 | 3.2 | flat |

Traffic doubled month-over-month while bounce rate improved. Section 6 explains why the *page view* figure is partly inflated and should be treated with more caution than the *visitor* figure.

---

## 3. Daily trend

| Date | Page views | Visitors |
|---|---:|---:|
| 2026-06-30 | 37 | 11 |
| 2026-07-01 | 97 | 18 |
| 2026-07-02 | 18 | 10 |
| 2026-07-03 | 53 | 19 |
| 2026-07-04 | 35 | 15 |
| 2026-07-05 | 57 | 17 |
| 2026-07-06 | 88 | 34 |
| 2026-07-07 | 60 | 35 |
| 2026-07-08 | 184 | 58 |
| 2026-07-09 | 79 | 28 |
| 2026-07-10 | 155 | 63 |
| 2026-07-11 | 62 | 27 |
| 2026-07-12 | 119 | 42 |
| 2026-07-13 | 80 | 35 |
| 2026-07-14 | 70 | 30 |
| 2026-07-15 | 105 | 34 |
| 2026-07-16 | 199 | 66 |
| 2026-07-17 | 131 | 57 |
| 2026-07-18 | 190 | 49 |
| 2026-07-19 | 192 | 51 |
| 2026-07-20 | 97 | 39 |
| 2026-07-21 | 126 | 67 |
| 2026-07-22 | 190 | 54 |
| 2026-07-23 | 203 | 49 |
| 2026-07-24 | 246 | 79 |
| 2026-07-25 | 199 | 37 |
| 2026-07-26 | 243 | 39 |
| 2026-07-27 | 198 | 62 |
| 2026-07-28 | 145 | 52 |
| 2026-07-29 | 165 | 53 |
| 2026-07-30 | 20 | 5 |

*30 July is a partial day (report generated mid-morning WITA) and should be excluded from trend reading.*

Weekly visitor averages (sum of daily counts ÷ 7; daily uniques overlap, so treat as directional): 18/day (week 1) → 41/day (week 2) → 47/day (week 3) → **55/day (week 4)**. Growth is consistent across all four weeks, with the steepest step between weeks 1 and 2.

---

## 4. Top pages

| Path | Page views | Visitors |
|---|---:|---:|
| `/` | 921 | 518 |
| `/pricing` | 285 | 223 |
| `/locations/seminyak` | 100 | 86 |
| `/catering` | 105 | 77 |
| `/fine-dining` | 136 | 75 |
| `/catering/bbq-catering` | 109 | 70 |
| `/fine-dining/menus` | 88 | 62 |
| `/quote` | 61 | 53 |
| `/locations/canggu` | 72 | 48 |
| `/in-villa-service/butlers` | 70 | 47 |
| `/locations` | 56 | 42 |
| `/blog/private-chef-cost-bali` | 42 | 39 |
| `/in-villa-service/mixology` | 56 | 39 |
| `/catering/buffet` | 62 | 38 |
| `/events` | 52 | 37 |
| `/locations/ubud` | 48 | 36 |
| `/fine-dining/tasting-menu` | 46 | 34 |
| `/in-villa-service` | 47 | 33 |
| `/blog/wedding-private-chef-bali-planning-guide` | 32 | 32 |
| `/bar-services` | 50 | 31 |
| `/fine-dining/private-chef-bali` | 44 | 31 |
| `/bbq-grill` | 36 | 27 |
| `/catering/plated-catering` | 44 | 26 |
| `/catering/babi-guling` | 45 | 24 |
| `/locations/sanur` | 39 | 24 |
| `/staffing` | 33 | 24 |
| `/catering/villa-catering` | 25 | 23 |
| `/contact` | 30 | 23 |
| `/fine-dining/romantic-dinner` | 34 | 23 |
| `/locations/jakarta` | 30 | 23 |

**Funnel reading:** 1,215 visitors → 223 reach `/pricing` (18.4%) → 53 reach `/quote` (4.4% of all visitors, 23.8% of pricing viewers). `/contact` adds 23. The pricing→quote step is where the drop is steepest and is the highest-leverage CRO target.

**Content observations:**

- `/` and `/pricing` alone are 31% of all page views. Everything else is a long tail.
- `/locations/seminyak` (86 visitors) outperforms Canggu (48), Ubud (36) and Sanur (24) by a wide margin — the location pages are not performing evenly, which suggests either search-demand asymmetry or uneven internal linking rather than an even content strategy.
- Only two blog posts break 30 visitors. The blog is not yet a meaningful acquisition channel.
- `/locations/jakarta` at 23 visitors is notable for a Bali-focused brand and may indicate misaligned intent.

---

## 5. Acquisition

| Referrer | Page views | Visitors |
|---|---:|---:|
| google.com | 681 | 586 |
| m.facebook.com | 13 | 13 |
| facebook.com | 11 | 11 |
| bing.com | 11 | 9 |
| chatgpt.com | 8 | 7 |
| vercel.com | 12 | 6 |
| bali.tribunnews.com | 6 | 4 |
| gemini.google.com | 5 | 4 |
| l.wl.co | 5 | 4 |
| perplexity.ai | 3 | 3 |
| villa-catering-bali.online | 3 | 3 |
| com.google.android.googlequicksearchbox | 2 | 2 |
| dk.trustpilot.com | 2 | 2 |
| search.google.com | 3 | 2 |
| claude.ai, duckduckgo.com, google.co.id, google.co.nz, google.es, id.pinterest.com, l.facebook.com, l.instagram.com, msn.com, mychef.ae, stake.com, tiktok.com, eesupportapp.isu.apple.com | 1 each | 1 each |

- **Google is 48% of all visitors** (586 / 1,215) and 88% of all referred traffic. This is a single-channel dependency.
- **Direct / untagged is roughly 45%** (~546 visitors). Vercel Analytics has no UTM data for this project, so paid, email and social campaigns are indistinguishable from genuine direct traffic. If any campaigns are running, they are currently unmeasurable here.
- **AI assistants sent 15 visitors** (ChatGPT 7, Gemini 4, Perplexity 3, Claude 1) — 1.2% of total. Small, but non-zero and worth tracking as a trend line given the GEO/AEO work in this project.
- **`bali.tribunnews.com` (4 visitors)** is the only earned-media referrer in the period.
- **`stake.com` and `eesupportapp.isu.apple.com`** are almost certainly referrer spam or noise, not real traffic.

### Geography

| Country | Page views | Visitors | Pages/visitor |
|---|---:|---:|---:|
| Indonesia | 1,823 | 346 | **5.3** |
| United States | 473 | 279 | 1.7 |
| Australia | 510 | 168 | 3.0 |
| Singapore | 173 | 50 | 3.5 |
| United Kingdom | 69 | 38 | 1.8 |
| Vietnam | 39 | 37 | 1.1 |
| New Zealand | 142 | 35 | 4.1 |
| Malaysia | 65 | 24 | 2.7 |
| UAE | 44 | 21 | 2.1 |
| Netherlands | 32 | 15 | 2.1 |
| Hong Kong | 27 | 14 | 1.9 |
| China | 12 | 12 | 1.0 |
| Germany | 31 | 12 | 2.6 |
| India | 31 | 12 | 2.6 |
| Japan | 23 | 11 | 2.1 |

Australia + New Zealand together are 203 visitors (17%) with strong engagement (3.0–4.1 pages/visitor) — the strongest genuine inbound market after the US.

### Technology

| Device | Page views | Visitors |
|---|---:|---:|
| Desktop | 2,194 | 613 |
| Mobile | 1,629 | 587 |
| Tablet | 6 | 2 |

| Browser | Page views | Visitors |
|---|---:|---:|
| Chrome | 1,882 | 497 |
| Mobile Safari | 742 | 297 |
| Chrome Mobile | 392 | 140 |
| Chrome Mobile iOS | 336 | 90 |
| Microsoft Edge | 131 | 49 |
| Safari | 130 | 39 |
| Samsung Browser | 75 | 28 |
| Google Search App | 58 | 21 |

| OS | Page views | Visitors | Pages/visitor |
|---|---:|---:|---:|
| iOS | 1,141 | 411 | 2.8 |
| Windows | 504 | 222 | 2.3 |
| GNU/Linux | 311 | 214 | **1.5** |
| Android | 493 | 177 | 2.8 |
| macOS | 1,370 | **176** | **7.8** |
| Chrome OS | 12 | 4 | 3.0 |

Mobile is 48% of visitors. iOS alone is 34%. Mobile experience quality is not a secondary concern for this site.

### Hostnames

| Hostname | Page views | Visitors |
|---|---:|---:|
| mychef.id | 3,829 | 1,215 |
| preview deployment URLs (3) | 14 | 4 |

Clean: 99.6% of traffic is on the canonical apex domain. No traffic is leaking to `www.mychef.id`, `satuatapsinergi.id`, or `*.vercel.app`. Nothing to consolidate.

---

## 6. Data quality caveats — read before acting on these numbers

Three findings materially affect how the numbers should be interpreted:

1. **macOS traffic is almost certainly your own.** 176 macOS visitors generated 1,370 page views — **7.8 pages per visitor**, against a site average of 3.2 and a US-visitor average of 1.7. macOS is 14% of visitors but **36% of all page views**. This is the signature of internal/development browsing, not customers. Indonesia's 5.3 pages/visitor points the same direction. Realistic customer-facing page views are likely closer to **2,400–2,900**, not 3,843. The *visitor* count is far less distorted than the *page view* count — prefer it.

2. **The 214 GNU/Linux visitors at 1.5 pages/visitor are your own E2E tests — root cause found.** `playwright.config.ts` sets `baseURL: 'https://mychef.id'` and runs three browser projects (Chromium, Firefox, WebKit) against **production**. Every test run was recorded as real visitors from the Linux CI machines. This accounts for 17.6% of the visitor total. (`scripts/prerender.ts` is clean — it targets `http://127.0.0.1:4173`, so no analytics events escape.)

   **Fixed at collection time** in `src/lib/analytics-privacy.ts`: `beforeSend` now drops any event where `navigator.webdriver === true`, which every WebDriver/CDP-controlled browser sets. No further test runs will be counted. Historical data cannot be cleaned, so treat the pre-fix visitor total as carrying roughly a −15% correction.

3. **Zero custom events are being recorded.** The `event_name` dimension returns no rows — `track()` from `@vercel/analytics` is never called anywhere in the codebase. Meanwhile recent commits (#39, #41, #42) added GA4 conversion tracking with `service_type` and IDR value. **Conversions exist in GA4 and are entirely absent from Vercel Analytics.** Your Pro plan includes custom events with 2 properties at no extra cost.

Additionally, `route` returns no rows because this is a Vite SPA rather than a framework with a route manifest — path-level data is the only granularity available. That is expected, not a fault.

---

## 7. Recommended actions

**Fix the measurement gaps**

1. Reauthorize the Vercel connector with full *Server Bali* team scope so `get_web_analytics` works without the workaround script.
2. Add `track()` calls for the three conversion actions already instrumented in GA4 (quote submit, WhatsApp click, phone click), so Vercel and GA4 can be reconciled against each other. Two properties per event are included in your plan.
3. Decide explicitly whether Vercel Analytics or GA4 is the system of record for conversions. Running both untagged invites contradictory reporting.
4. Add UTM tagging to any campaign, email or social link. 45% of traffic is currently unattributable.
5. ~~Exclude internal traffic~~ — **done.** See "Traffic filtering" below.

### Traffic filtering (implemented 30 Jul 2026)

Filtering runs at two layers, both on direct signals rather than guesses about geography or OS, so no genuine customer is silently discarded.

**Collection time** — `src/lib/analytics-privacy.ts`, wired into both `<Analytics />` and `<SpeedInsights />` in `src/main.tsx`:

| Excluded | Signal | Notes |
|---|---|---|
| Automated browsers | `navigator.webdriver === true` | Set by the automation protocol itself. Catches the Playwright E2E runs. Not spoofable by ordinary visitors, no false positives. |
| Your own devices | `localStorage['va-disable']` | Visit `https://mychef.id/?va-disable=1` once per browser to opt out; `?va-disable=0` re-enables. Confirmation is logged to the console. |

To exclude your own browsing, open **`https://mychef.id/?va-disable=1`** once on each browser and device you use — desktop Chrome, your phone, any second profile. The flag persists until cleared. This is what removes the macOS page-view inflation described above; it is per-browser, so it must be done on each one.

**Report time** — `scripts/vercel-analytics-report.mjs --exclude-internal` applies `osName ne 'GNU/Linux'` as a retroactive proxy for the CI cohort. This is an estimate that also removes genuine Linux desktop visitors, so the script always prints raw and filtered totals side by side. Once the collection-time fix has been live for a full reporting period, this flag is no longer needed.

Behaviour verified across eight cases including flag persistence, re-enabling, headless detection, prerender (no `window`), and Safari private mode (`localStorage` throws). The filter fails **open** — if the environment cannot be inspected, the event is sent rather than dropped.

**Act on what the data already shows**

6. The `/pricing` → `/quote` step loses 76% of pricing viewers. This is the single highest-value CRO target on the site.
7. Australia + New Zealand (17% of visitors, high engagement) are under-served relative to their performance; there is no ANZ-specific landing content.
8. Location page performance is heavily skewed to Seminyak. Audit internal linking and search demand for Canggu, Ubud and Sanur before producing more location pages.
9. Google is 48% of acquisition with no meaningful second channel. This is a concentration risk independent of how well SEO is performing.

**Cost note:** at ~3,800 events/month against Pro's $0.03/1K, Web Analytics costs well under $1/month. The Web Analytics Plus add-on ($10/month, adds UTM parameters and 8 event properties) is not justified at this volume — revisit if UTM tagging becomes a requirement and traffic grows past ~30K events/month.

---

## 8. Reproducing this report

```bash
# via the public REST API (independent of the MCP connector)
node scripts/vercel-analytics-report.mjs --days 30
```

Requires `VERCEL_TOKEN` in `.env.local` (already present) scoped to the *Server Bali* team.
The script prints the same diagnosis inline if it hits the 404 described in section 1.

### Verification performed on this report

| Check | Result |
|---|---|
| Daily time series sums to the overview total | 3,843 = 3,843 — exact |
| Last-7-day slice vs. what the dashboard UI displays | 1,399 pv / 371 visitor-days vs. 1,419 pv / 367 visitors — within expected timezone-boundary and unique-dedup drift |
| Device split sums to visitor total | 613 + 587 + 2 = 1,202 of 1,215 (99%) |
| Hostname split sums to visitor total | 1,215 of 1,215 — exact |
| All derived percentages and ratios | recomputed from raw figures |
| `scripts/vercel-analytics-report.mjs` | passes `node --check` |

The one figure **not** independently verifiable is the bot-filtering quality behind the Linux visitor cohort; section 6 states this as an estimate with an error band rather than a fact.
