#!/usr/bin/env bash
# Generate all hero, gallery and CTA images for the 11 In-Villa Service and Staffing sub-pages refresh.
# Usage: OPENAI_API_KEY=... bash scripts/generate-staffing-heroes.sh

set -euo pipefail

cd "$(dirname "$0")/.."

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "OPENAI_API_KEY is not set"
  exit 1
fi

FAILED=0
FAILED_LIST=""

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
  local attempt=1
  local max_attempts=3
  while [ $attempt -le $max_attempts ]; do
    if npx tsx scripts/generate-openai-hero.ts "$@" --width 1536 --quality 82; then
      return 0
    fi
    echo "   ⚠️ attempt $attempt failed; retrying..."
    attempt=$((attempt + 1))
    sleep 5
  done
  echo "   ✗ $desc failed after $max_attempts attempts"
  FAILED=$((FAILED + 1))
  FAILED_LIST="$FAILED_LIST\n  - $desc"
}

# Shared negative prompt base is handled in generate-openai-hero.ts, but we add page-specific extras.

# ═══════════════════════════════════════════════════════════════
# IN-VILLA SERVICE
# ═══════════════════════════════════════════════════════════════

# ── 1. WAITERS — /in-villa-service/waiters ─────────────────────
# Sold: hourly professional waiter service for villa dinners, weddings and events
# Customer: villa renters, wedding planners, event hosts
# Setting: open-air villa terrace at dusk, long linen table, tropical greenery, pool in background
# Mood: refined, calm, attentive, unobtrusive
# Key elements: Indonesian waiter in black trousers, white shirt, black apron and white gloves, serving a plated course; candles, crystal, polished service
# Text-safe zone: calm darker left side
# Why it differs: formal plated-service focus, no bar or kitchen
run "Waiters hero" \
  --out mychef-service-bali-hero-waiters \
  --prompt "Editorial hospitality photograph of an Indonesian waiter in a crisp white shirt, black apron and white gloves serving a plated course at an elegant Bali villa dinner, long linen-draped table with candles and wine glasses, tropical garden and infinity pool softly blurred in background, warm dusk light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated, people blocking the text-safe zone"

run "Waiters gallery 1" \
  --out mychef-service-bali-waiters-gallery-1 \
  --prompt "Indonesian waiter in black and white uniform carefully placing a fine dining plate on a candlelit Bali villa table, elegant glassware and tropical floral centrepiece, warm evening light, refined service moment"

run "Waiters gallery 2" \
  --out mychef-service-bali-waiters-gallery-2 \
  --prompt "Two Indonesian waiters carrying champagne flutes and canapé trays across a Bali villa terrace at sunset, guests seated in soft background, pool and palms visible, professional and calm"

run "Waiters gallery 3" \
  --out mychef-service-bali-waiters-gallery-3 \
  --prompt "Indonesian waiter pouring red wine into a crystal glass at an intimate Bali villa dinner, candlelight, tropical garden in background, attentive and discreet service"

run "Waiters gallery 4" \
  --out mychef-service-bali-waiters-gallery-4 \
  --prompt "Indonesian waiters setting an elegant long dining table on a Bali villa terrace before service, white linens, polished cutlery, candles and tropical greenery, soft golden-hour light"

run "Waiters CTA" \
  --out mychef-service-bali-waiters-cta \
  --prompt "Professional Indonesian service team lined up beside a beautifully set long table at a Bali villa at dusk, white-gloved waiters in black and white uniforms, candles lit, tropical garden, calm and confident atmosphere"

