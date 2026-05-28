# Phase 5: Pre-Execution Week (May 17–24, 2026)

**Final Verification & Readiness Before May 25 Launch**

---

## 📋 Pre-Execution Checklist (May 17–24)

Complete these 5 tasks before May 25, 0800 UTC. Expect ~3–4 hours total.

### Day 1–2: Friday–Saturday, May 17–18

#### Task 1: Document Audit (1 hour)
Verify all Phase 5 documents exist in correct locations:

```
✓ /Users/openclaw/Downloads/MYCHEF . MASTER/app/.claude/
  ├─ PHASE5_MASTER_EXECUTION_MANUAL.md
  ├─ PHASE5_MAY25_LAUNCH_READINESS.md
  ├─ PHASE5_WEEK2_LAUNCH_READINESS.md
  ├─ PHASE5_WEEK1_DAILY_BREAKDOWN.md
  ├─ PHASE5_WEEK1_EXECUTION_CHECKLIST.md
  ├─ PHASE5_COMPETITOR_SCOUTING_2026-05-17.md
  ├─ PHASE5_KEYWORD_BASELINE_2026-05-17_TEMPLATE.csv
  └─ PHASE5_COMPETITOR_AUDIT_2026-05-28_TEMPLATE.csv

✓ /Users/openclaw/Downloads/MYCHEF . MASTER/app/reports/
  ├─ myCHEF_WEEKLY_MONITORING_REPORT_2026-05-19.md
  └─ PHASE5_COMPETITOR_SCOUTING_2026-05-17.md
```

**Action:** Open each file, confirm readable and complete. No edits needed. Just verify presence.

**Success:** All 8 + 2 = 10 documents found and accessible.

---

### Day 3–4: Sunday–Monday, May 19–20

#### Task 2: GSC Access Verification (0.5 hour)
Confirm Google Search Console access for mychef.id property.

**Steps:**
1. Navigate to https://search.google.com/search-console/performance?resource_id=sc-domain%3Amychef.id
2. Verify you can see the dashboard
3. Spot-check: Set date range to May 1–24, 2026
4. Verify data loads (should show ~18 indexed pages, 0 crawl errors)
5. Note the URL for May 25 use

**Success:** GSC dashboard opens, May 1–24 data visible.

---

#### Task 3: Competitor Domain Check (1 hour)
Verify all 12 competitor domains are still accessible (as a spot check).

**Quick probe (2 minutes per domain):**
- Open domain in browser
- Confirm main page loads
- Spot-check for any obvious site changes
- No detailed analysis needed—just confirm they're still live

**Domains to check:**
- /fine-dining: gisellebali.com, finns.com, tripadvisor.co.id
- /catering: balicatering.com, villa-catering-bali.online, avoyabali.com
- /events: events.balicateringcompany.com, bali-catering.com, bridestory.com
- /locations: kubuvillaseminyak.com, villaseminyak.com, ausindobalivillas.com

**Success:** All 12 domains load without 404 or major changes.

**Note:** If any domain is down or redirects, update `PHASE5_COMPETITOR_SCOUTING_2026-05-17.md` with the note and pick a replacement from Google Search results (same keyword target).

---

### Day 5–6: Tuesday–Wednesday, May 21–22

#### Task 4: Production Health Spot-Check (0.5 hour)

1. **Build verification:**
   ```bash
   cd /Users/openclaw/Downloads/MYCHEF\ .\ MASTER/app
   pnpm build
   ```
   - Should complete with zero errors
   - Zero TypeScript errors expected

2. **Dev server quick start:**
   ```bash
   pnpm dev
   ```
   - Should start on http://localhost:3000 (or configured port)
   - Homepage should load in <3s
   - Navigation menu responsive

3. **No changes needed.** Just verify production is stable.

**Success:** Build passes, dev server starts, homepage responsive.

---

#### Task 5: Template Format Check (1 hour)

