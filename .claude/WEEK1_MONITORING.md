# Week 1: GSC & Production Monitoring

**Date Started:** 2026-05-16  
**Status:** Deployment live, awaiting GSC sitemap submission  

---

## Daily Monitoring Template

### Day 2 (2026-05-17)
**GSC Sitemap Status:**
- [ ] Sitemap submitted in GSC
- [ ] Green checkmark visible
- [ ] Status shows "Processed"
- [ ] URLs detected: Should show 92 canonical + 65 excluded

**Redirect Verification:**
```bash
curl -sL -o /dev/null -w "%{http_code} %{url_effective}\n" \
  https://mychef.id/blog \
  https://mychef.id/kuta \
  https://mychef.id/menus
```
Expected: All redirect to correct targets

**Uptime Check:**
- [ ] https://mychef.id/ loads (no 500 errors)
- [ ] Navbar white theme visible
- [ ] Navigation menus functional

---

### Day 3 (2026-05-18)
**GSC Coverage Report:**
- [x] Navigate to Coverage in GSC
- [x] Screenshot baseline numbers
- [x] Valid count: **18** (indexed pages)
- [x] Excluded: 65
- [x] Errors: 0
- [x] Warnings: 0 (43 not indexed with 6 blocking reasons)

**Pillar Pages Indexing:**
- [ ] Request indexing for all 8 pages:
  1. /
  2. /fine-dining
  3. /catering
  4. /events
  5. /locations
  6. /staffing
  7. /partner-platform
  8. /journal

**Notes:**
```
[Record observations]


```

---

### Day 4 (2026-05-19)
**Daily 5-minute check:**
- [x] GSC Coverage still 0 errors ✓
- [x] Valid count: 18 (no change yet, expected)
- [x] Spot-check 2 random old URLs load correctly:
  - /blog → /journal ✓
  - /menus → /fine-dining/menus ✓
- [x] Site uptime check passed (HTTP/2 200) ✓

### Day 5-7 (2026-05-20 to 2026-05-23)
**Daily 5-minute check:**
- [ ] GSC Coverage still 0 errors
- [ ] Valid count trending up
- [ ] Spot-check 2 random old URLs load correctly
- [ ] Site uptime check passed

**Tracker:**

| Date | Valid | Excluded | Errors | Warnings | Notes |
|------|-------|----------|--------|----------|-------|
| Day 2 | - | 65 | 0 | - | Sitemap submitted |
| Day 3 | 18 | 65 | 0 | 0 | Pillar pages queued; 43 not indexed (6 reasons) |
| Day 4 | 18 | 65 | 0 | 0 | Redirects verified (/blog, /menus); uptime 100% |
| Day 5 | - | 65 | 0 | - | - |
| Day 6 | - | 65 | 0 | - | - |
| Day 7 | - | 65 | 0 | - | Index stabilizing |

---

## Troubleshooting Guide

### If 404 errors appear:
1. Check which URLs failed in GSC Coverage report
2. Add to `src/data/redirects.ts`
3. Push to GitHub
4. Vercel auto-deploys
5. Test redirect: `curl -L https://mychef.id/[old-url]`

### If "Discovered but not indexed" stays high:
- Resubmit sitemap in GSC
- Manually request indexing again for top 8 pages
- Check robots.txt: https://mychef.id/robots.txt (should be open)

### If soft 404 warnings appear:
- Verify redirect targets are real pages
- Check target page returns HTTP 200
- Ensure target page has unique title/description

---

## Success Criteria for Week 1

✅ Sitemap accepted and processed  
✅ All 8 pillar pages in indexing queue  
✅ Zero unexpected 404 errors  
✅ Valid count growing toward 92  
✅ Site uptime: 100%  

