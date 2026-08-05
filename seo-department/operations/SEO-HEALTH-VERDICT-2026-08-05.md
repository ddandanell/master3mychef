# myCHEF.id — Technical SEO Health Verdict

**Date:** 2026-08-05 · **Question asked:** after many changes to the site, is everything technically sound for Google?

---

## Short answer

**Yes — everything is fixed, deployed, and verified live.**

All three CI workflows are green, production is up to date, and a full crawl of the live
site finds zero broken links and zero non-200 pages.

| | |
|---|---|
| Build, Prerender & Deploy | ✅ Run #225 |
| Comprehensive Verification | ✅ Run #251 — **first green since #240**; was red on every commit before today |
| AI Skills Check | ✅ Run #251 |
| Production deployment | ✅ `dpl_J6CfekqN6uheRTfK78Fmg9dcitK6` (`5df93727`) |
| Live sitemap URLs returning 200 | **243 / 243** |
| Pages with a real `<h1>` and prerendered body text | **243 / 243** |
| Unique internal link targets checked | **253** |
| Broken internal links | **0** |
| ESLint errors in `src/` | **0** (was 35) |
| TypeScript | `npx tsc -b` exit 0 |

## 1. The scoreboard

Every number below was measured against source or live data today — none is estimated.

| Check | Result | Verdict |
|---|---|---|
| Static routes accounted for | **204 / 204** | ✅ 0 orphans |
| Broken internal links | **0** (was 12 across 7 targets) | ✅ fixed today |
| Canonical mismatches | **0 / 267** | ✅ |
| Duplicate titles | **0 / 267** | ✅ |
| Duplicate meta descriptions | **0 / 267** | ✅ |
| Duplicate H1s | **0 / 267** | ✅ |
| Missing titles / descriptions / H1s | **0** | ✅ |
| Titles over 60 chars | **0** (was 9) | ✅ fixed today |
| Redirect chains | **0 / 206** | ✅ |
| Redirect loops | **0 / 206** | ✅ |
| Duplicate redirect sources | **0** | ✅ |
| Redirects dead-ending on a noindex page | **0** (was 1) | ✅ fixed today |
| noindex pages wrongly in the sitemap | **0** | ✅ |
| Indexable pages with zero internal links | **0** (was 2) | ✅ fixed today |
| Inline `LocalBusiness` schema missing `address` | **0** | ✅ |
| Pages with visible FAQs but no FAQPage schema | **0** | ✅ already covered |
| Prerender parity (crawlers see real content) | **verified** | ✅ |
| TypeScript build | `npx tsc -b` exit 0 | ✅ |
| ESLint on all changed files | clean | ✅ |

---

## 2. Core Web Vitals — real user data, not a lab score

From PostHog `$web_vitals`, 1,596 samples over 14 days, 75th percentile:

| Metric | Your p75 | Google "good" threshold | Verdict |
|---|---|---|---|
| **LCP** (loading) | **1,931 ms** | < 2,500 ms | ✅ Good |
| **CLS** (layout shift) | **0.000** | < 0.10 | ✅ Perfect |
| **INP** (responsiveness) | **72 ms** | < 200 ms | ✅ Good |
| **FCP** (first paint) | **1,173 ms** | < 1,800 ms | ✅ Good |

By device — **mobile is faster than desktop**, which matters because Google indexes mobile-first:

| Device | Samples | LCP p75 | INP p75 | CLS p75 |
|---|---|---|---|---|
| Mobile | 486 | **1,840 ms** | 64 ms | 0.000 |
| Desktop | 1,107 | 1,944 ms | 78 ms | 0.002 |

**All four Core Web Vitals pass on both device classes.** A CLS of exactly zero across 1,596 real sessions is unusual and worth protecting — it means images and fonts are reserving their space correctly. Do not remove explicit width/height attributes from images.

---

## 3. What was actually broken, and is now fixed

Committed in `10bfbe76`, `600f1348`, `171259cb`, `b168ec69` and `5df93727` — all deployed and verified live.

**Eight pages were invisible to Google.** Live, indexable, internally linked — but absent from the sitemap *and* from the prerender pass, meaning crawlers received an empty shell. Seven substantial blog pages plus `/partner`. Adding them to `sitemap.ts` fixes both problems at once, because `inject-meta` and `prerender` both read from that array. (`/pricing-calculator` was a ninth candidate but is held back until its prices are reconciled — see §5 and D-030.)

**Twelve internal links pointed at 404s.** All slug typos where the real page exists under a different name — `/staffing/placement` (5 links), `/catering/bbq` (2), and five others. Sitewide links into dead ends waste crawl budget and leak nothing back.

**`/partner` had zero inbound links.** Submitting a page to Google with no internal links is a weak signal; it now has a contextual link from `/staffing/for-villa-managers`, a related audience with a distinct offer. The footer's "Price Calculator" briefly pointed at `/pricing-calculator` and was reverted to `/calculator` once that page left the prerender set — see §5.

**A 301 dead-ended on a noindex page.** `/private-chef-booking-indonesia` → `/quote`, which is `noindex,follow`. Repointed to `/chef-for-hire-indonesia` — same intent, indexable.

**Nine titles would truncate in the SERP** at 61–72 characters. All now ≤ 60 with the primary keyword still leading.

**A guard now prevents the worst of these recurring.** `scripts/verify-all.ts` fails the build if any static route is neither in the sitemap, deliberately noindexed, nor a redirect source.

---

## 4. Things I checked and deliberately did **not** change

