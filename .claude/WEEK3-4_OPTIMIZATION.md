# Week 3-4 Optimization Implementation (May 25 - Jun 6, 2026)

## Phase 2 Progress

### Week 2 Completed
- ✓ Hero photo protection deployed to production
- ✓ Build-time validation preventing asset removal
- ✓ Week 2 monitoring baseline established
- ⏳ SEO audit in progress (results by May 24)

### Week 3-4 Mission
Implement critical and high-priority optimizations identified from SEO audit, verify improvements, and prepare for ongoing monitoring.

---

## Implementation Framework

### Critical Issues (Fix ASAP - May 25-27)
**Status**: All critical issues either resolved or verified as non-existent in current codebase.

#### CRITICAL #1: Homepage Hero Image ✓
**Status**: COMPLETED (May 16, 2026)
**Solution**: Build-time validation system prevents accidental deletion
- `scripts/validate-critical-assets.ts` runs at prebuild and postbuild
- Critical assets protected in npm hooks
- CSS fallback styling for image failures
- Runtime error handling on hero image

#### CRITICAL #2: SEO Foundation ✓
**Status**: COMPLETED (May 13-17, 2026)
- index.html updated with full meta tags, OG, Twitter Card
- LocalBusiness JSON-LD with NAP and service area
- robots.txt and sitemap.xml deployed
- All 9 routes indexed and discoverable

No blocking critical issues remaining. Proceed to HIGH priority optimization items.

Template for each critical issue:
```
## [Critical Issue Title]
**Impact**: [what it blocks/breaks]
**Effort**: [hours]
**Steps**:
1. [step]
2. [step]
3. [step]
**Verification**: [how to confirm fixed]
**Test Plan**: [manual/automated tests]
**Rollback**: [how to revert if needed]
```

### High Priority (Fix by May 31 - Week 3)
Issues that significantly impact rankings and user experience.

#### HIGH #1: Founder Name Consistency ✓
**Status**: COMPLETED
**Verified**: "Adriano" is canonical across all pages (FineDiningChefsPage, PressPage)
- No remaining "Antonio" references
- Lineage narrative consolidated

#### HIGH #2: Terms & Cancellation Pages ✓
**Status**: COMPLETED
**Verified**: Both pages have comprehensive, professional content
- TermsPage.tsx: 8 sections + FAQs (bookings, deposits, payment, changes, cancellations, pricing, legal, contact)
- CancellationPage.tsx: Client policy tiers + Chef policy + FAQs
- Both have proper schema markup and SEO structure

#### HIGH #3: Create Missing Image Assets (NEW FOCUS)
**Impact**: Open Graph/favicon + social sharing, branding visibility
**Effort**: 2 hours
**Assets to create**:
- `/public/og-image.webp` (1200×630) — social preview (wordmark + hero food)
- `/public/favicon.svg` — vector favicon
- `/public/favicon-32.png` — 32×32 PNG (fallback)
- `/public/apple-touch-icon.png` — 180×180 PNG (iOS bookmark)
**Referenced in**: index.html (lines 16-20)
**Steps**:
1. Use existing assets from `/public/generated/` as source material
2. Design OG image: myCHEF logo + hero food photo, 1200×630
3. Convert to WebP (primary), JPG fallback, optimize for <100KB
4. Generate favicon variants from logo
5. Test in social preview tools (Facebook, Twitter OG checker)
**Verification**: 
- All images exist in public/
- Social share preview shows correct image
- Favicon appears in browser tab

#### HIGH #4: Contact Info Consistency Audit (NEW FOCUS)
**Impact**: Trust signals, conversion consistency
**Effort**: 0.5 hours
**Canonical values**: 
- Phone: +62 822-3756-5997
- Email: indonesia@mychef.id
**Steps**:
1. Audit all pages for phone/email mentions
2. Verify Footer, Contact, Terms, CancellationPage all use canonical
3. Update any outdated phone numbers
4. Verify WhatsApp links use correct number
**Files to audit**: Footer, Contact, PartnersPage, CateringPage, TermsPage, CancellationPage
**Verification**: grep confirms all pages use canonical contact info

#### HIGH #5: Image Optimization Pass (NEW FOCUS)
**Impact**: Performance (LCP, CLS), bundle size reduction
**Effort**: 2.5 hours
**Current state**: 30+ JPGs and PNGs in `/public/generated/`
**Action items**:
1. Convert hero images to AVIF + WebP with JPG fallback
2. Add responsive srcset for mobile/tablet/desktop sizes
3. Audit for unused images; remove if not referenced
4. Target: 40-60% file-size reduction
**Expected improvement**: LCP <2.5s, measurable mobile performance gain
**Tools**: ImageMagick, Google PageSpeed Insights, Lighthouse

#### HIGH #6: SEO Content & Metadata Audit (NEW FOCUS)
**Impact**: Click-through rate, ranking relevance
**Effort**: 1.5 hours
**Action items**:
1. Verify all pages have unique, descriptive title tags (<60 chars)
2. Verify all pages have meta descriptions (<155 chars)
3. Check H1 tags are present and unique per page
4. Audit page links: target <100 total links per page
5. Verify schema markup is valid (JSON-LD)
**Tools**: Lighthouse audit, schema validator, SEO extensions

Timeline (Updated):
- May 25: Continue baseline data collection
- May 26-27: Assets creation (OG, favicon)
- May 27-28: Image optimization + srcset
- May 29: Contact info audit + metadata verification
- May 30: Deploy optimizations + monitor field data
- May 31: Analyze results, prepare Week 4 roadmap

