import { writeFileSync } from 'node:fs'
import sharp from 'sharp'

const OG_TITLES: Record<string, string> = {
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

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function makeOgSvg(title: string): Buffer {
  const line1 = title
  const line2 = 'MyChef Bar Services Bali'
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#1a1a1a" stop-opacity="0.85"/>
        <stop offset="1" stop-color="#0f0f0f" stop-opacity="0.98"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="600" y="260" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="bold" fill="#f5f5f5">${escapeXml(line1)}</text>
    <text x="600" y="360" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="38" fill="#d97706">${escapeXml(line2)}</text>
  </svg>`
  return Buffer.from(svg)
}

async function main() {
  for (const [key, title] of Object.entries(OG_TITLES)) {
    const filename = `public/generated/mychef-bar-services-bali-og-${key}.jpg`
    const textOverlay = await sharp(makeOgSvg(title))
      .resize(1200, 630, { fit: 'fill' })
      .png()
      .toBuffer()

    const output = await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 3,
        background: { r: 26, g: 26, b: 26 },
      },
    })
      .jpeg({ quality: 88, progressive: true })
      .toBuffer()

    const final = await sharp(output)
      .composite([{ input: textOverlay, blend: 'over' }])
      .jpeg({ quality: 88, progressive: true })
      .toBuffer()

    writeFileSync(filename, final)
    console.log(`✅ ${filename}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
