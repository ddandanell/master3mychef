# Phase 5 Week 1: Daily Breakdown (May 25-31)

---

## SUNDAY, MAY 19 — PRE-EXECUTION PREP
**Duration:** 50 minutes | **Time:** 0800 UTC

→ Execute `SUNDAY_MONITORING_EXECUTION_SCRIPT.md`
- Review GSC coverage, GA4 traffic, Core Web Vitals, production health
- Generate baseline Week 2 report
- Confirm production stability before Phase 5 launch

**Output:** `reports/myCHEF_WEEKLY_MONITORING_REPORT_2026-05-19.md`

---

## SATURDAY, MAY 25 — DAY 1 of Phase 5
**Task:** GSC Baseline Capture (Part 1)  
**Duration:** 2 hours  
**Time:** Any time (flexible)

### Morning (1 hour)
1. **Open Google Search Console**
   - URL: https://search.google.com/search-console/performance?resource_id=sc-domain%3Amychef.id
   - Verify resource shows "mychef.id"
   - Check current Coverage tab (baseline: ~18-20 pages indexed)

2. **Set Date Range**
   - Filter: May 1-24, 2026 (24 days of historical data)
   - Do NOT use a rolling window; use fixed May 1-24 dates

3. **Prepare Export**
   - Sort by "Average Position" (descending - worst positions first)
   - Filter by ≥5 impressions (to exclude 1-off clicks)
   - Select all rows that meet criteria

### Afternoon (1 hour)
4. **Export Data**
   - Columns: Query, Impressions, Average Position, CTR, Clicks
   - Copy all rows to clipboard
   - Paste into `/reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv`

5. **Organize Baseline**
   - Add "Category" column (Brand, Pillar, Blog, Long-tail)
   - Add "Priority" column (T1: 40-55, T2: 55-75, T3: 75+)
   - Sort by position (40+ = T1 candidates first)

**Deliverable:** PHASE5_KEYWORD_BASELINE_2026-05-24.csv (15-25 keywords)

**Success Check:**
- [ ] CSV has ≥15 keywords
- [ ] All rows have position data (no blanks)
- [ ] Position range: 30-100 (typical for new sites)
- [ ] Impressions ≥5 for all rows

---

## SUNDAY, MAY 26 — DAY 2 of Phase 5
**Task:** GSC Baseline Capture (Part 2) + Initial Competitor Scouting  
**Duration:** 3 hours  
**Time:** Any time (flexible)

### Morning (1.5 hours)
1. **Review Baseline Keywords**
   - Open PHASE5_KEYWORD_BASELINE_2026-05-24.csv
   - Identify keywords with positions 40-55 (Tier 1 quick wins)
   - Identify which pillar page each keyword belongs to

2. **Identify Competitor Research Targets**
   - From Tier 1 keywords, pick 3-4 to research first
   - Example targets: "fine dining bali", "bali catering", "wedding catering bali"
   - These will guide competitor selection

### Afternoon (1.5 hours)
3. **Scout Top 3 Competitors per Pillar**
   - For `/fine-dining`: Search "fine dining bali" → record top 3 domains (positions 1-10)
   - For `/catering`: Search "bali villa catering" → record top 3 domains
   - For `/events`: Search "wedding catering bali" → record top 3 domains
   - For `/locations`: Search "bali villa services seminyak" → record top 3 domains

4. **Create Competitor Checklist**
   - List: Domain, URL, Current Ranking Position
   - Total competitors: 3 domains × 4 pillar pages = 12 competitor URLs to audit

**Deliverable:** Competitor list ready for auditing (12-15 URLs)

**Success Check:**
- [ ] 3 competitors identified per pillar page
- [ ] URLs saved and accessible
- [ ] All competitors rank in top 10 for their keywords

---

## MONDAY, MAY 27 — DAY 3 of Phase 5
**Task:** Competitor Content Audit (Part 1)  
**Duration:** 4 hours  
**Time:** Any time (flexible)

