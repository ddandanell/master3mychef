#!/usr/bin/env bash
# Generate all hero/package images for the 7 Events sub-pages refresh.
# Usage: OPENAI_API_KEY=... bash scripts/generate-events-heroes.sh

set -euo pipefail

cd "$(dirname "$0")/.."

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "OPENAI_API_KEY is not set"
  exit 1
fi

run() {
  local desc="$1"
  shift
  local out=""
  local i=1
  while [ $i -le $# ]; do
    local arg="${!i}"
    if [ "$arg" = "--out" ]; then
      i=$((i + 1))
      out="${!i}"
    fi
    i=$((i + 1))
  done

  if [ -n "$out" ] && [ -f "public/generated/${out}.webp" ]; then
    echo ""
    echo "⏭ $desc (already exists: public/generated/${out}.webp)"
    return 0
  fi

  echo ""
  echo "▶ $desc"
  npx tsx scripts/generate-openai-hero.ts "$@" --width 1536 --quality 82
}

# ═══════════════════════════════════════════════════════════════
# 1. WEDDINGS — /events/weddings
# Sold: full villa wedding catering + coordination
# Customer: couples planning Bali villa weddings, mixed cultures
# Setting: clifftop/garden private villa, golden hour
# Mood: elegant, romantic, calm, premium
# Key elements: floral arch, long dining table, candles, Balinese staff, tropical greenery
# Text-safe zone: calm left side
# Differs from catering: ceremony/reception emotion, couple focus, softer light
# ═══════════════════════════════════════════════════════════════
run "Weddings hero" \
  --out mychef-events-bali-hero-weddings \
  --prompt "Editorial hospitality photograph of an elegant Bali villa wedding reception at sunset, long linen-draped dining table beside an infinity pool, white and blush floral arrangements, hundreds of candles, Balinese service staff in crisp black uniforms preparing plates in the background, tropical greenery and soft ocean glimpse, warm golden-hour light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated, people blocking the text-safe zone"

run "Weddings ceremony" \
  --out mychef-events-bali-weddings-ceremony \
  --prompt "Elegant Bali villa wedding ceremony setup in a tropical garden, white floral arch with trailing greenery, simple white chairs on lawn, palm trees and tropical plants, soft late-afternoon light, no people or small couple silhouette in distance, romantic and serene" \
  --negative "text, logos, watermarks, plastic chairs, religious symbols, sacred objects, clutter, harsh shadows, cartoonish"

run "Weddings cocktail" \
  --out mychef-events-bali-weddings-cocktail \
  --prompt "Champagne and canapé service during a Bali villa wedding cocktail hour, Indonesian waiter in black uniform holding tray of champagne flutes and bite-sized canapés, elegantly dressed guests in soft background focus, villa terrace with tropical greenery, warm ambient light" \
  --negative "text, logos, watermarks, plastic cups, paper napkins, religious symbols, sacred objects, harsh flash, cartoonish, people looking at camera"

run "Weddings reception" \
  --out mychef-events-bali-weddings-reception \
  --prompt "Long wedding reception dinner table in a Bali villa garden at dusk, glowing candles, white and green floral centrepieces, polished glassware and gold cutlery, plates being served by Balinese staff, soft warm light, intimate and luxurious" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Weddings bartender" \
  --out mychef-events-bali-weddings-bartender \
  --prompt "Indonesian bartender crafting signature cocktails at an elegant Bali villa wedding bar, fresh tropical garnishes, glassware lined up, warm string-light ambience, professional and celebratory mood" \
  --negative "text, logos, watermarks, plastic cups, religious symbols, sacred objects, harsh flash, cartoonish, bartender looking at camera"

# ═══════════════════════════════════════════════════════════════
# 2. BIRTHDAYS — /events/birthdays
# Sold: milestone & kids birthday villa parties
# Customer: birthday hosts aged 30-50 and parents
# Setting: poolside villa
# Mood: celebratory, sunset, energetic but polished
# Key elements: decorated table, cake, BBQ, balloons, pool
# Text-safe zone: calm left side
# Differs from weddings: more casual, colorful, playful energy
# ═══════════════════════════════════════════════════════════════
run "Birthdays hero" \
  --out mychef-events-bali-hero-birthdays \
  --prompt "Sunset birthday pool party setup at a premium Bali villa, long decorated dining table with tropical flowers, candles and balloons, swimming pool and palm trees in background, Indonesian staff arranging final details, warm festive golden light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Birthdays table" \
  --out mychef-events-bali-birthdays-table \
  --prompt "Styled birthday dinner table in a Bali villa, elegant tableware, tropical centrepieces, candles, a small celebration cake, pastel and gold accents, warm evening light" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Birthdays BBQ" \
  --out mychef-events-bali-birthdays-bbq \
  --prompt "Live BBQ station at a Bali villa birthday party, Indonesian chef grilling satay skewers and prawns over charcoal, smoke and flames, guests mingling in soft background, tropical poolside setting, festive evening light" \
  --negative "text, logos, watermarks, plastic plates, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Birthdays brunch" \
  --out mychef-events-bali-birthdays-brunch \
  --prompt "Bright birthday brunch spread on a Bali villa table, tropical fruit, pastries, fresh flowers, a small birthday cake, colourful but elegant styling, natural morning light" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Birthdays poolside" \
  --out mychef-events-bali-birthdays-poolside \
  --prompt "Poolside birthday setup at a Bali villa, decorated pool floats, lounge area, bar in background, tropical plants, staff arranging cushions and table settings, festive daytime mood" \
  --negative "text, logos, watermarks, plastic cups, religious symbols, sacred objects, harsh flash, cartoonish"

run "Birthdays festival" \
  --out mychef-events-bali-birthdays-festival \
  --prompt "Themed milestone birthday party styling in a Bali villa garden, elegant lighting, tropical foliage, decorated entrance and photo area, warm evening ambience" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Birthdays glam" \
  --out mychef-events-bali-birthdays-glam \
  --prompt "Glamorous white and gold birthday evening setup at a Bali villa, long table with white linens, candles, crystal glassware, soft string lights, elegant and celebratory" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 3. ANNIVERSARIES — /events/anniversaries
# Sold: romantic private chef dinners & vow renewals
# Customer: couples celebrating milestones
# Setting: private villa poolside or terrace
# Mood: intimate, warm, candlelit, personal
# Key elements: couple, candles, petals, champagne, fine dining
# Text-safe zone: calm left side
# Differs from weddings: private, smaller scale, deeper romance
# ═══════════════════════════════════════════════════════════════
run "Anniversaries hero" \
  --out mychef-events-bali-hero-anniversaries \
  --prompt "Romantic candlelit anniversary dinner for two by a Bali villa pool at dusk, rose petals, champagne on ice, elegant table setting, tropical garden and soft lantern light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people facing camera"

run "Anniversaries chef" \
  --out mychef-events-bali-anniversaries-chef \
  --prompt "Private Indonesian chef quietly plating an elegant anniversary course in a luxury Bali villa kitchen, focused and professional, refined plating, soft kitchen light" \
  --negative "text, logos, watermarks, religious symbols, messy kitchen, harsh flash, cartoonish, chef looking at camera"

run "Anniversaries plated" \
  --out mychef-events-bali-anniversaries-plated \
  --prompt "Close-up of a fine plated anniversary dish on a candlelit table, premium ingredients, artistic sauce, elegant ceramic plate, soft warm light, romantic mood" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Anniversaries toast" \
  --out mychef-events-bali-anniversaries-toast \
  --prompt "Couple toasting with champagne glasses at an intimate Bali villa dinner, candlelight, tropical garden background, romantic and candid moment, soft focus" \
  --negative "text, logos, watermarks, plastic cups, religious symbols, sacred objects, harsh flash, cartoonish, faces clearly visible"

run "Anniversaries tablescape" \
  --out mychef-events-bali-anniversaries-tablescape \
  --prompt "Romantic anniversary tablescape in a Bali villa, tall candles, red and white flowers, personalised place settings, elegant napkins, warm ambient light" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 4. CORPORATE EVENTS — /events/corporate-events
# Sold: offsites, conferences, launches
# Customer: corporate event planners / procurement
# Setting: villa conference room or executive dinner
# Mood: clean, confident, professional, daylight
# Key elements: business attire, presentation screen, buffet, name badges
# Text-safe zone: calm left side
# Differs from parties: restrained, agenda-driven, B2B trust signals
# ═══════════════════════════════════════════════════════════════
run "Corporate hero" \
  --out mychef-events-bali-hero-corporate \
  --prompt "Editorial photograph of a corporate team lunch at a modern Bali villa, long table with refined business lunch plates, professionals networking in soft background, Indonesian service staff in black uniforms, tropical garden and natural daylight, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people blocking text-safe zone"

run "Corporate conference" \
  --out mychef-events-bali-corporate-conference \
  --prompt "Corporate conference setup in a Bali villa function space, projector screen, rows of modern chairs, coffee break station with pastries and fruit, professional and clean, natural daylight" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, clutter, harsh flash, cartoonish"

run "Corporate plated" \
  --out mychef-events-bali-corporate-plated \
  --prompt "Elegant plated corporate dinner service at a Bali villa, uniformed Indonesian waiter serving a refined course to a guest, long table with white tableware, wine glasses, candlelight" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people facing camera"

run "Corporate networking" \
  --out mychef-events-bali-corporate-networking \
  --prompt "Standing networking reception at a Bali villa, business guests with drinks and canapés, Indonesian waiter with tray in black uniform, warm ambient light, professional atmosphere" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people posing for camera"

run "Corporate executive" \
  --out mychef-events-bali-corporate-executive \
  --prompt "Executive dinner environment at a Bali villa, small group of professionals at a refined table, polished service, wine glasses, tropical garden visible through open doors, warm evening light" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people facing camera"

run "Corporate villa" \
  --out mychef-events-bali-corporate-villa \
  --prompt "Villa venue set up for a corporate day event in Bali, registration table with branded materials without readable text, meeting area, coffee station, tropical garden, professional and inviting" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, clutter, harsh flash, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 5. RETREATS — /events/retreats
# Sold: wellness/yoga retreat catering
# Customer: retreat organisers, yoga teachers
# Setting: jungle/zen villa, natural materials
# Mood: calm, healthy, abundant, soft morning light
# Key elements: plant-forward food, communal table, yoga mats, fresh produce
# Text-safe zone: calm left side
# Differs from corporate: softer, nature-focused, no business cues
# ═══════════════════════════════════════════════════════════════
run "Retreats hero" \
  --out mychef-events-bali-hero-retreats \
  --prompt "Healthy retreat breakfast spread on a long natural wooden table by a Bali villa pool at sunrise, colourful smoothie bowls, tropical fruit platter, granola, fresh coconut, herbal tea, yoga mats softly blurred in the background, calm nourishing mood, soft morning light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people facing camera"

run "Retreats communal" \
  --out mychef-events-bali-retreats-communal \
  --prompt "Long communal retreat dining table in a Bali villa garden, plant-forward dishes, colourful salads, grilled vegetables, whole grains, fresh herbs, natural wood and linen, soft daylight" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Retreats produce" \
  --out mychef-events-bali-retreats-produce \
  --prompt "Fresh whole produce prepared for wellness retreat catering in a Bali villa kitchen, tropical fruits, root vegetables, leafy greens, herbs, wooden boards, natural light, healthy and abundant" \
  --negative "text, logos, watermarks, plastic packaging, religious symbols, sacred objects, clutter, harsh flash, cartoonish"

run "Retreats brunch" \
  --out mychef-events-bali-retreats-brunch \
  --prompt "Healthy brunch-style retreat spread in a Bali villa, colourful vegetables, avocado toast, fresh juices, tropical fruit, light and nourishing presentation, natural daylight" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 6. BABY SHOWERS — /events/baby-showers
# Sold: elegant villa baby shower brunches
# Customer: expecting mothers and close friends
# Setting: garden villa, daytime
# Mood: gentle, pastel, celebratory, soft
# Key elements: grazing table, mocktails, flowers, balloons
# Text-safe zone: calm left side
# Differs from birthdays: softer palette, daytime, pregnancy-safe cues
# ═══════════════════════════════════════════════════════════════
run "Baby showers hero" \
  --out mychef-events-bali-hero-baby-showers \
  --prompt "Elegant pastel baby shower brunch table in a Bali villa garden, grazing spread with cheeses, fruits and pastries, soft pink and white florals, pastel balloons, mocktail glasses, bright natural daylight, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, alcohol"

run "Baby showers grazing" \
  --out mychef-events-bali-baby-showers-grazing \
  --prompt "Close-up of an elegant grazing table for a baby shower in a Bali villa, artisan cheeses, fresh fruit, pastries, edible flowers, soft pastel styling, natural daylight" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, alcohol"

run "Baby showers tablescape" \
  --out mychef-events-bali-baby-showers-tablescape \
  --prompt "Styled baby shower tablescape in a Bali villa, pastel linens, floral centrepieces, delicate glassware, candles, personalised place cards without readable text, soft and elegant" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Baby showers mocktails" \
  --out mychef-events-bali-baby-showers-mocktails \
  --prompt "Garden mocktail bar for a baby shower at a Bali villa, elegant glassware with pastel non-alcoholic drinks, fresh fruit garnishes, mint and edible flowers, bright daytime mood" \
  --negative "text, logos, watermarks, plastic cups, alcohol, religious symbols, sacred objects, harsh flash, cartoonish"

run "Baby showers pool" \
  --out mychef-events-bali-baby-showers-pool \
  --prompt "Poolside family baby shower setup at a Bali villa, soft pastel decor, comfortable lounge seating, grazing table, tropical garden, gentle daytime light" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, alcohol"

# ═══════════════════════════════════════════════════════════════
# 7. VILLA PARTIES — /events/villa-parties
# Sold: adult villa parties, sundowners, cocktail receptions
# Customer: groups celebrating, hens/bucks, corporate mixers
# Setting: poolside at night or sunset
# Mood: vibrant, social, after-dark energy
# Key elements: bar, BBQ, lighting, pool, lounge
# Text-safe zone: calm left side
# Differs from birthdays: more adult, night focus, cocktail culture
# ═══════════════════════════════════════════════════════════════
run "Villa parties hero" \
  --out mychef-events-bali-hero-villa-parties \
  --prompt "Night-time Bali villa party with bar, pool and festoon lighting, long-table dining, guests mingling in soft background, Indonesian bartender and staff working, warm ambient glow, tropical garden, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Villa parties BBQ" \
  --out mychef-events-bali-villa-parties-bbq \
  --prompt "Live BBQ station at a night-time Bali villa party, flames and smoke from charcoal grill, Indonesian chef grilling skewers and seafood, guests in soft background, poolside ambient lighting" \
  --negative "text, logos, watermarks, plastic plates, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Villa parties bar" \
  --out mychef-events-bali-villa-parties-bar \
  --prompt "Bartender serving cocktails at an illuminated party bar in a Bali villa at night, tropical garnishes, glassware, warm string lights, lively social atmosphere" \
  --negative "text, logos, watermarks, plastic cups, religious symbols, sacred objects, harsh flash, cartoonish, bartender looking at camera"

run "Villa parties pool" \
  --out mychef-events-bali-villa-parties-pool \
  --prompt "Poolside villa party at night in Bali, illuminated pool, lounge seating, bar area, tropical plants, warm ambient lighting, social and festive" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Villa parties rooftop" \
  --out mychef-events-bali-villa-parties-rooftop \
  --prompt "Rooftop terrace villa party mood in Bali at dusk, low tables, cushions, candles, city or jungle view in background, warm sunset light turning into evening" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

run "Villa parties festoon" \
  --out mychef-events-bali-villa-parties-festoon \
  --prompt "Festoon lighting and lounge area setup for a Bali villa party, string lights across garden, low seating with cushions, tropical plants, warm evening ambience" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

echo ""
echo "✅ All events hero images generated."
