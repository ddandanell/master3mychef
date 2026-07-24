import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is required')
  process.exit(1)
}

const PROMPT_LIBRARY_PATH = join(import.meta.dirname, 'output-05-prompt-library.json')
const OUTPUT_DIR = join(import.meta.dirname, 'test-images')

// Test set from user prompt: one per visual category
const TEST_IDS = new Set([
  'img-002+img-009', // Private Cocktail Party hero
  'img-016',         // Sushi Masterclass instructional
  'img-025',         // Kids Birthday Chef Party people-focused
  'img-007+img-032', // Romantic Proposal Dinner romantic evening
  'img-038+img-052', // VIP Transport Bali transport
])

interface ImageSpec {
  image_id: string
  page_name: string | string[]
  page_url: string | string[]
  section: string
  purpose: string
  priority: string
  quality: 'low' | 'medium' | 'high' | 'auto'
  size: string
  detailed_generation_prompt: string
  negative_constraints: string[]
  estimated_cost_usd: number
}

interface PromptLibrary {
  images: ImageSpec[]
}

function parseSize(size: string): { width: number; height: number } {
  const [width, height] = size.split('x').map(Number)
  return { width, height }
}

async function generateImage(spec: ImageSpec): Promise<{ b64_json?: string; url?: string; revised_prompt?: string }> {
  const { width, height } = parseSize(spec.size)
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-image-2',
      prompt: spec.detailed_generation_prompt,
      size: `${width}x${height}`,
      quality: spec.quality,
      n: 1,
    }),
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`OpenAI API error ${response.status}: ${text}`)
  }

  const data = await response.json()
  const image = data.data?.[0]
  if (!image) {
    throw new Error('No image data returned')
  }
  return image
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true })

  const library: PromptLibrary = JSON.parse(readFileSync(PROMPT_LIBRARY_PATH, 'utf-8'))
  const tests = library.images.filter((img) => TEST_IDS.has(img.image_id))

  if (tests.length !== TEST_IDS.size) {
    console.warn(`Expected ${TEST_IDS.size} test prompts, found ${tests.length}`)
    const found = new Set(tests.map((t) => t.image_id))
    for (const id of TEST_IDS) {
      if (!found.has(id)) console.warn(`  Missing: ${id}`)
    }
  }

  const results: Array<{
    image_id: string
    page_name: string | string[]
    filename: string
    model: string
    quality: string
    size: string
    cost_usd: number
    status: 'success' | 'error'
    error?: string
    revised_prompt?: string
  }> = []

  for (const spec of tests) {
    const { width, height } = parseSize(spec.size)
    const filename = `test-${spec.image_id.replace(/\+/g, '-').replace(/[^a-z0-9-]/gi, '')}.png`
    const outputPath = join(OUTPUT_DIR, filename)

    console.log(`Generating ${spec.image_id} (${spec.quality} ${width}x${height})...`)
    try {
      const image = await generateImage(spec)

      let buffer: Buffer
      if (image.b64_json) {
        buffer = Buffer.from(image.b64_json, 'base64')
      } else if (image.url) {
        const imageResponse = await fetch(image.url)
        if (!imageResponse.ok) {
          throw new Error(`Failed to download image: ${imageResponse.status}`)
        }
        buffer = Buffer.from(await imageResponse.arrayBuffer())
      } else {
        throw new Error('No image b64_json or URL returned')
      }
      writeFileSync(outputPath, buffer)
      console.log(`  Saved ${outputPath} (${buffer.length} bytes)`)

      results.push({
        image_id: spec.image_id,
        page_name: spec.page_name,
        filename,
        model: 'gpt-image-2',
        quality: spec.quality,
        size: spec.size,
        cost_usd: spec.estimated_cost_usd,
        status: 'success',
        revised_prompt: image.revised_prompt,
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err)
      console.error(`  Failed: ${message}`)
      results.push({
        image_id: spec.image_id,
        page_name: spec.page_name,
        filename,
        model: 'gpt-image-2',
        quality: spec.quality,
        size: spec.size,
        cost_usd: 0,
        status: 'error',
        error: message,
      })
    }
  }

  const manifestPath = join(OUTPUT_DIR, 'test-manifest.json')
  writeFileSync(manifestPath, JSON.stringify({ generated_at: new Date().toISOString(), results }, null, 2))
  console.log(`\nManifest saved to ${manifestPath}`)

  const totalCost = results.filter((r) => r.status === 'success').reduce((sum, r) => sum + r.cost_usd, 0)
  console.log(`Total estimated cost: $${totalCost.toFixed(3)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
