#!/usr/bin/env python3
import requests, time, os

API_KEY = "bfl_H4v1JNCMW8IT3jWAc5Hua9cus5FXsRS4"
REGIONS = ["us4", "eu2", "us2"]
OUTPUT_DIR = "/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated"

images = [
    {
        "name": "section-floating-breakfast",
        "prompt": "Beautiful floating breakfast tray in an infinity pool at a luxury Bali villa, tropical fruits, pastries, fresh juice, flower petals in water, morning light, professional lifestyle photography, serene and luxurious"
    },
    {
        "name": "section-grazing-table",
        "prompt": "Stunning grazing table at a Bali villa party, artisan cheeses, cured meats, fresh fruits, crackers, nuts, honeycomb, edible flowers, professional food photography, abundant and colorful, overhead shot"
    },
    {
        "name": "section-cocktail-bar",
        "prompt": "Professional bartender mixing cocktails at a luxury Bali villa bar, tropical cocktails with garnishes, backlit bottles, warm ambient lighting, professional hospitality photography, sophisticated atmosphere"
    },
    {
        "name": "section-family-dinner",
        "prompt": "Happy family enjoying a private dinner at a luxury Bali villa, parents and children at a beautifully set table, warm candlelight, tropical garden backdrop, genuine smiles, professional lifestyle photography"
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
