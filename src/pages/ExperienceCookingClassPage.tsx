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
 * /experiences/cooking-class — commercial pillar for cooking class bali / bali cooking class.
 * Live-page facts only for duration, price, inclusions, FAQ:
 * 3-hour private Indonesian villa class; from IDR 700,000++/person min 4;
 * diploma; eat what you cook; WhatsApp +62 896-7407-2020.
 * Do not invent FAQs, all-in math, or booking rules until WhatsApp-history FAQs land.
 */

const meta = getPageMeta('experience-cooking-class')

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%203-hour%20private%20Indonesian%20cooking%20class%20at%20my%20Bali%20villa.%20Group%20size%3A%20%20Villa%20area%3A%20%20Date%3A'
const WA_QUOTE =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20please%20send%20a%20cooking%20class%20quote%20%2B%20sample%20menu.%20Guests%3A%20%20Area%3A%20%20Date%3A'
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
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Your villa.</strong> The chef comes to you.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Time</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Often a five-hour day built around hotel pickups.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>3 hours</strong> at the villa.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Who cooks</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">15–24 guests, mixed groups, a pace set by the room.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Only your guests.</strong> Private session — you cook together.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Market</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A supervised group market walk is often built into the day.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">The chef shops beforehand and brings ingredients. Class time is cooking and eating.</td>
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
<p><strong>A complete 3-hour private Indonesian cooking experience</strong> — introduction to the food, hands-on cooking, and the full meal of everything you prepared. Every guest finishes with a personalised <strong>myCHEF Indonesian Cooking Diploma</strong>, recipe cards and a spotless kitchen.</p>

<div style="margin:1.75rem 0;border-left:3px solid #C5A028;padding-left:1.25rem">
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">1 · Welcome &amp; introduction to the food</strong> <em>(15–20 min)</em><br/>
  Chef arrives with a short welcome drink. Hands-on intro to key Indonesian and Balinese ingredients and spice pastes — base gede, base wangi, fresh sambals, coconut, lemongrass and more. You smell, taste and learn the flavour logic and cultural context <em>before</em> any cooking starts.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">2 · Hands-on cooking</strong> <em>(about 1h 45m – 2h)</em><br/>
  You actively cook 4–6 dishes under the chef’s guidance — beginner-friendly or more advanced depending on the group. You don’t just watch: you cook the full menu.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">3 · Sit-down meal</strong><br/>
  Everything you cooked is plated and eaten together at your villa table. <strong>You cooked it — now you eat every dish.</strong> This is the emotional payoff of the day.</p>
  <p style="margin:0"><strong style="color:#C5A028">4 · Diploma + recipes + clean-up</strong><br/>
  Presentation of a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> (name + date). Printed recipe cards adapted for a normal home kitchen. Full kitchen clean-up.</p>
</div>