# ── 2. BUTLERS — /in-villa-service/butlers ─────────────────────
# Sold: discreet villa butler service for arrivals, daily stays and events
# Customer: HNW villa guests, extended-stay families, luxury event hosts
# Setting: villa entrance or terrace with tropical garden and private villa architecture
# Mood: understated luxury, anticipation, discretion
# Key elements: Indonesian butler in crisp uniform greeting or arranging a welcome amenity
# Text-safe zone: calm left side
# Why it differs: residential welcome and household management, not plated service
run "Butlers hero" \
  --out mychef-service-bali-hero-butlers \
  --prompt "Editorial hospitality photograph of an Indonesian butler in a crisp dark uniform welcoming guests at the entrance of a luxury Bali villa, lush tropical garden and stone pathway, warm afternoon light, silver tray with cool towels and welcome drinks, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Butlers gallery 1" \
  --out mychef-service-bali-butlers-gallery-1 \
  --prompt "Indonesian butler in formal uniform serving breakfast on a private Bali villa terrace, tropical garden and pool in background, elegant tray with pastries and fresh juice, morning light"

run "Butlers gallery 2" \
  --out mychef-service-bali-butlers-gallery-2 \
  --prompt "Indonesian butler welcoming guests at the carved wooden entrance of a luxury Bali villa, warm smile, luggage and tropical plants visible, professional and inviting"

run "Butlers gallery 3" \
  --out mychef-service-bali-butlers-gallery-3 \
  --prompt "Indonesian butler attending to guests by a Bali villa pool, offering chilled drinks from a polished tray, sun loungers and tropical greenery, relaxed luxury"

run "Butlers gallery 4" \
  --out mychef-service-bali-butlers-gallery-4 \
  --prompt "Indonesian butler arranging an elegant welcome amenity on a marble console inside a Bali villa, fresh orchids, folded napkins, refined details, soft natural light"

run "Butlers CTA" \
  --out mychef-service-bali-butlers-cta \
  --prompt "Discreet Indonesian butler standing beside a beautifully appointed Bali villa living area, tropical garden visible through open doors, polished service tray, calm and luxurious atmosphere"

# ── 3. BARTENDERS — /in-villa-service/bartenders ───────────────
# Sold: professional bartender hire with full bar setup
# Customer: villa party hosts, weddings, corporate events
# Setting: poolside or terrace bar at golden hour
# Mood: energetic but polished, social, craft
# Key elements: Indonesian bartender shaking or pouring cocktail, copper tools, fresh garnishes
# Text-safe zone: calm left side
# Why it differs: craft-cocktail bar focus, not floor service or class
run "Bartenders hero" \
  --out mychef-service-bali-hero-bartenders \
  --prompt "Editorial hospitality photograph of an Indonesian bartender shaking a copper cocktail shaker at a premium Bali villa poolside bar, fresh tropical garnishes, crystal glassware lined up, golden-hour light, palm trees and infinity pool in background, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated, bartender looking at camera"

run "Bartenders gallery 1" \
  --out mychef-service-bali-bartenders-gallery-1 \
  --prompt "Indonesian bartender pouring a craft cocktail from a shaker into a chilled glass at a Bali villa party, citrus and herb garnishes, bar tools, warm evening light"

run "Bartenders gallery 2" \
  --out mychef-service-bali-bartenders-gallery-2 \
  --prompt "Indonesian bartender shaking drinks at a poolside villa bar at dusk, string lights and tropical plants, ice and glassware arranged, lively but refined mood"

run "Bartenders gallery 3" \
  --out mychef-service-bali-bartenders-gallery-3 \
  --prompt "Indonesian bartender serving cocktails to guests at a Bali villa event, elegant glassware, tropical garnishes, guests in soft background, warm ambient light"

run "Bartenders gallery 4" \
  --out mychef-service-bali-bartenders-gallery-4 \
  --prompt "Full premium bar setup at a Bali villa at golden hour, copper tools, fresh fruits, herbs, bottles and glassware, no people, tropical backdrop, craft cocktail atmosphere"

run "Bartenders CTA" \
  --out mychef-service-bali-bartenders-cta \
  --prompt "Indonesian bartender working at an illuminated villa bar at night in Bali, cocktail shaker in motion, tropical garnishes and glassware, warm string lights and pool reflections, inviting social atmosphere"

