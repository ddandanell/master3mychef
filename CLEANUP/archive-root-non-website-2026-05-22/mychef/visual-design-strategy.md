# myCHEF.id -- Complete Visual Design Strategy
## Luxury Private Chef & Event Hospitality Brand -- Bali

---

# PART 1: UNIFIED BRAND VISUAL SYSTEM

## Brand Core Philosophy

myCHEF.id is not three separate services under one umbrella. It is one hospitality philosophy expressed through three distinct emotional registers:

| Pathway | Emotional Promise | Visual Metaphor |
|---|---|---|
| **Fine Dining** | *"This night will change how you think about food"* | Theatrical darkness, spotlight, intimacy |
| **Catering** | *"Effortless luxury for the people you love"* | Sunlit villas, open kitchens, warm gatherings |
| **Events** | *"Every detail handled, every moment memorable"* | Crisp professionalism, dynamic energy, precision |

**The unifying thread:** All three pathways share **Bali villa luxury** as their stage. The brand moves between dark cinematic intimacy (Fine Dining), warm relaxed clarity (Catering), and sharp professional precision (Events) -- but always within the context of private villa living. The user must feel: *"This is the same extraordinary brand, showing me a different side of itself."*

## Brand Signature Elements (Present on ALL Pages)

### 1. The Gold Arc Mark
A subtle curved gold line (SVG, 2px stroke, `#D4AF37`) appears in three contexts:
- Below the active navigation item (animated underline)
- As a section divider between major content blocks
- As a decorative accent on primary CTA buttons (bottom arc)

### 2. Villa Context Reminder
Every page must include at least one visual reminder that this is a **Bali villa experience**, not a restaurant. This can be:
- A background hint of tropical foliage or villa architecture
- A tagline mentioning "in your villa"
- Location context in imagery (pool edges, open-air pavilions, rice field views)

### 3. WhatsApp Floating CTA
Always present: circular button, bottom-right corner, green `#25D366` background, white WhatsApp icon, 56px diameter on mobile / 64px desktop. Slight pulse animation. Label: "Chat with Us" on desktop hover.

### 4. Navigation Consistency
Same nav structure across all pages:
- Logo: "myCHEF" (my in Regular, CHEF in Medium weight, tracking +2px)
- Links: Fine Dining | Catering | Events | Contact Us
- Mobile: hamburger menu with full-screen overlay
- Active page: gold underline indicator

### 5. Footer Consistency
Same footer across all pages:
- Dark background (Fine Dining: pure black; others: near-black `#1A1A1A`)
- 4 columns: Brand + tagline, Quick Links, Services, Contact Info
- Social icons: Instagram, WhatsApp, TikTok
- Bottom bar: copyright + "Made with care in Bali"

---

## Color Palette Document -- Complete HEX Codes

### Global Brand Colors

| Token | HEX | Usage |
|---|---|---|
| `gold-primary` | `#D4AF37` | Primary accent, CTAs, active states, decorative arcs, Fine Dining headings |
| `gold-light` | `#E8D5A3` | Hover states, highlights, secondary accents |
| `gold-dark` | `#B8962E` | Pressed states, dark backgrounds |
| `gold-gradient` | `linear-gradient(135deg, #D4AF37 0%, #E8D5A3 50%, #D4AF37 100%)` | Premium button fills, shimmer effects |
| `whatsapp` | `#25D366` | Floating CTA only |
| `whatsapp-dark` | `#128C7E` | Floating CTA hover |

### Page 1: Homepage (Luxury Gateway)

| Token | HEX | Usage |
|---|---|---|
| `hp-bg` | `#0A0A0A` | Main background -- lets cards shine |
| `hp-card-fine` | `#0F0F0F` | Fine Dining card background |
| `hp-card-cater` | `#F5F0E8` | Catering card background |
| `hp-card-event` | `#FFFFFF` | Events card background |
| `hp-text-primary` | `#FFFFFF` | Headlines on dark bg |
| `hp-text-secondary` | `#A0A0A0` | Subtext on dark bg |
| `hp-text-on-light` | `#1A1A1A` | Text on catering/events cards |
| `hp-divider` | `#2A2A2A` | Subtle separators |
| `hp-hero-glow` | `radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, transparent 70%)` | Hero background glow |

### Page 2: Fine Dining Villa (Michelin-Inspired Dark Luxury)

| Token | HEX | Usage |
|---|---|---|
| `fd-bg` | `#050505` | Page background -- near absolute black |
| `fd-surface` | `#0F0F0F` | Card/section surfaces |
| `fd-surface-elevated` | `#1A1A1A` | Elevated cards, menu panels |
| `fd-border` | `#2A2A2A` | Subtle borders, dividers |
| `fd-border-gold` | `#D4AF37` | Accent borders, featured elements |
| `fd-text-primary` | `#F5F0E8` | Main headings -- warm cream, not pure white |
| `fd-text-secondary` | `#A09888` | Body text -- warm grey, readable on dark |
| `fd-text-muted` | `#6B6560` | Captions, labels, metadata |
| `fd-gold` | `#D4AF37` | Primary accent, CTAs, highlights |
| `fd-cream` | `#F5E6C8` | Secondary headings, elegant accents |
| `fd-gradient-hero` | `radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)` | Hero side glow |
| `fd-gradient-card` | `linear-gradient(180deg, rgba(5,5,5,0) 0%, rgba(5,5,5,0.9) 100%)` | Card image overlays |

### Page 3: Catering Villa (Warm Relaxed Luxury)

| Token | HEX | Usage |
|---|---|---|
| `cat-bg` | `#FFFFFF` | Page background -- clean white |
| `cat-surface` | `#FDFBF7` | Alternate section background -- warm off-white |
| `cat-surface-card` | `#FFFFFF` | Cards with subtle shadow |
| `cat-border` | `#E8E2D9` | Dividers, card borders |
| `cat-border-warm` | `#D4AF37` | Accent borders on featured items |
| `cat-text-primary` | `#2C2419` | Headings -- warm dark brown, not pure black |
| `cat-text-secondary` | `#5C5348` | Body text -- warm grey-brown |
| `cat-text-muted` | `#9B9085` | Captions, metadata, labels |
| `cat-accent` | `#D4AF37` | Primary accent, CTAs, highlights |
| `cat-accent-warm` | `#C4953A` | Secondary accent, hover states |
| `cat-green` | `#5A7A3A` | Fresh accent -- used sparingly for "fresh ingredients" |
| `cat-shadow` | `0 4px 24px rgba(44,36,25,0.08)` | Card shadows |
| `cat-shadow-hover` | `0 8px 32px rgba(44,36,25,0.12)` | Card hover shadows |

### Page 4: Events Services Villa (Professional Hospitality)

| Token | HEX | Usage |
|---|---|---|
| `evt-bg` | `#FFFFFF` | Page background -- crisp white |
| `evt-surface` | `#F8F7F5` | Alternate section -- subtle warm grey |
| `evt-surface-dark` | `#1A1A1A` | Contrast sections (testimonials, CTA) |
| `evt-border` | `#E5E3E0` | Standard dividers |
| `evt-border-accent` | `#D4AF37` | Featured element borders |
| `evt-text-primary` | `#1A1A1A` | Headings -- near black, sharp |
| `evt-text-secondary` | `#4A4745` | Body text -- neutral grey |
| `evt-text-muted` | `#8A8785` | Captions, metadata |
| `evt-text-on-dark` | `#FFFFFF` | Text on dark sections |
| `evt-accent` | `#D4AF37` | Primary accent -- gold |
| `evt-accent-blue` | `#2C5F7C` | Secondary accent -- slate blue for professional feel |
| `evt-accent-blue-light` | `#3A7A9E` | Hover states for blue elements |
| `evt-shadow` | `0 2px 16px rgba(26,26,26,0.06)` | Subtle card shadows |
| `evt-gradient-cta` | `linear-gradient(135deg, #D4AF37 0%, #E8D5A3 100%)` | CTA button gradient |

---

## Typography System -- Complete Spec

### Font Stack

| Purpose | Font | Fallback Stack | Weight Range |
|---|---|---|---|
| **Display / Headings** | Playfair Display | `Georgia, 'Times New Roman', serif` | 400, 500, 600, 700 |
| **Body / UI** | Inter | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | 300, 400, 500, 600 |
| **Accent / Labels** | Cormorant Garamond | `Georgia, serif` | 400, 500, 600 (italic) |

### Homepage Typography Scale

| Element | Desktop | Mobile | Line Height | Letter Spacing | Font |
|---|---|---|---|---|---|
| Hero H1 | 64px / 4rem | 36px / 2.25rem | 1.1 | -0.02em | Playfair Display 500 |
| Hero Subtitle | 20px / 1.25rem | 16px / 1rem | 1.5 | 0.01em | Inter 300 |
| Card Title | 32px / 2rem | 24px / 1.5rem | 1.2 | 0 | Playfair Display 600 |
| Card Description | 16px / 1rem | 14px / 0.875rem | 1.6 | 0.01em | Inter 400 |
| Card CTA | 14px / 0.875rem | 13px / 0.8125rem | 1.4 | 0.08em | Inter 500 uppercase |
| Section Label | 12px / 0.75rem | 11px / 0.6875rem | 1.4 | 0.12em | Inter 500 uppercase |
| Nav Links | 14px / 0.875rem | 16px / 1rem | 1.4 | 0.06em | Inter 500 |
| Footer Text | 14px / 0.875rem | 13px / 0.8125rem | 1.6 | 0 | Inter 400 |

### Fine Dining Typography Scale

| Element | Desktop | Mobile | Line Height | Letter Spacing | Font |
|---|---|---|---|---|---|
| Hero H1 | 72px / 4.5rem | 40px / 2.5rem | 1.05 | -0.02em | Playfair Display 600 |
| Hero Subtitle | 22px / 1.375rem | 16px / 1rem | 1.5 | 0.02em | Cormorant Garamond 400 italic |
| Section H2 | 48px / 3rem | 32px / 2rem | 1.1 | -0.01em | Playfair Display 500 |
| Section H3 | 28px / 1.75rem | 22px / 1.375rem | 1.3 | 0 | Playfair Display 500 |
| Body Text | 18px / 1.125rem | 16px / 1rem | 1.7 | 0.01em | Inter 300 |
| Menu Item Name | 22px / 1.375rem | 18px / 1.125rem | 1.3 | 0.01em | Cormorant Garamond 500 |
| Menu Item Desc | 15px / 0.9375rem | 14px / 0.875rem | 1.6 | 0.01em | Inter 300 |
| Price | 18px / 1.125rem | 16px / 1rem | 1.4 | 0.02em | Playfair Display 400 |
| Quote / Review | 24px / 1.5rem | 18px / 1.125rem | 1.5 | 0.01em | Cormorant Garamond 400 italic |
| Label / Tag | 11px / 0.6875rem | 10px / 0.625rem | 1.4 | 0.14em | Inter 500 uppercase |
| CTA Button | 14px / 0.875rem | 14px / 0.875rem | 1.4 | 0.1em | Inter 500 uppercase |
| Nav Links | 14px / 0.875rem | -- | 1.4 | 0.08em | Inter 400 uppercase |
| Chef Name | 36px / 2.25rem | 26px / 1.625rem | 1.2 | 0 | Playfair Display 600 |

### Catering Typography Scale

| Element | Desktop | Mobile | Line Height | Letter Spacing | Font |
|---|---|---|---|---|---|
| Hero H1 | 56px / 3.5rem | 34px / 2.125rem | 1.1 | -0.01em | Playfair Display 600 |
| Hero Subtitle | 20px / 1.25rem | 16px / 1rem | 1.5 | 0.01em | Inter 400 |
| Section H2 | 44px / 2.75rem | 30px / 1.875rem | 1.15 | -0.01em | Playfair Display 600 |
| Section H3 | 26px / 1.625rem | 20px / 1.25rem | 1.3 | 0 | Playfair Display 500 |
| Body Text | 17px / 1.0625rem | 16px / 1rem | 1.65 | 0 | Inter 400 |
| Package Card Title | 22px / 1.375rem | 18px / 1.125rem | 1.3 | 0 | Playfair Display 600 |
| Package Price | 36px / 2.25rem | 28px / 1.75rem | 1.1 | -0.01em | Playfair Display 600 |
| Package Feature | 15px / 0.9375rem | 14px / 0.875rem | 1.5 | 0 | Inter 400 |
| FAQ Question | 18px / 1.125rem | 16px / 1rem | 1.4 | 0 | Inter 500 |
| FAQ Answer | 16px / 1rem | 15px / 0.9375rem | 1.65 | 0 | Inter 400 |
| Label / Tag | 12px / 0.75rem | 11px / 0.6875rem | 1.4 | 0.1em | Inter 500 uppercase |
| CTA Button | 15px / 0.9375rem | 15px / 0.9375rem | 1.4 | 0.06em | Inter 500 |
| Testimonial Quote | 20px / 1.25rem | 16px / 1rem | 1.55 | 0.01em | Inter 400 italic |

### Events Typography Scale

| Element | Desktop | Mobile | Line Height | Letter Spacing | Font |
|---|---|---|---|---|---|
| Hero H1 | 60px / 3.75rem | 36px / 2.25rem | 1.1 | -0.01em | Playfair Display 600 |
| Hero Subtitle | 20px / 1.25rem | 16px / 1rem | 1.5 | 0.01em | Inter 400 |
| Section H2 | 44px / 2.75rem | 30px / 1.875rem | 1.15 | -0.01em | Playfair Display 600 |
| Section H3 | 24px / 1.5rem | 20px / 1.25rem | 1.3 | 0 | Playfair Display 500 |
| Body Text | 17px / 1.0625rem | 16px / 1rem | 1.65 | 0 | Inter 400 |
| Service Title | 22px / 1.375rem | 18px / 1.125rem | 1.3 | 0 | Playfair Display 600 |
| Event Type Label | 13px / 0.8125rem | 12px / 0.75rem | 1.4 | 0.1em | Inter 600 uppercase |
| Stat Number | 48px / 3rem | 36px / 2.25rem | 1.0 | -0.02em | Playfair Display 700 |
| Stat Label | 14px / 0.875rem | 13px / 0.8125rem | 1.4 | 0.06em | Inter 500 uppercase |
| Timeline Step | 18px / 1.125rem | 16px / 1rem | 1.4 | 0 | Inter 500 |
| Staff Card Name | 18px / 1.125rem | 16px / 1rem | 1.3 | 0 | Inter 600 |
| Staff Card Role | 14px / 0.875rem | 13px / 0.8125rem | 1.4 | 0.04em | Inter 400 uppercase |
| Quote / Testimonial | 22px / 1.375rem | 18px / 1.125rem | 1.5 | 0 | Cormorant Garamond 400 italic |
| CTA Button | 15px / 0.9375rem | 15px / 0.9375rem | 1.4 | 0.06em | Inter 500 |
| Nav Links | 14px / 0.875rem | -- | 1.4 | 0.06em | Inter 500 |

---

## Spacing System -- Grid, Padding, Margins

