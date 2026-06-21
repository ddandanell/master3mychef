#!/usr/bin/env python3
"""
Generate realistic kitchen action photos for myCHEF chef team.

Goal: Real-looking Indonesian/Balinese chefs actively working in a kitchen,
smiling naturally, NOT model poses, NOT overly polished AI look.

Usage:
    export FAL_KEY='your-key-from-fal.ai/dashboard/keys'
    python3 scripts/generate-chef-photos.py

Output: public/generated/chef-[slug]-kitchen.webp (WebP, quality 82)
"""

import os
import sys
import time
import urllib.request
from pathlib import Path

try:
    import fal_client
except ImportError:
    print("Install: pip install fal-client --break-system-packages")
    sys.exit(1)

try:
    from PIL import Image
    HAS_PILLOW = True
except ImportError:
    HAS_PILLOW = False
    print("⚠️  Pillow not found — images saved as downloaded (PNG/JPEG). Install with:")
    print("   pip install Pillow --break-system-packages")

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "generated"

# ---------------------------------------------------------------------------
# Prompts: candid, real, working chefs — not models
# ---------------------------------------------------------------------------
CHEFS = [
    {
        "slug": "adriano",
        "name": "Adriano",
        "role": "Executive Chef & Founder",
        "prompt": (
            "Candid photo of an Italian man in his 40s, slightly tanned, dark wavy hair, "
            "wearing a well-worn white chef jacket, standing in a professional villa kitchen. "
            "He is carefully tasting a spoonful of sauce while looking at the pot, "
            "giving a quiet satisfied smile. Background is a clean stainless steel kitchen, "
            "soft overhead warm light, shallow depth of field. "
            "Natural, documentary-style food photography. NOT a fashion shoot. "
            "He looks like an experienced chef who has worked long hours, not a model."
        ),
    },
    {
        "slug": "made-surya",
        "name": "I Made Surya",
        "role": "Head Chef — Mediterranean",
        "prompt": (
            "Candid photo of a Balinese man in his 30s with warm brown skin, dark eyes, "
            "short neat black hair, wearing a white chef jacket and apron. "
            "He is stretching fresh pasta dough on a floured wooden board in a villa kitchen, "
            "looking down at his work with a focused, genuine smile. "
            "Flour dusted on his hands and apron. Warm overhead kitchen lighting. "
            "Documentary-style photo, natural colors. He looks like a real working chef, "
            "hands clearly skilled, not posed."
        ),
    },
    {
        "slug": "bayu-pranata",
        "name": "Bayu Pranata",
        "role": "Head Chef — BBQ & Grill",
        "prompt": (
            "Candid photo of a Balinese man in his late 30s with warm tan skin, broad build, "
            "wearing a dark apron over a chef shirt, standing at an outdoor charcoal grill. "
            "He is turning a piece of fish with tongs, smoke rising around him, "
            "looking at the grill with a relaxed smile of someone who does this every day. "
            "Outdoor garden setting, natural daylight, slight grill smoke. "
            "Not a fashion shoot — he looks strong, practical, and genuinely happy at the grill."
        ),
    },
    {
        "slug": "ni-putu-asri",
        "name": "Ni Putu Asri",
        "role": "Head Chef — Balinese & Asian Fusion",
        "prompt": (
            "Candid photo of a Balinese woman in her early 30s with warm brown skin, "
            "dark hair tied back neatly, wearing a white chef jacket. "
            "She is stirring a large wok over high heat in a busy villa kitchen, "
            "leaning slightly forward, smiling at the sizzling food. "
            "Steam and wok smoke visible in background. Natural kitchen lighting. "
            "She looks like a confident, skilled chef who loves what she does — "
            "not a model, she has real cook's hands and relaxed posture."
        ),
    },
    {
        "slug": "wayan-suarjana",
        "name": "Wayan Suarjana",
        "role": "Head Pastry Chef",
        "prompt": (
            "Candid photo of a Balinese man in his late 20s, neat appearance, "
            "wearing a white pastry chef jacket, carefully piping chocolate decoration "
            "onto a dessert plate in a clean kitchen. "
            "He is concentrating intently with a small pleased smile, "
            "chocolate sauce on his fingertip, pastry tools spread on the marble bench. "
            "Clean bright kitchen lighting. Documentary food photography style. "
            "He looks like a patient craftsman, not a model."
        ),
    },
    {
        "slug": "ketut-mahardika",
        "name": "Ketut Mahardika",
        "role": "Head Chef — Seafood & Japanese",
        "prompt": (
            "Candid photo of a Balinese man in his mid-30s, focused expression, "
            "wearing a white chef jacket, using a Japanese knife to slice fresh tuna "
            "on a wooden cutting board in a clean kitchen. "
            "He is looking at the fish with precise focus, a small proud smile. "
            "Fish market-fresh tuna visible, sharp knife glint, natural overhead light. "
            "Practical, skilled hands. Documentary-style, not posed. "
            "He looks like a real fishmonger-trained chef."
        ),
    },
    {
        "slug": "sari-dewi",
        "name": "Sari Dewi Kusuma",
        "role": "Wellness & Retreat Chef",
        "prompt": (
            "Candid photo of a Balinese woman in her early 30s with gentle features, "
            "dark hair tied up, wearing a simple linen apron over a light top. "
            "She is arranging colorful fresh vegetables and herbs on a large wooden platter "
            "in a bright airy kitchen, smiling naturally as she places the final herb. "
            "Sunshine from a window, clean minimal kitchen, lots of fresh produce. "
            "She looks calm, healthy, and happy — not a food model, but a real wellness chef "
            "who genuinely cares about ingredients."
        ),
    },
    {
        "slug": "komang-artha",
        "name": "Komang Artha",
        "role": "Senior Event Chef",
        "prompt": (
            "Candid photo of a Balinese man in his 40s, sturdy build, experienced face, "
            "wearing a white chef jacket, standing in front of a large buffet setup outdoors. "
            "He is adjusting a serving tray, talking to a younger kitchen staff member "
            "behind him, smiling confidently. "
            "Tropical garden setting, warm daylight, multiple dishes visible on the long table. "
            "He looks like the experienced team leader he is — not glamorous, just competent "
            "and happy, clearly in his element managing a big event."
        ),
    },
]


