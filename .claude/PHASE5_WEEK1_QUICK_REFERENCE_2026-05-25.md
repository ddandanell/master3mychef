# Phase 5 Week 1: Quick Reference Checklist
**May 25-31, 2026**

One-page reference for daily execution. Print or screenshot for quick access.

---

## 📅 Daily Task Summary

| Day | Task | Duration | Key Action | Success = |
|-----|------|----------|-----------|-----------|
| **SAT 5/25** | GSC Baseline Capture | 2h | Export keywords from GSC (May 1-24) | ≥15 keywords, pos 30-100 |
| **SUN 5/26** | Baseline Review + Scout | 3h | ID Tier 1 keywords, find competitors | 12-15 competitor URLs |
| **MON 5/27** | Audit Part 1 | 4h | Analyze 4-5 competitor pages | 4-5 rows in CSV |
| **TUE 5/28** | Audit Part 2 | 3h | Analyze 7-10 competitor pages | CSV complete, all gaps calculated |
| **WED 5/29** | Opportunity Ranking P1 | 3h | Map keywords to pages, ID gaps | 8-10 T1 opportunities |
| **THU 5/30** | Opportunity Ranking P2 | 2.5h | Complete T2, T3, rank all | 20-30 total opportunities |
| **FRI 5/31** | QA & Handoff | 2h | Verify, prioritize T1, document | Ready to execute June 1 |

**Total: 19.5 hours spread over 7 days (~3h/day)**

---

## 🔗 File Dependencies

```
PHASE5_KEYWORD_BASELINE_2026-05-24.csv
        ↓
    (May 27)
        ↓
PHASE5_COMPETITOR_AUDIT_2026-05-28.csv
        ↓
    (May 29)
        ↓
PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md
        ↓
    (June 1)
        ↓
BEGIN WEEK 1 OPTIMIZATION EXECUTION
```

---

## 📋 Per-Day Checklist

### SATURDAY, MAY 25
**Task: GSC Baseline Capture**

**Morning (1h):**
- [ ] Open https://search.google.com/search-console/
- [ ] Navigate to mychef.id property
- [ ] Set date range: May 1-24, 2026
- [ ] Verify data loads (expect ~10-20 indexed pages)
- [ ] Sort by Average Position (descending)
- [ ] Filter by ≥5 impressions

**Afternoon (1h):**
- [ ] Export: Query, Impressions, Avg Position, CTR, Clicks
- [ ] Save to: `reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv`
- [ ] Add columns: Category, Priority Tier
- [ ] Identify Tier 1 keywords (position 40-55)

**Success criteria:**
- [ ] CSV has ≥15 keywords
- [ ] All rows have position (no blanks)
- [ ] Position range 30-100
- [ ] Impressions ≥5 for all rows

---

### SUNDAY, MAY 26
**Task: Baseline Review + Competitor Scouting**

**Morning (1.5h):**
- [ ] Open PHASE5_KEYWORD_BASELINE_2026-05-24.csv
- [ ] Identify Tier 1 keywords (position 40-55)
- [ ] Pick 3-4 keywords to research first (e.g., "fine dining bali")
- [ ] Note which pillar page each belongs to

**Afternoon (1.5h):**
- [ ] For each pillar: Search Google for top 3 competitors
  - Fine dining: Search "fine dining bali" → top 3 domains
  - Catering: Search "bali villa catering" → top 3 domains
  - Events: Search "wedding catering bali" → top 3 domains
  - Locations: Search "bali villa services seminyak" → top 3 domains

**Success criteria:**
- [ ] 3 competitors per pillar (12 total)
- [ ] All URLs accessible
- [ ] All competitors rank in top 10

---

### MONDAY, MAY 27
**Task: Competitor Audit Part 1 (4-5 pages)**

**Morning (2h):**
- [ ] Pick first competitor page (e.g., gisellebali.com/fine-dining)
- [ ] Use Competitor Audit Guide (PHASE5_COMPETITOR_AUDIT_GUIDE_2026-05-27.md)
- [ ] For each page, extract:
  - [ ] Word count (use wordcounter.net or DevTools)
  - [ ] H1 count (DevTools: `document.querySelectorAll('h1').length`)
  - [ ] H2 count (DevTools: `document.querySelectorAll('h2').length`)
  - [ ] Internal links (DevTools command in guide)
  - [ ] Image count (DevTools: `document.querySelectorAll('img').length`)
  - [ ] Schema types (check page source for "@type")
  - [ ] Meta description (page source)
  - [ ] Update frequency (footer date or "static")

**Afternoon (2h):**
- [ ] Record findings in PHASE5_COMPETITOR_AUDIT_2026-05-28.csv (4-5 rows)
- [ ] Calculate gaps: Content, H2, Link, Image gaps

**Success criteria:**
- [ ] 4-5 competitor pages audited
- [ ] All fields filled (no blanks)
- [ ] Gap columns calculated

---

### TUESDAY, MAY 28
**Task: Competitor Audit Part 2 (7-10 pages)**

**All Day (3h):**
- [ ] Repeat Monday's process for remaining 7-10 competitors
- [ ] Fill in PHASE5_COMPETITOR_AUDIT_2026-05-28.csv (complete all rows)
- [ ] Calculate all gap columns

**Success criteria:**
- [ ] 12-15 total rows (all competitors)
- [ ] All fields filled
- [ ] All gaps calculated
- [ ] Negative gaps highlighted (myCHEF behind)

---

### WEDNESDAY, MAY 29
**Task: Opportunity Ranking Part 1 (3h)**

**Morning (1.5h):**
- [ ] Open PHASE5_KEYWORD_BASELINE_2026-05-24.csv
- [ ] Open PHASE5_COMPETITOR_AUDIT_2026-05-28.csv
- [ ] For each Tier 1 keyword, find competitor data
- [ ] Identify specific gaps (words, H2s, schema, links, images)

