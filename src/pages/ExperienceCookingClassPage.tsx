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
 * /experiences/cooking-class — commercial pillar for PRIMARY "cooking class bali".
 * Private in-villa Indonesian/Balinese class. Chef comes to you. 2.5 or 3 hours.
 * From IDR 700,000++/person min 4 (all-in ×1.21). Couples pay the 4-guest floor.
 * Diploma. Eat what you cook. Recipes. Clean-up.
 * Ubud is a villa location, not the primary keyword (Paon-cluster SERP).
 * Sushi → /experiences/sushi-masterclass. Do not cannibalize private-cooking-class.
 * Do not invent WhatsApp-history FAQs, star ratings, kids ages, or extra prices.
 */

const meta = getPageMeta('experience-cooking-class')

const WA_LINK =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20book%20a%20private%20Indonesian%20cooking%20class%20at%20my%20Bali%20villa.%202.5-hour%20or%203-hour%3A%20%20Start%20time%3A%20%20Group%20size%3A%20%20Villa%20area%3A%20%20Date%3A'
const WA_QUOTE =
  'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20please%20send%20a%20cooking%20class%20quote%20%2B%20sample%20menu.%20Guests%3A%20%20Area%3A%20%20Date%3A%20Preferred%20length%20(2.5%20or%203%20hours)%3A'
const CANONICAL = 'https://mychef.id/experiences/cooking-class'

const HERO = '/generated/mychef-cooking-class-bali-hero-villa.webp'
const IMG_TEACH = '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp'
const IMG_BALINESE = '/generated/mychef-cooking-class-balinese-ingredients-bali-landscape.webp'
const IMG_DINE = '/generated/mychef-cooking-class-bali-guests-dining.webp'

const CTA_HTML = (label: string, href = WA_LINK) =>
  `<p style="margin:1.5rem 0 0"><a href="${href}" class="inline-flex items-center gap-2 rounded-full bg-[#C5A028] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#D4B43A]" target="_blank" rel="noopener noreferrer">${label}</a> <a href="${WA_QUOTE}" class="ml-2 text-sm font-semibold text-[#7E6410] hover:underline" target="_blank" rel="noopener noreferrer">Get quote + sample menu →</a></p>`

const COMPARE_TABLE = `
<div style="overflow-x:auto;margin:1.5rem 0 0">
<table style="width:100%;border-collapse:collapse;font-size:0.95rem;line-height:1.45">
  <thead>
    <tr>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;width:28%"></th>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;background:#FAFAF8">Typical group kitchen school</th>
      <th style="text-align:left;padding:0.75rem 0.85rem;border-bottom:2px solid #C5A028;background:#F7F0D8"><strong>myCHEF — chef comes to your villa</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Where</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Hotel pickup, then a shared school kitchen. You leave the villa.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>Your villa.</strong> The chef comes to you — Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua, Kuta. No shuttle.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Time</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Often <strong>5–6.5 hours</strong> once pickups and a market walk are counted.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>2.5 or 3 hours</strong> at the villa. No minibus.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Who cooks</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>10–18 strangers</strong> on a shared bench. Pace set by the room.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>100% private.</strong> Only your group. You cook together.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Market / pickup</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Morning market walk + free hotel pickup is the usual school day.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">No hotel pickup. No market minibus. The chef shops beforehand. Class time is cooking and eating.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">Price shape</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">Shared-class tickets often about <strong>IDR 350,000–530,000</strong> per person — you share the bench.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3"><strong>From IDR 700,000++ per person</strong>, minimum 4 (all-in IDR 847,000 pp). Private session, ingredients included.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3;font-weight:600">What you eat</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">A set school menu, shared with the group.</td>
      <td style="padding:0.7rem 0.85rem;border-bottom:1px solid #E8E6E3">You cook <strong>4–6 dishes</strong>, then eat everything at your table.</td>
    </tr>
    <tr>
      <td style="padding:0.7rem 0.85rem;font-weight:600">Take-home</td>
      <td style="padding:0.7rem 0.85rem">Usually a recipe PDF.</td>
      <td style="padding:0.7rem 0.85rem">Personalised <strong>diploma</strong> (name + date), recipe cards, uniforms and chef hats, kitchen left clean.</td>
    </tr>
  </tbody>
</table>
</div>
`

