import { Leaf, Users, Clock, Heart, Sun, Coffee } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Retreat Catering',
    title: 'Multi-Day Catering for Yoga, Wellness & Corporate Retreats',
    body: `<p>Retreats are not single events — they are journeys. And the food should support that journey. We provide <a href="/catering" class="text-[#7E6410] hover:underline font-medium">multi-day catering</a> for yoga retreats, wellness retreats, and corporate offsites across <a href="/locations/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud</a> and across Bali — full-board menus, dietary flexibility, and on-site coordination.</p>
    <p>We understand retreat dynamics: early morning yoga sessions require light, energizing breakfasts. Long workshop days need sustaining lunches. Evening ceremonies call for nourishing, communal dinners. Our <a href="/chefs" class="text-[#7E6410] hover:underline font-medium">retreat specialist chefs</a> design menus that match the rhythm of your retreat.</p>`,
    image: '/generated/mychef-experience-bali-hero-retreats.webp',
    imageAlt: 'Wellness retreat dining in Bali',
  },
  {
    id: 'offerings',
    type: 'features' as const,
    subtitle: 'What We Offer',
    title: 'Retreat Catering Packages',
    features: [
      { icon: Sun, title: 'Full-Board Packages', desc: 'Breakfast, lunch, and dinner for the duration of your retreat. Menus designed around your schedule and dietary philosophy.' },
      { icon: Leaf, title: 'Plant-Forward Menus', desc: 'Vegetarian, vegan, and raw options that do not feel like compromises. Creative, satisfying, and aligned with wellness principles.' },
      { icon: Coffee, title: 'Coffee & Juice Bars', desc: 'Fresh-pressed juices, smoothies, and specialty coffee service. Perfect for morning breaks and afternoon pick-me-ups.' },
      { icon: Heart, title: 'Dietary Flexibility', desc: 'Gluten-free, dairy-free, ayurvedic, low-FODMAP — we accommodate every dietary need without fuss or extra charges.' },
      { icon: Users, title: 'On-Site Coordination', desc: 'Our team manages kitchen setup, service timing, and dietary tracking. You focus on your retreat. We handle the food.' },
      { icon: Clock, title: 'Flexible Timing', desc: 'Early breakfasts before sunrise yoga. Late dinners after evening ceremonies. We adapt to your retreat schedule, not the other way around.' },
    ],
  },
  {
    id: 'sample-menu',
    type: 'content' as const,
    subtitle: 'Sample Menu',
    title: 'A Day of Retreat Dining',
    body: `<p><strong>Breakfast (7:00 AM):</strong> Tropical fruit platter, chia pudding with coconut milk, fresh-baked sourdough with avocado, turmeric latte, and cold-pressed green juice.</p>
    <p><strong>Mid-Morning Snack (10:30 AM):</strong> Smoothie bowls with dragon fruit, banana, and granola. Herbal tea station.</p>
    <p><strong>Lunch (1:00 PM):</strong> Nourishing Buddha bowls — quinoa, roasted vegetables, tahini dressing, grilled tempeh. Fresh young coconut water.</p>
    <p><strong>Afternoon Tea (4:00 PM):</strong> Raw energy balls, herbal infusions, and fresh tropical fruits.</p>
    <p><strong>Dinner (7:00 PM):</strong> Communal long-table dining — <a href="/blog/bali-catering-menu" class="text-[#7E6410] hover:underline font-medium">Balinese nasi campur</a> with vegan options, grilled local fish, seasonal vegetables, and coconut sambal. Dessert: black rice pudding with mango.</p>`,
    image: '/generated/mychef-events-bali-retreat-table.webp',
    imageAlt: 'Retreat dining table with healthy food',
  },
  {
    id: 'testimonials',
    type: 'testimonials' as const,
    subtitle: 'Retreat Hosts',
    title: 'What Retreat Organizers Say',
    testimonials: [
      { name: 'Sarah J.', location: 'Yoga Retreat Organizer, Ubud', text: 'We have worked with many caterers in Bali. myCHEF is the only one that truly understands retreat dynamics. The food supported our program instead of distracting from it.', rating: 5 },
      { name: 'David K.', location: 'Corporate Retreat Planner', text: 'Three days of flawless catering for 40 executives. Dietary restrictions handled without a single complaint. The team was invisible when they needed to be and present when it mattered.', rating: 5 },
    ],
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Retreat',
    title: 'Let Us Fuel Your Retreat Experience',
    body: 'Tell us your retreat dates, guest count, and dietary philosophy. We will design a custom catering proposal within 24 hours.',
  },
]

