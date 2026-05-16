# Phase 5 Week 1 Execution Checklist
**Dates:** May 25-31, 2026  
**Owner:** SEO Lead  
**Status:** Ready for Execution

---

## DAY 1-2 (May 25-26): GSC Baseline Capture

### Pre-Execution
- [ ] Ensure Google Search Console access is confirmed
- [ ] Verify GSC account shows mychef.id in resources
- [ ] Check current indexation baseline (expected: ~18-20 pages)

### Task 1a: Access GSC
- [ ] Open: https://search.google.com/search-console/performance?resource_id=sc-domain%3Amychef.id
- [ ] Set date range: **May 1-24, 2026** (previous 24 days)
- [ ] Ensure "Property" filter is mychef.id (not specific URL)

### Task 1b: Export Performance Data
**Columns to Export (in this order):**
1. Query (keyword)
2. Impressions
3. Avg Position
4. CTR
5. Clicks
6. Pages (optional - shows which page ranks for keyword)

**Filters Before Export:**
- Include keywords with ≥5 impressions (proven demand)
- Sort by "Avg Position" descending (easiest wins first)
- Target position range: 30-100 (achievable improvements)

### Task 1c: Create Baseline Spreadsheet
- [ ] Create file: `/reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv`
- [ ] Fill in exported GSC data
- [ ] Add "Category" column: Brand, Pillar, Blog, Long-tail
- [ ] Add "Priority" column: T1 (40-55), T2 (55-75), T3 (75+)
- [ ] Total keywords expected: 15-25 with impressions ≥5

