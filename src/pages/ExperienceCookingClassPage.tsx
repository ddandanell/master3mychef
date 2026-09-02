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
 * /experiences/cooking-class — primary SEO pillar for "cooking class bali"
 * Standalone in-villa Indonesian/Balinese class (not private-chef day hire,
 * not a restaurant school). About 2.5–3 hours. From IDR 700,000++/pp min 4.
 * Do not promise market tours or multi-cuisine formats here.
 */

const meta = getPageMeta('experience-cooking-class')

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20Indonesian%20cooking%20class%20at%20my%20Bali%20villa.%202.5-hour%20or%203-hour%3A%20%20Start%20time%3A%20%20Group%20size%3A%20%20Villa%20area%3A%20%20Date%3A'
const WA_QUOTE =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20please%20send%20a%20cooking%20class%20quote%20%2B%20sample%20menu.%20Guests%3A%20%20Area%3A%20%20Date%3A%20Preferred%20length%20(2.5%20or%203%20hours)%3A'
const CANONICAL = 'https://mychef.id/experiences/cooking-class'
const HERO = '/generated/mychef-cooking-class-bali-hero-villa.webp'
const IMG_ING = '/generated/mychef-cooking-class-bali-ingredients-spread.webp'
const IMG_DINE = '/generated/mychef-cooking-class-bali-guests-dining.webp'
const IMG_BALINESE = '/generated/mychef-cooking-class-balinese-ingredients-bali-landscape.webp'
const IMG_TEACH = '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp'

const CTA_HTML = (label: string, href = WA_LINK) =>
  `<p style="margin:1.5rem 0 0"><a href="${href}" class="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#D4B43A]" target="_blank" rel="noopener noreferrer">${label}</a> <a href="${WA_QUOTE}" class="ml-2 text-sm font-semibold text-[#7E6410] hover:underline" target="_blank" rel="noopener noreferrer">Get quote + sample menu →</a></p>`

