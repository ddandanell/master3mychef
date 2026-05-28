# Google Search Console Issues - myCHEF
Date: 2026-05-22
Source: GSC Coverage Report + Rich Results

## Summary

1) Coverage trend (last 90 days):
- Indexed: dropped from 30 → 14 pages (53% loss)
- Not indexed: spiked from 29 → 92 pages
- Major drop started ~2026-05-16

2) Critical indexation issues:
- "Discovered – currently not indexed": 86 pages
- "Crawled - currently not indexed": 5 pages
- "Alternative page with proper canonical tag": 1 page

3) Rich Results structured data error:
- "Duplicate field 'FAQPage'"
- First detected: 17/05/2026
- Invalid items are not eligible for Google Search rich results

## Root causes

### Issue A: Massive de-indexation wave (92 not indexed)
Likely caused by:
- Google detected quality/thin content issues after recent site changes
- Possible duplicate content across pages
- Missing or weak internal linking to new pages
- Crawl budget exhausted before reaching all pages

### Issue B: Duplicate FAQPage structured data
Schema.org markup has duplicate FAQPage declarations in the same page.
- Could be: two `<script type="application/ld+json">` blocks both declaring `@type: "FAQPage"`
- Or: FAQPage inside another FAQPage
- Invalid = no rich results in search

## Action plan

Priority 1 - Fix structured data error (blocker for rich results):
1) Find pages with FAQPage schema
2) Inspect source for duplicate ld+json blocks
3) Consolidate to single FAQPage declaration
4) Validate with Google's Rich Results Test
5) Request validation in GSC

Priority 2 - Recover 86 "Discovered – currently not indexed" pages:
1) Identify which 86 pages from sitemap
2) Strengthen internal linking to those pages
3) Add compelling unique content to each
4) Submit priority pages via Indexing API (if eligible)
5) Monitor for re-crawl in GSC

Priority 3 - Fix 5 "Crawled - currently not indexed" pages:
1) Identify the 5 URLs
2) Check for thin content, duplicate content, or quality issues
3) Improve content quality and uniqueness
4) Add internal links from high-authority pages

## Files to check

Structured data locations (likely candidates):
- src/pages/*Page.tsx components
- src/components/Layout.tsx (global footer/header schema)
- public/index.html (manual schema injection)
- Any FAQ-specific components

Sitemap:
- public/sitemap.xml (verify all 92 not-indexed URLs are listed)

## Next steps

1) Run structured data audit across all pages
2) Find and fix duplicate FAQPage declarations
3) Identify the 86 discovered-but-not-indexed URLs
4) Build recovery plan with content + internal linking improvements
5) Submit validation requests to GSC after fixes