const PROGRAM_HTML = `
<p>A complete private Indonesian / Balinese cooking class in your villa — <strong>2.5 or 3 hours</strong>, timed to the start you choose. Introduction to the food, hands-on cooking of <strong>4–6 dishes</strong>, then the meal of everything you prepared. Every guest finishes with a personalised <strong>myCHEF Indonesian Cooking Diploma</strong>, recipe cards and a spotless kitchen.</p>

<div style="margin:1.75rem 0;border-left:3px solid #C5A028;padding-left:1.25rem">
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">1 · Welcome &amp; introduction to the food</strong> <em>(15–20 min)</em><br/>
  Chef arrives with a short welcome drink. Hands-on intro to key Indonesian and Balinese ingredients and spice pastes — base gede, base wangi, fresh sambals, coconut, lemongrass and more.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">2 · Hands-on cooking</strong> <em>(about 1h 45m – 2h)</em><br/>
  You cook 4–6 dishes with the chef — beginner-friendly or more advanced depending on the group. You don’t just watch.</p>
  <p style="margin:0 0 1.25rem"><strong style="color:#C5A028">3 · Sit-down meal</strong><br/>
  Everything you cooked is plated and eaten together at your villa table. <strong>You cooked it — now you eat every dish.</strong></p>
  <p style="margin:0"><strong style="color:#C5A028">4 · Diploma + recipes + clean-up</strong><br/>
  Presentation of a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> (name + date). Printed recipe cards for a normal home kitchen. Full kitchen clean-up.</p>
</div>
${CTA_HTML('Reserve your private villa class')}
`

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private · in your villa · chef comes to you',
    title: 'Best Cooking Class Bali — If You Mean Private, Not a Shared School',
    image: IMG_TEACH,
    imageAlt:
      'Private chef teaching a couple to pound Balinese spice paste in a villa kitchen opening onto a tropical garden',
    body: `<p>A <strong>cooking class Bali</strong> search usually shows group kitchen schools: free hotel pickup, a morning market, a shared bench of <strong>10–18 strangers</strong>, <strong>5–6.5 hours</strong> door-to-door. myCHEF is the other product. <strong>The chef comes to your villa</strong> — Seminyak, Canggu, Ubud, Nusa Dua, island-wide. <strong>100% private.</strong> <strong>2.5 or 3 hours.</strong> You cook 4–6 Indonesian / Balinese dishes. You eat everything at your table. Diploma + recipes. Full clean-up. Zero shuttle. Zero Ubud-only pickup. No minibus.</p>
    <p>From <strong>IDR 700,000++ per person</strong>, minimum 4 (all-in <strong>IDR 847,000</strong> pp). myCHEF has hosted <strong>12,000+ guests</strong> across villa dining — this class sits in that same in-villa team. Sushi is a different URL: <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>. This page is the Indonesian / Balinese villa class, not a multi-cuisine or market-tour product — see <a href="/experiences/private-cooking-class" class="text-[#7E6410] hover:underline font-medium">private cooking class</a> for that split.</p>
    ${COMPARE_TABLE}
    ${CTA_HTML('Book the villa class — WhatsApp')}`,
  },
  {
    id: 'no-minibus',
    type: 'content' as const,
    subtitle: '2.5–3 hours at the villa vs 5–6.5 hours with transfers',
    title: 'No Minibus',
    body: `<p>Group schools build the day around a pickup, often a morning market, then a shared kitchen. Once the road time is in, guests are looking at <strong>5–6.5 hours</strong> away from the villa. A myCHEF class stays where you already are. <strong>2.5 or 3 hours.</strong> No school shuttle. No minibus. The chef shops beforehand so class time is cooking, eating and the diploma. If a hands-on market visit matters, enquire — it is not packaged on this URL.</p>
    <p>That is the duration USP: a private <strong>cooking class in Bali</strong> that does not take the whole day. Tell us your start time — lunch or dinner — when you enquire. We do not publish a school timetable.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Why IDR 700,000++ min 4 is not a IDR 350,000 school ticket',
    title: 'Cooking Class Cost — From IDR 700,000++ per Person',
    body: `<p style="font-size:1.15rem;line-height:1.6"><strong>From IDR 700,000++ per person.</strong> Minimum <strong>4 guests</strong>. All-in is <strong>IDR 847,000 per person</strong> (base × 1.21). ++ is 11% government tax + 10% service — your written proposal shows the all-in total.</p>
    <p><strong>Couples (2 guests):</strong> billed at <strong>IDR 1,400,000++ per person</strong> — the same 4-guest floor. The class is not a half-price couple ticket.</p>
    <p>Typical shared-school tickets sit around <strong>IDR 350,000–530,000</strong> per person. That price buys a place on a bench of 10–18, a set menu, pickup and often a morning market. The 700k villa rate buys a <strong>private</strong> chef in <em>your</em> kitchen, ingredients for your group, 4–6 dishes you actually eat, a diploma and a clean kitchen — with no transfer time. You are not paying double for the same product. You are paying for a different one. We do not try to undercut a 350k school ticket.</p>
    <p>See published tables on <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing</a>. This class is not a private-chef day rate.</p>
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
    <p>Larger groups receive additional staff so everyone stays active. Dietary needs — vegan, gluten-free, allergies, milder spice — are taken at enquiry. Children who join are extra guests on the same class. For kids menus see <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">kids menus</a>; for a kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p>If you also want a chef to cook <em>for</em> you on other days, that is a separate booking: <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef Bali</a>.</p>
    <p style="font-size:0.95rem;color:#4A4A4A"><a href="/blog/cooking-class-bali-cost" class="text-[#7E6410] hover:underline font-medium">Cooking class cost guide</a> · <a href="/blog/is-a-cooking-class-in-bali-worth-it" class="text-[#7E6410] hover:underline font-medium">Is a cooking class in Bali worth it?</a></p>
    ${CTA_HTML('Get your personalised quote + sample menu', WA_QUOTE)}`,
  },
  {
    id: 'program',
    type: 'content' as const,
    subtitle: 'The 2.5 or 3-hour villa program',
    title: 'What Happens in the Class',
    body: PROGRAM_HTML,
  },
  {
    id: 'cta-mid-1',
    type: 'cta' as const,
    subtitle: 'Chef comes to you',
    title: 'Message us your villa, group size and date',
    body: 'We need at least two days (ingredients, materials, diploma, setup). WhatsApp villa area, guest count, 2.5-hour or 3-hour, start time and date. We reply with options, a sample menu outline and availability.',
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
    id: 'vegan',
    type: 'content' as const,
    subtitle: 'On request — not a separate title product',
    title: 'Vegan Cooking Class Bali',
    body: `<p>A <strong>vegan cooking class Bali</strong> with myCHEF is the same private villa class (2.5 or 3 hours), with a plant-forward menu when you brief it at enquiry — not a different published program. Typical request menu: base gede, gado-gado with peanut sauce, tempeh or tofu sate, lawar sayur, nasi kuning, fruit and coconut dessert.</p>
    <p>Vegetarian, gluten-free, allergy notes and milder spice are taken the same way at enquiry. Read <a href="/blog/vegan-vegetarian-balinese-cooking" class="text-[#7E6410] hover:underline font-medium">vegan &amp; vegetarian Balinese cooking</a>.</p>
    ${CTA_HTML('WhatsApp a vegan or vegetarian brief', WA_QUOTE)}`,
  },
  {
    id: 'why-villa',
    type: 'content' as const,
    subtitle: 'Private villa vs a group school',
    title: 'Why a Private Class Beats a Tourist Kitchen School',
    body: `<p>Group schools can be a good day trip if you want pickup, a morning market and a shared bench. They are not this product. A myCHEF <strong>cooking class Bali</strong> stays in the villa you already rented. 2.5 or 3 hours. No school shuttle. No 10–18 strangers.</p>
    <p>We come to <em>your</em> kitchen — not a shared flea-market classroom, not someone else’s poolside villa, not an on-property hotel class. Professional chef, island coverage, personalised diploma. We do not bid on school brand names in title or meta. If you want the famous group-school morning with market + pickup, book a school. If you want a private Indonesian class in your own kitchen, this page is the booking.</p>
    <p>A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. A <strong>private chef</strong> cooks for you. Same company, different quotes — never a chef day-rate on this page.</p>`,
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
    <p>Sushi-only stays on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page. More experiences: <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences</a>.</p>
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
    body: `<p>Ask a Balinese cook what makes the island’s food taste like Bali and the answer is one thing: <strong>base genep</strong> (also written <em>base gede</em>) — the “complete spice paste” that sits under almost every savoury dish. In your class you don’t just measure it — you <em>build</em> it, pounding it by hand in a <em>cobek</em> and <em>ulekan</em>. That is what the recipe cards are for.</p>
    <p>Full breakdown: <a href="/blog/base-genep-balinese-spice-paste" class="text-[#7E6410] hover:underline font-medium">Base genep, explained ingredient by ingredient</a>.</p>
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
      <li><strong>Sambal matah</strong> — a raw sambal of thinly sliced shallots, lemongrass, chilli and lime.</li>
      <li><strong>Betutu</strong> — chicken or duck slow-cooked in banana leaf with base genep.</li>
      <li><strong>Pepes ikan</strong> — spiced fish steamed and grilled in banana-leaf parcels.</li>
    </ul>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Pan-Indonesian</h3>
    <ul>
      <li><strong>Nasi goreng</strong> &amp; <strong>mie goreng</strong> — fried rice and noodles found right across Indonesia.</li>
      <li><strong>Gado-gado</strong> — blanched vegetables with a warm peanut sauce.</li>
    </ul>
    <p>The full story: <a href="/blog/balinese-food-vs-indonesian-food" class="text-[#7E6410] hover:underline font-medium">Balinese food is not Indonesian food — a chef’s guide</a>.</p>`,
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What every class includes',
    title: 'What Is Included in a myCHEF Cooking Class',
    features: [
      {
        icon: Clock,
        title: '2.5 or 3 hours at the villa',
        desc: 'Introduction, hands-on cooking of 4–6 dishes, sit-down meal of everything you cooked. No 5–6.5 hour school day.',
      },
      {
        icon: Award,
        title: 'Personalised diploma',
        desc: 'Every guest receives a myCHEF Indonesian Cooking Diploma — name + date.',
      },
      {
        icon: ChefHat,
        title: 'Uniforms & chef hats',
        desc: 'Full sets for every guest.',
      },
      {
        icon: UtensilsCrossed,
        title: 'You eat every dish',
        desc: 'You cook the menu, then eat the full meal together.',
      },
      {
        icon: GraduationCap,
        title: 'Recipe cards',
        desc: 'Printed cards written for a normal home kitchen.',
      },
      {
        icon: Home,
        title: 'Chef comes to you',
        desc: 'Your villa kitchen. No school shuttle, no shared bench.',
      },
      {
        icon: Sparkles,
        title: 'Ingredients included',
        desc: 'Groceries are in the class price. Kitchen left spotless.',
      },
      {
        icon: MapPin,
        title: 'Island-wide at the villa',
        desc: 'Canggu, Seminyak, Sanur, Ubud (your villa), Uluwatu, Jimbaran, Nusa Dua, Kuta — always your kitchen.',
      },
    ],
  },
  {
    id: 'fun-vibe',
    type: 'content' as const,
    subtitle: 'What makes the day special',
    title: 'Uniforms, Diploma Moment & a Happy Villa Kitchen',
    body: `<p>Instruction is professional — the atmosphere is relaxed. Guests leave with a diploma, recipe cards and a kitchen that has been cleaned. Uniforms and chef hats are included. For bigger groups we add staff so nobody watches from the side.</p>
    ${CTA_HTML('Message us now — at least two days’ notice')}`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Who books a cooking class',
    title: 'Couples, Families, Wedding Stays and Villa Groups',
    image: IMG_DINE,
    imageAlt:
      'Guests sitting down to the meal they cooked in a Bali villa after a private cooking class — not a private-chef dinner',
    body: `<p><strong>Couples.</strong> Popular for honeymoons and date nights. Pricing is the 4-guest minimum: <strong>IDR 1,400,000++ per person</strong>.</p>
    <p><strong>Families.</strong> Kids who join are extra guests on the same class — no separate kids tariff. See <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">kids menus</a> and <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p><strong>Birthday &amp; villa groups.</strong> Same 2.5 or 3-hour class, same inclusions.</p>
    <p><strong>Wedding stays.</strong> The class can be a separate day — quoted on its own. Pair later with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a>.</p>
    <p><strong>Already hiring a chef?</strong> Add the class as a separately quoted session on another day.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How booking works',
    title: 'From First Message to Diploma',
    body: `<p><strong>1. Contact us at least two days ahead.</strong> WhatsApp villa area, guest count (including any children as extra guests), dietary needs, date, 2.5-hour or 3-hour, and start time.</p>
    <p><strong>2. We propose the class.</strong> Written outline: dishes, 2.5 or 3-hour structure, kitchen needs, all-in quote (++ shown). Ingredients are in the class price.</p>
    <p><strong>3. Confirm.</strong> Book at least two days ahead. Last-minute / short-lead bookings need full payment to confirm the chef and date.</p>
    <p><strong>4. We shop and set up.</strong> The chef shops first, then comes to your villa.</p>
    <p><strong>5. You cook — then you eat — then diploma + clean-up.</strong></p>
    ${CTA_HTML('WhatsApp us your villa, group size and date')}`,
  },
  {
    id: 'canggu',
    type: 'content' as const,
    subtitle: 'Cooking class Canggu',
    title: 'Cooking Class Canggu — Berawa, Pererenan, Villa Not School',
    body: `<p>A <strong>cooking class Canggu</strong> is the same private Indonesian class in your Berawa, Batu Bolong, Echo Beach or Pererenan villa. The chef comes to you. No drive to a school kitchen. 2.5 or 3 hours. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp).</p>
    <p><a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Private chef Canggu</a> · <a href="/private-chef/berawa" class="text-[#7E6410] hover:underline font-medium">private chef Berawa</a> · <a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu dining guide</a>.</p>`,
  },
  {
    id: 'seminyak',
    type: 'content' as const,
    subtitle: 'Cooking class Seminyak',
    title: 'Cooking Class Seminyak — Design Villas, Chef Comes to You',
    body: `<p>A <strong>cooking class Seminyak</strong> runs in your Petitenget, Oberoi, Batu Belig or beach-strip villa. Same private class, 2.5 or 3 hours. No hotel pickup. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp). Couples: IDR 1,400,000++ per person.</p>
    <p><a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Private chef Seminyak</a> · <a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak dining guide</a>.</p>`,
  },
  {
    id: 'sanur',
    type: 'content' as const,
    subtitle: 'Cooking class Sanur',
    title: 'Cooking Class Sanur — East-Coast Villas',
    body: `<p>A <strong>cooking class Sanur</strong> is the same in-villa product: chef comes to you, 2.5 or 3 hours, 4–6 dishes, eat what you cooked, diploma. From IDR 700,000++ per person, min 4.</p>
    <p><a href="/private-chef/sanur" class="text-[#7E6410] hover:underline font-medium">Private chef Sanur</a> · <a href="/locations/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur dining</a>.</p>`,
  },
  {
    id: 'ubud',
    type: 'content' as const,
    subtitle: 'If your villa is in Ubud — not a group school',
    title: 'Villa in Ubud — Same Private Class, Chef Comes to You',
    body: `<p>Ubud is where most visitors first meet the idea of a Bali cooking class, and where the well-known group schools sit (market walk, free pickup, shared bench, a 5–6.5 hour day). That SERP is not this product. We do not compete as a cooking school.</p>
    <p>If your <strong>villa is in Ubud</strong> — Sayan, Penestanan, Campuhan, Tegallalang or Ubud central — the chef comes to that kitchen. Same private Indonesian / Balinese class, 2.5 or 3 hours. Only your guests. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp).</p>
    <p><a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Private chef Ubud</a> · <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud dining guide</a>.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Coverage, not extra title keywords',
    title: 'Island-Wide — Always Your Villa',
    body: `<p>Same private class in <a href="/locations/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu</a>, <a href="/locations/jimbaran" class="text-[#7E6410] hover:underline font-medium">Jimbaran</a>, Kuta, <a href="/locations/nusa-dua" class="text-[#7E6410] hover:underline font-medium">Nusa Dua</a> and the rest of our villa coverage. Ubud is coverage too — not the product identity. Tell us the villa pin. Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a> and <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">experiences</a>.</p>`,
  },
  {
    id: 'cta-pre-faq',
    type: 'cta' as const,
    subtitle: 'Still deciding?',
    title: 'Get a clear quote before you book',
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
    title: 'Ready for a Private Cooking Class in Your Villa?',
    body: `WhatsApp villa area, group size, 2.5-hour or 3-hour, start time and date. More: <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">experiences</a> · <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> · <a href="/experiences/private-cooking-class" class="text-[#7E6410] hover:underline font-medium">private cooking class</a> · <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing</a> · <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a>.`,
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
      '<strong>2.5 or 3 hours</strong>, at your start time (lunch or dinner). We ask which length you prefer when you enquire. It is not a 5–6.5 hour school day with transfers — the session stays at the villa. No minibus.',
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
    question: 'I\'m in Seminyak or Canggu — where do I find a Balinese cooking class?',
    answer:
      'In your villa. The chef comes to you in <a href="/experiences/cooking-class#seminyak">Seminyak</a> and <a href="/experiences/cooking-class#canggu">Canggu</a> — also <a href="/experiences/cooking-class#sanur">Sanur</a>, <a href="/locations/uluwatu">Uluwatu</a>, <a href="/locations/jimbaran">Jimbaran</a>, Nusa Dua, Kuta, and if your villa is in Ubud see <a href="/experiences/cooking-class#ubud">villa in Ubud</a>. Also <a href="/private-chef/berawa">Berawa</a>. Ubud is coverage, not a school campus. You do not need a hotel pickup.',
  },
  {
    question: 'How many people will be in our class? Will it be crowded?',
    answer:
      'Only your group — the class is <strong>100% private</strong>. Unlike large cooking schools that can run 10–18 guests on a shared bench, you never cook alongside strangers.',
  },
  {
    question: 'Do we visit a local market as part of the class?',
    answer:
      'No market tour is promised on this class. The chef shops ingredients beforehand and brings them to the villa. Class time is cooking and eating at home. If a hands-on market visit matters, enquire — it is not a packaged SKU on this URL.',
  },
  {
    question: 'Is a cooking class in Bali worth it?',
    answer:
      'A group school can be worth it if you want pickup, a morning market and a shared bench at IDR 350,000–530,000. A myCHEF class is a different product: 100% private, in your villa, 2.5 or 3 hours, diploma, you eat everything you cook. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp). Honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it">is a cooking class in Bali worth it?</a>',
  },
  {
    question: 'How far in advance should we book a cooking class in Bali?',
    answer:
      'At least <strong>two days</strong>. Ingredients, materials, diploma and setup need that lead time. Last-minute bookings need full payment to confirm.',
  },
  {
    question: 'What deposit is required?',
    answer:
      'Book at least two days ahead. Short-lead / last-minute classes need <strong>full payment to confirm</strong> the chef and date. Your written proposal states the payment terms. <a href="/cancellation">Cancellation policy</a>.',
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
    question: 'Do you offer a Balinese or Indonesian class — and can it be vegetarian, vegan, or gluten-free?',
    answer:
      'Yes. The standard program is Indonesian / Balinese (base gede, sambals, sate lilit, lawar/urap, nasi goreng, dessert); Javanese when you ask. Vegetarian, vegan, gluten-free, allergies and milder spice are taken at enquiry, like any job. Beginners are welcome — the chef sets the pace to the group.',
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
      'WhatsApp +62 896-7407-2020 with villa area, guest count, 2.5-hour or 3-hour, start time and date — or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/pricing">pricing</a>. At least two days’ notice.',
  },
]

