import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, providerRef } from '@/components/SeoHead'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import {
  GraduationCap,
  Home,
  UtensilsCrossed,
  ChefHat,
  MapPin,
  Award,
  Clock,
  Sparkles,
} from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

/**
 * /experiences/cooking-class — commercial pillar for "cooking class bali".
 * In-villa private Indonesian/Balinese class. Chef comes to you. 2.5 or 3 hours.
 * From IDR 700,000++/pp min 4 (all-in IDR 847,000). Couples IDR 1,400,000++/pp.
 * Ingredients included. 2-day lead. Diploma. Eat what you cook.
 * Do not invent WhatsApp-history FAQs, market tours, or private-chef day rates.
 * Sushi lives on /experiences/sushi-masterclass. This URL does not absorb multi-cuisine.
 */

const meta = getPageMeta('experience-cooking-class')

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20Indonesian%20cooking%20class%20at%20my%20Bali%20villa.%202.5-hour%20or%203-hour%3A%20%20Start%20time%3A%20%20Group%20size%3A%20%20Villa%20area%3A%20%20Date%3A'
const WA_QUOTE =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20please%20send%20a%20cooking%20class%20quote%20%2B%20sample%20menu.%20Guests%3A%20%20Area%3A%20%20Date%3A%20Preferred%20length%20(2.5%20or%203%20hours)%3A'
const CANONICAL = 'https://mychef.id/experiences/cooking-class'

/** In-villa private class — chef + couple at the kitchen island (hero). */
const HERO = '/generated/mychef-cooking-class-bali-hero-villa.webp'
/** Hands-on teaching — guests pounding paste with the chef. */
const IMG_TEACH = '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp'
/** Ingredient spread for the class menu. */
const IMG_ING = '/generated/mychef-cooking-class-bali-ingredients-spread.webp'
/** Base genep / Balinese spice paste ingredients. */
const IMG_BALINESE = '/generated/mychef-cooking-class-balinese-ingredients-bali-landscape.webp'
/** Eat what you cook — chef and guests at the villa table. */
const IMG_DINE = '/generated/mychef-cooking-class-bali-guests-dining.webp'

const CTA_HTML = (label: string, href = WA_LINK) =>
  `<p style="margin:1.5rem 0 0"><a href="${href}" class="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#D4B43A]" target="_blank" rel="noopener noreferrer">${label}</a> <a href="${WA_QUOTE}" class="ml-2 text-sm font-semibold text-[#7E6410] hover:underline" target="_blank" rel="noopener noreferrer">Get quote + sample menu →</a></p>`

const COMPARE_TABLE = `
<div style="overflow-x:auto;margin:1.5rem 0 0">
<table style="width:100%;border-collapse:collapse;font-size:0.95rem;line-height:1.45">
  <thead>
    <tr>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;width:28%"></th>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;background:#FAFAF8">Typical Ubud group kitchen school</th>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;background:#F7F0D8"><strong>myCHEF — chef comes to your villa</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Where</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">You leave the villa. Hotel pickup, then a shared school kitchen.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Your villa, anywhere in Bali.</strong> The chef comes to you.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Time</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Often a five-hour day once pickups and a market walk are counted.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>2.5 or 3 hours</strong> at the villa, at your start time.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Who cooks</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">15–24 guests on a shared bench. Pace set by the room.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Only your guests.</strong> Private. You cook together.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Market</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A supervised group market walk is often built into the day.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">The chef shops beforehand. Class time is cooking and eating — no promised market tour.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">What you eat</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A set school menu, shared with the group.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">You cook <strong>4–6 dishes</strong>, then eat what you cooked.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;font-weight:600">Take-home</td>
      <td style="padding:0.7rem 0.85rem">Recipes vary by school.</td>
      <td style="padding:0.7rem 0.85rem">Personalised <strong>myCHEF Indonesian Cooking Diploma</strong>, recipe cards, uniforms and chef hats, kitchen left clean.</td>
    </tr>
  </tbody>
</table>
</div>
`

