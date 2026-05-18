#!/usr/bin/env python3
"""
Generate unique city location images using fal.ai Nano Banana 2
Run with: FAL_KEY='your-key' python3 scripts/generate-city-images.py
"""

import os
import sys
import json
import requests
from pathlib import Path

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

def generate_image(city_slug, prompt, seed):
    """Generate image using fal.ai Nano Banana 2 (cheapest high-quality model)"""
    
    api_key = os.environ.get('FAL_KEY')
    if not api_key:
        print("❌ FAL_KEY environment variable not set")
        print("Get your key from: https://fal.ai/dashboard/keys")
        sys.exit(1)
    
    print(f"🎨 Generating image for {city_slug}...")
    
    # Use fal.ai Nano Banana 2 - cheapest high-quality option
    response = requests.post(
        "https://queue.fal.run/fal-ai/nano-banana-2",
        headers={
            "Authorization": f"Key {api_key}",
            "Content-Type": "application/json"
        },
        json={
            "prompt": prompt,
            "image_size": "landscape_16_9",
            "num_images": 1,
            "guidance_scale": 7.5,
            "seed": seed
        }
    )
    
    if response.status_code != 200:
        print(f"❌ Error: {response.status_code}")
        print(response.text)
        return None
    
    result = response.json()
    
    # Poll for result if async
    if 'request_id' in result:
        request_id = result['request_id']
        print(f"   Waiting for generation (request_id: {request_id})...")
        
        while True:
            status_response = requests.get(
                f"https://queue.fal.run/fal-ai/nano-banana-2/requests/{request_id}",
                headers={"Authorization": f"Key {api_key}"}
            )
            
            status = status_response.json()
            
            if status.get('status') == 'COMPLETED':
                result = status
                break
            elif status.get('status') == 'FAILED':
                print(f"❌ Generation failed: {status.get('error')}")
                return None
            
            import time
            time.sleep(2)
    
    # Download image
    if 'images' in result and len(result['images']) > 0:
        image_url = result['images'][0]['url']
        
        # Download to public/generated/
        image_response = requests.get(image_url)
        if image_response.status_code == 200:
            filename = f"mychef-location-bali-city-{city_slug}.webp"
            filepath = Path(__file__).parent.parent / "public" / "generated" / filename
            
            with open(filepath, 'wb') as f:
                f.write(image_response.content)
            
            print(f"   ✅ Saved to {filename}")
            return filepath
    
    return None

def main():
    print("=" * 60)
    print("  myCHEF City Location Image Generator")
    print("  Using fal.ai Nano Banana 2 (cost-optimized)")
    print("=" * 60)
    print()
    
    generated = []
    failed = []
    
    for idx, (city_slug, prompt) in enumerate(CITY_PROMPTS.items(), start=42):
        try:
            result = generate_image(city_slug, prompt, seed=idx)
            if result:
                generated.append(city_slug)
            else:
                failed.append(city_slug)
        except Exception as e:
            print(f"   ❌ Exception: {e}")
            failed.append(city_slug)
        
        print()
    
    print("=" * 60)
    print(f"✅ Generated: {len(generated)}/15 images")
    if failed:
        print(f"❌ Failed: {', '.join(failed)}")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Review images in public/generated/")
    print("2. Run: npm run build")
    print("3. Git commit and push to deploy")

if __name__ == "__main__":
    main()
