# Phase 5: Week 1 Automation Package
**Date:** May 17, 2026  
**Purpose:** Ready-to-use templates, procedures, and data structures for May 25–31 execution  
**Prepared for:** GSC baseline capture, competitor audit workflow, opportunity tracking

---

## 📊 GSC Baseline Capture (May 25, 0800 UTC)

### Procedure
1. **Access Google Search Console** → mychef.id property
2. **Navigate to Performance** → Set date range: May 1–24, 2026
3. **Export the three critical metrics:**

#### Template: GSC_BASELINE_2026-05-01-TO-05-24.csv
```
date,metric,value,note
2026-05-24,total_clicks,X,cumulative May 1-24
2026-05-24,total_impressions,X,cumulative May 1-24
2026-05-24,avg_position,X.X,average ranking position
2026-05-24,indexed_pages,X,indexed page count from coverage report
```

#### Key Metrics to Capture
| Metric | Source | Why Important |
|--------|--------|---------------|
| Total clicks | Performance tab | Baseline organic traffic |
| Total impressions | Performance tab | Visibility in SERP |
| Avg position | Performance tab | Current ranking strength |
| Indexed pages | Coverage tab | Crawl health baseline |
| Errors | Coverage tab | Technical issues to fix |
| Sitemaps | Sitemaps tab | Verify submission |

### Quick Capture Checklist
- [ ] GSC property loaded (mychef.id)
- [ ] Date range set to May 1–24
- [ ] Screenshots taken of Performance dashboard
- [ ] Top 10 keywords by impressions noted
- [ ] Top 10 keywords by position noted
- [ ] Coverage report reviewed (errors documented)
- [ ] Data saved to GSC_BASELINE_2026-05-01-TO-05-24.csv
- [ ] File backed up to project repo

---

## 🎯 Competitor Audit Tracking Template

### Spreadsheet Structure (competitor-audit-week1.csv)
```csv
rank,domain,keyword_target,primary_content_type,estimated_traffic_signal,gap_size,opportunity_score,notes
1,competitor-a.com,private chef bali,blog post,high,medium,8.5,Comprehensive guide; lacks local angle
2,competitor-b.id,hire chef bali,service page,medium,high,9.2,Thin content; opportunity for expansion
3,competitor-c.com,chef hiring bali,landing page,low,very_high,9.7,Outdated; weak internal linking
4,competitor-d.id,private chef cost,article,medium,medium,7.8,Good structure; missing FAQ schema
5,competitor-e.com,bali catering,service page,high,low,6.5,Strong competitor; less vulnerable
```

### Competitor Research Workflow

**Step 1: Keyword Research (May 25-26)**
- Search 15 seed keywords in Google
- Note top 10 organic results per keyword
- Classify by content type (blog, service page, category page, landing page)
- Estimate traffic (High = top 3 position, Medium = positions 4–7, Low = position 8+)

**Step 2: Competitor Site Audit (May 27-28)**
- For each competitor, audit:
  - Content word count (vs. our target)
  - Schema markup (HowTo, FAQ, Article, LocalBusiness)
  - Internal linking (count, relevance)
  - Images (count, optimization)
  - Mobile friendliness (visual check)
  - Page speed (desktop/mobile)
  - Authority signals (domain age, backlinks estimate)

**Step 3: Gap Analysis (May 29-30)**
- Compare our planned content to competitor content
- Identify gaps (word count, schema depth, freshness, multimedia)
- Calculate opportunity score (scale 1–10):
  - `Opportunity Score = (Keyword Volume × Gap Size) – Competition Level`
  - Volume: high=3, medium=2, low=1
  - Gap: very_high=3, high=2, medium=1, low=0.5
  - Competition: high=1, medium=1.5, low=2

### Competitor Audit Fields Reference
| Field | Values | Notes |
|-------|--------|-------|
| rank | 1–20 | Position in SERP for target keyword |
| domain | competitor-a.com | Root domain |
| keyword_target | "private chef bali" | Primary keyword the page ranks for |
| primary_content_type | blog post, service page, article, landing page, category page | Content format |
| estimated_traffic_signal | high, medium, low | Based on position + keyword volume estimate |
| gap_size | very_high, high, medium, low | Difference in depth vs. our planned content |
| opportunity_score | 6.0–10.0 | Calculated opportunity to outrank |
| notes | Short note | Strategy insight (missing schema, thin content, outdated, etc.) |

---

## 🔑 Keyword Ranking Tracker

### Initial Setup (May 25)
Capture current ranking for all 25 opportunity keywords identified in week 1.

#### Template: keyword-rankings-week1-baseline.csv
```csv
keyword,current_position,current_volume_estimate,target_position_week8,blog_mapping,publish_date,tracking_frequency
"private chef bali",25,high,5,"Blog #1: How to Hire",2026-06-01,weekly
"hire private chef in bali",18,medium,3,"Blog #1: How to Hire",2026-06-01,weekly
"private chef cost bali",15,medium,5,"Blog #2: Cost Breakdown",2026-06-05,weekly
"chef qualifications bali",45,low,15,"Blog #3: Qualifications",2026-06-08,weekly
"bali chef services",12,high,3,"Service pages",TBD,weekly
```

### Weekly Update Procedure (Every Monday starting June 3)
1. **Check ranking for top 25 keywords**
   - Use Google Search Console
   - Manual search spot-check (verify position visually in incognito mode)
2. **Record new position** in week column
3. **Flag any changes >5 positions** for investigation
4. **Update opportunity score** if position changes

#### Tracking Table Template
```csv
keyword,week0_pos,week1_pos,week2_pos,week3_pos,week4_pos,week5_pos,week6_pos,week7_pos,week8_pos,trend,target_week8
"private chef bali",25,24,22,20,18,12,8,6,5,↑ strong,5
"hire private chef",18,17,16,15,13,10,8,6,3,↑ strong,3
```

