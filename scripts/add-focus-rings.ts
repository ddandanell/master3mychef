import fs from 'fs'
import path from 'path'
import { glob } from 'glob'

/**
 * Add WCAG AA keyboard accessibility focus rings to interactive elements
 * Handles Link, button, and anchor tags across all pages
 */

const pagesDir = path.join(process.cwd(), 'src/pages')

async function addFocusRings() {
  const files = await glob(path.join(pagesDir, '*.tsx'))
  let totalUpdated = 0

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8')
    const originalContent = content
    let updated = false

    // Skip files that already have comprehensive focus coverage
    const focusCount = (content.match(/focus:/g) || []).length
    const interactiveCount =
      (content.match(/<Link\s|<button\s|<a\s/g) || []).length +
      (content.match(/className="[^"]*Link/g) || []).length

    // If focus count >= 80% of interactive elements, skip
    if (focusCount > 0 && focusCount >= interactiveCount * 0.8) {
      continue
    }

    // 1. Add focus to Link components without it
    content = content.replace(
      /(<Link[^>]*?)className="([^"]*?)"([^>]*?>)/g,
      (match, prefix, classStr, suffix) => {
        if (classStr.includes('focus:')) {
          return match
        }
        // Determine background: if text is white/light or on dark bg, use white focus ring
        const hasWhiteText =
          classStr.includes('text-white') || classStr.includes('text-[#fff')
        const hasDarkBg = classStr.includes('bg-[#0') || classStr.includes('dark:')
        const focusColor =
          hasWhiteText || hasDarkBg
            ? 'focus:ring-white'
            : 'focus:ring-[#C5A028]'
        const newClass = `${classStr} focus:outline-none focus:ring-2 ${focusColor} rounded px-0.5`
        return `${prefix}className="${newClass}"${suffix}`
      }
    )

    // 2. Add focus to button elements without it
    content = content.replace(
      /(<button[^>]*?)className="([^"]*?)"([^>]*?>)/g,
      (match, prefix, classStr, suffix) => {
        if (classStr.includes('focus:')) {
          return match
        }
        const hasGoldBg = classStr.includes('[#C5A028]') && classStr.includes('bg-')
        const focusColor = hasGoldBg ? 'focus:ring-white' : 'focus:ring-[#C5A028]'
        const newClass = `${classStr} focus:outline-none focus:ring-2 ${focusColor}`
        return `${prefix}className="${newClass}"${suffix}`
      }
    )

    // 3. Add focus to anchor tags without it
    content = content.replace(
      /(<a[^>]*?)className="([^"]*?)"([^>]*?>)/g,
      (match, prefix, classStr, suffix) => {
        if (classStr.includes('focus:')) {
          return match
        }
        const hasWhiteText = classStr.includes('text-white')
        const focusColor = hasWhiteText
          ? 'focus:ring-white'
          : 'focus:ring-[#C5A028]'
        const newClass = `${classStr} focus:outline-none focus:ring-2 ${focusColor} rounded px-0.5`
        return `${prefix}className="${newClass}"${suffix}`
      }
    )

    // 4. Add focus to form inputs without it (if they don't have focus styling)
    content = content.replace(
      /(<(?:input|select|textarea)[^>]*?)className="([^"]*?)focus:border/g,
      (match, prefix, classStr) => {
        if (classStr.includes('focus:ring')) {
          return match
        }
        const newClass = `${classStr} focus:ring-2 focus:ring-[#C5A028]/30`
        return `${prefix}className="${newClass}focus:border`
      }
    )

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf-8')
      console.log(`✓ ${path.basename(file)}`)
      updated = true
      totalUpdated++
    }
  }

  console.log(`\n✅ Updated ${totalUpdated} files with focus rings`)
}

addFocusRings().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
