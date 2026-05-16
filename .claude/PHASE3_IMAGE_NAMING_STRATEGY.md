# Phase 3: Image Naming Convention Strategy
**Status**: Defined (Ready for targeted execution)  
**Scope**: Standardize 90 non-standard image filenames  
**Risk Level**: Medium (90+ file operations + reference updates)  
**Timeline**: 2-3 hours (phased approach)

---

## Naming Convention
**Format**: `[category]-[description]-[size].[format]`

**Categories**: events, catering, finedining, staffing, about, experience, ui, misc

**Sizes**: sm, md, lg, xl (based on image dimensions)

**Formats**: webp, jpg (PNG automatically converted to WebP)

---

## Phase 3a: High-Priority Renames (30-45 min)
Focus on images with 2+ code references (highest impact)

### Tier 1: Images with 4+ references
- `staffing-kitchen.webp` → `staffing-staffing-kitchen-lg.webp` (6 refs)
- `staffing-table.webp` → `staffing-staffing-table-lg.webp` (4 refs)
- `luna-plating.webp` → `misc-luna-plating-md.webp` (6 refs)

### Tier 2: Images with 2-3 references
- `wedding-reception.webp` → `events-wedding-reception-lg.webp` (2 refs)
- `event-wedding.webp` → `events-event-wedding-xl.webp` (3 refs)
- `catering-hero.webp` → `catering-catering-hero-lg.webp` (3 refs)
- `hero-buffet-catering.webp` → `catering-hero-buffet-catering-lg.webp` (3 refs)

**Action**: Execute renames + reference updates for these 8 images first

---

## Phase 3b: Medium-Priority Renames (45-60 min)
Images with 1 reference (straightforward to update)

- `hero-events.webp` → `events-hero-events-xl.webp` (1 ref)
- `team-photo.webp` → `about-team-photo-lg.webp` (1 ref)
- `testimonials-bg.webp` → `ui-testimonials-bg-lg.webp` (1 ref)
- `sol-bbq.webp` → `finedining-sol-bbq-md.webp` (3 refs)
- `sol-chef-portrait.webp` → `finedining-sol-chef-portrait-sm.webp` (1 ref)
- `sol-produce.webp` → `finedining-sol-produce-md.webp` (1 ref)

**Action**: Execute batch renames + reference updates for these ~30 images

---

## Phase 3c: Low-Reference Renames (30-45 min)
Images with 0 references (safe to rename, no code updates needed)

- `trust-hosts.webp` → `misc-trust-hosts-lg.webp` (0 refs)
- `sommelier-hero.webp` → `misc-sommelier-hero-lg.webp` (0 refs) - DELETE
- `avatar-ai.webp` → `misc-avatar-ai-md.webp` (0 refs)
- `guide-corporate.webp` → `misc-guide-corporate-lg.webp` (0 refs)
- `guide-staffing.webp` → `staffing-guide-staffing-lg.webp` (0 refs)
- `home-hero-ivory-villa.webp` → `experience-home-hero-ivory-villa-lg.webp` (0 refs)
- `hero-how-it-works.webp` → `misc-hero-how-it-works-lg.webp` (0 refs)
- `jakarta-skyline.webp` → `misc-jakarta-skyline-lg.webp` (0 refs)
- `hub-events.webp` → `events-hub-events-md.webp` (0 refs)

**Action**: Rename these files (low risk, no reference updates needed)

---

## Reference Update Strategy

### Step 1: Identify all reference locations
```bash
grep -r "staffing-kitchen" src/ --include="*.tsx" --include="*.ts"
```

### Step 2: Update references for each image
Pattern: `/public/generated/old-name.webp` → `/public/generated/new-name.webp`

Common reference patterns:
- `import ... from '/public/generated/image-name.webp'`
- `src="/public/generated/image-name.webp"`
- `backgroundImage: `url('/public/generated/image-name.webp')`
- Dynamic image references in data files

### Step 3: Verify no broken references
```bash
npm run build
```

---

## Execution Checklist

### Before Starting
- [ ] Backup current image audit: `cp reports/image-audit.json reports/image-audit.backup.json`
- [ ] Create git branch or ensure current changes are committed
- [ ] Verify no pending unstaged changes

### Phase 3a Execution
- [ ] Rename 8 high-priority images with 2+ refs
- [ ] Update references in 4-8 TypeScript files
- [ ] Verify build succeeds: `npm run build`
- [ ] Test: `npm run dev` - check pages load correctly

### Phase 3b Execution
- [ ] Rename 30 medium-priority images with 1 ref each
- [ ] Update references systematically
- [ ] Verify build: `npm run build`

### Phase 3c Execution
- [ ] Rename 40+ low-reference images (safe, no code updates)
- [ ] Verify filesystem cleanup
- [ ] Build test: `npm run build`

### Post-Execution
- [ ] Run new image audit: `npm run audit:images`
- [ ] Verify naming convention: 100% of images should follow pattern
- [ ] Generate before/after report
- [ ] Commit: `feat: standardize image naming convention to [category]-[description]-[size]`

---

## Risk Mitigation

### Risks
1. **Broken references**: 90+ images with potential for typos or missed references
2. **Build failure**: TypeScript references need exact match
3. **Image display**: Wrong path references will cause broken images
4. **Performance**: Large number of file operations could be slow

### Mitigation
1. Use grep to verify all references before deleting old files
2. Build test after each phase to catch errors early
3. Keep old images until new ones verified working
4. Phase approach allows incremental rollback if needed

---

## Timeline Estimate
- Phase 3a (High-priority): 45 min (8 images + refs)
- Phase 3b (Medium-priority): 60 min (30 images + refs)
- Phase 3c (Low-priority): 30 min (40+ images, no refs)
- Build testing & verification: 30 min
- **Total**: 2.5-3 hours

---

## Success Criteria
- [ ] All 90 non-standard images renamed to convention
- [ ] 100% of code references updated
- [ ] Build succeeds with zero errors
- [ ] All pages load with images displaying correctly
- [ ] Image audit shows 0 non-standard names
- [ ] Git commit with detailed message

---

## Next Steps After Phase 3
1. Phase 4: Delete 2 unused images (5 min) - `trust-hosts.webp`, `sommelier-hero.webp`
2. Final verification: Run Lighthouse, verify Core Web Vitals improvement
3. Commit and push to Vercel
4. Transition to Weekly Monitoring cycle (Sunday May 19)

---

**Status**: Strategy defined, ready for phased execution  
**Owner**: Claude (Image Standardization Agent)  
**Last Updated**: 17 May 2026
