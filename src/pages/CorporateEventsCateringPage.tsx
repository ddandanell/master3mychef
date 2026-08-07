import { Briefcase, Users, Shield, Star, CheckCircle, Clock } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import type { PageSection } from '@/components/PremiumPage'

const SITE = 'https://mychef.id'
const CANONICAL = `${SITE}/blog/corporate-events-catering-bali-team-dining`

// Article JSON-LD for blog-style URL
const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Corporate Events Catering Bali — Team Dining & Incentive Meals',
  description:
    'Corporate catering in Bali for team retreats, incentive dinners, and offsite events. HACCP certified, international menus, groups from 10–200.',
  url: CANONICAL,
  datePublished: '2026-06-29',
  dateModified: '2026-06-29',
  author: {
    '@type': 'Person',
    name: 'Adriano Cattaneo',
    jobTitle: 'Executive Chef & Founder',
    worksFor: { '@type': 'Organization', name: 'myCHEF.id' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'myCHEF.id',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
  },
  image: `${SITE}/generated/mychef-catering-bali-hub-catering.webp`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
}

const FAQS = [
  { question: 'How much does catering in Bali cost?', answer: 'Many villa formats start around IDR 700K++ per person. See <a href="/catering">catering</a> and <a href="/pricing">pricing</a>.' },
  { question: 'What formats do you offer?', answer: 'BBQ, buffet, plated, drop-off, grazing, floating breakfast, retreat and corporate — all under <a href="/catering">catering</a>.' },
  { question: 'Is catering the same as private chef hire?', answer: 'No. Catering is usually one event; multi-day stays use <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Do prices include staff and cleanup?', answer: 'Serviced packages include chef/staff and cleanup; drop-off does not keep staff on site.' },
  { question: 'Can you cook in an Airbnb villa?', answer: 'Yes with a workable kitchen — share the listing when booking.' },
  { question: 'Minimum guest counts?', answer: 'Vary by format (drop-off lower, buffet higher). We route you correctly.' },
  { question: 'Can menus be customised?', answer: 'Yes — proteins, spice, diets locked before shopping.' },
  { question: 'Travel fees?', answer: 'Remote areas may add a fee quoted upfront.' },
  { question: 'Can we add a mobile cocktail bar?', answer: 'Yes — complete packages from IDR 500,000++ per guest (min 10), not hourly hire. Stack with chef or catering. <a href="/in-villa-service/bartenders">Mobile bar packages →</a> · <a href="/experiences/private-cocktail-party">Cocktail party →</a>' },
  { question: 'Kids and allergies?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and allergy protocols.' },
  { question: 'How do I book catering?', answer: 'WhatsApp date, guests, area and format — or <a href="/quote">quote</a>.' },
  { question: 'Rain plan?', answer: 'Covered setups and indoor pivots planned ahead.' },
  { question: 'Corporate catering price range?', answer: 'Dinners often IDR 700K–1.2M++ per person; multi-day programmes quoted. <a href="/events/corporate">Corporate events</a>.' },
  { question: 'NPWP invoices?', answer: 'Yes on request.' },
  { question: 'Multi-day retreats?', answer: 'Yes — <a href="/catering/retreat-catering">retreat catering</a>.' },
  { question: 'Guest counts?', answer: 'From leadership dinners to 100–200+ programmes.' },
  { question: 'Dietary for mixed teams?', answer: 'Yes when headcount by diet is shared.' },
  { question: 'Villa and venue work?', answer: 'Yes — share access rules.' },
  { question: 'Bartenders and waiters?', answer: 'Yes — <a href="/in-villa-service">in-villa service</a>.' },
  { question: 'Case studies?', answer: 'Yes — <a href="/corporate-case-studies">case studies</a>.' },
]

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'The Corporate Catering Challenge in Bali',
    title: 'Hotel-Quality Food. Villa-Scale Flexibility.',
    body: `<p>Companies running retreats, incentive trips, and offsites in Bali face a consistent problem: the venues are exceptional but the catering options are not. Hotel restaurants can serve their own banquet room. They cannot staff your private villa in Ubud or your clifftop resort in Uluwatu with the same quality and professionalism.</p>
<p>Most corporate groups end up with one of two outcomes — either they pay hotel banquet rates for a space they did not want, or they compromise on quality by using a villa caterer that cannot handle dietary compliance, dietary surveys, or large-format service at a professional level.</p>
<p>myCHEF exists for the third option: a fully certified, professionally staffed catering operation that treats your villa, resort, or offsite venue as its primary stage. fine-dining standards, HACCP certification, international menus, and a dedicated service team — brought to wherever your group is meeting.</p>`,
    image: '/generated/mychef-catering-bali-hub-catering.webp',
    imageAlt:
      'Indonesian chef team setting up corporate dinner service at a Bali villa, with elegant table arrangements and professional presentation',
  },
  {
    id: 'event-types',
    type: 'content',
    subtitle: 'Corporate Events We Cater',
    title: 'From Working Lunches to Gala Incentive Dinners',
    body: `<p>myCHEF works across the full spectrum of corporate dining formats. Each event type is staffed and scoped differently — we do not apply a single formula to all group sizes and occasions.</p>

<p><strong>Team Retreat Dinners (5–20 people, residential villa setting)</strong><br>
Intimate, seated dinners for small leadership teams and squad retreats. Typically 3–4 courses, plated service, with a quiet kitchen team that allows genuine conversation. Ideal for Ubud jungle villas, Seminyak estates, or Uluwatu cliff residences.</p>

<p><strong>Incentive Trip Gala Dinners (20–80 people, formal resort setup)</strong><br>
The flagship event of an incentive programme. Full 5-course format with synchronized plated service, wine pairings, and the kind of presentation that photographs well and impresses guests who have seen everything. These are the dinners that your travellers still talk about in Q4.</p>

<p><strong>Working Lunches and Offsite Breakfasts (daily retreat catering)</strong><br>
Multi-day retreat programmes require reliable daily catering that keeps energy up and dietary needs met without disrupting the schedule. We rotate menus across the programme and ensure every meal feels intentional — not like a hotel buffet afterthought.</p>

<p><strong>Product Launch Dinners (premium positioning, photography-ready)</strong><br>
When a product or campaign launch requires a dinner, the table is part of the brand story. We approach these with presentation discipline, coordinating with photographers and ensuring every plate, surface, and service moment is consistent.</p>

<p><strong>Client Entertainment Dinners (quiet, private, impressive)</strong><br>
For entertaining key clients or partners in a setting that signals both success and discretion. Private villa dining is more impressive than any restaurant booking — and it gives you complete control of the room. NDAs available on request.</p>

<p><strong>Company Milestone Celebrations (5th, 10th anniversary events)</strong><br>
When the occasion matters, the food should match. Anniversary celebrations, end-of-year dinners, and achievement recognition events require menus that feel celebratory rather than functional. We create custom menus around the occasion and can incorporate brand elements, regional themes, or cultural touches.</p>`,
  },
  {
    id: 'why-us',
    type: 'content',
    subtitle: 'Why Corporate Clients Choose myCHEF',
    title: 'HACCP Certified. Zero Event Risk. Full International Range.',
    body: `<p><strong>HACCP Certification</strong><br>
HACCP (Hazard Analysis and Critical Control Points) is the international standard for food safety management in professional catering. It covers temperature control, cross-contamination prevention, supplier traceability, and safe handling procedures across the entire service chain. Many corporate procurement policies — especially for companies headquartered in Europe, the US, or Australia — require HACCP compliance from any external food provider. myCHEF holds full HACCP certification, meaning we meet those requirements and can provide documentation on request.</p>

<p><strong>Same-Day Chef Replacement Guarantee</strong><br>
The single largest risk in any catered event is a key staff member falling ill on the day. myCHEF's operational depth — 50+ trained staff across Bali — means that if a chef is sick, there is a qualified replacement available. Your event does not carry that risk. Companies like those with large Bali operations trust this structure precisely because a successful retreat dinner cannot hinge on one person's health.</p>

<p><strong>International Menu Range at Scale</strong><br>
We cook Western, Asian, Indonesian, and fusion menus to a professional standard, and we can blend cuisines within a single event for groups with diverse nationalities. Dietary accommodation at scale — halal, vegan, gluten-free, severe allergies — is built into our pre-event process rather than treated as a last-minute exception.</p>

<p><strong>Trusted by Global Companies</strong><br>
Companies like Microsoft, Google, and Airbnb have held events in Bali, and their teams have the same expectations when it comes to food quality, dietary rigour, and service professionalism. We are built to meet those expectations.</p>`,
  },
  {
    id: 'service-model',
    type: 'content',
    subtitle: 'How It Works',
    title: 'End-to-End Corporate Catering — From Brief to Cleanup',
    body: `<p>Corporate events require more structure than a private dinner. Our process is designed to give procurement managers and event coordinators full visibility at every stage and zero surprises on the day.</p>

<p><strong>Step 1 — Initial Brief</strong><br>
We start with group size, event dates, venue details, and a dietary survey sent to guests in advance. We collect all restrictions, preferences, and severity ratings before any menu is drafted. This step typically takes 24–48 hours to complete once your group has responded.</p>

<p><strong>Step 2 — Menu Proposal Within 48 Hours</strong><br>
Based on the brief, we deliver a full menu proposal within 48 hours. This includes course-by-course descriptions, dietary accommodation notes, beverage recommendations, and a transparent price breakdown. Revisions are handled via WhatsApp or email — no lengthy back-and-forth.</p>

<p><strong>Step 3 — Site Visit or Kitchen Assessment</strong><br>
For events above 30 persons, we conduct a site visit or kitchen assessment to confirm equipment needs, service flow, and logistics. For venues without commercial kitchens, we specify the portable equipment we will bring and confirm power and space requirements.</p>

<p><strong>Step 4 — Day-of Execution</strong><br>
Our team arrives three hours before service to set up, prep, and brief service staff. All service is synchronized — courses are timed and plates land together. The kitchen team works quietly and the front-of-house team dresses appropriately for the event's formality level.</p>

<p><strong>Step 5 — Full Cleanup and 24-Hour Invoice</strong><br>
After service, we conduct full cleanup and restore the venue to its original condition. Invoice is issued within 24 hours of the event with a clear itemised breakdown — suitable for corporate expense processing.</p>`,
  },
  {
    id: 'features',
    type: 'features',
    subtitle: 'What Is Included',
    title: 'Professional Corporate Catering — Built for Business Standards',
    features: [
      {
        icon: Shield,
        title: 'HACCP Food Safety Certified',
        desc: 'Full HACCP compliance across all food handling, preparation, and service. Documentation available for corporate procurement and compliance requirements.',
      },
      {
        icon: Star,
        title: 'International Menu Portfolio',
        desc: 'Western, Asian, Indonesian, and fusion menus designed to professional standard. Milan-trained culinary direction across all event formats.',
      },
      {
        icon: Clock,
        title: '48-Hour Proposal Turnaround',
        desc: 'Full menu proposal with dietary accommodation notes and transparent pricing delivered within 48 hours of your brief. No delays in planning.',
      },
      {
        icon: CheckCircle,
        title: 'On-Site Dietary Management',
        desc: 'Dietary surveys sent pre-event. All allergies, halal, vegan, and gluten-free requirements built into menu design — not treated as exceptions on the day.',
      },
      {
        icon: Users,
        title: 'Same-Day Chef Replacement',
        desc: '50+ trained staff across Bali means illness or absence never cancels your event. A qualified replacement is always available. Zero event risk.',
      },
      {
        icon: Briefcase,
        title: 'Post-Event Cleanup Included',
        desc: 'Full venue cleanup and restoration included in all corporate packages. Invoice issued within 24 hours, itemised for expense processing.',
      },
    ],
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Corporate Pricing',
    title: 'Transparent Pricing for Every Format and Group Size',
    body: `<p>Corporate catering pricing is based on format, course count, service level, and group size. All prices are in Indonesian Rupiah (IDR) and shown as per-person rates excluding 11% VAT. Volume discounts apply for groups of 50 persons and above.</p>

<p><strong>Working Lunches and Daily Retreat Meals</strong><br>
From IDR 700,000 per person. Covers buffet or set-menu format for breakfast, lunch, or single-meal service during a multi-day programme. Suited to full-day workshops, morning sessions, or afternoon breakouts where food is functional but still needs to be excellent.</p>

<p><strong>Corporate Dinner — Plated, 3 Courses</strong><br>
IDR 700,000–1,200,000 per person. Formal seated dinner with synchronized plated service, a trained front-of-house team, and a menu reviewed and approved in advance. Suitable for leadership dinners, client entertainment, and end-of-programme events.</p>

<p><strong>Gala Incentive Dinner — 5+ Courses with Wine Service</strong><br>
IDR 1,200,000–2,500,000 per person. The full-scale event format. Includes multi-course progression, wine pairings, sommelier or beverage service, and the highest level of presentation and synchronization. Designed for incentive trip headlines, major company milestones, or client entertainment at the executive level.</p>

<p><strong>Minimum group:</strong> 10 persons. For detailed pricing based on your group size, venue, and format, contact us via WhatsApp and we will respond with a tailored proposal within 24 hours.</p>`,
  },
  {
    id: 'locations',
    type: 'content',
    subtitle: 'Where We Operate',
    title: 'Bali — Corporate Catering Across Indonesia\'s Premier Island Destination',
    body: `<p>myCHEF operates across Bali's full corporate event geography. <strong>Nusa Dua</strong> is Bali's primary convention and incentive corridor — we regularly cater resort-adjacent villas and private venues throughout the area. <strong>Seminyak and Canggu</strong> host the largest concentration of creative and technology company retreats, where villa capacity ranges from intimate team dinners to 80-person outdoor events. <strong>Ubud</strong> is the preferred destination for wellness-focused retreats and leadership programmes, with jungle resort venues and traditional estate settings. <strong>Uluwatu</strong> offers clifftop settings ideal for gala dinners with dramatic sunset backdrops.</p>

<p>For full coverage and venue-specific logistics, explore our <a href="/catering/corporate-catering" class="text-[#7E6410] hover:underline font-medium">corporate catering service page</a> or our <a href="/events/corporate-events" class="text-[#7E6410] hover:underline font-medium">corporate events overview</a>. To begin planning, reach out via WhatsApp with your dates, group size, and venue — we will respond within the hour.</p>`,
  },
]