### Base Unit: 8px
All spacing values derive from an 8px base unit for visual rhythm.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps, icon padding |
| `space-2` | 8px | Tight element spacing |
| `space-3` | 12px | Small gaps, line-height offsets |
| `space-4` | 16px | Default element padding |
| `space-5` | 24px | Card internal padding (mobile) |
| `space-6` | 32px | Card internal padding (desktop), section sub-spacing |
| `space-7` | 48px | Medium section padding |
| `space-8` | 64px | Large section padding |
| `space-9` | 80px | Section vertical padding (mobile) |
| `space-10` | 120px | Section vertical padding (desktop) |
| `space-11` | 160px | Hero section padding |

### Section Spacing Rules
- **Between major sections:** 120px desktop / 80px mobile
- **Between sub-sections:** 64px desktop / 48px mobile
- **Content max-width:** 1280px (80rem), centered with 24px mobile / 48px desktop side padding
- **Grid gutter:** 24px desktop / 16px mobile
- **Card internal padding:** 32px desktop / 24px mobile

### Page-Specific Section Rhythm

**Homepage:**
- Hero: full viewport height (100vh desktop / 90vh mobile)
- Gap to cards: 0px (seamless transition)
- Cards section: padding 80px vertical
- Footer: padding 64px top, 32px bottom

**Fine Dining:**
- Hero: 100vh, no padding top (fullscreen immersive)
- Each content section: 160px top/bottom desktop, 80px mobile
- Gallery section: 120px vertical, full-bleed images
- Menu sections: 120px vertical with subtle background shift

**Catering:**
- Hero: 85vh desktop / 75vh mobile (shorter, more practical)
- Alternating sections: white / warm off-white (`#FDFBF7`) every other section
- Section padding: 120px desktop / 80px mobile
- Pricing section: 160px vertical (emphasis zone)

**Events:**
- Hero: 90vh desktop / 80vh mobile
- Stats band: 80px vertical, dark background, full-width
- Services grid: 120px vertical
- Timeline section: 160px vertical (breathing room for steps)

---

## Animation & Motion Guidelines

### Philosophy
Animations serve **clarity and luxury**, not decoration. Every motion should feel deliberate and unhurried -- like a butler presenting a service, not a carnival barker demanding attention.

| Property | Value | Rationale |
|---|---|---|
| Default easing | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Smooth deceleration -- elegant, never jarring |
| Entrance easing | `cubic-bezier(0.0, 0, 0.2, 1)` | Gentle ease-out for reveals |
| Spring easing | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Subtle overshoot for playful elements |
| Default duration | 600ms | Unhurried luxury timing |
| Fast duration | 300ms | Hover states, quick feedback |
| Slow duration | 1000ms | Hero reveals, dramatic entrances |
| Stagger delay | 100ms per item | Cascading card reveals |

### Scroll Behaviors

**Parallax (Fine Dining only):**
- Hero background image: 0.3x scroll speed
- Decorative elements: 0.5x scroll speed
- Content: 1.0x (normal)

**Reveal on Scroll (All pages):**
- Trigger: element enters viewport at 20% from bottom
- Effect: `opacity: 0 -> 1`, `translateY(40px) -> 0`
- Duration: 600ms
- Easing: entrance easing
- Stagger: 100ms between sibling elements

**Section Transitions:**
- Fine Dining: fade + subtle blur (2px -> 0px) for dramatic sections
- Catering: simple fade-up, clean and light
- Events: slide-in from side (translateX) for service cards

### Hover States

| Element | Effect | Duration | Easing |
|---|---|---|---|
| Primary CTA | Background lightens 10%, scale(1.02), subtle shadow increase | 300ms | default |
| Card | translateY(-4px), shadow deepens | 300ms | default |
| Image | scale(1.05) within container (overflow hidden) | 600ms | default |
| Nav link | Gold underline slides in from left (width: 0 -> 100%) | 300ms | default |
| Text link | Color shift to gold, subtle underline | 200ms | default |

### Entrance Animations

**Hero Entrance Sequence (Fine Dining -- cinematic):**
1. Background image: fade in (0 -> 1), 1200ms, slow duration
2. Gold arc: draw-on effect (stroke-dashoffset), 800ms, 400ms delay
3. H1 heading: fade-up, 600ms, 600ms delay
4. Subtitle: fade-up, 600ms, 800ms delay
5. CTA button: fade-up, 600ms, 1000ms delay

**Hero Entrance (Catering -- warm welcome):**
1. Background: fade in, 800ms
2. Content block: fade-up, 600ms, 200ms delay
3. CTA: fade-up, 400ms, 400ms delay

**Hero Entrance (Events -- professional arrival):**
1. Background: slide-in from right, 800ms
2. Text content: fade-up staggered, 600ms, 300ms delay
3. Stats counter: number count-up animation, 1200ms, 600ms delay

### Micro-Interactions
- **Button click:** scale(0.98) for 100ms -- tactile feedback
- **Card selection:** border glow (gold, 2px, fade in 200ms)
- **Form focus:** border color to gold, subtle glow (0 0 0 3px rgba(212,175,55,0.15))
- **WhatsApp button:** gentle pulse animation (scale 1 -> 1.05 -> 1, 2s infinite)

---

## Image Asset List -- All 4 Pages

### Global Assets (Used across pages)

| ID | Description | Style | Format | Approx Size |
|---|---|---|---|---|
| `G-001` | myCHEF logo -- gold wordmark on transparent | Minimal, elegant, gold | PNG/SVG | 200x60px display |
| `G-002` | WhatsApp icon -- white on green circle | Standard brand icon | SVG | 56x56px |
| `G-003` | Bali villa silhouette -- subtle decorative | Minimal line art, gold stroke | SVG | Variable |
| `G-004` | Gold arc divider -- curved line element | Thin stroke, elegant | SVG | 120px wide |
| `G-005` | Instagram icon -- white on dark | Standard social icon | SVG | 24x24px |
| `G-006` | TikTok icon -- white on dark | Standard social icon | SVG | 24x24px |

### Homepage Assets

| ID | Description | Style | Format | Transparency |
|---|---|---|---|---|
| `HP-001` | Hero background -- Bali villa at dusk with pool reflection | Cinematic wide, warm ambient lighting | JPG (optimized) | No |
| `HP-002` | Fine Dining card image -- plated dish on dark table, dramatic lighting | Dark, moody, Michelin-style food photography | JPG | No |
| `HP-003` | Catering card image -- family-style spread on villa terrace, golden hour | Warm, lifestyle, inviting, sunlit | JPG | No |
| `HP-004` | Events card image -- elegant Bali wedding setup at villa | Professional event photography, crisp | JPG | No |
| `HP-005` | Decorative gold particles/texture overlay | Subtle shimmer, very low opacity | PNG | Yes |

### Fine Dining Assets

| ID | Description | Style | Format | Transparency |
|---|---|---|---|---|
| `FD-001` | Hero -- chef's hands plating a dish, extreme close-up, dark background | Cinematic, shallow depth of field, dramatic side-lighting | JPG | No |
| `FD-002` | Experience section -- intimate villa dining table setup at night | Atmospheric, candlelit, luxury tableware | JPG | No |
| `FD-003` | Menu hero -- overhead shot of tasting course on black plate | Flat lay, dark surface, precise plating | JPG | No |
| `FD-004` | Menu item 1 -- seafood course (tuna/lobster) | Macro food photography, dark background | JPG | No |
| `FD-005` | Menu item 2 -- pasta course (handmade ravioli) | Steam rising, warm tones, intimate | JPG | No |
| `FD-006` | Menu item 3 -- meat course (wagyu/lamb) | Rich textures, dramatic lighting | JPG | No |
| `FD-007` | Menu item 4 -- dessert course | Elegant, artistic plating | JPG | No |
| `FD-008` | Private dining -- couple dining by candlelight in villa | Intimate, candid luxury moment | JPG | No |
| `FD-009` | Wine pairing -- wine being poured into glass, close-up | Elegant, warm tones, crystal clarity | JPG | No |
| `FD-010` | Wine bottle selection -- curated bottles on dark shelf | Still life, moody, premium | JPG | No |
| `FD-011` | Gallery 1 -- multiple courses sequence (collage-ready) | Various angles, consistent dark style | JPG | No |
| `FD-012` | Gallery 2 -- villa dining atmosphere | Wide angle, evening ambience | JPG | No |
| `FD-013` | Gallery 3 -- ingredient close-ups (truffle, saffron, herbs) | Textural, dark background | JPG | No |
| `FD-014` | Chef portrait -- professional chef in whites, confident pose | Studio-style on dark background, half-body | JPG | No |
| `FD-015` | Chef in action -- chef cooking in villa kitchen | Candid, focused, professional | JPG | No |
| `FD-016` | Reviewer portraits (3x) -- elegant headshots | Soft lighting, warm tones | JPG | No |
| `FD-017` | Decorative Italian motif -- subtle gold olive branch | Minimal, elegant | SVG | Yes |

### Catering Assets

| ID | Description | Style | Format | Transparency |
|---|---|---|---|---|
| `CAT-001` | Hero -- villa terrace breakfast spread, morning light | Bright, warm, inviting, lifestyle | JPG | No |
| `CAT-002` | Services -- chef preparing fresh meal in villa kitchen | Bright, clean, documentary style | JPG | No |
| `CAT-003` | Meal plan -- weekly meal prep spread, organized containers | Clean, organized, overhead shot | JPG | No |
| `CAT-004` | Villa chef rental -- chef with family, casual interaction | Warm, candid, family-friendly | JPG | No |
| `CAT-005` | Healthy bowl -- colorful fresh ingredients, bright styling | Fresh, vibrant, appetizing | JPG | No |
| `CAT-006` | BBQ/spread -- villa poolside BBQ setup | Social, festive, relaxed | JPG | No |
| `CAT-007` | Kids meal -- child-friendly healthy plate | Playful but sophisticated | JPG | No |
| `CAT-008` | Dietary options -- vegan/gluten-free spread | Fresh, inclusive, colorful | JPG | No |
| `CAT-009` | Pricing ambiance -- happy family dining at villa table | Lifestyle, warm, genuine | JPG | No |
| `CAT-010` | Gallery 1 -- various catering spreads | Bright, diverse, lifestyle | JPG | No |
| `CAT-011` | Gallery 2 -- villa settings with food | Bright, location-focused | JPG | No |
| `CAT-012` | Gallery 3 -- ingredient freshness (Bali market produce) | Bright, tropical, colorful | JPG | No |
| `CAT-013` | FAQ decorative -- illustrated fresh ingredients border | Minimal, warm tones | SVG | Yes |
| `CAT-014` | Package card icons (3x) -- breakfast, lunch, dinner symbols | Minimal line icons, warm gold | SVG | Yes |

### Events Assets

| ID | Description | Style | Format | Transparency |
|---|---|---|---|---|
| `EVT-001` | Hero -- elegant Bali villa event setup at twilight | Wide, professional, dramatic sky | JPG | No |
| `EVT-002` | Wedding -- ceremony setup with floral arch at villa | Romantic, professional, wide | JPG | No |
| `EVT-003` | Wedding -- couple moment at reception | Candid, emotional, warm lighting | JPG | No |
| `EVT-004` | Corporate -- sleek business dinner setup | Modern, professional, clean lines | JPG | No |
| `EVT-005` | Corporate -- networking cocktail event | Dynamic, sophisticated | JPG | No |
| `EVT-006` | Private celebration -- birthday dinner with decorations | Festive, elegant, intimate | JPG | No |
| `EVT-007` | Private celebration -- anniversary setup | Romantic, refined, personalized | JPG | No |
| `EVT-008` | Rentals -- elegant tableware/charger plates | Product-style, clean background | JPG | No |
| `EVT-009` | Rentals -- luxury furniture/lounge setup | Modern, styled, aspirational | JPG | No |
| `EVT-010` | Staffing -- professional butler/service team | Uniformed, poised, professional | JPG | No |
| `EVT-011` | Staffing -- bartender crafting cocktail | Action shot, professional | JPG | No |
| `EVT-012` | Gallery 1 -- event wide shots | Diverse event types | JPG | No |
| `EVT-013` | Gallery 2 -- event details (place settings, florals) | Detail-focused, styled | JPG | No |
| `EVT-014` | Planning process -- consultation moment | Professional, friendly | JPG | No |
| `EVT-015` | Planning process -- setup in progress | Behind-the-scenes, professional | JPG | No |
| `EVT-016` | Icon set -- wedding, corporate, private celebration icons | Clean line icons, gold stroke | SVG | Yes |

---

## Component Library Spec -- Exact Visual Specs

### 1. Primary CTA Button

| Property | Value (All Pages) |
|---|---|
| Background | Gold gradient: `linear-gradient(135deg, #D4AF37, #E8D5A3)` |
| Text color | `#1A1A1A` (dark for contrast) |
| Font | Inter 500, 14px, uppercase, letter-spacing 0.1em |
| Padding | 16px 40px (desktop) / 14px 32px (mobile) |
| Border-radius | 0px (sharp luxury edges) |
| Hover | Background lightens, translateY(-2px), shadow: `0 8px 24px rgba(212,175,55,0.25)` |
| Active | scale(0.98) |
| Transition | all 300ms default easing |

**Variants:**
- `.btn-primary` -- Gold gradient (default)
- `.btn-outline` -- Transparent bg, 1px gold border, gold text (Fine Dining)
- `.btn-dark` -- `#1A1A1A` bg, gold text (Catering/Events on light sections)
- `.btn-whatsapp` -- `#25D366` bg, white text, rounded-full (floating only)

### 2. Service Cards (3-Column Layout)

| Property | Value |
|---|---|
| Background | Page-contextual (Fine Dining: `#0F0F0F`, Catering: `#FFFFFF`, Events: `#FFFFFF`) |
| Border-radius | 0px (sharp, luxury) |
| Border | 1px solid page-contextual border color |
| Padding | 32px (desktop) / 24px (mobile) |
| Image aspect | 16:10, object-fit cover |
| Title | Playfair Display 500, 24px (desktop) / 20px (mobile) |
| Description | Inter 400, 16px, line-height 1.6 |
| CTA link | Inter 500, 13px, uppercase, gold, with arrow icon |
| Hover | translateY(-4px), shadow deepens, image scale(1.05) |
| Transition | all 400ms default easing |

### 3. Package/Pricing Cards

| Property | Value |
|---|---|
| Background | `#FFFFFF` (Catering) or `#0F0F0F` (Fine Dining) |
| Border-radius | 0px |
| Border | 1px solid `#E8E2D9` (Catering) or `#2A2A2A` (Fine Dining) |
| Featured variant | 2px gold border, subtle gold glow shadow |
| Padding | 40px (desktop) / 28px (mobile) |
| Price display | Playfair Display 600, 36px desktop |
| Price prefix | Inter 400, 14px, "From" label |
| Feature list | Inter 400, 15px, checkmark icon (gold) |
| CTA | Full-width button at bottom |
| Hover (non-featured) | translateY(-4px), border color shifts toward gold |

### 4. Navigation Bar

| Property | Value |
|---|---|
| Position | Fixed top, z-index 1000 |
| Height | 72px desktop / 64px mobile |
| Background | `rgba(10,10,10,0.95)` + `backdrop-filter: blur(12px)` (all pages) |
| Border-bottom | 1px solid `rgba(255,255,255,0.06)` |
| Logo | Left-aligned, 24px height |
| Nav links | Right-aligned, Inter 500, 14px, uppercase, tracking 0.06em |
| Link color | `rgba(255,255,255,0.8)`, hover: `#FFFFFF`, active: `#D4AF37` |
| Active indicator | 2px gold underline, animated width |
| Mobile | Hamburger icon (3 lines, gold), full-screen overlay menu |
| Mobile menu bg | `#0A0A0A`, links centered vertically, 24px size |

