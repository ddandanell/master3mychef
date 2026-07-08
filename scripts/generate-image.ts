#!/usr/bin/env node
/**
 * Generate a brand-consistent website image via the Vercel AI Gateway and save it
 * web-ready (WebP) into public/generated/.
 *
 * Uses the CHEAPEST photorealistic image model by default
 * (google/imagen-4.0-fast-generate-001 — $0.02/image on the gateway).
 *
 * Auth: reads the gateway key from env VERCEL_AI_GATEWAY_KEY (keep it in the
 * gitignored .env — never hardcode). Load .env with: `set -a; . ./.env; set +a`.
 *
 * Usage:
 *   npx tsx scripts/generate-image.ts \
 *     --prompt "private chef plating in a Bali villa" \
 *     --out hero-private-chef-bali \
 *     [--size 1536x1024] [--width 1600] [--quality 82] [--model <id>]
 *
 * myCHEF image rules (auto-appended to every prompt):
 *   - Any service staff shown (chef, bartender, waiter, host, butler) MUST look
 *     Indonesian/Balinese. Guests/clients may be anyone.
 *   - Must look 100% real (not obviously AI). Natural light, candid, editorial.
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = join(__dirname, '..', 'public', 'generated')

// Lightweight .env loader (no dependency) so the gateway key is picked up automatically.
function loadEnv(): void {
  const envPath = join(__dirname, '..', '.env')
  if (!existsSync(envPath)) return
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}
loadEnv()

const GATEWAY_URL = 'https://ai-gateway.vercel.sh/v1/images/generations'
const DEFAULT_MODEL = 'google/imagen-4.0-fast-generate-001' // cheapest photoreal, $0.02/img
const BRAND_RULES =
  'Ultra-realistic professional photograph, natural light, shallow depth of field, ' +
  'candid editorial hospitality style, looks 100% real (not AI-generated). Any service ' +
  'staff shown (chef, bartender, waiter, host, butler) must look Indonesian/Balinese; ' +
  'guests may be anyone. Luxury Bali villa setting.'

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
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60)
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2))
  const key = process.env.VERCEL_AI_GATEWAY_KEY
  if (!key) throw new Error('VERCEL_AI_GATEWAY_KEY is not set (add it to .env, then `set -a; . ./.env; set +a`)')

  const promptCore = args.prompt
  if (!promptCore) throw new Error('Missing --prompt')
  const outName = slugify(args.out || promptCore)
  const size = args.size || '1536x1024'
  const model = args.model || DEFAULT_MODEL
  const maxWidth = Number(args.width || 1600)
  const quality = Number(args.quality || 82)
  const fullPrompt = `${promptCore}. ${BRAND_RULES}`

  console.log(`🎨 model=${model}  size=${size}  → public/generated/${outName}.webp`)

  const res = await fetch(GATEWAY_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt: fullPrompt, n: 1, size }),
  })
  if (!res.ok) {
    throw new Error(`Gateway ${res.status}: ${(await res.text()).slice(0, 300)}`)
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
  const webp = await pipeline.webp({ quality }).toBuffer()
  writeFileSync(outPath, webp)

  const kb = Math.round(webp.length / 1024)
  const altText = promptCore.charAt(0).toUpperCase() + promptCore.slice(1)
  console.log(`✅ saved public/generated/${outName}.webp (${kb} KB)`)
  console.log(`   <img src="/generated/${outName}.webp" alt="${altText}" width="${maxWidth}" loading="lazy" />`)
  if (kb > 300) console.log(`   ⚠️ ${kb} KB > 300 KB target — consider --width 1280 or --quality 78`)
}

main().catch((err) => {
  console.error('Image generation failed:', err.message)
  process.exit(1)
})
