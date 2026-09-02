import PremiumPage from '@/components/PremiumPage'
import OptimizedImage from '@/components/OptimizedImage'
import { faqPageSchema, providerRef } from '@/components/SeoHead'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
import { getPageMeta } from '@/data/page-meta'
import { buildWhatsAppUrl, COOKING_CLASS_ENQUIRY } from '@/lib/whatsapp'
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
 * Ubud is a villa we come to — not a school. Avoid Paon/Ketut brand terms.
 * Sushi → /experiences/sushi-masterclass. Chef hire → homepage. Never link this
 * URL to /experiences/private-cooking-class. Never invent extra FAQs or prices.
 * Never embed the French-guest phone video. Wire David's original stills only.
 */

const meta = getPageMeta('experience-cooking-class')

const WA_LINK = buildWhatsAppUrl(COOKING_CLASS_ENQUIRY)
const WA_QUOTE = WA_LINK
const CANONICAL = 'https://mychef.id/experiences/cooking-class'
const HERO_ALT =
  'Private chef teaching a couple to cook in a Bali villa kitchen, with tropical garden, bougainvillea and pool beyond'
/** Social alt — in-villa class, not the site-wide plating fallback. Hero <img> keeps HERO_ALT. */
const OG_IMAGE_ALT = 'myCHEF private in-villa cooking class in Bali — chef comes to you'

