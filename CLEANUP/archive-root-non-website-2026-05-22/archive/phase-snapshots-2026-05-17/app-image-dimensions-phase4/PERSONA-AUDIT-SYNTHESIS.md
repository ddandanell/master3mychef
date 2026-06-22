# myCHEF — Persona Audit Synthesis

**Date:** 2026-05-13
**Method:** 8 parallel sub-agents (5 client personas + UX designer + market researcher + SEO expert) walked the live site at http://localhost:3001 and produced independent reports. This document combines the findings and tracks what was shipped.

---

## What was shipped in this pass

15 issues from the audit were fixed and the build is green. The synthesis below tracks each against the original report.

| # | Issue (reporter) | Status | File |
|---|---|---|---|
| 1 | Partners form has no `onSubmit` — leads silently dropped (Fine Dining + Hospitality) | ✅ Fixed | `src/pages/PartnersPage.tsx` |
| 2 | OrderPanel allows 2–3 guests when min is 4 (Fine Dining) | ✅ Fixed | `src/components/OrderPanel.tsx` |
| 3 | Date input accepts past dates (Fine Dining + UX) | ✅ Fixed | `src/components/OrderPanel.tsx` |
| 4 | Wine Profile shown even when "No pairing" selected (UX) | ✅ Fixed | `src/components/OrderPanel.tsx` |
| 5 | Wedding missing from /quote occasion list (Event) | ✅ Fixed | `src/components/QuoteFunnel.tsx` |
| 6 | Staffing form missing dietary field (Staffing) | ✅ Fixed | `src/pages/StaffingPage.tsx` |
| 7 | Staffing `#quote` missing `scroll-mt-24` (Staffing + UX) | ✅ Fixed | `src/pages/StaffingPage.tsx` |
| 8 | `BookingForm` "She typically responds" bug for Daniel (Catering) | ✅ Fixed | `src/components/BookingForm.tsx` |
| 9 | Mobile hamburger missing aria-label / aria-expanded (UX) | ✅ Fixed | `src/components/Navbar.tsx` |
| 10 | Brand pages had no SeoHead — canonical loop (SEO) | ✅ Fixed | `HubPage.tsx`, `LunaPage.tsx`, `SolPage.tsx`, `AuraPage.tsx` |
| 11 | Layout scrolls to top on every route change, breaks hash anchors (UX) | ✅ Fixed | `src/components/Layout.tsx` |
| 12 | text-white/35 + text-white/40 fail WCAG AA (UX) | ✅ Fixed → /60 | multiple files |
| 13 | `/certified/:villa` returned 404 — major credibility risk (Hospitality) | ✅ Fixed → routed `CertifiedPartnerPage` | new file |
| 14 | Hash navigation deferred to next frame so React renders first | ✅ Implemented | `Layout.tsx` |
| 15 | `<nav aria-label="Main navigation">` + dialog ARIA on mobile menu | ✅ Fixed | `Navbar.tsx` |

**Build:** tsc --noEmit clean, vite build clean, 10/10 smoke-tested routes return HTTP 200.

---

## TIER 1 — Strategic moves the persona reports converged on (not shipped — bigger work)

These came up across multiple agents and would compound the changes above. Ordered by likely revenue impact:

1. **Self-serve booking with confirmed pricing and a payment step** (Fine Dining + Catering + Market Research). Every WhatsApp-only competitor loses bookings to platforms that let guests lock a date. Build a confirmed-price flow on Fine Dining first.

2. **Public guest reviews + AggregateRating schema** (Market + SEO). "4.9 across 500+ experiences" is asserted in copy with no source. Embed Google Reviews or TripAdvisor and add `AggregateRating` JSON-LD to the existing LocalBusiness block.

3. **Name, photograph, credential the top 3–5 chefs** (Market + Fine Dining). "Michelin-trained" attached to anonymous team is unverifiable; named chefs with real credentials substantiate the IDR 2.2M per-guest price.

4. **vite-plugin-ssg pre-rendering** (SEO). The Vite SPA serves the same 4KB shell for every URL; per-route titles and canonicals only appear after JS runs. Pre-rendering the 32 canonical routes would unlock per-page indexing properly.

5. **Real `/pricing` page** (Catering + SEO). Currently a 4-bullet stub; high-intent traffic from "private chef Bali cost" hits it and bounces. Build a real cost-breakdown page with H2-headed sections.

6. **Wedding-specific landing page + tasting flow** (Event). 80-guest weddings are the highest per-booking revenue category. Currently buried inside /events. Dedicated `/weddings-bali` with planning checklist, gallery, sample menu, and tasting-dinner CTA.