const PROGRAM_HTML = `
<p>A complete private Indonesian / Balinese cooking class in your villa — <strong>2.5 or 3 hours</strong>, timed to the start you choose. Introduction to the food, hands-on cooking of <strong>4–6 dishes</strong>, then the meal of everything you prepared. Every guest finishes with a personalised <strong>myCHEF Indonesian Cooking Diploma</strong>, recipe cards and a spotless kitchen.</p>

<div style="margin:1.75rem 0;border-left:3px solid #C5A028;padding-left:1.25rem">
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">1 · Welcome &amp; introduction to the food</strong> <em>(15–20 min)</em><br/>
  Chef arrives with a short welcome drink. Hands-on intro to key Indonesian and Balinese ingredients and spice pastes — base gede, base wangi, fresh sambals, coconut, lemongrass and more. You smell, taste and learn the flavour logic <em>before</em> the cooking starts.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">2 · Hands-on cooking</strong> <em>(about 1h 45m – 2h)</em><br/>
  You cook 4–6 dishes with the chef — beginner-friendly or more advanced depending on the group. You don’t just watch.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">3 · Sit-down meal</strong><br/>
  Everything you cooked is plated and eaten together at your villa table. <strong>You cooked it — now you eat every dish.</strong></p>
  <p style="margin:0"><strong style="color:#C5A028">4 · Diploma + recipes + clean-up</strong><br/>
  Presentation of a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> (name + date). Printed recipe cards adapted for a normal home kitchen. Full kitchen clean-up.</p>
</div>

<p>Tell us 2.5-hour or 3-hour, and your preferred start time, when you enquire. We need at least two days’ notice.</p>
${CTA_HTML('Reserve your private villa class')}
`

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Chef comes to your villa — anywhere in Bali',
    title: 'Skip the Ubud Group School. Cook in Your Own Kitchen.',
    image: IMG_TEACH,
    imageAlt:
      'Private chef teaching a couple to pound Balinese spice paste in a villa kitchen opening onto a tropical garden',
    body: `<p>Most “cooking class Bali” searches land on a group kitchen school: pickup from the hotel, a shared bench of 15–24, a set menu, a long day on the road. myCHEF is the other product. <strong>The chef comes to your villa.</strong> Private. <strong>2.5 or 3 hours.</strong> You cook 4–6 Indonesian / Balinese dishes. You eat what you cook. You leave with a diploma.</p>
    <p>From <strong>IDR 700,000++ per person</strong>, minimum 4 (all-in <strong>IDR 847,000</strong> pp). Ingredients included. Couples pay <strong>IDR 1,400,000++ per person</strong> — the 4-person floor. Prefer sushi only? That is a different page: <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>
    ${COMPARE_TABLE}
    ${CTA_HTML('Book the villa class — WhatsApp')}`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Published rate',
    title: 'Cooking Class Cost — From IDR 700,000++ per Person',
    body: `<p style="font-size:1.15rem;line-height:1.6"><strong>From IDR 700,000++ per person.</strong> Minimum <strong>4 guests</strong>. All-in is <strong>IDR 847,000 per person</strong> (base × 1.21).</p>
    <p>++ means 10% service charge and 11% VAT. Your written proposal shows the all-in total before you pay.</p>
    <p><strong>Couples (2 guests):</strong> <strong>IDR 1,400,000++ per person</strong>. Two people still pay the 4-person minimum. The class is not a half-price couple ticket.</p>
    <p>Ingredients / groceries <strong>are included</strong> in the class price — not billed separately at cost. This is a cooking class, not a private-chef day hire.</p>
    <p>This covers:</p>
    <ul>
      <li>Professional chef instructor at your villa</li>
      <li>All ingredients</li>
      <li>Full set of <strong>uniforms + chef hats</strong> for every guest</li>
      <li>Hands-on instruction (intro + cooking + meal)</li>
      <li>The complete meal of everything you cook</li>
      <li>Personalised <strong>myCHEF Indonesian Cooking Diploma</strong> for each participant</li>
      <li>Recipe cards for a normal home kitchen</li>
      <li>Full kitchen clean-up</li>
    </ul>
    <p>Larger groups receive additional staff so everyone stays active. Dietary needs are taken at enquiry. Children who join are extra guests on the same class — there is no separate kids tariff. For a kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p>If you also want a chef to cook <em>for</em> you on other days, that is a separate private-chef booking — never mixed into this class rate. See <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef Bali</a>.</p>
    <p style="font-size:0.95rem;color:#4A4A4A">School ticket vs villa class: <a href="/blog/cooking-class-bali-cost" class="text-[#7E6410] hover:underline font-medium">cooking class cost guide</a>. Honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it" class="text-[#7E6410] hover:underline font-medium">is a cooking class in Bali worth it?</a></p>
    ${CTA_HTML('Get your personalised quote + sample menu', WA_QUOTE)}`,
  },
  {
    id: 'program',
    type: 'content' as const,
    subtitle: '2.5 or 3 hours, your start time',
    title: 'What Happens in the Class',
    image: IMG_ING,
    imageAlt:
      'Balinese cooking class ingredients — turmeric, lemongrass, chilli, coconut and spice paste — on a villa table',
    body: PROGRAM_HTML,
  },
  {
    id: 'cta-mid-1',
    type: 'cta' as const,
    subtitle: 'Two days’ notice',
    title: 'Message us your villa, group size and start time',
    body: 'We need at least two days (ingredients, materials, diploma, setup). WhatsApp villa area, guest count, 2.5-hour or 3-hour, and date. We reply with options, a sample menu outline and availability.',
    bg: 'dark' as const,
    primaryAction: {
      label: 'WhatsApp for availability & quote',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Sample menu request',
      href: WA_QUOTE,
      external: true,
    },
  },
  {
    id: 'why-villa',
    type: 'content' as const,
    subtitle: 'Private villa vs a group school',
    title: 'Why Guests Skip the School Shuttle',
    body: `<p>Ubud group schools can be a good day trip if you want pickup, a shared bench and a long outing. They are not this product. A myCHEF <strong>cooking class Bali</strong> stays in the villa you already rented. No school shuttle. No 15–24 strangers. About 2.5 or 3 hours. The chef shops first so class time is cooking, eating and the diploma.</p>
    <p>We do not bid on school brand names. If you want a famous group-school morning, book a school. If you want a private Indonesian class in your own kitchen — Canggu, Seminyak, Ubud, Sanur or further — this page is the booking.</p>
    <p>A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. A <strong>private chef</strong> cooks for you. Same company, different quotes. The class is never folded into a chef day rate.</p>
    <p>myCHEF is a chef-led hospitality company for villa dining and catering across Bali. Cooking classes sit beside <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef hire</a> and <a href="/catering" class="text-[#7E6410] hover:underline font-medium">villa catering</a> — WhatsApp booking, cleanup before we leave.</p>`,
  },
  {
    id: 'sample-menus',
    type: 'content' as const,
    subtitle: 'What you actually cook',
    title: 'Sample Indonesian / Balinese Menus (Customisable)',
    body: `<p>Menus are designed around your group. The standard class is Indonesian / Balinese. You cook 4–6 dishes, then sit down and eat the full menu together.</p>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Standard Indonesian / Balinese</h3>
    <ul>
      <li>Introduction to key spices &amp; ingredients + pounding <em>base gede</em></li>
      <li>Sambal matah (fresh raw shallot-chilli salsa)</li>
      <li>Sate lilit (minced seafood or chicken satay on lemongrass)</li>
      <li>Lawar or urap-style vegetable salad with grated coconut</li>
      <li>Nasi goreng or fragrant coconut rice</li>
      <li>Palm-sugar dessert or fresh fruit finish</li>
    </ul>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Vegetarian / plant-forward (on request)</h3>
    <ul>
      <li>Base gede · gado-gado with peanut sauce · tempeh or tofu sate · lawar sayur · nasi kuning · fruit + coconut dessert</li>
    </ul>
    <p style="font-size:0.95rem;color:#4A4A4A">See <a href="/blog/vegan-vegetarian-balinese-cooking" class="text-[#7E6410] hover:underline font-medium">vegan &amp; vegetarian Balinese cooking</a>.</p>
    <p>Allergies and other dietary notes are asked at enquiry. Sushi-only stays on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page.</p>
    ${CTA_HTML('WhatsApp us for a sample menu for your group', WA_QUOTE)}`,
  },
  {
    id: 'cuisine-base-genep',
    type: 'content' as const,
    subtitle: 'The flavour engine of the island',
    title: 'Base Genep — Bali’s Master Spice Paste',
    image: IMG_BALINESE,
    imageAlt:
      'Balinese base genep spice paste ingredients — turmeric, galangal, lemongrass, shallots and chilli — on a stone mortar',
    body: `<p>Ask a Balinese cook what makes the island’s food taste like Bali and the answer is one thing: <strong>base genep</strong> (also written <em>base gede</em> or <em>bumbu Bali</em>) — the “complete spice paste” that sits under almost every savoury dish. It is not a jarred shortcut. It is a built-from-scratch blend of roughly fifteen aromatics — shallots, garlic, ginger, <em>galangal</em> (lengkuas), fresh <em>turmeric</em>, <em>kencur</em> (aromatic ginger), candlenut, lemongrass, bird’s-eye chilli, coriander seed, a little <em>terasi</em> shrimp paste and palm sugar — pounded until it becomes a fragrant, oily paste.</p>
    <p>The logic behind it is <strong>sad rasa</strong>, the six-flavour idea: sweet, sour, salty, bitter, spicy and astringent, balanced in a single paste. In your class you don’t just measure base genep — you <em>build</em> it, pounding it by hand in a <em>cobek</em> and <em>ulekan</em> (the Balinese stone mortar and pestle). Once you understand base genep, you can rebuild half of Balinese cooking at home — which is exactly what your recipe cards are for.</p>
    <p>Want the full breakdown before you cook? Read our chef’s guide: <a href="/blog/base-genep-balinese-spice-paste" class="text-[#7E6410] hover:underline font-medium">Base genep, explained ingredient by ingredient</a>.</p>
    ${CTA_HTML('Cook base genep from scratch — book your class')}`,
  },
  {
    id: 'signature-dishes',
    type: 'content' as const,
    subtitle: 'What the dishes actually are',
    title: 'Balinese vs Indonesian — Your Menu, Labelled Honestly',
    body: `<p>Most guests arrive expecting <strong>nasi goreng</strong> and are surprised by how different truly <em>Balinese</em> food is. Both belong on your table — and we are clear about which is which.</p>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Distinctly Balinese</h3>
    <ul>
      <li><strong>Sate lilit</strong> — minced fish or chicken blended with base genep and grated coconut, moulded onto lemongrass stalks and grilled.</li>
      <li><strong>Lawar</strong> — a ceremonial salad of finely chopped vegetables (or meat), fresh coconut and spice.</li>
      <li><strong>Sambal matah</strong> — a raw sambal of thinly sliced shallots, lemongrass, chilli and lime; no cooking, all freshness.</li>
      <li><strong>Betutu</strong> — chicken or duck slow-cooked in banana leaf with base genep; the ceremonial dish of Bali.</li>
      <li><strong>Pepes ikan</strong> — spiced fish steamed and grilled in banana-leaf parcels.</li>
    </ul>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Pan-Indonesian (on the menu because guests love them)</h3>
    <ul>
      <li><strong>Nasi goreng</strong> &amp; <strong>mie goreng</strong> — the fried rice and noodles found right across Indonesia.</li>
      <li><strong>Gado-gado</strong> — blanched vegetables with a warm peanut sauce.</li>
    </ul>
    <p>Balinese food is shaped by Hindu ceremony and village cooking; much of Indonesia’s best-known food grew in a different kitchen tradition. Our chefs explain the distinction as you cook. The full story: <a href="/blog/balinese-food-vs-indonesian-food" class="text-[#7E6410] hover:underline font-medium">Balinese food is not Indonesian food — a chef’s guide</a>.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What every class includes',
    title: 'What Is Included in a myCHEF Cooking Class',
    features: [
      {
        icon: Clock,
        title: '2.5 or 3 hours',
        desc: 'Your start time. Introduction, hands-on cooking of 4–6 dishes, sit-down meal of everything you cooked.',
      },
      {
        icon: Award,
        title: 'Personalised diploma',
        desc: 'Every guest receives a myCHEF Indonesian Cooking Diploma — name + date.',
      },
      {
        icon: ChefHat,
        title: 'Uniforms & chef hats',
        desc: 'Full sets for every guest — photogenic “chef for a day” energy.',
      },
      {
        icon: UtensilsCrossed,
        title: 'You eat every dish',
        desc: 'Nothing is for show only. You cook the menu, then eat the full meal together.',
      },
      {
        icon: GraduationCap,
        title: 'Professional chef instructor',
        desc: 'Trained chef adapts to beginners or advanced cooks. Extra staff for larger groups.',
      },
      {
        icon: Home,
        title: 'Your villa kitchen',
        desc: 'The chef comes to you. No school shuttle, no shared bench — only your guests.',
      },
      {
        icon: Sparkles,
        title: 'Ingredients included',
        desc: 'Groceries are in the class price. Recipe cards for a home kitchen. Kitchen left spotless.',
      },
      {
        icon: MapPin,
        title: 'Island-wide at the villa',
        desc: 'Canggu, Seminyak, Ubud, Sanur, Uluwatu and the rest of our villa coverage — same private class.',
      },
    ],
  },
  {
    id: 'fun-vibe',
    type: 'content' as const,
    subtitle: 'What makes the day special',
    title: 'Uniforms, Diploma Moment & a Happy Villa Kitchen',
    body: `<p>Instruction is professional — the atmosphere is relaxed, social and celebratory. Guests leave smiling, full, and with a diploma in hand. Uniforms and chef hats turn the afternoon into a proper memory (and excellent photos). For bigger groups we add staff automatically so nobody is stuck watching from the side.</p>
    <p>At the end of the class every guest receives a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> — a genuine take-home souvenir of the day.</p>
    ${CTA_HTML('Message us now — at least two days’ notice')}`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Who books a cooking class',
    title: 'Couples, Families, Wedding Stays and Villa Groups',
    image: IMG_DINE,
    imageAlt:
      'Guests dining at a Bali villa after a private cooking class, sharing Indonesian dishes they prepared with their chef',
    body: `<p><strong>Couples.</strong> Popular for honeymoons and date nights. Pricing is the 4-guest minimum: <strong>IDR 1,400,000++ per person</strong>.</p>
    <p><strong>Families.</strong> Kids who join are extra guests on the same class — no separate kids tariff. For a full kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p><strong>Birthday &amp; villa groups.</strong> Social, useful and photographable. Same 2.5 or 3 hour class, same inclusions.</p>
    <p><strong>Wedding stays.</strong> The class can be a separate day during a wedding stay — quoted on its own. Pair later with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a>.</p>
    <p><strong>Already hiring a chef?</strong> Add the class as a separately quoted session on another day. Do not expect it inside a private-chef day rate.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How booking works',
    title: 'From First Message to Diploma',
    body: `<p><strong>1. Contact us at least two days ahead.</strong> WhatsApp villa area, guest count (including any children as extra guests), dietary needs, date, 2.5-hour or 3-hour, and start time.</p>
    <p><strong>2. We propose the class.</strong> Written outline: dishes, 2.5 or 3-hour structure, kitchen needs, all-in quote (++ shown). Ingredients are in the class price.</p>
    <p><strong>3. Confirm.</strong> Typically 50% deposit to confirm the chef and date; balance before the class.</p>
    <p><strong>4. We shop and set up.</strong> The chef shops first, then comes to your villa with ingredients, knives, spice kit, uniforms, hats and any missing tools.</p>
    <p><strong>5. You cook — then you eat — then diploma + clean-up.</strong></p>
    ${CTA_HTML('WhatsApp us your villa, group size and date — two days’ notice')}`,
  },
  {
    id: 'canggu',
    type: 'content' as const,
    subtitle: 'Cooking class Canggu',
    title: 'Cooking Class Canggu — Berawa, Pererenan and Surf-Trip Groups',
    body: `<p>A <strong>cooking class Canggu</strong> is for Berawa, Batu Bolong, Echo Beach and Pererenan villas that want one hands-on afternoon without driving to a school. Same private class: chef comes to you, 2.5 or 3 hours, 4–6 dishes, eat what you cooked, diploma. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp).</p>
    <p>Weekly chef meals are <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">private chef Canggu</a>. Area context: <a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu dining guide</a>.</p>`,
  },
  {
    id: 'seminyak',
    type: 'content' as const,
    subtitle: 'Cooking class Seminyak',
    title: 'Cooking Class Seminyak — Design Villas, Groups and Hen Parties',
    body: `<p>A <strong>cooking class Seminyak</strong> with myCHEF is the same in-villa product: chef comes to Petitenget, Oberoi, Batu Belig or the beach strip. No school pickup from a Seminyak hotel. You cook, you eat, diploma in hand. From <strong>IDR 700,000++ per person</strong>, minimum 4 (all-in IDR 847,000 pp). Couples: IDR 1,400,000++ per person.</p>
    <p>Want the chef to cook <em>for</em> you the other nights? That is <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">private chef Seminyak</a>. Dining-out context: <a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak dining guide</a>.</p>`,
  },
  {
    id: 'ubud',
    type: 'content' as const,
    subtitle: 'Cooking class Ubud — villa private, not a group school',
    title: 'Cooking Class Ubud — Villa Kitchen vs the Famous Group Schools',
    body: `<p>Ubud is where most visitors first meet the idea of a Bali cooking class — and where the well-known group schools sit. Those schools typically run a shared morning: hotel pickup, often a market walk, then a bench of 15–24 people. The day often stretches to about five hours once transfers are in. That can be the right day trip if you want a school outing.</p>
    <p>A <strong>cooking class Ubud</strong> with myCHEF is a different product. It happens in the villa you already rented — Sayan, Penestanan, Campuhan, Tegallalang or Ubud central. 2.5 or 3 hours. The chef shops first and comes to you. Only your guests. You cook 4–6 Indonesian / Balinese dishes, eat them at your own table, and leave with a diploma.</p>
    <p>We do not try to be an Ubud cooking school. If you want the classic group-school day, book a school. If you want a private villa class, this page is the product — from IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp).</p>
    <p>Chef meals for the rest of an Ubud stay: <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">private chef Ubud</a>. Jungle-villa dining context: <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud dining guide</a>.</p>`,
  },
  {
    id: 'sanur',
    type: 'content' as const,
    subtitle: 'Cooking class Sanur',
    title: 'Cooking Class Sanur — Family Villas on the East Coast',
    body: `<p>Sanur villas use the same <strong>cooking class Sanur</strong> product: chef comes to the villa, 2.5 or 3 hours, 4–6 dishes, eat what you cooked, diploma. From IDR 700,000++ per person, min 4. Children who join are extra guests on that class — no separate kids tariff.</p>
    <p>Chef hire for the rest of the stay: <a href="/private-chef/sanur" class="text-[#7E6410] hover:underline font-medium">private chef Sanur</a>. Area guide: <a href="/locations/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur dining</a>.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Same class, your villa pin',
    title: 'Island-Wide — Always Your Villa',
    body: `<p>We also teach in Uluwatu, Jimbaran, Nusa Dua, the Kuta corridor and the rest of our villa coverage. Same private class, same 2.5 or 3 hours, same ++ rate. Tell us the villa pin. Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a>.</p>`,
  },
  {
    id: 'cta-pre-faq',
    type: 'cta' as const,
    subtitle: 'Still deciding?',
    title: 'Get a clear all-in quote before you deposit',
    body: 'Share group size, villa area, date, and 2.5-hour or 3-hour. We send options, sample menu direction and chef availability. At least two days’ notice.',
    bg: 'accent' as const,
    primaryAction: {
      label: 'Get quote + sample menu',
      href: WA_QUOTE,
      external: true,
    },
    secondaryAction: {
      label: 'Book the villa class',
      href: WA_LINK,
      external: true,
    },
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Cooking Class Bali — FAQ',
    title: 'Common Questions About Cooking Classes',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book your class',
    title: 'Ready for a Private Indonesian Cooking Class in Your Villa?',
    body: `Tell us your villa area, group size, 2.5-hour or 3-hour, start time and date. Explore more on <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences</a>, <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> and <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> day rates.`,
    primaryAction: {
      label: 'Book Your Villa Class',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'All Experiences',
      href: '/experiences',
    },
  },
]

const FAQS = [
  {
    question: 'How much are cooking classes in Bali with myCHEF?',
    answer:
      'From <strong>IDR 700,000++ per person</strong>, minimum 4 guests. All-in is <strong>IDR 847,000 per person</strong> (10% service + 11% VAT; base × 1.21). Ingredients are included. Your written proposal shows the all-in total.',
  },
  {
    question: 'What does a couple pay for a private cooking class?',
    answer:
      'Couples of 2 are quoted at <strong>IDR 1,400,000++ per person</strong> — the same 4-guest minimum. The class is not half-price for two people.',
  },
  {
    question: 'How long is the cooking class?',
    answer:
      '<strong>2.5 or 3 hours</strong>, at your start time. We ask which length you prefer when you enquire. It is not a five-hour school day with transfers — the session stays at the villa.',
  },
  {
    question: 'What is included in the private Indonesian cooking class?',
    answer:
      'Chef instructor, all ingredients, uniforms &amp; hats, intro + hands-on cooking of 4–6 dishes, sit-down meal of everything prepared, personalised myCHEF Indonesian Cooking Diploma, recipe cards, and full kitchen clean-up.',
  },
  {
    question: 'Do you give a diploma or certificate after the cooking class?',
    answer:
      'Yes. Every participant receives a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> with their name and the date — a real take-home souvenir of the day.',
  },
  {
    question: 'Do we eat the food we cook?',
    answer:
      'Yes. You cook 4–6 dishes, then sit down and eat every dish you prepared. That meal is the centrepiece of the experience.',
  },
  {
    question: 'Is this a cooking class or a private chef?',
    answer:
      'A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. A <strong>private chef</strong> cooks for you. Different products, different quotes. See <a href="/private-chef-bali">private chef Bali</a> for chef hire.',
  },
  {
    question: 'Is this an in-villa cooking class in Bali?',
    answer:
      'Yes. The chef comes to your villa — <a href="/experiences/cooking-class#canggu">Canggu</a>, <a href="/experiences/cooking-class#seminyak">Seminyak</a>, <a href="/experiences/cooking-class#ubud">Ubud</a>, Uluwatu, Jimbaran, <a href="/experiences/cooking-class#sanur">Sanur</a>, Nusa Dua, Kuta corridor and more.',
  },
  {
    question: 'How many people will be in our class? Will it be crowded?',
    answer:
      'Only your group — the class is <strong>100% private</strong>. Unlike large cooking schools that can run 15–24 guests on a shared bench, you never cook alongside strangers.',
  },
  {
    question: 'Do we visit a local market as part of the class?',
    answer:
      'No market tour is promised on this class. The chef shops ingredients beforehand and brings them to the villa. Class time is cooking and eating at home.',
  },
  {
    question: 'How is a myCHEF class different from a Bali cooking school?',
    answer:
      'A cooking school means a fixed menu, a set time slot, a group of strangers and often a five-hour day with hotel pickups. A myCHEF class is private, in your own kitchen, 2.5 or 3 hours — and you eat everything you cook. Honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it">is a cooking class in Bali worth it?</a>',
  },
  {
    question: 'How far in advance should we book a cooking class in Bali?',
    answer:
      'At least <strong>two days</strong>. Ingredients, materials, diploma and setup need that lead time.',
  },
  {
    question: 'What deposit is required?',
    answer:
      'Typically 50% to confirm the chef and date; balance before the class. <a href="/cancellation">Cancellation policy</a>.',
  },
  {
    question: 'Do you offer a cooking class for kids or with kids?',
    answer:
      'Yes — children who join are extra guests on the same class. There is no separate kids tariff. For a full kids party see <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.',
  },
  {
    question: 'Can couples book a private cooking class?',
    answer:
      'Yes. Note the 4-guest minimum: couples pay <strong>IDR 1,400,000++ per person</strong>.',
  },
  {
    question: 'Do you offer a Balinese cooking class and Indonesian cooking class?',
    answer:
      'Yes — the standard program is Indonesian / Balinese focused (base gede, sambals, sate lilit, lawar/urap, nasi goreng, dessert). Vegetarian and allergy menus when briefed at enquiry.',
  },
  {
    question: 'What should I wear to a cooking class?',
    answer:
      'Comfortable clothes you can cook in and secure shoes. We provide uniforms and chef hats for every guest.',
  },
  {
    question: 'What does our villa kitchen need?',
    answer:
      'A working stove and basic prep space is usually enough. We bring specialist tools, uniforms and hats. Share a kitchen photo or listing link when you enquire.',
  },
  {
    question: 'Is this different from the sushi masterclass?',
    answer:
      'Yes. This page is the Indonesian / Balinese in-villa cooking class. Sushi has its own page: <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
  },
  {
    question: 'How do I contact you to book?',
    answer:
      'WhatsApp +62 896-7407-2020 with villa area, guest count, 2.5-hour or 3-hour, start time and date — or use <a href="/quote">quote</a> / <a href="/book">book</a>. At least two days’ notice.',
  },
]

const RELATED_PAGES = [
  {
    label: 'Sushi Masterclass Bali',
    href: '/experiences/sushi-masterclass',
    desc: 'Dedicated private sushi class at your villa — not this Indonesian class.',
  },
  {
    label: 'Kids Birthday Chef Party',
    href: '/experiences/kids-birthday-chef-party',
    desc: 'Kids cooking parties and entertainment at the villa.',
  },
  {
    label: 'Private Chef Bali',
    href: '/private-chef-bali',
    desc: 'Chef cooks for you — not a cooking class. Separate quote.',
  },
  {
    label: 'Private chef Seminyak',
    href: '/private-chef/seminyak',
    desc: 'Villa chef hire in Seminyak for the other days of the stay.',
  },
  {
    label: 'Private chef Canggu',
    href: '/private-chef/canggu',
    desc: 'Villa chef hire in Canggu, Berawa and Pererenan.',
  },
  {
    label: 'Private chef Sanur',
    href: '/private-chef/sanur',
    desc: 'Villa chef hire on the Sanur coast.',
  },
  {
    label: 'Private chef Ubud',
    href: '/private-chef/ubud',
    desc: 'Jungle-villa chef hire in Ubud — meals cooked for you.',
  },
  {
    label: 'Is a Bali cooking class worth it?',
    href: '/blog/is-a-cooking-class-in-bali-worth-it',
    desc: 'An honest answer — who it’s worth it for, and who should skip it.',
  },
  {
    label: 'What does a cooking class cost?',
    href: '/blog/cooking-class-bali-cost',
    desc: 'Group schools vs private villa classes, and what drives the price.',
  },
  {
    label: 'Base Genep explained',
    href: '/blog/base-genep-balinese-spice-paste',
    desc: 'The 15-ingredient Balinese master spice paste, ingredient by ingredient.',
  },
  {
    label: 'Balinese vs Indonesian food',
    href: '/blog/balinese-food-vs-indonesian-food',
    desc: 'What is truly Balinese, what is pan-Indonesian, and why it matters.',
  },
  {
    label: 'Villa cooking class guide',
    href: '/blog/bali-villa-cooking-class-private-chef',
    desc: 'Support article: how an in-villa class works.',
  },
]

export default function ExperienceCookingClassPage() {
  return (
    <>
      <PremiumPage
        slug="experiences/cooking-class"
        title="Cooking Class Bali"
        description={meta.description}
        seoTitle={meta.title}
        seoDescription={meta.description}
        canonicalUrl={CANONICAL}
        h1={meta.h1}
        subtitle="2.5 or 3 hours · chef comes to you · cook 4–6 dishes · eat everything you prepare · diploma. From IDR 700,000++ / all-in IDR 847,000 per person (min 4)."
        heroImage={HERO}
        heroImageAlt="Private chef teaching a couple to cook in a Bali villa kitchen with tropical garden and pool beyond"
        ogImage={`https://mychef.id${HERO}`}
        keywords={[
          'cooking class bali',
          'bali cooking class',
          'private cooking class bali',
          'balinese cooking class',
          'cooking class canggu',
          'cooking class seminyak',
          'cooking class ubud',
          'indonesian cooking class bali',
        ]}
        highlights={[
          '2.5 or 3 Hours at the Villa',
          'Diploma Included',
          'From IDR 700K++ / 847K all-in',
          'Eat Everything You Cook',
        ]}
        sections={SECTIONS}
        faqs={FAQS}
        relatedPages={RELATED_PAGES}
        ctaText="Book Your Villa Class"
        ctaSubtext="WhatsApp villa area, group size, 2.5 or 3 hours, start time and date — at least two days’ notice."
        extraJsonLd={[
          breadcrumbSchema('Cooking Class Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
          faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Indonesian Cooking Class Bali',
            description:
              'Private in-villa Indonesian/Balinese cooking class. Chef comes to you. 2.5 or 3 hours. Cook 4–6 dishes, eat what you cooked, diploma. From IDR 700,000++ per person, minimum 4 (all-in IDR 847,000 pp). Ingredients included.',
            provider: providerRef,
            areaServed: [
              { '@type': 'Place', name: 'Bali, Indonesia' },
              { '@type': 'Place', name: 'Canggu, Bali' },
              { '@type': 'Place', name: 'Seminyak, Bali' },
              { '@type': 'Place', name: 'Ubud, Bali' },
              { '@type': 'Place', name: 'Sanur, Bali' },
            ],
            serviceType: 'Private in-villa cooking class',
            image: `https://mychef.id${HERO}`,
            url: CANONICAL,
            offers: {
              '@type': 'Offer',
              priceCurrency: 'IDR',
              price: '700000',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '700000',
                priceCurrency: 'IDR',
                unitText: 'per person ++ (all-in IDR 847000)',
                referenceQuantity: {
                  '@type': 'QuantitativeValue',
                  value: 4,
                  unitText: 'minimum guests',
                },
              },
              availability: 'https://schema.org/InStock',
              url: CANONICAL,
              description:
                'IDR 700,000++ per person, minimum 4 guests. All-in IDR 847,000 per person including 10% service and 11% VAT. Couples IDR 1,400,000++ per person.',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Private Indonesian Cooking Class at Your Bali Villa',
            description:
              'Hands-on private cooking class taught by a myCHEF chef in your villa kitchen. 2.5 or 3 hours. Cook 4–6 Indonesian/Balinese dishes, eat everything you prepared, receive a personalised diploma and recipes. Ingredients included.',
            provider: providerRef,
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'onsite',
              courseWorkload: 'PT2H30M',
              location: { '@type': 'Place', name: 'Guest villa kitchen, Bali' },
            },
          },
        ]}
      />
      <StickyMobileCTA
        label="Book villa cooking class"
        serviceName="a private Indonesian cooking class at my Bali villa"
        intent="a 2.5 or 3-hour class quote with diploma"
        pageSource="experiences-cooking-class"
        serviceType="cooking-class"
      />
    </>
  )
}
