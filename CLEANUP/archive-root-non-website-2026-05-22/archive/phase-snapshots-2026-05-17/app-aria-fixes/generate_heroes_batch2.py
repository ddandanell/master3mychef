#!/usr/bin/env python3
"""Generate remaining hero images for events pages (batch 2)."""
import requests, time, os, json

API_KEY = "bfl_H4v1JNCMW8IT3jWAc5Hua9cus5FXsRS4"
REGIONS = ["us4", "eu2", "us2"]
OUTPUT_DIR = "/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated"

images = [
    {
        "name": "hero-birthdays",
        "prompt": "Vibrant birthday party celebration at a luxury Bali villa, cake reveal moment with candles lit, group of friends cheering and clapping, poolside setup with tropical flowers and balloons, golden hour lighting, joyful celebratory atmosphere, professional event photography, candid moment, high-end villa background"
    },
    {
        "name": "hero-anniversaries",
        "prompt": "Romantic anniversary dinner setup at a luxury Bali villa, intimate candlelit table for two, rose petal pathway leading to the table, frangipani flowers and orchids, golden hour overlooking lush tropical garden, champagne glasses, elegant and sentimental mood, professional lifestyle photography, warm ambient lighting"
    },
    {
        "name": "hero-retreats",
        "prompt": "Wellness retreat group dining at a luxury Bali villa, long rustic wooden table with healthy plant-forward food, colorful smoothie bowls and fresh salads, yoga mats in soft focus background, tropical garden setting, morning golden light, peaceful mindful atmosphere, professional lifestyle photography, organic natural styling"
    },
    {
        "name": "hero-baby-showers",
        "prompt": "Elegant baby shower brunch at a luxury Bali villa, pastel decor with blush pink and sage green colors, grazing table with sweet and savory items, mocktail bar with pink drinks, floral arrangements and balloons, soft natural light, celebration atmosphere, professional event photography, feminine elegant styling"
    },
    {
        "name": "hero-villa-parties",
        "prompt": "Vibrant villa party at sunset in Bali, bartender making cocktails at a poolside bar, guests mingling and laughing, string lights and tropical decor, golden hour sky, DJ setup visible, celebratory energetic atmosphere, professional event photography, fun and lively, luxury villa setting"
    }
]

def generate_image(name, prompt, region_idx=0):
    """Generate image via BFL API and download it."""
    region = REGIONS[region_idx % len(REGIONS)]
    url = f"https://api.{region}.bfl.ai/v1/flux-2-klein-9b"
    
    print(f"\n[{name}] Submitting to {region}...")
    
    resp = requests.post(url, headers={
        "Content-Type": "application/json",
        "x-key": API_KEY
    }, json={
        "prompt": prompt,
        "width": 1440,
        "height": 810,
        "safety_tolerance": 2
    }, timeout=30)
    
    if resp.status_code != 200:
        print(f"  ERROR: HTTP {resp.status_code}: {resp.text[:200]}")
        return False
    
    data = resp.json()
    request_id = data.get("id")
    if not request_id:
        print(f"  ERROR: No request_id in response: {data}")
        return False
    
    print(f"  Request ID: {request_id}")
    
    # Poll for result
    poll_url = f"https://api.{region}.bfl.ai/v1/get_result?id={request_id}"
    for attempt in range(60):
        time.sleep(2)
        poll = requests.get(poll_url, headers={"x-key": API_KEY}, timeout=10)
        if poll.status_code == 200:
            result = poll.json()
            status = result.get("status", "Unknown")
            print(f"  Poll {attempt+1}: {status}")
            if status == "Ready":
                img_url = result.get("result", {}).get("sample")
                if img_url:
                    print(f"  Downloading from: {img_url[:80]}...")
                    img_data = requests.get(img_url, timeout=30).content
                    out_path = os.path.join(OUTPUT_DIR, f"{name}.jpg")
                    with open(out_path, "wb") as f:
                        f.write(img_data)
                    size_kb = len(img_data) / 1024
                    print(f"  SAVED: {out_path} ({size_kb:.0f}KB)")
                    return True
                else:
                    print(f"  ERROR: No sample URL in result")
                    return False
            elif status in ["Failed", "Error"]:
                print(f"  ERROR: Generation failed")
                return False
        else:
            print(f"  Poll {attempt+1}: HTTP {poll.status_code}")
    
    print(f"  TIMEOUT after 120s")
    return False

# Generate all images
success = 0
for i, img in enumerate(images):
    if generate_image(img["name"], img["prompt"], i):
        success += 1
    time.sleep(1)  # Small delay between requests

print(f"\n{'='*50}")
print(f"BATCH 2 COMPLETE: {success}/{len(images)} images generated")
print(f"{'='*50}")