1. **GSC Baseline Template** (`PHASE5_KEYWORD_BASELINE_2026-05-17_TEMPLATE.csv`)
   - Open in CSV editor or Excel
   - Verify columns: Query, Impressions, Avg Position, CTR, Clicks, Category, Priority
   - Should be empty (just headers)
   - **Success:** Headers present, ready to populate May 25

2. **Competitor Audit Template** (`PHASE5_COMPETITOR_AUDIT_2026-05-28_TEMPLATE.csv`)
   - Open in CSV editor
   - Verify columns: Domain, Page, Word Count, H1, H2s, H3s, Internal Links, Images, Schema Types, Meta Description, Update Frequency, Content Gap, H2 Gap, Link Gap, Image Gap
   - Should be empty
   - **Success:** Headers present, ready to populate May 27–28

3. **No edits needed.** Templates should be clean and ready for May 25 population.

---

### Day 7: Thursday, May 23

#### Task 6: Final Readiness Checklist (0.5 hour)

Review this checklist May 23 afternoon:

- [ ] All 10 documents present and accessible
- [ ] GSC access confirmed for mychef.id
- [ ] All 12 competitor domains accessible (none replaced)
- [ ] Production build passes (zero errors)
- [ ] Dev server starts and loads <3s
- [ ] Templates are clean and ready (headers only)
- [ ] No TypeScript errors in current codebase
- [ ] This file exists and is complete

**If all boxes checked:** You are GO for May 25 launch.

**If any box unchecked:** Resolve the issue, note it in this file, and confirm before proceeding.

---

## 🚀 May 25 Launch Brief (Copy This to Your System Clipboard)

**Date:** Saturday, May 25, 2026  
**Time:** 0800 UTC  
**Duration:** 2 hours  
**Task:** GSC Baseline Capture

**File to Open:** `/Users/openclaw/Downloads/MYCHEF . MASTER/app/.claude/PHASE5_MAY25_LAUNCH_READINESS.md`

**Steps (in order):**
1. Morning (1h): Open GSC → Set date range May 1–24, 2026 → Sort by Avg Position descending → Filter ≥5 impressions
2. Afternoon (1h): Export Query, Impressions, Avg Position, CTR, Clicks → Save to `reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv` → Add Category & Priority columns → Identify Tier 1 keywords (position 40–55)

**Success Criteria:**
- [ ] ≥15 keywords exported
- [ ] All positions filled (no blanks)
- [ ] Impressions ≥5 for all rows
- [ ] Position range 30–100

**Deliverable:** `reports/PHASE5_KEYWORD_BASELINE_2026-05-24.csv`

---

## 📞 If Anything Breaks

**Before May 25:**
- GSC access fails → Contact Google Support, or use Search Analytics via Looker Studio as fallback
- Competitor domain down → Find replacement in Google Search results for same keyword
- Build breaks → Run `pnpm install` + `pnpm build` again; if still broken, check TypeScript errors with `pnpm tsc --noEmit`
- Dev server won't start → Check port conflicts; try `pnpm dev -- -p 3001`

**All issues should be resolved by May 23 EOD.**

---

## ✅ Summary

| Task | Effort | Owner | Deadline |
|------|--------|-------|----------|
| 1. Document Audit | 1h | You | May 18 |
| 2. GSC Access | 0.5h | You | May 20 |
| 3. Competitor Check | 1h | You | May 20 |
| 4. Production Health | 0.5h | You | May 22 |
| 5. Template Check | 1h | You | May 22 |
| 6. Final Readiness | 0.5h | You | May 23 |
| **TOTAL** | **~4.5h** | — | **May 23 EOD** |

**May 25, 0800 UTC: Begin Week 1 Execution**

---

**Status:** ✅ PRE-EXECUTION READY  
**Created:** May 17, 2026  
**Next Checkpoint:** May 23, EOD (Final readiness sign-off)  
**Launch:** May 25, 0800 UTC
