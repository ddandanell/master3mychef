#!/bin/bash
# BFL API Image Generation for myCHEF.id
API_KEY="bfl_H4v1JNCMW8IT3jWAc5Hua9cus5FXsRS4"
OUTPUT_DIR="public/generated"
mkdir -p "$OUTPUT_DIR"

# Function to generate image via BFL API
generate_image() {
    local prompt="$1"
    local filename="$2"
    local aspect_ratio="${3:-16:9}"
    
    echo "Generating: $filename..."
    
    # Submit request
    response=$(curl -s -X POST https://api.bfl.ai/v1/flux-2-klein-9b \
        -H "Content-Type: application/json" \
        -d "{
            \"prompt\": \"$prompt\",
            \"width\": 1440,
            \"height\": 810,
            \"seed\": null,
            \"safety_tolerance\": 2
        }")
    
    # Extract request ID
    request_id=$(echo "$response" | grep -o '"id":"[^"]*"' | cut -d'"' -f4)
    
    if [ -z "$request_id" ]; then
        echo "  ERROR: No request ID received for $filename"
        echo "  Response: $response"
        return 1
    fi
    
    echo "  Request ID: $request_id"
    
    # Poll for result
    for i in {1..30}; do
        sleep 2
        result=$(curl -s "https://api.bfl.ai/v1/get_result?id=$request_id")
        status=$(echo "$result" | grep -o '"status":"[^"]*"' | cut -d'"' -f4)
        
        if [ "$status" = "Ready" ]; then
            image_url=$(echo "$result" | grep -o '"sample":"[^"]*"' | cut -d'"' -f4)
            if [ -n "$image_url" ]; then
                curl -s -L "$image_url" -o "$OUTPUT_DIR/$filename"
                echo "  ✅ Saved: $OUTPUT_DIR/$filename"
                return 0
            fi
        elif [ "$status" = "Error" ]; then
            echo "  ERROR: Generation failed for $filename"
            return 1
        fi
        
        echo "  Polling... ($status)"
    done
    
    echo "  ERROR: Timeout waiting for $filename"
    return 1
}

# HERO IMAGES NEEDED (missing/bad placeholders)

# 1. Buffet Catering Hero - NO IMAGE (white background)
generate_image \
    "Elegant buffet catering setup at a luxury Bali villa, long table with chafing dishes, fresh Indonesian and international food, tropical flowers, candlelight, warm golden hour lighting, professional food photography, cinematic moody atmosphere, high-end event catering" \
    "hero-buffet-catering.webp"

# 2. Drop-Off Catering Hero - BROWN CHECKERBOARD (awful)
generate_image \
    "Premium drop-off catering delivery at a Bali villa, elegant food containers being unpacked on a villa kitchen counter, chef-prepared meals in sustainable packaging, tropical villa interior, warm natural lighting, food photography, lifestyle shot, no people visible" \
    "hero-dropoff-catering.webp"

# 3. Babi Guling Hero - OLIVE SOLID COLOR
generate_image \
    "Traditional Balinese Babi Guling whole roasted suckling pig on a wooden carving board, crispy golden skin, traditional ceremonial setup with banana leaves, sambal matah, lawar, nasi kuning, frangipani flowers, temple-gold accents, warm candlelight, authentic Balinese feast, professional food photography" \
    "hero-babiguling-catering.webp"

# 4. Floating Breakfast Hero - BLUE-GRAY SOLID
generate_image \
    "Stunning floating breakfast bamboo tray in a crystal clear Bali villa pool at sunrise, tropical fruits, croissants, eggs benedict, fresh juice, frangipani flowers, orchids, mist on water, golden morning light, honeymoon luxury, Instagram-worthy, professional travel photography" \
    "hero-floating-breakfast.webp"

# 5. Corporate Events Hero - needs distinct from weddings
generate_image \
    "Professional corporate event setup at a Bali villa, business people networking at an outdoor cocktail reception, branded signage, modern AV equipment, elegant canapés and drinks, tropical garden setting, dusk lighting, professional event photography, B2B corporate atmosphere" \
    "hero-corporate-events.webp"

# 6. Retreats Hero
generate_image \
    "Wellness retreat group dining at a Bali villa, long wooden table with healthy plant-forward food, yoga mats in background, tropical garden, morning light, fresh smoothie bowls, colorful salads, peaceful atmosphere, professional lifestyle photography" \
    "hero-retreats.webp"

# 7. Baby Showers Hero
generate_image \
    "Elegant baby shower brunch setup at a Bali villa, pastel decor, grazing table with sweet and savory items, mocktail bar with pink drinks, floral arrangements, soft natural light, celebration atmosphere, professional event photography" \
    "hero-baby-showers.webp"

# 8. Villa Parties Hero
generate_image \
    "Vibrant villa party at sunset in Bali, bartender making cocktails, guests mingling by the pool, string lights, tropical decor, golden hour, DJ setup visible, celebratory atmosphere, professional event photography, energetic and fun" \
    "hero-villa-parties.webp"

echo ""
echo "All hero images generated!"
