# Phase 3 Week 2: Mobile Experience & Accessibility - Execution Plan

**Week**: May 17-23, 2026  
**Status**: In Progress  
**Goal**: Establish accessible mobile patterns and begin structural refactoring

## Daily Breakdown

### Friday, May 17 (Today)

**Morning - Planning & Setup (DONE)**
- ✓ Create mobile form component library (mobile-form.tsx)
  - Exports: MobileFormInput, MobileFormSelect, MobileFormTextarea
  - Features: 44px touch targets, 16px focus font, ARIA attributes
  - Status: Complete and committed
- ✓ Refactor BookingForm icon handling
  - Changed direct icon imports to string references + IconMap
  - Status: Committed

**Current Decision Point**
- User feedback: Focus on **planning/blueprint** rather than piecemeal implementation
- Action: Create DEVELOPMENT_BLUEPRINT.md ✓ (done)
- Next: Establish weekly execution cadence

### Saturday-Sunday, May 18-19

**Parallel Track 1: Accessibility Audit**
1. Keyboard navigation testing
   - Navigate all pages with Tab key
   - Test focus indicators visibility
   - Test Enter/Escape/Arrow key handling
   - Document failures in audit report

2. Color contrast verification
   - Scan all text/background combinations
   - Flag anything below 4.5:1 contrast ratio
   - Identify design token adjustments needed

**Parallel Track 2: Component Splitting Analysis**
1. Map PremiumPage.tsx structure
   - Identify logical component boundaries
   - Extract hero, content sections, profiles, etc.
   - Design new file structure
   
2. Dependency analysis for other large files
   - OrderPanel.tsx: Check if dark theme styling is modular
   - Navbar.tsx: Identify nav sections that could be separate
   - QuoteFunnel.tsx: Map form flow and sections

### Monday-Wednesday, May 20-22

**Implementation Track**
1. Resolve BookingFormCatering styling conflict
   - Either: Create light-themed form components variant
   - Or: Import mobile-form but override styles
   - Test on mobile viewport (375px)

2. Begin PremiumPage refactoring
   - Extract Hero section
   - Extract Content section
   - Extract FAQAccordion integration
   - Maintain all original props and behavior

3. Keyboard navigation fixes
   - Fix any focus trap issues
   - Add skip-to-content link if missing
   - Verify modal focus management

### Thursday, May 23

**Verification & Preparation**
1. Type check all changes
   ```bash
   pnpm tsc --noEmit
   ```

2. Build verification
   ```bash
   pnpm build
   ```

3. Prepare for GitHub push
   - Clean up any debug code
   - Final commit message
   - Verify all commits follow conventional format

4. Document learnings
   - Update DEVELOPMENT_BLUEPRINT.md with findings
   - Note any architectural patterns discovered

## Success Metrics

### Keyboard Navigation (100% Pass)
- [ ] Tab key navigates through all interactive elements
- [ ] Focus ring is visible (4px+, 2:1 contrast)
- [ ] No keyboard traps
- [ ] Modal dialogs trap focus properly
- [ ] Escape key closes modals

### Color Contrast (100% Pass)
- [ ] All body text ≥ 4.5:1 contrast
- [ ] All large text (18pt+) ≥ 3:1 contrast
- [ ] Icons with meaning have sufficient contrast
- [ ] Disabled states discernible

### Component Splitting (3+ Complete)
- [ ] PremiumPage split into 3-4 files, each ≤300 lines
- [ ] No TypeScript errors after split
- [ ] All props and functionality preserved
- [ ] Test coverage maintained or improved

## Risk Mitigation

### Known Issues
1. **Form Component Styling**: Mobile-form.tsx uses CSS variables (--u-*), but BookingFormCatering uses fixed colors
   - Mitigation: Create wrapper or style override
   - Decision point: Tuesday May 20

2. **Large Components**: PremiumPage has many inter-dependent sections
   - Mitigation: Extract one section at a time, test after each
   - Decision point: Monday May 19

3. **Icon Import Conflicts**: Framework keeps converting icons to string refs
   - Mitigation: Adopt string ref pattern rather than fight it
   - Decision point: Use throughout Phase 3

### Fallback Options
- If accessibility audit reveals 100+ issues: Prioritize top 20 (color contrast + keyboard)
- If component splitting takes longer: Extend to Week 3
- If BookingFormCatering conflict unresolvable: Keep original styling, document technical debt

## Output Artifacts

### By End of Week
1. **Accessibility Audit Report** (`reports/accessibility-audit-week2.md`)
   - Keyboard navigation findings
   - Contrast ratio scan results
   - Required fixes prioritized

2. **Component Refactoring Guide** (`docs/component-splitting-strategy.md`)
   - PremiumPage extraction plan
   - Other files' splitting recommendations
   - Dependency graph visualization

3. **Updated Blueprint** (`DEVELOPMENT_BLUEPRINT.md`)
   - Learnings and adjustments
   - Revised timeline if needed
   - Architectural patterns for future work

4. **Code Commits** (minimum 3-5)
   - Mobile form integration complete
   - Accessibility fixes applied
   - At least 1 large component split
   - All pass: `pnpm tsc --noEmit && pnpm build`

## Decision Log

### May 17, 02:34 UTC
**Decision**: Create development blueprint before continued implementation  
**Rationale**: User feedback emphasized planning > piecemeal work  
**Owner**: David (self-directed based on user feedback)  
**Status**: COMPLETED ✓

### Next Decision (May 18)
**Question**: Should BookingFormCatering.tsx be integrated with mobile-form.tsx or left as-is?  
**Options**:
1. Create light-themed variant of mobile-form components
2. Create style override system within BookingFormCatering
3. Skip BookingFormCatering, focus on high-impact accessibility work first

**Timeline**: Decide by end of Saturday May 18  
**Owner**: David + planner agent consultation if needed

## Time Budget
- Accessibility audit: 4-6 hours
- Component splitting (PremiumPage): 6-8 hours
- Form integration: 2-3 hours
- Testing & verification: 4-5 hours
- Documentation: 2 hours
- **Total**: ~20-24 hours (fits 1-week schedule)

## Next Phase Handoff (Week 3)

If on track by May 23, Week 3 will focus on:
1. Complete splitting of remaining 10 large components
2. Full responsive testing (5 breakpoints)
3. Performance optimization (CWV targets)
4. Final accessibility audit + axe DevTools scan

If behind schedule:
- Extend component splitting to Week 3
- Defer responsive testing to Week 4
- Maintain accessibility focus as priority 1

---
**Last Updated**: 2026-05-17 02:35 UTC  
**Next Review**: Sunday May 18 evening  
**Owner**: David Dandanell  
**Status**: Plan Created, Ready for Execution
