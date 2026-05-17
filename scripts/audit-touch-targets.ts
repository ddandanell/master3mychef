import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

/**
 * Audit touch target sizes for WCAG 2.5 compliance (minimum 44x44px)
 * Analyzes className patterns to identify potentially small targets
 */

const pagesDir = path.join(process.cwd(), 'src')

// Tailwind size mappings (in px)
const sizeMap: Record<string, number> = {
  'w-3': 12, 'w-4': 16, 'w-5': 20, 'w-6': 24, 'w-8': 32, 'w-10': 40, 'w-12': 48,
  'h-3': 12, 'h-4': 16, 'h-5': 20, 'h-6': 24, 'h-8': 32, 'h-10': 40, 'h-12': 48,
  'px-1': 4, 'px-2': 8, 'px-3': 12, 'px-4': 16, 'px-5': 20, 'px-6': 24, 'px-8': 32,
  'py-1': 4, 'py-2': 8, 'py-3': 12, 'py-4': 16, 'py-5': 20,
  'text-xs': 12, 'text-sm': 14, 'text-base': 16, 'text-lg': 18, 'text-xl': 20,
}

async function auditTouchTargets() {
  const files = await glob(path.join(pagesDir, '**/*.tsx'))
  const smallTargets: Array<{ file: string; line: number; element: string; estimatedSize: string }> = []

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    const lines = content.split('\n')

    lines.forEach((line, idx) => {
      if (
        !line.includes('<Link') &&
        !line.includes('<button') &&
        !line.includes('<a ')
      ) {
        return
      }

      // Extract className
      const classMatch = line.match(/className="([^"]*)"/);
      if (!classMatch) return

      const classes = classMatch[1].split(' ')
      let estimatedW = 0
      let estimatedH = 0
      let hasExplicitSize = false

      for (const cls of classes) {
        if (sizeMap[cls]) {
          if (cls.startsWith('w-')) {
            estimatedW = Math.max(estimatedW, sizeMap[cls])
            hasExplicitSize = true
          } else if (cls.startsWith('h-')) {
            estimatedH = Math.max(estimatedH, sizeMap[cls])
            hasExplicitSize = true
          }
        }
      }

      // If small and has explicit sizing, flag it
      if ((estimatedW > 0 && estimatedW < 44) || (estimatedH > 0 && estimatedH < 44)) {
        smallTargets.push({
          file: path.relative(process.cwd(), file),
          line: idx + 1,
          element: line.trim().substring(0, 80),
          estimatedSize: `${estimatedW || '?'}x${estimatedH || '?'}`,
        })
      }
    })
  }

  if (smallTargets.length > 0) {
    console.log(`\n⚠️  Found ${smallTargets.length} potentially small touch targets (<44px):\n`)
    smallTargets.slice(0, 10).forEach((t) => {
      console.log(`  ${t.file}:${t.line}`)
      console.log(`    Size: ${t.estimatedSize}px | ${t.element}`)
    })
    if (smallTargets.length > 10) {
      console.log(`\n  ... and ${smallTargets.length - 10} more`)
    }
  } else {
    console.log('✅ No obviously undersized touch targets detected')
  }
}

auditTouchTargets().catch(console.error)
