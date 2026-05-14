import { ChefHat } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'

const CHEFS = [
  {
    name: 'Adriano',
    role: 'Executive Chef & Founder',
    specialty: 'Mediterranean, Tasting Menus',
    origin: 'Milan, Italy',
    image: '/generated/chef-matteo.webp',
    bio: 'Trained under a Michelin-starred chef in Modena, then spent years in Tokyo mastering precision and restraint. Adriano founded myCHEF in 2016 with a simple mission: bring restaurant-quality dining to Bali\'s villas. He personally trains every chef for 6+ months before they lead an event.',
    achievements: ['Michelin-starred restaurant training', 'Tokyo kaiseki apprenticeship', '500+ villa dinners led'],
  },
  {
    name: 'I Made Surya',
    role: 'Head Chef — Mediterranean',
    specialty: 'Handmade Pasta, Seafood',
    origin: 'Ubud, Bali',
    image: '/generated/chef-made-surya.webp',
    bio: 'Born in a village outside Ubud where his family ran a warung. Started as a kitchen hand at sixteen, taught himself pasta in a Canggu Italian restaurant. Adriano discovered him in 2021 and spent three months training him on pasta technique alone. His tagliatelle is now legendary.',
    achievements: ['Self-taught pasta specialist', '3-month intensive with Adriano', 'Mediterranean menu lead'],
  },
  {
    name: 'Bayu Pranata',
    role: 'Head Chef — BBQ & Grill',
    specialty: 'Open-Flame Cooking, Smoked Meats',
    origin: 'Jimbaran, Bali',
    image: '/generated/chef-bayu-pranata.webp',
    bio: 'Grew up in Jimbaran where his father ran a seafood grill on the beach. Bayu brings decades of fire-cooking intuition to every BBQ event. He knows exactly how long a Wagyu ribeye needs over charcoal, and how to time a whole fish to perfection.',
    achievements: ['20+ years fire-cooking experience', 'Wagyu and seafood specialist', 'BBQ event lead for 200+ guests'],
  },
  {
    name: 'Ni Putu Asri',
    role: 'Head Chef — Balinese & Asian Fusion',
    specialty: 'Traditional Balinese, Modern Asian',
    origin: 'Gianyar, Bali',
    image: '/generated/chef-ni-putu-asri.webp',
    bio: 'Raised in a Gianyar family where ceremonial cooking was passed down through generations. Asri modernizes Balinese classics — bebek betutu, sate lilit, lawar — while respecting their roots. She also leads our Asian fusion experiments, drawing from Thai, Vietnamese, and Japanese technique.',
    achievements: ['Traditional Balinese cooking heritage', 'Asian fusion innovation', 'Cultural menu consultant'],
  },
  {
    name: 'Rizky Saputra',
    role: 'Pastry Chef',
    specialty: 'Desserts, Tiramisu, Chocolate',
    origin: 'Jakarta, Indonesia',
    image: '/generated/chef-rizky-saputra.webp',
    bio: 'Rizky trained in Jakarta\'s finest hotel pastry kitchens before joining myCHEF. His tiramisu has become our signature dessert — house-made lady fingers, mascarpone cream, and espresso that guests still talk about months later. He also creates custom celebration cakes and dessert tables.',
    achievements: ['5-star hotel pastry background', 'Signature tiramisu recipe', 'Custom celebration cake designer'],
  },
  {
    name: 'Paco',
    role: 'Sous Chef — European Classics',
    specialty: 'French Technique, Sauce Work',
    origin: 'Barcelona, Spain',
    image: '/generated/chef-paco.webp',
    bio: 'Paco brings classical French training to the myCHEF kitchen. His sauce work — reductions, emulsions, foams — elevates every dish he touches. He works closely with Adriano on menu development and trains junior chefs in foundational technique.',
    achievements: ['Classical French training', 'Sauce and reduction specialist', 'Junior chef mentor'],
  },
]

