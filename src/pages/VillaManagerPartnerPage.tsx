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
  { question: 'How fast do you reply?', answer: 'Usually within 2 hours on WhatsApp during operating hours.' },
  { question: 'Best way to book?', answer: 'WhatsApp with date, guests, area and service — or <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Phone number?', answer: 'Published sitewide — WhatsApp +62 896-7407-2020.' },
  { question: 'Email?', answer: 'bali@mychef.id for written requests and invoices.' },
  { question: 'Office location?', answer: 'Denpasar, Bali — full address on the site footer and contact pages.' },
  { question: 'Languages?', answer: 'English and Indonesian service.' },
  { question: 'Corporate enquiries?', answer: 'Yes — mention NPWP needs and multi-day schedule.' },
  { question: 'Partner / villa manager enquiries?', answer: 'Yes — <a href="/partner">partner</a> pathways.' },
  { question: 'Urgent same-day requests?', answer: 'Often possible — message ASAP with location.' },
  { question: 'What to include in first message?', answer: 'Date, villa area, guest count, service type, diets.' },
  { question: 'Can you call me?', answer: 'WhatsApp first is fastest; calls arranged when needed.' },
  { question: 'FAQ hub?', answer: 'Yes — <a href="/faq">FAQ</a>.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
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
