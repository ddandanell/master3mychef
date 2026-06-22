#!/usr/bin/env python3
"""Batch BFL image generator for myCHEF.id — 3 Universes + Hub"""
import os, json, time, requests, sys
from pathlib import Path

API_KEY = os.getenv("BFL_API_KEY", "")
if not API_KEY:
    with open(os.path.expanduser("~/Desktop/passsword/.env")) as f:
        for line in f:
            if line.startswith("BFL_API_KEY="):
                API_KEY = line.strip().split("=", 1)[1]
                break

BASE_URL = "https://api.bfl.ai/v1"
HEADERS = {"Content-Type": "application/json", "X-Key": API_KEY}
PUBLIC_DIR = Path(__file__).parent.parent / "public" / "generated"
PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

IMAGES = [
    # === LUNA (Fine Dining) ===
    ("luna-hero", "flux-2-pro", "landscape_16_9", "Indonesian chef team in pristine white uniforms setting a long outdoor dining table in a traditional Balinese village at dusk, warm candlelight, tropical flowers, stone pathway, golden hour, cinematic shallow depth of field, editorial photography"),
    ("luna-chef-portrait", "flux-2-pro", "portrait_4_3", "Professional portrait of an Indonesian male executive chef in crisp white double-breasted chef coat, confident warm smile, standing outdoors in a Balinese garden, soft golden hour light, shallow depth of field, editorial headshot"),
    ("luna-plating", "flux-2-klein-9b", "square", "Close-up of Indonesian chef hands carefully plating an elegant fine dining dish on a gold-rimmed white plate, micro herbs, sauce art, candlelit outdoor table in background, shallow depth of field, food photography"),
    ("luna-table", "flux-2-klein-9b", "landscape_16_9", "Long rustic wooden dining table set for eleven guests in a traditional Balinese village courtyard, white linen napkins, gold cutlery, crystal glasses, candles and tropical flowers, dusk atmosphere, editorial photography"),
    ("luna-team", "flux-2-klein-9b", "landscape_16_9", "Four Indonesian hospitality staff in white uniforms walking together carrying silver trays through a Balinese village pathway, warm evening light, professional team photo, editorial"),
    ("luna-wine", "flux-2-klein-9b", "portrait_4_3", "Indonesian sommelier in white uniform pouring red wine into a crystal glass at an outdoor fine dining table, candlelight, elegant, shallow depth of field"),
    ("luna-ingredients", "flux-2-klein-9b", "square", "Fresh Balinese market ingredients on a dark wooden board — tropical fruits, herbs, spices, edible flowers, artisan bread, rustic overhead food photography"),
    ("luna-dessert", "flux-2-klein-9b", "square", "Artistic fine dining dessert on a white plate — chocolate sphere, gold leaf, berry coulis, edible flowers, candlelit outdoor setting, food photography"),
    ("luna-guests", "flux-2-klein-9b", "landscape_16_9", "Indonesian family smiling and dining together at an elegant outdoor table in a Balinese village, warm candlelight, happy authentic moment, lifestyle photography"),
    ("luna-village", "flux-2-klein-9b", "landscape_16_9", "Traditional Balinese village pathway at dusk with stone lanterns and tropical vegetation, warm ambient light, serene atmosphere, travel photography"),
    ("luna-flame", "flux-2-klein-9b", "portrait_4_3", "Indonesian chef in white uniform cooking over an open flame grill outdoors, intense focus, sparks flying, dramatic lighting, editorial photography"),
    ("luna-detail", "flux-2-klein-9b", "square", "Elegant table setting detail — gold cutlery on white linen, tropical flower arrangement, crystal glass, candle, luxury dining detail photography"),

    # === SOL (Villa Chef) ===
    ("sol-hero", "flux-2-pro", "landscape_16_9", "Indonesian private chef in casual white polo shirt preparing fresh breakfast on a luxury Bali villa terrace, ocean view, bright morning sunlight, tropical flowers, lifestyle photography"),
    ("sol-chef-portrait", "flux-2-klein-9b", "portrait_4_3", "Friendly Indonesian female chef in white casual polo, warm genuine smile, standing in a bright modern villa kitchen, natural light, lifestyle portrait"),
    ("sol-breakfast", "flux-2-klein-9b", "landscape_16_9", "Indonesian family enjoying a beautiful breakfast spread by a luxury villa pool, bright sunny morning, tropical fruits, fresh juice, happy authentic moment, lifestyle photography"),
    ("sol-lunch", "flux-2-klein-9b", "landscape_16_9", "Fresh salads, grilled fish and tropical dishes on a villa terrace table, bright natural light, ocean view in background, overhead food photography"),
    ("sol-sunset", "flux-2-klein-9b", "landscape_16_9", "Romantic dinner setup on a Bali villa deck at sunset, candles, tropical flowers, ocean view, golden hour, lifestyle photography"),
    ("sol-produce", "flux-2-klein-9b", "square", "Fresh Balinese produce being unpacked on a villa kitchen counter — tropical fruits, vegetables, herbs, bright natural light, lifestyle photography"),
    ("sol-cooking", "flux-2-klein-9b", "portrait_4_3", "Indonesian chef smiling while cooking at a villa stove, relaxed atmosphere, bright kitchen, natural light, lifestyle photography"),
    ("sol-kids", "flux-2-klein-9b", "landscape_16_9", "Indonesian children happily eating a colorful chef-prepared meal at a villa dining table, bright and cheerful, lifestyle photography"),
    ("sol-bbq", "flux-2-klein-9b", "landscape_16_9", "Indonesian chef grilling seafood at a villa poolside BBQ station, smoke rising, tropical garden, bright daylight, lifestyle photography"),
    ("sol-cleanup", "flux-2-klein-9b", "square", "Spotless modern villa kitchen after a meal service, white countertops, organized, bright natural light, interior photography"),

    # === AURA (Events) ===
    ("aura-hero", "flux-2-pro", "landscape_16_9", "Indonesian events team in elegant navy and white uniforms setting up a sophisticated villa wedding reception, white and blue floral arrangements, string lights, dusk atmosphere, event photography"),
    ("aura-team", "flux-2-klein-9b", "landscape_16_9", "Indonesian female events manager with her professional team in matching uniforms, standing confidently in a villa garden, warm light, team portrait"),
    ("aura-wedding", "flux-2-klein-9b", "landscape_16_9", "Elegant villa garden wedding ceremony in Bali, white floral arch, ocean view, guests seated, romantic atmosphere, event photography"),
    ("aura-corporate", "flux-2-klein-9b", "landscape_16_9", "Long table corporate dinner event in a Bali villa, elegant blue and white table settings, professional lighting, sophisticated atmosphere, event photography"),
    ("aura-toast", "flux-2-klein-9b", "landscape_16_9", "Guests raising champagne glasses in a toast at a villa sunset event, golden hour, string lights, celebration moment, event photography"),
    ("aura-buffet", "flux-2-klein-9b", "landscape_16_9", "Elegant buffet station at a villa event, Indonesian staff serving, floral arrangements, professional setup, event photography"),
    ("aura-bartender", "flux-2-klein-9b", "portrait_4_3", "Indonesian bartender in white uniform crafting a cocktail behind an elegant bar setup, villa event background, professional event photography"),
    ("aura-tablescape", "flux-2-klein-9b", "square", "Event table close-up with blue napkins, gold chargers, white roses, crystal glassware, candlelight, luxury event detail photography"),
    ("aura-dance", "flux-2-klein-9b", "landscape_16_9", "Evening villa event with string lights and a small dance floor, guests enjoying themselves, warm ambient light, celebration atmosphere"),
    ("aura-setup", "flux-2-klein-9b", "landscape_16_9", "Indonesian event crew arranging flowers and décor for a villa celebration, teamwork, professional setup, event photography"),

    # === HUB ===
    ("hub-hero", "flux-2-pro", "landscape_16_9", "Aerial view of a luxury Bali villa with infinity pool and outdoor dining setup at golden hour, rice terraces in distance, warm sunset light, cinematic drone photography"),
    ("hub-chef", "flux-2-pro", "portrait_4_3", "Warm portrait of an Indonesian male chef looking directly at camera, slight smile, white chef coat, soft natural light, shallow depth of field, editorial headshot"),
    ("hub-villa", "flux-2-klein-9b", "landscape_16_9", "Luxury Bali villa interior with open living space flowing to outdoor terrace, tropical garden, bright natural light, interior design photography"),
    ("hub-bali", "flux-2-klein-9b", "landscape_16_9", "Stunning Bali rice terraces at golden hour, palm trees, warm light, misty atmosphere, landscape photography"),
]