const COMPARE_TABLE = `
<div style="overflow-x:auto;margin:1.5rem 0 0">
<table style="width:100%;border-collapse:collapse;font-size:0.95rem;line-height:1.45">
  <thead>
    <tr>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;width:28%"></th>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;background:#FAFAF8">Typical group kitchen school</th>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;background:#F7F0D8"><strong>myCHEF private villa class</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Where</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A school kitchen. Pickup from the hotel, then a shared bench.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Your villa.</strong> The chef comes to you. Always at the villa — not a studio.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Time</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Often 5–6.5 hours once transfers are counted.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>About 2.5–3 hours</strong> at the villa, at your start time.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Who cooks</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">15–24 guests, mixed groups, a pace set by the room.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Only your guests.</strong> Private session — you cook together.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Market</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A supervised group market walk is often built into the day.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">The chef shops first and brings ingredients. Class time is cooking and eating.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">What you eat</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A set school menu, shared with the group.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">You cook 4–6 dishes, then eat what you cooked.</td>
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
<p>A complete private Indonesian / Balinese cooking experience in your villa — about <strong>2.5 or 3 hours</strong>, timed to the start you choose. Introduction to the food, hands-on cooking of <strong>4–6 dishes</strong>, then the meal of everything you prepared. Every guest finishes with a personalised <strong>myCHEF Indonesian Cooking Diploma</strong>, recipe cards and a spotless kitchen.</p>
<p>The diploma is prepared in advance — one reason we cannot run the class the same day you message.</p>

<div style="margin:1.75rem 0;border-left:3px solid #C5A028;padding-left:1.25rem">
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">1 · Welcome &amp; introduction to the food</strong><br/>
  Chef arrives with a short welcome drink. Hands-on intro to key Indonesian and Balinese ingredients and spice pastes — base gede, base wangi, fresh sambals, coconut, lemongrass and more. You smell, taste and learn the flavour logic <em>before</em> the cooking starts.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">2 · Hands-on cooking</strong><br/>
  You cook 4–6 dishes with the chef — beginner-friendly or more advanced depending on the group. You don’t just watch.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">3 · Sit-down meal</strong><br/>
  Everything you cooked is plated and eaten together at your villa table. <strong>You cooked it — now you eat every dish.</strong></p>
  <p style="margin:0"><strong style="color:#C5A028">4 · Diploma + recipes + clean-up</strong><br/>
  Presentation of a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> (name + date). Printed recipe cards adapted for a normal home kitchen. Full kitchen clean-up.</p>
</div>

<p>Tell us 2.5-hour or 3-hour, and your preferred start time, when you enquire. High season (July–August, December–January) fills faster — book at least two days ahead.</p>
${CTA_HTML('Reserve your private villa class')}
`

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Chef comes to your villa',
    title: 'A Private Indonesian Cooking Class — In Your Villa Kitchen',
    image: HERO,
    imageAlt:
      'Private chef teaching a hands-on cooking class in a luxury Bali villa kitchen with tropical light',
    body: `<p>Private in-villa Indonesian/Balinese cooking class. About 2.5–3 hours. Cook 4–6 dishes with the chef, then eat together. Diploma included. From <strong>IDR 700,000++ per person</strong>, minimum 4 (all-in <strong>IDR 847,000</strong> pp). Couples are quoted to the 4-person minimum. Groceries included. Book at least 2 days ahead.</p>
    <p>This is a <strong>standalone experience</strong>, not a private-chef day hire and not a restaurant school. The chef comes to the guest villa. You cook together and eat what you cooked. Indonesian / Balinese is the standard (Javanese if you ask). Prefer sushi only? That lives on our <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>
    ${COMPARE_TABLE}
    ${CTA_HTML('Book your private class — WhatsApp')}`,
  },
  {
    id: 'program',
    type: 'content' as const,
    subtitle: 'About 2.5–3 hours, your start time',
    title: 'What Happens in the Class',
    body: PROGRAM_HTML,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Published rate, ++ and all-in',
    title: 'Cooking Class Cost — From IDR 700,000++ per Person',
    body: `<p style="font-size:1.15rem;line-height:1.6"><strong>From IDR 700,000++ per person.</strong> Minimum <strong>4 guests</strong>. All-in is <strong>IDR 847,000 per person</strong> (base × 1.21).</p>
    <p>++ means 10% service charge and 11% VAT. Your written proposal shows the all-in total before you pay.</p>
    <p><strong>Verified example (4 guests):</strong> 4 × IDR 700,000 = IDR 2,800,000++ → <strong>IDR 3,388,000 all-in</strong>.</p>
    <p><strong>Couples (2 guests):</strong> quoted at <strong>IDR 1,400,000++ per person</strong> — the same IDR 2,800,000++ floor / IDR 3,388,000 all-in. Two people still pay the 4-person minimum; the class is not a half-price couple ticket.</p>
    <p>This is a catering-style all-in session: food and chef together. Groceries and ingredients <strong>are included</strong> in the class price — not billed separately at cost.</p>
    <p>This covers:</p>
    <ul>
      <li>Professional chef instructor at your villa</li>
      <li>All ingredients / groceries</li>
      <li>Full set of <strong>uniforms + chef hats</strong> for every guest</li>
      <li>Hands-on instruction (intro + cooking + meal)</li>
      <li>The complete meal of everything you cook</li>
      <li>Personalised <strong>myCHEF Indonesian Cooking Diploma</strong> for each participant</li>
      <li>Recipe cards for a normal home kitchen</li>
      <li>Full kitchen clean-up</li>
    </ul>
    <p>Larger groups receive additional staff so everyone stays active. Dietary needs (allergies, vegetarian, and anything else we should know) are taken at enquiry — the same way we brief any job.</p>
    <p>If you also want a chef to cook <em>for</em> you on other days of the stay, that is a separate private-chef booking — quoted on its own, never mixed into this class rate. See <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef Bali</a>.</p>
    <p style="font-size:0.95rem;color:#4A4A4A">Comparing school tickets vs villa classes? Our <a href="/blog/cooking-class-bali-cost" class="text-[#7E6410] hover:underline font-medium">cooking class cost guide</a> explains the difference. Honest take on whether to book: <a href="/blog/is-a-cooking-class-in-bali-worth-it" class="text-[#7E6410] hover:underline font-medium">is a cooking class in Bali worth it?</a></p>
    ${CTA_HTML('Get your personalised quote + sample menu', WA_QUOTE)}`,
  },
  {
    id: 'cta-mid-1',
    type: 'cta' as const,
    subtitle: 'Two days’ notice, diploma prepared',
    title: 'Message us your villa, group size and start time',
    body: 'We need at least two days (ingredients, materials, diploma, setup). We decline today and tomorrow. We reply with 2.5-hour or 3-hour options, a sample menu outline and availability.',
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
    subtitle: 'Class vs chef hire vs a school',
    title: 'Why This Is a Villa Class — Not a Chef Day, Not a School',
    body: `<p><strong>Cooking class:</strong> you cook with the chef and eat what you cooked. <strong>Private chef:</strong> they cook for you. Same company, different products. If you already have a chef stay booked, the class can sit on <em>another day</em> as a separately quoted session — never folded into a chef day rate.</p>
    <p>Group kitchen schools in Bali can be a good day out. They are a different shape: a pickup, often a market walk, a shared bench of 15–24, and a 5–6.5 hour clock once the road time is in. A myCHEF class stays in the villa you already rented. About 2.5–3 hours. No school shuttle. The chef shops first so class time is cooking, eating and the diploma — not waiting on a transfer.</p>
    <p>That is the honest split if you are choosing between a famous Ubud-style group school and a private villa class: one is a day trip; the other is a session in your own kitchen, with only your guests, ending at your own table.</p>
    <p>myCHEF is a chef-led hospitality company for villa dining and catering across Bali. Cooking classes sit beside <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef hire</a> and <a href="/catering" class="text-[#7E6410] hover:underline font-medium">villa catering</a> — WhatsApp booking, cleanup before we leave.</p>`,
  },
  {
    id: 'sample-menus',
    type: 'content' as const,
    subtitle: 'What you actually cook',
    title: 'Sample Indonesian / Balinese Menus (Customisable)',
    image: IMG_ING,
    imageAlt:
      'Balinese cooking class ingredients including turmeric, lemongrass, chili and coconut on a teak villa table',
    body: `<p>Menus are designed around your group. The standard class is Indonesian / Balinese. Javanese if you ask. You cook 4–6 dishes, then sit down and eat the full menu together.</p>
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
    <p style="font-size:0.95rem;color:#4A4A4A">See <a href="/blog/vegan-vegetarian-balinese-cooking" class="text-[#7E6410] hover:underline font-medium">vegan &amp; vegetarian Balinese cooking</a> for how plant-based menus work in this cuisine.</p>
    <p>Allergies and other dietary notes are asked at enquiry. Special requests are normal: more seafood, milder spice, extra vegetable dishes. Sushi-only stays on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page.</p>
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
    <p>The logic behind it is <strong>sad rasa</strong>, the six-flavour idea: sweet, sour, salty, bitter, spicy and astringent, balanced in a single paste. In your class you don’t just measure base genep — you <em>build</em> it, pounding it by hand in a <em>cobek</em> and <em>ulekan</em> (the Balinese stone mortar and pestle) and learning the difference between <em>rajang</em> (finely chopped) and <em>ulek</em> (pounded) aromatics. Once you understand base genep, you can rebuild half of Balinese cooking at home — which is exactly what your recipe cards are for.</p>
    <p>Want the full breakdown before you cook? Read our chef’s guide: <a href="/blog/base-genep-balinese-spice-paste" class="text-[#7E6410] hover:underline font-medium">Base genep, explained ingredient by ingredient</a>.</p>
    ${CTA_HTML('Cook base genep from scratch — book your class')}`,
  },
  {
    id: 'signature-dishes',
    type: 'content' as const,
    subtitle: 'What the dishes actually are',
    title: 'Balinese vs Indonesian — Your Menu, Labelled Honestly',
    image: IMG_TEACH,
    imageAlt:
      'Balinese chef teaching guests to prepare sate lilit and sambal matah during a private villa cooking class',
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
    <p>Balinese food is shaped by Hindu ceremony and village cooking; much of Indonesia’s best-known food grew in a different kitchen tradition. Our chefs explain the distinction as you cook. The full story: <a href="/blog/balinese-food-vs-indonesian-food" class="text-[#7E6410] hover:underline font-medium">Balinese food is not Indonesian food — a chef’s guide</a>.</p>
    <p style="margin-top:1.25rem;border-left:3px solid #C5A028;padding-left:1.25rem;color:#4A4A4A"><em>Balinese cooking is inseparable from ceremony — the daily <strong>canang sari</strong> offerings, the communal <strong>megibung</strong> feast, and <strong>Tri Hita Karana</strong>, the idea that food connects people, nature and the divine. We touch on this while we cook; it is why the food means something beyond the plate.</em></p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What every class includes',
    title: 'What Is Included in a myCHEF Cooking Class',
    features: [
      {
        icon: Clock,
        title: 'About 2.5–3 hours',
        desc: 'Your start time. Introduction, hands-on cooking of 4–6 dishes, sit-down meal of everything you cooked.',
      },
      {
        icon: Award,
        title: 'Personalised diploma',
        desc: 'Every guest receives a myCHEF Indonesian Cooking Diploma — name + date. Prepared in advance; not a same-day add-on.',
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
        desc: 'Always the villa, not a studio. Chef comes to you with ingredients already shopped.',
      },
      {
        icon: Sparkles,
        title: 'Recipes + full clean-up',
        desc: 'Cards written for a home kitchen. Groceries included. Kitchen left spotless.',
      },
      {
        icon: MapPin,
        title: 'Island-wide at the villa',
        desc: 'Canggu, Seminyak, Sanur, Ubud, Uluwatu and the rest of our villa coverage — same private class.',
      },
    ],
  },
  {
    id: 'fun-vibe',
    type: 'content' as const,
    subtitle: 'What makes the day special',
    title: 'Uniforms, Diploma Moment & a Happy Villa Kitchen',
    body: `<p>Instruction is professional — the atmosphere is relaxed, social and celebratory. Guests leave smiling, full, and with a diploma in hand. Uniforms and chef hats turn the afternoon into a proper memory (and excellent photos). For bigger groups we add staff automatically so nobody is stuck watching from the side.</p>
    <p>At the end of the class every guest receives a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> — a genuine take-home souvenir of the day. Combine that with recipe cards and the meal of everything you cooked, and the class becomes more than a tourist activity: it is a complete villa experience.</p>
    ${CTA_HTML('Message us now — at least two days’ notice')}`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Who books a cooking class',
    title: 'Couples, Families, Wedding Stays and Villa Groups',
    image: IMG_DINE,
    imageAlt:
      'Guests dining at a Bali villa after a private cooking class, sharing dishes they prepared with their chef',
    body: `<p><strong>Couples.</strong> Popular for honeymoons and date nights. Pricing is the 4-guest minimum: <strong>IDR 1,400,000++ per person</strong> (IDR 2,800,000++ / IDR 3,388,000 all-in for two).</p>
    <p><strong>Families.</strong> Kids who join are extra guests on the <em>same</em> class — not a separate kids product or kids tariff. For a full kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p><strong>Birthday &amp; villa groups.</strong> Social, useful and photographable. Same 2.5–3 hour class, same inclusions.</p>
    <p><strong>Wedding stays.</strong> The class can be a separate day during a wedding stay — a one-session product, quoted on its own. For wedding-scale groups we lock final headcount about a week before. Pair later with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a>.</p>
    <p><strong>Already hiring a chef?</strong> Yes — add the class as a separately quoted session on another day. Do not expect it to sit inside a private-chef day rate.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How booking works',
    title: 'From First Message to Diploma',
    body: `<p><strong>1. Contact us at least two days ahead.</strong> WhatsApp villa area, guest count (including any children as extra guests), dietary needs, date, 2.5-hour or 3-hour, and start time. We decline today and tomorrow — ingredients, materials, diploma and setup need that lead time.</p>
    <p><strong>2. We propose the class.</strong> Written outline: dishes, 2.5 or 3-hour structure, kitchen needs, all-in quote (++ shown). No hidden groceries line — ingredients are in the class price.</p>
    <p><strong>3. Confirm.</strong> Standard bookings: 50% deposit. If a date is last-minute enough that we can still take it, we ask for <strong>full payment to confirm</strong>.</p>
    <p><strong>4. We shop and set up.</strong> The chef shops first, then comes to your villa with ingredients, knives, spice kit, uniforms, hats and any missing tools.</p>
    <p><strong>5. You cook — then you eat — then diploma + clean-up.</strong></p>
    ${CTA_HTML('WhatsApp us your villa, group size and date — two days’ notice')}`,
  },
  {
    id: 'seminyak',
    type: 'content' as const,
    subtitle: 'Cooking class Seminyak',
    title: 'Cooking Class Seminyak — Design Villas, Groups and Hen Parties',
    body: `<p>A <strong>cooking class Seminyak</strong> with myCHEF is the same private villa product: chef comes to Petitenget, Oberoi, Batu Belig or the beach strip, you cook 4–6 Indonesian / Balinese dishes, you eat together, diploma in hand. About 2.5–3 hours. No school pickup from a Seminyak hotel.</p>
    <p>This is the format villa groups actually use here — hen parties, birthday houses, couples who do not want to leave the pool. Compact luxury kitchens are normal; we bring tools the villa does not have. From <strong>IDR 700,000++ per person</strong>, minimum 4 (all-in IDR 847,000 pp).</p>
    <p>Want the chef to cook <em>for</em> you the other nights? That is <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">private chef Seminyak</a> — a different booking. Dining-out context: <a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak dining guide</a>.</p>`,
  },
  {
    id: 'canggu',
    type: 'content' as const,
    subtitle: 'Cooking class Canggu',
    title: 'Cooking Class Canggu — Berawa, Pererenan and Surf-Trip Groups',
    body: `<p>A <strong>cooking class Canggu</strong> is for Berawa, Batu Bolong, Echo Beach and Pererenan villas that want one hands-on afternoon without driving to a school. Same 2.5–3 hour private class, same diploma, same all-in groceries. Surf-trip groups and long-stay villas book it as a shared activity that still ends at their own table.</p>
    <p>Vegetarian and allergy notes are taken at enquiry. The class stays Indonesian / Balinese (Javanese if you ask). Sushi is a different page.</p>
    <p>Weekly chef meals are <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">private chef Canggu</a>. Area context: <a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu dining guide</a>.</p>`,
  },
  {
    id: 'sanur',
    type: 'content' as const,
    subtitle: 'Cooking class Sanur',
    title: 'Cooking Class Sanur — Family Villas on the East Coast',
    body: `<p>Sanur villas — quieter, often family-led, a different clock from Canggu — use the same <strong>cooking class Sanur</strong> product: chef comes to the villa, about 2.5–3 hours, 4–6 dishes, eat what you cooked, diploma. Children who join are extra guests on that class, not a separate kids tariff.</p>
    <p>From IDR 700,000++ per person, minimum 4 (all-in IDR 847,000 pp). Couples pay the 4-person floor. Book at least two days ahead.</p>
    <p>Chef hire for the rest of the stay: <a href="/private-chef/sanur" class="text-[#7E6410] hover:underline font-medium">private chef Sanur</a>. Area guide: <a href="/locations/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur dining</a>.</p>`,
  },
  {
    id: 'ubud',
    type: 'content' as const,
    subtitle: 'Cooking class Ubud — villa private, not a group school',
    title: 'Cooking Class Ubud — Villa Kitchen vs the Famous Group Schools',
    body: `<p>Ubud is where most visitors first meet the idea of a Bali cooking class — and where the well-known group schools sit. Those schools typically run a shared morning: hotel pickup, a supervised market walk, then a bench of 15–24 people on a set menu. The day often stretches to 5–6.5 hours once transfers are in. That can be the right day trip if you want a school outing.</p>
    <p>A <strong>cooking class Ubud</strong> with myCHEF is a different product. It happens in the villa you already rented — Sayan, Penestanan, Campuhan, Tegallalang or Ubud central. About 2.5–3 hours. The chef shops first and comes to you. Only your guests. You cook 4–6 Indonesian / Balinese dishes, eat them at your own table, and leave with a diploma. There is no school shuttle and no shared bench.</p>
    <p>We do not try to be a Ubud cooking school. If you want the classic group-school day, book a school. If you want a private villa class, this page is the product — from IDR 700,000++ per person, minimum 4 (all-in IDR 847,000 pp).</p>
    <p>Chef meals for the rest of an Ubud stay: <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">private chef Ubud</a>. Jungle-villa dining context: <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud dining guide</a>.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Same class, your villa pin',
    title: 'Island-Wide — Always Your Villa',
    body: `<p>We also teach in Uluwatu, Jimbaran, Nusa Dua, the Kuta corridor and the rest of our villa coverage. Same private class, same 2.5–3 hours, same ++ rate. Tell us the villa pin. Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a>.</p>`,
  },
  {
    id: 'cta-pre-faq',
    type: 'cta' as const,
    subtitle: 'Still deciding?',
    title: 'Get a clear all-in quote before you deposit',
    body: 'Share group size, villa area, date, and 2.5-hour or 3-hour. We send options, sample menu direction and chef availability — usually the same day. At least two days’ notice.',
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
    body: `Tell us your villa area, group size, 2.5-hour or 3-hour, start time and date. We confirm chef availability and send a tailored all-in proposal. Explore more on <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences</a>, <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> and <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> day rates.`,
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
    question: 'How much is a cooking class in Bali with myCHEF?',
    answer:
      'From <strong>IDR 700,000++ per person</strong>, minimum 4 guests. All-in is <strong>IDR 847,000 per person</strong> (10% service + 11% VAT; base × 1.21). Example: 4 × IDR 700,000 = IDR 2,800,000++ → IDR 3,388,000 all-in. Groceries are included. Your written proposal shows the all-in total.',
  },
  {
    question: 'What does a couple pay for a private cooking class?',
    answer:
      'Couples of 2 are quoted at <strong>IDR 1,400,000++ per person</strong> — the same IDR 2,800,000++ floor / IDR 3,388,000 all-in as four guests. The class is not half-price for two people.',
  },
  {
    question: 'How long is the cooking class?',
    answer:
      'About <strong>2.5 or 3 hours</strong>, at your start time. We ask which length you prefer when you enquire. It is not a 5–6.5 hour school day with transfers — the session stays at the villa.',
  },
  {
    question: 'Is this a cooking class or a private chef?',
    answer:
      'A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. A <strong>private chef</strong> cooks for you. Different products, different quotes. See <a href="/private-chef-bali">private chef Bali</a> for chef hire.',
  },
  {
    question: 'Can we add a cooking class during a private-chef stay?',
    answer:
      'Yes — as a <strong>separately quoted session on another day</strong>. It is never folded into a private-chef day rate or groceries-at-cost billing. The class price already includes ingredients.',
  },
  {
    question: 'Do you give a diploma after the cooking class?',
    answer:
      'Yes. Every participant receives a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> with their name and the date. We prepare it in advance — one reason we cannot do same-day classes.',
  },
  {
    question: 'Do we eat the food we cook?',
    answer:
      'Yes. You cook 4–6 dishes, then sit down and eat every dish you prepared. That meal is the centrepiece of the experience.',
  },
  {
    question: 'Where is the class held?',
    answer:
      'Always at <strong>your villa</strong> — not a studio and not a school kitchen. The chef comes to you. Canggu, Seminyak, Sanur, Ubud and our other villa areas use the same product.',
  },
  {
    question: 'Do you offer a cooking class in Canggu?',
    answer:
      'Yes. A <a href="/experiences/cooking-class#canggu">cooking class Canggu</a> is the private in-villa class in Berawa, Pererenan, Batu Bolong and nearby — about 2.5–3 hours, chef comes to you. <a href="/private-chef/canggu">Private chef Canggu</a> is chef hire for other days.',
  },
  {
    question: 'Do you offer a cooking class in Seminyak?',
    answer:
      'Yes. A <a href="/experiences/cooking-class#seminyak">cooking class Seminyak</a> runs in your villa (Petitenget, Oberoi, Batu Belig and the strip). Same 2.5–3 hour private class. <a href="/private-chef/seminyak">Private chef Seminyak</a> for dinners cooked for you.',
  },
  {
    question: 'Do you offer a cooking class in Sanur?',
    answer:
      'Yes. A <a href="/experiences/cooking-class#sanur">cooking class Sanur</a> is the same in-villa Indonesian / Balinese class. Children who join are extra guests on that class. <a href="/private-chef/sanur">Private chef Sanur</a> for multi-day chef hire.',
  },
  {
    question: 'Do you offer a cooking class in Ubud?',
    answer:
      'Yes — a private villa class, not a group school with pickup and a shared bench. About 2.5–3 hours in your Sayan, Penestanan, Campuhan or central Ubud villa. See <a href="/experiences/cooking-class#ubud">cooking class Ubud</a>. For chef meals: <a href="/private-chef/ubud">private chef Ubud</a>.',
  },
  {
    question: 'Do we visit a local market as part of the class?',
    answer:
      'No market tour is promised on this class. The chef shops ingredients beforehand and brings them to the villa. Class time is cooking and eating at home.',
  },
  {
    question: 'How far in advance should we book?',
    answer:
      'At least <strong>two days</strong>. We decline today and tomorrow — ingredients, materials, diploma and setup need that lead time. Wedding-scale groups: final headcount about a week before.',
  },
  {
    question: 'What deposit is required?',
    answer:
      'Standard bookings: typically 50% to confirm the chef and date; balance before the class. Last-minute confirmations (when we can still take the date) require <strong>full payment</strong>. <a href="/cancellation">Cancellation policy</a>.',
  },
  {
    question: 'Can kids join the cooking class?',
    answer:
      'Yes — children who join are extra guests on the same class, not a separate kids-class product or kids price. For a full kids party see <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.',
  },
  {
    question: 'Do you offer a Balinese cooking class and Indonesian cooking class?',
    answer:
      'Yes — the standard class is Indonesian / Balinese (base gede, sambals, sate lilit, lawar/urap, nasi goreng, dessert). Javanese if you ask. Vegetarian and allergy menus when briefed at enquiry.',
  },
  {
    question: 'Is a private villa cooking class worth it versus a tourist school?',
    answer:
      'If you want only your group, a 2.5–3 hour session at the villa, a custom pace and a real meal of what you cooked, the villa format is the better fit. A group school is the better fit if you want a full day trip with pickup and a shared bench. Honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it">is a cooking class in Bali worth it?</a>',
  },
  {
    question: 'What should I wear / what does the kitchen need?',
    answer:
      'Comfortable clothes and secure shoes. We provide uniforms and chef hats. A working stove and basic prep space is usually enough — we bring specialist tools. Share a kitchen photo or listing link when you enquire.',
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
    desc: 'A different product: kids cooking parties and entertainment at the villa.',
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
        subtitle="About 2.5–3 hours · your start time · cook 4–6 dishes · eat together · diploma. From IDR 700,000++ per person, min 4 (all-in IDR 847,000)."
        heroImage={HERO}
        heroImageAlt="Private chef teaching a cooking class in a Bali villa kitchen"
        ogImage={`https://mychef.id${HERO}`}
        keywords={[
          'cooking class bali',
          'bali cooking class',
          'private cooking class bali',
          'balinese cooking class',
          'cooking class canggu',
          'cooking class seminyak',
          'cooking class sanur',
          'cooking class ubud',
          'indonesian cooking class bali',
        ]}
        highlights={[
          '2.5–3 Hours at the Villa',
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
              'Private in-villa Indonesian/Balinese cooking class. About 2.5–3 hours. Cook 4–6 dishes with the chef, then eat together. Diploma included. From IDR 700,000++ per person, minimum 4 (all-in IDR 847,000 pp). Groceries included.',
            provider: providerRef,
            areaServed: [
              { '@type': 'Place', name: 'Bali, Indonesia' },
              { '@type': 'Place', name: 'Canggu, Bali' },
              { '@type': 'Place', name: 'Seminyak, Bali' },
              { '@type': 'Place', name: 'Sanur, Bali' },
              { '@type': 'Place', name: 'Ubud, Bali' },
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
                'IDR 700,000++ per person, minimum 4 guests. All-in IDR 847,000 per person including 10% service and 11% VAT.',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Private Indonesian Cooking Class at Your Bali Villa',
            description:
              'Hands-on private cooking class taught by a myCHEF chef in your villa kitchen. About 2.5–3 hours. Cook 4–6 Indonesian/Balinese dishes, eat everything you prepared, receive a personalised diploma and recipes. Groceries included.',
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