# ── 4. MIXOLOGY — /in-villa-service/mixology ───────────────────
# Sold: signature cocktail experiences and masterclasses
# Customer: intimate dinners, birthdays, team building, villa experiences
# Setting: villa bar or dining table with cocktail ingredients and tasting glasses
# Mood: creative, interactive, premium, educational
# Key elements: Indonesian mixologist garnishing a signature drink or leading a tasting
# Text-safe zone: calm left side
# Why it differs: experience and class focused, shows guest interaction and craft ingredients
run "Mixology hero" \
  --out mychef-service-bali-hero-mixology \
  --prompt "Editorial hospitality photograph of an Indonesian mixologist garnishing a vibrant signature cocktail at a Bali villa bar, fresh botanicals, syrups and bar tools on marble, small group of guests watching in soft background, warm golden light, tropical garden, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Mixology gallery 1" \
  --out mychef-service-bali-mixology-gallery-1 \
  --prompt "Indonesian mixologist shaking a cocktail at a Bali villa bar at golden hour, colourful ingredients, copper tools, tropical garnishes, warm light"

run "Mixology gallery 2" \
  --out mychef-service-bali-mixology-gallery-2 \
  --prompt "Guests enjoying cocktails by a Bali villa pool while an Indonesian server presents a tray of craft drinks, relaxed luxury, tropical setting"

run "Mixology gallery 3" \
  --out mychef-service-bali-mixology-gallery-3 \
  --prompt "Indonesian mixologist leading a hands-on cocktail-shaking class for guests at a Bali villa, laughing group around a bar counter, fresh ingredients and tools, daytime"

run "Mixology gallery 4" \
  --out mychef-service-bali-mixology-gallery-4 \
  --prompt "Balinese bartender garnishing signature butterfly-pea and tropical cocktails at a Bali villa bar, colourful layered drinks, fresh herbs and flowers, elegant presentation"

run "Mixology CTA" \
  --out mychef-service-bali-mixology-cta \
  --prompt "Close-up of Indonesian mixologist hands garnishing a craft cocktail with tropical flowers and herbs at a Bali villa bar, elegant glassware, soft ambient light, creative and inviting"

# ── 5. SOMMELIER — /in-villa-service/sommelier ─────────────────
# Sold: wine pairings and tableside sommelier service
# Customer: fine dining hosts, anniversaries, weddings, corporate dinners
# Setting: candlelit villa dining table, wine glasses, decanter, plated course
# Mood: elegant, contemplative, sensory, refined
# Key elements: Indonesian sommelier pouring wine tableside
# Text-safe zone: calm left side darker
# Why it differs: wine-focused, intimate and slower than bar/cocktail pages
run "Sommelier hero" \
  --out mychef-service-bali-hero-sommelier \
  --prompt "Editorial hospitality photograph of an Indonesian sommelier pouring red wine into an elegant glass at a candlelit Bali villa dinner table, decanter and wine bottle visible, refined plated course, tropical garden softly visible through open pavilion, warm intimate light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic cups, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated, sommelier looking at camera"

run "Sommelier gallery 1" \
  --out mychef-service-bali-sommelier-gallery-1 \
  --prompt "Indonesian sommelier presenting a wine bottle to guests at a Bali villa dinner, elegant table setting, candlelight, attentive and professional"

run "Sommelier gallery 2" \
  --out mychef-service-bali-sommelier-gallery-2 \
  --prompt "Indonesian sommelier pouring wine at a candlelit Bali villa table, crystal glassware, soft focus on guests and tropical greenery, refined atmosphere"

run "Sommelier gallery 3" \
  --out mychef-service-bali-sommelier-gallery-3 \
  --prompt "Indonesian sommelier decanting wine at a Bali villa, elegant decanter and bottle, warm ambient light, tropical garden in background"

run "Sommelier gallery 4" \
  --out mychef-service-bali-sommelier-gallery-4 \
  --prompt "Indonesian sommelier guiding a wine tasting on a Bali villa terrace, several glasses of white and red wine, tropical greenery, relaxed educational mood"

run "Sommelier CTA" \
  --out mychef-service-bali-sommelier-cta \
  --prompt "Elegant wine glasses and decanter on a candlelit Bali villa dining table, soft bokeh of tropical garden, no people, intimate and luxurious wine pairing atmosphere"

