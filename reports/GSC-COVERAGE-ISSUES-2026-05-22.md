# Google Search Console Coverage Issues - myCHEF

Date: 2026-05-22
Source: /Users/openclaw/Downloads/mychef.id-Coverage-2026-05-22/

## Summary

### Indexation Status (Latest: 2026-05-18)
- **Not indexed:** 92 pages
- **Indexed:** 14 pages
- **Total pages discovered:** 106 pages

### Critical Trend
- Indexed pages dropped from 32 (early March) → 14 (May 18)
- Not indexed pages increased from 27 → 92
- Sharp drop occurred around May 5-16 (index drop from 19 → 14)

## Critical Issues

### 1. Discovered – currently not indexed (86 pages)
**Status:** Not Started
**Source:** Google systems
**Root cause:** Google discovered pages but chose not to index them.

**Common reasons:**
- Low-quality content signals
- Duplicate content across pages
- Thin content (insufficient unique value)
- Poor internal linking
- Crawl budget prioritization

### 2. Crawled - currently not indexed (5 pages)
**Status:** Not Started
**Source:** Google systems
**Root cause:** Google crawled but decided against indexing.

**Common reasons:**
- Content quality below threshold
- Duplicate/similar to indexed pages
- Noindex in rendered HTML
- Thin content

### 3. Alternative page with proper canonical tag (1 page)
**Status:** Not Started
**Source:** Website
**Root cause:** Page has canonical pointing elsewhere (expected for variants).

### 4. Structured Data Issue: Duplicate field 'FAQPage'
**Status:** Critical
**First detected:** 2026-05-17
**Impact:** Invalid items not eligible for rich results

**Root cause:** FAQPage structured data has duplicate field declarations.

## Non-critical Issues
None reported.

## Action Plan

### Immediate (High Priority)

1) **Fix Duplicate FAQPage structured data**
   - Locate pages with FAQ schema
   - Remove duplicate field declarations
   - Validate with Rich Results Test
   - Submit for validation in GSC

2) **Audit "Discovered – currently not indexed" pages (86)**
   - Export full list from GSC
   - Identify common patterns (thin content, duplicates, orphaned)
   - Prioritize by business value
   - Fix or remove low-value pages

3) **Strengthen internal linking**
   - Ensure all important pages linked from high-authority pages
   - Add contextual links from homepage/pillar pages
   - Review sitemap coverage

### Medium Priority

4) **Content quality review**
   - Expand thin pages with unique value
   - Add media, examples, differentiation
   - Ensure minimum 300-500 words unique content per page

5) **Submit priority pages via Indexing API**
   - Use Google Indexing API for critical pages
   - Focus on: new content, updated pages, conversion pages

### Monitoring

6) **Track index recovery**
   - Daily GSC coverage checks
   - Set alert when indexed count increases
   - Target: recover to 30+ indexed pages within 30 days

## Technical Details

**Sitemap:** https://mychef.id/sitemap.xml
**Property:** sc-domain:mychef.id
**Peak indexed:** 32 pages (March-April 2026)
**Current indexed:** 14 pages (May 18, 2026)
**Index loss:** -56% (18 pages dropped)
