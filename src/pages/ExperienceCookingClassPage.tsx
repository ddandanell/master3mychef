import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, providerRef } from '@/components/SeoHead'
import StickyMobileCTA from '@/components/shared/StickyMobileCTA'
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
 * Standard offer: 3-hour private Indonesian cooking class in your villa
 * (intro → cook → eat everything → diploma). From IDR 700K/person, min 4.
 */

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
    subtitle: '3-hour private Indonesian cooking class',
    title: 'Cooking Class Bali — Private Lessons in Your Villa Kitchen',
    image: HERO,
    imageAlt:
      'Private chef teaching a hands-on cooking class in a luxury Bali villa kitchen with tropical light',
    body: `<p>A <strong>cooking class in Bali</strong> should taste like the island — spice pastes pounded by hand, coconut milk simmered patiently, sambal balanced until it sings — not a rushed tourist demo with twenty strangers and a fixed script. myCHEF runs a <strong>private cooking class</strong> in the kitchen of <em>your</em> villa: a professional chef, ingredients for your session, instruction at your pace, and a full meal of every dish you cook together.</p>

    <p><strong>Standard offer: a complete 3-hour private Indonesian cooking experience</strong> — introduction to the food, hands-on cooking, sit-down meal of everything you prepared, personalised diploma, recipe cards and full clean-up. From <strong>IDR 700,000 per person</strong> (minimum 4 guests; smaller groups pay the 4-person rate).</p>

    <p>Whether you searched for a <strong>cooking class Bali</strong>, <strong>Balinese cooking class</strong>, <strong>Indonesian cooking class Bali</strong>, or an <strong>in-villa cooking class Bali</strong>, the product is the same: the chef comes to you. No shuttle. No shared bench. No “watch from the back.” Couples, families, birthday groups, wedding parties and villa friends book it as the centrepiece of a day that ends around your own table — diploma in hand.</p>

    <p>We specialise in <strong>Indonesian / Balinese</strong> formats and also design vegan, gluten-free, family, couples, team-building and multi-cuisine sessions on request. Prefer sushi only? See our dedicated <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a>.</p>
    ${CTA_HTML('Book your 3-hour class — WhatsApp')}`,
  },
  {
    id: 'program-3h',
    type: 'content' as const,
    subtitle: 'The standard experience',
    title: 'The 3-Hour Indonesian Cooking Class Program',
    body: PROGRAM_HTML,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Transparent pricing',
    title: 'Cooking Class Pricing — From IDR 700,000 per Person',
    body: `<p style="font-size:1.15rem;line-height:1.6"><strong>From IDR 700,000 per person.</strong><br/>
    Minimum <strong>4 people</strong>. If your group is smaller than 4, the price remains the same as for 4 people (you still pay the minimum).</p>

    <p>This covers:</p>
    <ul>
      <li>Professional chef instructor</li>
      <li>All ingredients</li>
      <li>Full set of <strong>uniforms + chef hats</strong> for every guest</li>
      <li>Hands-on instruction (intro + cooking + meal)</li>
      <li>The complete meal of everything you cook</li>
      <li>Personalised <strong>myCHEF Indonesian Cooking Diploma</strong> for each participant</li>
      <li>Recipe cards for a normal home kitchen</li>
      <li>Full kitchen clean-up</li>
    </ul>

    <p>Larger groups receive additional staff so everyone stays active. Longer sessions, extra dishes, special cuisines and complex dietary maps are quoted accordingly. All prices ++ (11% government tax + 10% service) unless your written proposal states otherwise.</p>

    <p style="font-size:0.95rem;color:#4A4A4A">New to booking a class? Our <a href="/blog/cooking-class-bali-cost" class="text-[#7E6410] hover:underline font-medium">2026 cooking class cost guide</a> explains group-school vs private pricing and how to tell if a quote is fair.</p>
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

    <p><strong>The practical difference is bigger than it sounds.</strong> Many group cooking schools run classes of 15–24 guests and a five-hour day built around hotel pickups, a shared bench and a supervised market walk. A myCHEF class is <strong>100% private</strong> — only your group, no strangers, no shuttle. There is <strong>zero transfer time</strong>: the chef comes to you, shops the market ingredients beforehand, and every minute is spent cooking, eating and learning rather than waiting on a minibus. It is the single most common complaint about big cooking schools — crowding and pace — removed by design.</p>

    <p>That is why guests searching for the <strong>best cooking class in Bali</strong> often choose a villa format when they want privacy, flexibility and a real meal at the end. Honeymoon couples treat it as an anti-restaurant date. Families turn it into a holiday memory. Wedding parties use a class as a welcome activity. Corporate and retreat groups use it as team-building that does not feel like a conference icebreaker.</p>

    <p>myCHEF is a chef-led hospitality company for villa dining and catering across the island. Cooking classes sit in the same family as <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef hire</a> and <a href="/catering" class="text-[#7E6410] hover:underline font-medium">villa catering</a> — HACCP-minded food safety, WhatsApp booking, cleanup before we leave.</p>`,
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
    <p style="font-size:0.95rem;color:#4A4A4A">Balinese food is more plant-friendly than most guests expect — see <a href="/blog/vegan-vegetarian-balinese-cooking" class="text-[#7E6410] hover:underline font-medium">vegan &amp; vegetarian Balinese cooking</a> for the full plant-based menu.</p>

    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Gluten-free focused</h3>
    <ul>
      <li>Base gede / base wangi · grilled fish or chicken pepes · fresh sambal and vegetable sides · coconut curry or soup · rice · coconut &amp; palm sugar dessert (no wheat)</li>
    </ul>

    <h3 style="font-family:var(--font-playfair,serif);font-size:1.2rem;margin:1.5rem 0 0.5rem;color:#1A1A1A">Family / kids-friendly</h3>
    <p>Milder spices, interactive tasks (rolling satay, mixing pastes, simple plating), fun uniforms &amp; hats, dishes kids actually want to eat — mild chicken sate, fried rice, sambal on the side.</p>

    <p>Special requests are normal: more meat, seafood-focused, regional Indonesian dishes, zero chilli, high-protein, halal, allergies. We design around what the group actually wants. Sushi-only stays on the <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> page.</p>
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
    body: `<p>Most guests arrive expecting <strong>nasi goreng</strong> and are surprised by how different truly <em>Balinese</em> food is. Both belong on your table — and we are clear about which is which, because that honesty is the difference between a tourist demo and understanding a cuisine.</p>

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

    <p>Balinese food is Hindu, pork-friendly and shaped by ceremony; much of Indonesia’s best-known food is neither. Our chefs explain the distinction as you cook. The full story: <a href="/blog/balinese-food-vs-indonesian-food" class="text-[#7E6410] hover:underline font-medium">Balinese food is not Indonesian food — a chef’s guide</a>.</p>

    <p style="margin-top:1.25rem;border-left:3px solid #C5A028;padding-left:1.25rem;color:#4A4A4A"><em>Balinese cooking is inseparable from ceremony — the daily <strong>canang sari</strong> offerings, the communal <strong>megibung</strong> feast, and <strong>Tri Hita Karana</strong>, the idea that food connects people, nature and the divine. We touch on this while we cook; it is why the food means something beyond the plate.</em></p>`,
  },
  {
    id: 'variations',
    type: 'content' as const,
    subtitle: 'Choose your style',
    title: 'Different Formats — Same Private Villa Standard',
    body: `<p>The core is always hands-on, private, in your villa kitchen. Flavour, length and intensity shift with the group:</p>
    <ul>
      <li><strong>Classic 3-hour Indonesian / Balinese</strong> — the standard we promote on this page</li>
      <li><strong>Longer half-day</strong> — more dishes (6–8), deeper technique, slower social meal</li>
      <li><strong>Vegan / plant-forward only</strong> or <strong>gluten-free focused</strong></li>
      <li><strong>Family &amp; kids</strong> — simpler tasks, milder spice, more fun elements</li>
      <li><strong>Couples romantic</strong> — slower pace; optional wine notes</li>
      <li><strong>Team-building / larger groups</strong> — extra staff, stations, optional challenges</li>
      <li><strong>Multi-cuisine</strong> — Mediterranean, modern Asian, seafood &amp; grill, healthy bowls and more</li>
    </ul>
    <p>Tell us group size, preferences, dietary needs and vibe — we design the session around it.</p>
    ${CTA_HTML('Reserve your private cooking class')}`,
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
        desc: 'Introduction to the food, hands-on cooking, sit-down meal of everything you cooked.',
      },
      {
        icon: Award,
        title: 'Personalised diploma',
        desc: 'Every guest receives a myCHEF Indonesian Cooking Diploma — name + date, a real take-home memory.',
      },
      {
        icon: ChefHat,
        title: 'Uniforms & chef hats',
        desc: 'Full sets for every guest — fun, photogenic “chef for a day” energy.',
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
        desc: 'In-villa cooking class Bali: no transport, no strangers, full privacy.',
      },
      {
        icon: Sparkles,
        title: 'Recipes + full clean-up',
        desc: 'Cards written for a home kitchen. Kitchen left spotless before we leave.',
      },
      {
        icon: MapPin,
        title: 'Island-wide coverage',
        desc: 'Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua, Kuta corridor and more.',
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
    title: 'Cooking Classes for Couples, Kids, Parties, Weddings and Teams',
    image: IMG_DINE,
    imageAlt:
      'Guests dining at a Bali villa after a private cooking class, sharing dishes they prepared with their chef',
    body: `<p><strong>Cooking class for couples.</strong> More memorable than another restaurant booking — and more relaxed than a large group school. Perfect for honeymoons and anniversaries.</p>
    <p><strong>Cooking class for kids and families.</strong> Age-appropriate tasks, flexible spice, fun uniforms. For a full kids party production see <a href="/experiences/kids-birthday-chef-party" class="text-[#7E6410] hover:underline font-medium">kids birthday chef party</a>.</p>
    <p><strong>Birthday &amp; celebration class.</strong> Social, useful and photographable for villa holiday groups.</p>
    <p><strong>Wedding party cooking class.</strong> Welcome the bridal party the day before the ceremony. Pair later with <a href="/events/weddings" class="text-[#7E6410] hover:underline font-medium">wedding catering</a>.</p>
    <p><strong>Team building cooking class.</strong> Collaborative activity that ends in a shared meal. Multi-day food programmes connect with <a href="/events/retreats" class="text-[#7E6410] hover:underline font-medium">retreat catering</a>.</p>
    <p><strong>Dietary &amp; special requests.</strong> Meat, no meat, gluten-free, vegan, halal, allergies, zero chilli, high-protein — just tell us when you enquire.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How booking works',
    title: 'From First Message to Diploma',
    body: `<p><strong>1. Contact us.</strong> WhatsApp villa area, guest count, ages if kids join, dietary needs, date and cuisine preference.</p>
    <p><strong>2. We propose the class.</strong> Written outline: dishes, 3-hour (or longer) structure, kitchen needs, all-in quote. No hidden line items after approval.</p>
    <p><strong>3. We shop and set up.</strong> Ingredients for your session. Chef brings knives, spice kit, uniforms, hats and any missing tools.</p>
    <p><strong>4. You cook — then you eat.</strong> Intro → hands-on cooking → sit-down meal of everything prepared.</p>
    <p><strong>5. Diploma + clean-up.</strong> Personalised diploma, recipe cards, kitchen restored.</p>
    ${CTA_HTML('WhatsApp us your villa location & group size — we reply within 2 hours')}`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Where we teach',
    title: 'Cooking Class Bali Across Seminyak, Canggu, Ubud, Uluwatu and Beyond',
    body: `<p>We travel to your villa kitchen island-wide — <strong>cooking class Ubud</strong>, <strong>Seminyak</strong>, <strong>Canggu</strong>, <strong>Uluwatu</strong>, Jimbaran, Sanur, Kuta corridor and Nusa Dua included. Ubud suits heritage menus; Seminyak and Canggu suit design villas and groups; Uluwatu and Jimbaran suit seafood-leaning sessions; Sanur and Nusa Dua suit families.</p>
    <p>Browse <a href="/locations" class="text-[#7E6410] hover:underline font-medium">locations</a> and multi-day dining on <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">private chef Ubud</a> or <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">private chef Seminyak</a>.</p>`,
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
    title: 'Ready for a 3-Hour Private Indonesian Cooking Class?',
    body: `Tell us your villa area, group size, cuisine preference and date. We confirm chef availability and send a tailored proposal — diploma, uniforms, recipes and the meal of everything you cook included in the standard offer. Explore more on <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences</a>, <a href="/experiences/sushi-masterclass" class="text-[#7E6410] hover:underline font-medium">sushi masterclass</a> and <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> day rates.`,
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
      'From <strong>IDR 700,000 per person</strong>, minimum 4 guests (smaller groups still pay the 4-person rate). Includes chef instructor, ingredients, uniforms &amp; hats, full 3-hour program, meal of everything you cook, personalised diploma, recipe cards and clean-up. Longer sessions and special requests are quoted separately. Prices typically ++ (11% tax + 10% service) — your written proposal shows the all-in total.',
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
      'For guests who want privacy, a custom menu, a real meal and a diploma, a private villa cooking class is often more valuable than a large tourist demo. You leave with skills, recipes and memories — not only photos.',
  },
  {
    question: 'What is a cookery class — and how does a cooking class work?',
    answer:
      'Hands-on instruction where you prepare dishes with a chef. With myCHEF the chef comes to your villa: intro to the food → you cook together → you eat what you made → diploma + clean-up.',
  },
  {
    question: 'Do you offer a Balinese cooking class and Indonesian cooking class?',
    answer:
      'Yes — the standard 3-hour program is Indonesian / Balinese focused (base gede, sambals, sate lilit, lawar/urap, nasi goreng, dessert). Vegan, gluten-free, family and multi-cuisine formats available on request.',
  },
  {
    question: 'Is this an in-villa cooking class in Bali?',
    answer:
      'Yes. Classes are held in your villa kitchen island-wide (Seminyak, Canggu, Ubud, Uluwatu, Jimbaran, Sanur, Nusa Dua, Kuta corridor and more).',
  },
  {
    question: 'How many people will be in our class? Will it be crowded?',
    answer:
      'Only your group — the class is <strong>100% private</strong>. Unlike large cooking schools that can run 15–24 guests on a shared bench, you never cook alongside strangers. That privacy is why couples, families and villa groups choose the in-villa format.',
  },
  {
    question: 'Do we visit a local market as part of the class?',
    answer:
      'Our standard class is held entirely in your villa, so there is no transfer time or minibus waiting. We shop fresh market ingredients beforehand and bring them to you. If a hands-on market visit matters to your group, tell us at enquiry and we’ll advise honestly on what’s possible.',
  },
  {
    question: 'How is a myCHEF class different from a Bali cooking school?',
    answer:
      'A cooking school means a fixed menu, a set time slot, a group of strangers and often a five-hour day with hotel pickups. A myCHEF class is private, in your own kitchen, built around your menu, pace and dietary needs — and you eat everything you cook. See our honest take: <a href="/blog/is-a-cooking-class-in-bali-worth-it">is a cooking class in Bali worth it?</a>',
  },
  {
    question: 'How long do cooking classes take?',
    answer:
      'The standard private Indonesian class is a complete <strong>3-hour experience</strong> (intro + cooking + meal + diploma). Longer half-day formats and optional market-style intros are available on request.',
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
      'Yes when briefed at enquiry. We have dedicated vegan and gluten-free sample menus; pork-free and allergy-safe options are routine.',
  },
  {
    question: 'How far in advance should we book a cooking class in Bali?',
    answer:
      'A few days is often enough off-peak; one week or more for peak season (July–August, December). Last-minute sometimes possible — ask on WhatsApp. Popular with villa groups in high season.',
  },
  {
    question: 'What deposit is required?',
    answer:
      'Typically 50% to confirm the chef and date; balance before the class. <a href="/cancellation">Cancellation policy</a>.',
  },
  {
    question: 'Is this different from the sushi masterclass?',
    answer:
      'Yes. This page covers Balinese, Indonesian and multi-cuisine villa cooking classes (standard 3-hour Indonesian program). Sushi has its own page: <a href="/experiences/sushi-masterclass">sushi masterclass</a>.',
  },
  {
    question: 'How do I contact you to book?',
    answer:
      'WhatsApp +62 896-7407-2020 with villa area, guest count, cuisine and date — or use <a href="/quote">quote</a> / <a href="/book">book</a>.',
  },
]

const RELATED_PAGES = [
  {
    label: 'Sushi Masterclass Bali',
    href: '/experiences/sushi-masterclass',
    desc: 'Dedicated private sushi class at your villa.',
  },
  {
    label: 'Villa cooking class guide',
    href: '/blog/bali-villa-cooking-class-private-chef',
    desc: 'Support article: class formats, market trip and gift ideas.',
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
    label: 'Is a Bali cooking class worth it?',
    href: '/blog/is-a-cooking-class-in-bali-worth-it',
    desc: 'An honest answer — who it’s worth it for, and who should skip it.',
  },
  {
    label: 'What does a cooking class cost?',
    href: '/blog/cooking-class-bali-cost',
    desc: '2026 price guide — group schools vs private, and what drives the price.',
  },
  {
    label: 'Vegan & vegetarian Balinese cooking',
    href: '/blog/vegan-vegetarian-balinese-cooking',
    desc: 'Why Balinese food is naturally plant-friendly, and what you’ll cook.',
  },
  {
    label: 'Kids Birthday Chef Party',
    href: '/experiences/kids-birthday-chef-party',
    desc: 'Kids cooking parties and entertainment at the villa.',
  },
  {
    label: 'Private Chef Bali',
    href: '/private-chef-bali',
    desc: 'Multi-day villa chef hire around your holiday.',
  },
  {
    label: 'Villa Catering',
    href: '/catering',
    desc: 'BBQ, buffet and event catering when you want us to cook for you.',
  },
  {
    label: 'All Experiences',
    href: '/experiences',
    desc: 'Cocktail parties, oysters, proposals and more.',
  },
  {
    label: 'Locations',
    href: '/locations',
    desc: 'Seminyak, Canggu, Ubud, Uluwatu and island-wide coverage.',
  },
]

export default function ExperienceCookingClassPage() {
  return (
    <>
      <PremiumPage
        slug="experiences/cooking-class"
        title="Cooking Class Bali | 3-Hour Private Villa Indonesian Class | myCHEF"
        description="3-hour private Indonesian cooking class in your Bali villa — intro, hands-on cooking, eat everything, diploma. From IDR 700K/person. WhatsApp myCHEF."
        seoTitle="Cooking Class Bali | 3-Hour Private Villa Indonesian Class | myCHEF"
        seoDescription="3-hour private Indonesian cooking class in your Bali villa — ingredient intro, hands-on cooking, meal of everything you cook, personalised diploma. From IDR 700K/pp min 4. WhatsApp myCHEF."
        canonicalUrl={CANONICAL}
        h1="Cooking Class Bali — 3-Hour Private Indonesian Class in Your Villa"
        subtitle="Introduction to the food · hands-on cooking · eat everything you prepare · personalised diploma. From IDR 700,000 per person (min 4)."
        heroImage={HERO}
        heroImageAlt="Private chef teaching a cooking class in a Bali villa kitchen"
        ogImage={`https://mychef.id${HERO}`}
        keywords={[
          'cooking class bali',
          'cooking class in bali',
          'private cooking class bali',
          'balinese cooking class',
          'indonesian cooking class bali',
          'in villa cooking class bali',
          '3 hour cooking class bali',
          'cooking class with diploma bali',
          'cooking class ubud',
          'cooking class seminyak',
          'cooking class canggu',
          'best cooking class bali',
          'cooking lessons in bali',
          'cookery classes in bali',
          'cooking class for couples',
          'cooking class for beginners',
          'vegan cooking class bali',
          'family cooking class bali villa',
        ]}
        highlights={[
          '3-Hour Program',
          'Diploma Included',
          'From IDR 700K/person',
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
              'Private 3-hour Indonesian cooking class in your Bali villa: ingredient introduction, hands-on cooking of 4–6 dishes, sit-down meal of everything prepared, personalised diploma, uniforms, recipes and clean-up. From IDR 700,000 per person, minimum 4 guests.',
            provider: providerRef,
            areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
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
                unitText: 'per person',
                referenceQuantity: {
                  '@type': 'QuantitativeValue',
                  value: 4,
                  unitText: 'minimum guests',
                },
              },
              availability: 'https://schema.org/InStock',
              url: CANONICAL,
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Course',
            name: 'Private 3-Hour Indonesian Cooking Class at Your Bali Villa',
            description:
              'Hands-on private cooking class taught by a myCHEF chef in your villa kitchen. Ingredient introduction, cook 4–6 Indonesian/Balinese dishes, eat everything you prepared, receive a personalised diploma and recipes.',
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
