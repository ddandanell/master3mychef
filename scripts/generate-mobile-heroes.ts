#!/usr/bin/env tsx
/**
 * Generate mobile-sized hero variants for above-the-fold images.
 *
 * Scans src/pages for <img> tags with loading="eager" or fetchPriority="high",
 * creates a -mobile.webp copy at MOBILE_WIDTH pixels, and reports savings.
 * The matching HeroImage component / helper can then serve the smaller file
 * to narrow viewports via srcSet.
 */
import { readFile, stat, writeFile } from 'fs/promises'
import { join, extname, basename } from 'path'
import { glob } from 'glob'
import sharp from 'sharp'

const SRC_DIR = join(process.cwd(), 'src', 'pages')
const PUBLIC_DIR = join(process.cwd(), 'public')
const MOBILE_WIDTH = 768
const QUALITY = 80

const EXT = '.webp'
const SUFFIX = '-mobile'

function isHeroTag(tag: string): boolean {
  return /loading\s*=\s*["']eager["']/i.test(tag) || /fetch[pP]riority\s*=\s*["']high["']/i.test(tag)
}

function extractStaticSrc(tag: string): string | null {
  const m = tag.match(/src\s*=\s*["'](\/generated\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i)
  return m ? m[1] : null
}

async function main() {
  const files = await glob('**/*.tsx', { cwd: SRC_DIR, absolute: true })
  const srcSet = new Set<string>()

  for (const file of files) {
    const content = await readFile(file, 'utf-8')
    // Naive but sufficient: find every <img ...> tag.
    for (const match of content.matchAll(/<img\b([^>]*(?:\n[^>]*)*)>/gi)) {
      const tag = match[1]
      if (!isHeroTag(tag)) continue
      const src = extractStaticSrc(tag)
      if (src) srcSet.add(src)
    }
  }

  let generated = 0
  let skipped = 0
  let failed = 0
  let totalBeforeBytes = 0
  let totalAfterBytes = 0

  for (const src of Array.from(srcSet).sort()) {
    const inputPath = join(PUBLIC_DIR, src)
    const ext = extname(src).toLowerCase()
    if (ext !== '.webp') {
      console.log(`skip (non-webp): ${src}`)
      skipped++
      continue
    }

    const baseName = basename(src, ext)
    const dir = src.substring(0, src.lastIndexOf('/'))
    const mobileSrc = `${dir}/${baseName}${SUFFIX}${EXT}`
    const outputPath = join(PUBLIC_DIR, mobileSrc)

    try {
      const meta = await sharp(inputPath).metadata()
      if (!meta.width || meta.width <= MOBILE_WIDTH) {
        console.log(`skip (already narrow ${meta.width}px): ${src}`)
        skipped++
        continue
      }

      const before = (await stat(inputPath)).size
      await sharp(inputPath)
        .resize({ width: MOBILE_WIDTH, withoutEnlargement: true, fit: 'inside' })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(outputPath)
      const after = (await stat(outputPath)).size

      totalBeforeBytes += before
      totalAfterBytes += after
      generated++
      console.log(`${mobileSrc}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB`)
    } catch (e) {
      console.error(`failed: ${src} — ${(e as Error).message}`)
      failed++
    }
  }

  console.log(`\nGenerated ${generated} mobile hero variants (skipped ${skipped}, failed ${failed})`)
  if (generated > 0) {
    console.log(`Total original: ${(totalBeforeBytes / 1024 / 1024).toFixed(2)}MB`)
    console.log(`Total mobile:   ${(totalAfterBytes / 1024 / 1024).toFixed(2)}MB`)
    console.log(`Saved:          ${((totalBeforeBytes - totalAfterBytes) / 1024 / 1024).toFixed(2)}MB`)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
