#!/usr/bin/env bash
# Generate all hero/package images for the 9 catering sub-pages refresh.
# Usage: OPENAI_API_KEY=... bash scripts/generate-catering-heroes.sh

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
# 1. BBQ Catering
# ═══════════════════════════════════════════════════════════════
run "BBQ hero" \
  --out mychef-catering-bali-hero-bbq \
  --prompt "Editorial hospitality photograph of a private chef grilling live at a premium Bali villa poolside BBQ station, early evening golden light, smoke rising from a charcoal grill, tropical greenery and infinity pool in the background, calm left side with soft negative space for text overlay, warm and social atmosphere" \
  --negative "text, logos, watermarks, plastic cutlery, paper plates, religious symbols, sacred objects, oversaturated colors, cartoonish, people in the text-safe zone"

run "BBQ Indonesian package" \
  --out mychef-catering-bali-bbq-package-indonesian \
  --prompt "Overhead food photograph of an Indonesian BBQ spread at a Bali villa: sate lilit on lemongrass skewers, sate ayam, grilled whole fish, jagung bakar, nasi kuning cones, sambal matah, sayur urap, gado-gado, arranged on rustic teak boards and banana leaves by the pool" \
  --negative "text, logos, watermarks, plastic containers, disposable cutlery, religious symbols, people, messy presentation, artificial colors"

run "BBQ International package" \
  --out mychef-catering-bali-bbq-package-international \
  --prompt "Overhead food photograph of an international BBQ platter at a Bali villa: grilled Australian beef tenderloin, lamb chops, king prawns, salmon fillet, gourmet salads, baked potato, garlic bread, chimichurri, served on ceramic and wood platters by the pool" \
  --negative "text, logos, watermarks, plastic containers, disposable cutlery, religious symbols, people, greasy appearance, artificial colors"

run "BBQ Surf & Turf package" \
  --out mychef-catering-bali-bbq-package-surfturf \
  --prompt "Premium surf and turf BBQ spread at a Bali villa: sliced Wagyu steak, whole lobster tail, grilled king prawns, salmon fillet, Mahi-mahi, premium sides, signature sauces, chocolate dessert, elegant black slate and ceramic presentation by candlelight" \
  --negative "text, logos, watermarks, plastic containers, disposable cutlery, religious symbols, people, overcooked appearance, artificial colors"

# ═══════════════════════════════════════════════════════════════
# 2. Buffet Catering
# ═══════════════════════════════════════════════════════════════
run "Buffet hero" \
  --out mychef-catering-bali-hero-buffet \
  --prompt "Editorial hospitality photograph of an elegant full-service buffet setup in a Bali villa garden at golden hour, long tables with crisp white linens, polished brass chafing dishes, tropical floral arrangements, Indonesian service staff in black uniforms in the background, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people blocking the text-safe zone"

run "Buffet Indonesian package" \
  --out mychef-catering-bali-buffet-package-indonesian \
  --prompt "Indonesian buffet station at a Bali villa event: nasi kuning, beef rendang, chicken satay, gado-gado, urap, lawar, assorted sambals, prawn crackers, arranged in brass chafing dishes and ceramic bowls with clean labels" \
  --negative "text, logos, watermarks, plastic containers, disposable cutlery, religious symbols, people, messy, artificial colors"

run "Buffet International package" \
  --out mychef-catering-bali-buffet-package-international \
  --prompt "International buffet spread at a Bali villa: Mediterranean grilled fish, roast chicken, Asian fusion noodles, pasta station, fresh salads, artisan bread rolls, global dishes arranged on a long linen-draped table" \
  --negative "text, logos, watermarks, plastic containers, disposable cutlery, religious symbols, people, messy, artificial colors"

run "Buffet Premium Live-Station package" \
  --out mychef-catering-bali-buffet-package-premium \
  --prompt "Premium live-station buffet at a Bali villa event: chef carving roast beef at a live station, sushi station, pasta station, seafood bar, multiple food stations under string lights, elegant evening setup" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh lighting, people crowding stations"