const RELATED_PAGES = [
  {
    label: 'Sushi Masterclass Bali',
    href: '/experiences/sushi-masterclass',
    desc: 'Dedicated private sushi class — not this Indonesian class.',
  },
  {
    label: 'Private cooking class',
    href: '/experiences/private-cooking-class',
    desc: 'Same commercial owner URL — this page is the Indonesian/Balinese villa class (2.5 or 3 hours).',
  },
  {
    label: 'All experiences',
    href: '/experiences',
    desc: 'Cocktail parties, kids parties, oysters and more.',
  },
  {
    label: 'Kids menus',
    href: '/kids-menus',
    desc: 'Kids-friendly dining at the villa.',
  },
  {
    label: 'Kids Birthday Chef Party',
    href: '/experiences/kids-birthday-chef-party',
    desc: 'Kids cooking parties at the villa.',
  },
  {
    label: 'Pricing',
    href: '/pricing',
    desc: 'Published rates across myCHEF services.',
  },
  {
    label: 'Private Chef Bali',
    href: '/private-chef-bali',
    desc: 'Chef cooks for you — not a cooking class.',
  },
  {
    label: 'Private chef Canggu',
    href: '/private-chef/canggu',
    desc: 'Villa chef hire in Canggu.',
  },
  {
    label: 'Private chef Berawa',
    href: '/private-chef/berawa',
    desc: 'Villa chef hire in Berawa.',
  },
  {
    label: 'Private chef Seminyak',
    href: '/private-chef/seminyak',
    desc: 'Villa chef hire in Seminyak.',
  },
  {
    label: 'Private chef Ubud',
    href: '/private-chef/ubud',
    desc: 'Jungle-villa chef hire — meals cooked for you.',
  },
  {
    label: 'Canggu dining guide',
    href: '/locations/canggu',
    desc: 'Area context for a Canggu villa class.',
  },
  {
    label: 'Seminyak dining guide',
    href: '/locations/seminyak',
    desc: 'Area context for a Seminyak villa class.',
  },
  {
    label: 'Ubud dining guide',
    href: '/locations/ubud',
    desc: 'Jungle villas — class is still in your kitchen.',
  },
  {
    label: 'Uluwatu dining guide',
    href: '/locations/uluwatu',
    desc: 'Coverage — same in-villa class.',
  },
  {
    label: 'Sanur dining',
    href: '/locations/sanur',
    desc: 'East-coast villa class.',
  },
  {
    label: 'Is a Bali cooking class worth it?',
    href: '/blog/is-a-cooking-class-in-bali-worth-it',
    desc: 'Honest take — villa class vs a school day.',
  },
  {
    label: 'What does a cooking class cost?',
    href: '/blog/cooking-class-bali-cost',
    desc: 'Group schools vs private villa classes.',
  },
  {
    label: 'Base Genep explained',
    href: '/blog/base-genep-balinese-spice-paste',
    desc: 'The Balinese master spice paste.',
  },
  {
    label: 'Balinese vs Indonesian food',
    href: '/blog/balinese-food-vs-indonesian-food',
    desc: 'What is Balinese, what is pan-Indonesian.',
  },
  {
    label: 'Vegan Balinese cooking',
    href: '/blog/vegan-vegetarian-balinese-cooking',
    desc: 'Plant-forward menus on request.',
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
        subtitle="Private 2.5–3 hour Indonesian/Balinese class in your villa. Chef comes to you. Eat everything, diploma + recipes, full clean-up. No hotel pickup. From IDR 700,000++/person (min 4). 12,000+ guests hosted."
        heroImage={HERO}
        heroImageAlt="Private chef teaching a couple to cook in a Bali villa kitchen with tropical garden and pool beyond"
        ogImage={`https://mychef.id${HERO}`}
        keywords={[
          'cooking class bali',
          'cooking class in bali',
          'private cooking class bali',
          'balinese cooking class',
          'cooking class canggu',
          'cooking class seminyak',
          'cooking class sanur',
          'indonesian cooking class bali',
        ]}
        highlights={[
          '2.5 or 3 Hours at the Villa',
          'No Minibus · No Hotel Pickup',
          'Diploma + Recipes',
          'From IDR 700K++ / person (min 4)',
        ]}
        sections={SECTIONS}
        faqs={FAQS}
        relatedPages={RELATED_PAGES}
        ctaText="Book Your Villa Class"
        ctaSubtext="WhatsApp villa area, group size, 2.5 or 3 hours, start time and date — chef comes to you. At least two days’ notice."
        extraJsonLd={[
          breadcrumbSchema('Cooking Class Bali', CANONICAL, 'Experiences', 'https://mychef.id/experiences'),
          faqPageSchema(FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Indonesian Cooking Class Bali',
            description:
              'Private 2.5–3 hour Indonesian/Balinese cooking class in your Bali villa. Chef comes to you. Cook 4–6 dishes, eat everything, diploma and recipes, full clean-up. No hotel pickup. From IDR 700,000++ per person, minimum 4 guests (all-in IDR 847,000 pp).',
            provider: providerRef,
            areaServed: [
              { '@type': 'Place', name: 'Bali, Indonesia' },
              { '@type': 'Place', name: 'Seminyak, Bali' },
              { '@type': 'Place', name: 'Canggu, Bali' },
              { '@type': 'Place', name: 'Sanur, Bali' },
              { '@type': 'Place', name: 'Ubud, Bali' },
              { '@type': 'Place', name: 'Uluwatu, Bali' },
              { '@type': 'Place', name: 'Jimbaran, Bali' },
              { '@type': 'Place', name: 'Nusa Dua, Bali' },
              { '@type': 'Place', name: 'Kuta, Bali' },
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
              description:
                'IDR 700,000++ per person, minimum 4 guests. All-in IDR 847,000 per person including 10% service and 11% VAT. Couples IDR 1,400,000++ per person.',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Private 2.5–3 Hour Indonesian Cooking Class at Your Bali Villa',
            description:
              'Hands-on private cooking class in your villa kitchen. 2.5 or 3 hours. Cook 4–6 Indonesian/Balinese dishes, eat everything you prepared, diploma and recipes. Chef comes to you.',
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
        label="Book a cooking class"
        serviceName="a private Indonesian cooking class at my Bali villa"
        intent="a 2.5 or 3-hour class quote with diploma"
        pageSource="experiences-cooking-class"
        serviceType="cooking-class"
      />
    </>
  )
}