SIZE_MAP = {
    "square": (1024, 1024),
    "portrait_4_3": (768, 1024),
    "landscape_16_9": (1024, 576),
}


def submit(name, model, size_key, prompt):
    w, h = SIZE_MAP[size_key]
    data = {"prompt": prompt, "width": w, "height": h, "seed": 42}
    try:
        r = requests.post(f"{BASE_URL}/{model}", headers=HEADERS, json=data, timeout=30)
        r.raise_for_status()
        j = r.json()
        return {"name": name, "model": model, "id": j.get("id"), "polling_url": j.get("polling_url")}
    except Exception as e:
        return {"name": name, "error": str(e)}


def poll(task):
    if "error" in task:
        return task
    for attempt in range(60):
        try:
            r = requests.get(task["polling_url"], headers=HEADERS, timeout=30)
            r.raise_for_status()
            j = r.json()
            if j.get("status") == "Ready":
                url = j.get("result", {}).get("sample", "")
                if url:
                    return {**task, "image_url": url, "status": "Ready"}
            elif j.get("status") == "Failed":
                return {**task, "status": "Failed", "error": j.get("details", "Unknown")}
        except Exception as e:
            return {**task, "status": "Error", "error": str(e)}
        time.sleep(3)
    return {**task, "status": "Timeout"}