run "Buffet styling detail" \
  --out mychef-catering-bali-buffet-styling \
  --prompt "Detail photograph of buffet table styling in a Bali villa garden: crisp white linen skirting, tiered white serving platters, fresh tropical flowers, elegant menu cards, polished chafing dishes, soft candlelight" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, people, clutter, harsh lighting"

run "Buffet final CTA" \
  --out mychef-catering-bali-buffet-final \
  --prompt "Wide editorial photograph of a completed buffet dinner at a Bali villa at dusk, long illuminated buffet tables beside a pool, guests and staff in soft background, tropical garden, warm ambient light" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 3. Plated Dinner Catering
# ═══════════════════════════════════════════════════════════════
run "Plated hero" \
  --out mychef-catering-bali-hero-plated \
  --prompt "Elegant plated dinner service at a luxury Bali villa garden: a uniformed Indonesian waiter carefully serving a refined multi-course plate to a guest at a long candlelit dining table, white tableware, wine glasses, tropical greenery, calm left side negative space" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, people facing camera, cartoonish, text overlay"

# ═══════════════════════════════════════════════════════════════
# 4. Drop-Off Catering
# ═══════════════════════════════════════════════════════════════
run "Drop-Off hero" \
  --out mychef-catering-bali-hero-dropoff \
  --prompt "Editorial photograph of premium drop-off catering arranged on a clean Bali villa kitchen island, compostable and recyclable containers, roasted chicken, fresh salads, rice dishes, neatly labeled, natural daylight through tropical windows, no staff" \
  --negative "text, logos, watermarks, plastic cutlery, foam containers, religious symbols, people, messy, artificial lighting"

run "Drop-Off family dinner" \
  --out mychef-catering-bali-dropoff-family \
  --prompt "Family dinner drop-off spread on a Bali villa dining table: roasted chicken, grilled fish, seasonal vegetable side, potato or rice dish, fresh salad, bread, dessert, in premium recyclable containers, ready to serve" \
  --negative "text, logos, watermarks, plastic cutlery, foam containers, religious symbols, people, messy, artificial colors"

run "Drop-Off dinner party" \
  --out mychef-catering-bali-dropoff-dinner-party \
  --prompt "Dinner party drop-off for 8 guests at a Bali villa: elegant starter platter, seafood or meat main, three sides, dessert, sauces, plating instructions card visible but no readable text, arranged for self-service" \
  --negative "text, logos, watermarks, plastic cutlery, foam containers, religious symbols, people, messy, artificial colors"

run "Drop-Off grazing dinner" \
  --out mychef-catering-bali-dropoff-grazing \
  --prompt "Grazing dinner drop-off at a Bali villa poolside table: cheese and charcuterie board, vegetable dips, hot mains in oven-safe containers, fresh bread, tropical fruit, arranged family-style" \
  --negative "text, logos, watermarks, plastic cutlery, foam containers, religious symbols, people, messy, artificial colors"

# ═══════════════════════════════════════════════════════════════
# 5. Grazing Tables
# ═══════════════════════════════════════════════════════════════
run "Grazing hero" \
  --out mychef-catering-bali-hero-grazing \
  --prompt "Wide editorial photograph of a luxurious grazing table at a Bali villa event, artisan cheeses, cured meats, fresh tropical fruit, dragon fruit, mango, edible flowers, honeycomb, sourdough, crackers, styled on rustic wooden boards and linen runner, pool and greenery in background, calm left side negative space" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, people, clutter, artificial colors"

run "Grazing detail" \
  --out mychef-catering-bali-grazing-detail \
  --prompt "Close-up detail of a premium grazing board at a Bali villa: brie, aged cheddar, prosciutto di parma, salami, fresh figs, grapes, dragon fruit, honeycomb, microgreens, water crackers, arranged artfully on acacia wood" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, people, clutter, artificial colors"

