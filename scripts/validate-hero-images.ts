import fs from 'fs'
import path from 'path'

interface HeroImageConfig {
  pageName: string
  pageRoute: string
  imagePath: string
  requiredFormat: 'webp' | 'avif'
  minWidth: number
  maxSize: number // in KB
  description: string
}

const HERO_IMAGES: HeroImageConfig[] = [
  {
    pageName: 'Home / Bali Hub',
    pageRoute: '/',
    imagePath: 'public/generated/mychef-location-bali-hub-hero.webp',
    requiredFormat: 'webp',
    minWidth: 1200,
    maxSize: 300,
    description: 'Homepage hero banner showcasing Bali villa services'
  },
  {
    pageName: 'Fine Dining',
    pageRoute: '/fine-dining',
    imagePath: 'public/generated/mychef-misc-bali-hub-fine-dining.webp',
    requiredFormat: 'webp',
    minWidth: 1200,
    maxSize: 300,
    description: 'Fine dining service hero image'
  },
  {
    pageName: 'Catering',
    pageRoute: '/catering',
    imagePath: 'public/generated/mychef-catering-bali-hub-catering.webp',
    requiredFormat: 'webp',
    minWidth: 1200,
    maxSize: 300,
    description: 'Catering service hero image'
  },
  {
    pageName: 'Events',
    pageRoute: '/events',
    imagePath: 'public/generated/mychef-events-bali-hub-events.webp',
    requiredFormat: 'webp',
    minWidth: 1200,
    maxSize: 300,
    description: 'Events service hero image'
  },
  {
    pageName: 'How It Works',
    pageRoute: '/getting-started',
    imagePath: 'public/generated/mychef-misc-bali-hero-how-it-works.webp',
    requiredFormat: 'webp',
    minWidth: 1200,
    maxSize: 300,
    description: 'How it works guide hero image'
  },
  {
    pageName: 'Bar Services Hub',
    pageRoute: '/bar-services',
    imagePath: 'public/generated/mychef-bar-services-bali-hero-hub.webp',
    requiredFormat: 'webp',
    minWidth: 1200,
    maxSize: 300,
    description: 'Bar services hub hero image'
  }
]

interface ValidationResult {
  pageName: string
  pageRoute: string
  status: 'ok' | 'missing' | 'invalid-format' | 'oversized' | 'low-quality'
  imagePath: string
  message: string
  size?: number
  format?: string
}

export function validateHeroImages(): ValidationResult[] {
  const results: ValidationResult[] = []
  const errors: string[] = []

  for (const config of HERO_IMAGES) {
    const fullPath = path.resolve(process.cwd(), config.imagePath)

    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      results.push({
        pageName: config.pageName,
        pageRoute: config.pageRoute,
        status: 'missing',
        imagePath: config.imagePath,
        message: `❌ MISSING: ${config.imagePath}`
      })
      errors.push(`Missing hero image for ${config.pageName}: ${config.imagePath}`)
      continue
    }

    // Check file format
    const ext = path.extname(fullPath).toLowerCase()
    const expectedExt = `.${config.requiredFormat}`
    if (ext !== expectedExt) {
      results.push({
        pageName: config.pageName,
        pageRoute: config.pageRoute,
        status: 'invalid-format',
        imagePath: config.imagePath,
        format: ext,
        message: `⚠️ FORMAT: Expected ${expectedExt}, got ${ext}`
      })
      errors.push(`Invalid format for ${config.pageName}: expected ${expectedExt}, got ${ext}`)
      continue
    }

    // Check file size
    const stats = fs.statSync(fullPath)
    const sizeInKB = stats.size / 1024

    let status: ValidationResult['status'] = 'ok'
    let message = `✓ VALID: ${config.pageName}`

    if (sizeInKB > config.maxSize) {
      status = 'oversized'
      message = `⚠️ SIZE: ${sizeInKB.toFixed(1)}KB exceeds ${config.maxSize}KB limit`
      errors.push(`Oversized hero image for ${config.pageName}: ${sizeInKB.toFixed(1)}KB`)
    }

    results.push({
      pageName: config.pageName,
      pageRoute: config.pageRoute,
      status,
      imagePath: config.imagePath,
      size: sizeInKB,
      format: ext,
      message
    })
  }

  // Print results
  console.log('\n╔══════════════════════════════════════════════════════╗')
  console.log('║         HERO IMAGE VALIDATION REPORT                 ║')
  console.log('╚══════════════════════════════════════════════════════╝\n')

  for (const result of results) {
    const icon = result.status === 'ok' ? '✓' : '❌'
    console.log(`${icon} [${result.pageRoute}] ${result.pageName}`)
    console.log(`   Path: ${result.imagePath}`)
    if (result.size) {
      console.log(`   Size: ${result.size.toFixed(1)}KB`)
    }
    if (result.format) {
      console.log(`   Format: ${result.format}`)
    }
    console.log(`   ${result.message}\n`)
  }

  // Summary
  const okCount = results.filter(r => r.status === 'ok').length
  const totalCount = results.length
  const passRate = ((okCount / totalCount) * 100).toFixed(0)

  console.log(`Summary: ${okCount}/${totalCount} hero images validated (${passRate}% pass rate)\n`)

  // Block deployment if critical errors
  if (errors.length > 0) {
    console.error('❌ CRITICAL: Some hero images are invalid or missing')
    errors.forEach(e => console.error(`   - ${e}`))
    console.error(
      '\nThese images are required for key landing pages to display correctly.'
    )
    console.error('Fix the issues above before deployment.\n')
    return results
  }

  console.log('✓ All hero images validated successfully!\n')
  return results
}

// Run validation if executed directly (always run on import in build scripts)
const results = validateHeroImages()
const hasErrors = results.some(r => r.status !== 'ok')
if (hasErrors) {
  process.exit(1)
}
