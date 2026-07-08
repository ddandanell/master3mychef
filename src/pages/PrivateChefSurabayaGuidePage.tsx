import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Private Chef in Surabaya -- In-Home Chef Service for East Java',
    body: `Surabaya is Indonesia's second largest city and one of its most dynamic. A growing base of affluent residents, a large and long-established expat community, and a business scene that regularly requires executive-level hospitality have created real demand for private chef and catering services that match what the city's best restaurants offer.

myCHEF extends its private chef service to Surabaya for clients who want professional kitchen talent at home or for private events. Whether you are a Surabaya family wanting a weekly household chef, a business executive hosting a client dinner at your residence, or an event planner needing a chef team for a corporate occasion, we have the network and experience to place the right person.

We operate across all major Surabaya residential areas: Pakuwon, Citraland, Darmo, Kertajaya, Galaxy Bumi Permai, Ketintang, and the Surabaya Barat commercial corridor.`,
  },
  {
    id: 'services',
    type: 'content',
    title: 'Private Chef Services Available in Surabaya',
    body: `**In-Home Dinner Chef** -- A chef comes to your home for an evening, prepares a multi-course dinner or family meal, and cleans up before leaving. This is the core private chef format: the convenience of a restaurant-quality meal without leaving home. Suitable for family dinners, date nights, small celebrations, or a regular weekly arrangement.

**Weekly Household Chef Service** -- A regular chef who comes 3--5 days per week to cook daily meals for your household. Breakfast, lunch, dinner, or any combination. This format is common among Surabaya expat families and high-income households who want consistent, high-quality home cooking without the commitment of a live-in hire.

**Live-In Chef Placement** -- For households that want a permanent full-time culinary team member, we handle the full recruitment and placement process: candidate selection, chef trials, reference verification, and contract support. This is a B2B placement service with an ongoing relationship rather than a one-off booking.

**Private Event Catering** -- Chef-led catering for private events at your Surabaya home, garden, or rented venue: birthday dinners, farewell gatherings, Arisan occasions, engagement celebrations, or corporate client entertainment. We handle everything from menu design to service team coordination.

**Executive Dining** -- High-level corporate entertaining at a private residence. Internationally trained chefs, European and modern Asian menus, professional service team, wine pairing available. This is the format Surabaya's business community uses when they want the quality of a five-star hotel dining room in a private setting.`,
  },
  {
    id: 'cuisine-styles',
    type: 'content',
    title: 'Cuisine Styles Our Surabaya Chefs Prepare',
    body: `**Indonesian and East Javanese** -- Authentic regional cooking that a skilled Indonesian home cook or restaurant chef delivers: rawon, soto Lamongan, rujak cingur, lontong cap gomeh, pecel, and the full range of Javanese and East Indonesian dishes. For households who want excellent local food cooked properly at home.

**Continental and European** -- Classical French and Italian technique, modern European menus, proper brunoise and fond-building, sauce work and reduction. The output that Surabaya's internationally educated residents and expat community expect.

**Modern Asian Fusion** -- Contemporary menus that sit across the boundary between Indonesian ingredients and international technique. Japanese influence on Balinese ingredients; Korean flavour profiles applied to local proteins; Southeast Asian herb work in European formats.

**Healthy and Nutritional** -- Clean eating menus designed around macronutrient balance, low sugar, high protein, or specific dietary frameworks (keto, paleo, plant-based). Common among Surabaya's fitness-oriented community and health-conscious families.

**Halal Specialisation** -- All myCHEF Surabaya services are available in certified halal format. Ingredient sourcing from halal-certified suppliers, separation of utensils, and compliance with halal kitchen protocols on request.`,
  },
  {
    id: 'expat-community',
    type: 'content',
    title: 'Private Chef Service for Surabaya\'s Expat Community',
    body: `Surabaya has one of Indonesia's largest long-established expat communities: European and Australian business executives in manufacturing, logistics, and finance; Japanese and Korean corporate families posted to East Java plants; Middle Eastern and South Asian business families; and a growing number of digital nomads and remote workers.

The challenge for most expat households is consistent quality: domestic helpers who cook Indonesian food well but cannot produce the European or international food the family also wants, or vice versa. A private chef bridges that gap -- professionally trained in multiple cuisine styles, experienced cooking for international dietary preferences and allergen requirements, and capable of producing the food you actually want to eat, not just what is locally available.

Common arrangements in Surabaya's expat community:
- A chef who comes 4 days per week for lunch and dinner
- A weekend brunch specialist who handles Sunday mornings
- A dinner chef for 2--3 formal evenings per month when client entertaining is required
- A placement service that sources a permanent household chef for longer postings

We have existing relationships with Surabaya-based culinary professionals and can move quickly on staffing requests for this community.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Private Chef Pricing in Surabaya',
    body: `Pricing in Surabaya is structured similarly to our other Indonesian markets with local adjustments for transport and ingredient sourcing.

**Single Dinner (up to 6 guests):** From IDR 1,200,000--2,000,000 for chef service, excluding ingredients. Ingredient cost is billed separately at market rate.

**Weekly Household Chef (3 days/week):** From IDR 3,500,000--5,000,000 per month for chef labour, excluding ingredients.

**Corporate Event Catering (20--50 guests):** From IDR 8,000,000 upwards, depending on menu format, guest count, and service level. Full proposal on request.

**Live-In Chef Placement:** One-time placement fee structure. Contact us for our current placement service terms and the candidate profiles we can present for your household.

All pricing is quoted on a per-engagement basis after we understand the specific requirements. These figures are indicative guides, not fixed tariffs.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book a Private Chef in Surabaya',
    body: `Tell us what you need: the occasion, how many guests, what cuisine style you prefer, and any dietary requirements. We will confirm which of our Surabaya-based chefs fits your brief and send a proposal within 24 hours.`,
  },
]

