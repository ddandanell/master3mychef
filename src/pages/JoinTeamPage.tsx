import { ChefHat, Users, Award, Heart } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Join Us',
    title: 'Build Your Career with Bali\'s Premier Private Chef Service',
    body: `<p>myCHEF is growing — and we are looking for talented, passionate hospitality professionals to join our team. Chefs, servers, bartenders, event coordinators, and operations staff. If you care about food, service, and guest experience, we want to meet you.</p>
    <p>We invest in our people. Every chef undergoes 6+ months of in-house training. Every server learns our service standards. Every team member has a path to growth. Many of our lead chefs started as kitchen hands and rose through the ranks.</p>`,
    image: '/generated/staffing-hero.webp',
    imageAlt: 'myCHEF team in action',
  },
  {
    id: 'roles',
    type: 'features' as const,
    subtitle: 'Open Roles',
    title: 'Current Opportunities',
    features: [
      { icon: ChefHat, title: 'Junior Chef', desc: 'Entry-level kitchen position. Learn pasta, sauce work, and plating under senior chefs. Growth path to lead chef within 12–18 months.' },
      { icon: ChefHat, title: 'Lead Chef', desc: 'Lead villa dining experiences independently. Manage kitchen team, menu execution, and guest interaction. Minimum 2 years experience or myCHEF training program graduate.' },
      { icon: Users, title: 'Service Staff', desc: 'Professional table service for fine dining and events. Training in wine service, course pacing, and guest interaction.' },
      { icon: Users, title: 'Bartender / Mixologist', desc: 'Cocktail preparation and bar service for villa events. Knowledge of classic cocktails and creative mixology.' },
      { icon: Award, title: 'Event Coordinator', desc: 'Plan and execute weddings, corporate events, and celebrations. Client communication, vendor coordination, and on-site management.' },
      { icon: Heart, title: 'Operations Assistant', desc: 'Support scheduling, inventory, quality control, and team coordination. Organizational skills and attention to detail essential.' },
    ],
  },
  {
    id: 'why-join',
    type: 'content' as const,
    subtitle: 'Why myCHEF',
    title: 'Why Build Your Career With Us',
    body: `<ul>
      <li><strong>Training:</strong> 6+ months of structured in-house training for chefs. Ongoing development for all roles.</li>
      <li><strong>Growth:</strong> Clear promotion paths. Many lead chefs started as kitchen hands.</li>
      <li><strong>Culture:</strong> Respectful, professional, and guest-obsessed. We treat our team how we want them to treat guests.</li>
      <li><strong>Pay:</strong> Competitive salaries, performance bonuses, and tips. We pay on time, every time.</li>
      <li><strong>Environment:</strong> Work in Bali\'s most beautiful villas. No commissary kitchen — every event is a new setting.</li>
      <li><strong>Stability:</strong> Established company with 8+ years of operation. Consistent bookings year-round.</li>
    </ul>`,
    image: '/generated/staffing-kitchen.webp',
    imageAlt: 'myCHEF kitchen training',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Apply Now',
    title: 'Ready to Join the Team?',
    body: 'Send us your CV and a brief introduction via WhatsApp. We review every application and respond within 48 hours.',
  },
]

const FAQS = [
  { question: 'Do I need experience to apply?', answer: 'For junior chef and service roles, no — we train you. For lead chef and coordinator roles, yes — we require relevant experience or graduation from our training program.' },
  { question: 'What is the training program like?', answer: '6+ months of structured training covering technique, timing, presentation, service, and cleanup. You work alongside senior chefs and receive regular feedback. Only after demonstrating mastery do you lead solo events.' },
  { question: 'Where are you based?', answer: 'Our headquarters are in Denpasar, but our team works across Bali — Seminyak, Canggu, Ubud, Uluwatu, Sanur, and beyond.' },
  { question: 'Do you hire non-Indonesian staff?', answer: 'Our kitchen team is predominantly Indonesian. We occasionally hire specialists for specific roles. All positions require legal work authorization in Indonesia.' },
  { question: 'What are the working hours?', answer: 'Varies by role. Chefs typically work 8–12 hour shifts during events. Service staff work event-based shifts. We provide schedules in advance and respect time-off requests.' },
]

const RELATED_PAGES = [
  { label: 'About myCHEF', href: '/about', desc: 'Our story and mission.' },
  { label: 'Our Chefs', href: '/chefs', desc: 'Meet the culinary team.' },
  { label: 'Staffing Services', href: '/staffing', desc: 'Hire villa staff through us.' },
  { label: 'Private Chef Placement', href: '/staffing/private-chef-placement', desc: 'Full-time chef placements.' },
  { label: 'Contact', href: '/contact', desc: 'Get in touch with our team.' },
]

export default function JoinTeamPage() {
  return (
    <PremiumPage
      slug="join-our-team"
      title="Join Our Team"
      description="Open chef and hospitality roles at myCHEF — apply to join our growing team in Bali and Jakarta."
      h1="Build Your Career With Us"
      subtitle="Chefs, servers, bartenders, coordinators — join Bali's premier private chef service."
      heroImage="/generated/staffing-hero.webp"
      heroImageAlt="myCHEF hospitality team"
      ogImage="https://mychef.id/generated/staffing-hero.webp"
      keywords={['chef jobs bali', 'hospitality careers bali', 'private chef jobs']}
      highlights={['6-Month Training', 'Clear Growth Path', 'Competitive Pay', 'Beautiful Villa Venues']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Apply Now"
      ctaSubtext="Send your CV via WhatsApp. We respond within 48 hours."
    />
  )
}