const SECTIONS = [
  {
    id: 'team',
    type: 'content' as const,
    subtitle: 'The Team',
    title: 'Meet the Chefs Behind Every Experience',
    body: `<p>Our culinary team is the heart of myCHEF. Led by executive chef Adriano — who trained under a Michelin-starred chef in Milan — our 50+ professionals bring diverse backgrounds, rigorous training, and genuine passion to every villa kitchen they enter.</p>
    <p>We recruit Indonesian talent first, then invest in their growth. Many of our lead chefs started as kitchen hands and rose through our in-house training program. This is not outsourcing. This is building a culinary culture.</p>`,
    image: '/generated/chefs-hero.webp',
    imageAlt: 'myCHEF culinary team',
  },
  {
    id: 'chefs-grid',
    type: 'features' as const,
    subtitle: 'Our Chefs',
    title: 'The People Behind the Plates',
    features: CHEFS.map(c => ({
      icon: ChefHat,
      title: c.name,
      desc: `${c.role} — ${c.specialty}. ${c.origin}.`,
    })),
  },
  {
    id: 'training',
    type: 'content' as const,
    subtitle: 'Training',
    title: '6 Months of Training Before a Chef Leads Your Evening',
    body: `<p>Every myCHEF chef undergoes a rigorous training program before they are trusted to lead a villa dining experience. The program covers:</p>
    <ul>
      <li><strong>Technique:</strong> Knife skills, sauce work, pasta making, plating standards</li>
      <li><strong>Timing:</strong> Multi-course service flow, course spacing, temperature control</li>
      <li><strong>Presentation:</strong> Plate design, table setting, villa kitchen adaptation</li>
      <li><strong>Service:</strong> Guest interaction, dietary accommodation, problem-solving</li>
      <li><strong>Cleanup:</strong> Kitchen restoration, equipment care, departure protocol</li>
    </ul>
    <p>Only after demonstrating mastery in all five areas does a chef lead their first solo event. And even then, they are shadowed by a senior chef for their first three services.</p>`,
    image: '/generated/luna-plating.webp',
    imageAlt: 'Chef plating a fine dining dish',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Work With Us',
    title: 'Request Your Preferred Chef',
    body: 'While we assign the best chef for your menu and event type, you can request a specific chef when booking. Message us to check availability.',
  },
]

const FAQS = [
  { question: 'Can I request a specific chef?', answer: 'Yes. When you book, let us know if you have a preference. We will check their availability and assign them if possible. Some chefs specialize in specific cuisines or event types.' },
  { question: 'Are all your chefs Indonesian?', answer: 'Our executive chef is Italian, but our kitchen team is predominantly Indonesian. We believe in developing local talent — many of our lead chefs started as kitchen hands and trained with us for years.' },
  { question: 'How do you ensure quality across different chefs?', answer: 'Standardized recipes, rigorous training, and post-event reviews. Every dish follows a spec sheet. Every service is debriefed. This is how we maintain consistency across 50+ team members.' },
  { question: 'Do your chefs speak English?', answer: 'Yes. All lead chefs and service staff speak English fluently. Many also speak additional languages including Mandarin, French, and Japanese.' },
  { question: 'What happens if my assigned chef gets sick?', answer: 'We have backup chefs on standby for every event. If your assigned chef cannot make it, we will notify you immediately and send a replacement of equal or higher skill level.' },
]

const RELATED_PAGES = [
  { label: 'About myCHEF', href: '/about', desc: 'Our story, values, and mission.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'In-villa tasting menus led by our best chefs.' },
  { label: 'Catering', href: '/catering', desc: 'Full-service villa catering for any occasion.' },
  { label: 'Events', href: '/events', desc: 'Weddings, retreats, and celebrations.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all services.' },
  { label: 'Book Now', href: '/book', desc: 'Reserve your private chef experience.' },
]

export default function ChefsPage() {
  return (
    <PremiumPage
      slug="chefs"
      title="Our Chefs"
      description="Meet the chefs behind myCHEF — Michelin-trained leadership, Indonesian talent, and a rigorous training program that ensures every plate meets our standards."
      h1="The Chefs Behind Every Experience"
      subtitle="Michelin-trained leadership. Indonesian talent. Rigorous standards."
      heroImage="/generated/chefs-hero.webp"
      heroImageAlt="myCHEF culinary team in Bali"
      ogImage="https://mychef.id/generated/chefs-hero.webp"
      keywords={['private chef bali', 'mychef chefs', 'bali culinary team']}
      highlights={['Michelin-Trained Executive Chef', '50+ Indonesian Professionals', '6-Month Training Program', 'Background-Checked Team']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      ctaText="Book a Chef"
      ctaSubtext="Tell us your dates and we will match you with the perfect chef."
    />
  )
}
