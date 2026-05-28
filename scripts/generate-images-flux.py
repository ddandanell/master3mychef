#!/usr/bin/env python3
"""
Generate city location images using Flux via fal.ai
Reads analyzed prompts and generates all 15 images
"""

import os
import sys
import json
import fal_client
from pathlib import Path
import time

# City prompts based on text analysis
CITY_PROMPTS = {
    "seminyak": "Luxury beachfront villa at golden hour sunset in Seminyak Bali, Petitenget beach visible, infinity pool reflecting orange sky, beach club atmosphere, premium modern architecture, palm trees, sophisticated coastal living, cinematic wide angle, 8K photorealistic",
    "canggu": "Modern family villa with large infinity pool in Canggu Bali, surf boards leaning against wall, jungle vegetation surrounding property, contemporary open-plan design, rice paddies in background, casual poolside aesthetic, golden afternoon light, architectural photography",
    "ubud": "Wellness retreat villa nestled in Ubud rice terraces, surrounded by lush jungle valley, yoga deck with valley views, traditional Balinese architecture mixed with modern wellness design, morning mist, terraced rice fields visible, zen atmosphere, cinematic landscape",
    "uluwatu": "Dramatic clifftop luxury villa on Uluwatu cliffs, perched high above Indian Ocean, infinity pool at cliff edge, sunset dining setup visible, limestone rock formations, world-class surf breaks below, epic ocean horizon, cinematic aerial perspective",
    "sanur": "Serene beachfront family villa at sunrise in Sanur Bali, calm turquoise ocean, traditional Balinese gates, multi-level layout, tropical garden, soft golden morning light, relaxed family retreat atmosphere, east coast tranquility, warm inviting photography",
    "nusa-dua": "Grand luxury villa estate in Nusa Dua Bali, resort-style architecture, immaculate manicured gardens, multiple pools, five-star hospitality aesthetic, professional landscaping, executive retreat atmosphere, blue sky day, ultra premium real estate photography",
    "jimbaran": "Luxury seafood villa in Jimbaran Bay at sunset, traditional fishing boats visible on calm bay waters, beachfront dining setup, fresh catch aesthetic, warm orange golden hour light, clifftop resort architecture, intimate coastal atmosphere, culinary destination vibe",
    "berawa": "Modern entertainer villa in Berawa Bali, spacious open-plan living, large pool area perfect for parties, health-conscious contemporary design, natural materials, minimalist beach club aesthetic, rice field views, afternoon architectural light, social gathering spaces",
    "pererenan": "Cutting-edge architect designed villa in remote Pererenan Bali, ultra-modern geometric design, private off-grid setting, surrounded by untouched jungle, infinity pool with privacy, contemporary luxury hideaway, dramatic architectural photography, romantic secluded atmosphere",
    "bukit": "Exclusive clifftop villa on Bukit Peninsula Bali, perched on dramatic limestone cliff, infinity pool merging with ocean horizon, surf breaks visible far below, rugged natural beauty, intimate elopement venue aesthetic, Indian Ocean panorama, epic sunset landscape photography",
    "jakarta": "Luxury penthouse interior Jakarta with cityscape views, executive dining table setup, floor-to-ceiling windows overlooking city skyline at dusk, sophisticated urban hospitality, corporate entertainment space, premium interior design, evening city lights, professional architectural photography",
    "menteng": "Historic colonial mansion in Menteng Jakarta diplomatic district, elegant traditional Indonesian architecture, lush tropical estate gardens, high security gates, formal entrance, prestigious residential area, diplomatic quarter atmosphere, afternoon natural light, refined heritage photography",
    "kemang": "Stylish modern villa courtyard in Kemang Jakarta, international expat lifestyle, Mediterranean-inspired entertaining space, family dining setup, cosmopolitan tropical garden, warm social gathering atmosphere, diverse cultural aesthetic, golden evening light, lifestyle photography",
    "scbd": "Ultra-modern executive boardroom with SCBD Jakarta skyline, floor-to-ceiling glass walls, corporate dining setup, business district towers visible, sleek contemporary interior, professional hospitality environment, evening city view, premium commercial photography",
    "pondok-indah": "Grand family estate in Pondok Indah Jakarta, expansive villa with multiple entertaining areas, traditional Indonesian luxury architecture, large dining pavilion, multi-generational living spaces, prestigious residential grounds, tropical estate gardens, elegant family home photography"
}

