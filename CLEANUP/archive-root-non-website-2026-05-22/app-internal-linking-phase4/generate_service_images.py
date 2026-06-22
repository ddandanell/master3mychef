#!/usr/bin/env python3
import requests, time, os

API_KEY = "bfl_H4v1JNCMW8IT3jWAc5Hua9cus5FXsRS4"
REGIONS = ["us4", "eu2", "us2"]
OUTPUT_DIR = "/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated"

images = [
    {
        "name": "in-villa-service-hero",
        "prompt": "Professional villa service staff in elegant uniforms setting a long dining table in a luxury Bali villa, white gloves, crystal glassware, tropical flower centerpieces, warm ambient lighting, professional hospitality photography, attentive and refined service atmosphere"
    },
    {
        "name": "locations-hero",
        "prompt": "Aerial view of Bali coastline showing multiple villa areas, from Seminyak beach to Ubud rice terraces to Uluwatu cliffs, golden hour lighting, lush tropical landscape, ocean and jungle, professional travel photography, vibrant and inviting"
    },
    {
        "name": "book-hero",
        "prompt": "Elegant reservation desk at a luxury Bali villa with tropical flowers, welcome champagne, concierge staff smiling, warm golden lighting, professional hospitality photography, inviting and exclusive atmosphere, booking and reservation concept"
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
    generate_image(img["name"], img["prompt"], i)
    time.sleep(1)

print("\n✅ Batch complete!")
