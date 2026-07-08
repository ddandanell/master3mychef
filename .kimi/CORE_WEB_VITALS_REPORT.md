# Core Web Vitals Report

## Scope
- Task: `phase4-core-web-vitals`
- Branch: `auto-improve/core-web-vitals-phase4`
- Date: 2026-05-17

## Baseline measurement
### Lighthouse (mobile, local preview)
- Homepage performance score: **64**
- Homepage FCP: **2.8s**
- Homepage LCP: **5.0s**
- Homepage CLS: **0.012**
- Homepage TBT (FID proxy): **470ms**
- Fine Dining performance score: **75**
- Fine Dining FCP: **2.5s**
- Fine Dining LCP: **4.5s**
- Fine Dining CLS: **0.001**
- Fine Dining TBT (FID proxy): **250ms**

### Bundle / asset baseline
- `react-dom`: **191,935 B**
- main app chunk: **166,633 B**
- `gsap` chunk: **115,343 B**
- main CSS: **95,928 B**
- homepage route chunk: **58,625 B**
- fine dining route chunk: **85,236 B**
- events route chunk: **38,937 B**

### Image / CLS baseline
- Image audit references: **204**
- Raw `<img>` tags missing dimensions after optimization sweep: **1**
- Residual missing case: `src/components/ConciergeWidget.tsx` avatar image, already inside a fixed square container.

## Changes applied
1. **LCP**
   - Fixed preload target to the actual homepage hero (`/generated/bali-hub-hero.webp`).
   - Added `content-visibility: auto` utility for below-the-fold homepage sections.
   - Kept hero image eager/high-priority loading.

2. **FID / main-thread work**
   - Deferred GA/GTM network/script boot to post-load idle time in `index.html`.
   - Moved GSAP on key landing pages (`HubPage`, `LunaPage`, `SolPage`, `EventsMainPage`) to dynamic imports so animation code is not part of the initial synchronous execution path.

3. **CLS**
   - Added `OptimizedImage` component with automatic width/height lookup from generated `imageDimensions.ts`.
   - Replaced missing-dimension image usages across shared cards and major pages.
   - Reduced raw missing-dimension image tags from **59** to **1**.

4. **Stability / supporting fixes**
   - Added `trackWhatsAppConversion()` alias in analytics to unblock existing tracking imports.
   - Added service descriptions back into sitemap data where they were required by existing service pages.

## Files changed
- `index.html`
- `src/index.css`
- `src/components/OptimizedImage.tsx`
- `src/lib/imageDimensions.ts`
- `src/lib/analytics.ts`
- `src/pages/HubPage.tsx`
- `src/pages/LunaPage.tsx`
- `src/pages/SolPage.tsx`
- `src/pages/EventsMainPage.tsx`
- image-dimension callsite updates across shared/page components

## Validation
### Passed
- `npm run audit:images`
- custom raw image-dimension audit: **1 missing tag remaining**
- Lighthouse reports generated:
  - `.kimi/lighthouse-home.json`
  - `.kimi/lighthouse-fine-dining.json`

### Blocked by unrelated existing repo drift
The requested quality gates were executed, but the repository currently has unrelated `siteArchitecture` / `sitemap` compatibility regressions that break `npx tsc -b --noEmit` and `npm run build`. These failures are outside the CWV changes and surfaced after regeneration/build steps:
- missing exports such as `PRIMARY_CTA`, `PRIMARY_NAV`, `JOURNAL_POSTS`, `JOURNAL_CATEGORIES`
- pages/components expecting legacy pillar fields like `navLabel`, `ctaPrimary`, `accent`, `relatedPillars`
- `AreaPage` references to undefined `region` / `isJakarta`

## Recommended next step
Resolve the repository-wide `siteArchitecture` compatibility layer, then rerun:
- `npx tsc -b --noEmit`
- `npm run build`
- Lighthouse on the rebuilt production bundle
