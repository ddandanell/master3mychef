#!/usr/bin/env python3
import requests, time, os

API_KEY = "bfl_H4v1JNCMW8IT3jWAc5Hua9cus5FXsRS4"
REGIONS = ["us4", "eu2", "us2"]
OUTPUT_DIR = "/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated"

images = [
    {
        "name": "butler-service",
        "prompt": "Professional butler in formal attire serving champagne at a luxury Bali villa, elegant tray with crystal glasses, tropical garden visible through open doors, warm ambient lighting, professional hospitality photography, refined and discreet service"
    },
    {
        "name": "sommelier-wine",
        "prompt": "Professional sommelier presenting a bottle of red wine at a luxury Bali villa dinner table, elegant decanter, wine glasses, candlelit ambiance, tropical outdoor setting, professional hospitality photography, sophisticated atmosphere"
    },
    {
        "name": "baby-shower-table",
        "prompt": "Elegant baby shower table setup at a luxury Bali villa, pastel pink and sage green decor, floral arrangements, grazing table with sweet treats, soft natural light, professional event photography, feminine and celebratory"
    },
    {
        "name": "anniversary-romantic",
        "prompt": "Romantic anniversary dinner setup at a Bali villa cliffside, candlelit table for two, rose petals, ocean view at sunset, champagne on ice, professional lifestyle photography, intimate and dreamy atmosphere"
    },
    {
        "name": "corporate-dinner",
        "prompt": "Executive corporate dinner at a luxury Bali villa, long table with business professionals in smart casual, elegant plated food, wine service, tropical outdoor pavilion, professional event photography, sophisticated business atmosphere"
    },
    {
        "name": "villa-party-night",
        "prompt": "Vibrant villa party at night in Bali, pool illuminated with colored lights, DJ booth, guests dancing and mingling, tropical cocktails, professional event photography, energetic and fun atmosphere, luxury villa setting"
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
        print(f"  ERROR: HTTP {resp.status_code}")
        return False
    
    data = resp.json()
    request_id = data.get("id")
    if not request_id:
        print(f"  ERROR: No request_id")
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

for i, img in enumerate(images):
    success = generate_image(img["name"], img["prompt"], i)
    if success:
        time.sleep(2)
    else:
        time.sleep(1)

print("\n✅ Batch complete!")