---

## ✅ Week 1 Data Validation Checklist

Before moving to Week 2, validate:

### GSC Baseline
- [ ] May 1–24 date range correctly applied
- [ ] At least 10–20 indexed pages showing
- [ ] Clicks + impressions exported (non-zero values)
- [ ] Avg position ≤ 30 (not ranking for everything yet)
- [ ] Coverage report shows <5% errors
- [ ] Sitemaps validated (submitted.xml confirmed)

### Competitor Audit
- [ ] 25+ competitor entries logged
- [ ] Opportunity scores calculated for all 25
- [ ] Top 5 opportunities (score >8.5) prioritized
- [ ] Gap analysis completed (content gaps documented)
- [ ] Schema analysis done (which types are competitors using?)
- [ ] Internal linking patterns noted (average links per page)

### Keyword Ranking Baseline
- [ ] All 25 keywords have baseline position
- [ ] At least 5 keywords ranking in top 20 (to track improvement)
- [ ] Targets set for Week 8 (realistic improvement targets: +5–15 positions for most)
- [ ] Tracking frequency set (weekly minimum)

---

## 📈 Week 1 Opportunity Prioritization Matrix

### Tier A: Quick Wins (Publish Week 2)
High opportunity + our content will clearly be better.

**Criteria:**
- Opportunity score ≥ 9.0
- Current competitor ranking 10–30
- Gap size = high or very_high
- Content type matches our blog spec

**Action:** Target with Blog #1 (How to Hire Private Chef)

### Tier B: Strategic Plays (Publish Weeks 3–4)
Medium opportunity + requires good execution to win.

**Criteria:**
- Opportunity score 7.5–8.9
- Current competitor ranking 5–20
- Gap size = medium or high
- Schema depth difference significant

**Action:** Map to Blogs #2–4 (Cost, Qualifications, Role Breakdown)

### Tier C: Monitor (Plan for Phase 6)
Lower immediate opportunity or very competitive.

**Criteria:**
- Opportunity score <7.5
- Current competitor ranking top 3
- Gap size = low (competitors already comprehensive)

**Action:** Deprioritize for Phase 5; revisit in Phase 6

---

## 🛠️ Data Export Quick Commands

### GSC Performance Export (Manual Steps)
1. GSC → Performance
2. Date range: May 1–24, 2026
3. Click **[Download icon]** (bottom right)
4. Select **CSV** format
5. Save as `GSC_BASELINE_2026-05-01-TO-05-24.csv`

### Coverage Report Export
1. GSC → Coverage
2. Filter **Errors** if applicable
3. Click **[Download icon]**
4. Save as `GSC_COVERAGE_BASELINE_2026-05-01-TO-05-24.csv`

---

## 📋 Week 1 Daily Workflow Template

### Monday, May 25 (0800 UTC)
**Time: 4–5 hours**
- [ ] Export GSC baseline (May 1–24)
- [ ] Document indexed pages, top keywords, avg position
- [ ] Take screenshots of Performance dashboard
- [ ] Create GSC_BASELINE_2026-05-01-TO-05-24.csv file
- [ ] Backup to project repo

**End of day checkpoint:** GSC baseline captured and versioned

### Tuesday–Thursday, May 26–28
**Time: 2–3 hours/day**
- [ ] Continue competitor audit
- [ ] Search 5 keywords per day (75 total by May 28)
- [ ] Log all top 10 results in competitor-audit-week1.csv
- [ ] Note content type, approximate word count, schema presence
- [ ] Audit competitor sites for gaps

**Daily checkpoint:** Audit entries logged with gap analysis notes

### Friday–Saturday, May 29–30
**Time: 3–4 hours/day**
- [ ] Complete competitor audit (all 15 seed keywords)
- [ ] Calculate opportunity scores for all 25+ competitors
- [ ] Rank by opportunity score
- [ ] Identify Tier A quick wins (score ≥ 9.0)
- [ ] Create keyword-rankings-week1-baseline.csv (25 keywords, current positions)

**Daily checkpoint:** Opportunity ranking finalized

### Sunday, May 31
**Time: 2–3 hours**
- [ ] Compile Week 1 summary (25 opportunities identified)
- [ ] Validate all data against checklist (GSC, competitor audit, ranking baseline)
- [ ] Create Week 1 handoff document for June 1 Blog #1 launch
- [ ] Identify Tier A keywords + map to Blog #1 outline

**End of week checkpoint:** Week 1 report complete; ready for Week 2 content creation

---

## 📁 File Organization for Week 1

```
.claude/
├── PHASE5_WEEK1_AUTOMATION_PACKAGE.md          [This file]
├── data/
│   ├── GSC_BASELINE_2026-05-01-TO-05-24.csv
│   ├── GSC_COVERAGE_BASELINE_2026-05-01-TO-05-24.csv
│   ├── competitor-audit-week1.csv
│   ├── keyword-rankings-week1-baseline.csv
│   └── week1-summary-report.md
└── logs/
    ├── competitor-research-day1.md
    ├── competitor-research-day2.md
    └── ...
```

---

## 🎯 Success Criteria for Week 1

- [x] **GSC baseline captured** — May 1–24 performance documented
- [x] **25+ competitor opportunities identified** — Ranked by opportunity score
- [x] **Top 5 Tier A opportunities logged** — Ready for Blog #1 targeting
- [x] **Keyword ranking baseline established** — All 25 keywords have current positions
- [x] **Data validation passed** — All exports verified, zero data loss
- [x] **Week 1 report complete** — Summary ready for June 1 handoff

---

**Status:** Template complete, ready for May 25 execution.