<p><strong>Popular with villa groups</strong> — early booking recommended in high season (July–August, December–January).</p>
${CTA_HTML('Reserve your private 3-hour class')}
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
    body: `<p>A <strong>cooking class in Bali</strong> should taste like the island — spice pastes pounded by hand, coconut milk simmered patiently, sambal balanced until it sings — not a rushed tourist demo with twenty strangers and a fixed script. myCHEF runs a <strong>private cooking class</strong> in the kitchen of <em>your</em> villa: a professional chef, ingredients for your session, instruction at your pace, and a full meal of every dish you cook together.</p>
    <p><strong>Standard offer: a complete 3-hour private Indonesian cooking experience</strong> — introduction to the food, hands-on cooking, sit-down meal of everything you prepared, personalised diploma, recipe cards and full clean-up. From <strong>IDR 700,000++ per person</strong>, minimum 4 guests; smaller groups pay the 4-person rate.</p>
    <p>Whether you searched for a <strong>cooking class Bali</strong>, <strong>bali cooking class</strong>, <strong>Balinese cooking class</strong>, or a <strong>private cooking class bali</strong>, the product is the same: the chef comes to you. No shuttle. No shared bench. Prefer sushi only? That lives on our <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>
    ${COMPARE_TABLE}
    ${CTA_HTML('Book your 3-hour class — WhatsApp')}`,
  },
  {
    id: 'program',
    type: 'content' as const,
    subtitle: 'The standard experience',
    title: 'The 3-Hour Indonesian Cooking Class Program',
    body: PROGRAM_HTML,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Published rate',
    title: 'Cooking Class Cost — From IDR 700,000++ per Person',
    body: `<p style="font-size:1.15rem;line-height:1.6"><strong>From IDR 700,000++ per person.</strong> Minimum <strong>4 guests</strong>. If your group is smaller than 4, you still pay the 4-person rate.</p>
    <p>++ means 11% government tax and 10% service. Your written proposal shows the all-in total.</p>
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
    <p>Larger groups receive additional staff so everyone stays active. Dietary needs are taken at enquiry.</p>
    <p>If you also want a chef to cook <em>for</em> you on other days of the stay, that is a separate private-chef booking. See <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef Bali</a>.</p>
    <p style="font-size:0.95rem;color:#4A4A4A">Comparing school tickets vs villa classes? Our <a href="/blog/cooking-class-bali-cost" class="text-[#7E6410] hover:underline font-medium">cooking class cost guide</a> explains the difference. Honest take on whether to book: <a href="/blog/is-a-cooking-class-in-bali-worth-it" class="text-[#7E6410] hover:underline font-medium">is a cooking class in Bali worth it?</a></p>
    ${CTA_HTML('Get your personalised quote + sample menu', WA_QUOTE)}`,
  },
  {
    id: 'cta-mid-1',
    type: 'cta' as const,
    subtitle: 'Peak season fills fast',
    title: 'Message us your villa location & group size',
    body: 'We reply within about 2 hours with options, a sample menu outline and availability. Limited chef days in high season.',
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
    subtitle: 'Private villa, not a crowded school',
    title: 'Why a Private Cooking Class Beats a Tourist Kitchen School',
    body: `<p>Traditional cooking schools in Bali can be excellent — and they can also mean fixed menus, large groups and a pace set by whoever is slowest in the room. A <strong>private cooking class Bali</strong> flips that model. Your villa kitchen becomes the classroom. Your dietary needs shape the menu. Your skill level sets the depth.</p>
    <p><strong>The practical difference is bigger than it sounds.</strong> Many group cooking schools run classes of 15–24 guests and a five-hour day built around hotel pickups, a shared bench and a supervised market walk. A myCHEF class is <strong>100% private</strong> — only your group, no strangers, no shuttle. There is <strong>zero transfer time</strong>: the chef comes to you, shops the market ingredients beforehand, and every minute is spent cooking, eating and learning rather than waiting on a minibus.</p>
    <p>A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. A <strong>private chef</strong> cooks for you. Same company, different products. If you already have a chef stay booked, the class can sit on another day as a separately quoted session.</p>
    <p>myCHEF is a chef-led hospitality company for villa dining and catering across Bali. Cooking classes sit beside <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef hire</a> and <a href="/catering" class="text-[#7E6410] hover:underline font-medium">villa catering</a> — WhatsApp booking, cleanup before we leave.</p>`,
  },
  {
    id: 'sample-menus',
    type: 'content' as const,
    subtitle: 'What you actually cook',
    title: 'Sample 3-Hour Menus (Customisable)',
    image: IMG_ING,
    imageAlt:
      'Balinese cooking class ingredients including turmeric, lemongrass, chili and coconut on a teak villa table',
    body: `<p>Menus are designed around your group — but a clear sample helps you picture the afternoon. You cook everything, then sit down and eat the full menu together.</p>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Standard Indonesian / Balinese (our lead menu)</h3>
    <ul>
      <li>Introduction to key spices &amp; ingredients + pounding <em>base gede</em></li>
      <li>Sambal matah (fresh raw shallot-chilli salsa)</li>
      <li>Sate lilit (minced seafood or chicken satay on lemongrass)</li>
      <li>Lawar or urap-style vegetable salad with grated coconut</li>
      <li>Nasi goreng or fragrant coconut rice</li>
      <li>Palm-sugar dessert or fresh fruit finish</li>
    </ul>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Vegan / plant-forward</h3>
    <ul>
      <li>Base gede · gado-gado with peanut sauce · tempeh or tofu sate · lawar sayur · nasi kuning · fruit + coconut dessert</li>
    </ul>
    <p style="font-size:0.95rem;color:#4A4A4A">See <a href="/blog/vegan-vegetarian-balinese-cooking" class="text-[#7E6410] hover:underline font-medium">vegan &amp; vegetarian Balinese cooking</a> for how plant-based menus work in this cuisine.</p>
    <p>Special requests are normal: more seafood, milder spice, extra vegetable dishes. Sushi-only stays on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page.</p>
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
        title: 'Full 3-hour program',
        desc: 'Introduction to the food, hands-on cooking of 4–6 dishes, sit-down meal of everything you cooked.',
      },
      {
        icon: Award,
        title: 'Personalised diploma',
        desc: 'Every guest receives a myCHEF Indonesian Cooking Diploma — name + date, a real take-home memory.',
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
        title: 'Recipes + full clean-up',
        desc: 'Cards written for a home kitchen. Kitchen left spotless before we leave.',
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
    ${CTA_HTML('Message us now — limited chef availability in peak season')}`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Who books a cooking class',
    title: 'Cooking Classes for Couples, Families, Wedding Stays and Villa Groups',
    image: IMG_DINE,
    imageAlt:
      'Guests dining at a Bali villa after a private cooking class, sharing dishes they prepared with their chef',
    body: `<p><strong>Couples.</strong> Popular for honeymoons and date nights. Note the 4-guest minimum: couples still pay the 4-person rate.</p>
    <p><strong>Families.</strong> Age-appropriate tasks, flexible spice, fun uniforms. For a full kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p><strong>Birthday &amp; villa groups.</strong> Social, useful and photographable for villa holiday groups.</p>
    <p><strong>Wedding stays.</strong> Welcome the bridal party the day before the ceremony. Pair later with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a>.</p>
    <p><strong>Already hiring a chef?</strong> Add the class as a separately quoted session on another day — not inside a private-chef day rate.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How booking works',
    title: 'From First Message to Diploma',
    body: `<p><strong>1. Contact us.</strong> WhatsApp villa area, guest count, ages if kids join, dietary needs, date and cuisine preference.</p>
    <p><strong>2. We propose the class.</strong> Written outline: dishes, 3-hour structure, kitchen needs, all-in quote. No hidden line items after approval.</p>
    <p><strong>3. Confirm.</strong> Typically 50% deposit to confirm the chef and date; balance before the class.</p>
    <p><strong>4. We shop and set up.</strong> The chef shops beforehand, then comes to your villa with ingredients, knives, spice kit, uniforms, hats and any missing tools.</p>
    <p><strong>5. You cook — then you eat — then diploma + clean-up.</strong></p>
    ${CTA_HTML('WhatsApp us your villa location & group size — we reply within 2 hours')}`,
  },
  {
    id: 'seminyak',
    type: 'content' as const,
    subtitle: 'Cooking class Seminyak',
    title: 'Cooking Class Seminyak — Design Villas, Groups and Hen Parties',
    body: `<p>A <strong>cooking class Seminyak</strong> with myCHEF is the same 3-hour private Indonesian villa class: the chef comes to Petitenget, Oberoi, Batu Belig or the beach strip. You cook 4–6 dishes, eat what you cooked, and leave with a diploma. No school pickup from a Seminyak hotel.</p>
    <p>Villa groups here use it as a pre-dinner activity — hen parties, birthday houses, couples who do not want to leave the pool. From <strong>IDR 700,000++ per person</strong>, minimum 4.</p>
    <p>Want the chef to cook <em>for</em> you the other nights? That is <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">private chef Seminyak</a> — a different booking. Dining-out context: <a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak dining guide</a>.</p>`,
  },
  {
    id: 'canggu',
    type: 'content' as const,
    subtitle: 'Cooking class Canggu',
    title: 'Cooking Class Canggu — Berawa, Pererenan and Surf-Trip Groups',
    body: `<p>A <strong>cooking class Canggu</strong> is for Berawa, Batu Bolong, Echo Beach and Pererenan villas that want one hands-on afternoon without driving to a school. Same 3-hour private Indonesian class, same diploma, chef comes to you. Surf-trip groups and long-stay villas book it as a shared activity that still ends at their own table.</p>
    <p>From IDR 700,000++ per person, minimum 4. Sushi is a different page.</p>
    <p>Weekly chef meals are <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">private chef Canggu</a>. Area context: <a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu dining guide</a>.</p>`,
  },
  {
    id: 'sanur',
    type: 'content' as const,
    subtitle: 'Cooking class Sanur',
    title: 'Cooking Class Sanur — Family Villas on the East Coast',
    body: `<p>Sanur villas — quieter, often family-led, a different clock from Canggu — use the same <strong>cooking class Sanur</strong> product: chef comes to the villa, 3-hour private Indonesian class, 4–6 dishes, eat what you cooked, diploma.</p>
    <p>From IDR 700,000++ per person, minimum 4. Couples still pay the 4-person rate.</p>
    <p>Chef hire for the rest of the stay: <a href="/private-chef/sanur" class="text-[#7E6410] hover:underline font-medium">private chef Sanur</a>. Area guide: <a href="/locations/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur dining</a>.</p>`,
  },
  {
    id: 'ubud',
    type: 'content' as const,
    subtitle: 'Cooking class Ubud — villa private, not a group school',
    title: 'Cooking Class Ubud — Villa Kitchen vs the Famous Group Schools',
    body: `<p>Ubud is where most visitors first meet the idea of a Bali cooking class — and where the well-known group schools sit. Those schools typically run a shared morning: hotel pickup, a supervised market walk, then a bench of 15–24 people on a set menu. The day often stretches to about five hours once transfers are in. That can be the right day trip if you want a school outing.</p>
    <p>A <strong>cooking class Ubud</strong> with myCHEF is a different product. It happens in the villa you already rented — Sayan, Penestanan, Campuhan, Tegallalang or Ubud central. 3 hours. The chef shops beforehand and comes to you. Only your guests. You cook 4–6 Indonesian / Balinese dishes, eat them at your own table, and leave with a diploma. There is no school shuttle and no shared bench.</p>
    <p>We do not try to be a Ubud cooking school. If you want the classic group-school day, book a school. If you want a private villa class, this page is the product — from IDR 700,000++ per person, minimum 4.</p>
    <p>Chef meals for the rest of an Ubud stay: <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">private chef Ubud</a>. Jungle-villa dining context: <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud dining guide</a>.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Same class, your villa pin',
    title: 'Island-Wide — Always Your Villa',
    body: `<p>We also teach in Uluwatu, Jimbaran, Nusa Dua, the Kuta corridor and the rest of our villa coverage. Same 3-hour private Indonesian class, same ++ rate. Tell us the villa pin. Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a>.</p>`,
  },
  {
    id: 'cta-pre-faq',
    type: 'cta' as const,
    subtitle: 'Still deciding?',
    title: 'Get a clear quote before you deposit',
    body: 'Share group size, villa area and preferred date. We send options, sample menu direction and chef availability — usually the same day.',
    bg: 'accent' as const,
    primaryAction: {
      label: 'Get quote + sample menu',
      href: WA_QUOTE,
      external: true,
    },
    secondaryAction: {
      label: 'Book the 3-hour class',
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
    title: 'Ready for a 3-Hour Private Indonesian Cooking Class in Your Villa?',
    body: `Tell us your villa area, group size and date. We confirm chef availability and send a tailored proposal. Explore more on <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences</a>, <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> and <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> day rates.`,
    primaryAction: {
      label: 'Book Your 3-Hour Class',
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
      'From <strong>IDR 700,000++ per person</strong>, minimum 4 guests (smaller groups still pay the 4-person rate). Includes chef instructor, ingredients, uniforms &amp; hats, full 3-hour program, meal of everything you cook, personalised diploma, recipe cards and clean-up. ++ is 11% tax + 10% service — your written proposal shows the all-in total.',
  },
  {
    question: 'What is included in the 3-hour private Indonesian cooking class?',
    answer:
      'Welcome &amp; introduction to ingredients and spice pastes (15–20 min), hands-on cooking of 4–6 dishes (~2 hours), sit-down meal of everything prepared, personalised myCHEF Indonesian Cooking Diploma, recipe cards, uniforms &amp; chef hats, and full kitchen clean-up.',
  },
  {
    question: 'Do you give a diploma or certificate after the cooking class?',
    answer:
      'Yes. Every participant receives a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> with their name and the date — a real take-home souvenir of the day.',
  },
  {
    question: 'Do we eat the food we cook?',
    answer:
      'Yes. You cook the full menu, then sit down and eat every dish you prepared. That meal is the centrepiece of the experience — not a side note.',
  },
  {
    question: 'Are cooking classes worth it at a private villa?',
    answer:
      'For guests who want privacy, a custom menu, a real meal and a diploma, a private villa cooking class is often more valuable than a large tourist demo. You leave with skills, recipes and memories — not only photos. Honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it">is a cooking class in Bali worth it?</a>',
  },
  {
    question: 'What is a cookery class — and how does a cooking class work?',
    answer:
      'Hands-on instruction where you prepare dishes with a chef. With myCHEF the chef comes to your villa: intro to the food → you cook together → you eat what you made → diploma + clean-up.',
  },
  {
    question: 'Do you offer a Balinese cooking class and Indonesian cooking class?',
    answer:
      'Yes — the standard 3-hour program is Indonesian / Balinese focused (base gede, sambals, sate lilit, lawar/urap, nasi goreng, dessert). Vegan, gluten-free and family formats available on request.',
  },
  {
    question: 'Is this an in-villa cooking class in Bali?',
    answer:
      'Yes. Classes are held in your villa kitchen island-wide — <a href="/experiences/cooking-class#seminyak">Seminyak</a>, <a href="/experiences/cooking-class#canggu">Canggu</a>, <a href="/experiences/cooking-class#ubud">Ubud</a>, Uluwatu, Jimbaran, <a href="/experiences/cooking-class#sanur">Sanur</a>, Nusa Dua, Kuta corridor and more.',
  },
  {
    question: 'How many people will be in our class? Will it be crowded?',
    answer:
      'Only your group — the class is <strong>100% private</strong>. Unlike large cooking schools that can run 15–24 guests on a shared bench, you never cook alongside strangers. That privacy is why couples, families and villa groups choose the in-villa format.',
  },
  {
    question: 'Do we visit a local market as part of the class?',
    answer:
      'Our standard class is held entirely in your villa. We shop fresh market ingredients beforehand and bring them to you. There is no promised market tour in this class.',
  },
  {
    question: 'How is a myCHEF class different from a Bali cooking school?',
    answer:
      'A cooking school means a fixed menu, a set time slot, a group of strangers and often a five-hour day with hotel pickups. A myCHEF class is private, in your own kitchen, built around your menu, pace and dietary needs — and you eat everything you cook. See our honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it">is a cooking class in Bali worth it?</a>',
  },
  {
    question: 'How long do cooking classes take?',
    answer:
      'The standard private Indonesian class is a complete <strong>3-hour experience</strong> (intro + cooking + meal + diploma).',
  },
  {
    question: 'Is there a cooking class for beginners?',
    answer:
      'Yes. Beginners are welcome — that is our default. Experienced cooks can request deeper technique.',
  },
  {
    question: 'Do you offer a cooking class for kids or with kids?',
    answer:
      'Yes — family formats with age-appropriate tasks, milder spices and fun uniforms. For a full kids party production see <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a>.',
  },
  {
    question: 'Can couples book a private cooking class?',
    answer:
      'Yes — couples classes are popular for honeymoons and date nights. Note the 4-guest minimum pricing: couples still pay the 4-person rate.',
  },
  {
    question: 'Can we book a cooking class as a gift or for a birthday?',
    answer:
      'Yes. Share the recipient’s villa details and dietary notes. We coordinate discreetly for birthday and gift experiences.',
  },
  {
    question: 'Do you run cooking classes for team building or retreats?',
    answer:
      'Yes for villa groups. Larger teams get extra staff and stations. Multi-day food programmes can connect with <a href="/events/retreats">retreat catering</a> and <a href="/events/corporate-events">corporate events</a>.',
  },
  {
    question: 'What should I wear to a cooking class?',
    answer:
      'Comfortable clothes you can cook in and secure shoes. We provide uniforms and chef hats for every guest — great for photos.',
  },
  {
    question: 'What does our villa kitchen need?',
    answer:
      'A working stove and basic prep space is usually enough. We bring specialist tools, uniforms and hats. Share a kitchen photo or listing link when you enquire.',
  },
  {
    question: 'Can you handle vegan, vegetarian, gluten-free or halal menus?',
    answer:
      'Yes when briefed at enquiry. We have dedicated vegan and gluten-free sample menus; allergy-safe options are routine.',
  },
  {
    question: 'How far in advance should we book a cooking class in Bali?',
    answer:
      'A few days is often enough off-peak; one week or more for peak season (July–August, December). Last-minute sometimes possible — ask on WhatsApp.',
  },
  {
    question: 'What deposit is required?',
    answer:
      'Typically 50% to confirm the chef and date; balance before the class. <a href="/cancellation">Cancellation policy</a>.',
  },
  {
    question: 'Is this different from the sushi masterclass?',
    answer:
      'Yes. This page covers the 3-hour private Indonesian / Balinese villa cooking class. Sushi has its own page: <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
  },
  {
    question: 'How do I contact you to book?',
    answer:
      'WhatsApp +62 896-7407-2020 with villa area, guest count and date — or use <a href="/quote">quote</a> / <a href="/book">book</a>.',
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
        subtitle="3-hour private Indonesian class · cook 4–6 dishes · eat everything you prepare · personalised diploma. From IDR 700,000++ per person (min 4)."
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
          '3-Hour Program',
          'Diploma Included',
          'From IDR 700K++ / person',
          'Eat Everything You Cook',
        ]}
        sections={SECTIONS}
        faqs={FAQS}
        relatedPages={RELATED_PAGES}
        ctaText="Book Your 3-Hour Class"
        ctaSubtext="WhatsApp villa area, group size and date — we reply within about 2 hours with options and a clear quote."
        extraJsonLd={[
          breadcrumbSchema('Cooking Class Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
          faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: '3-Hour Private Indonesian Cooking Class Bali',
            description:
              'Private 3-hour Indonesian cooking class in your Bali villa: ingredient introduction, hands-on cooking of 4–6 dishes, sit-down meal of everything prepared, personalised diploma, uniforms, recipes and clean-up. From IDR 700,000++ per person, minimum 4 guests.',
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
                unitText: 'per person ++',
                referenceQuantity: {
                  '@type': 'QuantitativeValue',
                  value: 4,
                  unitText: 'minimum guests',
                },
              },
              availability: 'https://schema.org/InStock',
              url: CANONICAL,
              description: 'IDR 700,000++ per person, minimum 4 guests.',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Private 3-Hour Indonesian Cooking Class at Your Bali Villa',
            description:
              'Hands-on private cooking class taught by a myCHEF chef in your villa kitchen. 3 hours. Cook 4–6 Indonesian/Balinese dishes, eat everything you prepared, receive a personalised diploma and recipes.',
            provider: providerRef,
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'onsite',
              courseWorkload: 'PT3H',
              location: { '@type': 'Place', name: 'Guest villa kitchen, Bali' },
            },
          },
        ]}
      />
      <StickyMobileCTA
        label="Book 3-hour cooking class"
        serviceName="a private Indonesian cooking class at my Bali villa"
        intent="a 3-hour class quote with diploma"
        pageSource="experiences-cooking-class"
        serviceType="cooking-class"
      />
    </>
  )
}