def generate_image(chef: dict, output_dir: Path) -> Path | None:
    api_key = os.environ.get("FAL_KEY")
    if not api_key:
        print("❌ FAL_KEY not set. Run: export FAL_KEY='your-key'")
        sys.exit(1)

    slug = chef["slug"]
    # Overwrite the existing portrait — ChefsPage.tsx needs no changes
    output_path = output_dir / f"chef-{slug}-portrait.webp"

    print(f"\n🎨  Generating: {chef['name']} ({chef['role']})")

    try:
        result = fal_client.subscribe(
            "fal-ai/flux/schnell",
            arguments={
                "prompt": chef["prompt"],
                "image_size": "portrait_4_3",   # matches chef card aspect ratio
                "num_inference_steps": 4,
                "num_images": 1,
                "enable_safety_checker": True,
            },
        )

        if not result.get("images"):
            print(f"   ❌ No image returned for {slug}")
            return None

        image_url = result["images"][0]["url"]

        # Download to temp
        tmp_path = output_dir / f"_tmp_{slug}.png"
        urllib.request.urlretrieve(image_url, tmp_path)

        # Convert to WebP quality=82
        if HAS_PILLOW:
            img = Image.open(tmp_path).convert("RGB")
            img.save(output_path, "WEBP", quality=82, method=6)
            tmp_path.unlink()
            size_kb = output_path.stat().st_size // 1024
            print(f"   ✅ Saved: chef-{slug}-portrait.webp ({size_kb} KB, WebP q82)")
        else:
            tmp_path.rename(output_path)
            size_kb = output_path.stat().st_size // 1024
            print(f"   ✅ Saved (raw): chef-{slug}-portrait.webp ({size_kb} KB)")
            print("   ⚠️  Install Pillow for proper WebP: pip install Pillow --break-system-packages")
            print("   ⚠️  Install Pillow for proper WebP: pip install Pillow --break-system-packages")

        return output_path

    except Exception as e:
        print(f"   ❌ Error for {slug}: {e}")
        return None


def main():
    print("=" * 60)
    print("  myCHEF Chef Photo Generator")
    print("  Model: fal-ai/flux/schnell  |  Quality: 82 WebP")
    print("=" * 60)

    if not os.environ.get("FAL_KEY"):
        print("\n❌  FAL_KEY not set.")
        print("    1. Get your key: https://fal.ai/dashboard/keys")
        print("    2. Run: export FAL_KEY='key_abc123...'")
        print("    3. Then re-run this script\n")
        sys.exit(1)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    results = []
    for i, chef in enumerate(CHEFS):
        path = generate_image(chef, OUTPUT_DIR)
        results.append((chef["slug"], path))
        # Rate-limit: avoid hammering fal.ai
        if i < len(CHEFS) - 1:
            time.sleep(2)

    print("\n" + "=" * 60)
    print(f"  Done: {sum(1 for _, p in results if p)} / {len(CHEFS)} generated")
    print("=" * 60)
    print("\nNext steps:")
    print("  1. Review images in app/public/generated/")
    print("  2. If happy: cd app && git add public/generated/chef-*-portrait.webp")
    print("     git commit -m 'chore: replace chef portraits with realistic kitchen action shots'")
    print("  3. git push → Vercel auto-deploys (no code changes needed)\n")


if __name__ == "__main__":
    main()
