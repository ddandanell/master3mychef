#!/usr/bin/env python3
"""
Generate critical myCHEF images using FLUX.2 Klein (cheapest, realistic)
API: Black Forest Labs FLUX.2 Klein 9B
"""

import os
import sys
import json
import requests
import time
from pathlib import Path

# BFL API Configuration
API_KEY = "bfl_Y9SgIjqyZky0QXPz2fS9Uq3DbA0tllBx"
API_ENDPOINT = "https://api.bfl.ai/v1/flux-2-klein-9b"

# Only generate the 2 most critical images first
CRITICAL_IMAGES = {
    "events-hero": {
        "filename": "mychef-events-bali-hero-events-new.webp",
        "prompt": "Elegant outdoor villa event at sunset in Bali, luxury dining table with white tablecloth and candlelight, tropical garden setting, professional catering setup, warm golden hour natural lighting, premium hospitality photography, photorealistic 8K"
    },
    "locations-water": {
        "filename": "mychef-location-bali-water-sunset.webp",
        "prompt": "Dramatic Bali ocean sunset, luxury infinity pool reflecting vibrant orange and purple sky, silhouette of tropical palm trees, calm turquoise water, pristine beach, natural tropical paradise landscape, photorealistic cinematic photography 8K"
    }
}

# City images - only generate if user confirms after seeing first 2
CITY_IMAGES = {
    "seminyak": "Luxury beachfront villa infinity pool at sunset, Seminyak Bali coastline, modern architecture, palm trees, natural golden hour lighting, photorealistic architectural photography",
    "canggu": "Modern villa with infinity pool, rice field views, Canggu Bali, contemporary design, natural tropical vegetation, afternoon natural light, photorealistic real estate photography",
    "ubud": "Wellness villa in rice terraces, Ubud jungle valley, traditional Balinese architecture, morning mist, lush greenery, natural landscape, photorealistic travel photography",
    "uluwatu": "Clifftop villa overlooking Indian Ocean, Uluwatu cliffs Bali, infinity pool at cliff edge, dramatic natural limestone formations, sunset, photorealistic aerial landscape photography",
    "sanur": "Beachfront family villa at sunrise, Sanur east coast Bali, calm turquoise ocean, tropical garden, soft morning natural light, photorealistic coastal property photography",
    "nusa-dua": "Grand luxury villa estate, Nusa Dua Bali, resort architecture, manicured gardens, multiple pools, blue sky, photorealistic premium real estate photography",
    "jimbaran": "Luxury beachfront villa, Jimbaran Bay sunset, traditional fishing boats on calm water, warm golden hour natural light, photorealistic coastal photography",
    "berawa": "Modern entertainer villa with large pool, Berawa Bali, open-plan design, rice field backdrop, natural afternoon light, photorealistic architectural photography",
    "pererenan": "Contemporary architect villa, Pererenan Bali, modern geometric design, jungle surroundings, infinity pool, dramatic natural lighting, photorealistic architectural photography",
    "bukit": "Clifftop villa on Bukit Peninsula, dramatic limestone cliff overlooking Indian Ocean, infinity pool, surf breaks below, sunset, photorealistic landscape photography",
    "jakarta": "Luxury penthouse interior, Jakarta cityscape through floor-to-ceiling windows, city skyline at dusk, modern interior design, evening city lights, photorealistic architectural photography",
    "menteng": "Historic colonial mansion, Menteng Jakarta, elegant Indonesian architecture, tropical estate garden, afternoon natural light, photorealistic heritage property photography",
    "kemang": "Modern villa courtyard, Kemang Jakarta, contemporary entertaining space, tropical garden, warm evening natural light, photorealistic lifestyle property photography",
    "scbd": "Modern executive boardroom, SCBD Jakarta skyline visible through glass walls, business district towers, evening city view, photorealistic commercial interior photography",
    "pondok-indah": "Grand family estate villa, Pondok Indah Jakarta, traditional Indonesian architecture, large entertaining areas, tropical gardens, photorealistic luxury property photography"
}