### 5. Testimonial Card

| Property | Value |
|---|---|
| Background | Page-contextual (subtle variation from section bg) |
| Border-radius | 0px |
| Padding | 40px |
| Quote mark | Large decorative `"` in gold, 72px, Playfair Display |
| Quote text | Cormorant Garamond italic, 22px, line-height 1.5 |
| Avatar | 56px circle, object-fit cover |
| Name | Inter 600, 16px |
| Title/Role | Inter 400, 14px, muted color |
| Stars | 5 gold stars, 16px, SVG |

### 6. FAQ Accordion

| Property | Value |
|---|---|
| Item border-bottom | 1px solid page border color |
| Question padding | 24px 0 |
| Question font | Inter 500, 18px |
| Icon | Plus/minus, gold, 20px, smooth rotation |
| Answer padding | 0 0 24px 0 |
| Answer font | Inter 400, 16px, line-height 1.65 |
| Transition | height 400ms, opacity 300ms |
| Open state | Answer slides down, icon rotates 45deg |

### 7. Gallery Grid

| Property | Value |
|---|---|
| Layout | Masonry or 3-column grid |
| Gap | 8px (tight, editorial) |
| Image hover | scale(1.03), overlay with view icon |
| Overlay | `rgba(0,0,0,0.4)` + centered eye icon |
| Lightbox | Full-screen, dark bg, prev/next arrows |
| Mobile | 2-column grid, 6px gap |

### 8. Form Elements

| Property | Value |
|---|---|
| Input height | 52px (generous touch target) |
| Input bg | Page-contextual (dark: `#1A1A1A`, light: `#F8F7F5`) |
| Input border | 1px solid page border color |
| Input border-focus | 1px solid `#D4AF37` + glow: `0 0 0 3px rgba(212,175,55,0.12)` |
| Input padding | 0 16px |
| Input font | Inter 400, 16px |
| Label | Inter 500, 13px, uppercase, tracking 0.08em, muted color |
| Label margin-bottom | 8px |
| Textarea | Min-height 140px, padding 16px |
| Select | Same as input, custom dropdown arrow (gold) |
| Error state | Border `#E74C3C`, error text 13px below |
| Submit button | Full-width primary CTA |

### 9. Mobile Bottom Sticky CTA

| Property | Value |
|---|---|
| Position | Fixed bottom, z-index 999 |
| Height | 64px |
| Background | `#FFFFFF` (Catering/Events) or `#0A0A0A` (Fine Dining) |
| Border-top | 1px solid page border |
| Padding | 12px 24px |
| Button | Full-width, 48px height |
| Shadow | `0 -4px 16px rgba(0,0,0,0.08)` |
| Content | "Reserve Now" or "Get a Quote" |

### 10. Event Timeline Component

| Property | Value |
|---|---|
| Layout | Vertical line with alternating left/right nodes (desktop) |
| Line | 2px solid `#D4AF37`, centered |
| Node dot | 16px circle, gold fill, white border 3px |
| Step card | White bg, 1px border, 32px padding |
| Step number | Playfair Display 700, 48px, gold, semi-transparent |
| Step title | Inter 600, 20px |
| Step description | Inter 400, 16px |
| Mobile | Single column, line on left, all cards right |
| Animation | Nodes scale in on scroll, cards fade-up |

---
---


# PART 2: PAGE 1 -- HOMEPAGE (Luxury Gateway)

## 1. Visual Design Diagnosis

**What this page must communicate:** The Homepage is not a content page -- it is a **gateway decision point**. Visitors arrive from Instagram, TikTok, or Google knowing they want a chef experience in Bali, but unsure which pathway fits. The page has 3-5 seconds to orient them and guide choice.

**Core visual message:** *"One extraordinary brand. Three extraordinary experiences. Which is yours?"*

**Visual approach:** Dark, immersive theater. The black background creates a "lights down" sensation where the three pathway cards become illuminated stages. Each card is a preview of its destination page -- Fine Dining card feels moody and exclusive, Catering card feels warm and bright, Events card feels crisp and dynamic. The hero establishes Bali villa luxury context, then immediately presents the three doors.

**Before -> After transformation:**
- **Before:** Generic hospitality site with text-heavy descriptions of services, stock photos, confusing navigation
- **After:** Cinematic dark gateway where three distinct visual worlds are presented as clear, beautiful, clickable destinations -- each card giving an immediate emotional taste of what awaits

---

## 2. Visual Hierarchy Review

### What the User Sees (In Order):

**1st -- Hero Statement (0-2 seconds):**
- "Private Chef, Fine Dining & Event Experiences in Bali Villas"
- Gold-accented, centered, against dark villa background
- **Why first:** The largest typography on the page establishes context immediately. The user must know: "I'm in the right place, this is about luxury food experiences in Bali villas."

**2nd -- Three Pathway Cards (2-5 seconds):**
- Three large, visually distinct cards side by side (desktop) or stacked (mobile)
- Fine Dining: dark card with moody food imagery
- Catering: warm card with bright lifestyle imagery
- Events: clean card with professional event imagery
- **Why second:** After context, immediate choice. Each card's visual personality communicates more than words could.

**3rd -- Card Titles + "Explore" CTA (5-8 seconds):**
- "Fine Dining", "Catering", "Events" -- clear Playfair Display headings
- Subtle CTA: "Explore Experience ->"
- **Why third:** Once the eye has chosen a card that resonates, the title and CTA confirm the choice and provide action.

**4th -- Trust Signals (below fold):**
- Brief tagline: "Award-winning chefs. Unforgettable moments."
- Social proof: "500+ villa experiences delivered"
- **Why fourth:** Only after the pathway choice is presented do we reinforce trust. This supports the decision, not distracts from it.

### Hierarchy Before -> After:
| Element | Before (Generic) | After (Designed) |
|---|---|---|
| Hero | Small headline, stock villa photo | Fullscreen cinematic hero, gold typography, immersive |
| Services | Text list with small icons | Three large visual cards, each a world unto itself |
| Navigation | Standard top nav only | Nav + card-based pathway selection |
| Trust | Cluttered testimonials | Minimal, elegant stats bar |

---

## 3. Layout and Spacing Review

### Section Structure

```
+-------------------------------------------------+
|  NAVIGATION BAR (fixed, 72px, dark glass)       |
+-------------------------------------------------+
|                                                   |
|  HERO SECTION (100vh)                             |
|  - Subtle villa background image (dark overlay)   |
|  - Gold glow effect centered                      |
|  - H1 centered                                    |
|  - Subtitle below                                 |
|  - Scroll indicator at bottom                     |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  PATHWAY CARDS SECTION                            |
|  - Background: #0A0A0A                            |
|  - Padding: 120px top/bottom desktop              |
|  - Padding: 80px top/bottom mobile                |
|  - 3-column grid (desktop)                        |
|  - 1-column stack (mobile)                        |
|  - Gap: 24px between cards                        |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  TRUST BAR                                        |
|  - Background: #0F0F0F                            |
|  - Padding: 64px vertical                         |
|  - 3 stats centered: experiences, chefs, villas   |
|                                                   |
+-------------------------------------------------+
|  FOOTER                                           |
|  - Background: #0A0A0A                            |
|  - Padding: 80px top, 32px bottom                 |
+-------------------------------------------------+
```

### Specific Spacing Values

| Element | Desktop | Mobile |
|---|---|---|
| Hero height | 100vh | 90vh |
| Hero content vertical center | flex, centered | flex, centered |
| Hero H1 margin-bottom | 24px | 16px |
| Hero subtitle margin-bottom | 48px | 32px |
| Cards section padding-top | 120px | 80px |
| Cards section padding-bottom | 120px | 80px |
| Cards max-width | 1280px | 100% - 32px |
| Cards grid gap | 24px | 16px |
| Card internal padding | 0 (image to edge) + 32px text area | 0 + 24px text area |
| Card image height | 280px (desktop) / 200px (mobile) | 200px |
| Card text area padding | 32px | 24px |
| Card gap below title | 12px | 8px |
| Card gap below description | 24px | 20px |
| Trust bar padding | 64px vertical | 48px vertical |
| Trust item gap | 80px | 40px |
| Footer padding-top | 80px | 64px |

### Grid Alignment
- Content max-width: 1280px, centered
- Cards use CSS Grid: `grid-template-columns: repeat(3, 1fr)` desktop
- Mobile: `grid-template-columns: 1fr`
- All text within cards left-aligned
- Stats in trust bar: flex, `justify-content: center`, `gap: 80px`

---

## 4. Typography Review

### Font Application

| Element | Font | Weight | Desktop | Mobile | Line Height | Color |
|---|---|---|---|---|---|---|
| Hero H1 | Playfair Display | 500 | 64px | 36px | 1.1 | `#FFFFFF` |
| Hero H1 accent | Playfair Display | 500 | 64px | 36px | 1.1 | `#D4AF37` ("Bali Villas") |
| Hero subtitle | Inter | 300 | 20px | 16px | 1.5 | `rgba(255,255,255,0.7)` |
| Section label | Inter | 500 | 12px | 11px | 1.4 | `#D4AF37`, uppercase |
| Card title | Playfair Display | 600 | 32px | 24px | 1.2 | Card-specific |
| Card description | Inter | 400 | 16px | 14px | 1.6 | Card-specific |
| Card CTA | Inter | 500 | 14px | 13px | 1.4 | `#D4AF37`, uppercase |
| Stat number | Playfair Display | 700 | 40px | 32px | 1.0 | `#D4AF37` |
| Stat label | Inter | 400 | 14px | 13px | 1.4 | `rgba(255,255,255,0.6)` |

### Color-Specific Typography

| Card | Title Color | Body Color |
|---|---|---|
| Fine Dining card | `#F5F0E8` | `rgba(245,240,232,0.7)` |
| Catering card | `#2C2419` | `rgba(44,36,25,0.7)` |
| Events card | `#1A1A1A` | `rgba(26,26,26,0.7)` |

### Typography Scale Notes
- The hero uses **size contrast** (64px H1 vs 20px subtitle, ~3:1 ratio) to create dramatic hierarchy
- Card titles at 32px are large enough to feel substantial but small enough that three fit comfortably
- The section label "CHOOSE YOUR EXPERIENCE" uses wide tracking (0.12em) to create breathing room before the cards
- Gold is used **sparingly** for emphasis only -- never for body text

---

## 5. Color System Review

### Homepage Palette

| Token | HEX | Usage |
|---|---|---|
| Page background | `#0A0A0A` | Main page background -- lets cards be the stars |
| Hero bg overlay | `rgba(10,10,10,0.6)` | Over villa image to ensure text legibility |
| Hero glow | `radial-gradient(ellipse, rgba(212,175,55,0.12), transparent 60%)` | Subtle gold ambient light behind text |
| Gold accent | `#D4AF37` | CTA links, stat numbers, labels, scroll indicator |
| White | `#FFFFFF` | Hero H1, nav text |
| White muted | `rgba(255,255,255,0.6)` | Subtitles, secondary text |
| Card Fine Dining bg | `#0F0F0F` | Dark card -- previews the dark dining experience |
| Card Catering bg | `#F5F0E8` | Warm cream card -- previews bright catering experience |
| Card Events bg | `#FFFFFF` | Clean white card -- previews professional events |
| Card border | `rgba(255,255,255,0.06)` | Subtle definition on dark bg |
| Trust bar bg | `#0F0F0F` | Slight elevation from page bg |

### Color Intent
- The **three cards use three different backgrounds** to visually signal they lead to different worlds
- Fine Dining card is darkest (almost black) -- mystery, exclusivity
- Catering card is warm cream -- approachability, warmth
- Events card is pure white -- cleanliness, professionalism
- The **page background remains consistently dark** so the lighter cards "pop" with more luminosity
- Gold is the only accent color across all -- the unifying thread

---

## 6. Image and Visual Asset Direction

### Hero Background (HP-001)
- **Content:** Bali luxury villa at dusk/evening, pool in foreground reflecting warm lights, open-air pavilion visible
- **Style:** Cinematic wide-angle, shallow depth of field on foreground, warm color temperature (3200K feel)
- **Treatment:** Dark overlay at 60% opacity. The image should feel like a backdrop, not the main event.
- **Avoid:** Bright daylight images, overly saturated tropical colors, villas that look like hotels rather than private residences
- **Mood:** "The evening is about to begin. What will you choose?"

### Fine Dining Card Image (HP-002)
- **Content:** Single beautifully plated dish on dark table surface, dramatic side-lighting catching the plate edge
- **Style:** Michelin-level food photography, dark and moody, precise plating visible
- **Treatment:** Full-width within card, 280px height desktop, no border-radius
- **Avoid:** Bright/overhead lighting, cluttered compositions, casual plating
- **Mood:** "This is an experience worth dressing up for."

### Catering Card Image (HP-003)
- **Content:** Family-style food spread on a villa terrace table, golden hour light, multiple dishes visible
- **Style:** Lifestyle food photography, warm and inviting, slightly wider composition showing context
- **Treatment:** Full-width within card, same dimensions
- **Avoid:** Dark/moody treatment, overly formal styling, no people visible
- **Mood:** "Good food, great company, zero effort."

### Events Card Image (HP-004)
- **Content:** Elegant Bali wedding or event table setup at villa, evening, candles lit
- **Style:** Professional event photography, balanced lighting, showing scale and detail
- **Treatment:** Full-width within card, same dimensions
- **Avoid:** Party/club aesthetic, low-quality phone photos, cramped setups
- **Mood:** "Every detail considered, every moment memorable."

---

## 7. Component Review

### Navigation Bar
- Fixed top, glass-morphism effect (blur 12px over dark bg)
- Logo left: "myCHEF" in gold/white
- Links right: Fine Dining | Catering | Events | Contact Us
- Mobile: hamburger opens full-screen overlay with large centered links (24px)
- Active page indicator: 2px gold underline

### Pathway Cards
- Large clickable cards with image top + text bottom
- Image area: 16:10 aspect, overflow hidden for hover zoom
- Text area: Title (Playfair Display), description (Inter), CTA link (gold, uppercase)
- Hover: entire card lifts (-6px), shadow deepens, image zooms 1.05x
- **Critical:** Each card's visual personality must match its destination page

### Trust Bar
- Three statistics in a row: "500+ Experiences", "50+ Chefs", "Villas Across Bali"
- Number in gold Playfair Display, label in white Inter
- Simple, elegant, no decorative clutter
- Mobile: stack vertically with 24px gap

### Footer
- 4-column grid: Brand, Quick Links, Services, Contact
- Social icons: Instagram, WhatsApp, TikTok
- Bottom bar: copyright + "Made with care in Bali"
- Mobile: 2-column then single column stack

---

## 8. Mobile-First Design Review

### Hero Mobile Layout
- Height: 90vh (not full 100vh to hint at content below)
- H1: 36px (generous but fits on 375px screen in ~4 lines max)
- Subtitle: 16px, max-width 90%
- Text centered with comfortable side padding (24px)
- Scroll indicator: small animated chevron at bottom center

