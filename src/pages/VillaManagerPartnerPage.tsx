import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Villa Manager Partnerships',
    title: 'Partner With myCHEF — Elevate Your Guest Experience and Earn Commission',
    body: `<p>If you manage a villa, villa complex, or accommodation portfolio in Bali or Jakarta, partnering with myCHEF gives your guests access to the island's premium private chef and in-villa staffing service — while generating a consistent commission revenue stream for your business.</p>
    <p>Villa guests increasingly expect more than great accommodation. They want curated experiences delivered at their doorstep: private chef dinners, cocktail hours with professional bartenders, floating breakfasts, and cooking classes. When your villa does not offer these services in-house, the question is who you recommend. A myCHEF partnership ensures you have a trusted, premium answer — and earn a return every time your guests book.</p>
    <p>Our partnership programme is designed for villa managers who care about guest experience as much as we do. We are not a marketplace platform — we are an operations-focused service company with trained chefs, rigorous quality standards, and a team that coordinates directly with your property. When you refer a guest to myCHEF, you are referring them to a team that will perform to the standard your villa represents.</p>`,
  },
  {
    id: 'what-you-get',
    type: 'content',
    subtitle: 'Partnership Benefits',
    title: "What Villa Manager Partners Get From myCHEF",
    body: `<p>Our partnership programme is built around a straightforward value exchange: you refer guests, we deliver exceptional service, and we both share in the result. Here is what the programme includes:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Commission on every booking:</strong> A fixed percentage of the service fee for every guest booking originating from your referral. Commission is tracked and paid monthly. Rates are discussed during onboarding based on your referral volume.</li>
      <li><strong>Dedicated partner contact:</strong> A named myCHEF operations contact for your property. Direct WhatsApp access for booking coordination, scheduling, and issue resolution — not a generic support queue.</li>
      <li><strong>Priority scheduling:</strong> Partner villa bookings receive scheduling priority during peak seasons. Your guests are not competing with general enquiries for chef availability.</li>
      <li><strong>Guest-ready materials:</strong> A branded digital welcome pack and menu guide you can share with incoming guests. Available in English — additional languages available on request.</li>
      <li><strong>Chef briefing on your property:</strong> For new partner villas, we conduct a property walkthrough with the assigned chef team so they know the kitchen, the outdoor dining setup, and any villa-specific requirements before they arrive for a guest booking.</li>
      <li><strong>Referral tracking:</strong> A simple monthly report showing bookings attributed to your villa, revenue generated, and commission due.</li>
    </ul>`,
  },
  {
    id: 'services',
    type: 'content',
    subtitle: 'Services Available',
    title: "What myCHEF Offers Your Villa Guests",
    body: `<p>As a partner villa, your guests have access to myCHEF's full service portfolio. The most frequently booked services through villa manager partnerships are:</p>
    <p><strong>Private chef dining:</strong> The cornerstone of our service. A professional chef — sourcing, cooking, plating, serving, and cleaning up — for dinners ranging from casual family meals to eight-course fine dining tasting menus. <a href="/services" class="text-[#C5A028] hover:underline font-medium">View our service packages</a>.</p>
    <p><strong>Floating breakfast:</strong> An Instagram-worthy breakfast experience delivered to the villa pool — fresh fruit arrangements, pastries, eggs, juices, and optional champagne. One of Bali's most-requested villa experiences. Learn more about our <a href="/blog/floating-breakfast-bali" class="text-[#C5A028] hover:underline font-medium">floating breakfast service</a>.</p>
    <p><strong>In-villa staffing:</strong> Professional waiters, bartenders, mixologists, sommeliers, and butlers provided for events and extended villa stays. Ideal for weddings, corporate retreats, and larger villa parties.</p>
    <p><strong>Cooking classes:</strong> Interactive culinary experiences led by a myCHEF chef — guests learn to prepare Balinese dishes, then eat what they made. Popular with families, couples, and food-enthusiast guests.</p>
    <p><strong>Catering for villa events:</strong> Wedding catering, corporate event catering, and villa party catering for groups from 10 to 200+ guests. Full kitchen team, service staff, and equipment coordination.</p>
    <p><strong>Staffing placements:</strong> For villa managers seeking longer-term staffing solutions — monthly chef arrangements, live-in chef placements, and villa cook sourcing. See our <a href="/staffing" class="text-[#C5A028] hover:underline font-medium">staffing services</a>.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content',
    subtitle: 'How the Partnership Works',
    title: 'Simple Referral, Professional Delivery, Monthly Commission',
    body: `<p>The myCHEF villa manager partnership is designed to add zero operational burden to your property management responsibilities. Here is how the process works in practice:</p>
    <p><strong>Step 1: Onboarding.</strong> We schedule a brief call or meeting with your property manager. We learn about your villa(s), typical guest profile, and peak booking periods. We conduct a kitchen walkthrough if your villa is in the Canggu, Seminyak, Ubud, or Nusa Dua area. You receive your referral link and guest materials.</p>
    <p><strong>Step 2: Guest referral.</strong> When a guest asks about private dining, floating breakfast, or staffing services, you share the myCHEF WhatsApp contact or referral link. That is all you need to do. Our team handles the booking, menu consultation, scheduling, and service delivery.</p>
    <p><strong>Step 3: Service delivery.</strong> myCHEF coordinates directly with the guest. Our chef or service team arrives at the agreed time, delivers the service, and departs leaving the kitchen and dining area as they found it. Villa staff are not required to assist.</p>
    <p><strong>Step 4: Commission payment.</strong> At the end of each month, you receive a booking summary and commission payment for all bookings attributed to your referral. Payment is made via bank transfer to your nominated account.</p>`,
  },
  {
    id: 'ideal-partner',
    type: 'content',
    subtitle: 'Who Should Apply',
    title: 'Is Your Villa a Good Fit for the myCHEF Partnership Programme?',
    body: `<p>The myCHEF partnership programme is best suited to the following property types:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Luxury and semi-luxury private villa rentals:</strong> Properties in the IDR 3,000,000+ per night range, where guests have a lifestyle and expectation that aligns with private chef and premium staffing services.</li>
      <li><strong>Villa management companies:</strong> Agencies managing 5 or more properties benefit from portfolio-wide referral tracking and a single operations contact for all bookings across their portfolio.</li>
      <li><strong>Boutique villas with no in-house kitchen staff:</strong> Properties without a permanent villa cook benefit significantly from a trusted referral — guests ask about private dining constantly, and having a professional answer builds confidence.</li>
      <li><strong>Villas serving international guests:</strong> Our chefs and service team communicate fluently in English and are experienced with the expectations of Western, Middle Eastern, and East Asian guests.</li>
    </ul>
    <p style="margin-top:0.75rem;">We currently operate across Canggu, Seminyak, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, and Jakarta. If your property is in one of these areas — or planning to expand there — we would welcome a conversation.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Start Partnering',
    title: 'Become a myCHEF Villa Manager Partner',
    body: 'Send us a message to start the partnership conversation. Onboarding takes less than a week and requires no investment from you.',
    primaryAction: { label: 'Contact Our Team', href: '/contact' },
    secondaryAction: { label: 'View Our Services', href: '/services' },
  },
]