def generate_image(slug, prompt, filename, output_dir):
    """Generate image using FLUX.2 Klein (cheapest option)"""
    
    print(f"🎨 Generating: {slug}")
    print(f"   Prompt: {prompt[:80]}...")
    
    try:
        # Generate image
        response = requests.post(
            API_ENDPOINT,
            headers={
                "Content-Type": "application/json",
                "X-Key": API_KEY
            },
            json={
                "prompt": prompt,
                "width": 1344,  # 16:9 landscape
                "height": 768,
                "steps": 8,  # Klein default
                "prompt_upsampling": False,  # Save credits
                "safety_tolerance": 2  # Standard safety
            }
        )
        
        if response.status_code != 200:
            print(f"   ❌ API Error: {response.status_code}")
            print(f"   Response: {response.text}")
            return None
        
        result = response.json()
        
        # Check if we got a task ID (async generation)
        if 'id' in result:
            task_id = result['id']
            print(f"   ⏳ Task ID: {task_id}")
            
            # Poll for result
            max_attempts = 60
            for attempt in range(max_attempts):
                time.sleep(2)
                
                status_response = requests.get(
                    f"https://api.bfl.ai/v1/get_result?id={task_id}",
                    headers={"X-Key": API_KEY}
                )
                
                if status_response.status_code == 200:
                    status_result = status_response.json()
                    
                    if status_result.get('status') == 'Ready':
                        image_url = status_result.get('result', {}).get('sample')
                        if image_url:
                            # Download image
                            img_response = requests.get(image_url)
                            if img_response.status_code == 200:
                                filepath = output_dir / filename
                                with open(filepath, 'wb') as f:
                                    f.write(img_response.content)
                                
                                print(f"   ✅ Saved: {filename}")
                                return filepath
                        break
                    elif status_result.get('status') == 'Error':
                        print(f"   ❌ Generation failed: {status_result.get('error')}")
                        return None
                    else:
                        print(f"   ⏳ Status: {status_result.get('status')}... ({attempt+1}/{max_attempts})")
                        
            print(f"   ❌ Timeout waiting for image")
            return None
        
        print(f"   ❌ Unexpected response format")
        return None
        
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return None

def main():
    print("=" * 70)
    print("  myCHEF Image Generator — FLUX.2 Klein (Realistic)")
    print("  Credits remaining: 248.8 (~165 images)")
    print("=" * 70)
    print()
    
    output_dir = Path(__file__).parent.parent / "public" / "generated"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"📁 Output: {output_dir}")
    print()
    
    generated = []
    failed = []
    
    # Generate only critical images first
    print("🎯 CRITICAL IMAGES (2 - Events & Locations heroes):")
    print("-" * 70)
    
    for slug, data in CRITICAL_IMAGES.items():
        result = generate_image(slug, data["prompt"], data["filename"], output_dir)
        if result:
            generated.append(slug)
        else:
            failed.append(slug)
        time.sleep(2)  # Rate limit between requests
        print()
    
    print("=" * 70)
    print(f"✅ Generated: {len(generated)}/2 critical images")
    if failed:
        print(f"❌ Failed: {', '.join(failed)}")
    
    # Estimate credits used
    credits_used = len(generated) * 1.5  # ~1.5 credits per Klein image
    print(f"💳 Credits used: ~{credits_used:.1f}")
    print(f"💳 Credits remaining: ~{248.8 - credits_used:.1f}")
    print("=" * 70)
    print()
    
    if len(generated) > 0:
        print("✅ Critical images complete!")
        print()
        print("Next steps:")
        print("1. Review images in public/generated/")
        print("2. If satisfied, update EventsMainPage.tsx and LocationsHubPage.tsx")
        print("3. Run: npm run build && npm run dev")
        print()
        print("To generate city images (15 more):")
        print("   Uncomment CITY_IMAGES section in script")
        print("   Cost: ~22.5 credits for all 15 cities")

if __name__ == "__main__":
    main()
