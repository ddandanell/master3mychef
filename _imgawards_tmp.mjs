import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
const KEY = '65666dcd-706b-4ef7-9fbd-f3c7e754e04e:fe7c656b6f8ccf56dc100ef382ed9be7'
const OUT = '/Users/openclaw/Movies/LIve website/MYCHEF Live webste/public/generated/mychef-misc-bali-were-awards.webp'
const MODEL = 'https://fal.run/fal-ai/flux-pro/v1.1'
const prompt = `Candid documentary editorial photograph of two professional Balinese in-villa service staff at a luxury Bali villa — a butler in a crisp white uniform and a waiter — standing confidently together, an infinity pool and tropical garden softly blurred behind them, warm golden-hour light. Both are young Indonesian Balinese men with warm brown skin, short black hair and Southeast Asian features, friendly and composed. Absolutely NO text, NO logos, NO signage, NO certificate, NO framed picture, NO writing of any kind anywhere in the image. Shot on Sony A7 III, 50mm f/1.8, shallow depth of field, realistic skin texture with subtle imperfections, true-to-life colors, subtle film grain, photorealistic, ultra-detailed, NOT 3d render, NOT illustration`
async function gen(attempt) {
  const r = await fetch(MODEL, { method: 'POST', headers: { 'Authorization': 'Key ' + KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt, image_size: 'portrait_4_3', num_images: 1, output_format: 'jpeg', enable_safety_checker: true, safety_tolerance: '5' }) })
  const j = await r.json()
  const url = j?.images?.[0]?.url
  if (!url) throw new Error('NOURL ' + JSON.stringify(j).slice(0, 300))
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer())
  await sharp(buf).resize(832, 1040, { fit: 'cover' }).webp({ quality: 82 }).toFile(OUT)
}
let ok = false, err = ''
for (let i = 1; i <= 3 && !ok; i++) {
  try { await gen(i); ok = true } catch (e) { err = e.message; await new Promise(r => setTimeout(r, 3000)) }
}
writeFileSync('/tmp/_imgawards_log.txt', ok ? 'OK' : ('FAIL ' + err))
writeFileSync('/tmp/_imgawards_done.txt', 'DONE')