const FAQS = [
  { question: 'What types of retreats do you cater?', answer: 'Yoga retreats, wellness retreats, meditation retreats, corporate offsites, team-building retreats, and spiritual gatherings. We adapt our service style to match the energy of your retreat.' },
  { question: 'Can you accommodate strict dietary requirements?', answer: 'Absolutely. Vegan, raw, gluten-free, dairy-free, ayurvedic, low-FODMAP — we have experience with all major dietary frameworks. Just share your requirements when booking.' },
  { question: 'How far in advance should I book retreat catering?', answer: '4+ weeks is ideal for multi-day retreats. This allows us to plan menus, source specialty ingredients, and coordinate staffing. For smaller groups, 2 weeks may suffice.' },
  { question: 'Do you provide service staff for retreats?', answer: 'Yes. We provide chefs, kitchen assistants, and service staff as needed. For larger retreats, we can also provide bartenders and event coordinators.' },
  { question: 'Can you set up a juice or smoothie bar?', answer: 'Yes. Fresh-pressed juice bars, smoothie stations, and specialty coffee service are popular additions to retreat catering. We source local tropical fruits and organic ingredients.' },
  { question: 'What is the pricing for retreat catering?', answer: 'From IDR 350,000 per person per day for full-board packages. Pricing varies based on menu complexity, dietary requirements, and staffing needs. We provide detailed quotes within 24 hours.' },
]

const RELATED_PAGES = [
  { label: 'Catering', href: '/catering', desc: 'Full-service villa catering options.' },
  { label: 'Events', href: '/events', desc: 'Weddings, birthdays, and celebrations.' },
  { label: 'Corporate Events', href: '/events/corporate-events', desc: 'Executive dining and team events.' },
  { label: 'Wellness Menus', href: '/menus/vegan', desc: 'Plant-based and wellness-focused menus.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Custom proposal within 24 hours.' },
  { label: 'Contact', href: '/contact', desc: 'Speak with our retreat specialist.' },
]

export default function RetreatsPage() {
  return (
    <PremiumPage
      slug="retreats"
      title="Retreat Catering in Bali"
      description="Multi-day catering for yoga retreats, wellness retreats, and corporate offsites across Bali — full-board menus, dietary flexibility, and on-site coordination."
      seoTitle="Retreat Catering Bali | Wellness & Yoga Retreats | myCHEF.id"
      seoDescription="Nourishing retreat menus and private chef services for wellness retreats across Bali. Dietary-coded, locally sourced."
      canonicalUrl="https://mychef.id/retreats"
      h1="Retreat Catering in Bali"
      subtitle="Full-board menus, dietary flexibility, and on-site coordination for yoga, wellness, and corporate retreats."
      heroImage="/generated/mychef-experience-bali-hero-retreats.webp"
      heroImageAlt="Wellness retreat dining in Bali"
      ogImage="https://mychef.id/generated/mychef-experience-bali-hero-retreats.webp"
      keywords={['retreat catering bali', 'yoga retreat food bali', 'wellness retreat catering']}
      highlights={['Full-Board Packages', 'Plant-Forward Menus', 'Dietary Flexibility', 'On-Site Coordination']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Plan My Retreat Catering"
      ctaSubtext="Custom proposal within 24 hours. No obligation."
      extraJsonLd={[breadcrumbSchema('Retreat Catering Bali', 'https://mychef.id/retreats')]}
    />
  )
}
