import fs from 'fs'
import path from 'path'

const CRITICAL_ASSETS = [
  'public/generated/mychef-location-bali-hub-hero.webp',
  'public/generated/mychef-misc-bali-hub-fine-dining.webp',
  'public/generated/mychef-catering-bali-hub-catering.webp',
  'public/generated/mychef-events-bali-hub-events.webp',
  'public/generated/mychef-misc-bali-hero-how-it-works.webp',
]

export function validateCriticalAssets() {
  const missing: string[] = []

  for (const asset of CRITICAL_ASSETS) {
    const fullPath = path.resolve(process.cwd(), asset)
    if (!fs.existsSync(fullPath)) {
      missing.push(asset)
    }
  }

  if (missing.length > 0) {
    console.error('❌ CRITICAL: Missing essential hero/portal images!')
    missing.forEach((asset) => {
      console.error(`   Missing: ${asset}`)
    })
    console.error('\nThese images are required for the homepage to display correctly.')
    console.error('The deployment will be blocked to prevent a broken site.')
    process.exit(1)
  }

  console.log('✓ Critical assets validated: homepage hero images present')
  return true
}

// Run validation if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  validateCriticalAssets()
}