function schemaPlainText(html: string): string {
  return html
    .replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const HERO = '/generated/mychef-cooking-class-bali-hero-villa.webp'
const IMG_FAMILY = '/generated/mychef-cooking-class-family-group.webp'
const IMG_TEACH_ISLAND = '/generated/mychef-cooking-class-chef-teaching-island.webp'
const IMG_BUMBU = '/generated/mychef-cooking-class-bumbu-genep-mise.webp'
const IMG_HANDSHAKE = '/generated/mychef-cooking-class-diploma-handshake.webp'
const IMG_DIPLOMA = '/generated/mychef-cooking-class-diploma-cristina-goldin.webp'

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

const LOOK_PHOTOS = [
  {
    src: IMG_FAMILY,
    alt: 'Family and two myCHEF chefs in a Bali villa kitchen, guests in aprons and chef hats after a private cooking class',
    caption: 'Family class in the villa kitchen — aprons, hats, two chefs, only your group.',
  },
  {
    src: IMG_TEACH_ISLAND,
    alt: 'Chef teaching guests at a marble kitchen island during a private in-villa cooking class in Bali',
    caption: 'Chef teaching at the marble island. Mise en place is already set.',
  },
  {
    src: IMG_BUMBU,
    alt: 'Bumbu Genep mise en place on a villa marble counter — labelled bowls of Balinese spice paste ingredients',
    caption: 'Bumbu Genep mise en place — the paste you pound, not a plated dinner.',
  },
  {
    src: IMG_HANDSHAKE,
    alt: 'Chef shaking a guest’s hand while presenting a filled cooking-class diploma in a Bali villa',
    caption: 'Diploma handshake at the villa — name on paper, not a PDF in your inbox.',
  },
] as const

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private · in your villa · chef comes to you',
    title: 'Best Cooking Class Bali — If You Mean Private, Not a Shared School',
    image: IMG_TEACH_ISLAND,
    imageAlt:
      'Chef teaching a family at a marble villa kitchen island during a private cooking class Bali',
    imageCaption:
      'A private cooking class Bali in the villa you already rented — the chef comes to you.',
    body: `<p>A <strong>cooking class Bali</strong> search usually shows group kitchen schools: free hotel pickup, a morning market, a shared bench of <strong>10–18 strangers</strong>, <strong>5–6.5 hours</strong> door-to-door. myCHEF is the other product.</p>
    <p>This is a <strong>private 2.5–3 hour Indonesian / Balinese class in your villa</strong>. <strong>The chef comes to you.</strong> You cook <strong>4–6 dishes</strong>, then eat everything at your table. Personalised diploma and recipe cards. Kitchen left clean. No hotel pickup. No minibus.</p>
    <p>From <strong>IDR 700,000++ per person</strong>, minimum 4 guests (all-in <strong>IDR 847,000</strong> pp). Couples pay the same 4-guest floor.</p>
    <p>This is a <strong>cooking class Bali</strong> you hire for the villa you already rented — Canggu, Seminyak, or we come to your villa in Ubud. It is not a group kitchen school. It is an <strong>in-villa cooking class Bali</strong>: a <strong>private cooking class Bali</strong> where the <strong>chef comes to you</strong>, and a <strong>Balinese cooking class in your villa</strong> rather than in someone else’s classroom.</p>
    <p>WhatsApp villa area, guest count, date, and whether you want 2.5 hours or 3 hours. We send a sample menu outline and a fixed all-in quote.</p>
    <p>Published rates are <strong>++</strong> — 10% service charge and 11% government tax. Your quote is confirmed as a fixed, itemised all-in total before you commit. myCHEF has hosted <strong>12,000+ guests</strong> across villa dining — this class sits in that same in-villa team.</p>
    <p>Sushi is a different URL: <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>. A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. If you want a chef to cook <em>for</em> you on other days, that is a <a href="/" class="text-[#7E6410] hover:underline font-medium">homepage</a> booking — never a chef day-rate on this page.</p>
    ${COMPARE_TABLE}
    ${CTA_HTML('Book the villa class — WhatsApp')}`,
  },
  {
    id: 'no-minibus',
    type: 'content' as const,
    subtitle: '2.5–3 hours at the villa vs 5–6.5 hours with transfers',
    title: 'No Minibus. No Hotel Pickup.',
    body: `<p>Group schools build the day around a pickup, often a morning market, then a shared kitchen. Once the road time is in, guests are looking at <strong>5–6.5 hours</strong> away from the villa — useful if you want a school day out, expensive in holiday hours if you already paid for a pool, a garden and a kitchen in Canggu or Seminyak.</p>
    <p>A myCHEF <strong>cooking class Bali</strong> stays where you already are. <strong>2.5 or 3 hours</strong> at the villa. No school shuttle. No hotel pickup. No minibus. The chef shops beforehand so class time is cooking, eating and the diploma. A market tour is not packaged on this URL.</p>
    <p>That is the duration difference: a private <strong>cooking class in Bali</strong> that does not take the whole day. Tell us your start time — lunch or dinner — when you enquire. We do not publish a school timetable because the class is timed to your villa, not to a pickup loop.</p>
    <p>If you specifically want a shared-school morning with market + pickup, book a school. If you want a <strong>private cooking class Bali</strong> in the kitchen you already rented, this page is the booking.</p>`,
  },
  {
    id: 'how-it-looks',
    type: 'custom' as const,
    subtitle: 'Real class stills — villa kitchen, not a school',
    title: 'How a Class Looks',
    body: `<p>These are original photos from a myCHEF in-villa class: family and chefs in aprons and hats, teaching at the marble island, Bumbu Genep mise en place, and the diploma handshake. This is what “chef comes to you” looks like — not a stock kitchen and not a phone video.</p>`,
    render: (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {LOOK_PHOTOS.map((photo) => (
          <figure key={photo.src} className="m-0">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-xl bg-[#F3EFE6]">
              <OptimizedImage
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-xs md:text-sm leading-snug text-[#4A4745]">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    ),
  },
  {
    id: 'program',
    type: 'content' as const,
    subtitle: 'The 2.5 or 3-hour villa program',
    title: 'What Happens in the Class',
    body: `<p>A complete private Indonesian / Balinese cooking class in your villa — <strong>2.5 or 3 hours</strong>, timed to the start you choose. Introduction to the food, hands-on cooking of <strong>4–6 dishes</strong>, then the meal of everything you prepared. Every guest finishes with a personalised <strong>myCHEF Indonesian Cooking Diploma</strong>, recipe cards and a spotless kitchen.</p>
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
    <p>Uniforms and chef hats are on every guest for the cooking block. The kitchen you rented is the classroom; the table you already have is the restaurant. When the chef leaves, the counters are clean.</p>
    ${CTA_HTML('Reserve your private villa class')}`,
  },
  {
    id: 'sample-menus',
    type: 'content' as const,
    subtitle: 'What you actually cook',
    title: 'What You Cook — 4–6 Indonesian / Balinese Dishes',
    body: `<p>Menus are designed around your group. The standard class is Indonesian / Balinese. You cook <strong>4–6 dishes</strong>, then sit down and eat the full menu together. That is the product: a <strong>Balinese cooking class in your villa</strong>, not a tasting menu cooked for you.</p>
    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Standard Indonesian / Balinese</h3>
    <ul>
      <li>Introduction to key spices &amp; ingredients + pounding <em>base gede</em></li>
      <li>Sambal matah (fresh raw shallot-chilli salsa)</li>
      <li>Sate lilit (minced seafood or chicken satay on lemongrass)</li>
      <li>Lawar or urap-style vegetable salad with grated coconut</li>
      <li>Nasi goreng or fragrant coconut rice</li>
      <li>Palm-sugar dessert or fresh fruit finish</li>
    </ul>
    <p>Most guests arrive expecting <strong>nasi goreng</strong> and are surprised by how different truly <em>Balinese</em> food is. Both belong on your table — and we are clear about which is which.</p>
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
    <p>The full story: <a href="/blog/balinese-food-vs-indonesian-food" class="text-[#7E6410] hover:underline font-medium">Balinese food is not Indonesian food — a chef’s guide</a>. Sushi-only stays on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page.</p>
    ${CTA_HTML('WhatsApp us for a sample menu for your group', WA_QUOTE)}`,
  },
  {
    id: 'cuisine-base-genep',
    type: 'content' as const,
    subtitle: 'The flavour engine of the island',
    title: 'Base Genep — Bali’s Master Spice Paste',
    image: IMG_BUMBU,
    imageAlt:
      'Bumbu Genep mise en place on a villa marble counter — whole and minced Balinese spices in labelled bowls',
    imageCaption:
      'Bumbu Genep mise en place from a real villa class — turmeric, shallot, chilli, galangal, lemongrass.',
    body: `<p>Ask a Balinese cook what makes the island’s food taste like Bali and the answer is one thing: <strong>base genep</strong> (also written <em>base gede</em>) — the “complete spice paste” that sits under almost every savoury dish. In your class you don’t just measure it — you <em>build</em> it, pounding it by hand in a <em>cobek</em> and <em>ulekan</em>. That is what the recipe cards are for.</p>
    <p>The photo on this page is the actual mise en place: whole roots next to the minced bowls, a small “Bumbu Genep” card on the marble. You learn the ingredients, then you cook with the paste you made. Full breakdown: <a href="/blog/base-genep-balinese-spice-paste" class="text-[#7E6410] hover:underline font-medium">Base genep, explained ingredient by ingredient</a>.</p>
    ${CTA_HTML('Cook base genep from scratch — book your class')}`,
  },
  {
    id: 'vegan',
    type: 'content' as const,
    subtitle: 'On request — not a separate title product',
    title: 'Vegan Cooking Class Bali — Same Class, Plant-Forward Menu',
    body: `<p>A <strong>vegan cooking class Bali</strong> with myCHEF is the same private villa class (2.5 or 3 hours), with a plant-forward menu when you brief it at enquiry — not a different published program.</p>
    <p>Typical request menu: base gede, gado-gado with peanut sauce, tempeh or tofu sate, lawar sayur, nasi kuning, fruit and coconut dessert.</p>
    <p>Vegetarian, gluten-free, allergy notes and milder spice are taken the same way at enquiry. Read <a href="/blog/vegan-vegetarian-balinese-cooking" class="text-[#7E6410] hover:underline font-medium">vegan &amp; vegetarian Balinese cooking</a>. Sushi-only stays on <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>
    ${CTA_HTML('WhatsApp a vegan or vegetarian brief', WA_QUOTE)}`,
  },
  {
    id: 'cta-mid-1',
    type: 'cta' as const,
    subtitle: 'Chef comes to you',
    title: 'Message us your villa, group size and date',
    body: 'WhatsApp villa area, guest count, date, and 2.5-hour or 3-hour. We reply with a sample menu and the all-in total. We need at least two days (ingredients, materials, diploma, setup).',
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
    id: 'features',
    type: 'features' as const,
    subtitle: 'In-villa · chef comes to you',
    title: 'What’s Included',
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
        desc: 'All ingredients are in the class price — not groceries at cost. Kitchen left spotless.',
      },
      {
        icon: MapPin,
        title: 'Island-wide at the villa',
        desc: 'Canggu, Seminyak, Sanur, Ubud (your villa), Uluwatu, Jimbaran, Nusa Dua, Kuta — always your kitchen.',
      },
    ],
  },
  {
    id: 'included',
    type: 'content' as const,
    subtitle: 'What you pay for — and what you do not',
    title: 'What’s Included in a myCHEF Cooking Class',
    body: `<p>The class is <strong>in-villa</strong>. The <strong>chef comes to you</strong>. The published villa program includes:</p>
    <ul>
      <li>Professional chef instructor at your villa</li>
      <li>All ingredients (in the class price — not groceries at cost)</li>
      <li>Full set of uniforms and chef hats for every guest</li>
      <li>Hands-on instruction: intro + cooking + meal</li>
      <li>The complete meal of everything you cook</li>
      <li>Personalised myCHEF Indonesian Cooking Diploma for each participant (name + date)</li>
      <li>Recipe cards for a normal home kitchen</li>
      <li>Full kitchen clean-up</li>
    </ul>
    <p><strong>Not included:</strong> wine, hotel pickup, a market minibus, a kids tariff, or a named-chef request. Larger groups are staffed so everyone stays active.</p>
    <p>Dietary needs — vegan, gluten-free, allergies, milder spice — are taken at enquiry. Children who join are extra guests on the same class. For kids menus see <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">kids menus</a>; for a kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Why IDR 700,000++ min 4 is not a IDR 350,000 school ticket',
    title: 'Cooking Class Cost — From IDR 700,000++ per Person',
    body: `<p style="font-size:1.15rem;line-height:1.6"><strong>From IDR 700,000++ per person.</strong> Minimum <strong>4 guests</strong>. All-in is <strong>IDR 847,000 per person</strong> (base × 1.21). The 4-guest floor is <strong>IDR 3,388,000 all-in</strong>. ++ is 11% government tax + 10% service — your written proposal shows the all-in total.</p>
    <p><strong>Couples (2 guests):</strong> billed at <strong>IDR 1,400,000++ per person</strong> — the same 4-guest floor (<strong>IDR 2,800,000++</strong> / <strong>IDR 3,388,000 all-in</strong>). The class is not a half-price couple ticket.</p>
    <p>Typical shared-school tickets sit around <strong>IDR 350,000–530,000</strong> per person. That price buys a place on a bench of 10–18, a set menu, pickup and often a morning market. The 700k villa rate buys a <strong>private</strong> chef in <em>your</em> kitchen, ingredients for your group, 4–6 dishes you actually eat, a diploma and a clean kitchen — with no transfer time. You are not paying double for the same product. You are paying for a different one. We do not try to undercut a 350k school ticket.</p>
    <p>This class is never a private-chef day rate. If you also want a chef to cook <em>for</em> you on other days, that is a separate booking on the <a href="/" class="text-[#7E6410] hover:underline font-medium">homepage</a>. See published tables on <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing</a>.</p>
    <p>Tell us the headcount when you enquire. Children who join are extra guests on the same class — there is <strong>no kids tariff</strong>. We do not publish a named-chef list on this page; the class is staffed from the in-villa team.</p>
    <p>Book at least <strong>two days</strong> ahead. Last-minute / short-lead bookings need <strong>full payment to confirm</strong> the chef and date.</p>
    <p style="font-size:0.95rem;color:#4A4A4A"><a href="/blog/cooking-class-bali-cost" class="text-[#7E6410] hover:underline font-medium">Cooking class cost guide</a> · <a href="/blog/is-a-cooking-class-in-bali-worth-it" class="text-[#7E6410] hover:underline font-medium">Is a cooking class in Bali worth it?</a></p>
    ${CTA_HTML('Get your personalised quote + sample menu', WA_QUOTE)}`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Chef comes to you · island-wide · two days’ notice',
    title: 'Where We Come — Your Villa, Not a School',
    body: `<p>The <strong>chef comes to you</strong>. Coverage is island-wide. The classroom is always <em>your</em> villa kitchen — never a shared school, never someone else’s poolside classroom, never an on-property hotel class. Two days’ notice.</p>
    <h3 id="canggu" style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.75rem 0 0.5rem;color:#1A1A1A">Cooking class Canggu</h3>
    <p>A <strong>cooking class Canggu</strong> is the same private Indonesian class in your Berawa, Batu Bolong, Echo Beach or Pererenan villa. The chef comes to you. No drive to a school kitchen. 2.5 or 3 hours. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp). Canggu is a villa area on this page, not a school brand.</p>
    <p><a href="/locations/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu dining guide</a>.</p>
    <h3 id="seminyak" style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.75rem 0 0.5rem;color:#1A1A1A">Cooking class Seminyak</h3>
    <p>A <strong>cooking class Seminyak</strong> runs in your Petitenget, Oberoi, Batu Belig or beach-strip villa. Same private class, 2.5 or 3 hours. No hotel pickup. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp). Couples: IDR 1,400,000++ per person. Seminyak is a villa area — the class does not leave the house.</p>
    <p><a href="/locations/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak dining guide</a>.</p>
    <h3 id="ubud" style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.75rem 0 0.5rem;color:#1A1A1A">Villa in Ubud — we come to you</h3>
    <p>Ubud is where most visitors first meet the idea of a Bali cooking class, and where the well-known group schools sit (market walk, free pickup, shared bench, a 5–6.5 hour day). That SERP is not this product. <strong>We are not a cooking school in Ubud.</strong></p>
    <p>If your <strong>villa is in Ubud</strong> — Sayan, Penestanan, Campuhan, Tegallalang or Ubud central — the chef comes to that kitchen. Same private Indonesian / Balinese class, 2.5 or 3 hours. Only your guests. From IDR 700,000++ per person, min 4 (all-in IDR 847,000 pp).</p>
    <p><a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud dining guide</a>.</p>
    <h3 id="sanur" style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.75rem 0 0.5rem;color:#1A1A1A">Sanur, Uluwatu, Jimbaran, Nusa Dua, Kuta</h3>
    <p>A <strong>cooking class Sanur</strong> is the same in-villa product. The same class also runs in <a href="/locations/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu</a>, <a href="/locations/jimbaran" class="text-[#7E6410] hover:underline font-medium">Jimbaran</a>, <a href="/locations/nusa-dua" class="text-[#7E6410] hover:underline font-medium">Nusa Dua</a> and Kuta: chef comes to you, 2.5 or 3 hours, 4–6 dishes, eat what you cooked, diploma. From IDR 700,000++ per person, min 4. Tell us the villa pin. Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a> and <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">experiences</a>.</p>`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Who books a cooking class',
    title: 'Who It’s For',
    image: IMG_FAMILY,
    imageAlt:
      'Family in aprons and chef hats with two myCHEF chefs in a Bali villa kitchen after a private cooking class',
    imageCaption:
      'Families book the same private class — children who join are extra guests, no kids tariff.',
    body: `<p><strong>Couples.</strong> Popular for honeymoons and date nights. Pricing is the 4-guest minimum: <strong>IDR 1,400,000++ per person</strong> (IDR 2,800,000++ / IDR 3,388,000 all-in). Not a half-price couple ticket.</p>
    <p><strong>Families.</strong> Kids who join are extra guests on the same class — no separate kids tariff. See <a href="/kids-menus" class="text-[#7E6410] hover:underline font-medium">kids menus</a> and <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a> if you want a kids production rather than this class.</p>
    <p><strong>Friends and villa groups.</strong> Same 2.5 or 3-hour class, same inclusions. Larger groups are staffed so everyone stays active.</p>
    <p><strong>Wedding stays.</strong> The class can be its own day — quoted on its own, not as the wedding dinner. Pair a later event day with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a>.</p>
    <p><strong>Already hiring a chef?</strong> Add the class as a separately quoted session on another day. Chef hire for other days is a <a href="/" class="text-[#7E6410] hover:underline font-medium">homepage</a> booking — never a day-rate on this page.</p>`,
  },
  {
    id: 'diploma',
    type: 'custom' as const,
    subtitle: 'Name + date printed for each guest',
    title: 'Diploma, Uniforms & Recipe Cards',
    body: `<p>Every guest leaves with a personalised <strong>myCHEF Indonesian Cooking Diploma</strong> (name + date), printed recipe cards written for a normal home kitchen, and the uniforms and chef hats worn during the class. The certificate below is a <strong>filled guest diploma</strong> — Cristina Goldin, Balinese cooking class, 8 August 2026 — not a blank mock-up.</p>
    <p>The handshake photo is the same villa class: chef and guest, diploma in hand, kitchen island behind them. Instruction is professional; the atmosphere is the villa you rented.</p>`,
    render: (
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
        <figure className="m-0">
          <OptimizedImage
            src={IMG_DIPLOMA}
            alt="Filled myCHEF Indonesian Cooking Diploma awarded to Cristina Goldin for a Balinese cooking class on 8 August 2026"
            className="w-full rounded-2xl shadow-xl bg-white"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm leading-snug text-[#4A4745]">
            Filled diploma — Cristina Goldin, Balinese cooking class, 8 August 2026. Name and date are printed for the guest, not left blank.
          </figcaption>
        </figure>
        <figure className="m-0">
          <OptimizedImage
            src={IMG_HANDSHAKE}
            alt="Chef presenting a filled cooking-class diploma and shaking a guest’s hand in a Bali villa kitchen"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm leading-snug text-[#4A4745]">
            Diploma handshake in the villa — the take-home moment after you eat what you cooked.
          </figcaption>
        </figure>
      </div>
    ),
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'Two days’ notice',
    title: 'How to Book',
    body: `<p><strong>1. WhatsApp us at least two days ahead.</strong> Villa area, guest count (including any children as extra guests), dietary needs, date, 2.5-hour or 3-hour, and start time.</p>
    <p><strong>2. We propose the class.</strong> Written outline: dishes, 2.5 or 3-hour structure, kitchen needs, all-in quote (++ shown as a fixed, itemised total). Ingredients are in the class price.</p>
    <p><strong>3. Confirm.</strong> Book at least two days ahead. Last-minute / short-lead bookings need <strong>full payment to confirm</strong> the chef and date.</p>
    <p><strong>4. We shop and set up.</strong> The chef shops first, then comes to your villa. No hotel pickup. No market minibus.</p>
    <p><strong>5. You cook — then you eat — then diploma + clean-up.</strong></p>
    ${CTA_HTML('WhatsApp us your villa, group size and date')}`,
  },
  {
    id: 'cta-pre-faq',
    type: 'cta' as const,
    subtitle: 'Still deciding?',
    title: 'Get a clear quote before you book',
    body: 'WhatsApp villa area, guest count, date, and 2.5-hour or 3-hour. We reply with a sample menu and the all-in total. At least two days’ notice.',
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
    subtitle: 'Price, length, what’s included',
    title: 'Cooking Class Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book your class',
    title: 'Ready for a Private Cooking Class in Your Villa?',
    body: `WhatsApp villa area, guest count, date, and 2.5-hour or 3-hour. We reply with a sample menu and the all-in total. WhatsApp <a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium" target="_blank" rel="noopener noreferrer">+62 896-7407-2020</a> · <a href="mailto:bali@mychef.id" class="text-[#7E6410] hover:underline font-medium">bali@mychef.id</a>. More: <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">experiences</a> · <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> · <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">pricing</a> · <a href="/" class="text-[#7E6410] hover:underline font-medium">homepage</a>.`,
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
      'From <strong>IDR 700,000++ per person</strong>, minimum 4 guests. All-in is <strong>IDR 847,000 per person</strong> (10% service + 11% VAT; base × 1.21). The 4-guest floor is <strong>IDR 3,388,000 all-in</strong>. Ingredients are included — not groceries at cost. Your written proposal shows the all-in total.',
  },
  {
    question: 'What does a couple pay for a private cooking class?',
    answer:
      'Two guests are billed at <strong>IDR 1,400,000++ per person</strong> — the same 4-guest floor (IDR 2,800,000++ / all-in IDR 3,388,000). The class is not half-price for two people.',
  },
  {
    question: 'How long is the cooking class?',
    answer:
      '<strong>2.5 or 3 hours</strong>. We ask which length you prefer, and your start time (lunch or dinner), when you enquire. The session stays at the villa.',
  },
  {
    question: 'What is included in the private Indonesian cooking class?',
    answer:
      'The chef, all ingredients, and the meal of everything you cook. The class is 2.5 or 3 hours: intro, hands-on cooking of 4–6 dishes, then you eat. Diploma, recipe cards, uniforms and chef hats, and kitchen clean-up are part of the published villa program. Wine is not included.',
  },
  {
    question: 'Do we eat the food we cook?',
    answer:
      'Yes. You cook 4–6 dishes, then sit down and eat every dish you prepared.',
  },
  {
    question: 'Is this a cooking class or a private chef?',
    answer:
      'A <strong>cooking class</strong> means you cook with the chef and eat what you cooked. A <strong>private chef</strong> cooks for you. Different products, different quotes — this page is the class, never a chef day-rate. Chef hire for other days is a <a href="/">homepage</a> booking.',
  },
  {
    question: 'Do you offer a Balinese, Javanese, or Indonesian cooking class?',
    answer:
      'Yes. Tell us Balinese, Javanese or Indonesian when you enquire. The standard villa class is Indonesian / Balinese; Javanese when you brief it.',
  },
  {
    question: 'How far in advance should we book a cooking class in Bali?',
    answer:
      'At least <strong>two days</strong>. Last-minute / short-lead bookings need <strong>full payment to confirm</strong> the chef and date.',
  },
  {
    question: 'Is this different from the sushi masterclass?',
    answer:
      'Yes. This URL is the Indonesian / Balinese in-villa cooking class. Sushi has its own page: <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
  },
  {
    question: 'How many people will be in our class?',
    answer:
      'Only your group — the class is private. You do not share the kitchen with another party.',
  },
  {
    question: 'Do we visit a local market as part of the class?',
    answer:
      'No market tour is packaged on this class. The chef shops beforehand and brings ingredients to the villa. If a hands-on market visit matters, enquire.',
  },
  {
    question: 'Can children join the cooking class?',
    answer:
      'Yes. Children who join are extra guests on the same class. There is no kids tariff.',
  },
  {
    question: 'Is wine included?',
    answer: 'No. Wine is not included.',
  },
  {
    question: 'Can we request a named chef?',
    answer:
      'No. We do not take named-chef requests. We confirm a professional instructor for your villa and date.',
  },
  {
    question: 'What should I wear to a cooking class?',
    answer:
      'Clothes you can cook in and secure shoes. Uniforms and chef hats are provided.',
  },
]

/** Schema lock: FAQPage may only emit these published questions. Visible FAQs stay complete. */
const SCHEMA_FAQ_QUESTIONS = new Set([
  'How much are cooking classes in Bali with myCHEF?',
  'What does a couple pay for a private cooking class?',
  'How long is the cooking class?',
  'What is included in the private Indonesian cooking class?',
  'Do we eat the food we cook?',
  'Is this a cooking class or a private chef?',
  'Do you offer a Balinese, Javanese, or Indonesian cooking class?',
  'How far in advance should we book a cooking class in Bali?',
  'Is this different from the sushi masterclass?',
  'How many people will be in our class?',
  'Do we visit a local market as part of the class?',
  'What should I wear to a cooking class?',
])

const RELATED_PAGES = [
  {
    label: 'Sushi Masterclass Bali',
    href: '/experiences/sushi-masterclass',
    desc: 'Dedicated private sushi class — not this Indonesian class.',
  },
  {
    label: 'Homepage — private chef',
    href: '/',
    desc: 'Chef cooks for you on other days — never a day-rate on this page.',
  },
  {
    label: 'Wedding catering',
    href: '/events/weddings',
    desc: 'Wedding dinner is a separate day from this class.',
  },
  {
    label: 'Kids Birthday Chef Party',
    href: '/experiences/kids-birthday-chef-party',
    desc: 'Kids cooking party at the villa — a different booking.',
  },
  {
    label: 'All experiences',
    href: '/experiences',
    desc: 'Villa add-ons — oysters, cocktail nights, proposal dinners.',
  },
  {
    label: 'Pricing',
    href: '/pricing',
    desc: 'Published rates across myCHEF services.',
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
        subtitle="Private 2.5–3 hour Indonesian / Balinese class in your villa. Chef comes to you. Eat everything you cook. Diploma + recipes. Full clean-up. No hotel pickup."
        heroImage={HERO}
        heroImageAlt={HERO_ALT}
        heroImageClassName="object-[68%_center] md:object-[center_38%]"
        ogImage={`https://mychef.id${HERO}`}
        ogImageAlt={OG_IMAGE_ALT}
        keywords={[
          'cooking class bali',
          'private cooking class bali',
          'in-villa cooking class bali',
          'chef comes to you',
          'Balinese cooking class in your villa',
          'cooking class canggu',
          'cooking class seminyak',
        ]}
        highlights={[
          '2.5 or 3 hours at the villa',
          'No minibus · no hotel pickup',
          'Diploma + recipes',
          'From IDR 700K++ / person (min 4)',
          'All-in IDR 847,000',
        ]}
        sections={SECTIONS}
        faqs={FAQS}
        relatedPages={RELATED_PAGES}
        ctaText="Book Your Villa Class"
        ctaSubtext="WhatsApp villa area, guest count, date, and 2.5-hour or 3-hour. We reply with a sample menu and the all-in total."
        whatsAppUrl={WA_LINK}
        heroCtaFirst
        heroCompact
        jsonLdExtraOnly
        extraJsonLd={[
          faqPageSchema(
            FAQS.filter((f) => SCHEMA_FAQ_QUESTIONS.has(f.question))
              .map((f) => ({ question: f.question, answer: schemaPlainText(f.answer) }))
              .filter((f) => f.question && f.answer)
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Private Cooking Class Bali',
            serviceType: 'In-villa Indonesian/Balinese cooking class',
            description:
              'Private villa cooking class in Bali. Chef comes to you. Cook 4–6 dishes, eat everything, diploma and recipes. No hotel pickup. From IDR 700,000++ per person, minimum 4 guests.',
            provider: { '@type': 'Organization', name: 'myCHEF.id', ...providerRef },
            areaServed: {
              '@type': 'Place',
              name: 'Bali, Indonesia',
              description: 'Villa; chef comes to guest',
            },
            additionalProperty: {
              '@type': 'PropertyValue',
              name: 'duration',
              value: '2.5 or 3 hours',
            },
            image: `https://mychef.id${HERO}`,
            url: CANONICAL,
            offers: {
              '@type': 'Offer',
              name: 'From IDR 700,000++ per person',
              priceCurrency: 'IDR',
              price: '700000',
              url: CANONICAL,
              description:
                'From IDR 700,000++ per person (11% tax + 10% service). Unit: person. Minimum 4 guests.',
              eligibleQuantity: {
                '@type': 'QuantitativeValue',
                minValue: 4,
                unitText: 'person',
              },
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '700000',
                priceCurrency: 'IDR',
                unitText: 'person ++',
                eligibleQuantity: {
                  '@type': 'QuantitativeValue',
                  minValue: 4,
                  unitText: 'person',
                },
              },
              availability: 'https://schema.org/InStock',
            },
          },
        ]}
      />
      <StickyMobileCTA
        label="Book a cooking class"
        serviceName={COOKING_CLASS_ENQUIRY.serviceName}
        intent={COOKING_CLASS_ENQUIRY.intent}
        pageSource="experiences-cooking-class"
        serviceType="cooking-class"
        pinOnDesktop
      />
    </>
  )
}
