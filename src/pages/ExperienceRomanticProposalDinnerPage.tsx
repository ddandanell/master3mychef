import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema, serviceSchema } from '@/components/SeoHead'
import { Heart, CheckCircle, Sparkles, Camera, Wine, Clock } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20full%20proposal%20package%20in%20Bali%20and%20would%20love%20a%20confidential%20quote%20and%20plan.'
const CANONICAL = 'https://mychef.id/experiences/romantic-proposal-dinner'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Proposal Package Bali',
    title: 'Proposal Package Bali — One Plan, One Team, One Yes',
    image: '/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp',
    imageAlt: 'Candlelit proposal package Bali dinner table for two at a private villa by myCHEF',
    body: `<p>The setting. The light. The menu built around the person you love. The photographer they never saw. The champagne that appears the second they say yes. A myCHEF proposal package is the entire evening — designed, styled and choreographed by one team, inside the privacy of your Bali villa.</p>

    <p>This is the full-service option: not just a beautiful dinner, but every element around it planned weeks ahead, executed while your partner suspects nothing, and coordinated down to the exact cue you choose.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Start Planning Confidentially — WhatsApp +62 896-7407-2020</a>. We reply to you, and only you — same-day response, because proposals are date-critical.</p>`,
  },
  {
    id: 'concept',
    type: 'content' as const,
    subtitle: 'More Than a Dinner — The Whole Evening, Arranged',
    title: 'The Full-Service Villa Proposal',
    body: `<p>Resort proposal packages give you a fixed script in a hotel you don't live in. A villa proposal package gives you the stage you're already staying on — the clifftop terrace, the jungle pavilion, the garden bale — with every layer built around it: a bespoke chef's menu, candle and floral styling set before you return, champagne breathing on ice, a hidden photographer briefed on your signal, and a service team that knows precisely when to appear and when to vanish.</p>

    <p><a href="/proposal-dinner" class="text-[#7E6410] hover:underline font-medium">Just want the dinner? See our chef-led proposal dinner</a>. This page is for couples who want everything handled.</p>`,
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'How Planning Works',
    title: 'A Timeline From Six Weeks to the Moment',
    body: `<p><strong>Six weeks out — secure the date.</strong> Tell us the villa, the date, and how complete the surprise must be. Peak season (July–August, December) books early. You'll have an initial plan within 24 hours.</p>

    <p><strong>Four weeks out — design the evening.</strong> Menu direction, styling mood, where and when in the evening the question lands, photographer and music decisions.</p>

    <p><strong>Two weeks out — lock logistics.</strong> Chef arrival time, course pacing, champagne selection, floral plan. Deposit confirmed; villa staff briefed only if you ask.</p>

    <p><strong>The day before — a check-in with you alone.</strong> Access, ring logistics, final menu tweaks, the exact cue.</p>

    <p><strong>The day — we arrive while you're out.</strong> Three to four hours before dinner. You walk in to a finished scene; you see none of the preparation.</p>`,
  },
  {
    id: 'tiers',
    type: 'content' as const,
    subtitle: 'Package Tiers & What\'s Included',
    title: 'Proposal Package Pricing',
    image: '/generated/mychef-proposal-dinner-plated-dish-bali-portrait.webp',
    imageAlt: 'Elegant private dining plate from a romantic proposal dinner in Bali',
    body: `<p>Every package is built on a private chef dinner for two and layered from there:</p>

    <table class="w-full text-left border-collapse my-4">
      <thead>
        <tr class="border-b border-stone-700">
          <th class="py-2 pr-4">Tier</th>
          <th class="py-2 pr-4">From price (++)</th>
          <th class="py-2">What's included</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">The Styled Dinner</td>
          <td class="py-2 pr-4">IDR 3.5M per couple</td>
          <td class="py-2">Full-service private chef dinner for two — bespoke menu, waitstaff, complete table setting with candles and styling</td>
        </tr>
        <tr class="border-b border-stone-800">
          <td class="py-2 pr-4 font-semibold">The Proposal Package</td>
          <td class="py-2 pr-4">Quoted per plan</td>
          <td class="py-2">The Styled Dinner plus floral and candle design, champagne service, proposal choreography and day-of coordination</td>
        </tr>
        <tr>
          <td class="py-2 pr-4 font-semibold">The Full Production</td>
          <td class="py-2 pr-4">Quoted per plan</td>
          <td class="py-2">Everything above plus hidden photographer, live musician, premium florals and a full styling installation</td>
        </tr>
      </tbody>
    </table>

    <p>All prices ++ (11% government tax + 10% service charge); every package quote is itemised line by line before you commit. See our <a href="/pricing" class="text-[#7E6410] hover:underline font-medium">full pricing guide</a>.</p>`,
  },
  {
    id: 'addons',
    type: 'content' as const,
    subtitle: 'The Add-On Menu',
    title: 'Build the Evening',
    body: `<ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li><strong>Hidden photographer</strong> — 2 hours from IDR 2.4M, briefed on positioning and your signal</li>
      <li><strong>Acoustic musician</strong> — from IDR 2.4M for the first hour</li>
      <li><strong>Champagne on ice</strong> — Veuve Clicquot IDR 2.5M · Krug IDR 5.5M</li>
      <li><strong>Celebration cake</strong> — IDR 1.5–3M, personalised</li>
      <li><strong>Champagne & oyster hour</strong> — <a href="/experiences/champagne-oyster-experience" class="text-[#7E6410] hover:underline font-medium">add a champagne & oyster hour</a> before the dinner begins</li>
      <li>Candle landscape, petal pathways, floral installations and personalised signage — styled to your brief</li>
    </ul>

    <p>Add-on prices are borrowed from our anniversary page and apply to proposal packages on request.</p>

    <p>For <a href="/events/anniversaries" class="text-[#7E6410] hover:underline font-medium">anniversary celebrations</a> or <a href="/fine-dining/romantic-dinner" class="text-[#7E6410] hover:underline font-medium">romantic dinners without the ring</a>, see our romantic dinner page. For wine pairing, ask about our <a href="/in-villa-service/sommelier" class="text-[#7E6410] hover:underline font-medium">sommelier-led wine pairing</a>.</p>`,
  },
  {
    id: 'seo-content',
    type: 'content' as const,
    title: "Proposal Package Bali — One Plan, One Team, One Yes",
    body: ARTICLE_CONTENT['/experiences/romantic-proposal-dinner'],
  },
  {
    id: 'features',
    type: 'features' as const,
    subtitle: 'What We Offer',
    title: 'Every Element of Your Proposal Package Bali',
    features: [
      {
        icon: Heart,
        title: 'Private Villa Setup',
        desc: 'Table dressed, candles lit, champagne chilled — the scene is finished before you walk in.',
      },
      {
        icon: Sparkles,
        title: 'Bespoke Menu Design',
        desc: 'A custom menu built around your partner’s preferences and dietary needs.',
      },
      {
        icon: Wine,
        title: 'Champagne & Wine Service',
        desc: 'Chilled champagne on arrival and celebratory toast after the yes.',
      },
      {
        icon: Camera,
        title: 'Hidden Photographer',
        desc: 'Discreet coverage coordinated around your signal and timing.',
      },
      {
        icon: CheckCircle,
        title: 'Flower & Décor Styling',
        desc: 'Fresh florals, candle landscapes and personalised signage styled to your brief.',
      },
      {
        icon: Clock,
        title: 'Discretion & Timing',
        desc: 'One point of contact, messages answered only to you, setup staged while your partner is out.',
      },
    ],
  },
  {
    id: 'settings',
    type: 'content' as const,
    subtitle: 'The Best Villa Settings for a Proposal',
    title: 'Where We Style the Moment',
    image: '/generated/mychef-proposal-dinner-plated-dish-bali-portrait.webp',
    imageAlt: 'Romantic candlelit dinner setting prepared for a Bali villa proposal',
    body: `<p><strong>Uluwatu clifftop</strong> — the cinematic choice: infinity edge, coral sky, total privacy after sunset. <strong>Ubud jungle pavilion</strong> — candles, mist and the river below; almost otherworldly. <strong>Seminyak garden</strong> — walled frangipani gardens, soft light, a secret shared between two. <strong>Canggu beachfront</strong> — modern, relaxed, waves in the background. Tell us where you're staying; we style around the villa, not against it. Rain never ruins the plan — a covered fallback position is arranged in advance.</p>`,
  },
  {
    id: 'secret',
    type: 'content' as const,
    subtitle: 'We Keep the Secret',
    title: 'Surprise Is Everything',
    body: `<p>One point of contact. Messages answered only on your channel. Setup staged while your partner is elsewhere. A service team working to your cue — a phrase, a gesture, a course — and adjusting gracefully if nerves change the plan on the night. Your partner sees a beautiful evening and a partner who planned something extraordinary. Never the weeks behind it.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Proposal Package Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning in Confidence',
    title: 'Ready to Plan Your Proposal Package?',
    body: `One message is all it takes: the date, the villa, and how you imagine the moment. We will take it from there — quietly. <a href="/proposal-dinner" class="text-[#7E6410] hover:underline font-medium">Just want the dinner? See our chef-led proposal dinner</a>. For the days after the yes, book <a href="/honeymoon-chef" class="text-[#7E6410] hover:underline font-medium">a private chef for the days after the yes</a>. For <a href="/fine-dining/romantic-dinner" class="text-[#7E6410] hover:underline font-medium">romantic dinners without the ring</a>, see our romantic dinner page.`,
    primaryAction: {
      label: 'Plan My Proposal Package',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'Full Pricing Guide',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'How much does a proposal package in Bali cost?', answer: 'The foundation — a full-service styled proposal dinner — starts from IDR 3.5M++ per couple. Photography, music, florals and champagne are itemised add-ons (photographer from IDR 2.4M/2h; musician from IDR 2.4M/hour). Full packages are quoted individually, line by line.' },
  { question: 'What\'s the difference between this and the proposal dinner?', answer: 'The proposal dinner is the chef-led dinner itself — food-first, intimate, styled table. This package adds the full production around it: floral and candle design, hidden photographer, musician, choreography and weeks of coordination.' },
  { question: 'Can you keep it a complete surprise?', answer: 'Yes — it\'s the heart of the service. We coordinate only with you, stage everything while your partner is out, and work to whatever cue you choose.' },
  { question: 'Can you arrange a photographer and musician?', answer: 'Yes. We work with Bali photographers who specialise in discreet proposal coverage and coordinate positioning, lighting and the signal to start shooting. Musicians, from acoustic guitar to violin, are quoted separately.' },
  { question: 'What happens if it rains?', answer: 'Every terrace and garden setup has a covered fallback position confirmed during planning. The evening moves; the moment doesn\'t.' },
  { question: 'What if my partner has dietary requirements?', answer: 'Tell us privately during planning and the entire menu is built around them — allergies, vegetarian, halal, anything — without a word said at the table.' },
  { question: 'How far in advance should we book?', answer: 'Four to six weeks minimum; eight to twelve for peak season. Short-notice proposals are sometimes possible — message us and we\'ll tell you honestly what\'s achievable.' },
  { question: 'What deposit is required?', answer: 'A deposit confirms the date and team [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]; the balance is due before the evening.' },
]

const RELATED_PAGES = [
  { label: 'Proposal Dinner', href: '/proposal-dinner', desc: 'The chef-led, dinner-first proposal experience.' },
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Romantic dinners for two without the ring.' },
  { label: 'Honeymoon Chef', href: '/honeymoon-chef', desc: 'Private chef dining for the days after the yes.' },
  { label: 'Champagne & Oyster Hour', href: '/experiences/champagne-oyster-experience', desc: 'A golden-hour prelude to your proposal dinner.' },
]

export default function ExperienceRomanticProposalDinnerPage() {
  return (
    <PremiumPage
      slug="experiences/romantic-proposal-dinner"
      title="Proposal Package Bali | Full-Service Villa Proposal | myCHEF"
      description="Complete Bali proposal packages: private chef dinner, flowers, candles, styling, photographer & musician — fully coordinated. Confidential quote."
      seoTitle="Proposal Package Bali | Full-Service Villa Proposal | myCHEF"
      seoDescription="Complete Bali proposal packages: private chef dinner, flowers, candles, styling, photographer & musician — fully coordinated. Confidential quote."
      canonicalUrl={CANONICAL}
      h1="Proposal Package Bali — One Plan, One Team, One Yes"
      subtitle="A Private Chef Experience for the Moment You Say Yes"
      heroImage="/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp"
      heroImageAlt="Candlelit proposal package Bali romantic dinner at a private villa by myCHEF"
      ogImage="https://mychef.id/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp"
      keywords={[
        'proposal package bali',
        'villa proposal package bali',
        'bali proposal planner',
        'proposal photographer flowers bali',
        'romantic proposal bali',
      ]}
      highlights={['Private Villa Setup', 'Bespoke Menu', 'Proposal Coordination', 'Bali-Wide Service']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Proposal Package Bali',
          CANONICAL,
          'Experiences',
          'https://mychef.id/experiences'
        ),
        faqPageSchema(FAQS),
        serviceSchema(
          'Proposal Package Bali',
          'A complete Bali proposal package at your villa: private chef dinner, floral and candle styling, champagne service, hidden photographer, live musician and confidential choreography. Styled dinner foundation from IDR 3.5M++ per couple; add-ons itemised.',
          CANONICAL
        ),
      ]}
      ctaText="Plan My Proposal Package"
      ctaSubtext="Tell us your date, villa, and vision — we will reply within the hour with a bespoke plan."
    />
  )
}