const FAQS = [
  {
    question: "Is there a cost to join the myCHEF villa manager partnership programme?",
    answer: "No. There is no fee, minimum commitment, or exclusive arrangement required to participate. The programme is free to join — you refer guests, we handle delivery and administration, and you earn commission on completed bookings."
  },
  {
    question: "How is commission calculated and when is it paid?",
    answer: "Commission is a fixed percentage of the net service fee (excluding ingredients cost) for each booking attributed to your referral. Exact rates are agreed during onboarding and depend on expected referral volume and property type. Payment is made monthly via bank transfer, accompanied by a booking summary report."
  },
  {
    question: "What if a guest has a problem with a myCHEF service at my villa?",
    answer: "myCHEF takes full responsibility for the quality of service delivery. If a guest has a complaint, it is handled directly between the guest and myCHEF — not routed through your property management. You will be kept informed of any issue at your villa and we will act to resolve it without creating work for your team."
  },
  {
    question: "Do you offer exclusive partnerships, or do you work with multiple villas in the same area?",
    answer: "We work with multiple partner villas in each area — exclusivity is not part of our standard programme. However, priority scheduling is reserved for partner villas, meaning your guests receive preferential chef allocation during peak periods. For very high-volume referrers, dedicated chef arrangements can be discussed."
  },
  {
    question: "Can I refer guests for staffing placements (monthly chef, live-in chef) as well as one-time bookings?",
    answer: "Yes. Partner villa managers who refer guests seeking longer-term staffing arrangements — monthly chef contracts, live-in household chef placements, or ongoing villa staff sourcing — also earn a referral commission on completed placements. Our staffing division handles this separately from single-event bookings."
  },
  {
    question: "We manage villas outside of Bali — can we still partner with myCHEF?",
    answer: "Currently, our primary operating area is Bali (all major tourist areas) and Jakarta. We are expanding to Lombok and the Gili Islands — if your properties are in those areas, express your interest and we will contact you as coverage becomes available. Contact us with your location and we will advise on current coverage."
  },
]

const jsonLd = [
  breadcrumbSchema([
    { name: 'Home', url: 'https://mychef.id/' },
    { name: 'Partner', url: 'https://mychef.id/partner' },
  ]),
  faqPageSchema(FAQS),
]

export default function VillaManagerPartnerPage() {
  return (
    <PremiumPage
      title="Villa Manager Partnership — Earn Commission With myCHEF Private Chef Referrals"
      description="Bali villa managers: partner with myCHEF to offer guests private chef dining, floating breakfasts, and event staffing. Earn referral commission. No setup cost, no exclusivity required."
      heroImage="/images/hero-villa-service.jpg"
      heroAlt="myCHEF private chef serving guests at a luxury Bali villa"
      sections={SECTIONS}
      faqs={FAQS}
      jsonLd={jsonLd}
    />
  )
}
