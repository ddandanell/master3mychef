import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Heart, CheckCircle, Sparkles, Camera, Wine, Clock } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20proposal%20package%20Bali%20romantic%20dinner%20and%20would%20love%20to%20discuss%20options.'
const CANONICAL = 'https://mychef.id/experiences/romantic-proposal-dinner'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Proposal Package Bali',
    title: 'The Most Romantic Way to Propose in Bali',
    image: '/generated/proposal-package-bali-dinner.webp',
    imageAlt: 'Candlelit proposal package Bali dinner table for two at a private villa by myCHEF',
    body: `<p>There are proposals, and then there are proposals that feel inevitable — the kind where the setting, the light, the food, and the timing all align so perfectly that the only possible answer is yes. A <strong>proposal package Bali</strong> romantic dinner with a private chef is designed to create exactly that moment.</p>

    <p>Bali gives you the stage: a clifftop in Uluwatu at sunset, a jungle pavilion in Ubud, a beachfront terrace in Canggu, or a candlelit garden bale in Seminyak. myCHEF supplies the rest: a menu built around your partner's tastes, a table set before you arrive, champagne chilled to the right temperature, and a service team that knows when to appear and when to vanish.</p>

    <p>Unlike a restaurant proposal, there is no table to share, no fixed seating time, no kitchen pushing courses out before you are ready. The evening belongs to the two of you. You choose the moment. We make sure everything around it is flawless.</p>

    <p>Whether you have been planning the question for months or decided on impulse, a romantic proposal dinner lets you ask it in a setting that feels private, personal, and unforgettable.</p>`,
  },
  {
    id: 'planning',
    type: 'content' as const,
    subtitle: 'How to Plan It',
    title: 'Planning Your Romantic Proposal Dinner: A Step-by-Step Timeline',
    body: `<p>The best proposal dinners feel effortless because the work happens quietly, long before the evening begins. Here is the timeline we follow with every couple.</p>

    <p><strong>Six weeks out — secure the date and villa:</strong> Reach out as early as you can. Peak season in Bali — July, August, and December — books quickly, and the best villas require advance holds. Tell us the villa name or area, your preferred date, and whether the dinner is a complete surprise. We confirm availability and reply with an initial plan within 24 hours.</p>

    <p><strong>Four weeks out — design the menu and the moment:</strong> This is where the evening becomes personal. We ask about your partner's favourite ingredients, any allergies or dietary needs, the cuisine style that means something to both of you, and how formal or relaxed you want the tone. We also discuss the proposal itself: when you want it to happen, where in the villa, whether you want us involved in the reveal, and whether a photographer will be hidden nearby.</p>

    <p><strong>Two weeks out — confirm logistics:</strong> We lock in the chef arrival time, the service start time, the course pacing, the champagne selection, and any floral or décor package. You confirm final guest numbers — almost always two — and pay the deposit. This is also when we brief villa staff if needed.</p>

    <p><strong>The day before — final check-in:</strong> A short confirmation call or message with you, and only you. We verify villa access, the ring logistics, any last menu tweaks, and the exact cue for the proposal moment if we are part of it.</p>

    <p><strong>The day of — setup and service:</strong> Our team arrives 3–4 hours before dinner. By the time you walk in, the table is dressed, the candles are lit, the Champagne is breathing, and the first course is timed to your arrival. You see none of the preparation. You see only the moment.</p>`,
  },
  {
    id: 'menu',
    type: 'content' as const,
    subtitle: 'The Menu',
    title: 'What a Romantic Proposal Dinner Menu Looks Like',
    image: '/generated/mychef-misc-bali-section-romantic-dinner.webp',
    imageAlt: 'Elegant private dining plate from a romantic proposal dinner in Bali',
    body: `<p>A romantic proposal menu is not a standard tasting menu — it is a story told in courses, building toward the question you are about to ask. Our chefs design each dish to match the pace of the evening: light and conversational at first, richer and more celebratory as the moment approaches.</p>

    <p><strong>A typical 6-course romantic proposal menu might include:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li><em>Amuse-bouche:</em> Compressed watermelon with feta, local basil, and aged balsamic — a clean, bright start</li>
      <li><em>First course:</em> Hokkaido scallop carpaccio with finger lime, cucumber, and chilled lemongrass dressing</li>
      <li><em>Second course:</em> Butter-poached lobster tail with saffron velouté and crispy shallots</li>
      <li><em>Third course:</em> House-made truffle risotto with parmesan crisp and shaved black truffle</li>
      <li><em>Main:</em> Wagyu tenderloin with red-wine jus, roasted garlic purée, and seasonal Balinese vegetables</li>
      <li><em>Dessert:</em> Valrhona chocolate fondant with salted caramel core, served with a hand-piped message on the plate</li>
    </ul>

    <p>Champagne service begins when you sit down, with a Blanc de Blancs or your preferred bottle already chilled. Wine pairings can be added course by course. If your partner prefers seafood, vegetarian, or a specific cuisine, the entire menu is rewritten around those preferences.</p>

    <p>Every allergy, intolerance, or preference is confirmed in advance and handled without drawing attention. The goal is a menu that feels effortless — even when it has been planned for weeks.</p>`,
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
        desc: 'Our team arrives hours early to dress the table, arrange candles and florals, chill Champagne, and prepare the kitchen. When you arrive, everything is already perfect.',
      },
      {
        icon: Sparkles,
        title: 'Bespoke Menu Design',
        desc: 'A custom 5–7 course menu built around your partner\'s preferences, favourite ingredients, and dietary needs. Not a template — a menu created for this night.',
      },
      {
        icon: Wine,
        title: 'Champagne & Wine Service',
        desc: 'Chilled Champagne on arrival, curated wine pairings, and a celebratory toast after the proposal. We coordinate bottles you bring or source the right label for you.',
      },
      {
        icon: Camera,
        title: 'Photographer Coordination',
        desc: 'We time the proposal window into the service and coordinate with your photographer on positioning and lighting, so the moment is captured naturally.',
      },
      {
        icon: CheckCircle,
        title: 'Flower & Décor Styling',
        desc: 'Rose petals, tropical florals, candles, and bespoke table arrangements sourced fresh on the day. Brief us on the mood and we execute it — elegant, lush, or minimal.',
      },
      {
        icon: Clock,
        title: 'Discretion & Timing',
        desc: 'We plan the evening exclusively with you. Course pacing, the proposal cue, and the post-yes toast are rehearsed in advance so the moment feels spontaneous, not staged.',
      },
    ],
  },
  {
    id: 'moment',
    type: 'content' as const,
    subtitle: 'The Proposal Moment',
    title: 'How We Coordinate the Question Itself',
    image: '/generated/section-romantic-dinner.webp',
    imageAlt: 'Romantic candlelit dinner setting prepared for a Bali villa proposal',
    body: `<p>The proposal is the centre of the evening, and the dinner is built around it. Some clients want the question asked between courses, with the next course deliberately delayed. Others want it at the very end, with dessert carrying the ring or a hidden message. A few prefer it at sunset, before dinner even begins, so the rest of the evening is pure celebration.</p>

    <p>Whatever your plan, we coordinate it privately. You give us the cue — a phrase, a gesture, or a course — and we make sure the team is ready. If a photographer is involved, we confirm their hiding spot and the signal to start shooting. If you want Champagne poured the second the answer is yes, we have it waiting off-stage.</p>

    <p>Most importantly, we protect the surprise. All communication goes only to you. Your partner sees a beautifully set table, a delicious meal, and a partner who planned something extraordinary — never the weeks of coordination behind it.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where to Propose',
    title: 'The Best Bali Villa Settings for a Romantic Proposal Dinner',
    body: `<p>The location sets the emotional tone of the proposal as much as the menu or the ring. Bali's villa regions each offer a different kind of romance — here are the four settings our clients choose most often.</p>

    <p><strong>Uluwatu — Clifftop Drama:</strong> The Bukit Peninsula's limestone cliffs deliver the most cinematic settings on the island. An infinity pool that seems to spill into the Indian Ocean, a sky that turns coral and gold, and complete privacy after sunset. Uluwatu is the choice for proposals that want grandeur. See our <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu private chef page</a> for details.</p>

    <p><strong>Seminyak — Garden Intimacy:</strong> Seminyak's mature villa estates, with walled tropical gardens and centuries-old frangipani trees, offer a warmer, more contained kind of romance. The lighting is softer, the soundscape quieter, and the whole evening feels like a secret shared between the two of you. See our <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak private chef page</a>.</p>

    <p><strong>Ubud — Jungle Pavilion:</strong> Ubud's jungle villas sit above river gorges and rice terraces, surrounded by birdsong and moving mist. A candlelit pavilion in the forest creates a proposal setting that feels almost otherworldly — deeply private, deeply Balinese. See our <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud private chef page</a>.</p>

    <p><strong>Canggu — Beachside Warmth:</strong> Canggu's design-forward villas combine contemporary architecture with direct beach access. A beachfront terrace at dusk suits couples who want a modern, relaxed Bali proposal with the sound of waves in the background. See our <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu private chef page</a>.</p>

    <p>We serve villas across all of Bali. If your villa is not listed here, <a href="https://wa.me/6289674072020" class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a> and we will confirm availability and logistics for your exact location.</p>`,
  },
  {
    id: 'pricing',
    type: 'content' as const,
    subtitle: 'Investment',
    title: 'Proposal Package Bali Pricing',
    body: `<p>Pricing for a proposal package Bali depends on the menu tier, number of courses, beverage selection, floral décor, and any add-ons such as photography or live music. Because every proposal is bespoke, we provide a fully itemised quote after understanding your vision.</p>

    <p><strong>What is typically included in the base service:</strong></p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Chef and dedicated service staff for the evening</li>
      <li>Bespoke 5–7 course menu designed around your preferences</li>
      <li>All premium ingredients and produce sourced fresh on the day</li>
      <li>Table setup with linen, crystal, candles, and basic florals</li>
      <li>Champagne and wine service coordination</li>
      <li>Kitchen setup, service, and full clean-down</li>
    </ul>

    <p><strong>Starting from IDR 2,200,000 per person</strong> (minimum two persons). Add-ons such as elaborate floral installations, rose petal pathways, photographer coordination, and premium Champagne upgrades are quoted separately.</p>

    <p>For a bespoke proposal dinner package tailored to your villa and moment, <a href="https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20planning%20a%20romantic%20proposal%20dinner%20in%20Bali%20and%20would%20love%20to%20discuss%20options." class="text-[#7E6410] hover:underline font-medium">message us on WhatsApp</a>. We reply within the hour with options and a transparent quote.</p>`,
  },
  {
    id: 'upgrades',
    type: 'content' as const,
    subtitle: 'Make It Unforgettable',
    title: 'Popular Upgrades for Your Proposal Dinner',
    body: `<p>Beyond the core proposal package Bali dinner, many clients add extras to make the moment even more memorable. Popular upgrades include a professional photographer or videographer hidden on-site, live acoustic music during dinner, a rose-petal pathway or floral arch, and a private fireworks display where villa rules allow.</p>

    <p>We can also coordinate a next-day celebration brunch, a couple's spa arrangement, or a surprise breakfast setup so the newly engaged couple wakes up to something beautiful. Every detail is handled discreetly and exclusively through you.</p>`,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Ready to Plan the Perfect Romantic Proposal?',
    body: 'Tell us your date, villa location, and vision — we will respond within the hour with a custom plan and quote.',
    primaryAction: {
      label: 'Message Us on WhatsApp',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View Pricing',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'How far in advance should I book a romantic proposal dinner?', answer: 'We recommend booking at least 4–6 weeks in advance for standard dates, and 8–12 weeks ahead during peak season (July–August and December). Last-minute requests may be possible depending on availability.' },
  { question: 'Can you keep the proposal dinner a complete surprise?', answer: 'Yes. We coordinate exclusively with the proposing partner. All planning, logistics, and day-of communication go through you alone. Your partner sees only the finished evening.' },
  { question: 'Can you help coordinate the proposal moment itself?', answer: 'Absolutely. We help time the proposal within the meal, coordinate cues with the service team, and align with your photographer. The ring can be presented with dessert, between courses, or at a moment of your choosing.' },
  { question: 'What happens if it rains on the night?', answer: 'We always confirm a covered backup space at your villa during planning — a pavilion, joglo, or indoor dining area. The setup can be moved without losing atmosphere.' },
  { question: 'Can you arrange a photographer or videographer?', answer: 'Yes. We work with a network of Bali photographers who specialise in discreet proposal and romantic dinner coverage. Photographer fees are quoted separately.' },
  { question: 'How much does a proposal package Bali cost?', answer: 'Pricing is bespoke based on menu, courses, beverages, décor, and add-ons. Starting pricing is available on request via WhatsApp, and we provide a fully itemised quote before you confirm.' },
  { question: 'Do you only serve couples proposing, or can this be for anniversaries too?', answer: 'While this page focuses on proposals, the same service works beautifully for anniversaries, honeymoons, and other romantic milestones. See our anniversary dinner and romantic dinner pages for related options.' },
  { question: 'Can I choose the location within my villa?', answer: 'Yes. We scout the best spot with you during planning — whether that is a clifftop terrace, garden bale, poolside deck, or indoor dining room — and design the setup around it.' },
  { question: 'What if my partner has dietary requirements?', answer: 'Every menu is built around your partner’s preferences and dietary needs. Allergies, intolerances, and lifestyle choices are handled discreetly and without drawing attention.' },
  { question: 'Is the setup really private?', answer: 'Yes. The dinner is held in your private villa with only your dedicated chef and service team present. Staff are trained to be attentive but unobtrusive, especially during the proposal moment.' },
]

const RELATED_PAGES = [
  { label: 'Romantic Dinner Bali', href: '/fine-dining/romantic-dinner', desc: 'Private chef romantic dinners for couples at Bali villas.' },
  { label: 'Anniversary Dinner', href: '/events/anniversaries', desc: 'Milestone anniversary celebrations with custom menus and styling.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Full overview of private chef services across Bali.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
]

export default function ExperienceRomanticProposalDinnerPage() {
  return (
    <PremiumPage
      slug="experiences/romantic-proposal-dinner"
      title="Proposal Package Bali | Romantic Proposal Dinner | myCHEF"
      description="Plan a romantic proposal package in Bali. Private chef dinner, candlelit villa setup, flowers, photographer and discreet coordination. WhatsApp myCHEF confidentially."
      seoTitle="Proposal Package Bali | Romantic Proposal Dinner | myCHEF"
      seoDescription="Plan a romantic proposal package in Bali. Private chef dinner, candlelit villa setup, flowers, photographer and discreet coordination. WhatsApp myCHEF confidentially."
      canonicalUrl={CANONICAL}
      h1="Proposal Package Bali — Romantic Dinner & Private Coordination"
      subtitle="A Private Chef Experience for the Moment You Say Yes"
      heroImage="/generated/proposal-package-bali-dinner.webp"
      heroImageAlt="Candlelit proposal package Bali romantic dinner at a private villa by myCHEF"
      ogImage="https://mychef.id/generated/proposal-package-bali-dinner.webp"
      keywords={[
        'proposal package Bali',
        'romantic proposal dinner Bali',
        'private chef proposal dinner Bali',
        'Bali villa proposal dinner',
        'engagement dinner Bali',
        'proposal setup Bali',
        'villa proposal Bali',
        'romantic dinner Bali',
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
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Proposal Package Bali | Romantic Proposal Dinner',
          description:
            'Plan a romantic proposal package in Bali. Private chef, candlelit villa setup, bespoke menu, and discreet proposal coordination.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-07-24',
          dateModified: '2026-07-24',
          image: 'https://mychef.id/generated/proposal-package-bali-dinner.webp',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': CANONICAL,
          },
          url: CANONICAL,
          wordCount: 1900,
          keywords:
            'proposal package Bali, romantic proposal dinner Bali, private chef proposal dinner Bali, Bali villa proposal dinner, engagement dinner Bali',
        },
      ]}
      ctaText="Plan Your Romantic Proposal Dinner"
      ctaSubtext="Tell us your date, villa, and vision — we will reply within the hour with a bespoke plan."
    />
  )
}
