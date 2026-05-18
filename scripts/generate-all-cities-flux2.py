#!/usr/bin/env python3
"""
Generate all 15 city location images using FLUX.2 Klein
Realistic, photographic style matching existing myCHEF images
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

# All 15 city images with realistic prompts
CITY_IMAGES = {
    "seminyak": "Luxury beachfront villa with infinity pool at sunset, Seminyak Bali coastline visible, modern contemporary architecture, palm trees silhouettes, warm golden hour natural lighting, pristine turquoise water, photorealistic architectural photography 8K",
    
    "canggu": "Modern luxury villa with large infinity pool, Canggu Bali, lush green rice field views in background, contemporary open-plan design, natural tropical vegetation, warm afternoon natural sunlight, photorealistic real estate photography 8K",
    
    "ubud": "Elegant wellness villa nestled in terraced rice fields, Ubud jungle valley Bali, traditional Balinese architecture with modern elements, morning mist over valley, lush tropical greenery, peaceful natural landscape, photorealistic travel photography 8K",
    
    "uluwatu": "Dramatic clifftop luxury villa overlooking Indian Ocean, Uluwatu limestone cliffs Bali, infinity pool at dramatic cliff edge, natural rock formations, surf breaks far below, vibrant sunset colors, photorealistic aerial landscape photography 8K",
    
    "sanur": "Serene beachfront family villa at sunrise, Sanur east coast Bali, calm turquoise ocean water, traditional Balinese entrance gates, tropical garden with natural vegetation, soft golden morning natural light, photorealistic coastal property photography 8K",
    
    "nusa-dua": "Grand luxury villa estate with resort architecture, Nusa Dua Bali, perfectly manicured tropical gardens, multiple swimming pools, clear blue sky, professional landscaping, five-star hospitality aesthetic, photorealistic premium real estate photography 8K",
    
    "jimbaran": "Luxury beachfront villa dining area, Jimbaran Bay at sunset, traditional Indonesian fishing boats on calm water in background, warm orange golden hour natural light, coastal resort architecture, photorealistic coastal lifestyle photography 8K",
    
    "berawa": "Modern contemporary entertainer villa with large infinity pool, Berawa Bali, spacious open-plan living areas, minimalist beach club aesthetic, rice field landscape views, warm afternoon natural lighting, photorealistic architectural photography 8K",
    
    "pererenan": "Striking contemporary architect-designed villa, Pererenan Bali, ultra-modern geometric design, surrounded by untouched jungle vegetation, private infinity pool, dramatic natural architectural lighting, photorealistic modern architecture photography 8K",
    
    "bukit": "Exclusive clifftop luxury villa on Bukit Peninsula, dramatic limestone cliff overlooking endless Indian Ocean, infinity pool merging with ocean horizon, surf breaks visible far below, epic sunset natural colors, photorealistic landscape photography 8K",
    
    "jakarta": "Luxury modern penthouse interior with floor-to-ceiling glass windows, Jakarta cityscape skyline view at dusk, elegant dining table setup, sophisticated urban interior design, evening city lights below, photorealistic architectural interior photography 8K",
    
    "menteng": "Historic colonial mansion estate, Menteng diplomatic district Jakarta, elegant traditional Indonesian architecture, lush tropical estate gardens, formal entrance with high gates, afternoon warm natural light, photorealistic heritage property photography 8K",
    
    "kemang": "Stylish modern villa with courtyard entertaining area, Kemang Jakarta, contemporary Mediterranean-inspired design, tropical garden setting, family dining space, warm golden evening natural light, photorealistic lifestyle property photography 8K",
    
    "scbd": "Modern executive boardroom with dramatic SCBD Jakarta skyline, floor-to-ceiling glass walls, business district towers visible through windows, sleek contemporary interior, evening city view with lights, photorealistic commercial interior photography 8K",
    
    "pondok-indah": "Grand traditional family estate villa, Pondok Indah Jakarta, elegant Indonesian luxury architecture, expansive entertaining areas, large dining pavilion, tropical estate gardens, prestigious residential setting, photorealistic luxury property photography 8K"
}

def generate_image(slug, prompt, output_dir):
    """Generate image using FLUX.2 Klein"""
    
    filename = f"mychef-location-bali-city-{slug}.webp"
    
    print(f"🎨 {slug:15s} | {prompt[:60]}...")
    
    try:
        response = requests.post(
            API_ENDPOINT,
            headers={
                "Content-Type": "application/json",
                "X-Key": API_KEY
            },
            json={
                "prompt": prompt,
                "width": 1344,
                "height": 768,
                "steps": 8,
                "prompt_upsampling": False,
                "safety_tolerance": 2
            }
        )
        
        if response.status_code != 200:
            print(f"   ❌ API Error: {response.status_code}")
            return None
        
        result = response.json()
        task_id = result.get('id')
        
        if not task_id:
            print(f"   ❌ No task ID")
            return None
        
        # Poll for result
        for attempt in range(60):
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
                        img_response = requests.get(image_url)
                        if img_response.status_code == 200:
                            filepath = output_dir / filename
                            with open(filepath, 'wb') as f:
                                f.write(img_response.content)
                            
                            print(f"   ✅ Saved: {filename}")
                            return filepath
                    break
                elif status_result.get('status') == 'Error':
                    print(f"   ❌ Failed: {status_result.get('error')}")
                    return None
                        
        print(f"   ❌ Timeout")
        return None
        
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return None

def main():
    print("=" * 80)
    print("  myCHEF City Image Generator — FLUX.2 Klein")
    print("  Generating 15 city location images")
    print("=" * 80)
    print()
    
    output_dir = Path(__file__).parent.parent / "public" / "generated"
    
    generated = []
    failed = []
    
    start_time = time.time()
    
    for slug, prompt in CITY_IMAGES.items():
        result = generate_image(slug, prompt, output_dir)
        if result:
            generated.append(slug)
        else:
            failed.append(slug)
        time.sleep(1)  # Small delay between requests
    
    elapsed = time.time() - start_time
    
    print()
    print("=" * 80)
    print(f"✅ Generated: {len(generated)}/15 images in {elapsed/60:.1f} minutes")
    if failed:
        print(f"❌ Failed: {', '.join(failed)}")
    
    credits_used = len(generated) * 1.5
    print(f"💳 Credits used: ~{credits_used:.1f}")
    print(f"💳 Credits remaining: ~{248.8 - credits_used - 3:.1f}")
    print("=" * 80)

if __name__ == "__main__":
    main()
