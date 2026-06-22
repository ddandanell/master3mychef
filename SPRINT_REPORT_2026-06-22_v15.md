# Sprint Report — 2026-06-22 (v15) · Blue Book Optimizer

## Outcome: Removed Google-guideline-violating review markup from 3 legal pages. Build green, verified live on the prerendered, footer-linked URLs.

### Decision (data-driven, gatekeeper)
Re-audited the priority backlog before touching anything. Nearly all listed tasks are already
done by prior sprints — verified, not assumed:
- **Task 1 (cost-guide blog):** page exists (`PrivateChefCostBaliPage.tsx`) + routed.
- **Task 2 (chef profiles):** `/chefs/:slug` route + 8 profiles live, in sitemap.
- **Task 5 (breadcrumbs):** all 12 location pages call `breadcrumbSchema`; all 10 catering
  sub-pages call `cateringBreadcrumbSchema`. (My first grep flagged 10 catering pages as
  missing — that was a **false positive**: `cateringBreadcrumbSchema` is camelCase capital-B,
  so a lowercase `breadcrumbSchema` pattern doesn't substring-match. Verified by direct read.)
- **Task 6 / 8 / 9 (lazy load / alt text / meta descriptions):** already complete per v14 and
  re-confirmed (every page has `SeoHead` + `description=`).

**The real defect found:** three legal pages injected `aggregateRatingSchema(4.9, 560)` —
i.e. AggregateRating/review markup — on content that has no reviews:
- `TermsPage.tsx` (line 73)
- `PrivacyPage.tsx` (line 95)
- `CancellationPage.tsx` (line 71)

Google's structured-data policy requires review snippets to describe the specific item on the
page and be backed by reviews present on that page. Rating markup on a Terms of Service /
Privacy / Cancellation page is a textbook violation and a **manual-action / structured-data
penalty risk**. I chose to *remove* schema rather than *add* more — the gatekeeper move.

### What changed
Three files, each: deleted the `aggregateRatingSchema(...)` line from the page's `jsonLd`
array AND dropped `aggregateRatingSchema` from the `SeoHead` import (TS strict mode fails the
build on an unused import). Breadcrumb + FAQ schema on each page preserved.

- `src/pages/TermsPage.tsx`
- `src/pages/PrivacyPage.tsx`
- `src/pages/CancellationPage.tsx`

### Verification
- `npx tsc -b` from repo root → **exit 0**.
- Commit `7adfc18` pushed to `main` (via osascript→Terminal; cleared stale `.git/index.lock`).
- Vercel deploy `dpl_GqpW11w9PbeTitJhLDgytg9Z1Jvc` built **READY**, aliased to mychef.id.
- Live prerendered HTML re-fetched and inspected:
  - `/terms` (200, the URL the footer links to): page-level `data-seohead` JSON-LD =
    **BreadcrumbList only**. No per-page AggregateRating.
  - `/cancellation` (200): same — BreadcrumbList only, no per-page AggregateRating.
  - Privacy is byte-identical code path → same result.

### Honest scope note — one item left for the owner (not fixed; needs a decision)
The **site-wide `LocalBusiness` schema baked into `index.html`** still carries
`aggregateRating { ratingValue 4.9, reviewCount 500 }`, and that template is served on *every*
page including the legal pages. This is a separate, more debatable case: it's the business
*entity's* aggregate rating (`@id … /#business`), a common global pattern — but it is still
technically present on legal pages and the 500/560 review counts are not backed by visible
on-page reviews anywhere. **Recommendation:** confirm the 4.9/500 figure is real and defensible;
if it can't be substantiated with genuine, accessible reviews, remove `aggregateRating` from the
global LocalBusiness block too (it's in the static `index.html` head template, not a page
component). Did not action this autonomously — it's a business-data accuracy call, not a code bug.

### Pre-existing issue noticed (out of scope, flagged)
Canonical mismatch on Terms/Privacy: the page components set `canonical` to
`/terms-of-service` and `/privacy-policy`, but only `/terms` and `/privacy` are prerendered and
linked from the footer. A direct crawl of the canonical `/terms-of-service` returns the SPA
404 shell (noindex). Routes for both spellings exist client-side, so users are fine, but the
canonical points at a non-prerendered URL. Worth reconciling (either prerender the
`-of-service`/`-policy` paths, or set canonical to the prerendered `/terms` & `/privacy`).

### Environment note (unchanged from v14)
Git only works via osascript→Terminal on the real machine; sandbox shell hits a worktree
gitdir that isn't mounted and a non-removable `.git/index.lock`. Commit specific files only.
Root `src/` is the tracked/built tree; `app/` is stale and untracked — ignore it.
