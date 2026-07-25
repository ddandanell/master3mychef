#!/usr/bin/env node
/**
 * Generate the four myCHEF project-coordinator portraits for the /contact page.
 *
 * Provider: OpenAI gpt-image-1 (quality=medium). 1024x1536 portrait format,
 * resized to 768 px wide WebP for the site.
 *
 * Auth: OPENAI_API_KEY must be set in the environment.
 *
 * Usage: npx tsx scripts/generate-coordinator-portraits.ts [--only dede]
 */

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')

const STUDIO =
  'Head-and-shoulders portrait, facing the camera with a warm, approachable expression. ' +
  'Plain soft neutral studio backdrop, subtle natural window light, soft shadows. ' +
  'Ultra-realistic professional editorial photograph, natural skin texture, sharp focus on the eyes, ' +
  '85mm lens look, candid but polished. Wearing simple elegant professional clothing. ' +
  'No text, no logos, no watermarks, no religious symbols, no artificial or AI-looking smoothing.'

interface Job {
  id: string
  out: string
  prompt: string
}

const JOBS: Job[] = [
  {
    id: 'dede',
    out: 'portrait-dede-coordinator-bali',
    prompt:
      'Portrait photograph of Dede, an Indonesian woman in her early thirties, friendly project coordinator for luxury villa events in Bali. ' +
      'Warm smile, dark hair tied back neatly, natural makeup, wearing a simple cream or sand-coloured blouse. ' +
      STUDIO,
  },
  {
    id: 'david',
    out: 'portrait-david-coordinator-bali',
    prompt:
      'Portrait photograph of David, a European / Western man in his mid thirties, friendly project coordinator for luxury villa events in Bali. ' +
      'He is the only non-Indonesian on the team. Light stubble, short neat hair, confident welcoming expression, ' +
      'wearing a casual navy or charcoal linen shirt. ' +
      STUDIO,
  },
  {
    id: 'rina',
    out: 'portrait-rina-coordinator-bali',
    prompt:
      'Portrait photograph of Rina, an Indonesian woman in her late twenties, friendly project coordinator for weddings and corporate events in Bali. ' +
      'Warm genuine smile, shoulder-length dark hair, natural makeup, wearing an elegant muted teal or sage blouse. ' +
      STUDIO,
  },
  {
    id: 'budi',
    out: 'portrait-budi-coordinator-bali',
    prompt:
      'Portrait photograph of Budi, an Indonesian man in his early thirties, friendly project coordinator for villa partnerships and staffing in Bali. ' +
      'Warm confident expression, short neat black hair, light beard optional, wearing a clean white or light grey button-up shirt. ' +
      STUDIO,
  },
]

async function requestImage(job: Job, key: string): Promise<Buffer> {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: job.prompt,
      size: '1024x1536',
      quality: 'medium',
    }),
  })
  if (!res.ok) throw new Error(`${job.out}: ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const json = (await res.json()) as { data?: Array<{ b64_json?: string }> }
  const b64 = json.data?.[0]?.b64_json
  if (!b64) throw new Error(`${job.out}: no image in response`)
  return Buffer.from(b64, 'base64')
}

async function main(): Promise<void> {
  const key = process.env.OPENAI_API_KEY
  if (!key) throw new Error('OPENAI_API_KEY is not set')

  const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null
  const jobs = only ? JOBS.filter((j) => j.id === only || j.out.includes(only)) : JOBS
  if (jobs.length === 0) throw new Error(`No job matches --only ${only}`)

  for (const job of jobs) {
    console.log(`🎨 gpt-image-1 medium 1024x1536 → ${job.out}`)
    const raw = await requestImage(job, key)
    const webp = await sharp(raw).resize({ width: 768 }).webp({ quality: 82 }).toBuffer()
    writeFileSync(join(OUT_DIR, `${job.out}.webp`), webp)
    console.log(`✅ public/generated/${job.out}.webp (${Math.round(webp.length / 1024)} KB)`)
  }
}

main().catch((err) => {
  console.error('Coordinator portrait generation failed:', err.message)
  process.exit(1)
})