### Cards Mobile Layout
- Single column stack
- Card width: 100% minus 32px padding (16px each side)
- Image height: 200px (large enough to feel premium)
- Card gap: 16px
- Each card gets full attention -- no competing cards visible
- Card title: 24px, description: 14px
- Tap target: entire card is clickable (minimum 200px height)

### Sticky Navigation
- Fixed top, 64px height
- Hamburger menu icon right
- Logo centered or left
- On scroll: subtle background darkening

### Floating WhatsApp Button
- Bottom-right corner
- 56px diameter
- 16px from right edge, 16px from bottom
- Above sticky CTA if present
- Pulse animation

### Performance
- Hero image: max 200KB, lazy-load cards below fold
- Cards: lazy-load images as they enter viewport
- No large JS bundles blocking render
- CSS-only animations where possible

---

## 9. Accessibility Review

| Check | Status | Notes |
|---|---|---|
| Hero text contrast | PASS | White on dark bg = ~15:1 ratio |
| Card text contrast (dark) | PASS | Cream `#F5F0E8` on `#0F0F0F` = ~14:1 |
| Card text contrast (light) | PASS | Dark brown `#2C2419` on `#F5F0E8` = ~10:1 |
| Gold accent contrast | WARNING | `#D4AF37` on white = 2.8:1 -- **only use for decorative elements, not body text** |
| Nav link tap targets | PASS | 64px height = comfortable touch target |
| Card tap targets | PASS | Entire card clickable, >200px height |
| Focus indicators | PASS | Gold outline (2px) on all interactive elements |
| Screen reader | PASS | Cards as `<a>` tags with descriptive text |
| Reduced motion | PASS | Respect `prefers-reduced-motion` -- disable parallax, instant transitions |
| Alt text | REQUIRED | All images must have descriptive alt text |

**Gold-on-white issue resolution:** The gold accent color `#D4AF37` does NOT meet WCAG AA contrast on white backgrounds (2.8:1 vs required 4.5:1). Solutions:
- Never use gold text on white backgrounds
- Use dark text (`#2C2419`) on white/cream cards
- Gold is reserved for: dark backgrounds, decorative elements, borders, icons
- On light cards, use dark text with gold hover states

---

## 10. Final Visual Design Direction

The Homepage is a **dark luxury theater** where three illuminated stage doors present themselves. The black background creates infinite depth; the gold typography whispers exclusivity; the three cards are windows into three distinct emotional worlds -- each designed to pull the right visitor toward their perfect experience. Every pixel exists to make the pathway choice feel effortless, beautiful, and inevitable.

---
---


# PART 3: PAGE 2 -- ITALIAN FINE DINING VILLA

## 1. Visual Design Diagnosis

**What this page must communicate:** This is the most emotionally charged page. Fine Dining is not about food -- it is about **transformation**. The visitor must feel: *"This evening will be one of the most memorable experiences of my trip to Bali."*

**Core visual message:** *"A Michelin-caliber chef creates a private culinary theater in your villa. This is not dinner -- this is an event."*

**Visual approach:** Total darkness with surgical lighting. The page should feel like entering a Michelin-starred restaurant before service -- hushed, anticipatory, every detail considered. The black background is not empty space; it is the void that makes the food, the gold accents, and the candlelight glow. Think: Aman Resorts website meets a chef's table experience.

**Before -> After transformation:**
- **Before:** Restaurant menu PDF thrown online, bright photos, cluttered text, generic WordPress template
- **After:** Immersive cinematic experience where scrolling feels like moving through courses of a tasting menu -- each section a new act, each image carefully lit like a still from a film

---

## 2. Visual Hierarchy Review

### What the User Sees (In Order):

**1st -- The Chef's Hands (0-3 seconds):**
- Fullscreen hero: extreme close-up of chef plating, dark background, dramatic side-light
- H1: "Private Fine Dining in Your Bali Villa" (cream, large)
- Subtitle: "An intimate culinary experience crafted by award-winning chefs"
- **Why first:** The image of hands at work communicates craft and intimacy before any word is read. This is personal.

**2nd -- The Experience Promise (3-8 seconds):**
- "The Experience" section: dark background, elegant typography
- 3-4 pillars: "Personalized Menu", "Villa Setting", "Wine Pairing", "Private Chef"
- Gold icons, cream text
- **Why second:** After the emotional hook of the hero, the user needs to understand WHAT this experience consists of. The pillars provide scannable structure.

**3rd -- The Menu (8-15 seconds):**
- Menu section with actual courses visible
- Course names in Cormorant Garamond italic, descriptions in light Inter
- Prices visible but not dominant
- **Why third:** The menu is the proof. After emotion and promise, the concrete offering validates interest.

**4th -- Gallery / Social Proof (15-25 seconds):**
- Dark gallery grid: beautifully plated dishes
- Review quote: large, italic, cream on black
- **Why fourth:** Trust and proof. The gallery lets the food speak; the review adds human validation.

**5th -- Reserve CTA (25+ seconds):**
- Gold CTA button: "Reserve Your Experience"
- Dark form or WhatsApp direct link
- **Why fifth:** Only after full immersion does the conversion ask feel natural.

### Hierarchy Before -> After:
| Element | Before (Generic) | After (Designed) |
|---|---|---|
| Hero | Small header image, text overlay | Fullscreen cinematic, hands-plating close-up |
| Menu | PDF download or plain text list | Elegant course-by-course reveal, dark panels |
| Experience | Bullet points in a row | Atmospheric pillars with gold iconography |
| Gallery | Mixed-quality photos, no curation | Curated masonry grid, consistent dark aesthetic |
| Reviews | Small star ratings | Large editorial quote with portrait |

---

## 3. Layout and Spacing Review

### Section Structure

```
+-------------------------------------------------+
|  NAVIGATION (fixed, glass, 72px)                |
+-------------------------------------------------+
|                                                   |
|  HERO (100vh)                                     |
|  - Full-bleed background image                    |
|  - Dark gradient overlay (bottom 60%)             |
|  - Content: bottom-left aligned                   |
|  - H1, subtitle, CTA button                       |
|  - Scroll indicator                               |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  THE EXPERIENCE (160px padding)                   |
|  - Section label: "THE EXPERIENCE"                |
|  - H2: "An Evening of Culinary Artistry"          |
|  - 4-column icon pillars (desktop)                |
|  - 2-column (tablet) / 1-column (mobile)          |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  PRIVATE DINING (160px padding)                   |
|  - Asymmetric layout: image left 55%, text right  |
|  - Image: intimate villa table setting            |
|  - Text: description + bullet highlights          |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  MENUS (200px padding -- emphasis section)        |
|  - Section label: "TASTING MENUS"                 |
|  - H2: "Curated by Our Executive Chef"            |
|  - 3 menu cards side by side                      |
|  - Each: course count, description, price, CTA    |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  WINE PAIRING (160px padding)                     |
|  - Split: text left, image right                  |
|  - Wine list preview                              |
|  - Sommelier note in italic                       |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  GALLERY (120px padding)                          |
|  - Full-width masonry grid                        |
|  - 3 columns desktop, 2 mobile                    |
|  - 8px gap (tight, editorial)                     |
|  - Hover: overlay + zoom                          |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  ABOUT THE CHEF (160px padding)                   |
|  - Portrait + bio text                            |
|  - Chef name large, credentials                   |
|  - Signature or credential badges                 |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  REVIEWS (160px padding)                          |
|  - Large editorial quote                          |
|  - 5-star rating                                  |
|  - Reviewer avatar + name                         |
|  - Optional: 3-card carousel                      |
|                                                   |
+-------------------------------------------------+
|                                                   |
|  CONTACT / RESERVE (160px padding)                |
|  - Dark form on slightly elevated surface         |
|  - Or: prominent WhatsApp CTA                     |
|  - Gold CTA button                                |
|                                                   |
+-------------------------------------------------+
|  FOOTER                                           |
|  - Background: #0A0A0A                            |
|  - 4-column grid                                  |
+-------------------------------------------------+
```

### Specific Spacing Values

| Element | Desktop | Mobile |
|---|---|---|
| Section vertical padding | 160px | 80px |
| Menu section padding | 200px | 100px |
| Content max-width | 1280px | 100% - 32px |
| Hero text bottom offset | 120px from bottom | 80px from bottom |
| Hero text left offset | 80px | 24px |
| Experience pillars gap | 48px | 32px |
| Image-text split gap | 64px | 32px |
| Menu cards gap | 24px | 16px |
| Gallery gap | 8px | 6px |
| Review quote max-width | 800px | 100% |

---

## 4. Typography Review

### Fine Dining Typography Scale (Detailed)

| Element | Font | Weight | Desktop | Mobile | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|---|
| Hero H1 | Playfair Display | 600 | 72px | 40px | 1.05 | -0.02em | `#F5F0E8` |
| Hero subtitle | Cormorant Garamond | 400 italic | 22px | 16px | 1.5 | 0.02em | `rgba(245,240,232,0.7)` |
| Hero CTA | Inter | 500 | 14px | 14px | 1.4 | 0.1em | `#1A1A1A` (on gold) |
| Section label | Inter | 500 | 11px | 10px | 1.4 | 0.14em | `#D4AF37`, uppercase |
| Section H2 | Playfair Display | 500 | 48px | 32px | 1.1 | -0.01em | `#F5F0E8` |
| Section H3 | Playfair Display | 500 | 28px | 22px | 1.3 | 0 | `#F5F0E8` |
| Body paragraph | Inter | 300 | 18px | 16px | 1.7 | 0.01em | `rgba(245,240,232,0.8)` |
| Body strong | Inter | 500 | 18px | 16px | 1.7 | 0.01em | `#F5F0E8` |
| Menu course name | Cormorant Garamond | 500 | 22px | 18px | 1.3 | 0.01em | `#F5E6C8` |
| Menu course desc | Inter | 300 | 15px | 14px | 1.6 | 0.01em | `rgba(245,240,232,0.7)` |
| Menu price | Playfair Display | 400 | 18px | 16px | 1.4 | 0.02em | `#D4AF37` |
| Wine name | Cormorant Garamond | 500 | 20px | 17px | 1.3 | 0 | `#F5E6C8` |
| Wine note | Cormorant Garamond | 400 italic | 16px | 15px | 1.5 | 0.01em | `rgba(245,240,232,0.6)` |
| Gallery caption | Inter | 400 | 13px | 12px | 1.4 | 0.02em | `rgba(245,240,232,0.7)` |
| Chef name | Playfair Display | 600 | 36px | 26px | 1.2 | 0 | `#F5F0E8` |
| Chef title | Inter | 400 | 14px | 13px | 1.4 | 0.08em | `#D4AF37`, uppercase |
| Chef bio | Inter | 300 | 17px | 16px | 1.7 | 0 | `rgba(245,240,232,0.75)` |
| Review quote | Cormorant Garamond | 400 italic | 28px | 20px | 1.45 | 0.01em | `#F5E6C8` |
| Reviewer name | Inter | 600 | 16px | 15px | 1.4 | 0 | `#F5F0E8` |
| Reviewer detail | Inter | 400 | 14px | 13px | 1.4 | 0 | `rgba(245,240,232,0.5)` |
| Nav links | Inter | 400 | 14px | -- | 1.4 | 0.08em | `rgba(255,255,255,0.7)`, uppercase |
| Footer heading | Inter | 600 | 14px | 14px | 1.4 | 0.06em | `#F5F0E8`, uppercase |
| Footer text | Inter | 400 | 14px | 13px | 1.6 | 0 | `rgba(245,240,232,0.6)` |

### Typography Intent
- **Cormorant Garamond italic** for subtitles, wine notes, and reviews adds European elegance -- it feels like reading a sommelier's handwritten note
- **Playfair Display** at large sizes creates editorial gravitas -- this is not casual dining
- **Inter at 300 weight** for body text creates an ethereal, weightless reading experience on dark backgrounds
- Line height of 1.7 for body text is generous -- each line breathes, matching the unhurried pace of a multi-course dinner

---

## 5. Color System Review

### Fine Dining Complete Palette

| Token | HEX | RGBA | Usage |
|---|---|---|---|
| Page background | `#050505` | -- | Absolute black -- food is the only color |
| Surface | `#0F0F0F` | -- | Card backgrounds, menu panels |
| Elevated surface | `#1A1A1A` | -- | Form containers, elevated cards |
| Hover surface | `#222222` | -- | Interactive hover states |
| Border subtle | `#2A2A2A` | -- | Dividers, card borders |
| Border gold | `#D4AF37` | -- | Featured elements, active states |
| Text primary | `#F5F0E8` | -- | Headings -- warm cream |
| Text secondary | `#A09888` | -- | Body text -- warm grey |
| Text muted | `#6B6560` | -- | Captions, labels, metadata |
| Gold primary | `#D4AF37` | -- | CTAs, accents, icons, prices |
| Gold light | `#E8D5A3` | -- | Hover gold, highlights |
| Gold dark | `#B8962E` | -- | Pressed states |
| Cream | `#F5E6C8` | -- | Secondary headings, review quotes |
| Hero overlay | -- | `rgba(5,5,5,0.5)` | Hero image darkening |
| Hero gradient | -- | `linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,0.1) 100%)` | Bottom-to-top vignette |
| Gold glow | -- | `radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 60%)` | Ambient gold light |
| Menu card border | -- | `1px solid #2A2A2A` | Standard menu card |
| Menu card featured border | -- | `1px solid #D4AF37` | Featured/Popular menu |
| Form input bg | `#141414` | -- | Slightly lighter than surface |
| Form focus glow | -- | `0 0 0 3px rgba(212,175,55,0.15)` | Gold focus ring |

### Color Usage Rules
1. **Background hierarchy:** Page (`#050505`) -> Surface (`#0F0F0F`) -> Elevated (`#1A1A1A`) -> Input (`#141414`). Each level is slightly lighter, creating depth.
2. **Gold is precious:** Never use gold for large areas. Maximum: CTA buttons (small), prices, icons, labels, borders on featured items.
3. **Cream vs white:** Use cream (`#F5F0E8`) for all text -- pure white (`#FFFFFF`) is too harsh on dark backgrounds and creates eye strain.
4. **Image integration:** All food photography should be shot on dark backgrounds or with dark surroundings. No bright, daylight food photos.

---

## 6. Image and Visual Asset Direction

### Hero Image (FD-001)
- **Content:** Extreme close-up of chef's hands carefully placing the final garnish on a plate
- **Style:** Cinematic, shallow DOF (f/1.4 feel), dramatic side-lighting from left, black background
- **Lighting:** Single source, warm 3200K, creating long shadows
- **Mood:** Intimacy, precision, craft
- **Avoid:** Wide shots, bright backgrounds, smiling faces (save for About section)
- **Display:** Full-bleed, dark gradient overlay on bottom half

### The Experience -- Pillar Icons
- 4 gold SVG icons at 48px:
  - `custom-menu`: Stylized plate with fork/knife arrangement
  - `villa-setting`: Villa silhouette with palm tree
  - `wine-pairing`: Wine glass with subtle glow
  - `private-chef`: Chef hat with gold accent