# ═══════════════════════════════════════════════════════════════
# 6. Villa Catering
# ═══════════════════════════════════════════════════════════════
run "Villa hero" \
  --out mychef-catering-bali-hero-villa \
  --prompt "Editorial hospitality photograph of a long villa dining table set by a Bali infinity pool at sunset, Indonesian private chef and service team arranging family-style lunch, tropical garden, warm golden light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, people facing camera, cartoonish"

run "Villa final CTA" \
  --out mychef-catering-bali-villa-final \
  --prompt "Indonesian chef and kitchen team preparing multi-day villa catering in a modern Bali villa kitchen, fresh tropical produce on marble counters, clean professional setup, natural light" \
  --negative "text, logos, watermarks, plastic containers, religious symbols, sacred objects, people looking at camera, clutter, artificial lighting"

# ═══════════════════════════════════════════════════════════════
# 7. Corporate Catering
# ═══════════════════════════════════════════════════════════════
run "Corporate hero" \
  --out mychef-catering-bali-hero-corporate \
  --prompt "Editorial photograph of professional corporate event catering at a Bali villa, long buffet table with black-uniformed Indonesian service staff, elegant branded menu cards without readable text, business attendees networking in soft background, tropical garden, calm left side negative space" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, people blocking text-safe zone"

run "Corporate chef portrait" \
  --out mychef-catering-bali-corporate-chef \
  --prompt "Professional portrait of an Indonesian executive chef in crisp white chef coat standing in a luxury Bali villa kitchen, confident expression, arms crossed, clean modern kitchen background, soft natural light" \
  --negative "text, logos, watermarks, religious symbols, hats or headwear, messy kitchen, people besides the chef, cartoonish, artificial colors"

run "Corporate gallery conference" \
  --out mychef-catering-bali-corporate-gallery-conference \
  --prompt "Corporate conference coffee break setup at a Bali villa: pastries, croissants, fresh tropical fruit, espresso machine, coffee cups, herbal teas, neatly arranged on a white tablecloth" \
  --negative "text, logos, watermarks, plastic ware, paper cups, religious symbols, people, clutter, artificial lighting"

run "Corporate gallery plated" \
  --out mychef-catering-bali-corporate-gallery-plated \
  --prompt "Formal corporate plated dinner at a Bali villa: uniformed Indonesian waiter serving a refined course to a guest at a long table, white tableware, wine glasses, candlelight" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, people facing camera, harsh flash"

run "Corporate gallery team" \
  --out mychef-catering-bali-corporate-gallery-team \
  --prompt "Diverse business team enjoying a catered lunch at a Bali villa poolside table, Indonesian server in black uniform in soft background, relaxed professional atmosphere, tropical setting" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, people posing for camera, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 8. Retreat Catering
# ═══════════════════════════════════════════════════════════════
run "Retreat hero" \
  --out mychef-catering-bali-hero-retreat \
  --prompt "Editorial photograph of a healthy retreat breakfast spread on a long natural wooden table by a Bali villa pool at sunrise, colorful smoothie bowls, tropical fruit platter, granola, fresh coconut, herbal tea, yoga mats softly blurred in the background, calm and nourishing mood, left side negative space" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, people facing camera, harsh flash, cartoonish"

# ═══════════════════════════════════════════════════════════════
# 9. Floating Breakfast
# ═══════════════════════════════════════════════════════════════
run "Floating Breakfast hero" \
  --out mychef-catering-bali-hero-floating-breakfast \
  --prompt "Editorial photograph of a luxurious floating breakfast tray in a pristine Bali villa pool at sunrise, bamboo tray with tropical fruit, smoothie bowl, croissant, eggs, fresh juice, Balinese coffee, rose petals floating on the water, infinity pool and tropical greenery in background, calm left side negative space" \
  --negative "text, logos, watermarks, plastic containers, disposable items, religious symbols, sacred objects, people in pool, harsh shadows, cartoonish"

echo ""
echo "✅ All catering hero images generated."
