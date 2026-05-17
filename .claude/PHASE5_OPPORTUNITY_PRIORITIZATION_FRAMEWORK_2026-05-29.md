# Phase 5 Week 1: Opportunity Prioritization Framework
**May 29-30, 2026**

Transform baseline + competitor audit into ranked optimization opportunities.

---

## 🎯 Goal

Identify 20-30 specific optimization opportunities ranked by:
1. **Quick wins first** (position improvement potential)
2. **Effort required** (realistic hours to execute)
3. **Impact potential** (keyword volume & conversion relevance)

---

## 📊 Data Inputs

By May 29 morning, you have three data sources:

### 1. GSC Keyword Baseline (May 25)
**File:** `PHASE5_KEYWORD_BASELINE_2026-05-24.csv`

Contains:
- Keyword name
- Current position (30-100 range)
- Impressions (monthly search volume proxy)
- CTR (click-through rate)
- Category (Brand/Pillar/Blog/Long-tail)
- Priority tier (T1 40-55 / T2 55-75 / T3 75+)

### 2. Competitor Audit (May 27-28)
**File:** `PHASE5_COMPETITOR_AUDIT_2026-05-28.csv`

Contains per competitor:
- Domain, URL, ranking position
- Content length (words)
- Structure (H1, H2 counts)
- Internal linking (count)
- Images (count)
- Schema types (FAQPage, Service, etc.)
- Update frequency
- Gap calculations

### 3. myCHEF Page Baselines
**Already known:**
- `/fine-dining` page: 1,800 words, 1 H1, 4 H2s, 12 links, 6 images
- `/catering` page: Similar structure
- `/events` page: Similar structure
- `/locations` page: Similar structure

---

## 🔄 Step 1: Align Keywords to Pages (May 29, Morning)

**Objective:** Map each Tier 1 keyword to the page that should rank for it

### Keyword-to-Page Mapping

| Keyword | Current Position | Pillar Page | Competitor Leader | Competitor Position |
|---------|------------------|-------------|-------------------|---------------------|
| fine dining bali | 48 | /fine-dining | gisellebali.com | 2 |
| bali villa catering | 45 | /catering | balicatering.com | 3 |
| wedding catering bali | 52 | /events | eventscatering.com | 4 |
| bali private chef hire | 60 | /fine-dining | firestoneresort.com | 5 |

**Process:**
1. Open PHASE5_KEYWORD_BASELINE_2026-05-24.csv
2. Filter for Tier 1 keywords (position 40-55)
3. For each keyword, determine which pillar page it belongs to:
   - "fine dining" keywords → `/fine-dining`
   - "catering" keywords → `/catering`
   - "wedding/event" keywords → `/events`
   - "villa/location" keywords → `/locations`

**Result:** List of 8-10 T1 keywords with target pages

---

## 🔍 Step 2: Calculate Specific Content Gaps (May 29, Afternoon)

For each Tier 1 keyword:

### Example: "fine dining bali" (position 48)

**Competitor leader:** Giselle Bali (position 2)
- Word count: 2,400
- H2 sections: 6
- Internal links: 18
- Images: 8
- Schema: FAQPage + LocalBusiness

**myCHEF /fine-dining page:**
- Word count: 1,800
- H2 sections: 4
- Internal links: 12
- Images: 6
- Schema: LocalBusiness only

**Gaps identified:**
```
1. CONTENT GAP: 2,400 - 1,800 = 600 words
   → Target: +600 words to match competitor leader
   → Estimated effort: 3-4 hours (writing + editing)

2. STRUCTURE GAP: 6 - 4 = +2 H2 sections
   → Current H2s: What is Fine Dining, Menu, Pricing, Book
   → Missing H2s: "Wine Pairings", "Chef Background" (add 2 more)
   → Estimated effort: 1-2 hours (outline + content)

3. INTERNAL LINKING: 18 - 12 = +6 links
   → Add 6 internal links to related pages (staffing, catering, locations)
   → Estimated effort: 0.5 hours

4. IMAGES: 8 - 6 = +2 images
   → Add 2 more section images (wine pairing, chef at work)
   → Estimated effort: 0.5 hours (existing assets)

5. SCHEMA MARKUP: Missing FAQPage
   → Add FAQPage schema for common questions
   → Estimated effort: 1 hour (structure + markup)

TOTAL EFFORT: 5-8 hours
ESTIMATED RANKING IMPACT: Position 48 → 35-40 (10-15 position improvement)
CONFIDENCE: HIGH (multiple gaps to fill)
```