### Private Dining Image (FD-008)
- **Content:** Intimate table for two at a Bali villa, candlelit, ocean or rice field view in background
- **Style:** Atmospheric, warm tones, shot from a respectful distance
- **Lighting:** Candlelight + ambient villa lighting
- **Mood:** Romance, exclusivity, "this could be us"

### Menu Card Images
Each menu card features a representative course image:
- **4-Course Menu:** Light appetizer (FD-004 -- seared tuna or similar)
- **6-Course Menu:** Signature pasta or fish course (FD-005)
- **8-Course Tasting:** Showpiece main or dessert (FD-007)

### Gallery Images (FD-011 through FD-013)
- 8-12 images in masonry grid
- All shot with consistent dark, moody treatment
- Mix of: plated courses, ingredient close-ups, villa dining atmosphere
- Consistent aspect ratios: mix of 1:1, 3:2, 2:3 for masonry interest

### Chef Portrait (FD-014)
- **Content:** Professional chef, whites or dark chef coat, confident but approachable expression
- **Style:** Studio portrait on dark background, Rembrandt lighting
- **Cropping:** Half-body, slightly angled
- **Display:** 400px width, left-aligned with bio text to the right

### Review Section
- Large decorative opening quote mark (72px, gold, Playfair Display)
- Quote text in Cormorant Garamond italic, 28px desktop
- 5 gold stars (SVG, 20px each)
- Reviewer avatar: 64px circle

---

## 7. Component Review

### Menu Cards (Critical Component)
- Background: `#0F0F0F`
- Border: 1px solid `#2A2A2A` (standard) or `#D4AF37` (featured/popular)
- Featured card has: gold border + "Most Popular" label (gold pill badge)
- Internal structure:
  - Menu name: H3, Playfair Display 500, 28px
  - Course count: Label, Inter 500, 11px uppercase, gold
  - Description: Inter 300, 16px, muted
  - Course preview: 3-4 items listed, Cormorant Garamond italic
  - Price: Playfair Display 400, 20px, gold
  - CTA: "Reserve This Menu" -- gold outline button
- Padding: 40px
- Hover: border shifts to gold, subtle lift

### Wine Pairing Section
- Split layout: text 45% left, image 55% right
- Wine list items:
  - Wine name: Cormorant Garamond 500, 20px, cream
  - Vintage/region: Inter 400, 13px, muted
  - Note: Cormorant Garamond italic, 15px, muted
- Sommelier quote: large italic text with attribution
- Image: wine being poured (FD-009), dark atmospheric

### Gallery Component
- Masonry grid: 3 columns desktop, 2 mobile
- 8px gap (tight, editorial)
- Image hover: dark overlay fades in (40% opacity), centered "View" icon
- Click opens lightbox with prev/next navigation
- All images lazy-loaded

### Testimonial/Review Card
- Background: `#0F0F0F` with subtle border
- Large decorative `"` in gold, 72px
- Quote: Cormorant Garamond italic, 28px desktop / 20px mobile
- 5 gold stars (20px SVG)
- Reviewer: 64px avatar, name (Inter 600), detail (Inter 400 muted)
- Max-width: 800px, centered

### Contact Form
- Container: `#1A1A1A` background, 1px `#2A2A2A` border
- Fields: dark input (`#141414`), gold focus
- Labels: Inter 500, 11px, uppercase, muted
- Submit: full-width gold CTA
- Alternative: "Or chat on WhatsApp" link below

---

## 8. Mobile-First Design Review

### Hero Mobile Layout
- Full viewport height (100vh)
- Background image: `object-position: center` (focus on hands)
- Gradient overlay: stronger on mobile (text needs more contrast)
- H1: 40px, left-aligned with 24px padding
- Subtitle: 16px, max 90% width
- CTA: full-width, 52px height, below subtitle with 32px margin
- Scroll indicator: small chevron, bottom center

### Experience Pillars Mobile
- Single column stack
- Each pillar: icon (48px) + title (22px) + description (16px)
- Centered alignment
- 32px gap between pillars
- Icon in gold, title in cream, description in muted

### Menu Cards Mobile
- Single column, full width minus 32px padding
- Image at top of each card (16:10 aspect)
- Text padding: 28px
- Featured card gets gold top border (4px) instead of full border
- Stacked vertically with 16px gap

### Gallery Mobile
- 2-column masonry
- 6px gap
- Images: tap to open full-screen lightbox
- Swipe gesture for prev/next in lightbox

### Chef Section Mobile
- Portrait: full width, 16:9 crop (focus on face/upper body)
- Bio text: below portrait, full width
- Credentials as horizontal scroll or stacked tags

### Sticky Elements Mobile
- Navigation: fixed, 64px, hamburger menu
- Bottom sticky CTA: "Reserve Now" button, 64px height, appears after scrolling past hero
- WhatsApp float: 56px circle, bottom-right (above sticky CTA)

### Font Size Adjustments
- H1: 72px -> 40px (44% reduction)
- H2: 48px -> 32px (33% reduction)
- Body: 18px -> 16px (minimal -- body stays readable)
- Labels: 11px -> 10px (still legible)
- Review quote: 28px -> 20px

---

## 9. Accessibility Review

| Check | Status | Notes |
|---|---|---|
| Cream text on black bg | PASS | `#F5F0E8` on `#050505` = ~18:1 ratio -- excellent |
| Gold text on black bg | PASS | `#D4AF37` on `#050505` = ~8.5:1 -- exceeds AA |
| Muted text on black bg | PASS | `#A09888` on `#050505` = ~8:1 -- exceeds AA |
| Muted text on surface | PASS | `#6B6560` on `#0F0F0F` = ~4.8:1 -- passes AA |
| Nav tap target | PASS | 64px height |
| CTA button | PASS | 52px height, 14px text |
| Form input | PASS | 52px height -- excellent touch target |
| Focus indicator | PASS | Gold outline 2px + glow |
| Alt text | REQUIRED | All food images need descriptive alt |
| ARIA labels | REQUIRED | Icon-only buttons need labels |
| Keyboard nav | REQUIRED | All interactive elements tab-reachable |
| Reduced motion | REQUIRED | `prefers-reduced-motion` support |

### Fine Dining Specific Accessibility Notes
- **Dark theme is the default** -- no toggle needed, this page is always dark
- **Gold on dark contrast is excellent** (~8.5:1) -- safe for all text sizes
- **Image descriptions are critical** -- food photography must have alt text describing the dish for screen readers
- **Form validation:** clear error messages in accessible gold/red colors
- **Lightbox:** keyboard navigation (Escape to close, arrows for prev/next), focus trap

---

## 10. Final Visual Design Direction

The Fine Dining page is a **culinary cathedral** -- total darkness illuminated only by the golden glow of exceptional food, warm cream typography, and candlelight ambience. Every section unfolds like a tasting menu course, with deliberate pacing, generous spacing, and imagery that makes the viewer's mouth water. The experience should feel less like browsing a website and more like being seated at the chef's table, anticipating an unforgettable evening.

---
---


# PART 4: PAGE 3 -- CATERING VILLA (Relaxed Warm Luxury)

## 1. Visual Design Diagnosis

**What this page must communicate:** Catering is about **effortless living**. The visitor is likely a villa guest, family, or group who wants delicious, healthy food without any of the work. The emotional promise is not excitement -- it is relief, comfort, and the pleasure of being cared for.

**Core visual message:** *"A private chef takes care of every meal in your villa. You just enjoy Bali."*

**Visual approach:** Sunlit clarity. The white background represents the clean, bright villa environment. Warm off-white section alternation creates gentle rhythm. Photography is lifestyle-first -- families smiling, fresh ingredients, open kitchens. Everything feels approachable, healthy, and warm. Think: high-end lifestyle magazine meets wellness brand.

**Before -> After transformation:**
- **Before:** Confusing service descriptions, no clear packages, generic food photos, overwhelming text
- **After:** Clear package cards with pricing, warm lifestyle photography, easy-to-scan meal options, FAQ for common questions -- everything designed to make the decision effortless

---

## 2. Visual Hierarchy Review

### What the User Sees (In Order):

**1st -- Morning in the Villa (0-3 seconds):**
- Hero: bright villa terrace with breakfast spread, morning light
- H1: "Villa Catering & Private Chef Services in Bali"
- Subtitle: "Fresh, healthy meals prepared daily in your villa kitchen"
- **Why first:** The image of a beautiful breakfast in a beautiful setting immediately answers: *"What will this feel like?"* It feels like a perfect morning.

**2nd -- Services Overview (3-8 seconds):**
- 3-4 service cards: "Daily Meal Service", "Villa Chef Rental", "Special Occasions", "Healthy Options"
- Warm iconography, clean cards on white background
- **Why second:** After the emotional hook, the user scans: *"What exactly do they offer?"* Service cards provide instant comprehension.

**3rd -- Meal Plans / Packages (8-15 seconds):**
- Package cards with pricing: "Breakfast Package", "Full Board", "Flexible Plan"
- Price prominently displayed, features listed with checkmarks
- **Why third:** This is the decision zone. Clear pricing and package comparison converts browsers into inquiries.

**4th -- Gallery + Social Proof (15-25 seconds):**
- Bright lifestyle gallery: families dining, fresh food, villa settings
- Testimonial: warm quote about family experience
- **Why fourth:** Trust reinforcement. The gallery shows the lifestyle; the testimonial validates the promise.

**5th -- FAQ + Contact (25+ seconds):**
- Accordion FAQ: dietary requirements, pricing, booking process
- Contact form or WhatsApp CTA
- **Why fifth:** Address objections, then convert.

### Hierarchy Before -> After:
| Element | Before (Generic) | After (Designed) |
|---|---|---|
| Hero | Stock photo, small text | Bright lifestyle hero, warm and welcoming |
| Services | Text list | Icon cards with warm illustrations |
| Pricing | Hidden or "contact us" | Clear package cards with visible pricing |
| Gallery | Mixed quality | Curated bright lifestyle shots |
| FAQ | None | Accordion addressing common concerns |

---

## 3. Layout and Spacing Review

### Section Structure

```
+-------------------------------------------------+
|  NAVIGATION (fixed, glass, 72px)                |
+-------------------------------------------------+
|                                                   |
|  HERO (85vh)                                      |
|  - Bright villa terrace image                     |
|  - Light gradient overlay                         |
|  - Content: left-aligned, vertical center         |
|  - H1, subtitle, dual CTA (View Plans / WhatsApp) |
|                                                   |
+-------------------------------------------------+
|  SERVICES (120px padding, white bg)              |
|  - Section label: "OUR SERVICES"                  |
|  - H2: "Everything You Need, Nothing You Don't"   |
|  - 4-column service cards (desktop)               |
|  - Icon + title + description per card            |
|                                                   |
+-------------------------------------------------+
|  MEAL PLANS (120px padding, warm bg #FDFBF7)     |
|  - H2: "Choose Your Meal Plan"                    |
|  - 3 pricing cards side by side                   |
|  - Each: name, price, features, CTA              |
|  - Featured card highlighted (gold border)        |
|                                                   |
+-------------------------------------------------+
|  VILLA CHEF RENTAL (120px padding, white bg)     |
|  - Split: image left, text right                  |
|  - "Your Private Chef for the Week"               |
|  - Benefits list + CTA                            |
|                                                   |
+-------------------------------------------------+
|  CATERING OPTIONS (120px padding, warm bg)       |
|  - 2x2 grid of catering types                     |
|  - BBQ, Brunch, Dinner Party, Healthy             |
|                                                   |
+-------------------------------------------------+
|  PRICING (160px padding, white bg -- emphasis)    |
|  - Detailed pricing table or expanded cards       |
|  - "What's Included" breakdown                    |
|  - Custom quote CTA                               |
|                                                   |
+-------------------------------------------------+
|  GALLERY (100px padding, warm bg)                |
|  - Bright lifestyle grid                          |
|  - 3 columns, 8px gap                             |
|                                                   |
+-------------------------------------------------+
|  TESTIMONIAL (120px padding, white bg)           |
|  - Large warm quote                               |
|  - Family photo + review                          |
|                                                   |
+-------------------------------------------------+
|  FAQ (120px padding, warm bg)                    |
|  - Accordion, 6-8 questions                       |
|  - Common concerns addressed                      |
|                                                   |
+-------------------------------------------------+
|  CONTACT (120px padding, white bg)               |
|  - Contact form + WhatsApp option                 |
|  - Gold CTA                                       |
|                                                   |
+-------------------------------------------------+
|  FOOTER                                           |
|  - Background: #1A1A1A                            |
+-------------------------------------------------+
```

### Specific Spacing Values

| Element | Desktop | Mobile |
|---|---|---|
| Hero height | 85vh | 75vh |
| Section padding (standard) | 120px vertical | 80px vertical |
| Pricing section padding | 160px vertical | 100px vertical |
| Content max-width | 1280px | 100% - 32px |
| Service cards grid | 4 columns, 24px gap | 2 columns, 16px gap |
| Service card padding | 32px | 24px |
| Package cards grid | 3 columns, 24px gap | 1 column, 16px gap |
| Package card padding | 40px | 28px |
| Image-text split gap | 64px | 32px |
| Gallery columns | 3, 8px gap | 2, 6px gap |
| FAQ item padding | 24px vertical | 20px vertical |
| Form max-width | 600px | 100% |
| Alternating bg rhythm | White -> Warm -> White | Same |

---

## 4. Typography Review

### Catering Typography Scale (Detailed)

