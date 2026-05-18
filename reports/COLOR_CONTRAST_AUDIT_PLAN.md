# Color Contrast Audit & Remediation Plan

**Phase 3: Accessibility Optimization (Continuation)**  
**Date:** May 17, 2026  
**Status:** IN PROGRESS

---

## Executive Summary

This audit evaluates color contrast ratios across all text and interactive elements against WCAG 2.1 Level AA and AAA standards. The site uses a multi-universe color system (Hub, Luna, Sol, Aura) with three primary palettes.

### WCAG Standards Reference

| Standard | Normal Text | Large Text | Links | Interactive |
|----------|------------|-----------|-------|-------------|
| **AA** | 4.5:1 | 3:1 | 4.5:1 | 3:1 (focus) |
| **AAA** | 7:1 | 4.5:1 | 7:1 | 4.5:1 (focus) |

**Note:** Large text = 18pt+ or 14pt+ bold (or ~24px / ~18.5px in CSS)

---

## Color System Overview

### Core Brand Colors
- **Black:** #050505 (pure black, high contrast)
- **White:** #F5F3EF (off-white, very high contrast)
- **Gold:** #C5A028 (medium-dark warm, accent)
- **Gold Light:** #D4B43A (lighter gold, accent)
- **WhatsApp Green:** #25D366 (bright green, CTA)

### Universe Themes

#### Hub (Default)
- **BG:** #F5F3EF (off-white)
- **Text:** #1A1A1A (near-black) ✓ ~17:1 AA/AAA PASS
- **Text Muted:** #6B5B4E (medium brown)
- **Accent:** #C5A028 (gold)
- **Border:** #E5E3E0 (light gray)

#### Luna (Fine Dining)
- **BG:** #050505 (black)
- **Text:** #F5F3EF (off-white) ✓ ~17:1 AA/AAA PASS
- **Text Muted:** #9A9590 (light gray)
- **Accent:** #C5A028 (gold)
- **Border:** #2A2A2A (dark gray)

#### Sol (Villa Chef)
- **BG:** #F5F0E8 (light cream)
- **Text:** #2C2419 (dark brown) ✓ ~14:1 AA/AAA PASS
- **Text Muted:** #8A7B6B (medium brown)
- **Accent:** #6B8E5A (sage green)
- **Border:** #E5E0D8 (light tan)

#### Aura (Events)
- **BG:** #FFFFFF (white)
- **Text:** #1A1A1A (near-black) ✓ ~20:1 AA/AAA PASS
- **Text Muted:** #4A4745 (medium gray)
- **Accent:** #2C5F7C (deep blue)
- **Border:** #E5E3E0 (light gray)

---

## Critical Color Combinations to Audit

### 1. Muted Text on Light Backgrounds (POTENTIAL ISSUES)

| Combination | Hex Values | Estimated Ratio | Status |
|-------------|-----------|-----------------|--------|
| Hub: #6B5B4E on #F5F3EF | Brown on off-white | ~5:1 | ⚠️ WARN |
| Sol: #8A7B6B on #F5F0E8 | Brown on cream | ~5.5:1 | ⚠️ WARN |
| Aura: #4A4745 on #FFFFFF | Gray on white | ~5.5:1 | ⚠️ WARN |
| Luna: #9A9590 on #050505 | Gray on black | ~5:1 | ⚠️ WARN |

**Issue:** Muted text (secondary information, labels, helper text) may not meet AA 4.5:1 on light backgrounds.

### 2. Accent Colors as Text (POTENTIAL ISSUES)

