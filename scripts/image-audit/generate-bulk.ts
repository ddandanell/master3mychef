import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is required')
  process.exit(1)
}

const PROMPT_LIBRARY_PATH = join(import.meta.dirname, 'output-05-prompt-library.json')
const OUTPUT_DIR = join(import.meta.dirname, 'generated-images')
const MANIFEST_PATH = join(OUTPUT_DIR, 'bulk-manifest.json')

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
  proposed_filename: string
  target_keyword: string
}

interface PromptLibrary {
  images: ImageSpec[]
}

interface ManifestEntry {
  image_id: string
  filename: string
  model: string
  quality: string
  size: string
  cost_usd: number
  status: 'success' | 'error' | 'skipped'
  error?: string
  generated_at?: string
}

interface Manifest {
  started_at: string
  updated_at: string
  total: number
  completed: number
  failed: number
  total_cost_usd: number
  results: ManifestEntry[]
}

function parseSize(size: string): { width: number; height: number } {
  const [width, height] = size.split('x').map(Number)
  return { width, height }
}

function sanitizeFilename(id: string): string {
  return id.replace(/\+/g, '-').replace(/[^a-z0-9-]/gi, '')
}

async function callOpenAI(spec: ImageSpec, _attempt: number): Promise<{ b64_json?: string; url?: string; revised_prompt?: string }> {
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

async function downloadImage(url: string): Promise<Buffer> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Download failed: ${res.status}`)
  return Buffer.from(await res.arrayBuffer())
}

async function generateOne(spec: ImageSpec, retries = 2): Promise<ManifestEntry> {
  const filename = `${sanitizeFilename(spec.image_id)}.png`
  const outputPath = join(OUTPUT_DIR, filename)

  if (existsSync(outputPath)) {
    console.log(`  Already exists: ${filename} — skipping`)
    return {
      image_id: spec.image_id,
      filename,
      model: 'gpt-image-2',
      quality: spec.quality,
      size: spec.size,
      cost_usd: 0,
      status: 'skipped',
      generated_at: new Date().toISOString(),
    }
  }

  let lastError = ''
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      if (attempt > 0) {
        console.log(`  Retry ${attempt} for ${spec.image_id}...`)
        await new Promise((r) => setTimeout(r, 2000 * attempt))
      }

      const image = await callOpenAI(spec, attempt)
      let buffer: Buffer
      if (image.b64_json) {
        buffer = Buffer.from(image.b64_json, 'base64')
      } else if (image.url) {
        buffer = await downloadImage(image.url)
      } else {
        throw new Error('No image b64_json or URL returned')
      }

      writeFileSync(outputPath, buffer)
      console.log(`  Saved ${filename} (${buffer.length} bytes)`)

      return {
        image_id: spec.image_id,
        filename,
        model: 'gpt-image-2',
        quality: spec.quality,
        size: spec.size,
        cost_usd: spec.estimated_cost_usd,
        status: 'success',
        generated_at: new Date().toISOString(),
      }
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err)
      console.error(`  Attempt ${attempt + 1} failed: ${lastError}`)
    }
  }

  return {
    image_id: spec.image_id,
    filename,
    model: 'gpt-image-2',
    quality: spec.quality,
    size: spec.size,
    cost_usd: 0,
    status: 'error',
    error: lastError,
    generated_at: new Date().toISOString(),
  }
}

function loadManifest(): Manifest {
  if (existsSync(MANIFEST_PATH)) {
    return JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'))
  }
  return {
    started_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    total: 0,
    completed: 0,
    failed: 0,
    total_cost_usd: 0,
    results: [],
  }
}

function saveManifest(manifest: Manifest) {
  manifest.updated_at = new Date().toISOString()
  manifest.completed = manifest.results.filter((r) => r.status === 'success' || r.status === 'skipped').length
  manifest.failed = manifest.results.filter((r) => r.status === 'error').length
  manifest.total_cost_usd = manifest.results.reduce((sum, r) => sum + r.cost_usd, 0)
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true })

  const library: PromptLibrary = JSON.parse(readFileSync(PROMPT_LIBRARY_PATH, 'utf-8'))
  const images = library.images

  const manifest = loadManifest()
  if (manifest.results.length === 0) {
    manifest.total = images.length
    manifest.started_at = new Date().toISOString()
  }

  const existing = new Map(manifest.results.map((r) => [r.image_id, r]))

  for (let i = 0; i < images.length; i++) {
    const spec = images[i]
    const previous = existing.get(spec.image_id)
    if (previous && (previous.status === 'success' || previous.status === 'skipped')) {
      console.log(`[${i + 1}/${images.length}] ${spec.image_id} already done — skipping`)
      continue
    }

    console.log(`[${i + 1}/${images.length}] Generating ${spec.image_id} (${spec.quality} ${spec.size})...`)
    const entry = await generateOne(spec)
    existing.set(spec.image_id, entry)
    manifest.results = Array.from(existing.values())
    saveManifest(manifest)
  }

  console.log(`\nBulk generation complete.`)
  console.log(`Total: ${manifest.total}`)
  console.log(`Successful: ${manifest.results.filter((r) => r.status === 'success').length}`)
  console.log(`Skipped (already existed): ${manifest.results.filter((r) => r.status === 'skipped').length}`)
  console.log(`Failed: ${manifest.results.filter((r) => r.status === 'error').length}`)
  console.log(`Total estimated cost: $${manifest.total_cost_usd.toFixed(3)}`)

  if (manifest.results.some((r) => r.status === 'error')) {
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
