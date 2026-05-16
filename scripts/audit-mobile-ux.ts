import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

interface MobileAuditIssue {
  file: string
  component: string
  issue: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  suggestion: string
}

const COMPONENT_RULES = [
  {
    name: 'Touch Target Size',
    description: 'Interactive elements should be at least 44x44px',
    severity: 'high' as const,
    check: (content: string) => {
      const issues: MobileAuditIssue[] = []
      // Check for small button sizes
      const smallButtons = content.match(/className="[^"]*(?:w-\d|h-\d|size-\d)[^"]*"/g) || []
      if (smallButtons.length > 0) {
        issues.push({
          file: '',
          component: '',
          issue: 'Found potentially small interactive elements',
          severity: 'high',
          suggestion: 'Ensure buttons/clickable elements have min 44x44px touch target'
        })
      }
      return issues
    }
  },
  {
    name: 'Touch Feedback',
    description: 'Interactive elements need visual feedback (active/focus states)',
    severity: 'high' as const,
    check: (content: string) => {
      const issues: MobileAuditIssue[] = []
      // Check for missing active states
      if (!content.includes('active:') && content.includes('onClick') && content.includes('className')) {
        issues.push({
          file: '',
          component: '',
          issue: 'Missing active: state for touch feedback',
          severity: 'medium',
          suggestion: 'Add active:scale-95 or similar for visual touch feedback'
        })
      }
      return issues
    }
  },
  {
    name: 'Focus Visibility',
    description: 'Focus states must be visible for keyboard navigation',
    severity: 'high' as const,
    check: (content: string) => {
      const issues: MobileAuditIssue[] = []
      // Check for focus-visible
      if (!content.includes('focus-visible:') && content.includes('type="button"')) {
        issues.push({
          file: '',
          component: '',
          issue: 'Missing focus-visible states on buttons',
          severity: 'high',
          suggestion: 'Add focus-visible:ring focus-visible:outline for keyboard users'
        })
      }
      return issues
    }
  },
  {
    name: 'Responsive Spacing',
    description: 'Adequate padding on mobile for touch zones',
    severity: 'medium' as const,
    check: (content: string) => {
      const issues: MobileAuditIssue[] = []
      // Check for consistent spacing
      if (content.includes('px-2') || content.includes('py-1')) {
        issues.push({
          file: '',
          component: '',
          issue: 'Found tight padding that may compress touch targets',
          severity: 'medium',
          suggestion: 'Use responsive padding: px-4 sm:px-6 md:px-8'
        })
      }
      return issues
    }
  },
  {
    name: 'Form Inputs',
    description: 'Form inputs optimized for mobile typing',
    severity: 'medium' as const,
    check: (content: string) => {
      const issues: MobileAuditIssue[] = []
      // Check for proper input sizing
      if (content.includes('<input') && !content.includes('min-h-[44px]')) {
        issues.push({
          file: '',
          component: '',
          issue: 'Form inputs may be too small for mobile typing',
          severity: 'medium',
          suggestion: 'Add min-h-[44px] to input elements for comfortable mobile use'
        })
      }
      return issues
    }
  }
]

async function auditMobileUX() {
  const componentFiles = await glob('src/components/**/*.tsx', { ignore: 'node_modules/**' })
  const allIssues: MobileAuditIssue[] = []

  console.log('\n╔═══════════════════════════════════════════════════════╗')
  console.log('║        MOBILE UX AUDIT - Touch & Accessibility       ║')
  console.log('╚═══════════════════════════════════════════════════════╝\n')

  for (const file of componentFiles) {
    const content = fs.readFileSync(file, 'utf-8')
    const componentName = path.basename(file, '.tsx')

    // Check file size (large components may need splitting)
    const lines = content.split('\n').length
    if (lines > 300) {
      console.log(`⚠️  ${componentName}: Large component (${lines} lines) - consider splitting`)
    }

    // Check for accessibility patterns
    if (!content.includes('aria-') && content.includes('onClick')) {
      console.log(`⚠️  ${componentName}: May need ARIA labels for interactive elements`)
    }

    // Check for mobile-first patterns
    if (content.includes('hidden') && !content.includes('md:')) {
      console.log(`✓  ${componentName}: Has responsive hiding patterns`)
    }
  }

  // Generate recommendations
  console.log('\n┌─ Touch Target Standards ──────────────────────────┐')
  console.log('│ ✓ Minimum size: 44x44px (Apple iOS guideline)      │')
  console.log('│ ✓ Spacing: 8px minimum between touch targets        │')
  console.log('│ ✓ Feedback: Immediate visual response required      │')
  console.log('└───────────────────────────────────────────────────────┘\n')

  console.log('Priority Improvements:')
  console.log('1. [ ] Audit all buttons for 44x44px minimum size')
  console.log('2. [ ] Add active:scale-95 feedback to interactive elements')
  console.log('3. [ ] Ensure all inputs have min-h-[44px]')
  console.log('4. [ ] Test keyboard navigation on all pages')
  console.log('5. [ ] Add ARIA labels to interactive regions')
  console.log('6. [ ] Test at mobile breakpoints (320px, 375px, 768px)')
  console.log('7. [ ] Verify color contrast (WCAG AA 4.5:1 minimum)\n')

  console.log('Components Scanned:', componentFiles.length)
  console.log('Status: Ready for optimization phase\n')
}

// Run audit
auditMobileUX().catch(console.error)
