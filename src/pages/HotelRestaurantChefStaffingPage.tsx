import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Hotel and Restaurant Chef Staffing Bali -- F&B Staffing for Hospitality Operations',
    body: `Behind every hotel restaurant, boutique property, and hospitality group in Bali is a kitchen staffing challenge. Turnover is high, quality is inconsistent, and building the right culinary team from scratch in a competitive market takes time that operational teams rarely have.

myCHEF's hospitality staffing division connects hotels, resorts, restaurant groups, and F&B operators with professional culinary talent: executive chefs, sous chefs, pastry chefs, line cooks, and kitchen support. We place talent on a temporary, contract, or permanent basis depending on the operational need.

Our network covers chefs with backgrounds in international luxury hotels, Michelin-starred restaurants, resort groups, and independent fine dining establishments. We vet every candidate, match by cuisine specialisation and kitchen format, and can mobilise quickly for urgent operational needs.`,
  },
  {
    id: 'who-we-serve',
    type: 'content',
    title: 'Who We Place For',
    body: `**Boutique Hotels and Villas** -- Properties with in-house F&B who need to fill chef positions without the overhead of a full hospitality recruiter. Whether you need a single executive chef or a full kitchen brigade, we handle sourcing and initial vetting.

**Restaurant Groups** -- Multi-outlet restaurant operators who need consistent culinary talent across locations. Kitchen management, consistent cooking standards, and chefs who understand commercial kitchen operations at volume.

**Resorts and International Hotel Brands** -- Larger properties requiring executive-level culinary leadership (Executive Chef, Head of F&B), pastry department heads, or specialist chefs for specific restaurant concepts (Japanese, Italian, steakhouse, teppanyaki).

**Temporary and Event Coverage** -- Hotels and restaurants that need short-term coverage during peak periods (high season, events, convention catering), when a key team member is away, or during major menu transitions.

**Pop-Up and Concept Operations** -- New F&B concepts launching in Bali, international chefs bringing concepts to the island, and pop-up operators who need local culinary support with market knowledge and established supplier networks.`,
  },
  {
    id: 'roles',
    type: 'content',
    title: 'Roles We Place',
    body: `**Executive Chef** -- Senior culinary leadership with P&L responsibility. Candidates with hotel executive chef experience, the ability to manage a team, develop menus, and interact with ownership and management.

**Head Chef** -- Day-to-day culinary leadership. Strong technical cooking combined with team management, ordering, and consistency control.

**Sous Chef** -- Number two in the kitchen. Strong brigade leadership, the ability to run service independently, and the technical skills to deputise for the head chef.

**Chef de Partie** -- Station leads: grill, sauce, pastry, cold section. Experienced cooks who own their station and produce consistent output.

**Pastry Chef** -- Specialist dessert and baking talent. From hotel pastry operations to fine dining dessert programs, we have a strong pastry chef network in Bali.

**Line Cooks and Prep Cooks** -- Volume cooking talent for restaurants and hotels that need reliable, trained kitchen workers at production level.

**Specialty Cuisine Chefs** -- Japanese (sushi, ramen, robata), Italian, Indian, Middle Eastern, plant-based, raw food, Southeast Asian -- specialty chefs for concept restaurants requiring authentic culinary background in a specific tradition.`,
  },
  {
    id: 'process',
    type: 'content',
    title: 'Our Placement Process',
    body: `**1. Brief** -- You tell us the role, your kitchen format, your cuisine style, the team size, and your timeline. We also want to understand your guest profile and the standard of food you produce -- this shapes who we recommend.

**2. Candidate Selection** -- We identify candidates from our network who match the brief. For senior roles, we typically present 2--3 vetted candidates with profiles covering background, cuisine specialisation, references, and availability.

**3. Interview and Trial** -- We coordinate interviews and, for permanent or long-term placements, a kitchen trial day where you can assess the candidate in your actual kitchen environment.

**4. Onboarding** -- For placements confirmed, we handle the administrative side of onboarding in Bali: documentation, work authorisation for foreign nationals where applicable, and introduction to your team.

**5. Ongoing Support** -- For retained clients, we provide ongoing support: handling replacement requests, filling emergency gaps, and maintaining a bench of pre-vetted candidates for fast mobilisation.`,
  },
  {
    id: 'talent-network',
    type: 'content',
    title: 'Our Culinary Talent Network in Bali',
    body: `myCHEF has been building a professional chef network in Bali since the company's founding. Our network is not a directory -- it is a relationship-based community of vetted culinary professionals, many of whom we have placed in private dining engagements and who have demonstrated their capability firsthand.

**International talent:** Our network includes chefs who relocated to Bali from Europe, Australia, Japan, the United States, and across Asia. International culinary talent looking for the Bali lifestyle is abundant; our job is to match that talent with the right F&B operation.

**Indonesian culinary talent:** Balinese and Indonesian chefs with professional training -- Hotel and Tourism School graduates, chefs who have worked through the ranks at international hotel properties in Bali and abroad. The island has a deep pool of trained professional Indonesian culinary talent.

**Specialist networks:** For specific requirements -- a certified sushi chef, a chocolatier, a pastry chef with hotel experience -- we go beyond our active network to source from the broader professional hospitality community across Indonesia.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Staffing Fees and Placement Terms',
    body: `Our hospitality staffing fees are structured to reflect the type of engagement:

**Permanent Placement** -- A one-time placement fee based on a percentage of the placed candidate's annual salary. This covers sourcing, vetting, the trial period, and post-placement support. Replacement guarantee included for 3 months.

**Contract and Fixed-Term Placement** -- A management fee structure for placements with a defined end date. Suitable for seasonal positions, maternity cover, or major event periods.

**Temporary and Emergency Coverage** -- Day rate or weekly rate for urgent coverage. We can mobilise within 24--48 hours for most kitchen roles. Suitable for sudden vacancy, sick leave coverage, or peak period surge.

**Retained Talent Service** -- For hotels and restaurant groups with ongoing staffing needs, we offer a retained arrangement: priority access to our network, faster mobilisation times, and reduced per-placement fees in exchange for exclusivity.

Contact us to discuss your specific requirements and receive a fee structure relevant to your operation.`,
  },
]

const faqs = [
  {
    question: 'Can you place a chef at short notice for an urgent operational gap?',
    answer:
      'Yes. For line cook and junior chef positions, we can often mobilise within 24 hours. For head chef and sous chef positions, 48--72 hours is more typical. For executive chef placements, a week or more allows for proper candidate review and trial. Contact us directly via WhatsApp for urgent requests.',
  },
  {
    question: 'Do you place foreign nationals in Bali kitchens?',
    answer:
      'We can source international talent and facilitate introductions. Work authorisation and visa requirements for foreign nationals in Indonesia are the responsibility of the employer. We can provide guidance on the general requirements and connect you with appropriate administrative support, but we do not act as a visa sponsor or immigration agent.',
  },
  {
    question: 'What cuisine specialisations do you have in your network?',
    answer:
      'We have strong networks in European fine dining, Japanese (sushi, ramen, omakase), Italian, Balinese and Indonesian, Southeast Asian, plant-based and wellness cooking, pastry and boulangerie, and general hotel kitchen operations. For more niche cuisines, we may need additional time to source appropriate candidates.',
  },
  {
    question: 'Do you offer a replacement guarantee for permanent placements?',
    answer:
      'Yes. Our permanent placements include a 3-month replacement guarantee. If the placed candidate leaves or does not perform to the agreed standard within 3 months, we will conduct a replacement search at no additional fee.',
  },
  {
    question: 'Can you staff a full kitchen brigade for a new restaurant launch?',
    answer:
      "Yes. We have successfully placed full brigades for new F&B concepts in Bali: executive chef, sous chef, chef de partie stations, and pastry. A full brigade placement is treated as a project -- we work with the ownership team on the concept, cuisine direction, and team structure before sourcing candidates.",
  },
  {
    question: 'What is different about myCHEF staffing compared to a general recruitment agency?',
    answer:
      "We are a culinary-specific operation with a direct relationship with our chef network -- we know many of our candidates from having worked with them in private dining engagements. We assess actual cooking skill, not just CVs. We understand the difference between a hotel kitchen format and a restaurant brigade format, and we match accordingly.",
  },
]

const relatedPages = [
  { label: 'Chef Placement Agency Bali', href: '/staffing/private-chef-placement', desc: 'Private household chef placement' },
  { label: 'Live-In Chef Bali Hiring Guide', href: '/staffing', desc: 'Guide to hiring a live-in private chef' },
  { label: 'Villa Staff Bali', href: '/staffing/villa-staff', desc: 'Full villa staff hiring guide' },
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Event staffing for Bali functions' },
  { label: 'Staffing', href: '/staffing', desc: 'myCHEF staffing and placement services' },
]

export default function HotelRestaurantChefStaffingPage() {
  return (
    <PremiumPage
      slug="blog/hotel-restaurant-chef-staffing"
      title="Hotel and Restaurant Chef Staffing Bali -- F&B Culinary Recruitment | myCHEF"
      seoTitle="Hotel and Restaurant Chef Staffing Bali -- F&B Culinary Recruitment"
      description="Chef staffing for hotels, resorts, and restaurants in Bali. Executive chefs, sous chefs, pastry chefs, line cooks."
      seoDescription="Hotel restaurant chef staffing Bali. Culinary recruitment for F&B operations. Executive chefs, sous chefs, pastry chefs, specialist cuisine talent."
      h1="Hotel & Restaurant Chef Staffing Bali — F&B Hiring Guide"
      subtitle="Executive chefs to line cooks. Temporary coverage to permanent placement. Bali's hospitality staffing specialists."
      heroImage="/images/blog/hotel-restaurant-chef-staffing.jpg"
      heroImageAlt="Professional Indonesian chef in uniform overseeing a hotel restaurant kitchen brigade in Bali"
      ogImage="/images/blog/hotel-restaurant-chef-staffing.jpg"
      canonicalUrl="https://mychef.id/blog/hotel-restaurant-chef-staffing"
      keywords={[
        'hotel chef staffing bali',
        'restaurant chef hire bali',
        'f&b staffing bali',
        'culinary recruitment bali',
        'chef placement bali',
        'executive chef bali',
        'hospitality staffing bali',
        'kitchen staff bali',
        'chef recruitment indonesia',
        'temporary chef bali',
      ]}
      highlights={['Executive to Line Cook', 'Temporary and Permanent', '24hr Emergency Cover', 'Vetted Network']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Discuss Your Staffing Requirement"
      ctaSubtext="Tell us the role, your operation type, cuisine format, and timeline. We will respond with available candidates and a fee structure within 24 hours."
      extraJsonLd={[
        breadcrumbSchema('Hotel Restaurant Chef Staffing Bali', 'https://mychef.id/blog/hotel-restaurant-chef-staffing', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Hotel and Restaurant Chef Staffing Bali -- F&B Culinary Recruitment',
          description: 'Chef staffing for hotels, resorts, and restaurants in Bali. Temporary, contract, and permanent culinary talent placement.',
          url: 'https://mychef.id/blog/hotel-restaurant-chef-staffing',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/hotel-restaurant-chef-staffing.jpg',
        },
      ]}
    />
  )
}