---

## 📋 Step 3: Create Opportunity Cards (May 29 Evening)

For each gap type, create a standardized "opportunity card":

### Opportunity Card Template

```markdown
## OPPORTUNITY: Fine Dining Page - Content Expansion
**Keyword:** fine dining bali  
**Current Position:** 48  
**Target Position:** 35-40 (based on competitor gap)  
**Effort:** 5-8 hours  
**Tier:** TIER 1 (Quick Win)

### The Gap
- Competitor leader (Giselle, pos 2): 2,400 words
- myCHEF: 1,800 words
- **Gap: +600 words** (25% content deficit)

### How to Fix
1. **Add 2 H2 sections** (100 words each) - 2 hours
   - "Wine Pairings & Sommelier Selection" (150 words)
   - "Meet Our Head Chef" (150 words)
2. **Expand 2 existing sections** (200 words total) - 2 hours
   - "What is Fine Dining" (currently 80 → 150 words)
   - "Menu" (currently 200 → 300 words)
3. **Add 6 internal links** to staffing, catering, locations - 0.5 hours
4. **Add 2 images** (wine, chef) - 0.5 hours
5. **Add FAQPage schema** for common questions - 1 hour

### Expected Impact
- Ranking improvement: 10-15 positions (48 → 35-40)
- Search visibility: +300% (from position 48 → 40)
- Timeline: Can publish June 1-2
- Effort priority: **HIGH** (quick win candidate)

### Next Steps
1. Write wine pairing + chef sections (2 hours)
2. Expand existing sections (2 hours)
3. Add internal links (0.5 hours)
4. Source/add images (0.5 hours)
5. Structure FAQPage schema (1 hour)
```

---

## 🎯 Step 4: Tier Opportunities by Impact (May 30, Morning)

### Tier 1: Quick Wins (Position 40-55)
**Criteria:**
- Current position: 40-55 (very close to top 30)
- Gap: <600 words, <3 H2s, or simple schema add
- Effort: 4-6 hours per keyword
- Impact: 8-15 position improvement expected

**Target:** 8-10 opportunities

**Example T1 keywords:**
- fine dining bali (pos 48, +600 words, +2 H2s)
- bali villa catering (pos 45, +400 words)
- wedding catering bali (pos 52, +500 words)
- bali private chef hire (pos 60, +800 words)

### Tier 2: Medium Effort (Position 55-75)
**Criteria:**
- Current position: 55-75 (further from top 30)
- Gap: 500-1000 words, 3-5 H2s
- Effort: 6-10 hours per keyword
- Impact: 10-20 position improvement expected

**Target:** 8-12 opportunities

**Example T2 keywords:**
- how to hire private chef (pos 62, +700 words, new page)
- catering options bali (pos 68, +600 words, 4 H2s)
- event planning bali (pos 70, +1000 words, new page)

### Tier 3: Long-term (Position 75+)
**Criteria:**
- Current position: 75+ (much further down)
- Gap: >1000 words, or entirely new page needed
- Effort: 10+ hours
- Impact: 20+ position improvement (longer timeline)

**Target:** 4-6 opportunities

**Note:** Focus on T1 first (June 1-21); T3 for July-Aug

---

## 📊 Step 5: Create Ranked Opportunity List (May 30, Afternoon)

### Final Output: PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md