| Element | Font | Weight | Desktop | Mobile | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|---|
| Hero H1 | Playfair Display | 600 | 56px | 34px | 1.1 | -0.01em | `#2C2419` |
| Hero subtitle | Inter | 400 | 20px | 16px | 1.5 | 0.01em | `rgba(44,36,25,0.7)` |
| Hero CTA primary | Inter | 500 | 15px | 14px | 1.4 | 0.06em | `#1A1A1A` on gold |
| Hero CTA secondary | Inter | 500 | 15px | 14px | 1.4 | 0.06em | `#2C2419`, underline |
| Section label | Inter | 500 | 12px | 11px | 1.4 | 0.1em | `#D4AF37`, uppercase |
| Section H2 | Playfair Display | 600 | 44px | 30px | 1.15 | -0.01em | `#2C2419` |
| Section H3 | Playfair Display | 500 | 26px | 20px | 1.3 | 0 | `#2C2419` |
| Body text | Inter | 400 | 17px | 16px | 1.65 | 0 | `rgba(44,36,25,0.8)` |
| Body strong | Inter | 600 | 17px | 16px | 1.65 | 0 | `#2C2419` |
| Service card title | Playfair Display | 600 | 20px | 18px | 1.3 | 0 | `#2C2419` |
| Service card desc | Inter | 400 | 15px | 14px | 1.6 | 0 | `rgba(44,36,25,0.7)` |
| Service icon | -- | -- | 48px | 40px | -- | -- | `#D4AF37` stroke |
| Package title | Playfair Display | 600 | 22px | 18px | 1.3 | 0 | `#2C2419` |
| Package price | Playfair Display | 600 | 36px | 28px | 1.1 | -0.01em | `#D4AF37` |
| Package price prefix | Inter | 400 | 14px | 13px | 1.4 | 0 | `rgba(44,36,25,0.6)` |
| Package feature | Inter | 400 | 15px | 14px | 1.5 | 0 | `rgba(44,36,25,0.8)` |
| Package feature icon | -- | -- | 16px | 16px | -- | -- | `#D4AF37` checkmark |
| Catering type title | Playfair Display | 600 | 22px | 18px | 1.3 | 0 | `#2C2419` |
| Catering type desc | Inter | 400 | 16px | 15px | 1.6 | 0 | `rgba(44,36,25,0.7)` |
| Pricing table header | Inter | 600 | 14px | 13px | 1.4 | 0.08em | `#2C2419`, uppercase |
| Pricing table cell | Inter | 400 | 16px | 15px | 1.5 | 0 | `rgba(44,36,25,0.8)` |
| FAQ question | Inter | 500 | 18px | 16px | 1.4 | 0 | `#2C2419` |
| FAQ answer | Inter | 400 | 16px | 15px | 1.65 | 0 | `rgba(44,36,25,0.8)` |
| Gallery caption | Inter | 400 | 13px | 12px | 1.4 | 0 | `rgba(44,36,25,0.6)` |
| Testimonial quote | Inter | 400 italic | 20px | 16px | 1.55 | 0.01em | `#2C2419` |
| Testimonial name | Inter | 600 | 16px | 15px | 1.4 | 0 | `#2C2419` |
| Testimonial detail | Inter | 400 | 14px | 13px | 1.4 | 0 | `rgba(44,36,25,0.6)` |
| Form label | Inter | 500 | 13px | 12px | 1.4 | 0.08em | `#2C2419`, uppercase |
| Form input | Inter | 400 | 16px | 16px | 1.5 | 0 | `#2C2419` |
| Form helper | Inter | 400 | 13px | 12px | 1.4 | 0 | `rgba(44,36,25,0.6)` |
| CTA button | Inter | 500 | 15px | 15px | 1.4 | 0.06em | `#1A1A1A` on gold |
| Nav links | Inter | 500 | 14px | -- | 1.4 | 0.06em | `rgba(255,255,255,0.8)` |
| Footer heading | Inter | 600 | 14px | 14px | 1.4 | 0.06em | `#FFFFFF`, uppercase |
| Footer text | Inter | 400 | 14px | 13px | 1.6 | 0 | `rgba(255,255,255,0.6)` |

### Typography Intent
- **Playfair Display** for headings adds elegance without coldness -- the serif warmth matches the family-friendly luxury
- **Inter** at 400 weight for body creates approachable readability
- **Italic treatment** reserved for testimonials only -- adds human voice
- **Gold** used sparingly for prices and accents -- signals value without ostentation
- Section labels in gold uppercase create visual anchors that help users scan

---

## 5. Color System Review

### Catering Complete Palette

| Token | HEX | Usage |
|---|---|---|
| Page background (primary) | `#FFFFFF` | Default section background -- clean, bright |
| Page background (alternate) | `#FDFBF7` | Warm off-white for alternating sections |
| Surface card | `#FFFFFF` | Cards with shadow |
| Surface elevated | `#F8F5F0` | Slightly elevated elements |
| Border standard | `#E8E2D9` | Dividers, card borders |
| Border warm | `#D4AF37` | Featured borders, featured elements |
| Text primary | `#2C2419` | Headings -- warm dark brown |
| Text secondary | `#5C5348` | Body text -- warm grey-brown |
| Text muted | `#9B9085` | Captions, metadata, labels |
| Text on dark | `#FFFFFF` | Text on dark buttons/sections |
| Gold primary | `#D4AF37` | Prices, accents, CTAs, icons |
| Gold hover | `#C4953A` | Hover states |
| Gold light | `#E8D5A3` | Subtle gold backgrounds, highlights |
| Green fresh | `#5A7A3A` | Fresh ingredient accent (used sparingly) |
| Card shadow | `0 4px 24px rgba(44,36,25,0.08)` | Card default |
| Card shadow hover | `0 8px 32px rgba(44,36,25,0.12)` | Card hover |
| Hero overlay | `linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 60%, transparent 100%)` | Left-side text protection |
| Form input bg | `#F8F5F0` | Warm input background |
| Form input border | `#E8E2D9` | Default input border |
| Form focus border | `#D4AF37` | Gold on focus |
| Form focus glow | `0 0 0 3px rgba(212,175,55,0.12)` | Subtle gold glow |
| WhatsApp button | `#25D366` | Floating CTA |
| WhatsApp hover | `#128C7E` | Floating CTA hover |
| Footer bg | `#1A1A1A` | Dark footer |
| Footer text | `rgba(255,255,255,0.6)` | Footer body text |

### Color Usage Rules
1. **Alternating rhythm:** White (`#FFFFFF`) -> Warm (`#FDFBF7`) -> White -> Warm. This creates gentle visual pacing without harsh contrasts.
2. **Brown, not black:** All text uses warm brown `#2C2419` instead of pure black -- softer, more natural, aligns with the organic/healthy positioning
3. **Gold for value:** Prices, featured package borders, and key CTAs use gold. This trains the eye: gold = important.
4. **Green accent (sparingly):** The fresh green `#5A7A3A` appears only 2-3 times -- perhaps a "Fresh & Healthy" tag or ingredient highlight. Too much green breaks the warm palette.
5. **Shadows are warm:** All box-shadows use the brown base color (`rgba(44,36,25,0.08)`) rather than black -- creates cohesive warmth.

---

## 6. Image and Visual Asset Direction

### Hero Image (CAT-001)
- **Content:** Villa terrace breakfast spread -- fresh fruits, pastries, juice, coffee -- morning golden light streaming in
- **Style:** Bright lifestyle photography, warm color temperature, slightly overexposed highlights for that "morning glow"
- **Composition:** Wide shot showing villa context (pool edge, greenery), food in foreground
- **Avoid:** Dark/moody treatment, artificial lighting, cluttered compositions
- **Mood:** "Wake up to this every morning."

### Service Card Icons (4x)
- `daily-meals`: Plate with fork/knife + calendar, gold line icon
- `villa-chef`: Chef hat + villa silhouette, gold line icon
- `special-occasions`: Champagne glass + decorative element, gold line icon
- `healthy-options`: Leaf + bowl, gold line icon (with subtle green)
- Style: 48px, 2px stroke, consistent line weight

### Meal Plan Card Images
Each package card features a small representative image:
- **Breakfast Package:** Fresh breakfast spread (CAT-002)
- **Full Board:** Family dining scene (CAT-005)
- **Flexible Plan:** Chef preparing meal with ingredients (CAT-003)

### Villa Chef Rental Image (CAT-004)
- **Content:** Chef in white coat, friendly interaction with family at villa
- **Style:** Warm, candid, lifestyle -- not stiff or formal
- **Mood:** "Your chef is part of the family for the week."

### Catering Options Grid Images
- **BBQ/Grill:** Poolside BBQ setup (CAT-006)
- **Brunch:** Elegant brunch spread
- **Dinner Party:** Evening family dinner (CAT-009)
- **Healthy Bowls:** Colorful fresh ingredients (CAT-005)

### Gallery Images
- 8-10 bright lifestyle shots
- Families dining, fresh food, villa settings, chef in action
- Bright, warm, inviting -- the opposite of Fine Dining's dark moodiness
- Mix of wide (context) and close-up (food detail)

---

## 7. Component Review

### Service Cards
- Background: `#FFFFFF`
- Border: 1px solid `#E8E2D9`
- Border-radius: 0px
- Padding: 32px
- Structure: icon (48px gold) -> title -> description
- Hover: translateY(-4px), shadow deepens, icon scales 1.1x
- Mobile: 2-column grid, 24px padding

### Package/Pricing Cards (Critical Component)
- Background: `#FFFFFF`
- Border: 1px solid `#E8E2D9`
- Featured card: 2px solid `#D4AF37` border + gold glow shadow
- Padding: 40px desktop / 28px mobile
- Structure:
  - Package name: Playfair Display 600, 22px
  - "From" label: Inter 400, 14px, muted
  - Price: Playfair Display 600, 36px, gold
  - "/day" or "/person" suffix: Inter 400, 14px
  - Divider: 1px `#E8E2D9`
  - Features list: gold checkmark + Inter 400, 15px
  - CTA: full-width gold button
- Hover: lift + shadow
- Mobile: full-width stack, 16px gap

### Villa Chef Rental Section
- Asymmetric split: image 50% left, text 50% right
- Image: full height of section, object-fit cover
- Text area: vertically centered
- Benefits as icon + text rows
- CTA: "Rent a Villa Chef" -- gold button

### Catering Options Grid
- 2x2 grid on desktop
- Each item: image (16:10) + title + brief desc
- Image hover: zoom 1.05x within container
- Mobile: 1-column stack

### FAQ Accordion
- Item border-bottom: 1px `#E8E2D9`
- Question: Inter 500, 18px, plus/minus icon right
- Answer: Inter 400, 16px, 1.65 line-height
- Open animation: height 0 -> auto, 400ms
- Icon rotation: 0deg -> 45deg (plus becomes X)

### Contact Form
- Max-width: 600px, centered
- Background: `#FFFFFF`
- Fields: name, email, villa location, dates, dietary notes, message
- Input: 52px height, `#F8F5F0` bg, `#E8E2D9` border
- Focus: gold border + glow
- Submit: full-width gold CTA
- Alternative: "Prefer WhatsApp? Chat directly" link

---

## 8. Mobile-First Design Review

### Hero Mobile Layout
- Height: 75vh (shorter -- practical page needs to show content)
- Background image: `object-position: center` -- bright terrace scene
- Light gradient overlay on left side for text legibility
- H1: 34px, left-aligned, 24px padding
- Subtitle: 16px, max 90% width
- CTA buttons: stacked -- primary gold button top, secondary text link below
- Gap between buttons: 16px

### Service Cards Mobile
- 2-column grid
- 16px gap
- Card padding: 24px
- Icon: 40px
- Title: 18px
- Description: 14px
- Tap target: entire card

### Package Cards Mobile
- Single column, full width minus 32px
- 16px gap between cards
- Featured card gets gold top border (4px)
- Price: 28px (prominent but fits)
- Features: 14px, compact spacing
- CTA: full-width, 48px height

### FAQ Mobile
- Full width, 16px side padding
- Question: 16px
- Answer: 15px
- Plus icon: 20px tap target
- Smooth open/close animation

### Sticky Elements
- Navigation: fixed, 64px, hamburger menu
- Bottom sticky CTA: "Get a Quote" -- appears after scrolling past hero
  - 64px height, white bg, top border
  - Full-width gold button
- WhatsApp float: 56px, bottom-right (above sticky CTA)

### Performance
- Hero image: max 200KB, WebP format
- Service icons: inline SVG (no HTTP requests)
- Package card images: lazy-loaded
- Gallery: progressive loading
- Target: <2s first contentful paint on 4G

---

## 9. Accessibility Review

| Check | Status | Notes |
|---|---|---|
| Text on white bg | PASS | `#2C2419` on `#FFFFFF` = ~14:1 -- excellent |
| Text on warm bg | PASS | `#2C2419` on `#FDFBF7` = ~13.5:1 -- excellent |
| Gold on white | WARNING | `#D4AF37` on `#FFFFFF` = 2.8:1 -- **never use for body text** |
| Gold for prices/decorative | PASS | Prices are large text (36px), gold is acceptable |
| Muted text contrast | PASS | `#9B9085` on `#FFFFFF` = ~4.7:1 -- passes AA for large text |
| Form input contrast | PASS | `#2C2419` on `#F8F5F0` = ~12:1 |
| Tap targets | PASS | Service cards >200px, buttons 48-52px, FAQ 48px min |
| Focus indicators | PASS | Gold outline + glow on all interactive elements |
| Alt text | REQUIRED | All lifestyle images need descriptive alt |
| ARIA | REQUIRED | Accordion needs `aria-expanded`, `aria-controls` |
| Keyboard | REQUIRED | Tab through all cards, buttons, accordion |
| Reduced motion | REQUIRED | Disable smooth scroll, instant accordion toggle |

### Catering-Specific Accessibility Notes
- **Light theme default** -- high contrast naturally
- **Package cards:** featured card distinguished by border + shadow, not color alone
- **FAQ accordion:** plus/minus icon + `aria-expanded` state
- **Form:** clear error messages, field labels always visible (not placeholder-only)
- **Price visibility:** prices at 36px with gold color -- large enough to exceed contrast requirements

---

## 10. Final Visual Design Direction

The Catering page is a **sunlit villa morning** -- bright, warm, and effortlessly organized. White backgrounds alternate with warm cream sections to create gentle visual rhythm. Package cards present clear pricing with gold-accented confidence. Every image radiates lifestyle warmth: families laughing, fresh ingredients glistening, villa terraces bathed in golden light. This page does not sell food -- it sells the feeling of being completely cared for on holiday.

---
---


# PART 5: PAGE 4 -- EVENTS SERVICES VILLA (Professional Hospitality)

## 1. Visual Design Diagnosis

**What this page must communicate:** Events is about **flawless execution**. The visitor is planning a wedding, corporate retreat, or private celebration in Bali. They need confidence that every detail will be handled. The emotional promise is not luxury -- it is **competence at scale**.

**Core visual message:** *"From intimate celebrations to grand productions -- every detail executed with precision."*

**Visual approach:** Crisp professional precision. White backgrounds with strong grid structures. Dynamic layouts that show range and capability. Event photography that demonstrates scale and sophistication. The design language borrows from high-end event agencies and luxury hospitality groups -- confident, organized, impressive. Think: Four Seasons event brochure meets luxury wedding planner portfolio.

**Before -> After transformation:**
- **Before:** Generic event listing, unclear service range, no pricing guidance, lack of trust signals for large events
- **After:** Structured service architecture, impressive event photography, clear planning process, professional staffing presentation -- every element builds confidence for high-stakes event planning

---

## 2. Visual Hierarchy Review

### What the User Sees (In Order):

**1st -- The Production (0-3 seconds):**
- Hero: dramatic wide shot of an elegant event at a Bali villa -- twilight, candles, full setup
- H1: "Luxury Event Services in Bali Villas"
- Subtitle: "Weddings, corporate events, and private celebrations -- flawlessly executed"
- Key stats bar: "200+ Events", "50+ Villa Partners", "Full-Service Team"
- **Why first:** The hero must immediately communicate scale and capability. A stunning event photo says *"we can do this"* before any word is read.

**2nd -- Service Architecture (3-10 seconds):**
- 3 large service category cards: "Weddings", "Corporate Events", "Private Celebrations"
- Each with representative image, brief description, "Learn More" link
- **Why second:** Event planners think in categories. The user immediately scans for their event type.

**3rd -- The Planning Process (10-20 seconds):**
- Timeline: Consultation -> Planning -> Setup -> Execution -> Wrap
- Visual timeline with numbered steps
- **Why third:** After knowing WHAT events are handled, the user needs to know HOW it works. The process builds trust through transparency.

**4th -- Staffing & Rentals (20-30 seconds):**
- Professional team presentation: chefs, butlers, bartenders, servers
- Equipment rental: tableware, furniture, decor
- **Why fourth:** This is the operational proof. Staffing and rentals demonstrate full-service capability.

**5th -- Gallery + Testimonials (30+ seconds):**
- Event gallery: diverse event types
- Client testimonials with company/event names
- **Why fifth:** Social proof reinforces the professional claims.