**Afternoon (1.5h):**
- [ ] Create first 8-10 "opportunity cards" (Tier 1)
- [ ] For each, document:
  - [ ] Keyword
  - [ ] Current position
  - [ ] Target position (based on gaps)
  - [ ] Specific gaps (content, structure, schema, etc.)
  - [ ] Effort estimate (hours)

**Success criteria:**
- [ ] 8-10 Tier 1 opportunities documented
- [ ] Each has specific gaps listed
- [ ] Effort estimates provided

---

### THURSDAY, MAY 30
**Task: Opportunity Ranking Part 2 (2.5h)**

**Morning (1.5h):**
- [ ] Create 8-12 Tier 2 opportunity cards (position 55-75)
- [ ] Same documentation as T1

**Afternoon (1h):**
- [ ] Create 4-6 Tier 3 opportunity cards (position 75+)
- [ ] Note as "long-term" (not June priority)

**Success criteria:**
- [ ] 20-30 total opportunities documented
- [ ] All tiers complete (T1, T2, T3)
- [ ] Ready to prioritize

---

### FRIDAY, MAY 31
**Task: QA & Handoff Prep (2h)**

**Morning (1h):**
- [ ] Verify all deliverables exist:
  - [ ] PHASE5_KEYWORD_BASELINE_2026-05-24.csv ✓
  - [ ] PHASE5_COMPETITOR_AUDIT_2026-05-28.csv ✓
  - [ ] Opportunity cards ready ✓
- [ ] Check: No blank cells in core columns
- [ ] Check: All gaps calculated correctly

**Afternoon (1h):**
- [ ] Create PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md
- [ ] Rank all T1 opportunities by effort
- [ ] Assign June 1-21 timeline
- [ ] Document T1 execution order

**Success criteria:**
- [ ] All files complete and verified
- [ ] T1 prioritized for June 1-7
- [ ] Ready to execute June 1

---

## 🎯 Key Data to Track

### Tier 1 Keywords (Keep Handy)

You should identify 8-10 of these:

```
Position 40-55 keywords:
1. fine dining bali (pos 48)
2. bali villa catering (pos 45)
3. wedding catering bali (pos 52)
4. [more...]
```

### Gap Types to Track

When auditing, measure these four gaps:

| Gap Type | Measurement | T1 Threshold | Example |
|----------|------------|--------------|---------|
| **Content** | Words | >500 words | Comp: 2400, myCHEF: 1800 = -600 gap |
| **Structure** | H2 count | >2 H2s missing | Comp: 6 H2s, myCHEF: 4 = -2 gap |
| **Linking** | Internal links | >5 links missing | Comp: 18, myCHEF: 12 = -6 gap |
| **Schema** | Types | Any missing | FAQPage, VideoObject, etc. |

---

## 🚀 Tools Needed (Bookmark These)

- **WordCounter:** https://wordcounter.net/
- **Google Search Console:** https://search.google.com/search-console/
- **DevTools Console:** F12 in any browser
- **CSV Editor:** Google Sheets or Excel
- **Schema Checker:** https://search.google.com/test/rich-results

---

## 💾 File Locations

All files in: `/Users/openclaw/Downloads/MYCHEF . MASTER/app/`

**Core files:**
```
.claude/PHASE5_KEYWORD_BASELINE_2026-05-24.csv ← (create/populate May 25)
.claude/PHASE5_COMPETITOR_AUDIT_2026-05-28.csv ← (populate May 27-28)
.claude/PHASE5_OPPORTUNITIES_RANKED_2026-05-31.md ← (create May 29-30)

reports/PHASE5_COMPETITOR_SCOUTING_2026-05-17.md ← (reference)
reports/myCHEF_WEEKLY_MONITORING_REPORT_2026-05-19.md ← (reference)
```

---

## 🔗 Detailed Guides (When You Need Help)

| Task | Detailed Guide |
|------|-----------------|
| **GSC Baseline** | PHASE5_MAY25_LAUNCH_READINESS.md |
| **Competitor Audit** | PHASE5_COMPETITOR_AUDIT_GUIDE_2026-05-27.md |
| **Opportunity Ranking** | PHASE5_OPPORTUNITY_PRIORITIZATION_FRAMEWORK_2026-05-29.md |
| **Daily Schedule** | PHASE5_WEEK1_DAILY_BREAKDOWN.md |
| **Week 1 Execution** | PHASE5_WEEK1_EXECUTION_CHECKLIST.md |

---

## ⚠️ Common Mistakes (Avoid These)

- ❌ **Incomplete data:** Blank cells in CSV → Check data export
- ❌ **Wrong date range:** Using current date instead of May 1-24 → Verify GSC date filter
- ❌ **Skipping schema check:** Missing FAQPage opportunity → Check page source
- ❌ **Counting header images:** Hero images skew totals → Count section images only
- ❌ **Incorrect position:** Using ranking from different date → Use May 1-24 baseline only

---

## ✨ Done! You're Ready

By May 31 EOD, you will have:

✅ 1 Keyword baseline (15+ keywords)  
✅ 1 Competitor audit (12-15 pages analyzed)  
✅ 1 Ranked opportunity list (20-30 items)  
✅ Clear June execution plan (T1 first)  

**June 1, 0800 UTC: Begin optimization on first T1 opportunity.**

---

**Print this page or screenshot for quick daily reference.**

**Questions?** See detailed guides above or consult master execution manual.

**Status:** Week 1 ready to execute  
**Timeline:** May 25-31 (7 days)  
**Handoff:** June 1 (optimization begins)
