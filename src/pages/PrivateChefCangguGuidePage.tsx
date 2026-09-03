import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Private Chef Canggu',
    title: 'Private Chef Canggu: Villa Dining, Surf Dinners & Party Catering',
    body: `<p>Canggu is Bali's most energetic villa area — a dense mix of boutique surf villas, digital nomad co-living spaces, and luxury private compounds spread across the black-sand coastal strip from Batu Bolong to Seseh. A private chef in Canggu means flexible, casual-cool dining that fits the rhythm of a surf and lifestyle holiday.</p>
    <p>myCHEF provides private chef services across the full Canggu area. Whether you are hosting a bachelor party dinner at a 10-bedroom villa in Berawa, a casual group breakfast after a morning surf session, or a low-key anniversary dinner for two at your Batu Bolong hideaway, we can build the experience around you. To <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">hire a private chef in Canggu</a>, myCHEF matches you with a chef who understands the area's villa kitchens and relaxed entertaining style.</p>
    <p>Canggu guests tend to want food that is relaxed but high quality — elevated Indonesian street food, live fire cooking, fresh seafood, and sharing plates rather than formal plated service.</p>`,
  },
  {
    id: 'canggu-cuisine',
    type: 'content',
    subtitle: 'Food Culture',
    title: 'The Canggu Palate: Bold Flavours, Sharing Plates & Live-Fire Cooking',
    body: `<p>Canggu's food scene has shaped a distinct private dining style:</p>
    <p><strong>Indonesian street food elevated:</strong> Nasi goreng, mie goreng, satay, babi guling — executed with chef-quality technique and premium ingredients.</p>
    <p><strong>Live-fire and BBQ:</strong> Many Canggu villas have outdoor kitchens or BBQ setups. A myCHEF chef working a live fire is one of the best private dining formats for large casual groups. See our <a href="/catering/bbq-catering" class="text-[#7E6410] hover:underline font-medium">Bali BBQ catering guide</a>.</p>
    <p><strong>Fresh seafood:</strong> Canggu's proximity to the Jimbaran and Kedonganan fish markets means fresh catch is available daily.</p>
    <p><strong>Long breakfast spreads:</strong> A private chef breakfast — an extended spread of tropical fruits, freshly squeezed juices, eggs made to order, avocado toast, and local pastries — sets the tone for the whole day. See our <a href="/catering/floating-breakfast" class="text-[#7E6410] hover:underline font-medium">floating breakfast guide</a>.</p>`,
  },
  {
    id: 'villa-areas',
    type: 'content',
    subtitle: 'Coverage Area',
    title: 'Canggu Villa Areas: Batu Bolong, Berawa, Pererenan, Echo Beach & More',
    body: `<p>myCHEF covers the full Canggu strip:</p>
    <p><strong>Batu Bolong:</strong> The original Canggu core — surfshops, cafes, and a dense cluster of villa compounds.</p>
    <p><strong>Berawa:</strong> Canggu's most densely developed villa zone, home of Finns Beach Club and a major hub for bachelor parties.</p>
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
    body: `<p>Canggu is Bali's premier destination for group villa celebrations:</p>
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
  { question: 'How much is a private chef in Bali per day?', answer: 'Stay chef is a full day of staff at IDR 2,700,000++ (IDR 3,267,000 all-in). Three flexible meals. One meal is catering. <a href="/private-chef-bali">Private chef Bali</a>.' },
  { question: 'Are groceries included?', answer: 'Shopping work is included; food is billed at cost with receipts on daily hire.' },
  { question: 'What is Chef Rotation?', answer: 'On 7+ day bookings you can request different specialist chefs by day at no extra day-rate charge.' },
  { question: 'Can the chef cook in our villa kitchen?', answer: 'Yes — standard villa kitchens work; we bring specialised tools when needed.' },
  { question: 'Is this cheaper than restaurants for groups?', answer: 'For six+ people on two meals/day, the day rate split often beats mid-range restaurant totals plus taxis.' },
  { question: 'Can I request a specific chef?', answer: 'Yes for multi-day stays when available. Meet the team: <a href="/chefs">chefs</a>.' },
  { question: 'Fine dining vs daily chef?', answer: 'Fine dining is multi-course event pricing; daily chef is a full-day staff stay rate. One meal is catering. <a href="/fine-dining">Fine dining</a>.' },
  { question: 'Do you cover my area?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Kids menus with daily chef?', answer: 'Yes — <a href="/kids-menus">kids menus</a> and parallel adult meals.' },
  { question: 'Live-in vs daily chef?', answer: 'Live-in is long-term placement (<a href="/staffing/live-in-chef">live-in chef</a>); daily is holiday day-rate hire.' },
  { question: 'Payment methods?', answer: 'Bank transfer and major cards; deposit then balance as quoted.' },
  { question: 'Last-minute private chef?', answer: 'Often possible outside peak — WhatsApp availability.' },
  { question: 'Do you serve this Bali area?', answer: 'Yes — private chef, catering and events operate across major villa regions. Hub: <a href="/locations">locations</a> · <a href="/private-chef-bali">private chef</a>.' },
  { question: 'Is there a travel fee?', answer: 'Core South Bali is usually included; remote spots may add a distance fee quoted upfront.' },
  { question: 'Can you cook in Airbnb villas here?', answer: 'Yes with a workable kitchen — share the listing.' },
  { question: 'Same prices as other areas?', answer: 'Published day rates and menu starts apply; only remote logistics may differ.' },
  { question: 'Fine dining available here?', answer: 'Yes — <a href="/fine-dining">fine dining</a>.' },
  { question: 'BBQ and parties?', answer: 'Yes — <a href="/catering/bbq-catering">BBQ catering</a> · <a href="/events/villa-parties">villa parties</a>.' },
  { question: 'Daily chef for a week?', answer: 'Yes — meal plans on <a href="/private-chef-bali">private chef Bali</a>.' },
  { question: 'Staff and mobile bar?', answer: 'Waiters/butlers: contact for pricing. Mobile cocktail bar packages from IDR 500K++/guest (min 10). <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
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
        { label: 'Private Chef Canggu', href: '/private-chef/canggu', desc: 'Book a private chef in Canggu — day rates and menus.' },
        { label: 'Mobile Cocktail Bar', href: '/in-villa-service/bartenders', desc: 'Party bar packages for Canggu villa free-flow.' },
        { label: 'BBQ Catering', href: '/catering/bbq-catering', desc: 'Poolside BBQ — stack with mobile bar for drinks.' },
        { label: 'Pool Party Catering', href: '/blog/pool-party-catering-bali', desc: 'Finger food and stations for Canggu pool parties.' },
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
