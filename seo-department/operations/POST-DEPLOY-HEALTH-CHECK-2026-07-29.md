# Post-deploy health check — 2026-07-29, after PR #40

**Trigger:** owner reported only one enquiry today and asked whether the SEO work has done damage.
**Method:** live checks against production, not assumptions.

---

## 1. Is anything broken? No.

| Check | Result |
|---|---|
| All 226 sitemap URLs | **226/226 return HTTP 200** |
| WhatsApp CTA present on each | **226/226** — zero pages without a conversion path |
| Malformed `wa.me` numbers | **0** |
| Leftover `tel:` links | **0** |
| Entity data (name/phone/address/geo) | Correct and consistent on every page sampled |
| Duplicate `BreadcrumbList` | Resolved — 1 node where there were 2 |

The conversion path is intact. No page is unreachable, and no CTA is broken.

---

## 2. Today's enquiry count cannot reflect today's work

PR #40 merged and deployed at roughly 13:10 today. Every enquiry received before that hit the **previous** build. Nothing merged today could have influenced today's contacts.

Separately, schema and metadata changes do not act on rankings immediately — Google must recrawl first, which takes days to weeks.

---

## 3. One enquiry in a day is statistically normal — not a signal

From the Search Console baseline (28 days to 2026-07-26): **423 clicks**, i.e. **~15 organic clicks per day**.

At a typical service-business enquiry rate of 2–5%, that predicts **0.3–0.75 enquiries per day** from organic search.

Modelling daily arrivals as Poisson with λ ≈ 0.6:

| Enquiries in a day | Probability |
|---|---|
| 0 | ~55% |
| 1 | ~33% |
| 2 | ~10% |
| 3+ | ~2% |

**One enquiry is the second most likely outcome on any given day. Zero would be the most likely.** At this volume, a single day carries almost no information — the noise is larger than any plausible effect we could have caused.

**Practical rule: do not read daily enquiry counts as an SEO signal.** The smallest window that means anything here is 2–4 weeks. The scheduled 12 Aug GSC re-verification is the correct first read.

---

## 4. Real finding: conversion tracking may be double-counting

`src/lib/analytics.ts` sends every conversion down **two independent pipelines**:

```
window.gtag?.('event', event, params)        // -> GA4 directly
window.dataLayer.push({ event, ...params })  // -> GTM -> (probably) GA4
```

The second is commented as a "fallback", but it is not conditional — both fire on every click. Verified live: one click on a WhatsApp CTA pushes `generate_lead` **twice** into `dataLayer` (once in gtag's `['event', ...]` form, once in GTM's `{event: ...}` form).

Both pipelines are active in production: gtag with `G-W0PQH8ZKTF` **and** GTM container `GTM-KCBNZBL9`.

**What is confirmed:** the page emits the conversion twice.
**What is NOT confirmed:** whether GA4 records it twice. That depends on whether the GTM container has a GA4 event tag bound to `generate_lead` pointing at the same measurement ID. That cannot be read from the browser — it needs the GTM container or GA4 DebugView.

**Why it matters here:** if GA4 has been counting each WhatsApp click twice, the lead numbers have been roughly double the truth all along. That would make any comparison between "what the dashboard says" and "how many people actually messaged me" look like a collapse when nothing changed.

**Do not blind-fix this.** Removing the wrong pipeline would silence tracking entirely. Resolve in this order:
1. Open GA4 DebugView, click one WhatsApp CTA, count the `generate_lead` events.
2. If two → open GTM and either remove the GA4 tag on that trigger, or make the `dataLayer.push` in `analytics.ts` conditional on `!window.gtag`.
3. Re-test in DebugView.

This supersedes nothing in `reports/GA4-WHATSAPP-TRACKING-AUDIT-2026-07-29.md`; PR #39 removed duplicate *onClick handlers*, which is a different duplication than the gtag/dataLayer dual path described here.

---

## 5. Minor: `/pricing-calculator` returns 404 to crawlers

`/calculator` is the real page and returns 200. `/pricing-calculator` is registered in the React router but has no pre-rendered file, so a direct request returns **HTTP 404** with the app shell — a human then sees the page render client-side, while Google sees a 404.

Impact is low: it is **not** in the sitemap, so no crawl budget is wasted and nothing is de-indexed. But the FAQ schema added to that component in PR #40 lands on a URL Google treats as missing.

**Decide:** either pre-render `/pricing-calculator` and redirect one to the other, or 301 `/pricing-calculator` → `/calculator` and drop the duplicate route. Pre-existing, not introduced by PR #40.

---

## Bottom line

Nothing is broken. Today's number is inside normal daily variation and predates the deploy. The thing genuinely worth fixing is the measurement, because until conversions are counted once, no one can tell a real change from noise.

---

*SEO Director (01) / Analytics (18).*