```markdown
# Phase 5 Week 1: Ranked Optimization Opportunities
**Generated:** May 30, 2026

## TIER 1: Quick Wins (8-10 items)

### 1. Fine Dining Page - Content Expansion
- Keyword: fine dining bali
- Position: 48 → Target: 35
- Gaps: +600 words, +2 H2s, FAQPage schema
- Effort: 5-8 hours
- Timeline: June 1-2

### 2. Catering Page - Structure Expansion
- Keyword: bali villa catering
- Position: 45 → Target: 30
- Gaps: +400 words, +2 H2s, VideoObject schema
- Effort: 4-6 hours
- Timeline: June 2-3

[...continue for 8-10 total T1 items...]

## TIER 2: Medium Effort (8-12 items)

### 9. New Blog Post: How to Hire Private Chef
- Keyword: how to hire private chef
- Position: 62 → Target: 45
- Gaps: NEW PAGE, 3000 words, 6 H2s, FAQPage schema
- Effort: 6-8 hours
- Timeline: June 4-5

[...continue for 8-12 total T2 items...]

## TIER 3: Long-term (4-6 items)

### 18. Staffing Page Expansion
- Keyword: professional kitchen staff bali
- Position: 88 → Target: 50+
- Gaps: +1200 words, new service page
- Effort: 10+ hours
- Timeline: July 2026

[...continue for 4-6 total T3 items...]
```

---

## ✅ Success Criteria (May 30 EOD)

You should have:

- [ ] **20-30 total opportunities identified**
  - 8-10 Tier 1 (quick wins)
  - 8-12 Tier 2 (medium effort)
  - 4-6 Tier 3 (long-term)

- [ ] **Each opportunity documented with:**
  - Target keyword
  - Current position + target position
  - Specific gaps (words, H2s, schema, links, images)
  - Estimated effort in hours
  - Expected ranking improvement
  - Timeline for execution

- [ ] **Tier 1 opportunities prioritized for June 1-21**
  - First 4-6 T1 items can be completed June 1-14
  - Remaining T1 items June 15-21
  - T2 can start mid-June if T1 on track

---

## 🚀 Handoff to June 1 Execution

By June 1 morning, you should have:

**In PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md:**
- [ ] Tier 1 opportunities ranked by effort
- [ ] Tier 2 opportunities listed
- [ ] Tier 3 opportunities noted for future
- [ ] Clear timeline: which T1s for June 1-7, which for June 8-14, etc.

**Ready to execute:**
- [ ] Take first T1 opportunity
- [ ] Follow the gap-fix outline
- [ ] Publish optimized page
- [ ] Submit to GSC for re-crawl
- [ ] Move to next T1 opportunity

---

## 📝 Decision Rules

**When ranking T1 opportunities, prioritize by:**

1. **Effort first** (easier items first to build momentum)
   - Example: FAQPage schema add = 1-2 hours → Do first
   - Example: +400 words + 2 H2s = 4-5 hours → Do second

2. **Then by position potential** (biggest jumps)
   - Example: Pos 45 → 30 (15 position improvement) = higher priority
   - Example: Pos 55 → 48 (7 position improvement) = lower priority

3. **Then by conversion relevance**
   - "fine dining" keywords = higher conversion intent
   - "what is" keywords = lower conversion intent

---

## 🎯 Example Execution Order (First 4 T1s)

1. **Monday, June 1:** Fine Dining page schema update (1-2h, quick win)
2. **Tuesday, June 2:** Fine Dining page +600 words + 2 H2s (4-5h)
3. **Wednesday, June 3:** Catering page +400 words + 2 H2s (4h)
4. **Thursday, June 4:** Events page link expansion (2h)

This order:
- Builds momentum (1-2h task first)
- Tackles biggest gaps early (fine dining +600 words)
- Spreads effort across pages (fine dining, catering, events)
- Allows GSC crawl between publishes

---

**Status:** Ready for May 29-30 execution  
**Input:** PHASE5_KEYWORD_BASELINE_2026-05-24.csv + PHASE5_COMPETITOR_AUDIT_2026-05-28.csv  
**Output:** PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md  
**Handoff:** June 1, 0800 UTC (begin Week 1 execution)
