import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const GENERATED_DIR = join(import.meta.dirname, 'generated-images')
const PUBLIC_DIR = join(import.meta.dirname, '..', '..', 'public', 'generated')
const MANIFEST_PATH = join(GENERATED_DIR, 'bulk-manifest.json')
const SEO_METADATA_PATH = join(import.meta.dirname, 'output-06-seo-metadata.json')

interface SEOMetadata {
  images: Array<{
    image_id: string
    filename: string
    alt_text: string
    target_page: string
    target_section: string
  }>
}

interface Manifest {
  results: Array<{
    image_id: string
    filename: string
    status: 'success' | 'error' | 'skipped'
  }>
}

async function main() {
  if (!existsSync(MANIFEST_PATH)) {
    console.error('Bulk manifest not found. Run generate-bulk.ts first.')
    process.exit(1)
  }

  const manifest: Manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'))
  const successful = manifest.results.filter((r) => r.status === 'success')

  if (successful.length === 0) {
    console.error('No successful images to process.')
    process.exit(1)
  }

  const seo: SEOMetadata = existsSync(SEO_METADATA_PATH)
    ? JSON.parse(readFileSync(SEO_METADATA_PATH, 'utf-8'))
    : { images: [] }

  mkdirSync(PUBLIC_DIR, { recursive: true })

  const report: Array<{
    image_id: string
    source: string
    output: string
    original_size_kb: number
    webp_size_kb: number
    dimensions: string
  }> = []

  for (const entry of successful) {
    const sourcePath = join(GENERATED_DIR, entry.filename)
    if (!existsSync(sourcePath)) {
      console.warn(`Source not found: ${sourcePath}`)
      continue
    }

    const meta = seo.images.find((i) => i.image_id === entry.image_id)
    const outputFilename = meta?.filename ?? entry.filename.replace('.png', '.webp')
    const outputPath = join(PUBLIC_DIR, outputFilename)

    const _originalStat = await sharp(sourcePath).metadata()
    const originalBuffer = readFileSync(sourcePath)

    await sharp(sourcePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath)

    const webpStat = await sharp(outputPath).metadata()
    const webpBuffer = readFileSync(outputPath)

    report.push({
      image_id: entry.image_id,
      source: sourcePath,
      output: outputPath,
      original_size_kb: Math.round(originalBuffer.length / 1024),
      webp_size_kb: Math.round(webpBuffer.length / 1024),
      dimensions: `${webpStat.width}x${webpStat.height}`,
    })

    console.log(`Optimized ${entry.image_id} → ${outputFilename} (${Math.round(webpBuffer.length / 1024)}KB)`)
  }

  const reportPath = join(GENERATED_DIR, 'optimization-report.json')
  writeFileSync(reportPath, JSON.stringify({ generated_at: new Date().toISOString(), images: report }, null, 2))
  console.log(`\nOptimization report: ${reportPath}`)
  console.log(`Total images processed: ${report.length}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