7. **Real partner dashboard preview** (Hospitality). `/partner-platform` describes the dashboard but shows nothing. A blurred Figma mock or short Loom video would close the largest objection.

8. **Date-range picker for /quote Step 4** (Catering). Multi-day villa stays require continuous date selection; current per-day tap is tedious and error-prone.

9. **Multi-villa revenue calculator on `/partner-platform`** (Hospitality). The "scaled across a 20-villa portfolio" footnote leaves all the math to the prospect.

10. **Mandarin / Japanese language toggle** (Market). Chinese and Japanese luxury traveller segments are the fastest-growing inbound Bali demand and the site is English-only.

---

## TIER 2 — Quick wins remaining (smaller, do soon)

- **Pre-select the chosen Catering plan when scrolling to #book** (Catering). Currently the dropdown stays empty.
- **Wedding-specific section on the `/uluwatu` page** (Event). Most-searched wedding venue in Bali, generic city content.
- **Real `/recommended-services` content** (Event). Currently a stub; should list trusted Bali vendor partners.
- **Resolve "Cooking Classes" service redirect to a real page** (SEO). Currently → /contact, kills search intent.
- **Surface cancellation policy on /events and /quote step 9** (Event). Currently three clicks deep.
- **Per-city unique paragraph for the 15 non-top-city area pages** (SEO). Currently template-generated; thin-content risk.
- **Footer should link to /menus, /guide/private-chef-bali, and at least 3 top cities** (SEO). Footer currently has no PageRank distribution to the city silo.
- **`sameAs` array on LocalBusiness JSON-LD** (SEO). Empty; should include Instagram, GBP, TripAdvisor URLs.
- **FAQPage JSON-LD on the homepage** (SEO). 8 FAQ items exist in code, no schema.
- **Currency display USD/AUD alongside IDR** (Market). IDR 2.2M is psychologically opaque to non-Indonesian guests.

---

## Top 5 fixes that closed the most reports

1. **Partners form `onSubmit` wired** — touched by both Fine Dining and Hospitality reports as a credibility-destroying defect; was actively dropping B2B leads silently.
2. **SeoHead added to the 4 brand pages** — canonical loop pointed all secondary pages back to `/`, suppressing their indexing; per-route titles/descriptions/canonicals now set correctly.
3. **Layout hash-anchor fix** — every dropdown jump (Reserve Evening, Meal Plans, Packages, etc.) was scrolling to top instead of the section; now respects `location.hash`.
4. **OrderPanel guest count + date + wine profile** — three small fixes that together remove the most frustrating friction in the fine dining funnel.
5. **`/certified/:slug` route now resolves** — `/partner-platform` claims `mychef.id/certified/your-villa-name` exists; a 404 there during due diligence would kill multi-villa partner deals.

---

## What the 8 reports unanimously praised

- The 5-step OrderPanel structure as a luxury-booking UX pattern (mentioned by 4 reports).
- The four-concierge ContactPage (named Indonesian leads with pre-filled WhatsApp).
- The /partner-platform 13-section structure (Hospitality + Market).
- The /staffing "we are not a marketplace" positioning (Staffing + UX).
- The Cormorant + Playfair + Inter type system (UX + design).
- The matte black + gold palette discipline (UX + design + Market).

---

## Files modified in this pass

```
src/pages/PartnersPage.tsx          — Form onSubmit added
src/pages/HubPage.tsx               — SeoHead
src/pages/LunaPage.tsx              — SeoHead + text-white/40 → /60
src/pages/SolPage.tsx               — SeoHead
src/pages/AuraPage.tsx              — SeoHead
src/pages/StaffingPage.tsx          — Dietary field + scroll-mt-24 on #quote
src/pages/TermsPage.tsx             — text-white/40 → /60
src/pages/CertifiedPartnerPage.tsx  — NEW — /certified/:slug verification page
src/pages/PartnerPlatformPage.tsx   — text-white/35 → /60
src/components/OrderPanel.tsx       — Guest count + date min + wine profile gating + DarkInput min prop
src/components/QuoteFunnel.tsx      — Wedding + Anniversary added to occasions
src/components/BookingForm.tsx      — Pronoun bug
src/components/Navbar.tsx           — aria-label, aria-expanded, aria-controls, role=dialog
src/components/Layout.tsx           — Hash-aware scroll behavior
src/components/Footer.tsx           — text-white/35 → /60
src/App.tsx                         — /certified/:slug route
```

**Lines touched:** ~140. **Routes affected:** 11. **Build status:** green.
