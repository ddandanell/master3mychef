#!/usr/bin/env node
/**
 * Generate the four fine-dining chef portraits (I Made Surya, Bayu Pranata,
 * Rizky Saputra, Ni Putu Asri) as a matched black-and-white studio set.
 *
 * Provider: OpenAI gpt-image-1 (quality=medium — a step above the cheapest
 * tier, below high). For the three chefs who already have a portrait on the
 * site, that portrait is sent to /v1/images/edits so the new B&W portrait
 * keeps the same face (identity consistency across pages). Rizky is T2I via
 * /v1/images/generations. (BFL FLUX.2 [pro] was the first choice but the
 * account had no credits — see git history for the BFL variant.)
 *
 * Auth: OPENAI_API_KEY must be set in the environment.
 *
 * Usage: npx tsx scripts/generate-chef-portraits.ts [--only rizky]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')

const STUDIO =
  'Head and shoulders framing, facing the camera with a calm confident expression. ' +
  'Wearing a clean white double-breasted chef jacket. Plain dark charcoal studio ' +
  'backdrop, soft Rembrandt key light with gentle falloff. Ultra-realistic ' +
  'professional editorial hospitality photograph, natural skin texture, sharp ' +
  'focus on the eyes, 85mm lens look.'

interface Job {
  out: string
  prompt: string
  /** Local path of the existing colour portrait to keep identity from. */
  ref?: string
}

const JOBS: Job[] = [
  {
    out: 'chef-made-surya-portrait-bw',
    ref: 'public/generated/chef-made-surya-portrait.webp',
    prompt:
      'Create a black and white studio portrait photograph of the man in this photo — same person, same face. Monochrome. ' +
      STUDIO,
  },
  {
    out: 'chef-bayu-pranata-portrait-bw',
    ref: 'public/generated/chef-bayu-pranata-portrait.webp',
    prompt:
      'Create a black and white studio portrait photograph of the man in this photo — same person, same face. Monochrome. ' +
      STUDIO,
  },
  {
    out: 'chef-rizky-saputra-portrait-bw',
    prompt:
      'Black and white studio portrait photograph of an Indonesian man from West Sumatra (Minangkabau) in his early ' +
      'thirties, short neat black hair, calm focused expression. Monochrome. ' +
      STUDIO,
  },
  {
    out: 'chef-ni-putu-asri-portrait-bw',
    ref: 'public/generated/chef-ni-putu-asri-portrait.webp',
    prompt:
      'Create a black and white studio portrait photograph of the woman in this photo — same person, same face, hair ' +
      'tied back neatly. Monochrome. ' +
      STUDIO,
  },
]

async function requestImage(job: Job, key: string): Promise<Buffer> {
  let res: Response
  if (job.ref) {
    const form = new FormData()
    const file = readFileSync(join(__dirname, '..', job.ref))
    form.append('model', 'gpt-image-1')
    form.append('image', new Blob([file], { type: 'image/webp' }), 'portrait.webp')
    form.append('prompt', job.prompt)
    form.append('size', '1024x1536')
    form.append('quality', 'medium')
    res = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}` },
      body: form,
    })
  } else {
    res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'gpt-image-1', prompt: job.prompt, size: '1024x1536', quality: 'medium' }),
    })
  }
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
  const jobs = only ? JOBS.filter((j) => j.out.includes(only)) : JOBS
  if (jobs.length === 0) throw new Error(`No job matches --only ${only}`)

  for (const job of jobs) {
    console.log(`🎨 gpt-image-1 medium 1024x1536 ${job.ref ? 'I2I' : 'T2I'} → ${job.out}`)
    const raw = await requestImage(job, key)
    // Bake in true monochrome (do not rely on the prompt alone), web-ready WebP.
    const webp = await sharp(raw).grayscale().resize({ width: 768 }).webp({ quality: 82 }).toBuffer()
    writeFileSync(join(OUT_DIR, `${job.out}.webp`), webp)
    console.log(`✅ public/generated/${job.out}.webp (${Math.round(webp.length / 1024)} KB)`)
  }
}

main().catch((err) => {
  console.error('Portrait generation failed:', err.message)
  process.exit(1)
})
