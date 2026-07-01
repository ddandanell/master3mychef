import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { Flame, Star, Users, Leaf } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Why BBQ at a Villa',
    title: 'The Case for a Private Chef BBQ at Your Bali Villa',
    body: `<p>Bali villa dining has evolved considerably over the past decade — but few formats match the natural fit of a BBQ. The combination of outdoor space, a pool, warm evening air, and the sensory pull of smoke and sizzle makes villa BBQ something that restaurant dining simply cannot replicate. The fire becomes part of the atmosphere. Guests gather around the grill, drinks in hand, while the aroma of charcoal-grilled seafood drifts across the terrace. It is relaxed, social, and unmistakably Bali.</p>

    <p>What separates a private chef BBQ from a DIY grill session is the difference between a stress-free celebration and someone spending the entire evening managing heat levels. A professional pit chef arrives with the right equipment, sets up safely, and manages every stage of the cook — from pre-marinating proteins to timing the service so everything hits the table at once, hot and perfectly cooked. Nobody gets stuck managing the grill while everyone else swims. The host becomes a guest at their own event.</p>

    <p>The quality gap is equally significant. Professional grill work involves understanding different heat zones, resting times, basting schedules, and doneness signals that home cooks rarely deal with in a live-fire environment. A wagyu burger handled by an experienced chef arrives nothing like a supermarket patty cooked through on a gas flame. Whole fish on charcoal, properly scored and basted, bears little resemblance to something improvised on a thin rental grill.</p>

    <p>The evolution of Bali villa BBQ has followed the broader hospitality scene. Where ten years ago a villa BBQ meant store-bought chicken wings and a bag of charcoal, today's private chef BBQ experience can feature whole snapper, sate lilit, tamarind-glazed beef ribs, and lobster — all executed by a trained chef on professional equipment, with a full side spread and sambal station. The format has grown up. The ceiling for what a Bali villa BBQ can be is genuinely high.</p>

    <p>For groups of 6 to 40 guests, a private chef BBQ is one of the most cost-effective and crowd-pleasing catering formats available. It suits nearly every group dynamic — families, friend groups, corporate teams — and scales easily without losing quality. It is informal enough to let the event breathe, and impressive enough that guests remember it.</p>`,
  },
  {
    id: 'what-we-grill',
    type: 'content' as const,
    subtitle: 'The Menu',
    title: 'What myCHEF Grills',
    body: `<p>The myCHEF BBQ menu is built around the grill as the centrepiece, using Bali's exceptional local produce alongside premium imported proteins. Every item is sourced, marinated, and prepared by the chef before arriving at your villa — service is seamless from the moment the coals are lit.</p>

    <p><strong>Meat:</strong> Beef ribs with tamarind glaze slow-cooked until the bone pulls clean, lamb chops with a herb crust, chicken thighs marinated in sambal and coconut, and wagyu burgers with caramelised onion and house sauce. For large groups wanting a showstopper, whole pig — babi guling — is available as the centrepiece of the BBQ (advance booking required).</p>

    <p><strong>Seafood:</strong> Whole snapper grilled over direct flame with kaffir lime and lemongrass, tiger prawns on skewers with chilli butter, squid scored and charred at high heat, and whole lobster for premium packages. Bali's coastal location makes grilled seafood one of the strongest choices on any BBQ menu — freshness is non-negotiable and the results show it.</p>

    <p><strong>Indonesian Grill:</strong> Sate lilit — the Balinese minced fish satay wrapped around lemongrass skewers — is a signature myCHEF item and always among the most requested by guests. Beef rendang basted ribs bring slow-cooked depth to live-fire cooking. Corn with chilli butter. These items connect the format to Bali's culinary identity rather than delivering a generic Western grill.</p>

    <p><strong>Vegetarian:</strong> The vegetarian grill menu is substantial and designed to stand alone — not as an afterthought. Whole cauliflower steaks charred and served with harissa, tempeh skewers marinated in kecap manis, grilled corn, and stuffed portobello mushrooms with ricotta and herbs. Our plant-based BBQ package is popular even among non-vegetarian groups.</p>

    <p><strong>Sides:</strong> A live nasi goreng wok station where guests watch the chef toss fried rice to order, tropical slaws with papaya and lime, grilled seasonal vegetables with sea salt, garlic bread, and a full sambal station with three or more varieties. The sides are where a professional BBQ separates itself from a DIY session — they are made fresh, not opened from a packet.</p>`,
  },
  {
    id: 'packages',
    type: 'features' as const,
    subtitle: 'BBQ Packages',
    title: 'Choose Your BBQ Package',
    features: [
      {
        icon: Flame,
        title: 'Classic BBQ — IDR 420K/person',
        desc: 'The full myCHEF grill selection — meat, seafood, and Indonesian grill items — paired with three sides and a live sambal bar. Includes a nasi goreng wok station. The go-to package for groups who want a complete, satisfying BBQ without the premium add-ons. Minimum 8 guests.',
      },
      {
        icon: Star,
        title: 'Premium Surf & Turf — IDR 750K/person',
        desc: 'The prestige package: whole lobster and wagyu burger alongside the full seafood and grill selection. Complete side spread, premium sambal bar, and chef-curated basting sauces. Best for milestone celebrations, executive team events, or any group that wants the full experience without compromise.',
      },
      {
        icon: Users,
        title: 'Big Group BBQ (15+) — IDR 380K/person',
        desc: 'Designed for large groups — live grill and wok stations, unlimited grill replenishment throughout service, four sides including nasi goreng, and the full sambal bar. The per-head cost is lower because the format is optimised for volume. Best for group holidays, corporate team events, and large family gatherings.',
      },
      {
        icon: Leaf,
        title: 'Plant-Based BBQ — IDR 350K/person',
        desc: 'A complete vegetarian grill menu built to impress everyone at the table — not just the vegetarians. Whole cauliflower centrepiece, tempeh satay, grilled seasonal vegetables, stuffed portobello mushrooms, live nasi goreng wok, and sambal station. Full flavour, no compromise.',
      },
    ],
  },
  {
    id: 'equipment',
    type: 'content' as const,
    subtitle: 'Logistics & Equipment',
    title: 'What a Professional Villa BBQ Setup Involves',
    body: `<p>A myCHEF BBQ is a complete setup — the chef arrives with everything required. Understanding what that means helps hosts plan the event space effectively.</p>

    <p><strong>Charcoal vs gas:</strong> We use charcoal as the default because the flavour difference is significant. Hardwood charcoal reaches higher temperatures, imparts smoke character to proteins, and creates the grill marks and caramelisation that define good barbecue. Some villas have restrictions on open-flame charcoal grills — particularly in covered or semi-covered areas — and in those cases we work with gas equipment. The results are still excellent; charcoal simply adds another dimension when conditions allow. When booking, share any villa rules about open flame and we will plan accordingly.</p>

    <p><strong>Space requirements:</strong> The grill setup ideally occupies a 3m x 3m clear area. This accommodates the main grill, the fuel staging area, prep surfaces, and safe clearance. The setup should be away from the pool edge (a minimum of 1.5 metres) and away from overhanging vegetation, shade structures, or low-hanging canopies. Most Bali villas with outdoor kitchen or terrace space accommodate this easily — but sharing the villa layout when you enquire helps us confirm before arrival.</p>

    <p><strong>What we bring:</strong> The chef arrives with the grill itself, charcoal or gas (depending on the setup confirmed), all ingredients pre-prepped and marinated, serving equipment, skewers, basting brushes, heat-resistant surfaces, and all tools required for service. We also handle setup and breakdown — the villa is left clean.</p>

    <p><strong>What the villa needs to provide:</strong> A power outlet nearby (for lighting if the event runs into the evening and for the wok station), access to running water for the chef's station, and a clear path from the kitchen or prep area to the grill. Most villas are set up for this without any modification. Our team does a brief venue check at arrival and can flag any adjustments needed before service begins.</p>`,
  },
  {
    id: 'occasions',
    type: 'content' as const,
    subtitle: 'Best Occasions',
    title: 'When a BBQ Is the Right Call',
    body: `<p>A private chef BBQ works exceptionally well for a specific set of occasions — and knowing which those are helps you choose the right format for your event.</p>

    <p><strong>BBQ works best for:</strong> Bachelor parties where the group wants great food without formality. Birthday parties — particularly milestone celebrations for guests who love good food in a relaxed setting. Large family reunions where a shared meal around a grill creates a natural gathering point. Corporate team events where the goal is connection and conversation rather than a sit-down dinner. End-of-surf-trip celebrations or post-activity group meals where the energy is high and appetite is bigger. Casual Sunday afternoons at the villa when the week's itinerary has wound down. Any group where the guest list is mixed — ages, dietary preferences, vibe — because the BBQ format accommodates everyone without forcing a fixed menu on the table.</p>

    <p><strong>BBQ is not the ideal format for:</strong> Formal anniversary dinners where a curated plated tasting menu, candlelight, and choreographed service create the right atmosphere. Intimate proposals where the setting and pace matter more than a social spread. Fine dining clients who want a multi-course menu with wine pairings and composed plates. Small groups of two to four guests on a romantic occasion — the energy of a grill is social and generous rather than intimate and quiet.</p>

    <p>For those occasions, myCHEF offers plated private chef dinners, tasting menus, and dedicated <a href="/blog/romantic-dinner-bali-private-chef" class="text-[#C5A028] hover:underline font-medium">romantic dinner</a> and <a href="/blog/anniversary-dinner-villa-bali" class="text-[#C5A028] hover:underline font-medium">anniversary</a> formats that are better suited. The right format for the right occasion always produces a better result than trying to make one format do everything.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Ready to Book',
    title: 'Book Your Bali BBQ',
    body: 'Tell us your group, villa, and vibe — we\'ll send a BBQ menu and quote within 2 hours.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/628113803488?text=Hi%20myCHEF%2C%20I%27d%20like%20to%20organise%20a%20BBQ%20at%20my%20Bali%20villa.' },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Do you use charcoal or gas for the BBQ?',
    answer: 'We prefer charcoal for the flavour. Some villa rules require gas — we work within villa restrictions and will always achieve great results either way.',
  },
  {
    question: 'How much space does the BBQ setup need?',
    answer: 'Ideally a 3m x 3m clear area away from the pool edge and overhanging vegetation. We assess this when you share your villa details.',
  },
  {
    question: 'Can you do a whole pig (babi guling) at a villa?',
    answer: 'Yes — this is a myCHEF specialty and a showstopping centrepiece for large groups. Requires advance notice of at least 3 days.',
  },
  {
    question: 'Is BBQ suitable for vegetarians?',
    answer: 'Yes — our plant-based BBQ package features a full vegetarian grill menu that non-vegetarian guests love too.',
  },
  {
    question: 'How many chefs does a BBQ event need?',
    answer: 'Typically 1 pit chef + 1 kitchen support for groups up to 20. Larger groups get additional team members.',
  },
  {
    question: 'What is included in the BBQ package price?',
    answer: 'Chef labour, all ingredients, charcoal/fuel, serving equipment, and cleanup. Alcohol is not included.',
  },
]

const RELATED_PAGES = [
  { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Private chef for bachelor parties at Bali villas.' },
  { label: 'Large Group Catering', href: '/blog/large-group-catering-bali', desc: 'Catering solutions for groups of 20 to 100+ in Bali.' },
  { label: 'Birthday Party Bali', href: '/blog/birthday-party-catering-bali', desc: 'Private chef birthday catering at Bali villas.' },
  { label: 'Catering BBQ', href: '/catering/bbq', desc: 'Browse all myCHEF BBQ catering options.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing for all myCHEF catering packages.' },
  { label: 'Private Dinner Party', href: '/blog/private-dinner-party-bali', desc: 'Intimate private dinner party catering at Bali villas.' },
]

export default function BbqCateringBaliPage() {
  return (
    <PremiumPage
      slug="blog/bali-bbq-catering-villa-guide"
      title="BBQ Catering Bali: The Complete Villa Guide"
      description="The ultimate guide to BBQ catering at your Bali villa. Equipment, menus, staffing, IDR pricing, which occasions it suits. Private chef BBQ from IDR 400K/person."
      seoTitle="BBQ Catering Bali | Villa BBQ Private Chef Guide | myCHEF"
      seoDescription="The ultimate guide to BBQ catering at your Bali villa. Equipment, menus, staffing, IDR pricing, which occasions it suits. Private chef BBQ from IDR 400K/person."
      canonicalUrl="https://mychef.id/blog/bali-bbq-catering-villa-guide"
      h1="BBQ Catering Bali: The Complete Villa Guide"
      subtitle="Everything You Need to Know About BBQ at Your Bali Villa"
      heroImage="/generated/mychef-catering-bali-hero-babiguling.webp"
      heroImageAlt="BBQ catering setup at a Bali villa — private chef service by myCHEF"
      ogImage="https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp"
      keywords={['bbq catering bali', 'bali villa bbq', 'bbq bali', 'barbecue catering bali', 'private chef bbq bali villa']}
      highlights={['Why BBQ', 'What We Grill', 'Packages', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('BBQ Catering Bali', 'https://mychef.id/blog/bali-bbq-catering-villa-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'BBQ Catering Bali: The Complete Villa Guide',
          description: 'The ultimate guide to BBQ catering at your Bali villa. Equipment, menus, staffing, IDR pricing, which occasions it suits.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-29',
          dateModified: new Date().toISOString().split('T')[0],
          image: 'https://mychef.id/generated/mychef-catering-bali-hero-babiguling.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/bali-bbq-catering-villa-guide' },
          url: 'https://mychef.id/blog/bali-bbq-catering-villa-guide',
          wordCount: 1400,
          keywords: 'bbq catering bali, bali villa bbq, barbecue catering bali, private chef bbq bali villa',
        },
      ]}
      ctaText="Book Your Bali BBQ"
      ctaSubtext="Tell us your group, villa, and vibe — we'll send a BBQ menu and quote within 2 hours."
    />
  )
}
