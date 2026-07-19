import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Canggu',
    title: 'Private Chef Canggu: Villa Dining, Surf Dinners & Party Catering',
    body: `<p>Canggu is Bali\'s most energetic villa area — a dense mix of boutique surf villas, digital nomad co-living spaces, and luxury private compounds spread across the black-sand coastal strip from Batu Bolong to Seseh. A private chef in Canggu means flexible, casual-cool dining that fits the rhythm of a surf and lifestyle holiday.</p>
    <p>myCHEF provides private chef services across the full Canggu area. Whether you are hosting a bachelor party dinner at a 10-bedroom villa in Berawa, a casual group breakfast after a morning surf session, or a low-key anniversary dinner for two at your Batu Bolong hideaway, we can build the experience around you.</p>
    <p>Canggu guests tend to want food that is relaxed but high quality — elevated Indonesian street food, live fire cooking, fresh seafood, and sharing plates rather than formal plated service.</p>`,
  },
  {
    id: 'canggu-cuisine',
    type: 'content',
    subtitle: 'Food Culture',
    title: 'The Canggu Palate: Bold Flavours, Sharing Plates & Live-Fire Cooking',
    body: `<p>Canggu\'s food scene has shaped a distinct private dining style:</p>
    <p><strong>Indonesian street food elevated:</strong> Nasi goreng, mie goreng, satay, babi guling — executed with chef-quality technique and premium ingredients.</p>
    <p><strong>Live-fire and BBQ:</strong> Many Canggu villas have outdoor kitchens or BBQ setups. A myCHEF chef working a live fire is one of the best private dining formats for large casual groups. See our <a href="/catering/bbq-catering" class="text-[#7E6410] hover:underline font-medium">Bali BBQ catering guide</a>.</p>
    <p><strong>Fresh seafood:</strong> Canggu\'s proximity to the Jimbaran and Kedonganan fish markets means fresh catch is available daily.</p>
    <p><strong>Long breakfast spreads:</strong> A private chef breakfast — an extended spread of tropical fruits, freshly squeezed juices, eggs made to order, avocado toast, and local pastries — sets the tone for the whole day. See our <a href="/catering/floating-breakfast" class="text-[#7E6410] hover:underline font-medium">floating breakfast guide</a>.</p>`,
  },
  {
    id: 'villa-areas',
    type: 'content',
    subtitle: 'Coverage Area',
    title: 'Canggu Villa Areas: Batu Bolong, Berawa, Pererenan, Echo Beach & More',
    body: `<p>myCHEF covers the full Canggu strip:</p>
    <p><strong>Batu Bolong:</strong> The original Canggu core — surfshops, cafes, and a dense cluster of villa compounds.</p>
    <p><strong>Berawa:</strong> Canggu\'s most densely developed villa zone, home of Finns Beach Club and a major hub for bachelor parties.</p>
    <p><strong>Pererenan:</strong> The quieter northern end of the Canggu strip, increasingly popular with longer-stay guests and families.</p>
    <p><strong>Echo Beach:</strong> The surf-focused end of Canggu, popular with extended-stay surfers and digital nomads.</p>
    <p><strong>Seseh and Cemagi:</strong> The far northern reaches, where luxury villas sit in relative isolation between the beach and rice fields.</p>
    <p><strong>Tibubeneng and Umalas:</strong> The inland areas east of Canggu, popular with expat families.</p>`,
  },
  {
    id: 'group-occasions',
    type: 'content',
    subtitle: 'Occasions',
    title: 'Private Chef for Canggu Occasions: Bachelor Parties, Birthdays & Group Dinners',
    body: `<p>Canggu is Bali\'s premier destination for group villa celebrations:</p>
    <p><strong>Bachelor and bachelorette parties:</strong> A private chef dinner for 15-30 guests anchors the villa night. See our <a href="/blog/bachelor-party-bali-private-chef" class="text-[#7E6410] hover:underline font-medium">bachelor party guide</a> and <a href="/events/villa-parties" class="text-[#7E6410] hover:underline font-medium">bachelorette party guide</a>.</p>
    <p><strong>Birthday parties:</strong> From intimate villa dinners for 6 to full villa party catering for 50+. See our <a href="/events/birthdays" class="text-[#7E6410] hover:underline font-medium">birthday party catering guide</a>.</p>
    <p><strong>Corporate retreats:</strong> myCHEF provides chef services for corporate villa stays. See our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#7E6410] hover:underline font-medium">corporate catering guide</a>.</p>
    <p><strong>Family villa weeks:</strong> Multi-generational families often want daily chef service. Our <a href="/staffing/household-staff" class="text-[#7E6410] hover:underline font-medium">household chef</a> arrangement is ideal.</p>`,
  },
  {
    id: 'pricing',
    type: 'content',
    subtitle: 'Pricing',
    title: 'Private Chef Canggu Pricing',
    body: `<p>Canggu pricing follows the standard myCHEF structure:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Dinner service (3-4 courses, 2-8 guests):</strong> From IDR 700,000 – 800,000 per person</li>
      <li><strong>Group dinner (10-30 guests, sharing format):</strong> From IDR 700,000 per person</li>
      <li><strong>BBQ / live fire setup:</strong> From IDR 700,000 – 750,000 per person</li>
      <li><strong>Floating breakfast:</strong> From IDR 700,000 per person</li>
    </ul>
    <p style="margin-top:0.75rem;">For full cost details see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">Bali private chef cost guide</a>.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Your Chef',
    title: 'Reserve a Private Chef in Canggu',
    body: 'Tell us your villa, dates, group size, and occasion. We will match you with the right Canggu chef.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View All Services', href: '/services' },
  },
]

const FAQS = [
  {
    question: "How far in advance do I need to book a private chef in Canggu?",
    answer: "We recommend 48-72 hours minimum, especially for peak season and larger groups. For bachelor/bachelorette parties with 15+ guests, booking at least a week in advance is strongly recommended.",
  },
  {
    question: "Can a private chef cook for 20-30 people at a Canggu villa?",
    answer: "Yes. For groups of 15-30, we typically provide the lead chef plus a kitchen assistant and at least one server. We design menus as sharing-format spreads.",
  },
  {
    question: "Can a private chef do a BBQ at our Canggu villa?",
    answer: "Yes. BBQ and live-fire cooking is one of our most popular formats in Canggu. We bring the equipment and design a full BBQ menu — marinated meats, fresh seafood, satay, grilled vegetables, and sauces.",
  },
  {
    question: "Do you cover all parts of Canggu including Berawa, Pererenan, and Echo Beach?",
    answer: "Yes. We cover the full Canggu area including Batu Bolong, Berawa, Pererenan, Echo Beach, Seseh, Cemagi, Tibubeneng, and Umalas.",
  },
  {
    question: "Can a Canggu private chef also do the floating breakfast the next morning?",
    answer: "Yes. Many guests book a private chef dinner one evening and a floating breakfast the following morning.",
  },
]

export default function PrivateChefCangguGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-canggu-guide"
      title="Private Chef Canggu: Villa Dining, Surf Dinners & Party Catering"
      description="Book a private chef in Canggu for villa dinners, bachelor parties, group BBQs, and floating breakfasts. Covers Berawa, Pererenan, Echo Beach and Seseh."
      h1="Private Chef Canggu — Villa Dining, Surf Dinners & Party Catering"
      subtitle="The complete guide to private chef experiences across the full Canggu area"
      heroImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80"
      heroImageAlt="Private chef preparing a seafood BBQ feast for a group at a Canggu villa"
      ogImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80"
      keywords={['private chef canggu', 'canggu private chef', 'canggu villa chef', 'private chef bali canggu', 'canggu chef hire']}
      highlights={['Villa BBQ', 'Group Parties', 'Surf Dinners', 'From IDR 700K/person']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Ubud Guide', href: '/private-chef/ubud', desc: 'Farm-to-table dining and wellness menus in Ubud.' },
        { label: 'Private Chef Seminyak Guide', href: '/private-chef/seminyak', desc: 'Luxury villa dining and fine dining in Seminyak.' },
        { label: 'Bachelor Party Bali', href: '/blog/bachelor-party-bali-private-chef', desc: 'Private chef for bachelor party villa nights in Canggu.' },
        { label: 'Bali BBQ Catering', href: '/catering/bbq-catering', desc: 'Live-fire BBQ catering for villa groups across Bali.' },
        { label: 'Floating Breakfast Bali', href: '/catering/floating-breakfast', desc: 'Private chef floating breakfast for your Canggu villa pool.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Canggu Guide', 'https://mychef.id/blog/private-chef-canggu-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Canggu: Villa Dining, Surf Dinners & Party Catering',
          description: 'Book a private chef in Canggu for villa dinners, bachelor parties, group BBQs, and floating breakfasts.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-canggu-guide' },
          url: 'https://mychef.id/blog/private-chef-canggu-guide',
        },
      ]}
      ctaText="Reserve Your Canggu Chef"
      ctaSubtext="We match you with the right chef for your Canggu villa or group event."
    />
  )
}
