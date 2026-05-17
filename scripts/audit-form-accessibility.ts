import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

const pagesDir = path.join(process.cwd(), 'src')

interface FormIssue {
  file: string
  line: number
  issue: string
  severity: 'critical' | 'high' | 'medium'
  suggestion: string
}

const issues: FormIssue[] = []

async function auditFormAccessibility() {
  const files = await glob(path.join(pagesDir, '**/*.tsx'))

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8')
    const lines = content.split('\n')

    // Check for input elements without associated labels
    const inputPatterns = [
      { regex: /<input[^>]*?(?<!htmlFor=)(?!.*id=)/, desc: 'input without id' },
      { regex: /<select[^>]*?(?<!htmlFor=)(?!.*id=)/, desc: 'select without id' },
      { regex: /<textarea[^>]*?(?<!htmlFor=)(?!.*id=)/, desc: 'textarea without id' },
      { regex: /<label[^>]*?(?!htmlFor=)/, desc: 'label without htmlFor' },
    ]

    // Check for missing focus styles on form inputs
    const focusStylePattern = /(<input|<select|<textarea)[^>]*(?!focus:ring)(?!focus:outline-none)/g

    lines.forEach((line, idx) => {
      // Check for inputs without proper focus ring + outline-none combo
      if (/(<input|<select|<textarea)/.test(line)) {
        const hasOutlineNone = /focus:outline-none/.test(line)
        const hasFocusRing = /focus:ring/.test(line)

        if (!hasOutlineNone && hasFocusRing) {
          issues.push({
            file: path.relative(process.cwd(), file),
            line: idx + 1,
            issue: 'Form input has focus ring but missing focus:outline-none',
            severity: 'medium',
            suggestion: 'Add focus:outline-none to prevent default outline conflict'
          })
        }
      }

      // Check for inputs without rounded when using focus:ring
      if (/(<input|<select|<textarea)/.test(line)) {
        if (/focus:ring/.test(line) && !/\brounded/.test(line)) {
          issues.push({
            file: path.relative(process.cwd(), file),
            line: idx + 1,
            issue: 'Form input with focus:ring missing rounded border radius',
            severity: 'low',
            suggestion: 'Add rounded class for proper focus ring appearance'
          })
        }
      }

      // Check for aria-label or similar on form controls
      if (/(<input|<select|<textarea|<button)/.test(line)) {
        const hasLabel = /htmlFor|aria-label|aria-labelledby/.test(line)
        const prevLine = idx > 0 ? lines[idx - 1] : ''
        const isInForm = /<form|<Field|<label/.test(prevLine)

        if (!hasLabel && !isInForm && /<input\s|<select\s|<textarea\s/.test(line)) {
          issues.push({
            file: path.relative(process.cwd(), file),
            line: idx + 1,
            issue: 'Form input missing label association (htmlFor/aria-label)',
            severity: 'critical',
            suggestion: 'Add id to input and htmlFor to associated label, or use aria-label'
          })
        }
      }

      // Check for placeholder-only labels (anti-pattern)
      if (/placeholder="[^"]*"/.test(line) && !/label|aria-label/.test(line)) {
        if (/(<input|<select|<textarea)/.test(line)) {
          issues.push({
            file: path.relative(process.cwd(), file),
            line: idx + 1,
            issue: 'Form input relies on placeholder only (no visible label)',
            severity: 'high',
            suggestion: 'Add explicit label element or aria-label for accessibility'
          })
        }
      }
    })
  }

  // Categorize issues
  const critical = issues.filter(i => i.severity === 'critical')
  const high = issues.filter(i => i.severity === 'high')
  const medium = issues.filter(i => i.severity === 'medium')
  const low = issues.filter(i => i.severity === 'low')

  console.log('\n╔════════════════════════════════════════════════════════════╗')
  console.log('║          FORM ACCESSIBILITY AUDIT RESULTS                ║')
  console.log('╚════════════════════════════════════════════════════════════╝\n')

  if (critical.length > 0) {
    console.log(`🔴 CRITICAL (${critical.length})`)
    critical.slice(0, 5).forEach(i => {
      console.log(`  ${i.file}:${i.line}`)
      console.log(`     Issue: ${i.issue}`)
      console.log(`     Fix: ${i.suggestion}\n`)
    })
  }

  if (high.length > 0) {
    console.log(`🟠 HIGH (${high.length})`)
    high.slice(0, 3).forEach(i => {
      console.log(`  ${i.file}:${i.line}`)
      console.log(`     Issue: ${i.issue}`)
      console.log(`     Fix: ${i.suggestion}\n`)
    })
  }

  if (medium.length > 0) {
    console.log(`🟡 MEDIUM (${medium.length})`)
    medium.slice(0, 3).forEach(i => {
      console.log(`  ${i.file}:${i.line}`)
      console.log(`     Issue: ${i.issue}\n`)
    })
  }

  console.log(`ℹ️  LOW: ${low.length} issues\n`)

  console.log(`Summary: ${critical.length} critical, ${high.length} high, ${medium.length} medium, ${low.length} low\n`)

  // Return exit code based on critical issues
  process.exit(critical.length > 0 ? 1 : 0)
}

auditFormAccessibility().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