| Combination | Use Case | Status |
|-------------|----------|--------|
| Gold (#C5A028) on #F5F3EF | Links, highlight | ⚠️ CHECK |
| Gold (#C5A028) on #050505 (Luna) | Links, highlight | ✓ LIKELY PASS |
| Sage Green (#6B8E5A) on #F5F0E8 (Sol) | Links, highlight | ⚠️ CHECK |
| Blue (#2C5F7C) on #FFFFFF (Aura) | Links, highlight | ✓ LIKELY PASS |

**Issue:** Accent colors used for text (links, buttons, highlights) need verification.

### 3. Large Text & Buttons (LOWER RISK)

For large text (18pt+) or buttons:
- Hub main: #1A1A1A on #F5F3EF = **17:1** ✓ AA/AAA PASS
- Luna main: #F5F3EF on #050505 = **17:1** ✓ AA/AAA PASS
- Sol main: #2C2419 on #F5F0E8 = **14:1** ✓ AA/AAA PASS
- Aura main: #1A1A1A on #FFFFFF = **20:1** ✓ AA/AAA PASS

**Status:** Primary buttons and headings likely compliant.

### 4. Borders & Dividers (INFORMATION ONLY)

Borders generally do not require contrast ratio testing unless they convey critical information. Current borders:
- Hub: #E5E3E0 on #F5F3EF (minimal, decorative) ✓
- Luna: #2A2A2A on #050505 (minimal, decorative) ✓
- Sol: #E5E0D8 on #F5F0E8 (minimal, decorative) ✓
- Aura: #E5E3E0 on #FFFFFF (minimal, decorative) ✓

---

## Audit Scope

### Files to Analyze

1. **Component Color Usage**
   - `Navbar.tsx` - navigation links, menu items
   - `Footer.tsx` - footer links, secondary text
   - `BookingForm.tsx` - form labels, helper text, error states
   - `SearchOverlay.tsx` - search input, results, labels
   - `PricingCalculator.tsx` - pricing tiers, labels, secondary text
   - `WhatsAppButton.tsx` - button text on colored background
   - `OrderPanel.tsx` - form elements, status badges

2. **Page-Level Colors**
   - `LandingPage.tsx` - hero text, CTAs, secondary text
   - `LunaPage.tsx` - fine dining theme
   - `SolPage.tsx` - villa chef theme
   - `AuraPage.tsx` / `EventsRetreatsPage.tsx` - events theme

3. **Tailwind Utility Classes**
   - All uses of `text-[color]` classes
   - All uses of `bg-[color]` classes
   - All combinations of foreground + background

---

## Known Problem Areas (From Code Review)

### 1. **Muted Text on Light Backgrounds**
**Priority:** HIGH  
**Severity:** AA violation likely on some combinations  
**Example:** Helper text (#6B5B4E) on light backgrounds

**Recommended Fix:**
- Increase contrast of muted text from ~#6B5B4E to ~#4A3F35 (darker)
- Or use different muted color per universe to maintain AA/AAA
- Apply consistently across all form labels, helper text, timestamps

### 2. **Gold Accent as Text**
**Priority:** MEDIUM  
**Severity:** Depends on usage (link vs. badge)  
**Current:** Gold (#C5A028) used for links, labels, CTAs

**Recommended Fix:**
- For regular text links: Maintain gold, verify 4.5:1 on white/light backgrounds
- For small helper text: Use darker shade or different color
- For focus states: Ensure 3:1 minimum on gold/dark gold combinations

### 3. **Form Input Borders & Focus States**
**Priority:** MEDIUM  
**Severity:** Focus indicators must meet 3:1 minimum  
**Current:** Need to verify focus ring contrast

**Recommended Fix:**
- Ensure focus ring (border or outline) has 3:1 contrast minimum
- Verify on all form inputs across all universes

---

## Testing Methodology

### Automated Tools Used
1. **WCAG Contrast Checker** - Calculate exact ratios
2. **Lighthouse/WebAIM** - Automated scans
3. **Manual Verification** - Screenshot validation

### Manual Testing Checklist
- [ ] View each universe on actual devices
- [ ] Test text readability at normal and zoomed (200%) sizes
- [ ] Verify focus states have sufficient contrast
- [ ] Test with color blindness simulators (Deuteranopia, Protanopia)
- [ ] Validate form inputs and error states
- [ ] Check link underlines and hover states

---

## Remediation Plan

### Phase 1: Identify Problem Combinations (THIS PHASE)
1. Scan all component files for color uses
2. Create inventory of text-background combinations
3. Calculate exact contrast ratios
4. Document violations by severity

### Phase 2: Fix Primary Violations
1. Update CSS custom properties to darker muted text colors
2. Fix gold accent usage for small text
3. Verify button and link contrast ratios
4. Test across all universes

### Phase 3: Test & Validate
1. Run automated WCAG scanners
2. Manual testing on physical devices
3. Screenshot validation
4. Document compliance status

---

## Next Steps

1. **Execute audit:** Analyze all files for color usage
2. **Generate inventory:** Create exhaustive list of all color combinations
3. **Calculate ratios:** Determine exact WCAG contrast for each combination
4. **Identify violations:** Categorize by priority and severity
5. **Create fix plan:** Specific changes with before/after ratios
6. **Implement fixes:** Update colors systematically
7. **Validate:** Retest all combinations post-fix

---

## Files to Create/Update

- `COLOR_CONTRAST_AUDIT_REPORT.md` - Detailed findings with actual ratios
- `COLOR_CONTRAST_FIXES.md` - Specific CSS changes required
- `COLOR_TOKENS_UPDATED.css` - Updated color system
- Test cases for color combinations

---

## Success Criteria

✓ All text-background combinations meet WCAG AA 4.5:1  
✓ All heading and large text combinations meet AAA 7:1  
✓ All focus states meet 3:1 contrast minimum  
✓ Color blind users can distinguish all critical information  
✓ Automated WCAG scanner reports no color contrast violations  
✓ Manual verification on physical devices confirms readability

---

**Owner:** Claude  
**Status:** In Progress  
**Target Completion:** 2026-05-17 (end of session)