### Morning (2 hours)
1. **Audit First Set of Competitors** (4-5 competitor pages)
   - For each page, extract:
     - Content length (word count) → wc -w or word counter tool
     - Header structure → DevTools search for `<h1>`, `<h2>`
     - Internal links → count `<a href="` in same domain
     - Images → count visible images (hero + section 1)

2. **Record Schema Markup**
   - Open page source (Cmd+U)
   - Search for `"@type": "`
   - List all schema types (FAQPage, Service, LocalBusiness, etc.)

### Afternoon (2 hours)
3. **Audit Metadata**
   - Copy meta descriptions from each page
   - Check for "Last Updated" in footer
   - Estimate update frequency (weekly, monthly, static)

4. **Create Audit Rows**
   - Fill in PHASE5_COMPETITOR_AUDIT_2026-05-28.csv with first 4-5 rows
   - Include myCHEF current comparison

**Deliverable:** Partial competitor audit (4-5 rows in CSV)

**Success Check:**
- [ ] Word counts captured for all pages
- [ ] H1/H2 counts recorded
- [ ] Schema types identified
- [ ] myCHEF comparison columns filled in

---

## TUESDAY, MAY 28 — DAY 4 of Phase 5
**Task:** Competitor Content Audit (Part 2 - Final)  
**Duration:** 3 hours  
**Time:** Any time (flexible)

### Morning-Afternoon (3 hours)
1. **Complete Remaining Audits** (7-8 competitor pages)
   - Repeat the May 27 process for remaining competitors
   - Extract same fields: content length, headers, links, images, schema, metadata

2. **Finalize Audit Spreadsheet**
   - Fill in all rows in PHASE5_COMPETITOR_AUDIT_2026-05-28.csv
   - Calculate gap columns:
     - Content Gap (words): myCHEF word count - Competitor word count
     - H2 Gap (count): myCHEF H2s - Competitor H2s
     - Link Gap: myCHEF links - Competitor links
     - Image Gap: myCHEF images - Competitor images
   - Mark which gaps are "negative" (myCHEF behind)

3. **Identify Key Improvement Areas**
   - Find competitors with >600 word advantage (content gap)
   - Find competitors with +3 H2s advantage (structure gap)
   - Note any with FAQPage schema (myCHEF missing)

**Deliverable:** PHASE5_COMPETITOR_AUDIT_2026-05-28.csv (12-15 rows, complete)

**Success Check:**
- [ ] All competitor rows filled in
- [ ] All gap calculations completed
- [ ] Negative gaps highlighted (areas to improve)
- [ ] 3+ schema type differences identified

---

## WEDNESDAY, MAY 29 — DAY 5 of Phase 5
**Task:** Opportunity Ranking (Part 1)  
**Duration:** 3 hours  
**Time:** Any time (flexible)

### Morning (1.5 hours)
1. **Cross-Reference Baseline + Audit**
   - Open PHASE5_KEYWORD_BASELINE_2026-05-24.csv
   - Open PHASE5_COMPETITOR_AUDIT_2026-05-28.csv
   - For each Tier 1 keyword (position 40-55):
     - Find matching competitor audit row
     - Identify specific gaps (words, H2s, schema)

2. **Calculate Improvement Opportunity**
   - For keyword "fine dining bali" at position 48:
     - Competitor at position 2 has 2,400 words
     - myCHEF has 1,400 words
     - Gap: +1,000 words, estimated 5-6 hours to fill
     - Tier: T1 Quick Win

### Afternoon (1.5 hours)
3. **Create Opportunity List**
   - Start markdown file: PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md
   - Add TIER 1 section (10 items target)
   - For each opportunity, record:
     - Keyword name
     - Current position
     - Competitor leader position
     - Specific gaps
     - Estimated effort (hours)

**Deliverable:** TIER 1 opportunities list (8-10 items)