**6th -- Contact / Quote Request (final):**
- Event type selector
- Date, guest count, villa location fields
- Gold CTA: "Request a Quote"

### Hierarchy Before -> After:
| Element | Before (Generic) | After (Designed) |
|---|---|---|
| Hero | Generic event photo | Dramatic wide production shot with stats overlay |
| Services | Text list | Large category cards with event-specific imagery |
| Process | None or buried | Visual timeline, numbered steps |
| Staffing | Mentioned in text | Dedicated section with team cards |
| Gallery | Mixed quality | Curated, diverse event types |
| Contact | Generic form | Event-specific form with relevant fields |

---

## 3. Layout and Spacing Review

### Section Structure

```
+-------------------------------------------------+
|  NAVIGATION (fixed, glass, 72px)                |
+-------------------------------------------------+
|                                                   |
|  HERO (90vh)                                      |
|  - Dramatic event wide shot                       |
|  - Dark gradient overlay (bottom 40%)             |
|  - H1 + subtitle, bottom-left aligned             |
|  - Stats bar: overlapping hero bottom             |
|                                                   |
+-------------------------------------------------+
|  STATS BAR                                        |
|  - 3 stats with numbers + labels                  |
|  - Gold numbers, dark text labels                 |
|  - Slight overlap with hero (negative margin)     |
|                                                   |
+-------------------------------------------------+
|  EVENT SERVICES (120px padding, white bg)        |
|  - Section label: "EVENT SERVICES"                |
|  - H2: "Every Event, Exceptionally Executed"      |
|  - 3 large category cards                         |
|                                                   |
+-------------------------------------------------+
|  WEDDINGS (120px padding, warm bg #F8F7F5)       |
|  - Split: text left, gallery right                |
|  - Service list + CTA                             |
|                                                   |
+-------------------------------------------------+
|  CORPORATE EVENTS (120px, white bg)              |
|  - Split: gallery left, text right                |
|  - Service list + CTA                             |
|                                                   |
+-------------------------------------------------+
|  PRIVATE CELEBRATIONS (120px, warm bg)           |
|  - Split: text left, gallery right                |
|  - Service list + CTA                             |
|                                                   |
+-------------------------------------------------+
|  PLANNING PROCESS (160px padding, dark bg)       |
|  - Section label: "HOW WE WORK"                   |
|  - H2: "From Vision to Celebration"               |
|  - Visual timeline, 5 steps                       |
|  - Gold accent line, numbered nodes               |
|                                                   |
+-------------------------------------------------+
|  RENTALS & STAFFING (120px padding, white bg)    |
|  - Two sub-sections: Rentals + Staffing           |
|  - Rentals: image grid of equipment               |
|  - Staffing: team cards with roles                |
|                                                   |
+-------------------------------------------------+
|  GALLERY (100px padding, dark bg)                |
|  - Masonry grid, 3 columns                        |
|  - Diverse event types                            |
|                                                   |
+-------------------------------------------------+
|  TESTIMONIALS (120px padding, white bg)          |
|  - 3-card carousel (client logos + quotes)       |
|                                                   |
+-------------------------------------------------+
|  CONTACT / QUOTE (120px padding, warm bg)        |
|  - Event-specific form                            |
|  - Event type, date, guests, villa                |
|  - Gold submit CTA                                |
|                                                   |
+-------------------------------------------------+
|  FOOTER                                           |
|  - Background: #1A1A1A                            |
+-------------------------------------------------+
```

### Specific Spacing Values

| Element | Desktop | Mobile |
|---|---|---|
| Hero height | 90vh | 80vh |
| Stats bar height | 120px | auto (stacks) |
| Stats bar negative margin | -60px (overlaps hero) | 0 (below hero) |
| Section padding (standard) | 120px vertical | 80px vertical |
| Planning process padding | 160px vertical | 100px vertical |
| Content max-width | 1280px | 100% - 32px |
| Service cards grid | 3 columns, 24px gap | 1 column, 16px gap |
| Split section gap | 64px | 32px |
| Split image width | 55% | 100% (stacks above) |
| Timeline node gap | 48px | 32px |
| Staff cards grid | 4 columns | 2 columns |
| Gallery columns | 3, 8px gap | 2, 6px gap |
| Testimonial cards | 3-column, 24px gap | 1-column carousel |

---

## 4. Typography Review

### Events Typography Scale (Detailed)

| Element | Font | Weight | Desktop | Mobile | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|---|
| Hero H1 | Playfair Display | 600 | 60px | 36px | 1.1 | -0.01em | `#FFFFFF` |
| Hero subtitle | Inter | 400 | 20px | 16px | 1.5 | 0.01em | `rgba(255,255,255,0.8)` |
| Stat number | Playfair Display | 700 | 48px | 36px | 1.0 | -0.02em | `#D4AF37` |
| Stat label | Inter | 500 | 14px | 13px | 1.4 | 0.06em | `#1A1A1A`, uppercase |
| Section label | Inter | 500 | 13px | 12px | 1.4 | 0.1em | `#D4AF37`, uppercase |
| Section H2 | Playfair Display | 600 | 44px | 30px | 1.15 | -0.01em | Contextual |
| Section H3 | Playfair Display | 500 | 24px | 20px | 1.3 | 0 | Contextual |
| Body text | Inter | 400 | 17px | 16px | 1.65 | 0 | `rgba(26,26,26,0.8)` |
| Body strong | Inter | 600 | 17px | 16px | 1.65 | 0 | `#1A1A1A` |
| Service card title | Playfair Display | 600 | 24px | 20px | 1.2 | 0 | `#1A1A1A` |
| Service card desc | Inter | 400 | 16px | 15px | 1.6 | 0 | `rgba(26,26,26,0.7)` |
| Event type label | Inter | 600 | 13px | 12px | 1.4 | 0.1em | `#D4AF37`, uppercase |
| Timeline step number | Playfair Display | 700 | 48px | 36px | 1.0 | 0 | `#D4AF37` |
| Timeline step title | Inter | 600 | 20px | 18px | 1.3 | 0 | Contextual |
| Timeline step desc | Inter | 400 | 16px | 15px | 1.6 | 0 | Contextual |
| Staff card name | Inter | 600 | 18px | 16px | 1.3 | 0 | `#1A1A1A` |
| Staff card role | Inter | 400 | 14px | 13px | 1.4 | 0.04em | `#D4AF37`, uppercase |
| Rental item title | Inter | 500 | 16px | 15px | 1.4 | 0 | `#1A1A1A` |
| Quote text | Cormorant Garamond | 400 italic | 22px | 18px | 1.5 | 0 | `#2C5F7C` (blue accent) |
| Quote attribution | Inter | 600 | 16px | 15px | 1.4 | 0 | `#1A1A1A` |
| Form label | Inter | 500 | 13px | 12px | 1.4 | 0.08em | `#1A1A1A`, uppercase |
| Form input | Inter | 400 | 16px | 16px | 1.5 | 0 | `#1A1A1A` |
| CTA button | Inter | 500 | 15px | 15px | 1.4 | 0.06em | `#1A1A1A` on gold |
| Nav links | Inter | 500 | 14px | -- | 1.4 | 0.06em | `rgba(255,255,255,0.8)` |
| Footer heading | Inter | 600 | 14px | 14px | 1.4 | 0.06em | `#FFFFFF`, uppercase |
| Footer text | Inter | 400 | 14px | 13px | 1.6 | 0 | `rgba(255,255,255,0.6)` |

### Color-Contextual Typography

| Section Type | H2 Color | Body Color |
|---|---|---|
| White background | `#1A1A1A` | `rgba(26,26,26,0.8)` |
| Warm background | `#1A1A1A` | `rgba(26,26,26,0.8)` |
| Dark background | `#FFFFFF` | `rgba(255,255,255,0.8)` |

### Typography Intent
- **Playfair Display** for headings maintains brand consistency while adding gravitas
- **Inter** for everything else keeps the professional, organized feel
- **Cormorant Garamond italic** used only for testimonials -- adds a personal, editorial voice
- **Slate blue (`#2C5F7C`)** used sparingly for testimonials and select accents -- signals corporate trust and professionalism, differentiating from gold-heavy dining page
- **Bold stat numbers** create impact: 48px gold numbers command attention
- **Uppercase labels** with wide tracking (0.1em) create the organizational, systematic feel

---

## 5. Color System Review

### Events Complete Palette

| Token | HEX | Usage |
|---|---|---|
| Page background (primary) | `#FFFFFF` | Default -- crisp white |
| Page background (alternate) | `#F8F7F5` | Subtle warm grey-white |
| Surface dark | `#1A1A1A` | Planning process section, gallery, contrast zones |
| Surface card | `#FFFFFF` | Cards with subtle shadow |
| Border standard | `#E5E3E0` | Standard dividers |
| Border accent | `#D4AF37` | Featured element borders |
| Text primary (on light) | `#1A1A1A` | Headings on white/warm bg |
| Text secondary (on light) | `#4A4745` | Body on white/warm bg |
| Text muted (on light) | `#8A8785` | Captions on white/warm bg |
| Text on dark | `#FFFFFF` | All text on dark sections |
| Gold primary | `#D4AF37` | Stats, accents, CTAs, timeline |
| Gold light | `#E8D5A3` | Hover states, highlights |
| Slate blue | `#2C5F7C` | Corporate accent -- testimonials, professional elements |
| Slate blue light | `#3A7A9E` | Hover for blue elements |
| Card shadow | `0 2px 16px rgba(26,26,26,0.06)` | Subtle card shadows |
| Card shadow hover | `0 6px 24px rgba(26,26,26,0.1)` | Hover state |
| Hero overlay | `linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.2) 60%, transparent 100%)` | Bottom-heavy vignette |
| Timeline line | `#D4AF37` | Gold connecting line |
| Timeline node | `#D4AF37` | Gold circles |
| Form input bg | `#F8F7F5` | Warm input background |
| Form input border | `#E5E3E0` | Default border |
| Form focus border | `#D4AF37` | Gold focus |
| Form focus glow | `0 0 0 3px rgba(212,175,55,0.12)` | Subtle glow |
| Stats bar bg | `#FFFFFF` | White with shadow |
| Stats bar shadow | `0 -4px 24px rgba(26,26,26,0.08)` | Shadow into hero |
| WhatsApp button | `#25D366` | Floating CTA |
| Footer bg | `#1A1A1A` | Dark footer |

### Color Usage Rules
1. **White/warm alternation** creates rhythm: White -> Warm -> White -> Dark (process) -> White -> Dark (gallery) -> White
2. **Dark sections for emphasis:** Planning Process and Gallery use dark backgrounds to create dramatic contrast and visual "reset" moments
3. **Gold for operational elements:** Stats, timeline, service labels -- gold signals "this is how it works"
4. **Slate blue for trust:** Used only in testimonials and select corporate accents -- differentiates from dining's romantic gold
5. **Crisp shadows:** Events page uses lighter, sharper shadows than Catering -- reflects the professional precision

---

## 6. Image and Visual Asset Direction

### Hero Image (EVT-001)
- **Content:** Wide shot of elegant villa event at twilight -- long table setup, candles, floral arrangements, villa architecture visible
- **Style:** Professional event photography, dramatic sky (blue hour), balanced lighting
- **Composition:** Wide angle showing scale, table leading lines into the frame
- **Treatment:** Dark gradient overlay on bottom 40% for text
- **Avoid:** Daylight shots, cramped compositions, low-quality phone photos
- **Mood:** "This level of production is possible in your villa."

### Service Category Cards (3x)
- **Weddings (EVT-002):** Ceremony arch at villa, floral arrangements, romantic lighting
- **Corporate (EVT-004):** Sleek business dinner setup, modern tableware, professional atmosphere
- **Private Celebrations (EVT-006):** Birthday or anniversary setup, festive but refined
- Style: 16:10 aspect, full-width within card, hover zoom

### Event Type Galleries (per section)
Each event section includes 3-4 thumbnail images:
- Weddings: ceremony + reception + couple moment + detail shot
- Corporate: setup + networking + dinner + venue
- Private: decor + dining + celebration moment + detail

### Planning Process Images (5 steps)
- Step 1 "Consultation": Professional meeting scene (EVT-014)
- Step 2 "Planning": Planning documents/tablet
- Step 3 "Preparation": Setup in progress (EVT-015)
- Step 4 "Execution": Event in full swing
- Step 5 "Wrap": Post-event, clean villa

### Staffing Cards Images
- Chef: Professional in whites, confident pose
- Butler: Formal service attire, poised
- Bartender: Action shot, crafting cocktail (EVT-011)
- Server: Professional, uniformed team (EVT-010)
- Style: Consistent studio-style portraits, neutral background

### Rentals Images
- Tableware: Charger plates, crystal, flatware (product-style)
- Furniture: Lounge setup, elegant chairs
- Decor: Floral arrangements, candles, centerpieces
- Style: Clean product photography, white or neutral background

### Gallery Images
- 10-12 diverse event shots
- Mix of wide (scale), medium (atmosphere), detail (craft)
- Consistent professional quality
- Dark background gallery section makes images pop

---

## 7. Component Review

### Stats Bar (Hero Overlap)
- Background: `#FFFFFF`
- Height: 120px desktop / auto stack mobile
- Negative margin: -60px (overlaps hero bottom)
- Box shadow: `0 -4px 24px rgba(26,26,26,0.08)`
- 3 stats in a row, centered
- Number: Playfair Display 700, 48px, gold
- Label: Inter 500, 14px, uppercase, dark
- Divider: 1px `#E5E3E0` between stats
- Mobile: horizontal scroll or stacked

### Service Category Cards
- Background: `#FFFFFF`
- Border: 1px solid `#E5E3E0`
- Border-radius: 0px
- Image: 16:10 aspect, top of card
- Padding: 32px
- Structure: image -> event type label (gold, uppercase) -> title (Playfair 600, 24px) -> description (Inter 400, 16px) -> CTA link
- Hover: lift + shadow, image zoom
- Mobile: full-width stack

### Event Type Split Sections
- Alternating layout: image left/text right, then image right/text left
- Image: 55% width, full section height, object-fit cover
- Text: 45% width, vertically centered
- Text area: H3 + paragraph + bullet list + CTA
- Bullets: gold dot + Inter 400 text
- Mobile: image stacks above text, full width

### Planning Timeline Component
- Background: `#1A1A1A`
- Central gold line (2px)
- 5 nodes alternating left/right (desktop)
- Node: 16px gold circle, white 3px border
- Step card: white background, 32px padding
- Step number: Playfair 700, 48px, gold, semi-transparent
- Step title: Inter 600, 20px
- Step description: Inter 400, 16px
- Animation: nodes scale in, cards fade-up on scroll
- Mobile: single column, line on left, all cards right

### Staffing Cards
- Background: `#FFFFFF`
- Border: 1px `#E5E3E0`
- Image: square, 1:1, top of card
- Padding: 24px
- Name: Inter 600, 18px
- Role: Inter 400, 14px, uppercase, gold
- Hover: lift + shadow
- Grid: 4 columns desktop, 2 mobile

### Rentals Grid
- Image grid: 3 columns desktop, 2 mobile
- Each: image + title below
- Image: 4:3 aspect, hover zoom
- Title: Inter 500, 16px
- Mobile: horizontal scroll or grid

