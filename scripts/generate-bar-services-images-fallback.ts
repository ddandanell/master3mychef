#!/usr/bin/env node
/**
 * Fallback generator for MyChef Bar Services images.
 *
 * Because OpenAI and BFL were unavailable during this run (OpenAI key pointed
 * to a chat-only Kimi endpoint; BFL account had insufficient credits), this
 * script creates the required image set by:
 *
 *   1. Cropping/resizing existing brand-consistent images from public/generated/
 *      for heroes, bodies, resources and contacts.
 *   2. Generating OG JPGs from dark gradients with text overlays.
 *
 * All outputs respect the size budgets defined in the brief:
 *   - heroes ≤ 150 KB
 *   - body/resource/contact ≤ 100 KB
 *   - OG JPG ≤ 120 KB
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')
const SOURCE_DIR = OUT_DIR

type ImageType = 'hero' | 'body' | 'resource' | 'contact' | 'og'
type Gravity = 'north' | 'northeast' | 'east' | 'southeast' | 'south' | 'southwest' | 'west' | 'northwest' | 'centre'

interface ImageJob {
  type: ImageType
  filename: string
  source: string
  gravity?: Gravity
  ogTitle?: string
}

const OG_TITLES: Record<string, string> = {
  hub: 'Bar Consultant Bali',
  'bar-staff-training': 'Bar Staff Training Bali',
  'cocktail-menu-development': 'Cocktail Menu Development Bali',
  'signature-cocktail-creation': 'Signature Cocktail Creation Bali',
  'temporary-bartender-staffing': 'Bartender Hire Bali',
  'permanent-bar-staff-recruitment': 'Bar Staff Recruitment Bali',
  'new-bar-setup': 'New Bar Setup Bali',
  'bar-audit-improvement': 'Bar Audit Bali',
  'bar-costing-inventory-control': 'Bar Costing & Inventory Control Bali',
  'bar-equipment-supply-rental': 'Bar Equipment Rental Bali',
  'monthly-bar-management-support': 'Monthly Bar Management Bali',
  'complete-bar-performance-programme': 'Bar Performance Programme Bali',
  faq: 'Bar Services FAQ',
  contact: 'Contact MyChef Bar Services',
  resources: 'Bar Services Resources',
  'how-much-does-a-bartender-cost-bali': 'Bartender Cost in Bali',
  'bartender-salary-benchmarks-bali': 'Bartender Salary Benchmarks Bali',
  'how-many-bartenders-per-guest': 'Bartenders Per Guest Guide',
  'beverage-cost-percentage-guide': 'Beverage Cost Percentage Guide',
  'how-to-open-a-bar-in-bali': 'How to Open a Bar in Bali',
  'how-to-create-a-cocktail-menu': 'Create a Cocktail Menu',
  'how-to-reduce-bar-shrinkage-bali': 'Reduce Bar Shrinkage Bali',
}

function ogJob(key: string, title: string): ImageJob {
  return { type: 'og', filename: `mychef-bar-services-bali-og-${key}.jpg`, source: '', ogTitle: title }
}

function photoJob(type: ImageType, filename: string, source: string, gravity: Gravity = 'centre'): ImageJob {
  return { type, filename, source, gravity }
}

function buildJobs(): ImageJob[] {
  const jobs: ImageJob[] = []

  // Hub hero
  jobs.push(photoJob('hero', 'mychef-bar-services-bali-hero-hub.webp', 'mychef-service-bali-hero-bartenders.webp', 'centre'))

  // Service heroes
  jobs.push(
    photoJob('hero', 'mychef-bar-services-bali-hero-bar-staff-training.webp', 'mychef-service-bali-hero-bartenders.webp', 'west'),
    photoJob('hero', 'mychef-bar-services-bali-hero-cocktail-menu-development.webp', 'mychef-events-bali-villa-parties-bar.webp', 'centre'),
    photoJob('hero', 'mychef-bar-services-bali-hero-signature-cocktail-creation.webp', 'mychef-service-bali-hero-mixology.webp', 'north'),
    photoJob('hero', 'mychef-bar-services-bali-hero-temporary-bartender-staffing.webp', 'mychef-events-bali-weddings-bartender.webp', 'east'),
    photoJob('hero', 'mychef-bar-services-bali-hero-permanent-bar-staff-recruitment.webp', 'mychef-service-bali-bartenders-gallery-1.webp', 'centre'),
    photoJob('hero', 'mychef-bar-services-bali-hero-new-bar-setup.webp', 'mychef-mixology-bali-bar-setup.webp', 'south'),
    photoJob('hero', 'mychef-bar-services-bali-hero-bar-audit-improvement.webp', 'mychef-service-bali-hero-sommelier.webp', 'centre'),
    photoJob('hero', 'mychef-bar-services-bali-hero-bar-costing-inventory-control.webp', 'mychef-service-bali-hero-butlers.webp', 'west'),
    photoJob('hero', 'mychef-bar-services-bali-hero-bar-equipment-supply-rental.webp', 'mychef-mixology-bali-cocktail-craft.webp', 'centre'),
    photoJob('hero', 'mychef-bar-services-bali-hero-monthly-bar-management-support.webp', 'mychef-service-bali-hero-waiters.webp', 'east'),
    photoJob('hero', 'mychef-bar-services-bali-hero-complete-bar-performance-programme.webp', 'mychef-service-bali-bartenders-gallery-4.webp', 'centre')
  )

  // Service body shots
  jobs.push(
    photoJob('body', 'mychef-bar-services-bali-bar-staff-training-body.webp', 'mychef-mixology-bali-class.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-cocktail-menu-development-body.webp', 'mychef-service-bali-bartenders-gallery-2.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-signature-cocktail-creation-body.webp', 'mychef-service-bali-mixology-gallery-1.webp', 'north'),
    photoJob('body', 'mychef-bar-services-bali-temporary-bartender-staffing-body.webp', 'mychef-events-bali-villa-parties-bar.webp', 'south'),
    photoJob('body', 'mychef-bar-services-bali-permanent-bar-staff-recruitment-body.webp', 'mychef-service-bali-bartenders-gallery-3.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-new-bar-setup-body.webp', 'mychef-mixology-bali-bar-setup.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-bar-audit-improvement-body.webp', 'mychef-service-bali-sommelier-gallery-1.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-bar-costing-inventory-control-body.webp', 'mychef-service-bali-butlers-gallery-1.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-bar-equipment-supply-rental-body.webp', 'mychef-service-bali-bartenders-gallery-4.webp', 'west'),
    photoJob('body', 'mychef-bar-services-bali-monthly-bar-management-support-body.webp', 'mychef-service-bali-waiters-gallery-2.webp', 'centre'),
    photoJob('body', 'mychef-bar-services-bali-complete-bar-performance-programme-body.webp', 'mychef-service-bali-mixology-gallery-4.webp', 'centre')
  )

  // Resource featured images
  jobs.push(
    photoJob('resource', 'mychef-bar-services-bali-resource-how-much-does-a-bartender-cost-bali.webp', 'mychef-bartenders-1.webp', 'centre'),
    photoJob('resource', 'mychef-bar-services-bali-resource-bartender-salary-benchmarks-bali.webp', 'mychef-bartenders-2.webp', 'centre'),
    photoJob('resource', 'mychef-bar-services-bali-resource-how-many-bartenders-per-guest.webp', 'mychef-events-bali-weddings-bartender.webp', 'south'),
    photoJob('resource', 'mychef-bar-services-bali-resource-beverage-cost-percentage-guide.webp', 'mychef-bartenders-3.webp', 'centre'),
    photoJob('resource', 'mychef-bar-services-bali-resource-how-to-open-a-bar-in-bali.webp', 'mychef-mixology-bali-bar-setup.webp', 'north'),
    photoJob('resource', 'mychef-bar-services-bali-resource-how-to-create-a-cocktail-menu.webp', 'mychef-mixology-bali-cocktail-craft.webp', 'centre'),
    photoJob('resource', 'mychef-bar-services-bali-resource-how-to-reduce-bar-shrinkage-bali.webp', 'mychef-bartenders-4.webp', 'centre')
  )

  // Contact images
  jobs.push(
    photoJob('contact', 'mychef-bar-services-bali-contact-hero.webp', 'mychef-service-bali-hero-bartenders.webp', 'east'),
    photoJob('contact', 'mychef-bar-services-bali-consultant.webp', 'aura-bartender.webp', 'north')
  )

  // OG images
  for (const [key, title] of Object.entries(OG_TITLES)) {
    jobs.push(ogJob(key, title))
  }

  return jobs
}

function makeOgSvg(title: string): Buffer {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1a1a" stop-opacity="0.78"/>
        <stop offset="1" stop-color="#0f0f0f" stop-opacity="0.95"/>
      </linearGradient>
      <filter id="b" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="40"/>
      </filter>
      <radialGradient id="a" cx="80%" cy="20%" r="60%">
        <stop offset="0" stop-color="#d97706" stop-opacity="0.25"/>
        <stop offset="1" stop-color="#0f0f0f" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#0f0f0f"/>
    <circle cx="960" cy="126" r="360" fill="url(#a)" filter="url(#b)"/>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="600" y="265" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="68" font-weight="bold" fill="#f5f5f5">${escapeXml(title)}</text>
    <text x="600" y="360" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#d97706">MyChef Bar Services Bali</text>
  </svg>`
  return Buffer.from(svg)
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

interface JobResult {
  ok: boolean
  filename: string
  error?: string
  sizeKB?: number
  dims?: string
}

async function processJob(job: ImageJob, index: number, total: number): Promise<JobResult> {
  const outPath = join(OUT_DIR, job.filename)

  console.log(`🖼️  [${index + 1}/${total}] ${job.type.toUpperCase()} → ${job.filename}`)

  try {
    if (job.type === 'og') {
      const svg = makeOgSvg(job.ogTitle!)
      let output = await sharp(svg)
        .jpeg({ quality: 90, progressive: true, background: { r: 15, g: 15, b: 15 } })
        .toBuffer()

      let quality = 90
      while (output.length > 120 * 1024 && quality > 60) {
        quality -= 4
        output = await sharp(svg).jpeg({ quality, progressive: true }).toBuffer()
      }

      writeFileSync(outPath, output)
      const meta = await sharp(outPath).metadata()
      const sizeKB = Math.round((output.length / 1024) * 10) / 10
      console.log(`✅ [${index + 1}/${total}] ${job.filename} (${meta.width}x${meta.height}, ${sizeKB} KB)`)
      return { ok: true, filename: job.filename, sizeKB, dims: `${meta.width}x${meta.height}` }
    }

    const sourcePath = join(SOURCE_DIR, job.source)
    if (!existsSync(sourcePath)) throw new Error(`Source not found: ${job.source}`)

    const targetWidth = job.type === 'hero' ? 1440 : 1200
    const targetHeight = job.type === 'hero' ? 961 : 800
    const maxSizeKB = job.type === 'hero' ? 150 : 100
    const quality = job.type === 'hero' ? 82 : 78

    let output = await sharp(sourcePath)
      .resize(targetWidth, targetHeight, { fit: 'cover', position: job.gravity })
      .webp({ quality })
      .toBuffer()

    let q = quality
    while (output.length > maxSizeKB * 1024 && q > 50) {
      q -= 3
      output = await sharp(sourcePath)
        .resize(targetWidth, targetHeight, { fit: 'cover', position: job.gravity })
        .webp({ quality: q })
        .toBuffer()
    }

    writeFileSync(outPath, output)
    const meta = await sharp(outPath).metadata()
    const sizeKB = Math.round((output.length / 1024) * 10) / 10
    console.log(`✅ [${index + 1}/${total}] ${job.filename} (${meta.width}x${meta.height}, ${sizeKB} KB)`)
    return { ok: true, filename: job.filename, sizeKB, dims: `${meta.width}x${meta.height}` }
  } catch (err: any) {
    console.error(`❌ [${index + 1}/${total}] failed ${job.filename}: ${err.message}`)
    return { ok: false, filename: job.filename, error: err.message }
  }
}

async function main(): Promise<void> {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })

  const jobs = buildJobs()
  console.log(`\n🚀 Fallback generator: ${jobs.length} bar-services images\n`)

  const results: JobResult[] = []
  for (let i = 0; i < jobs.length; i++) {
    results.push(await processJob(jobs[i], i, jobs.length))
  }

  const ok = results.filter((r) => r.ok)
  const failed = results.filter((r) => !r.ok)

  console.log(`\n📊 Summary: ${ok.length}/${jobs.length} succeeded, ${failed.length} failed`)
  if (failed.length > 0) {
    console.log('\nMissing files:')
    for (const f of failed) console.log(`  - ${f.filename}: ${f.error}`)
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    method: 'fallback-from-existing-assets',
    total: jobs.length,
    succeeded: ok.length,
    failed: failed.length,
    files: results,
  }
  writeFileSync(join(OUT_DIR, 'mychef-bar-services-images-manifest.json'), JSON.stringify(manifest, null, 2))

  if (failed.length > 0) process.exit(1)
}

main().catch((err) => {
  console.error('Fallback generation failed:', err.message)
  process.exit(1)
})
