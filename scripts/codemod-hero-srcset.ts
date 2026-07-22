#!/usr/bin/env tsx
/**
 * Codemod: add responsive srcSet/sizes to hero <img> tags.
 *
 * Targets <img> tags that have loading="eager" or fetchPriority="high" and a
 * static /generated/*.webp src. Adds srcSet={getHeroSrcSet('...')} and
 * sizes="100vw" when a matching -mobile.webp file exists in public/generated.
 */
import { readFile, writeFile, existsSync } from 'fs'
import { join } from 'path'
import { glob } from 'glob'
import { promisify } from 'util'

const readFileP = promisify(readFile)
const writeFileP = promisify(writeFile)
const existsP = promisify(existsSync)

const SRC_DIR = join(process.cwd(), 'src', 'pages')
const PUBLIC_DIR = join(process.cwd(), 'public')

const isHeroTag = (tag: string) =>
  /loading\s*=\s*["']eager["']/i.test(tag) || /fetch[pP]riority\s*=\s*["']high["']/i.test(tag)

function extractStaticSrc(tag: string): string | null {
  const m = tag.match(/src\s*=\s*["'](\/generated\/[^"']+\.webp)["']/i)
  return m ? m[1] : null
}

async function processFile(file: string): Promise<number> {
  let content = await readFileP(file, 'utf-8')
  const original = content
  let changes = 0

  // Find <img ...> tags (multi-line).
  content = content.replace(/<img\b([^>]*(?:\n[^>]*)*)>/gi, (fullTag, inner: string) => {
    if (!isHeroTag(inner)) return fullTag
    const src = extractStaticSrc(inner)
    if (!src) return fullTag

    const mobileSrc = src.replace(/\.webp$/i, '-mobile.webp')
    if (!existsSync(join(PUBLIC_DIR, mobileSrc))) return fullTag

    // Already has srcSet? Skip.
    if (/srcSet\s*=/.test(inner)) return fullTag

    // Insert srcSet + sizes right after the src attribute.
    const newInner = inner.replace(
      /(src\s*=\s*["']\/generated\/[^"']+\.webp["'])/i,
      `$1\n        srcSet={getHeroSrcSet('${src}')}\n        sizes="100vw"`
    )
    if (newInner === inner) return fullTag

    changes++
    return `<img${newInner}>`
  })

  if (changes > 0) {
    // Add import if missing.
    const importLine = "import { getHeroSrcSet } from '@/lib/imageDimensions'"
    if (!content.includes(importLine)) {
      // Insert after the last import statement at the top.
      const lines = content.split('\n')
      let lastImportIndex = -1
      for (let i = 0; i < lines.length; i++) {
        if (/^\s*import\s+/.test(lines[i])) lastImportIndex = i
      }
      if (lastImportIndex >= 0) {
        lines.splice(lastImportIndex + 1, 0, importLine)
        content = lines.join('\n')
      } else {
        content = importLine + '\n' + content
      }
    }
    await writeFileP(file, content, 'utf-8')
  }

  return changes
}

async function main() {
  const files = await glob('**/*.tsx', { cwd: SRC_DIR, absolute: true })
  let total = 0
  for (const file of files) {
    const changed = await processFile(file)
    if (changed) {
      console.log(`${file.replace(process.cwd() + '/', '')}: ${changed} hero image(s) updated`)
      total += changed
    }
  }
  console.log(`\nTotal hero images updated with srcSet: ${total}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
