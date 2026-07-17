#!/usr/bin/env node
/**
 * Generate a brand-consistent website hero/package image via the OpenAI
 * Images API (model gpt-image-2) and save it web-ready (WebP) into public/generated/.
 *
 * Uses the OpenAI API key from the OPENAI_API_KEY environment variable.
 *
 * Usage:
 *   npx tsx scripts/generate-openai-hero.ts \
 *     --prompt "chef grilling satay at a Bali villa BBQ" \
 *     --out mychef-catering-bali-hero-bbq \
 *     [--negative "text, logos, plastic cutlery, religious symbols"] \
 *     [--width 1536] [--quality 82]
 *
 * Defaults:
 *   model: gpt-image-2
 *   quality: medium
 *   size: 1536x1024
 *   width: 1536 (resize if larger)
 *   webp quality: 82
 */

import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')

const API_URL = 'https://api.openai.com/v1/images/generations'
const MODEL = 'gpt-image-2'
const SIZE = '1536x1024'
const QUALITY = 'medium'

const BRAND_RULES =
  'Ultra-realistic professional editorial hospitality photograph, natural daylight, shallow depth of field, candid style, looks 100% real. Luxury private Bali villa setting with tropical greenery and pool. Any service staff shown (chef, server, bartender) must look Indonesian/Balinese; guests may be international. Avoid visible text, logos, watermarks, religious or sacred elements, plastic or disposable ware, disturbing imagery, or anything that looks artificial.'

function parseArgs(argv: string[]): Record<string, string> {
  const out: Record<string, string> = {}
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2)
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : 'true'
      out[key] = val
    }
  }
  return out
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2))
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) throw new Error('OPENAI_API_KEY is not set')

  const promptCore = args.prompt
  if (!promptCore) throw new Error('Missing --prompt')

  const outName = slugify(args.out || promptCore)
  const maxWidth = Number(args.width || 1536)
  const webpQuality = Number(args.quality || 82)
  const negative = args.negative || ''

  let fullPrompt = `${promptCore}. ${BRAND_RULES}`
  if (negative) {
    fullPrompt += ` Negative constraints: ${negative}.`
  }

  console.log(`🎨 ${MODEL} ${SIZE} → public/generated/${outName}.webp`)

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      prompt: fullPrompt,
      n: 1,
      size: SIZE,
      quality: QUALITY,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`OpenAI ${res.status}: ${text.slice(0, 500)}`)
  }

  const json = (await res.json()) as { data?: Array<{ b64_json?: string; url?: string }> }
  const item = json.data?.[0]
  if (!item) throw new Error('No image returned')

  const raw = item.b64_json
    ? Buffer.from(item.b64_json, 'base64')
    : Buffer.from(await (await fetch(item.url!)).arrayBuffer())

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true })
  const outPath = join(OUT_DIR, `${outName}.webp`)

  const meta = await sharp(raw).metadata()
  const pipeline = sharp(raw)
  if ((meta.width ?? 0) > maxWidth) pipeline.resize({ width: maxWidth })
  const webp = await pipeline.webp({ quality: webpQuality }).toBuffer()
  writeFileSync(outPath, webp)

  const finalMeta = await sharp(outPath).metadata()
  const kb = Math.round(webp.length / 1024)
  console.log(`✅ saved public/generated/${outName}.webp (${finalMeta.width}x${finalMeta.height}, ${kb} KB)`)
  if (kb > 250) console.log(`   ⚠️ ${kb} KB > 250 KB target — consider --width 1440 or --quality 78`)
}

main().catch((err) => {
  console.error('Image generation failed:', err.message)
  process.exit(1)
})