const RELATED_PAGES = [
  {
    label: 'Corporate Catering',
    href: '/catering/corporate-catering',
    desc: 'Full overview of myCHEF corporate catering services across Bali.',
  },
  {
    label: 'Corporate Events',
    href: '/events/corporate-events',
    desc: 'Event planning and catering for company retreats, incentive trips, and offsites.',
  },
  {
    label: 'Catering Overview',
    href: '/catering',
    desc: 'All myCHEF catering formats — from villa dinners to large group events.',
  },
  {
    label: 'Pricing',
    href: '/pricing',
    desc: 'Transparent per-person pricing across all event formats and group sizes.',
  },
  {
    label: 'About myCHEF',
    href: '/fine-dining/our-chefs',
    desc: 'Milan-trained founder, HACCP certification, and 50+ professional staff.',
  },
]

export default function CorporateEventsCateringPage() {
  return (
    <PremiumPage
      slug="blog/corporate-events-catering-bali-team-dining"
      title="Corporate Events Catering Bali"
      description="Corporate catering in Bali for team retreats, incentive dinners, and offsite events. HACCP certified, international menus, groups 10–200."
      seoTitle="Corporate Events Catering Bali | Team & Incentive Dining | myCHEF"
      seoDescription="Corporate catering in Bali for team retreats, incentive dinners, and offsite events. HACCP certified, international menus, groups 10–200."
      canonicalUrl={CANONICAL}
      h1="Corporate Events Catering in Bali — Team Dinners & Incentive Meals"
      subtitle="HACCP certified. International menus. 10–200 guests. Bali only."
      heroImage="/generated/mychef-catering-bali-hub-catering.webp"
      heroImageAlt="Professional Indonesian chef team preparing a corporate gala dinner at a Bali villa with elegant table settings and synchronized service"
      ogImage={`${SITE}/generated/mychef-catering-bali-hub-catering.webp`}
      keywords={[
        'corporate catering bali',
        'corporate events catering bali',
        'team retreat catering bali',
        'incentive dinner bali',
        'private chef corporate bali',
        'haccp catering bali',
        'offsite catering bali',
        'bali corporate dinner',
        'retreat catering bali',
        'mychef corporate',
      ]}
      highlights={[
        'HACCP Food Safety Certified',
        'Groups from 10–200 Persons',
        '48-Hour Proposal Turnaround',
        'Same-Day Chef Replacement Guarantee',
      ]}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        ARTICLE_SCHEMA,
        faqPageSchema(FAQS),
        breadcrumbSchema(
          'Corporate Events Catering Bali',
          CANONICAL,
          'Journal',
          `${SITE}/journal`,
        ),
      ]}
      ctaText="Request a Corporate Proposal"
      ctaSubtext="Share your group size, dates, and venue — we respond within the hour."
    />
  )
}
