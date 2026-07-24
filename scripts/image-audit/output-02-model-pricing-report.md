# OpenAI Image Generation Model Pricing Report

**Project:** myCHEF.id Website Image Overhaul  
**Assignment:** `openai-model-pricing`  
**Date:** 2026-07-24  
**Sources:** [OpenAI API Pricing](https://openai.com/api/pricing), [Image Generation Guide](https://developers.openai.com/api/docs/guides/image-generation), [GPT Image 2 model page](https://developers.openai.com/api/docs/models/gpt-image-2), [GPT Image 1 model page](https://developers.openai.com/api/docs/models/gpt-image-1), [GPT Image 1 Mini model page](https://developers.openai.com/api/docs/models/gpt-image-1-mini), [DALL·E 3 model page](https://developers.openai.com/api/docs/models/dall-e-3), [DALL·E 2 model page](https://developers.openai.com/api/docs/models/dall-e-2)

---

## 1. Executive Summary

For the myCHEF.id image overhaul, **only `gpt-image-2` should be used for production**. All other models evaluated in this report (`gpt-image-1`, `gpt-image-1-mini`, `dall-e-3`, `dall-e-2`) are now marked **Deprecated** in the official OpenAI model catalog. `gpt-image-2` is OpenAI's current state-of-the-art image model, supports flexible resolutions up to 4K, offers the best prompt adherence and realism, and is the only model explicitly aligned with the project plan's production requirement.

Estimated budget for ~50 replacement images:

| Scenario | Quality mix | Cost (1 draft per image) | Cost (2 variations per image) |
|---|---|---:|---:|
| Conservative | All medium | ~$2.05 | ~$4.10 |
| Balanced | 35 medium + 15 high | ~$4.28 | ~$8.55 |
| Premium | All high | ~$8.25 | ~$16.50 |

These figures are generation-only output costs. Prompt text tokens add ~$0.001–$0.003 per image, and any reference-image edits add ~$0.03–$0.05 per reference.

---

## 2. Model Comparison

### 2.1 `gpt-image-2` — Recommended for production

| Attribute | Detail |
|---|---|
| **API model ID** | `gpt-image-2` (snapshot: `gpt-image-2-2026-04-21`) |
| **Status** | **Active / current flagship** |
| **Generation capability** | Yes — text-to-image via `v1/images/generations` and Responses API tool |
| **Editing capability** | Yes — image-to-image edits and reference-image generation via `v1/images/edits` and Responses API |
| **Image input support** | Yes — accepts image URLs, base64 data URLs, and OpenAI file IDs |
| **Realistic photography quality** | Highest in the OpenAI lineup; natively multimodal, uses world knowledge for lifelike detail |
| **Prompt following** | Best; strong instruction adherence and contextual awareness |
| **Consistency** | Good, though recurring characters/brand elements may still drift across generations |
| **Supported dimensions** | Arbitrary resolutions: max edge ≤3840px, both edges multiples of 16px, aspect ratio ≤3:1, total pixels 655,360–8,294,400. Documented examples include 1024×1024, 1536×1024, 1024×1536, 2048×2048, 2048×1152, 3840×2160, 2160×3840. |
| **Quality settings** | `low`, `medium`, `high`, `auto` (default) |
| **Current pricing** | Token-based: image input $8.00/1M tokens; text input $5.00/1M tokens; image output $30.00/1M tokens. Per-image calculator estimates (legacy preset sizes): Low $0.005–$0.006; Medium $0.041–$0.053; High $0.165–$0.211. |
| **Advantages** | State-of-the-art realism and prompt adherence; flexible 4K output; edits and reference images; best choice for premium hospitality photography. |
| **Limitations** | No transparent background support; 2K+ outputs considered experimental; complex prompts can take up to ~2 minutes; text-in-image rendering can still fail; consistency across many generations requires careful prompting. |
| **Suitability for premium Bali hospitality photography** | **Excellent.** The model's strength in realistic lighting, food detail, villa architecture, and natural skin tones matches the project's need for believable luxury-service photography. |

### 2.2 `gpt-image-1` — Deprecated

| Attribute | Detail |
|---|---|
| **API model ID** | `gpt-image-1` |
| **Status** | **Deprecated** |
| **Generation capability** | Yes |
| **Editing capability** | Yes |
| **Image input support** | Yes |
| **Realistic photography quality** | High; natively multimodal |
| **Prompt following** | Strong |
| **Consistency** | Good, but weaker than `gpt-image-2` |
| **Supported dimensions** | 1024×1024, 1024×1536, 1536×1024 |
| **Quality settings** | `low`, `medium`, `high` |
| **Current pricing** | Token-based, but with legacy per-image floor estimates: Low $0.011/$0.016; Medium $0.042/$0.063; High $0.167/$0.25. |
| **Advantages** | Strong edit support; reliable fixed-aspect output. |
| **Limitations** | Deprecated; lower realism and prompt adherence than `gpt-image-2`; fixed to three aspect ratios. |
| **Suitability for premium Bali hospitality photography** | Good historically, but should not be used because it is deprecated and more expensive at medium/high than `gpt-image-2`. |

### 2.3 `gpt-image-1-mini` — Deprecated

| Attribute | Detail |
|---|---|
| **API model ID** | `gpt-image-1-mini` |
| **Status** | **Deprecated** |
| **Generation capability** | Yes |
| **Editing capability** | Yes |
| **Image input support** | Yes |
| **Realistic photography quality** | Moderate; cost-efficient version of GPT Image 1 |
| **Prompt following** | Moderate |
| **Consistency** | Moderate |
| **Supported dimensions** | 1024×1024, 1024×1536, 1536×1024 |
| **Quality settings** | `low`, `medium`, `high` |
| **Current pricing** | Token-based, with legacy per-image floor estimates: Low $0.005/$0.006; Medium $0.011/$0.015; High $0.036/$0.052. |
| **Advantages** | Cheapest legacy GPT Image model; fast drafts. |
| **Limitations** | Deprecated; noticeably lower realism and prompt fidelity than `gpt-image-2`; not suitable for premium hero photography. |
| **Suitability for premium Bali hospitality photography** | Poor for production; acceptable only for internal rough drafts if it were still supported, which it is not. |

### 2.4 `dall-e-3` — Deprecated

| Attribute | Detail |
|---|---|
| **API model ID** | `dall-e-3` |
| **Status** | **Deprecated** |
| **Generation capability** | Yes |
| **Editing capability** | No — generation only |
| **Image input support** | No — text input only |
| **Realistic photography quality** | High for its generation, but below `gpt-image-2` |
| **Prompt following** | Strong for its era; DALL·E 3 auto-rewrites prompts for safety/quality |
| **Consistency** | Limited — no editing or image-input workflow |
| **Supported dimensions** | 1024×1024, 1024×1536, 1536×1024 |
| **Quality settings** | `standard`, `hd` |
| **Current pricing** | Per image: Standard $0.04/$0.08; HD $0.08/$0.12. |
| **Advantages** | Simple per-image pricing; historically reliable. |
| **Limitations** | Deprecated; no editing; no image input; HD quality is more expensive than `gpt-image-2` medium with lower fidelity. |
| **Suitability for premium Bali hospitality photography** | Not recommended. Deprecated, less flexible, and more costly than `gpt-image-2` for comparable or better quality. |

### 2.5 `dall-e-2` — Deprecated

| Attribute | Detail |
|---|---|
| **API model ID** | `dall-e-2` |
| **Status** | **Deprecated** |
| **Generation capability** | Yes |
| **Editing capability** | Partial — inpainting/outpainting with mask; variations endpoint |
| **Image input support** | Yes, but only for edits/variations, not for guided generation |
| **Realistic photography quality** | Low by current standards |
| **Prompt following** | Weaker than newer models |
| **Consistency** | Poor |
| **Supported dimensions** | 1024×1024, 1024×1536, 1536×1024 |
| **Quality settings** | `standard` only |
| **Current pricing** | Per image: $0.016/$0.018/$0.02. |
| **Advantages** | Cheapest per image; supports `n > 1` variations in one call. |
| **Limitations** | Deprecated; significantly lower realism and prompt adherence; unsuitable for believable hospitality photography. |
| **Suitability for premium Bali hospitality photography** | Unsuitable. Artifacts, weaker anatomy, and lower photorealism would undermine a premium brand. |

---

## 3. Cost Estimate for ~50 Replacement Images

### 3.1 Pricing basis

All cost calculations use the **official OpenAI image-generation calculator table** for `gpt-image-2` at the three legacy preset sizes, because the project will use `gpt-image-2` for production.

| Quality | 1024×1024 | 1024×1536 | 1536×1024 |
|---|---:|---:|---:|
| Low | $0.006 | $0.005 | $0.005 |
| Medium | $0.053 | $0.041 | $0.041 |
| High | $0.211 | $0.165 | $0.165 |

The plan specifies **medium quality for tests and secondary images**, **high quality only for approved heroes**. Hero images for hospitality sites are typically landscape; supporting images can be square or portrait.

### 3.2 Scenarios

| Scenario | Quality mix | Assumed average cost per image | 1 draft total | 2 variations total |
|---|---|---:|---:|---:|
| A. Conservative (all secondary) | 50 × medium, square/landscape blend (~$0.047 avg) | $0.047 | $2.35 | $4.70 |
| B. Balanced (recommended) | 35 × medium ($0.041) + 15 × high landscape ($0.165) | $0.0857 | $4.29 | $8.57 |
| C. Premium (all hero-grade) | 50 × high, landscape ($0.165) | $0.165 | $8.25 | $16.50 |

**Recommended budget envelope:** **$4.50–$9.00** for ~50 images including one variation per hero/secondary image. Add ~10% for prompt text tokens and any reference-image inputs.

### 3.3 Per-image detail (Balanced scenario)

| Line item | Count | Unit cost | Subtotal |
|---|---|---:|---:|
| Medium 1536×1024 secondary images | 35 | $0.041 | $1.435 |
| High 1536×1024 hero images | 15 | $0.165 | $2.475 |
| Prompt text tokens (50 prompts, ~300 tokens each) | 15,000 | $5.00/1M | $0.075 |
| **1-draft total** | | | **$3.985** |
| **2-variation total** (×2 output) | | | **$7.97** |

Rounding to practical budget figures: **~$4.00 for one draft, ~$8.00 for two variations**.

### 3.4 Why DALL·E 3/2 and GPT Image 1/Mini are not cost-effective

| Model | Cheapest comparable option | Cost for 50 medium/standard images | Notes |
|---|---:|---:|:---|
| `gpt-image-2` medium | $0.041 | **$2.05** | Current, best quality, flexible sizes |
| `gpt-image-1` medium | $0.042 | $2.10 | Deprecated, worse quality, no advantage |
| `gpt-image-1-mini` medium | $0.011 | $0.55 | Deprecated, quality too low for brand use |
| `dall-e-3` standard | $0.04/$0.08 | $2.00–$4.00 | Deprecated, no editing, HD costs more than `gpt-image-2` medium |
| `dall-e-2` standard | $0.016 | $0.80 | Deprecated, quality unsuitable |

Even on cost alone, none of the deprecated models beat `gpt-image-2` when quality, editing, and future-proofing are considered.

---

## 4. Recommendations for myCHEF.id

1. **Use `gpt-image-2` for all final production images.** It is the only non-deprecated OpenAI image model and the only model that meets the project plan's stated production target.
2. **Default to 1536×1024 landscape for heroes**, 1024×1536 portrait for vertical cards, and 1024×1024 for thumbnails/Instagram-style crops. All three are within the well-tested legacy preset sizes and are cheaper than 2K/4K experimental outputs.
3. **Use medium quality for all tests and secondary images**, and **high quality only for the ~10–15 approved hero shots**. This keeps the budget under ~$9 for two variations of ~50 images.
4. **Generate 2 variations per image during production** to allow art-direction selection without regenerating. Budget ~$8 for the balanced scenario.
5. **Avoid placing website text inside generated photographs**, per the project constraints. `gpt-image-2`'s text rendering has improved but is still unreliable for precise typography.
6. **Do not rely on transparent backgrounds** with `gpt-image-2`; composite images in post-processing if cutouts are needed.
7. **Use the Responses API only for iterative editing workflows**; for bulk single-prompt generation, the Image API (`v1/images/generations`) is simpler and cheaper because it avoids billing a chat model in addition to image tokens.

---

## 5. Risks and Caveats

- **Deprecation:** `gpt-image-1`, `gpt-image-1-mini`, `dall-e-3`, and `dall-e-2` are all marked Deprecated. Their API behavior or availability could change before or during production.
- **Token pricing uncertainty:** `gpt-image-2` is token-based. Actual per-image costs depend on output resolution and quality. The estimates above are derived from OpenAI's published calculator; real costs may vary by a few percent.
- **2K/4K experimental:** The guide notes that outputs above 2560×1440 are experimental. For a stable production workflow, stay at or below 1536×1024 / 1024×1536 unless a specific large-format use case is justified.
- **Reference-image costs:** If the team uses image-to-image editing or reference-image workflows, each reference image incurs image-input tokens at $8.00/1M tokens. Budget ~$0.03–$0.05 per reference image.
- **Rate limits:** `gpt-image-2` has tiered rate limits (Tier 1: 5 images/minute). For a 50-image batch, plan generation across multiple minutes or request a tier increase.
