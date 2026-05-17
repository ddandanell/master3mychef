import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

const srcDir = path.join(process.cwd(), 'src')

interface MotionIssue {
  file: string
  line: number
  element: string
  issue: string
  suggestion: string
}

const issues: MotionIssue[] = []

async function auditReducedMotion() {
  const files = await glob(path.join(srcDir, '**/*.{tsx,ts,css}'))

  // Motion keywords to search for
  const motionKeywords = [
    'animate-',
    'transition-',
    'duration-',
    'delay-',
    '@keyframes',
    'transform',
    'opacity',
    'motion',
  ]

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const lines = content.split('\n')

    // Skip CSS files for now, focus on TSX
    if (file.endsWith('.css')) continue

    lines.forEach((line, idx) => {
      // Check for animations without prefers-reduced-motion wrapper
      if (/animate-|transition-|@apply.*animate/.test(line)) {
        // Check if already wrapped with motion-safe or prefers-reduced-motion
        const prevLines = lines.slice(Math.max(0, idx - 3), idx).join('\n')
        const nextLines = lines.slice(idx, Math.min(lines.length, idx + 3)).join('\n')
        const context = prevLines + '\n' + line + '\n' + nextLines

        const hasMotionCheck =
          /motion-safe|prefers-reduced-motion|@media.*prefers-reduced-motion/.test(
            context
          )
        const isInConditionalRender = /\{.*motion.*\}|motion\s*\?|motion\s*&&/.test(context)

        if (!hasMotionCheck && !isInConditionalRender) {
          // Only flag if it's a real animation usage
          if (/className=.*animate-|style=.*animation/.test(line)) {
            issues.push({
              file: path.relative(process.cwd(), file),
              line: idx + 1,
              element: 'animated element',
              issue: 'Animation not wrapped in prefers-reduced-motion check',
              suggestion:
                'Wrap animation in motion-safe or use @media (prefers-reduced-motion: no-preference)',
            })
          }
        }
      }

      // Check for JavaScript motion libraries without motion preference
      if (
        /(gsap|framer-motion|react-spring|aos|animate\.css)/.test(line) &&
        !/motion|reduced/.test(line)
      ) {
        // Check next 5 lines for motion preference handling
        const nextContext = lines.slice(idx, Math.min(lines.length, idx + 5)).join('\n')
        if (!/prefers-reduced-motion|motion|useReducedMotion/.test(nextContext)) {
          issues.push({
            file: path.relative(process.cwd(), file),
            line: idx + 1,
            element: 'motion library',
            issue: 'Motion library imported but no prefers-reduced-motion handling',
            suggestion:
              'Use custom hook (useReducedMotion) to disable animations when prefers-reduced-motion is active',
          })
        }
      }
    })
  }

  console.log('\n╔════════════════════════════════════════════════════════════╗')
  console.log('║         REDUCED MOTION AUDIT RESULTS                    ║')
  console.log('╚════════════════════════════════════════════════════════════╝\n')

  if (issues.length === 0) {
    console.log('✅ No obvious reduced-motion violations detected\n')
    console.log('However, verify the following manually:')
    console.log('  1. Check tailwind.config.ts for motion-safe variants')
    console.log('  2. Verify useReducedMotion hook in hooks/use-reduced-motion.ts')
    console.log('  3. Test with `prefers-reduced-motion: reduce` in browser DevTools')
    console.log('  4. Verify animations stop on /about, /contact, /catering pages')
    process.exit(0)
  }

  console.log(`⚠️  Found ${issues.length} potential motion issues:\n`)
  issues.slice(0, 10).forEach((i) => {
    console.log(`  ${i.file}:${i.line}`)
    console.log(`     Element: ${i.element}`)
    console.log(`     Issue: ${i.issue}`)
    console.log(`     Fix: ${i.suggestion}\n`)
  })

  process.exit(issues.length > 0 ? 1 : 0)
}

auditReducedMotion().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