**Baseline Checks:**
- [ ] Keyword count exported (minimum 15)
- [ ] All positions visible (check for #1 positions - unlikely but possible)
- [ ] CTR captured (even 0% entries are valid)
- [ ] Impressions column shows numeric values

---

## DAY 3-4 (May 27-28): Competitor Content Analysis

### Competitor Selection Process

**For each pillar page, find top 3 ranking competitors:**

#### /fine-dining — Top Keywords to Analyze
1. Search: "fine dining bali"
2. Search: "fine dining experience bali"  
3. Search: "hire private chef bali"
- Expected top competitors: (1) hospitality review sites, (2) private chef services, (3) villa rental + dining combos
- Document top 3 unique domains from positions 1-10

#### /catering — Top Keywords to Analyze
1. Search: "bali villa catering"
2. Search: "bali wedding catering"
3. Search: "corporate catering bali"
- Expected top competitors: (1) catering companies, (2) wedding planners, (3) event venues
- Document top 3 unique domains from positions 1-10

#### /events — Top Keywords to Analyze
1. Search: "wedding catering bali"
2. Search: "bali event planning"
3. Search: "corporate retreat bali"
- Expected top competitors: (1) event planners, (2) wedding services, (3) venue + catering combos
- Document top 3 unique domains from positions 1-10

#### /locations — Geographic Competitors
1. Search: "bali villa services seminyak"
2. Search: "canggu villa catering"
3. Search: "ubud private chef"
- Expected top competitors: (1) location-specific service providers, (2) villa rental + add-ons, (3) local hospitality
- Document top 3 unique domains from positions 1-10

### Competitor Content Audit Template

**For EACH competitor page identified:**

1. **Basic Info**
   - [ ] Domain name
   - [ ] Full page URL
   - [ ] Current ranking position (from search)
   - [ ] Page title (from meta tag)

2. **Content Length**
   - [ ] Open page in browser
   - [ ] Select all (Cmd+A)
   - [ ] Paste into word counter (online tool or `wc -w`)
   - [ ] Record: Total word count

3. **Header Structure**
   - [ ] Open DevTools (Cmd+Option+I)
   - [ ] Search for `<h1>` tags - count them
   - [ ] Search for `<h2>` tags - count them
   - [ ] Search for `<h3>` tags - count them
   - [ ] Record: H1 count, H2 count, H3 count

4. **Internal Links**
   - [ ] Search in DevTools for `<a href="` patterns pointing to same domain
   - [ ] Count unique internal links (exclude nav/footer duplicates)
   - [ ] Record: Internal link count

5. **Images**
   - [ ] Count visible images above the fold (hero + first section)
   - [ ] Count total images on page
   - [ ] Record: Hero images, total images

6. **Schema Markup**
   - [ ] View page source (Cmd+U)
   - [ ] Search for `"@type":`
   - [ ] List all schema types found (e.g., Service, FAQPage, Organization, LocalBusiness)
   - [ ] Record: Schema types

7. **Meta Description**
   - [ ] Copy from DevTools or page source
   - [ ] Check length (target: 150-160 chars)
   - [ ] Record: Meta description + length

8. **Update Frequency**
   - [ ] Check footer for "Last Updated" date
   - [ ] Check blog section last post date
   - [ ] Check Google Cache date (site:domain on Google)
   - [ ] Estimate frequency: Weekly, Monthly, Static
   - [ ] Record: Frequency estimate

### Competitor Audit Spreadsheet Creation
- [ ] Create file: `/reports/PHASE5_COMPETITOR_AUDIT_2026-05-28.csv`
- [ ] Fill in template with all competitor data
- [ ] Add "myCHEF Current" comparison column
- [ ] Calculate gaps: "Content Gap" (words), "H2 Gap", "Link Gap", "Image Gap"
- [ ] Expected rows: 3 competitors × ~5 pillar pages = 15 rows minimum

---

## DAY 5-7 (May 29-31): Gap Ranking & Prioritization

### Analysis Process

**For each identified keyword/competitor pair:**
- [ ] Calculate opportunity score: (current position - 20) × (gap size)
- [ ] Classify into Tier 1 (quick wins) or Tier 2 (medium effort)
- [ ] Estimate effort hours (easy gap = 4h, medium = 6-8h, hard = 10+h)
- [ ] Estimate timeline to improvement (2-4 weeks typical for Tier 1)

**Tier 1 Criteria (Quick Wins):**
- Current position: 40-55
- Competitor gap: <500 words OR <3 H2s
- Estimated effort: 4-6 hours
- Expected result: Move to position 20-30 in 2-4 weeks

**Tier 2 Criteria (Medium Priority):**
- Current position: 55-75
- Competitor gap: 500-1,200 words
- Estimated effort: 6-10 hours
- Expected result: Move to position 25-35 in 4-8 weeks

### Final Deliverable: Ranked Opportunities

- [ ] Create file: `/reports/PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md`
- [ ] Format as markdown with 3 tiers
- [ ] Each opportunity includes:
  - Keyword name
  - Current page & position
  - Competitor leader domain & position
  - Specific gap (e.g., "+600 words, +2 H2s, add FAQPage schema")
  - Effort estimate (hours)
  - Expected timeline to improvement
- [ ] Target: 8-10 Tier 1 opportunities, 8-12 Tier 2, 4-6 Tier 3
- [ ] Total opportunities: 20-30

---

## HANDOFF: May 31 → June 1

**Deliverables to Content Lead:**
1. ✓ PHASE5_KEYWORD_BASELINE_2026-05-24.csv
2. ✓ PHASE5_COMPETITOR_AUDIT_2026-05-28.csv
3. ✓ PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md

**Content Lead Ready to Execute:**
- 10 Tier 1 quick-win opportunities
- 8-12 Tier 2 medium opportunities
- Full effort estimates (total ~65-91 hours across 3 weeks)
- Detailed page optimization templates in PHASE5_WEEK2_OPTIMIZATION.md

---

## Success Criteria

- [ ] All 3 deliverables completed by May 31
- [ ] ≥15 baseline keywords captured from GSC
- [ ] ≥3 competitors audited per pillar page
- [ ] ≥20 opportunities prioritized
- [ ] Effort estimates provided for all Tier 1 items
- [ ] No blockers preventing June 1 content optimization launch

---

**Status:** Ready for May 25 Kickoff  
**Created:** May 17, 2026  
**Last Updated:** May 17, 2026
