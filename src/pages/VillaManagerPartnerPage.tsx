import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Villa Manager Partnerships',
    title: 'Partner With myCHEF — Elevate Your Guest Experience and Earn Commission',
    body: `<p>If you manage a villa, villa complex, or accommodation portfolio in Bali, partnering with myCHEF gives your guests access to the island's premium private chef and in-villa staffing service — while generating a consistent commission revenue stream for your business.</p>
    <p>Our partnership programme is designed for villa managers who care about guest experience as much as we do. We are not a marketplace platform — we are an operations-focused service company with trained chefs, rigorous quality standards, and a team that coordinates directly with your property.</p>`,
  },
  {
    id: 'what-you-get',
    type: 'content',
    subtitle: 'Partnership Benefits',
    title: 'What Villa Manager Partners Get From myCHEF',
    body: `<p>Our partnership programme includes:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Commission on every booking:</strong> A fixed percentage of the service fee for every guest booking originating from your referral, paid monthly.</li>
      <li><strong>Dedicated partner contact:</strong> A named myCHEF operations contact. Direct WhatsApp access for booking coordination and issue resolution.</li>
      <li><strong>Priority scheduling:</strong> Partner villa bookings receive scheduling priority during peak seasons.</li>
      <li><strong>Guest-ready materials:</strong> A branded digital welcome pack and menu guide you can share with incoming guests.</li>
      <li><strong>Chef briefing on your property:</strong> For new partner villas, we conduct a property walkthrough so the assigned chef team knows the kitchen before arriving for a guest booking.</li>
    </ul>`,
  },
  {
    id: 'services',
    type: 'content',
    subtitle: 'Services Available',
    title: 'What myCHEF Offers Your Villa Guests',
    body: `<p>As a partner villa, your guests have access to myCHEF's full service portfolio:</p>
    <p><strong>Private chef dining:</strong> From casual family meals to eight-course fine dining tasting menus. <a href="/services" class="text-[#7E6410] hover:underline font-medium">View our service packages</a>.</p>
    <p><strong>Floating breakfast:</strong> One of Bali's most-requested villa experiences. See our <a href="/catering/floating-breakfast" class="text-[#7E6410] hover:underline font-medium">floating breakfast guide</a>.</p>
    <p><strong>In-villa staffing:</strong> Professional waiters, bartenders, mixologists, sommeliers, and butlers for events and extended villa stays.</p>
    <p><strong>Cooking classes:</strong> Interactive culinary experiences led by a myCHEF chef.</p>
    <p><strong>Staffing placements:</strong> Monthly chef arrangements, live-in chef placements. See our <a href="/staffing" class="text-[#7E6410] hover:underline font-medium">staffing services</a>.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content',
    subtitle: 'How the Partnership Works',
    title: 'Simple Referral, Professional Delivery, Monthly Commission',
    body: `<p><strong>Step 1: Onboarding.</strong> We schedule a brief call with your property manager, learn about your villa(s) and guest profile, and conduct a kitchen walkthrough if applicable. You receive your referral link and guest materials.</p>
    <p><strong>Step 2: Guest referral.</strong> When a guest asks about private dining or staffing services, you share the myCHEF WhatsApp contact or referral link. Our team handles the booking, menu consultation, scheduling, and delivery.</p>
    <p><strong>Step 3: Service delivery.</strong> myCHEF coordinates directly with the guest. Our chef arrives, delivers the service, and departs leaving the kitchen as they found it. Villa staff are not required to assist.</p>
    <p><strong>Step 4: Commission payment.</strong> At the end of each month, you receive a booking summary and commission payment for all bookings attributed to your referral.</p>`,
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
    answer: "No. There is no fee, minimum commitment, or exclusive arrangement required to participate. The programme is free to join.",
  },
  {
    question: "How is commission calculated and when is it paid?",
    answer: "Commission is a fixed percentage of the net service fee for each booking attributed to your referral. Exact rates are agreed during onboarding. Payment is made monthly via bank transfer.",
  },
  {
    question: "What if a guest has a problem with a myCHEF service at my villa?",
    answer: "myCHEF takes full responsibility for the quality of service delivery. Complaints are handled directly between the guest and myCHEF.",
  },
  {
    question: "Do you offer exclusive partnerships, or do you work with multiple villas in the same area?",
    answer: "We work with multiple partner villas in each area. However, priority scheduling is reserved for partner villas during peak periods.",
  },
  {
    question: "Can I refer guests for staffing placements as well as one-time bookings?",
    answer: "Yes. Partner villa managers who refer guests seeking longer-term staffing arrangements also earn a referral commission on completed placements.",
  },
]

export default function VillaManagerPartnerPage() {
  return (
    <PremiumPage
      slug="partner"
      title="Villa Manager Partnership — Earn Commission With myCHEF Private Chef Referrals"
      description="Bali villa managers: partner with myCHEF to offer guests private chef dining, floating breakfasts, and event staffing. Earn referral commission."
      h1="Villa Manager Partnership — Earn Commission With myCHEF Private Chef Referrals"
      subtitle="A free-to-join referral programme for Bali villa managers and property management companies"
      heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
      heroImageAlt="myCHEF private chef serving guests at a luxury Bali villa"
      ogImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80"
      keywords={['villa manager partnership bali', 'bali villa chef referral', 'private chef villa commission', 'bali villa manager programme']}
      highlights={['Free to Join', 'Monthly Commission', 'Priority Scheduling', 'No Exclusivity']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Private Chef Services', href: '/services', desc: 'Full overview of myCHEF service packages for villa guests.' },
        { label: 'Floating Breakfast', href: '/catering/floating-breakfast', desc: 'The most-requested villa experience for international guests.' },
        { label: 'Staffing Services', href: '/staffing', desc: 'Long-term chef and villa staff placement services.' },
        { label: 'Pricing Guide', href: '/pricing', desc: 'Full pricing breakdown for all myCHEF services.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Villa Manager Partner', 'https://mychef.id/partner'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
      ]}
      ctaText="Start the Conversation"
      ctaSubtext="We onboard new villa partners in less than a week. No commitment required."
    />
  )
}
