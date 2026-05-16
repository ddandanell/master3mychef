# Phase 5 Day 1 Quick Start
**Saturday, May 25, 2026 – 0800 UTC**

Print this page. Use it as your Day 1 execution checklist.

---

## ⏱️ Timeline (2 hours total)

| Time | Task | Duration | Output |
|------|------|----------|--------|
| **08:00–09:00** | Morning: GSC Access & Data Export | 1h | CSV with ≥15 keywords |
| **09:00–10:00** | Afternoon: CSV Processing & Tier 1 ID | 1h | Complete baseline with categories |
| **10:00** | DONE ✅ | — | Ready for May 26 |

---

## 📱 Morning (08:00–09:00): GSC Data Export

### Step 1: Open Google Search Console
```
URL: https://search.google.com/search-console/performance?resource_id=sc-domain%3Amychef.id
```
- [ ] Dashboard loads (should show "18 indexed pages, 0 errors")
- [ ] You see performance table with Query, Impressions, Position, CTR, Clicks columns

### Step 2: Set Date Range
```
Date range: May 1 – May 24, 2026
```
- [ ] Click date picker (top right)
- [ ] Start date: May 1, 2026
- [ ] End date: May 24, 2026
- [ ] Click "Apply"
- [ ] Wait for data to load (~10 seconds)

### Step 3: Filter & Sort
```
Filter: Impressions ≥ 5
Sort: Average Position (descending = highest position numbers first)
```
- [ ] Check "Average Position" column header
- [ ] You should see keywords in position 30–100 range (new site typical)
- [ ] Count total rows: should be 15–30 keywords

### Step 4: Export Data
```
Select columns: Query, Impressions, Avg Position, CTR, Clicks
```
- [ ] Click the three dots (...) menu, top right
- [ ] Select "Export as CSV"
- [ ] Save file as: `PHASE5_KEYWORD_BASELINE_2026-05-24.csv`
- [ ] Location: `/Users/openclaw/Downloads/MYCHEF . MASTER/app/reports/`

**Success:** CSV file created with ≥15 rows (keywords) and 5 columns.

---

## 📊 Afternoon (09:00–10:00): CSV Processing

### Step 5: Open CSV in Editor/Excel
```
File: reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv
```
- [ ] Open file in Excel, Google Sheets, or your text editor
- [ ] Verify you see: Query | Impressions | Avg Position | CTR | Clicks
- [ ] Count rows: _____ keywords exported

### Step 6: Add Category Column
After the "Clicks" column, add **Category** header:

```
Category values:
- /fine-dining
- /catering
- /events
- /locations
- /staffing
- /in-villa-service
- /partner-platform
- /blog
- [other]
```

**Rule:** Match keyword to most relevant pillar page.

Example:
```
Query: "private chef bali"  →  Category: /fine-dining
Query: "wedding catering"   →  Category: /catering
Query: "bali events"        →  Category: /events
```

- [ ] All keywords categorized (one category per keyword)

### Step 7: Add Priority Column
After **Category**, add **Priority** header:

```
Priority values (based on position):
- TIER 1: Position 40–55 (quick wins, <6h effort each)
- TIER 2: Position 55–75 (medium, 6–10h effort each)
- TIER 3: Position 75+ (long-term, 10+h effort each)
```

Example:
```
Query: "private chef bali" | Position: 48  →  Priority: TIER 1
Query: "events bali"       | Position: 63  →  Priority: TIER 2
Query: "catering"          | Position: 82  →  Priority: TIER 3
```

- [ ] All keywords prioritized (TIER 1, 2, or 3)
- [ ] Target: 8–10 TIER 1, 8–12 TIER 2, 4–6 TIER 3

### Step 8: Final Check & Save
```
Final structure:
Query | Impressions | Avg Position | CTR | Clicks | Category | Priority
```

- [ ] All columns present
- [ ] All rows have data (no blanks)
- [ ] TIER 1 count: _____ (target: 8–10)
- [ ] TIER 2 count: _____ (target: 8–12)
- [ ] TIER 3 count: _____ (target: 4–6)
- [ ] Save file with same name
- [ ] File location: `/reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv`

**Success:** CSV complete with all keywords categorized and prioritized.

---

## ✅ Completion Checklist

By 10:00 UTC, confirm:

- [ ] CSV exported from GSC (≥15 keywords)
- [ ] File saved to `/reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv`
- [ ] Category column added (all keywords assigned)
- [ ] Priority column added (all keywords in TIER 1/2/3)
- [ ] No blank cells
- [ ] File saved successfully

**If all checked:** Move to May 26 review & competitor scouting prep.

---

## 🎯 Day 1 Success Criteria

| Criterion | Target | Your Result |
|-----------|--------|------------|
| Keywords exported | ≥15 | _____ |
| Positions visible | 30–100 range | ✅ / ⚠️ |
| Categories assigned | 100% | ✅ / ⚠️ |
| TIER 1 identified | 8–10 | _____ |
| CSV saved | reports/ folder | ✅ / ⚠️ |

**Overall:** ✅ ON TRACK / ⚠️ ISSUES / 🚨 BLOCKED

---

## 🚨 Troubleshooting

### Issue: GSC shows 0 keywords or no data
**Solution:** 
- Verify date range is May 1–24, 2026
- Confirm you're viewing "Performance" tab (not "Coverage")
- Try refreshing the page
- GSC can take 24h to populate; if empty, check May 27 instead

### Issue: CSV won't open or looks garbled
**Solution:**
- Try opening in Google Sheets (more reliable than local Excel)
- Or paste data into a text editor, then copy to Excel
- Ensure file is saved as `.csv` not `.xlsx`

### Issue: Fewer than 8 TIER 1 keywords
**Solution:**
- This is OK (new site typical)
- Proceed with whatever you have
- May 29–31 will identify additional TIER 2/3 opportunities
- No need to delay or redo

### Issue: More than 12 TIER 3 keywords
**Solution:**
- This is normal for a newer site
- Focus Phase 5 on TIER 1 & TIER 2 (8–20 opportunities)
- TIER 3 carries forward to Phase 6 for backlink strategy

---

## 📝 Log Your Progress

**Day 1 Completion Log**

```
START TIME:  08:00 UTC (or your local time)
END TIME:    _____ UTC
TOTAL HOURS: _____ h

Keywords found:     _____ 
TIER 1:            _____ (target: 8–10)
TIER 2:            _____ (target: 8–12)
TIER 3:            _____ (target: 4–6)

File saved:         ✅ YES / ❌ NO
File location:      /reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv

NOTES:
[Any issues or observations]
```

---

## 📞 What's Next?

**May 26 (Sunday):**
- Review May 25 CSV
- Prepare for May 27–28 competitor audit
- Reference: `PHASE5_WEEK1_DAILY_BREAKDOWN.md` Day 3 (May 26 tasks)

**May 27–28 (Mon–Tue):**
- Competitor content audit (12 domains)
- Extract word counts, H2s, links, images, schema types
- Reference: `PHASE5_WEEK1_EXECUTION_CHECKLIST.md`

---

**Print this page. Use Saturday, May 25.**

Last updated: May 17, 2026  
Next review: May 25, 10:00 UTC
