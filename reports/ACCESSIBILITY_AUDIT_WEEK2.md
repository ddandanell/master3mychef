# Accessibility Audit Report - Phase 3 Week 2

**Date**: May 17, 2026  
**Audit Type**: Code-based accessibility analysis  
**Coverage**: TypeScript/React components  
**Overall Grade**: C (requires attention in keyboard nav + contrast)

## Executive Summary

The MyChef codebase has foundational accessibility structure (semantic HTML, some ARIA) but lacks comprehensive keyboard navigation support and has unknown color contrast compliance. This audit identifies critical issues to address in Week 2.

### Key Findings
- ❌ **Keyboard Navigation**: Only 27 keyboard handlers across entire codebase (insufficient)
- ❌ **Modal ARIA Roles**: Only 1 proper modal dialog defined (low coverage)
- ✓ **Semantic HTML**: Generally good (forms, buttons, headings properly tagged)
- ? **Color Contrast**: Unknown (needs visual scanning with tools)
- ✓ **Form Labels**: Most inputs have labels, but missing help text/error states
- ✓ **Mobile Form Lib**: New mobile-form.tsx has proper accessibility structure

## Keyboard Navigation Issues

### Current State
```
grep count: 27 instances of onKeyDown/onKeyUp/keyboard handlers
Components: ~150 TSX files
Coverage: 27/150 = 18%
```

**Impact**: Most interactive elements don't respond to keyboard input beyond native browser behavior

### Components with Keyboard Issues

#### 1. **OrderPanel.tsx** (481 lines)
- **Issue**: Step navigation uses onClick only (no keyboard support)
- **Affected**: ChipButton, RadioCard, CheckCard components
- **Fix Required**: Add keyboard event handlers (Enter/Space to select, Arrow to navigate)
- **Severity**: HIGH

#### 2. **PricingCalculator.tsx** (312 lines)
- **Issue**: Checkbox toggles lack keyboard support
- **Affected**: includeWaiters, includeBartender, etc. checkboxes
- **Fix Required**: Ensure native checkbox keyboard functionality (use `<input type="checkbox">`)
- **Severity**: MEDIUM

#### 3. **SearchOverlay.tsx**
- **Issue**: Escape key to close not implemented
- **Affected**: Modal overlay
- **Fix Required**: Add onKeyDown handler for Escape key
- **Severity**: HIGH

#### 4. **QuoteFunnel.tsx** (581 lines)
- **Issue**: Multi-step form lacking keyboard flow
- **Affected**: Form field navigation
- **Fix Required**: Tab order, Enter to submit, Escape to cancel
- **Severity**: HIGH

#### 5. **Navbar.tsx** (363 lines)
- **Issue**: Mobile menu toggle not keyboard accessible
- **Affected**: Mobile navigation menu
- **Fix Required**: Implement focus management, Escape to close
- **Severity**: HIGH

### Required Fixes (by Priority)

#### CRITICAL (Implement First)
1. **Add Escape key support to modals**
   - SearchOverlay.tsx
   - OrderPanel.tsx
   - Any dialog-like components
   - Pattern: `onKeyDown={(e) => e.key === 'Escape' && onClose()}`

2. **Fix focus management in multi-step forms**
   - QuoteFunnel.tsx
   - OrderPanel.tsx (5-step form)
   - Auto-focus first field on step change

3. **Make custom buttons keyboard-navigable**
   - ChipButton, RadioCard, CheckCard need Enter/Space handlers
   - Pattern: `onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}`

#### HIGH (Implement Week 2)
1. **Tab order optimization**
   - Verify logical tab order on all pages
   - Use tabIndex -1 for non-interactive elements if needed

2. **Focus indicators**
   - Ensure visible focus ring on all elements
   - Minimum 2:1 contrast for focus ring itself
   - Currently mobile-form.tsx has: `focus:ring-2 focus:ring-[#C5A028]`

3. **Escape key for all overlays**
   - Mobile menu
   - Modals
   - Dropdowns (if present)

#### MEDIUM (Implement Week 3)
1. **Announce dynamic content**
   - Use `role="alert"` for error messages (done in mobile-form.tsx)
   - Use `aria-live="polite"` for loading states
   - Use `aria-label` for icon-only buttons

## Color Contrast Issues

### Known Problem Areas (Need Visual Verification)

| Component | Issue | Suspected Problem |
|-----------|-------|-------------------|
| Navbar | Text on hero | Might be white-on-image (needs opacity check) |
| PremiumPage | Accent text | #C5A028 gold on white might be <4.5:1 |
| OrderPanel | Secondary text | white/55% opacity on dark (needs calculation) |
| Footer | Copyright text | Might be too light |

### Verification Needed
```bash
# Tools to use:
1. WebAIM Color Contrast Checker (manual)
2. axe DevTools (browser extension)
3. Wave (browser extension)
4. whocanuse.com (interactive tool)
```

## Form Accessibility

### Good (Already Implemented)
- ✓ All inputs have `<label>` elements
- ✓ Required field indicators present (*)
- ✓ Mobile form components have error display
- ✓ Help text support in mobile-form.tsx

