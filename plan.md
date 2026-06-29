# MyChef SEO Safe Upgrade Plan

## Date: 2026-06-29
## Branch: seo-safe-upgrade-mychef-2026-06-29
## Backup: backup-before-seo-upgrade-mychef-2026-06-29

## Goal
Safely improve SEO, technical health, content quality, conversion, and performance for https://mychef.id/ without changing URLs, contact details, booking flow, tracking, or brand identity.

## Current Stack
- React 19 + Vite + TypeScript + Tailwind CSS
- react-router-dom v7 (SPA with prerender)
- pnpm package manager
- Vercel deployment (trailingSlash: false)
- Playwright for testing + prerender
- Existing SEO infra: generate-sitemap.ts, inject-meta.ts, prerender.ts, page-meta.ts, route-slugs.ts
- 116 pages, ~100 routes in PAGE_META

## Safety Rules (NON-NEGOTIABLE)
1. Do NOT delete anything unless clearly broken, duplicated, unused, and safe.
2. Do NOT change existing page URLs, slugs, routes, city names, service names, address, phone, WhatsApp, email, brand name, or tracking.
3. Do NOT change GitHub to Vercel connection.
4. Do NOT push directly to main.
5. Create backup branch before changes.
6. Work in branch: seo-safe-upgrade-mychef-2026-06-29
7. All changes reversible; every change has a clear reason.
8. If risky, do NOT change it — add to report.
9. Must build successfully before deployment.
10. Do NOT invent fake reviews, certifications, credentials, locations, or claims.
11. Do NOT remove existing conversion points.
12. Do NOT over-optimize or keyword-stuff.
13. Preserve existing design system unless improvement is clearly safe.
14. Do NOT change prices, deposits, taxes, service charges, or booking rules.
15. WhatsApp is primary booking channel — do NOT change.

## Phase 1: Discovery (PARALLEL)
- Agent A: Live site audit (homepage, key pages, mobile, CTAs, metadata, view-source)
- Agent B: Repo technical audit (build scripts, sitemap, robots, meta injection, schema, vercel.json)
- Agent C: Content/SEO audit (PAGE_META gaps, thin content, missing H1s, duplicate titles, missing pages)

## Phase 2: SEO Optimization (based on Phase 1 findings)
- Improve page titles and meta descriptions where needed
- Fix H1 structure
- Add missing FAQ schema where relevant
- Enhance internal linking
- Improve location relevance signals

## Phase 3: Technical SEO
- Sitemap completeness check
- Robots.txt review
- Canonical tag verification
- Schema markup improvements (LocalBusiness, Service, FAQ)
- Open Graph / Twitter card review
- Fix broken internal links
- Image optimization check

## Phase 4: Content Quality
- Improve thin content on key pages
- Enhance intro sections for service clarity
- Add trust signals where missing
- Ensure conversion clarity

## Phase 5: Conversion Optimization
- Verify CTA placement above-the-fold
- Check WhatsApp button visibility
- Verify mobile CTA visibility
- Check footer conversion links
- Ensure FAQ answers drive to action

## Phase 6: Performance & UX
- Check image sizes and lazy loading
- Check unused imports
- Verify heading order
- Check alt text coverage
- Mobile spacing review

## Phase 7: Testing
- Install check
- Type check (tsc -b)
- Lint check
- Build test
- Route check
- Sitemap check
- Robots.txt check
- Metadata check
- Mobile sanity check
- CTA link check

## Phase 8: Git Workflow
1. Pull latest main
2. Create backup branch and push
3. Create working branch
4. Make safe improvements
5. Run all tests
6. Commit with clear message
7. Push working branch
8. Verify Vercel preview if available
9. Do NOT merge unless all checks pass

## Phase 9: Final Report
- What was checked
- What was changed
- What was NOT changed
- SEO improvements completed
- Technical improvements completed
- Content improvements completed
- Conversion improvements completed
- Performance improvements completed
- Tests run and build result
- Git branch and commit info
- Remaining recommendations
- Risk notes
