# MyChef Development Blueprint

## Project Context
- **User**: David Dandanell (Danish developer/founder)
- **Business**: MyChef - Luxury chef services in Bali (fine dining, catering, events, in-villa)
- **Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, React Router
- **Deployment**: Vercel
- **Current Phase**: Phase 3 - Mobile Experience & Accessibility Optimization

## Work Methodology

### Core Principles
1. **Rapid Forward Momentum** - Continue to next task instead of perfecting current one
2. **Parallel Execution** - Leverage multiple agents for independent work
3. **Strategic Planning First** - Establish blueprint before implementation
4. **Verified Commits** - All code changes must pass type checking and build before commit
5. **One Commit Per Logical Unit** - Each commit should represent one cohesive change

### Decision Framework
When presented with a task:

```
STOP → CLARIFY INTENT
  ↓
RESEARCH (GitHub + docs)
  ↓
PLAN (architecture/breakdown)
  ↓
IMPLEMENT (minimal, focused)
  ↓
VERIFY (type check, build)
  ↓
COMMIT (clear message)
  ↓
NEXT TASK
```

Do NOT:
- Try to perfect individual features
- Implement without a plan
- Leave uncommitted changes
- Skip type checking or builds
- Work on multiple unrelated things simultaneously

## Phase 3: Mobile Experience & Accessibility (Weeks 2-4)

### Week 2 Status

**Completed:**
- ✓ Mobile form component library (mobile-form.tsx)
  - 44px touch targets (WCAG/iOS standard)
  - 16px font-size on focus (iOS zoom prevention)
  - Full ARIA support (aria-invalid, aria-describedby, role="alert")
  - Error display and help text patterns
  - React.forwardRef composition
- ✓ BookingForm icon refactoring
  - String-based icon references with IconMap
  - Preserves existing styling and WhatsApp integration

**Current Blockers:**
- Form component integration into BookingFormCatering (styling mismatch - dark theme vs light theme)
- Framework convention conflict: formatter converts direct icon imports to string references

**Identified but Not Started:**
- Keyboard navigation testing (Tab/Enter/Escape/Arrow keys across all pages)
- WCAG AA contrast verification (4.5:1 minimum text/background)
- Component splitting: 11 files >300 lines need architectural refactoring

### Large Components Needing Splitting
| File | Lines | Priority |
|------|-------|----------|
| PremiumPage.tsx | 622 | HIGH |
| QuoteFunnel.tsx | 581 | HIGH |
| OrderPanel.tsx | 481 | HIGH |
| Navbar.tsx | 363 | MEDIUM |
| InVillaServicePage.tsx | 337 | MEDIUM |
| Footer.tsx | 319 | MEDIUM |
| SeoHead.tsx | 313 | MEDIUM |
| PricingCalculator.tsx | 312 | MEDIUM |
| LandingPage.tsx | 311 | MEDIUM |
| AreaPage.tsx | 306 | MEDIUM |
| LocationsHubPage.tsx | 303 | MEDIUM |

## Development Workflow

### Branch Strategy
- **main**: Production branch (protected)
- **auto-improve/core-web-vitals-phase4**: Active development branch

### Commit Discipline
```bash
# Format: <type>: <description>
# Types: feat, fix, refactor, docs, test, chore, perf

feat: add accessible mobile form components
fix: resolve TypeScript error in BookingForm
refactor: split PremiumPage into smaller components
docs: update development plan
```

### Verification Before Commit
```bash
# Type check
pnpm tsc --noEmit

# Build verification
pnpm build

# (Optional) Format check
pnpm prettier --check src/

# (Optional) Lint
pnpm eslint src/
```

## Agent Utilization

### When to Use Agents
- **planner**: Design implementation approach for complex features
- **code-reviewer**: After writing any code modifications
- **security-reviewer**: Before committing auth/payments/user data code
- **tdd-guide**: When writing new features or bug fixes (tests first)
- **build-error-resolver**: When build fails
- **performance-optimizer**: When investigating CWV or bundle issues