### Medium Priority (Jun 1-4 - Week 4)
Optimization opportunities without immediate ranking impact.

**Pending SEO audit results...**

Week 4 roadmap:
- Jun 1: Review & prioritize medium issues
- Jun 2-3: Implement high-impact medium items
- Jun 4: Verify, test, monitor

---

## Testing & Verification Process

### Pre-Implementation (May 24)
- [ ] Review SEO audit findings
- [ ] Prioritize issues by impact x effort
- [ ] Create detailed implementation specs
- [ ] Identify dependencies between issues
- [ ] Plan testing strategy

### During Implementation
- [ ] Create feature branch for each issue
- [ ] Document changes in commit messages
- [ ] Run local tests before deployment
- [ ] Create PR with testing checklist
- [ ] Get code review from team

### Post-Implementation (Continuous)
- [ ] Deploy to Vercel preview
- [ ] Verify fix with Lighthouse
- [ ] Check GSC for errors
- [ ] Monitor Core Web Vitals
- [ ] Track organic metrics in GA4

---

## Performance Tracking

### Measurement Schedule

**Weekly (May 25, Jun 1)**
- GSC: Impressions, clicks, position changes
- Core Web Vitals: LCP, INP, CLS trends
- GA4: Traffic, engagement, bounce rate
- Ranking: Position changes for target queries

**Bi-weekly (May 31, Jun 6)**
- Content audit: Thin pages, duplicate content
- Technical audit: Crawl errors, mobile usability
- Link profile: New backlinks, lost links
- Competitor analysis: Ranking changes

### Success Metrics by Category

**Technical SEO**
- 0 crawl errors
- 100% mobile usability passing
- 0 security issues
- Sitemap up to date

**Content Quality**
- 80%+ pages with >300 words
- 0 duplicate content issues
- E-E-A-T signals on all major pages
- Reading level > 6th grade

**On-Page SEO**
- Unique, descriptive title tags
- Meta descriptions for all pages
- H1 tag on every page
- <100 total links per page

**Performance**
- LCP < 2.5s (field data)
- INP < 200ms (field data)
- CLS < 0.1 (field data)
- Fully Loaded < 3s

**Organic Search**
- +20% impressions by Jun 6
- +15% clicks by Jun 6
- +2 avg position by Jun 6
- 50+ pages indexed

---

## Risk Mitigation

### Common Risks & Responses

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Breaking change in deployment | Low | High | Test preview → staging → prod |
| Regression in metrics | Medium | Medium | Monitor daily, rollback ready |
| SEO audit finding critical issues | Medium | High | Start immediately if found |
| Content conflicts during updates | Low | Medium | Version control, review before merge |
| Performance degradation | Low | High | Lighthouse check before each deploy |

### Rollback Plan

If optimization causes regression:
1. Revert affected PR or git commit
2. Redeploy to production
3. Monitor metrics for 24 hours
4. Post-mortem: what went wrong?
5. Fix root cause and retry

---

## Team Communication

### Weekly Status (Every Monday)
```
## Week X Optimization Status

**Completed This Week**
- [Issue]: [Impact] ✓
- [Issue]: [Impact] ✓

**In Progress**
- [Issue]: 60% complete
- [Issue]: 30% complete

**Blocking Items**
- [Item]: [Reason]

**Next Week Plan**
- [Issues to tackle]

**Metrics**
- Impressions: [+X%]
- Clicks: [+X%]
- LCP: [Xs]
```

### Stakeholder Updates (May 24, May 31, Jun 6)
Summary of:
- Optimizations completed
- Metrics improvements
- Planned next steps
- Any critical issues discovered

---

## Tools & Resources

### Optimization Tools
- Google Search Console: Indexation, rankings, errors
- Google Analytics 4: Traffic, engagement, conversions
- Lighthouse: Performance scoring
- PageSpeed Insights: Core Web Vitals field data
- Screaming Frog: Technical audit (if needed)

### Monitoring Setup
- GSC API: Daily sync of performance data
- GA4 API: Daily traffic & engagement tracking
- Vercel: Deployment monitoring, error tracking
- Chrome DevTools: Performance profiling
- Mobile testing: Responsive design verification

### Documentation
- SEO audit findings: Prioritized action plan
- Implementation specs: Detailed change requirements
- Test cases: Verification steps for each fix
- Monitoring dashboard: Real-time metrics

---

## Success Criteria for Phase 2

### By End of Week 3 (May 31)
- ✓ All critical issues resolved
- ✓ 50% of high-priority issues implemented
- ✓ No regressions in metrics
- ✓ Core Web Vitals stable or improving

### By End of Week 4 (Jun 6)
- ✓ 100% of critical + high issues addressed
- ✓ 50% of medium-priority issues done
- ✓ +20% organic impressions
- ✓ +15% organic clicks
- ✓ Avg ranking position improved by 2-3 spots
- ✓ Full monitoring dashboard operational

---

## Next Phase Planning (Week 5+)

After Phase 2 optimization:
- Continuous monitoring (automated alerts)
- Quarterly deep-dive SEO audits
- Content calendar for topical authority
- Backlink strategy implementation
- Local SEO expansion (if applicable)

---

## Notes

- SEO audit results will drive priorities (May 24)
- Daily monitoring during implementation (May 25+)
- Quick wins should be deployed first (May 25-27)
- Batch related fixes to minimize deployments
- Each optimization gets its own PR for traceability
- All changes committed with detailed messages

**Phase 2 Goal**: Achieve 30%+ improvement in organic traffic within 6 weeks post-launch
