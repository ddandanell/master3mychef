# Catering long-tail filter — `output (2).xlsx` (2026-08-07)

Source: `/Users/openclaw/Downloads/output (2).xlsx` (~1,304 keywords).

## Filter result

| Set | Count |
|-----|------:|
| Keep (guest + Bali villa catering intent) | **~155** |
| Drop (near me / US chains / grocery menus / brands / jobs / foreign markets) | **~1,149** |

Machine list: `docs/seo/catering-longtail-keep-2026-08-07.json`

## Dropped (examples of why)

- **Near me / open now** (geo-local US/EU intent)
- **US chains & grocery trays**: Costco, Chipotle, Publix, Wegmans, Mission BBQ, Moes, Qdoba, etc.
- **Brand restaurant catering menus** unrelated to Bali villas
- **Jobs / how to start a catering business**
- **Equipment retail**
- Pure **foreign city** wedding catering (Jakarta bandung lists kept out of body unless Indonesia+Bali guest fit — we focus Bali)

## Kept themes (mapped to our business)

| Theme | Example phrases | Primary URLs |
|-------|-----------------|--------------|
| Bali catering | catering bali, catering in bali, catering bali packages/menu/price | `/catering` |
| Wedding catering | wedding catering, catering for wedding, wedding cost | `/events/weddings`, `/bali-wedding-catering-packages`, `/catering` |
| Cost / headcount | catering cost per person, for 20/50/100 people | `/catering`, `/pricing` |
| Formats | BBQ catering, buffet catering, grazing table catering | format pages |
| Party / event | party catering, event catering, birthday catering | `/events/*`, `/catering` |
| Order / book | order catering, catering order online | `/catering`, `/quote`, `/book` |
| Diet | vegan catering, halal | `/catering` |
| Definitions | what does catering mean, what is catering service | `/catering` FAQ |
| ID | prasmanan, murah, harian (honest: buffet vs private chef daily) | `/catering`, `/private-chef-bali` |

## Implementation

Appended guest FAQs + hero/SEO body keyword natural language on:

- `CATERING_FAQS` → `/catering`
- `/catering` hero + SEO guide
- BBQ, buffet, grazing pages
- `/pricing`, `/faq`, `/events/weddings`
- page-meta catering title/description

**Product honesty:** food from ~IDR 700K++/person published floors where stated; buffet page keeps its own volume tiers; cocktail packages from 500K++/guest min 10; no US chain menus published as if we sell them.
