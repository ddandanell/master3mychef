# Phase 4: Internal Linking Strategy

Date: 2026-05-22
Status: IN PROGRESS

## Current State

Prerendered pages have minimal internal links - Homepage: 13 internal links (mostly nav), Service pages: 13 internal links each, Location pages: 13 internal links each

## Problem

Low link count = poor crawlability = lower indexation chance. Google uses internal links to discover pages, understand relationships, and distribute PageRank.

## Strategy

### 1. Add Contextual Links in Body Copy

Opportunities: Homepage How It Works link to getting-started, Homepage Fine Dining mentions link to fine-dining, Service pages mentioning other services cross-link, Location pages link to relevant services, FAQ answers mentioning services link to service pages

### 2. Add Related Services Component

Create RelatedServices component that shows 3-4 related service cards at bottom of each service page

Fine Dining page shows: Private Chef Bali, Romantic Dinner, Chefs Table, Tasting Menu
Catering page shows: BBQ Catering, Buffet Catering, Villa Catering, Corporate Catering
Events page shows: Villa Parties, Weddings, Corporate Events, Retreats

### 3. Add Location Links to Service Pages

Each service page should link to top 5 locations: Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua

### 4. Add Breadcrumb Links

Already implemented via Breadcrumb component - verify all pages use it

### 5. Footer Enhancement

Ensure footer has comprehensive links to all main services, all locations, all info pages (FAQ, Pricing, About, Contact)

## Implementation Priority

1. HIGH: Add Related Services component (biggest impact, scales to all pages)
2. MEDIUM: Add contextual links in existing body copy
3. LOW: Footer enhancement (already decent coverage)

## Target

From 13 links per page to 25+ links per page

## Files to Modify

app/src/components/shared/RelatedServices.tsx (NEW)
app/src/pages/HubPage.tsx (add contextual links)
app/src/pages/*ServicePage.tsx (add Related Services component)
app/src/pages/*LocationPage.tsx (add service links)

## Next Steps

1. Create RelatedServices component
2. Add to all service pages
3. Rebuild and verify link counts
