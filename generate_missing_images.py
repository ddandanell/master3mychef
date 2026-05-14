#!/usr/bin/env python3
"""Generate missing hero images for myCHEF pages."""
import requests, time, os, json

API_KEY = "bfl_H4v1JNCMW8IT3jWAc5Hua9cus5FXsRS4"
REGIONS = ["us4", "eu2", "us2"]
OUTPUT_DIR = "/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated"

images = [
    {
        "name": "about-hero",
        "prompt": "Professional portrait of an executive chef in a pristine white coat standing in a modern villa kitchen in Bali, warm natural light streaming through large windows, tropical greenery visible outside, stainless steel countertops with fresh ingredients, confident and welcoming expression, editorial food photography style, shallow depth of field, warm tones"
    },
    {
        "name": "pricing-hero",
        "prompt": "Elegant plated fine dining dish on a white ceramic plate, Michelin-level presentation with microgreens and edible flowers, gold cutlery on crisp white linen, candlelit ambiance, luxury villa dining table setting, warm golden lighting, professional food photography, shallow depth of field, premium atmosphere"
    },
    {
        "name": "faq-hero",
        "prompt": "Friendly concierge team at a luxury Bali villa welcome desk, smiling staff in elegant uniforms, tropical flowers and welcome drinks on marble counter, warm ambient lighting, professional hospitality photography, inviting and trustworthy atmosphere, modern tropical interior design"
    },
    {
        "name": "chefs-hero",
        "prompt": "Group of professional chefs in white coats standing together in a modern kitchen, diverse Indonesian culinary team, confident poses, fresh ingredients and cooking equipment around them, warm kitchen lighting, editorial portrait photography, team camaraderie, professional hospitality setting"
    },
    {
        "name": "reviews-hero",
        "prompt": "Happy guests enjoying a private dinner at a luxury Bali villa, couple clinking wine glasses at candlelit table, tropical garden backdrop, warm golden hour lighting, genuine smiles and laughter, professional lifestyle photography, intimate and celebratory mood, blurred villa background"
    },
    {
        "name": "why-mychef-hero",
        "prompt": "Stunning overhead view of a long dining table set for a luxury villa dinner in Bali, elegant tablescape with tropical flowers, candles, crystal glassware, white linen, multiple courses being served, warm ambient lighting, professional event photography, celebration atmosphere, rich details"
    },
    {
        "name": "retreats-hero",
        "prompt": "Wellness retreat outdoor dining in Bali, long wooden farm table with colorful healthy food, yoga retreat participants in white linen clothing, tropical jungle backdrop, morning mist and soft light, peaceful mindful atmosphere, professional lifestyle photography, organic natural styling"
    },
]

def generate_image(name, prompt, region_idx=0):
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
    
    poll_url = f"https://api.{region}.bfl.ai/v1/get_result?id={request_id}"
    for attempt in range(60):
        time.sleep(2)
        poll = requests.get(poll_url, headers={"x-key": API_KEY}, timeout=10)
        if poll.status_code == 200:
            result = poll.json()
            status = result.get("status", "Unknown")
            if status == "Ready":
                img_url = result.get("result", {}).get("sample")
                if img_url:
                    print(f"  Downloading...")
                    img_data = requests.get(img_url, timeout=30).content
                    out_path = os.path.join(OUTPUT_DIR, f"{name}.webp")
                    with open(out_path, "wb") as f:
                        f.write(img_data)
                    size_kb = len(img_data) / 1024
                    print(f"  SAVED: {out_path} ({size_kb:.0f}KB)")
                    return True
            elif status == "Error":
                print(f"  ERROR: Generation failed")
                return False
        print(f"  Poll {attempt+1}: {status}")
    
    print(f"  ERROR: Timeout")
    return False

# Generate all images
for i, img in enumerate(images):
    generate_image(img["name"], img["prompt"], i)
    time.sleep(1)

print("\n✅ Batch complete!")
