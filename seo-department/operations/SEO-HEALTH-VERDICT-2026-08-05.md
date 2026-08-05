# myCHEF.id — Technical SEO Health Verdict

**Date:** 2026-08-05 · **Question asked:** after many changes to the site, is everything technically sound for Google?

---

## Short answer

**Yes — the site is technically healthy.** Every structural check passes. There is no crawling, indexing, rendering, duplication or performance problem left in the codebase.

**But nothing I fixed today is live yet.** Two commits are on `main` and the deploy pipeline has not run. That is the one open item, and it needs you (§5).

---

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

Committed in `10bfbe76` and `600f1348`.

**Nine pages were invisible to Google.** Live, indexable, internally linked — but absent from the sitemap *and* from the prerender pass, meaning crawlers received an empty shell. Seven substantial blog pages, `/pricing-calculator`, and `/partner`. Adding them to `sitemap.ts` fixes both problems at once, because `inject-meta` and `prerender` both read from that array.

**Twelve internal links pointed at 404s.** All slug typos where the real page exists under a different name — `/staffing/placement` (5 links), `/catering/bbq` (2), and five others. Sitewide links into dead ends waste crawl budget and leak nothing back.

**Two newly-submitted pages had zero inbound links.** `/partner` and `/pricing-calculator`. Submitting a page to Google with no internal links is a weak signal. Both now have contextual links, and the footer's "Price Calculator" was moved off `/calculator` (which is `noindex`) onto the indexable `/pricing-calculator` — every page on the site was spending a footer slot on a URL Google is told to ignore.

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

## 5. The one open item — the deploy pipeline is not running

**Everything above is committed to `main` and none of it is live.**

- `origin/main` is at **`600f1348`**
- The most recent Vercel production deployment is from **`0ce036d1`, 2026-08-04**
- Two pushes today produced **zero** deployments
- Live verification: `mychef.id` still serves the old homepage meta description and the old footer links

`vercel.json` sets `git.deploymentEnabled: false`, so Vercel's own Git integration is intentionally off — deploys come **only** from `.github/workflows/deploy.yml`, which builds and prerenders on GitHub Actions (Vercel's build container cannot run headless Chromium) then ships with `vercel deploy --prebuilt`.

So the workflow either did not trigger, or failed.

**What to check, in order:**

1. **https://github.com/ddandanell/master3mychef/actions** — look for runs against `10bfbe76` and `600f1348`. This will tell you immediately whether it failed, is queued, or never fired.
2. **If it failed on `vercel pull` or `vercel deploy`** → the `VERCEL_TOKEN` repository secret has expired. Regenerate it in Vercel → Account Settings → Tokens, and update it in the repo's Actions secrets.
3. **If there are no runs at all** → Actions may be disabled for the repository, or the free-tier minutes are exhausted.
4. **If it failed on `pnpm install` or the build** → send me the log and I will fix it.

Until this is resolved, no SEO change — today's or any future one — reaches Google.

---

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
