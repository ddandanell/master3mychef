#!/usr/bin/env node
/**
 * Generate the six collection-card images for /dining-styles ("Browse by Dining Style").
 * Each prompt describes the general scene for that collection — a generic luxury
 * catering-company look (modern villa, no Indonesian styling) and NO people.
 *
 * Provider: OpenAI gpt-image-1, quality=high (user requested a higher tier for
 * these), 1536x1024. Output is cropped to 4:3 (the card aspect) and compressed
 * to light WebP so the cards stay fast to load.
 *
 * Auth: OPENAI_API_KEY must be set in the environment.
 *
 * Usage: npx tsx scripts/generate-family-cards.ts [--only kids] [--force]
 */

import { existsSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const RULES =
  'Ultra-realistic professional photograph, natural light, shallow depth of field, ' +
  'editorial hospitality style, looks 100% real (not AI-generated). Modern luxury ' +
  'villa setting, neutral international styling. Absolutely no people, no hands, ' +
  'no text, no watermark, no logo.'

interface Job {
  out: string
  prompt: string
}

const JOBS: Job[] = [
  {
    out: 'mychef-families-bali-classic-set-menus',
    prompt:
      'Wide shot of an elegant dining table inside a modern luxury villa at dusk, soft candles glowing along ' +
      'the table, white linen and gold-rimmed porcelain, a just-plated gourmet course in the foreground, wine ' +
      'glasses catching the warm candlelight, sophisticated intimate evening mood. ' + RULES,
  },
  {
    out: 'mychef-families-bali-three-course',
    prompt:
      'Early-evening poolside scene at a modern luxury villa, a relaxed table for two beside the water set ' +
      'with a light three-course dinner — a fresh starter, an elegant main and a small dessert — gentle ambient ' +
      'lighting, casual upscale mood, calm pool reflections. ' + RULES,
  },
  {
    out: 'mychef-families-bali-bbq-grill',
    prompt:
      'Outdoor terrace of a tropical villa at night, a live charcoal grill station with assorted seafood and ' +
      'meats sizzling over glowing coals — prawns, fish and skewers — thin smoke drifting through the warm ' +
      'flame light, a set dinner table with wine glasses softly blurred in the background. ' + RULES,
  },
  {
    out: 'mychef-families-bali-kids-menus',
    prompt:
      'Bright daylight garden at a modern luxury villa, a colourful children’s party table set with small bites ' +
      '— mini burger sliders, small pizzas, fresh fruit cups and cupcakes — playful decorations and a few ' +
      'pastel balloons, joyful family-party vibe, fresh and inviting. ' + RULES,
  },
  {
    out: 'mychef-families-bali-fine-dining-experience',
    prompt:
      'Spacious open-plan villa kitchen and dining area in the evening, several elegant plated fine-dining ' +
      'courses arranged on a wide island counter — precise plating, micro herbs, sauce dots — sophisticated ' +
      'yet intimate atmosphere, warm focused light on the counter. ' + RULES,
  },
  {
    out: 'mychef-families-bali-catering-events',
    prompt:
      'Long banquet table on a manicured lawn overlooking the ocean at sunset, white linen, floral runners ' +
      'and crystal glassware catching the golden light, candles ready to be lit, everything styled and ' +
      'prepared for an elegant private celebration. ' + RULES,
  },
]

async function generate(job: Job, key: string): Promise<void> {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'gpt-image-1', prompt: job.prompt, size: '1536x1024', quality: 'high' }),
  })
  if (!res.ok) throw new Error(`${job.out}: ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const json = (await res.json()) as { data?: Array<{ b64_json?: string }> }
  const b64 = json.data?.[0]?.b64_json
  if (!b64) throw new Error(`${job.out}: no image in response`)

  // Cards render at aspect-[4/3] — crop from 3:2 and keep light for fast loading.
  const webp = await sharp(Buffer.from(b64, 'base64'))
    .resize(960, 720, { fit: 'cover', position: 'attention' })
    .webp({ quality: 80 })
    .toBuffer()
  const kb = Math.round(webp.length / 1024)
  writeFileSync(join(OUT_DIR, `${job.out}.webp`), webp)
  console.log(`✅ public/generated/${job.out}.webp (${kb} KB)`)
  if (kb > 150) console.log(`   ⚠️ ${kb} KB — above the 150 KB card budget`)
}

async function main(): Promise<void> {
  const key = process.env.OPENAI_API_KEY
  if (!key) throw new Error('OPENAI_API_KEY is not set')

  const force = process.argv.includes('--force')
  const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1] : null
  let jobs = only ? JOBS.filter((j) => j.out.includes(only)) : JOBS
  if (!force) jobs = jobs.filter((j) => !existsSync(join(OUT_DIR, `${j.out}.webp`)))
  if (jobs.length === 0) {
    console.log('Nothing to do (all images exist, or no match for --only). Use --force to regenerate.')
    return
  }

  let failures = 0
  for (const job of jobs) {
    console.log(`🎨 gpt-image-1 high 1536x1024 T2I → ${job.out}`)
    let done = false
    for (let attempt = 1; attempt <= 3 && !done; attempt++) {
      try {
        await generate(job, key)
        done = true
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        if (attempt < 3) {
          console.log(`   ⚠️ attempt ${attempt} failed (${msg.slice(0, 80)}) — retrying in ${attempt * 10}s`)
          await sleep(attempt * 10_000)
        } else {
          console.error(`   ❌ giving up on ${job.out}: ${msg.slice(0, 120)}`)
          failures++
        }
      }
    }
  }
  if (failures > 0) {
    console.error(`\n${failures} image(s) failed — rerun the script to resume (existing files are skipped).`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error('Card generation failed:', err.message)
  process.exit(1)
})
