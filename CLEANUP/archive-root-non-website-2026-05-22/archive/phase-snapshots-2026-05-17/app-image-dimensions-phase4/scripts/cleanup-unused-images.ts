#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PROJECT_ROOT = path.resolve(__dirname, '..')
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports')
const AUDIT_REPORT = path.join(REPORTS_DIR, 'image-audit.json')

interface AuditReport {
  images: Record<string, { usageCount: number; path: string; size: number }>
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

async function main() {
  try {
    if (!fs.existsSync(AUDIT_REPORT)) {
      console.error(`❌ Image audit report not found: ${AUDIT_REPORT}`)
      console.error('Run: pnpm audit:images')
      process.exit(1)
    }

    const auditData = JSON.parse(fs.readFileSync(AUDIT_REPORT, 'utf8')) as AuditReport

    const unusedImages = Object.entries(auditData.images)
      .filter(([_, img]) => img.usageCount === 0)
      .map(([_, img]) => ({
        path: img.path.replace('/public/', ''),
        size: img.size,
        full: img.path,
      }))
      .sort((a, b) => b.size - a.size)

    if (unusedImages.length === 0) {
      console.log('✓ No unused images found!')
      return
    }

    console.log(`\n📋 Unused Images Report (${unusedImages.length} total)\n`)
    console.log('Generated Images (likely temp/test):')

    const generatedImages = unusedImages.filter((img) => img.path.includes('generated/'))
    let generatedSize = 0
    generatedImages.forEach((img) => {
      generatedSize += img.size
      console.log(`  ${img.path} — ${formatBytes(img.size)}`)
    })

    console.log(`\nPublic Root Images (non-generated):`)
    const rootImages = unusedImages.filter((img) => !img.path.includes('generated/') && !img.path.includes('images/'))
    let rootSize = 0
    rootImages.forEach((img) => {
      rootSize += img.size
      console.log(`  ${img.path} — ${formatBytes(img.size)}`)
    })

    console.log(`\nImages Directory (legacy/test):`)
    const imagesDir = unusedImages.filter((img) => img.path.includes('images/'))
    let imagesSize = 0
    imagesDir.forEach((img) => {
      imagesSize += img.size
      console.log(`  ${img.path} — ${formatBytes(img.size)}`)
    })

    const totalSize = generatedSize + rootSize + imagesSize

    console.log(`\n📊 Cleanup Summary:`)
    console.log(`  Generated folder: ${generatedImages.length} files, ${formatBytes(generatedSize)}`)
    console.log(`  Public root: ${rootImages.length} files, ${formatBytes(rootSize)}`)
    console.log(`  Images dir: ${imagesDir.length} files, ${formatBytes(imagesSize)}`)
    console.log(`  ─────────────────────────────────────`)
    console.log(`  Total unused: ${unusedImages.length} files, ${formatBytes(totalSize)}`)

    console.log(`\n💡 Cleanup candidates (in priority order):`)
    console.log(`  1. Delete /public/generated/* (${generatedImages.length} files, ${formatBytes(generatedSize)})`)
    console.log(`  2. Review /public/images/* (${imagesDir.length} files, ${formatBytes(imagesSize)})`)
    console.log(`  3. Review /public/*.webp|png (${rootImages.length} files, ${formatBytes(rootSize)})`)

    console.log(`\n📄 To clean up, edit the script or manually:`)
    console.log(`  rm -rf public/generated/*`)
    console.log(`  rm public/old-unused-images.webp`)
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

main()