### Testimonial Cards
- Background: `#F8F7F5`
- 3 cards side by side (desktop)
- Quote: Cormorant Garamond italic, 22px, slate blue
- Company/event name: Inter 600, 16px
- Event type: Inter 400, 14px, muted
- 5 gold stars (if rated)
- Mobile: single card visible, swipe carousel
- Carousel dots: gold active, muted inactive

### Event Quote Form
- Background: `#F8F7F5`
- Fields: Name, Email, Phone, Event Type (select), Date, Guest Count, Villa Location, Message
- Event Type options: Wedding, Corporate Event, Private Celebration, Other
- Input: 52px height, warm bg
- Submit: full-width gold CTA
- Alternative: "Prefer to chat? WhatsApp us" link

---

## 8. Mobile-First Design Review

### Hero Mobile Layout
- Height: 80vh
- Background: `object-position: center`
- Dark gradient overlay: stronger on mobile
- H1: 36px, left-aligned, 24px padding
- Subtitle: 16px
- Stats bar: stacks vertically below hero (no overlap on mobile)
- Stat number: 36px, stat label: 13px
- 24px gap between stats

### Service Cards Mobile
- Single column stack
- Full width minus 32px
- Image height: 200px
- 16px gap between cards
- Card padding: 24px

### Split Sections Mobile
- Image stacks above text, full width
- Image height: 240px
- Text: full width, 24px padding
- Service list: compact, 16px text
- CTA: full-width button

### Timeline Mobile
- Single column
- Gold line on left (2px)
- All step cards on right
- Node circles: 12px
- Step number: 36px
- Card padding: 24px
- 32px gap between steps
- Scroll-triggered animations

### Staff Cards Mobile
- 2-column grid
- 12px gap
- Image: square, 1:1
- Name: 16px
- Role: 13px
- Tap for detail modal (optional)

### Gallery Mobile
- 2-column masonry
- 6px gap
- Tap to open lightbox
- Swipe in lightbox

### Sticky Elements
- Navigation: fixed, 64px, hamburger
- Bottom sticky CTA: "Request a Quote" -- appears after hero
  - 64px height, white bg
  - Full-width gold button
- WhatsApp float: 56px, bottom-right

---

## 9. Accessibility Review

| Check | Status | Notes |
|---|---|---|
| Text on white bg | PASS | `#1A1A1A` on `#FFFFFF` = ~15:1 |
| Text on warm bg | PASS | `#1A1A1A` on `#F8F7F5` = ~14.5:1 |
| Text on dark bg | PASS | `#FFFFFF` on `#1A1A1A` = ~15:1 |
| Gold on white | WARNING | `#D4AF37` on `#FFFFFF` = 2.8:1 -- **decorative only** |
| Gold on dark | PASS | `#D4AF37` on `#1A1A1A` = ~8:1 |
| Slate blue on white | PASS | `#2C5F7C` on `#FFFFFF` = ~5.8:1 -- passes AA |
| Stats numbers | PASS | 48px gold on white -- large text, acceptable |
| Tap targets | PASS | Cards >200px, buttons 48-52px, timeline nodes 16px (decorative) |
| Focus indicators | PASS | Gold outline on all interactive elements |
| Form labels | PASS | Always visible, not placeholder-only |
| Alt text | REQUIRED | All event images need descriptive alt |
| ARIA | REQUIRED | Timeline needs `aria-label`, accordion needs expanded state |
| Keyboard | REQUIRED | Tab through all cards, form fields, carousel |
| Reduced motion | REQUIRED | Respect `prefers-reduced-motion` |

### Events-Specific Accessibility Notes
- **Stats bar numbers** at 48px in gold on white: these are large text (>=24px equivalent), so the 2.8:1 ratio is acceptable per WCAG for large text
- **Timeline:** decorative line is `aria-hidden`; step content is properly labeled
- **Carousel:** swipe gesture available but also prev/next buttons; keyboard navigation; pause on focus
- **Form:** event type selector must have label; date picker must be keyboard-accessible
- **Staff cards:** if using modal on tap, focus must move to modal and trap until closed

---

## 10. Final Visual Design Direction

The Events page is a **luxury event production portfolio** -- crisp, organized, and impressively capable. Dramatic hero photography establishes scale, the planning timeline builds trust through transparency, and staffing/rental sections prove full-service capability. White and warm backgrounds alternate with bold dark sections to create visual dynamism that mirrors the energy of a perfectly executed event. Every element whispers competence, leaving the visitor confident that their most important occasion is in expert hands.

---
---


# PART 6: UNIFIED BRAND VISUAL SYSTEM -- SUMMARY

## How All 4 Pages Feel Like One Brand

### The Brand Architecture

```
                    +---------------------------------+
                    |        myCHEF.id                |
                    |     (Unified Brand)             |
                    |                                 |
                    |  * Gold arc signature           |
                    |  * Playfair + Inter fonts       |
                    |  * Bali villa context           |
                    |  * WhatsApp CTA                 |
                    |  * Consistent nav + footer      |
                    +----------+----------------------+
                               |
              +----------------+----------------+
              |                |                |
              v                v                v
        +----------+    +----------+    +----------+
        |  FINE    |    | CATERING |    |  EVENTS  |
        |  DINING  |    |          |    |          |
        |          |    |          |    |          |
        | Dark     |    | Light    |    | Light+   |
        | Cinematic|    | Warm     |    | Dark     |
        | Romantic |    | Relaxed  |    | Dynamic  |
        | Black bg |    | White bg |    | Mixed bg |
        | Gold +   |    | Gold +   |    | Gold +   |
        | Cream    |    | Brown    |    | Blue     |
        +----------+    +----------+    +----------+
```

### Unification Mechanisms

| Element | Unified Treatment | Page Variation |
|---|---|---|
| **Logo** | "myCHEF" wordmark, gold/white | Same on all pages |
| **Navigation** | Fixed glass-morphism, 72px | Same structure, active page indicator |
| **Typography pair** | Playfair Display + Inter | Same fonts, different weights/sizes per page |
| **Gold accent** | `#D4AF37` everywhere | Usage intensity varies (heavy on Dining, moderate on others) |
| **WhatsApp CTA** | Green circle, 56px, bottom-right | Same on all pages |
| **Footer** | Dark, 4-column | Same structure, slightly different bg shade |
| **Card sharpness** | 0px border-radius everywhere | Unified luxury aesthetic |
| **Button style** | Sharp edges (0px radius), uppercase | Color adapts to page context |
| **Spacing rhythm** | 8px base unit, consistent scale | Section padding varies by page intensity |
| **Scroll animations** | Fade-up reveal, 600ms | Consistent easing and timing |

### Differentiation Within Unity

| Aspect | Fine Dining | Catering | Events |
|---|---|---|---|
| **Background** | `#050505` black | `#FFFFFF` white | `#FFFFFF` + `#1A1A1A` |
| **Mood** | Cinematic, intimate | Bright, relaxed | Professional, dynamic |
| **Photography** | Dark, moody, close-up | Bright, lifestyle, wide | Professional, dramatic |
| **Accent colors** | Gold + cream | Gold + warm brown | Gold + slate blue |
| **Body weight** | 300 (ethereal) | 400 (approachable) | 400 (professional) |
| **Line height** | 1.7 (generous) | 1.65 (standard) | 1.65 (standard) |
| **Shadow style** | Subtle, dark | Warm, brown-tinted | Crisp, neutral |
| **Animation** | Cinematic sequence | Simple fade-up | Slide + fade |
| **Pacing** | Slow, contemplative | Easy, scannable | Dynamic, organized |

### The Emotional Journey Across Pages

```
Homepage:    Anticipation  ->  "Three extraordinary options await"
                |
Fine Dining:  Intimacy      ->  "This evening will be unforgettable"
                |
Catering:     Relief        ->  "Everything taken care of"
                |
Events:       Confidence    ->  "Every detail handled with precision"
```

Each page is a different emotional room in the same luxury villa. The hallway (Homepage) shows you the doors. Each room (page) has its own atmosphere, but the architecture (brand system) is consistent.

---

## Animation & Motion Guidelines -- Consolidated

### Easing Definitions

| Name | Value | Usage |
|---|---|---|
| `ease-luxury` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default -- smooth deceleration |
| `ease-out` | `cubic-bezier(0.0, 0, 0.2, 1)` | Entrance animations |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful micro-interactions |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State transitions |

### Duration Tokens

| Token | Value | Usage |
|---|---|---|
| `duration-fast` | 200ms | Hover color changes, quick feedback |
| `duration-normal` | 300ms | Hover transforms, button states |
| `duration-slow` | 600ms | Entrance reveals, card animations |
| `duration-dramatic` | 1000ms | Hero entrances, major transitions |
| `duration-stagger` | 100ms | Delay between sibling items |

### Scroll-Triggered Reveals (All Pages)

```
Trigger: IntersectionObserver at 20% from viewport bottom
Effect:  opacity: 0 -> 1
         transform: translateY(40px) -> translateY(0)
Duration: 600ms
Easing:   ease-out
Stagger:  100ms between siblings
```

### Page-Specific Entrance Sequences

**Homepage:**
1. Hero bg fade (800ms)
2. H1 fade-up (600ms, 200ms delay)
3. Subtitle fade-up (600ms, 400ms delay)
4. Cards fade-up staggered (600ms each, 100ms stagger)

**Fine Dining (Cinematic):**
1. Bg image fade (1200ms)
2. Gold arc draw-on (800ms, 400ms delay)
3. H1 fade-up (600ms, 600ms delay)
4. Subtitle fade-up (600ms, 800ms delay)
5. CTA fade-up (600ms, 1000ms delay)

**Catering (Warm Welcome):**
1. Bg fade (800ms)
2. Content block fade-up (600ms, 200ms delay)
3. CTA fade-up (400ms, 400ms delay)

**Events (Professional Arrival):**
1. Bg slide-in from right (800ms)
2. Text content fade-up staggered (600ms, 300ms delay)
3. Stats counter animation (1200ms, 600ms delay)

### Hover State Specifications

| Element | Effect | Duration |
|---|---|---|
| Primary button | bg lighten 10%, translateY(-2px), shadow increase | 300ms |
| Outline button | bg fill gold, text darken | 300ms |
| Card | translateY(-4px), shadow deepens | 300ms |
| Card image | scale(1.05) within container | 600ms |
| Nav link | Gold underline slides in (width 0->100%) | 300ms |
| Text link | Color to gold, underline appears | 200ms |
| Image (gallery) | Dark overlay + zoom icon | 300ms |
| Staff card | translateY(-4px), border to gold | 300ms |
| Timeline node | scale(1.3), glow | 300ms |

### Micro-Interactions

```
Button click:     scale(0.98) for 100ms
card select:      border glow gold 2px, 200ms fade
Form focus:       border gold + glow ring 3px
WhatsApp pulse:   scale 1 -> 1.05 -> 1, 2s infinite, ease-in-out
Accordion open:   height 0 -> auto, 400ms + icon rotate 45deg
Stat counter:     number count-up from 0, 1200ms, ease-out
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

All content must be visible and accessible with animations disabled. Animations are enhancement, not requirement.

---

## Complete Image Asset Summary

### Total Image Count

| Page | Images | Style |
|---|---|---|
| Global | 6 | SVG icons, logo |
| Homepage | 5 | Cinematic, card previews |
| Fine Dining | 17 | Dark, moody, food-focused |
| Catering | 14 | Bright, lifestyle, warm |
| Events | 16 | Professional, event-focused |
| **TOTAL** | **58** | |

### Key Image Principles (All Pages)
1. **Optimize for web:** All images WebP format, max 300KB each
2. **Lazy loading:** Below-fold images load on scroll
3. **Responsive srcset:** Multiple sizes for different viewports
4. **Consistent treatment:** Each page's images share the same color grading/style
5. **Alt text:** Descriptive, SEO-friendly alt text on every image
6. **No stock look:** All images should feel bespoke and brand-specific

---

## Component Library Quick Reference

| Component | Primary Spec |
|---|---|
| **Primary Button** | Gold gradient bg, dark text, 0px radius, 16px 40px padding, uppercase |
| **Outline Button** | Transparent, 1px gold border, gold text, fills on hover |
| **Dark Button** | `#1A1A1A` bg, gold text, for light sections |
| **Card** | 0px radius, contextual bg, 32px padding, lift on hover |
| **Service Card** | Icon 48px + title + description, hover lift |
| **Package Card** | Title + price (gold) + feature list + CTA, featured has gold border |
| **Nav Bar** | Fixed, 72px, glass-morphism, gold active indicator |
| **Mobile Menu** | Full-screen overlay, large centered links |
| **Testimonial** | Quote (italic) + avatar + name + stars |
| **FAQ Accordion** | Question + icon, expand/collapse answer |
| **Gallery** | Masonry grid, hover overlay, lightbox |
| **Timeline** | Gold line, numbered nodes, alternating cards |
| **Form Input** | 52px height, contextual bg, gold focus |
| **Stats Bar** | Large gold number + label, overlapping hero |
| **WhatsApp Float** | 56px green circle, pulse animation, bottom-right |
| **Sticky Mobile CTA** | Fixed bottom, full-width button, 64px height |
| **Footer** | Dark bg, 4-column, social icons, copyright |

---

## Implementation Priority Checklist

### Phase 1: Foundation
- [ ] Set up color CSS custom properties for all 4 pages
- [ ] Implement typography scale with responsive breakpoints
- [ ] Build navigation component (desktop + mobile)
- [ ] Build footer component
- [ ] Set up WhatsApp floating button
- [ ] Implement spacing system (8px base grid)

### Phase 2: Homepage
- [ ] Hero section with background + content
- [ ] 3 pathway cards with hover effects
- [ ] Trust bar with stats
- [ ] Scroll animations

### Phase 3: Fine Dining
- [ ] Fullscreen dark hero
- [ ] Experience pillars with icons
- [ ] Private dining split section
- [ ] Menu cards (3 variants)
- [ ] Wine pairing section
- [ ] Masonry gallery with lightbox
- [ ] Chef portrait + bio
- [ ] Testimonial card
- [ ] Contact form

### Phase 4: Catering
- [ ] Bright hero with dual CTA
- [ ] Service cards (4 items)
- [ ] Package/pricing cards (3 tiers)
- [ ] Villa chef rental split section
- [ ] Catering options grid
- [ ] Gallery + testimonial
- [ ] FAQ accordion
- [ ] Contact form

### Phase 5: Events
- [ ] Hero with stats bar overlay
- [ ] Service category cards (3)
- [ ] Event type split sections (3)
- [ ] Planning timeline (5 steps)
- [ ] Staffing cards
- [ ] Rentals grid
- [ ] Gallery + testimonials carousel
- [ ] Event quote form

### Phase 6: Polish
- [ ] All scroll animations implemented
- [ ] All hover states active
- [ ] Mobile responsive testing (375px, 414px, 768px)
- [ ] Performance optimization (images, fonts, JS)
- [ ] Accessibility audit
- [ ] Cross-browser testing

---

*Document prepared for myCHEF.id -- Luxury Private Chef & Event Hospitality Brand, Bali.*
*This strategy moves the brand from generic hospitality presentation to a unified luxury visual system where each page is a distinct emotional experience within a cohesive brand world.*

---
**END OF DOCUMENT**