# ── 6. HOSTS — /in-villa-service/host-hostess ──────────────────
# Sold: event host/hostess hire for guest greeting and flow
# Customer: wedding planners, corporate event managers, villa party hosts
# Setting: villa entrance or reception setup
# Mood: warm, welcoming, organized, professional
# Key elements: Indonesian host/hostess greeting arriving guests
# Text-safe zone: calm left side
# Why it differs: arrival and reception focused, not service or bar
run "Hosts hero" \
  --out mychef-service-bali-hero-hosts \
  --prompt "Editorial hospitality photograph of an Indonesian hostess in elegant black attire warmly greeting arriving guests at a luxury Bali villa entrance, tropical garden and soft string lights, welcome table with flowers in background, warm evening light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated, people blocking the text-safe zone"

run "Hosts gallery 1" \
  --out mychef-service-bali-hosts-gallery-1 \
  --prompt "Indonesian hostess welcoming guests at a Bali villa event entrance, elegant attire, warm smile, tropical plants and candles, professional and inviting"

run "Hosts gallery 2" \
  --out mychef-service-bali-hosts-gallery-2 \
  --prompt "Indonesian event host coordinating with staff at a Bali villa dinner party, clipboard in hand, elegant setup in background, calm leadership"

run "Hosts gallery 3" \
  --out mychef-service-bali-hosts-gallery-3 \
  --prompt "Indonesian hostess guiding guests to their seats at a Bali villa celebration, elegant dress, warm lighting, tropical garden visible"

run "Hosts gallery 4" \
  --out mychef-service-bali-hosts-gallery-4 \
  --prompt "Indonesian host and hostess greeting arriving guests at a Bali villa entrance, professional attire, warm evening ambience, tropical landscaping"

run "Hosts CTA" \
  --out mychef-service-bali-hosts-cta \
  --prompt "Team of Indonesian hosts and hostesses in elegant black attire standing at a Bali villa entrance ready to welcome guests, tropical garden and soft lights, polished and warm atmosphere"

# ═══════════════════════════════════════════════════════════════
# STAFFING
# ═══════════════════════════════════════════════════════════════

# ── 7. CHEF PLACEMENT — /staffing/private-chef-placement ───────
# Sold: long-term private chef recruitment and placement
# Customer: villa owners, estate managers, families seeking full-time chefs
# Setting: professional villa kitchen or chef presenting plated dish
# Mood: professional, trustworthy, culinary excellence
# Key elements: Indonesian chef in chef whites plating or prepping
# Text-safe zone: calm left side
# Why it differs: recruitment/career focus, kitchen environment
run "Chef placement hero" \
  --out mychef-staffing-bali-hero-chef-placement \
  --prompt "Editorial hospitality photograph of an Indonesian private chef in crisp white chef coat carefully plating a refined dish in a modern luxury Bali villa kitchen, stainless steel counters, fresh ingredients, tropical greenery visible through window, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated, chef looking at camera"

run "Chef placement CTA" \
  --out mychef-staffing-bali-chef-placement-cta \
  --prompt "Indonesian private chef working confidently in a bright modern Bali villa kitchen, fresh produce and professional equipment, clean and organized space, warm natural light"

# ── 8. LIVE-IN CHEF — /staffing/live-in-chef ───────────────────
# Sold: full-time live-in chef for villas and families
# Customer: families, full-time residents, luxury estates
# Setting: bright villa kitchen with family-style warmth
# Mood: reliable, family-oriented, daily excellence
# Key elements: Indonesian chef preparing fresh meal in morning light
# Text-safe zone: calm left side
# Why it differs: domestic live-in context, daily life rather than event
run "Live-in chef hero" \
  --out mychef-staffing-bali-hero-live-in-chef \
  --prompt "Editorial hospitality photograph of an Indonesian live-in chef preparing a healthy family breakfast in a bright modern Bali villa kitchen, fresh tropical fruit, eggs and pastries on marble counter, warm morning light, tropical garden visible, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Live-in chef CTA" \
  --out mychef-staffing-bali-live-in-chef-cta \
  --prompt "Indonesian chef arranging a beautiful family breakfast spread in a Bali villa kitchen, fresh tropical fruit, pastries and juice, bright morning light, clean and welcoming"