const faqs = [
  {
    question: 'Do you have private chefs available in Surabaya?',
    answer:
      'Yes. We have a network of professionally trained chefs available for in-home dinner service, weekly household cooking, private events, and corporate entertaining in Surabaya. Response time on availability is typically same day.',
  },
  {
    question: 'Can a private chef in Surabaya cook halal food?',
    answer:
      'Yes. All myCHEF Surabaya services are available in halal format. This includes sourcing from halal-certified ingredient suppliers, maintaining halal kitchen practices, and using separate equipment for halal preparation where required. Please specify halal requirements at booking.',
  },
  {
    question: 'Is private chef service in Surabaya more expensive than in Bali?',
    answer:
      'Pricing in Surabaya is broadly comparable to Bali, with some variation based on ingredient sourcing and transport logistics. Corporate and placement services may be priced differently given the B2B nature of those engagements. We provide a specific quote for every inquiry.',
  },
  {
    question: 'Can you find a permanent live-in chef for our Surabaya home?',
    answer:
      'Yes. Our chef placement service operates in Surabaya. We conduct candidate screening, present profiles, coordinate trial sessions, and provide contract support. The timeline from inquiry to a placed chef is typically 2--4 weeks depending on brief specifics.',
  },
  {
    question: 'Which areas of Surabaya do you cover?',
    answer:
      'We cover all major residential and commercial areas: Pakuwon, Citraland, Darmo, Kertajaya, Galaxy, Ketintang, Surabaya Barat, and the surrounding corporate districts. Areas farther from central Surabaya may have a travel supplement.',
  },
  {
    question: 'Can you cater a large corporate event in Surabaya?',
    answer:
      'Yes. For corporate entertaining, client dinners, team events, and private launches in Surabaya, we provide chef teams, service staff, and full menu planning. Events from 10 to 150 guests. Contact us with your event details for a full proposal.',
  },
]

const relatedPages = [
  { label: 'Private Chef Jakarta', href: '/blog/private-chef-jakarta-complete-guide', desc: 'Private chef service in Jakarta' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'In-villa chef service across Bali' },
  { label: 'Chef Placement Agency Bali', href: '/blog/chef-placement-agency-bali', desc: 'Long-term chef recruitment and placement' },
  { label: 'Live-In Chef Bali', href: '/blog/live-in-chef-bali-hiring-guide', desc: 'Full-time live-in chef guide' },
  { label: 'Household Chef Bali', href: '/blog/household-chef-bali-hiring-guide', desc: 'Household chef hiring in Bali' },
  { label: 'Corporate Events Catering', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Corporate dining and event catering' },
]

export default function PrivateChefSurabayaGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-surabaya-guide"
      title="Private Chef Surabaya -- In-Home Chef Service for East Java | myCHEF"
      seoTitle="Private Chef Surabaya -- In-Home Chef Service and Corporate Catering in East Java"
      description="Private chef service in Surabaya. In-home dinners, weekly household cooking, live-in chef placement, and corporate event catering. Halal available. All Surabaya areas covered."
      seoDescription="Hire a private chef in Surabaya for in-home dinners, weekly household service, or corporate entertaining. Halal available. European, Indonesian, and Asian menus. Fast inquiry response."
      h1="Private Chef in Surabaya -- In-Home Chef Service for East Java"
      subtitle="Professional private chef and catering service across Surabaya's residential and corporate districts."
      heroImage="/images/blog/private-chef-surabaya.jpg"
      heroImageAlt="Professional Indonesian private chef preparing an elegant dinner in a modern Surabaya home kitchen"
      ogImage="/images/blog/private-chef-surabaya.jpg"
      canonicalUrl="https://mychef.id/blog/private-chef-surabaya-guide"
      keywords={[
        'private chef surabaya',
        'personal chef surabaya',
        'chef hire surabaya',
        'in home chef surabaya',
        'catering surabaya',
        'private dining surabaya',
        'household chef surabaya',
        'chef for villa surabaya',
        'corporate catering surabaya',
        'chef placement surabaya',
      ]}
      highlights={['Surabaya Coverage', 'Halal Available', 'Corporate and Residential', 'Live-In Placement']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Enquire About Surabaya Chef Service"
      ctaSubtext="Tell us your occasion, guest count, cuisine preference, and any dietary requirements -- we will confirm availability and send a proposal."
      extraJsonLd={[
        breadcrumbSchema('Private Chef Surabaya', 'https://mychef.id/blog/private-chef-surabaya-guide', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef in Surabaya -- In-Home Chef Service for East Java',
          description: 'Private chef service in Surabaya for in-home dinners, household cooking, and corporate events.',
          url: 'https://mychef.id/blog/private-chef-surabaya-guide',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/private-chef-surabaya.jpg',
        },
      ]}
    />
  )
}