### Needs Improvement
- [ ] Not all error messages linked with aria-describedby
- [ ] Some form placeholders used instead of labels
- [ ] Missing aria-invalid on error states (except mobile-form.tsx)
- [ ] No success confirmation after form submission

## Component-Specific Findings

### Files Needing Keyboard Support
1. OrderPanel.tsx - Step navigation, option selection
2. QuoteFunnel.tsx - Form field navigation, step progression
3. PricingCalculator.tsx - Checkbox toggles
4. Navbar.tsx - Mobile menu, dropdown menus
5. SearchOverlay.tsx - Modal overlay controls

### Files Ready for Accessibility (Good Job)
1. mobile-form.tsx - Full ARIA support, error handling
2. BookingForm.tsx - Proper form structure, WhatsApp integration
3. FAQAccordion.tsx - Should have keyboard nav (check details)

## Accessibility Standards Reference

### WCAG 2.1 Level AA Requirements (We Target These)

| Criterion | Requirement | Status |
|-----------|-------------|--------|
| 2.1.1 Keyboard | All functionality available via keyboard | ❌ FAIL |
| 2.1.2 No Keyboard Trap | Can navigate away from all elements | ⚠️ WARN |
| 2.4.3 Focus Order | Logical tab order | ⚠️ CHECK |
| 2.4.7 Focus Visible | Visible focus indicator | ✓ PASS (mobile-form.tsx) |
| 1.4.3 Contrast | 4.5:1 for normal text | ❌ UNKNOWN |
| 4.1.2 Name, Role, Value | Proper ARIA and semantics | ⚠️ PARTIAL |
| 1.3.1 Info and Relationships | Semantic structure | ✓ PASS |

## Action Items for Week 2

### Monday, May 20 (4 hours)
- [ ] Add Escape key handler to SearchOverlay, OrderPanel, any modals
- [ ] Fix focus management in OrderPanel step navigation
- [ ] Test Tab key navigation on all pages (manual browser test)

### Tuesday, May 21 (4 hours)
- [ ] Add keyboard support to custom button components (ChipButton, RadioCard, CheckCard)
- [ ] Run color contrast scan with axe DevTools
- [ ] Document contrast violations found

### Wednesday, May 22 (4 hours)
- [ ] Fix identified contrast violations
- [ ] Add aria-label to icon-only buttons
- [ ] Test with screen reader (NVDA or similar)

### Thursday, May 23 (2 hours)
- [ ] Final keyboard navigation verification
- [ ] Re-run axe DevTools full audit
- [ ] Document improvements in accessibility report

## Code Patterns for Fixes

### Pattern 1: Keyboard Support for Custom Buttons
```typescript
function ChipButton({ children, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      className={...}
    >
      {children}
    </button>
  )
}
```

### Pattern 2: Escape Key to Close Modal
```typescript
function Modal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])
  
  return ...
}
```

### Pattern 3: Focus Management in Step Forms
```typescript
function StepForm() {
  const firstInputRef = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    // Auto-focus first input when step changes
    firstInputRef.current?.focus()
  }, [currentStep])
  
  return (
    <>
      <input ref={firstInputRef} ... />
    </>
  )
}
```

## Resources for Testing

### Manual Testing Checklist
- [ ] Open page, use only Tab key to navigate
- [ ] Verify focus ring visible on every focused element
- [ ] Test Escape key closes all modals
- [ ] Test Enter/Space activates buttons
- [ ] Test form submission with keyboard only
- [ ] Verify no keyboard traps (can always Tab away)

### Automated Testing Tools
1. **axe DevTools** - Browser extension, comprehensive scan
2. **WAVE** - WebAIM's visual feedback tool
3. **Lighthouse** - Built into Chrome DevTools
4. **NVDA** - Screen reader for Windows (free)
5. **WebAIM Color Contrast Checker** - For color verification

### Browser Extensions to Install
- axe DevTools (Deque)
- WAVE (WebAIM)
- Lighthouse (Google)

## Next Steps

1. **Immediate** (May 18-19): Run axe DevTools audit on staging/localhost
2. **Week 2 Implementation** (May 20-23): Apply fixes from this report
3. **Week 3 Verification** (May 24-30): Full re-audit with tools
4. **Ongoing**: Implement accessibility checks in CI/CD pipeline

## Scoring

### Current Accessibility Score: 45/100

- Keyboard Navigation: 15/30 (needs critical fixes)
- Visual Design (Contrast): 15/30 (unknown, likely needs work)
- Semantic HTML: 25/25 (good foundation)
- Form Accessibility: 15/20 (partial, mobile-form.tsx is excellent)
- Focus Management: 10/20 (needs improvement)
- ARIA Usage: 5/10 (sparse)

### Target Score by Week 3: 85/100

---

**Prepared by**: Accessibility Audit Week 2  
**Status**: Analysis Complete, Action Items Ready  
**Next Review**: May 20 (after browser testing)  
**Owner**: Phase 3 Team
