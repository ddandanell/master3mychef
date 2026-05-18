# Generate City Location Images

## Quick Start

```bash
# 1. Get your FREE fal.ai API key
# Visit: https://fal.ai/dashboard/keys

# 2. Set environment variable
export FAL_KEY='your-api-key-here'

# 3. Run generator
cd "/Users/openclaw/Downloads/MYCHEF . MASTER/app"
python3 scripts/generate-city-images.py
```

## What This Does

Generates 15 unique, high-quality location images for:
- **Bali cities:** Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, Jimbaran, Berawa, Pererenan, Bukit Peninsula
- **Jakarta areas:** Jakarta, Menteng, Kemang, SCBD, Pondok Indah

Each image is:
- ✅ Tailored to the city's unique character (beach clubs, rice terraces, cliffs, corporate, etc.)
- ✅ Consistent premium style matching myCHEF brand
- ✅ Landscape 16:9 format (1344x768)
- ✅ Named correctly: `mychef-location-bali-city-{slug}.webp`
- ✅ Generated using cheapest high-quality model (Nano Banana 2)

## Cost

~$0.15-0.30 total for all 15 images using Nano Banana 2

## Output

Images saved to: `public/generated/mychef-location-bali-city-*.webp`

## Prompts Used

Each prompt was analyzed from the city descriptions in `src/data/topCities.ts`:

**Seminyak:** Beach clubs, premium villas, sunset dining, Petitenget coast
→ Luxury beachfront villa at golden hour, infinity pool, beach club atmosphere

**Canggu:** Surf crowd, digital nomads, jungle pool villas, family-run properties  
→ Modern family villa with surf boards, rice paddies, casual poolside

**Ubud:** Rice terraces, wellness retreats, artistic jungle valleys, yoga
→ Wellness villa in rice terraces, yoga deck, morning mist, zen atmosphere

**Uluwatu:** Clifftop villas, dramatic ocean views, surf breaks, Indian Ocean
→ Dramatic clifftop luxury villa, infinity pool at cliff edge, epic sunset

**Sanur:** East-coast, family villas, sunrise dining, multi-generational
→ Serene beachfront family villa at sunrise, calm ocean, tropical garden

**Nusa Dua:** Five-star resort enclave, corporate retreats, estate kitchens
→ Grand luxury estate, multiple pools, resort architecture, executive retreat

**Jimbaran:** Seafood grills, Kedonganan fish landing, boat-to-villa
→ Luxury seafood villa at sunset, fishing boats, beachfront dining

**Berawa:** Modern, villa parties, health-conscious, beach-club aesthetic
→ Modern entertainer villa, large pool, minimalist design, party spaces

**Pererenan:** Remote, architect-designed, off-grid privacy, romantic
→ Cutting-edge architect villa, ultra-modern, jungle setting, secluded

**Bukit:** Southern peninsula, limestone cliffs, elopements, dramatic
→ Exclusive clifftop villa, dramatic cliff, surf breaks below, panorama

**Jakarta:** Urban fine dining, executive corporate, premier residences
→ Luxury penthouse, city skyline views, executive dining, evening lights

**Menteng:** Diplomatic, historic, high-security, embassy dinners
→ Historic colonial mansion, diplomatic district, tropical estate, formal

**Kemang:** International expat, Mediterranean, social BBQ, vibrant
→ Stylish villa courtyard, Mediterranean-inspired, family dining, expat lifestyle

**SCBD:** Business District, boardroom, corporate networking, penthouses
→ Ultra-modern boardroom, SCBD skyline, corporate dining, glass walls

**Pondok Indah:** Premier family estates, multi-generational, large-format
→ Grand family estate, multiple entertaining areas, traditional luxury

## After Generation

1. **Review images** in `public/generated/`
2. **Build site:** `npm run build`
3. **Test locally:** `npm run dev` and visit `/locations`
4. **Commit:** `git add public/generated/ && git commit -m "feat: add AI-generated city location images"`
5. **Push:** `git push origin main`
6. **Deploy:** Vercel will auto-deploy

## Alternative: Manual Generation

If you prefer to use a different tool:

1. Use the prompts from `scripts/generate-city-images.py`
2. Generate with Midjourney, DALL-E, or Stable Diffusion
3. Save as: `mychef-location-bali-city-{slug}.webp` (1344x768 or 1920x1080)
4. Place in `public/generated/`

## Troubleshooting

**"FAL_KEY not set"**
→ Run: `export FAL_KEY='your-key'` before script

**"fal_client not found"**
→ Script uses raw HTTP requests, no package needed

**Images too dark/bright**
→ Adjust `guidance_scale` in script (try 5.0 - 10.0)

**Wrong style**
→ Edit prompts in `CITY_PROMPTS` dictionary

**Need different aspect ratio**
→ Change `image_size` to: `square`, `portrait_4_3`, `portrait_16_9`, `landscape_4_3`

## Cost Comparison

- **Nano Banana 2:** ~$0.01/image → $0.15 total ✅ (USED)
- **Nano Banana Pro:** ~$0.05/image → $0.75 total
- **FLUX.1 Pro:** ~$0.30/image → $4.50 total
- **Midjourney:** ~$0.20/image → $3.00 total

## Questions?

Check: https://fal.ai/models/fal-ai/nano-banana-2/api