def download(task):
    if task.get("status") != "Ready" or "image_url" not in task:
        return task
    path = PUBLIC_DIR / f"{task['name']}.jpg"
    try:
        r = requests.get(task["image_url"], timeout=60)
        r.raise_for_status()
        path.write_bytes(r.content)
        return {**task, "saved_to": str(path), "size": len(r.content)}
    except Exception as e:
        return {**task, "download_error": str(e)}


def main():
    print(f"Generating {len(IMAGES)} images → {PUBLIC_DIR}")
    print(f"API key: {API_KEY[:8]}...")

    # Submit all (max 24 concurrent per BFL docs; we submit sequentially but fast)
    tasks = []
    for name, model, size_key, prompt in IMAGES:
        print(f"  Submitting {name}...", end=" ", flush=True)
        t = submit(name, model, size_key, prompt)
        if "error" in t:
            print(f"ERROR: {t['error']}")
        else:
            print(f"OK ({t['id'][:8]}...)")
        tasks.append(t)
        time.sleep(0.5)

    # Poll all
    print("\nPolling for results...")
    for i, t in enumerate(tasks):
        if "error" in t:
            continue
        print(f"  [{i+1}/{len(tasks)}] {t['name']}...", end=" ", flush=True)
        tasks[i] = poll(t)
        print(tasks[i].get("status", "?"))

    # Download all
    print("\nDownloading...")
    for i, t in enumerate(tasks):
        if t.get("status") != "Ready":
            continue
        print(f"  {t['name']}...", end=" ", flush=True)
        tasks[i] = download(t)
        print(tasks[i].get("saved_to", tasks[i].get("download_error", "?")))

    # Summary
    ready = sum(1 for t in tasks if t.get("status") == "Ready" and "saved_to" in t)
    failed = sum(1 for t in tasks if "error" in t or t.get("status") in ("Failed", "Error", "Timeout"))
    print(f"\nDone: {ready} ready, {failed} failed, {len(tasks) - ready - failed} other")

    # Write manifest
    manifest = {t["name"]: {k: v for k, v in t.items() if k != "image_url"} for t in tasks}
    (PUBLIC_DIR / "manifest.json").write_text(json.dumps(manifest, indent=2, default=str))
    print(f"Manifest saved to {PUBLIC_DIR / 'manifest.json'}")


if __name__ == "__main__":
    main()
