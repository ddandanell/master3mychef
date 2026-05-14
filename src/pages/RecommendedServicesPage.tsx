import { Music, Camera, Car, Flower2, Tent, Wine } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'

const PARTNERS = [
  { icon: Music, name: 'Bali DJ Services', category: 'Entertainment', desc: 'Professional DJs for villa parties, weddings, and corporate events. Sound systems included.', contact: 'Contact for referral' },
  { icon: Camera, name: 'Bali Event Photography', category: 'Photography', desc: 'Documentary-style photography for private dinners, weddings, and retreats. Discreet and professional.', contact: 'Contact for referral' },
  { icon: Car, name: 'Bali Luxury Transport', category: 'Transport', desc: 'Private drivers, luxury car rentals, and group transport for events and airport transfers.', contact: 'Contact for referral' },
  { icon: Flower2, name: 'Bali Floral Design', category: 'Decor', desc: 'Tropical floral arrangements, tablescapes, and venue decoration for events of all sizes.', contact: 'Contact for referral' },
  { icon: Tent, name: 'Bali Event Rentals', category: 'Equipment', desc: 'Marquees, lighting, furniture, and specialty equipment for villa events and weddings.', contact: 'Contact for referral' },
  { icon: Wine, name: 'Bali Wine & Spirits', category: 'Beverages', desc: 'Curated wine selections, cocktail ingredients, and premium spirits for private events.', contact: 'Contact for referral' },
]

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Trusted Partners',
    title: 'Recommended Services for Your Bali Event',
    body: `<p>Over eight years of villa events, we have built relationships with Bali\'s best service providers. These are the DJs, photographers, florists, and transport companies we trust — because we have seen them deliver under pressure, adapt to villa environments, and treat guests with the same care we do.</p>
    <p>We do not take referral fees. We recommend them because they make our events better. When you book myCHEF for catering, we can coordinate with these partners to deliver a seamless, full-service experience.</p>`,
    image: '/generated/aura-setup.webp',
    imageAlt: 'Bali event setup with trusted partners',
  },
  {
    id: 'partners',
    type: 'features' as const,
    subtitle: 'Our Network',
    title: 'Services We Recommend',
    features: PARTNERS.map(p => ({ icon: p.icon, title: p.name, desc: p.desc })),
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'Coordination',
    title: 'We Coordinate Everything',
    body: `<p>When you book myCHEF as your primary caterer, we become your event coordinator. We liaise with DJs, photographers, florists, and rental companies on your behalf — so you have one point of contact, not six.</p>
    <p>We create shared timelines, coordinate arrivals and setup, and troubleshoot in real-time. This is how villa events run smoothly. This is why hosts choose myCHEF.</p>`,
    image: '/generated/aura-team.webp',
    imageAlt: 'myCHEF event coordination team',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Full-Service Events',
    title: 'Let Us Coordinate Your Entire Event',
    body: 'Tell us your vision. We will handle the catering, coordinate the partners, and deliver a seamless experience.',
  },
]

const FAQS = [
  { question: 'Do you charge referral fees?', answer: 'No. We recommend these partners because they deliver quality, not because they pay us. Our only interest is making your event exceptional.' },
  { question: 'Can I use my own vendors?', answer: 'Absolutely. These are recommendations, not requirements. If you have preferred vendors, we are happy to coordinate with them.' },
  { question: 'Do you guarantee their work?', answer: 'We guarantee our own catering and service. For partner services, we facilitate introductions and coordination but the contractual relationship is between you and the partner.' },
]

const RELATED_PAGES = [
  { label: 'Events', href: '/events', desc: 'Weddings, retreats, and celebrations.' },
  { label: 'Wedding Catering', href: '/events/weddings', desc: 'Full-service wedding catering.' },
  { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Executive dining and team events.' },
  { label: 'Villa Parties', href: '/events/villa-parties', desc: 'Private villa celebrations.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Custom event proposal.' },
  { label: 'Contact', href: '/contact', desc: 'Speak with our event team.' },
]

export default function RecommendedServicesPage() {
  return (
    <PremiumPage
      slug="recommended-services"
      title="Recommended Services in Bali"
      description="Our trusted partners for DJs, decor, photography, transport, and other event services in Bali."
      h1="Trusted Partners for Your Bali Event"
      subtitle="DJs, photographers, florists, transport — the partners we trust because we have seen them deliver."
      heroImage="/generated/aura-setup.webp"
      heroImageAlt="Bali event setup"
      ogImage="https://mychef.id/generated/aura-setup.webp"
      keywords={['bali event services', 'bali wedding vendors', 'bali event partners']}
      highlights={['No Referral Fees', 'Vetted Partners', 'Full Coordination', '8+ Years Experience']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Plan My Event"
      ctaSubtext="Full-service event coordination. One point of contact."
    />
  )
}