**Success Check:**
- [ ] 8-10 Tier 1 opportunities identified
- [ ] Each has specific gaps documented
- [ ] Effort estimates provided (4-6 hours typical for T1)

---

## THURSDAY, MAY 30 — DAY 6 of Phase 5
**Task:** Opportunity Ranking (Part 2)  
**Duration:** 2.5 hours  
**Time:** Any time (flexible)

### Morning (1.5 hours)
1. **Add TIER 2 Opportunities** (position 55-75)
   - Identify 8-12 medium-difficulty keywords
   - For each: gap >500 words, effort 6-8 hours
   - Add to PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md

### Afternoon (1 hour)
2. **Add TIER 3 Opportunities** (position 75+)
   - Identify 4-6 long-term keywords (effort 10+ hours)
   - Note these for future phases (not June 1-21 scope)

**Deliverable:** Complete ranked opportunities list (20-30 items across 3 tiers)

**Success Check:**
- [ ] TIER 1: 8-10 opportunities (quick wins, 4-6h each)
- [ ] TIER 2: 8-12 opportunities (medium, 6-10h each)
- [ ] TIER 3: 4-6 opportunities (long-term, 10+h each)
- [ ] Total: 20-30 opportunities identified

---

## FRIDAY, MAY 31 — DAY 7 of Phase 5 (Handoff Prep)
**Task:** Final Review & Documentation  
**Duration:** 2 hours  
**Time:** Any time (flexible)

### Morning (1 hour)
1. **Quality Check of All Deliverables**
   - PHASE5_KEYWORD_BASELINE_2026-05-24.csv ✓ (15+ keywords, all fields filled)
   - PHASE5_COMPETITOR_AUDIT_2026-05-28.csv ✓ (12+ rows, gaps calculated)
   - PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md ✓ (20+ opportunities, tiers assigned)

2. **Verify Tier 1 Quality**
   - Check: Each T1 opportunity has <500 word gap or <3 H2s gap
   - Check: Effort estimates 4-6 hours
   - Check: Expected timeline 2-4 weeks post-publish

### Afternoon (1 hour)
3. **Create Handoff Summary**
   - List all deliverables with file paths
   - Confirm readiness for June 1 content optimization
   - Note any blockers or dependencies

4. **Commit Prep Files**
   - All CSV and markdown files saved
   - Ready for git commit on June 1

**Deliverable:** Ready for Phase 5 Week 2 handoff (all 3 files complete & verified)

**Success Check:**
- [ ] All 3 CSVs/MD files completed
- [ ] Quality checks passed
- [ ] 65-91 hour effort estimate calculated
- [ ] Content Lead can start June 1 with full framework

---

## SUNDAY, JUNE 1 — Phase 5 Week 2 LAUNCH
**Handoff Complete.** Content optimization begins with PHASE5_WEEK2_OPTIMIZATION.md templates.

13 pages (8 pillars + 5 blogs) × 4.5-5.5 hours/page = 65-91 hours across Weeks 2-4.

---

## Time Expectations Summary

| Week | Days | Task | Hours | Deliverable |
|------|------|------|-------|-------------|
| W1 | May 25-26 | GSC Baseline | 2-3h | KEYWORD_BASELINE_*.csv |
| W1 | May 27-28 | Competitor Audit | 7-8h | COMPETITOR_AUDIT_*.csv |
| W1 | May 29-31 | Ranking & Prioritization | 5-7h | OPPORTUNITIES_RANKED_*.md |
| **W1 TOTAL** | **May 25-31** | **Phase 5 Week 1** | **14-18h** | **3 Deliverables** |
| W2-4 | Jun 1-21 | Content Optimization | 65-91h | 13 optimized pages |

---

**Status:** Ready for May 25 execution  
**Created:** May 17, 2026  
**Next:** Execute May 19 monitoring, then launch Phase 5 on May 25