# Additional prompts for Events and Locations pages
SPECIAL_IMAGES = {
    "events-hero": "Elegant outdoor villa wedding reception at sunset in Bali, beautifully styled long table with candlelight, tropical flowers, professional event setup, luxury hospitality, warm golden hour lighting, premium event photography",
    "locations-water": "Dramatic Bali ocean sunset over tropical beach, luxury villa silhouette, infinity pool reflecting sky, palm trees, pristine water, vibrant orange and purple sky, peaceful tropical paradise, cinematic landscape photography 8K"
}

def generate_image(slug, prompt, output_dir):
    """Generate image using Flux via fal.ai"""
    
    print(f"🎨 Generating: {slug}")
    print(f"   Prompt: {prompt[:80]}...")
    
    try:
        result = fal_client.subscribe(
            "fal-ai/flux/schnell",
            arguments={
                "prompt": prompt,
                "image_size": "landscape_16_9",
                "num_inference_steps": 4,  # Schnell is optimized for 4 steps
                "num_images": 1,
            },
        )
        
        if 'images' in result and len(result['images']) > 0:
            image_url = result['images'][0]['url']
            
            # Download image
            import urllib.request
            
            if slug.startswith('events-') or slug.startswith('locations-'):
                filename = f"mychef-{slug}.webp"
            else:
                filename = f"mychef-location-bali-city-{slug}.webp"
            
            filepath = output_dir / filename
            
            urllib.request.urlretrieve(image_url, filepath)
            
            print(f"   ✅ Saved: {filename}")
            return filepath
        else:
            print(f"   ❌ No image in response")
            return None
            
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return None

def main():
    print("=" * 70)
    print("  myCHEF Image Generator — Flux via fal.ai")
    print("=" * 70)
    print()
    
    # Check for API key
    if not os.environ.get('FAL_KEY'):
        print("❌ FAL_KEY environment variable not set")
        print("Get your key from: https://fal.ai/dashboard/keys")
        print("Then run: export FAL_KEY='your-key'")
        sys.exit(1)
    
    output_dir = Path(__file__).parent.parent / "public" / "generated"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"📁 Output directory: {output_dir}")
    print()
    
    generated = []
    failed = []
    
    # Generate special images first (Events hero, Locations water)
    print("🎯 SPECIAL IMAGES (2):")
    print("-" * 70)
    for slug, prompt in SPECIAL_IMAGES.items():
        result = generate_image(slug, prompt, output_dir)
        if result:
            generated.append(slug)
        else:
            failed.append(slug)
        time.sleep(1)  # Rate limit
        print()
    
    # Generate city images
    print("🏙️  CITY LOCATION IMAGES (15):")
    print("-" * 70)
    for slug, prompt in CITY_PROMPTS.items():
        result = generate_image(slug, prompt, output_dir)
        if result:
            generated.append(slug)
        else:
            failed.append(slug)
        time.sleep(1)  # Rate limit
        print()
    
    print("=" * 70)
    print(f"✅ Generated: {len(generated)}/17 images")
    if failed:
        print(f"❌ Failed: {', '.join(failed)}")
    print("=" * 70)
    print()
    print("Next steps:")
    print("1. Review images in public/generated/")
    print("2. Run: npm run build")
    print("3. Test: npm run dev")
    print("4. Commit and push to deploy")

if __name__ == "__main__":
    main()
