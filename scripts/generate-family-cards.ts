#!/usr/bin/env node
/**
 * Generate the six collection-card images for /families ("Browse by Dining Style").
 * Each prompt is written to match the actual collection content — super realistic
 * editorial hospitality photography, luxury Bali villa setting, Indonesian staff
 * when people are shown.
 *
 * Provider: OpenAI gpt-image-1, quality=high (user requested a higher tier for
 * these), 1536x1024. Output is cropped to 4:3 (the card aspect) and compressed
 * to light WebP so the cards stay fast to load.
 *
 * Auth: OPENAI_API_KEY must be set in the environment.
 *
 * Usage: npx tsx scripts/generate-family-cards.ts [--only kids]
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
  'candid editorial hospitality style, looks 100% real (not AI-generated). ' +
  'Luxury Bali villa setting. Any service staff shown must look Indonesian/Balinese. ' +
  'No text, no watermark, no logo.'

interface Job {
  out: string
  prompt: string
}

const JOBS: Job[] = [
  {
    out: 'mychef-families-bali-classic-set-menus',
    prompt:
      'Editorial food photograph: a candlelit fine dining table on the covered terrace of a luxury Bali villa at ' +
      'night, white linen and gold-rimmed porcelain. In the foreground a just-served course — seared duck breast ' +
      'fanned over dark cherry gastrique with micro herbs on a hand-thrown ceramic plate, precise sauce dots. ' +
      'Wine glasses catch the candlelight, a second plated course softly blurred further down the table. Tropical ' +
      'garden and the dark silhouette of a private pool behind. Warm gold and deep shadow tones, 85mm lens. ' + RULES,
  },
  {
    out: 'mychef-families-bali-three-course',
    prompt:
      'Editorial food photograph: a relaxed three-course lunch table for two beside a private pool at a Bali villa, ' +
      'late-afternoon natural light. On the light linen tablecloth: a starter bowl of grilled halloumi salad with ' +
      'cherry tomatoes, a plated main of herb-crusted chicken with roasted vegetables, and a small lemon tart with ' +
      'a mint leaf. Simple elegant tableware, two wine glasses, a few frangipani flowers on the table. Pool water ' +
      'and tropical plants soft-focus behind. Bright, airy, relaxed. ' + RULES,
  },
  {
    out: 'mychef-families-bali-bbq-grill',
    prompt:
      'Editorial photograph: an Indonesian chef in a dark apron tending a live charcoal grill station in a Bali ' +
      'villa garden at dusk. Satay skewers, tiger prawns and a whole butterflied fish sizzle over glowing coals, ' +
      'thin smoke drifting through the warm light. Glowing embers in the foreground, the chef’s hands turning ' +
      'skewers with tongs, a set dinner table with wine glasses softly blurred behind him. Cinematic, candid. ' + RULES,
  },
  {
    out: 'mychef-families-bali-kids-menus',
    prompt:
      'Editorial photograph: a cheerful kids’ party lunch table on the sunny terrace of a Bali villa, styled ' +
      'tastefully. On the table: mini burger sliders on small brioche buns, small wood-fired pizzas on wooden ' +
      'boards, colourful fresh fruit cups, vegetable sticks with dip in individual cups, and cupcakes with light ' +
      'frosting. Bright natural daylight, a turquoise pool and tropical garden soft-focus behind, a few pastel ' +
      'balloons barely visible and out of focus. Fresh, fun but elegant. No people. ' + RULES,
  },
  {
    out: 'mychef-families-bali-fine-dining-experience',
    prompt:
      'Editorial photograph: an Indonesian private chef in a white chef jacket carefully plating an elegant course ' +
      'at the open kitchen counter of a luxury Bali villa in the evening — tweezers placing a micro herb on seared ' +
      'tuna crudo. Behind him, softly blurred, a candlelit dinner table with wine glasses waits on the terrace, ' +
      'tropical night garden beyond. Warm focused light on his hands and the plate, cinematic warm tones. ' + RULES,
  },
  {
    out: 'mychef-families-bali-catering-events',
    prompt:
      'Editorial photograph: a long banquet table styled for a private celebration in a Bali villa garden at golden ' +
      'hour — white linen, tropical flower runners, gold cutlery and glassware catching the warm light. Two ' +
      'Indonesian service staff in black uniforms arrange plates at the far end of the table. Frangipani trees and ' +
      'soft string lights in the background, gentle bokeh, warm golden tones. ' + RULES,
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