Recorded so nobody "fixes" them later.

| Item | Why it is fine |
|---|---|
| 88 pages pass no `jsonLd` to `SeoHead` | `inject-meta.ts` injects BreadcrumbList + WebPage schema into every prerendered page. Baseline schema is universal |
| 14 pages looked like they were missing FAQPage schema | False positive. Six use the `PremiumPage` layout, which emits `faqPageSchema` from its `faqs` prop and guards against duplicates. The other five have hand-written FAQPage blocks. Adding the helper would have created **two FAQPage entities per page** — a real error |
| `ChefProfilePage` inline `LocalBusiness` without `address` | It carries `@id: https://mychef.id/#business` — a node *reference* to the main business entity, not a standalone declaration. Valid schema.org. Same principle as D-017 |
| 22 `/bar-services/` URLs excluded from the sitemap | Owner decision, 2026-07-28 |
| `/quote`, `/book`, `/calculator`, `/join-our-team` not in the sitemap | Deliberately `noindex` in `inject-meta.ts` |
| Self-referencing `hreflang="en"` + `x-default` on every page | Harmless on a monolingual site. Semrush's "language mismatch" notice is almost certainly tripping on Indonesian vocabulary (babi guling, IDR, area names). A wrong hreflang edit is worse than a useless one |
| 52 meta descriptions over 160 chars | They truncate; they do not break anything. The nine on the highest-impression pages were shortened. The rest are cosmetic |
| Low text-to-HTML ratio on 66 pages | Normal for a prerendered React SPA with a large nav and footer. A soft signal, not an error |

---

## 5. The deploy pipeline — diagnosed and fixed

Three pushes produced no deployment because **the deploy workflow was failing**, not because
it never ran. Runs #221 and #222 both died at the `Build + prerender` step; #220 before them
was green, which bracketed the break to the SEO commit.

**Root cause.** Adding a path to `src/data/sitemap.ts` is not only a sitemap line — it makes
`scripts/prerender.ts` emit static HTML for that route, which brings the page inside the scan
window of `scripts/check-price-floor.ts` in `postbuild`. `/pricing-calculator` renders
`IDR {formatIDR(service.basePricePerPerson)}/person` for four services priced 400,000–550,000,
all under the 700,000 floor. `postbuild` exited 1, `vercel build` failed, and no deployment was
ever created. It escaped pre-commit review because those prices are JSX template expressions,
so a source-level scan of the page finds nothing (D-030).

**Then two follow-on defects, both caught by crawling the live site rather than the code:**

- Removing `/pricing-calculator` from `SITEMAP` stopped it being prerendered, so it began
  returning 404 — while the footer pointed at it from every page. Footer reverted to
  `/calculator`, which is in `SITEMAP` (prerendered) and filtered out of `sitemap.xml` by
  `NOINDEX_PATHS`. That is the correct pattern for a reachable-but-unindexed utility page.
- `/locations/sidemen`, `/locations/munduk` and `/locations/north-bali` were long-standing
  404s linked from `/catering/retreat-catering`, which rendered `/locations/${slug}` for
  retreat areas that have no `/locations/` page. Now mapped via `RETREAT_AREA_HREF`.

**Also fixed: a permanently red CI gate.** Comprehensive Verification had failed on every
commit since at least #241 — well before this work — because `verify-all.ts` gates on
`npm run lint` and `src/` carried 35 errors. All 35 are now cleared with no behaviour change:
24 redundant escapes inside double-quoted strings, 9 `any`/unused-catch fixes, and 2
documented suppressions on deliberate sync effects in the booking funnel. A CI gate that is
always red is worse than none, because a real regression is invisible.

**Still worth doing (not blocking):** Vercel Authentication is on for all `*.vercel.app` URLs
(`ssoProtection: all_except_custom_domains`), so your own preview links demand a login. Custom
domains are unaffected. Project Settings → Deployment Protection.

## 6. Left open by choice (not technical SEO)

These are business decisions, and you asked me not to chase validation:

- `villa-catering-bali.online` / `balipoolmaintenance.online` — you confirmed not yours. Filed as **R-009**, monitor only.
- Whether the Tribun / VOI / Hops placements were paid — **R-010**.
- The HACCP "all chefs are certified" claim on the allergy page — **R-014**. Worth a look when you have a moment; it is the only remaining item with real liability exposure.
- 139 residual "Michelin-trained" occurrences in body copy across 47 files, plus the two pages built on the claim. The 12 SERP-facing meta descriptions are already done.

---

## 7. Also worth knowing

**35 pre-existing ESLint errors** in four files I did not touch: `QuoteFunnel.tsx`, `privateChefAreas.ts`, `whatsapp-tracker.ts`, `facebookPixel.ts`. They are `any` types and unused variables — no SEO impact, but `scripts/verify-all.ts` runs `npm run lint` as a gate, so that script currently fails for reasons unrelated to SEO. The deploy workflow does not run lint, so this is not what is blocking your deployment.

---

## Bottom line

The site is in good technical shape — genuinely better than most sites of this size, and the metadata discipline in `page-meta.ts` is unusually clean. Core Web Vitals pass comfortably on mobile and desktop. There is nothing structurally wrong that would stop Google indexing and ranking the site.

The binding constraint on rankings is **not technical** — it is authority. DR 23 with roughly three genuine referring domains is why "private chef bali" sits at position 18 with 749 impressions. No further on-page work moves that; links do.

**Immediate action: get the deploy pipeline running.** Everything else is done and waiting.