### Parallel Execution Pattern
Instead of sequential subtasks, spawn agents in parallel:
```
Task: Split PremiumPage
  ├─ Agent 1: Architect extraction strategy
  ├─ Agent 2: Audit component dependencies
  └─ Agent 3: Plan test coverage
```

## TypeScript/React Conventions

### File Organization
```
src/components/
├── <feature>/
│   ├── FeatureName.tsx (main component)
│   ├── FeatureSub.tsx (related components)
│   └── feature.css
├── ui/
│   └── mobile-form.tsx (reusable form controls)
└── shared/
    └── Breadcrumb.tsx (shared across features)
```

### Form Components Pattern
```typescript
// mobile-form.tsx pattern:
// - MobileFormInput: text/number/date inputs
// - MobileFormSelect: dropdowns
// - MobileFormTextarea: multi-line text
// All use React.forwardRef for ref forwarding
// All include: label, error display, help text, required indicator
```

### Import Order
1. React/hooks
2. Third-party packages
3. Local components (relative imports)
4. Types/interfaces

## Accessibility Standards

### WCAG AA Target Metrics
| Metric | Standard | Tool |
|--------|----------|------|
| Touch targets | 44×44px minimum | Manual testing |
| Text contrast | 4.5:1 (normal), 3:1 (large) | Wave, Axe |
| Keyboard nav | Full keyboard support | Tab/Enter/Escape testing |
| Focus indicators | Visible focus ring | Visual inspection |
| Form labels | All inputs labeled | Code review |
| ARIA | Appropriate role/live regions | axe DevTools |

### Mobile Viewport Breakpoints
- 320px (small phone)
- 375px (standard phone)
- 768px (tablet)
- 1024px (landscape)
- 1440px (desktop)

## Next Steps

### Week 2 Remaining (Parallel Tasks)
1. **Keyboard Navigation Audit** - Test all pages with Tab/Enter/Escape/Arrow keys
2. **Contrast Verification** - Audit all text/background combinations for 4.5:1
3. **Start Component Splitting** - Begin with PremiumPage.tsx (highest impact)
4. **BookingFormCatering Integration** - Resolve styling conflicts with mobile form components

### Week 3-4
- Complete component splitting (11 files)
- Full responsive testing across 5 breakpoints
- Performance optimization (images, code splitting, lazy loading)
- Final accessibility audit with axe DevTools

## Communication Protocol

### User Intent Signals
- "Næste. Gå videre til næste opgave. Fortsæt." = Continue to next task (rapid forward momentum)
- "FIX THEFILES SÅ THEY RADY TO GITHUB TO PUSH" = Prepare code for GitHub push
- "KAN DU IKKE KUN BRUGE TIDEN PÅ AT OPDATE PLANEN..." = Focus on planning/blueprint instead of implementation

### Code State Expectations
- All work should be typed and buildable before commitment
- No uncommitted changes should block next task
- Clear, focused commits that explain the "why"
- Regular progress updates via task tracking

## Success Criteria for Phase 3

### Week 2
- [ ] Mobile form components fully integrated (0 TS errors)
- [ ] Keyboard navigation working on all pages
- [ ] 100% of text meets WCAG AA contrast
- [ ] 3+ large components split and tested

### Week 3-4
- [ ] All 11 large components refactored (max 300 lines each)
- [ ] Responsive design verified on 5 breakpoints
- [ ] Core Web Vitals improve (LCP <2.5s, INP <200ms, CLS <0.1)
- [ ] Accessibility audit: 0 critical issues, <5 warnings

## Repository State
```
Branch: auto-improve/core-web-vitals-phase4
Commits ahead of origin: 5
Build status: ✓ Passing
Type check: ✓ Clean
Files ready for push: ✓ Yes
```

Last updated: 2026-05-17 02:34 UTC