# ── 9. VILLA STAFF — /staffing/villa-staff ─────────────────────
# Sold: recruitment of villa managers, housekeepers, gardeners, pool staff, security
# Customer: villa owners, property managers, rental operators
# Setting: immaculate villa exterior/terrace with staff maintaining grounds
# Mood: operational excellence, serene property, teamwork
# Key elements: Indonesian villa manager or housekeeper in crisp uniform, tropical garden/pool
# Text-safe zone: calm left side
# Why it differs: property operations focus, not kitchen
run "Villa staff hero" \
  --out mychef-staffing-bali-hero-villa-staff \
  --prompt "Editorial hospitality photograph of an Indonesian villa manager in crisp uniform reviewing a tablet while walking through a pristine Bali villa garden, infinity pool and tropical landscaping, housekeeper arranging towels in soft background, calm morning light, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Villa staff CTA" \
  --out mychef-staffing-bali-villa-staff-cta \
  --prompt "Indonesian villa staff team — manager, housekeeper and gardener — standing together in a beautifully maintained Bali villa garden, tropical pool and flowers, professional and proud"

# ── 10. HOUSEHOLD STAFF — /staffing/household-staff ────────────
# Sold: recruitment of housekeepers, nannies, drivers, estate managers
# Customer: private residence owners, families, expats
# Setting: elegant private residence interior or bedroom
# Mood: trustworthy, domestic, calm, professional
# Key elements: Indonesian housekeeper arranging fresh linens
# Text-safe zone: calm left side
# Why it differs: private home/residence focus rather than rental villa
run "Household staff hero" \
  --out mychef-staffing-bali-hero-household-staff \
  --prompt "Editorial hospitality photograph of an Indonesian housekeeper in crisp uniform arranging fresh white linens on a beautifully made bed in a luxury Bali villa bedroom, tropical flowers on nightstand, soft natural light through sheer curtains, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Household staff CTA" \
  --out mychef-staffing-bali-household-staff-cta \
  --prompt "Indonesian housekeeper placing fresh towels in an elegant Bali villa bathroom, white marble, tropical orchids, clean and serene domestic atmosphere"

# ── 11. FOR VILLA MANAGERS — /staffing/for-villa-managers ──────
# Sold: staffing partnership for villa management companies and portfolios
# Customer: villa management companies, portfolio managers, estate directors
# Setting: luxury villa with professional hospitality team briefing
# Mood: business partnership, scale, professionalism, reliability
# Key elements: Indonesian villa manager with tablet/clipboard, staff team in background
# Text-safe zone: calm left side
# Why it differs: B2B partnership feel, scale and portfolio management
run "Villa managers hero" \
  --out mychef-staffing-bali-hero-villa-managers \
  --prompt "Editorial hospitality photograph of an Indonesian villa manager in business-casual attire holding a tablet and briefing a small hospitality team in a luxury Bali villa living area, staff in crisp uniforms listening attentively, tropical garden and pool visible through open doors, calm left side negative space for text overlay" \
  --negative "text, logos, watermarks, plastic ware, paper plates, religious symbols, sacred objects, harsh flash, cartoonish, oversaturated"

run "Villa managers CTA" \
  --out mychef-staffing-bali-villa-managers-cta \
  --prompt "Indonesian hospitality team — villa manager, chef and service staff — gathered for a briefing in a luxury Bali villa kitchen, professional and collaborative atmosphere, tropical villa interior"

echo ""
if [ $FAILED -eq 0 ]; then
  echo "✅ All in-villa service and staffing images generated."
else
  echo "⚠️ Image generation finished with $FAILED failure(s):"
  printf "%b\n" "$FAILED_LIST"
  exit 1
fi
