import { ChefHat, Flame, Fish, Sparkles } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'

const CHEFS = [
  {
    name: 'Adriano',
    slug: 'adriano',
    role: 'Executive Chef & Founder',
    specialty: 'Mediterranean Fine Dining',
    badge: 'Milan-born · Michelin-trained in Modena · Founder since 2016',
    image: '/generated/mychef-finedining-bali-luna-chef-portrait.webp',
    bio: 'Adriano built myCHEF after years in Michelin-level kitchens in northern Italy and a formative stretch in Tokyo. He still leads menu development, chef training, and every signature tasting experience we serve in Bali villas.',
    achievements: ['Michelin-trained in Modena', 'Leads chef training for every new hire', 'Trusted for proposals, anniversaries, and VIP dinners'],
  },
  {
    name: 'I Made Surya',
    slug: 'made-surya',
    role: 'Head Chef — Mediterranean',
    specialty: 'Handmade Pasta & Seafood',
    badge: "Ubud talent shaped through myCHEF's in-house program",
    image: '/generated/portrait-daniel.webp',
    bio: "Surya is the calm hand behind many of our Mediterranean set menus. He combines Adriano's technique with Balinese market knowledge, turning just-caught seafood, handmade pasta, and clean sauces into elegant villa dinners.",
    achievements: ['Leads Mediterranean villa menus', 'Known for fresh pasta and seafood timing', 'Guest favourite for intimate 6–12 person dinners'],
  },
  {
    name: 'Bayu Pranata',
    slug: 'bayu-pranata',
    role: 'Head Chef — BBQ & Grill',
    specialty: 'Open-Flame Cooking',
    badge: 'Jimbaran grill specialist with decades around charcoal',
    image: '/generated/mychef-finedining-bali-sol-chef-portrait.webp',
    bio: 'Bayu runs our BBQ and grill experiences with the confidence of someone who grew up cooking over live fire. From wagyu and lobster to whole fish and satay, he keeps the energy relaxed while every protein lands perfectly cooked.',
    achievements: ['Leads poolside BBQ events across Bali', 'Specialist in seafood, wagyu, and family-style spreads', 'Experienced with celebrations from 10 to 80 guests'],
  },
  {
    name: 'Ni Putu Asri',
    slug: 'ni-putu-asri',
    role: 'Head Chef — Balinese & Asian Fusion',
    specialty: 'Balinese Classics & Modern Asian',
    badge: 'Gianyar-born chef rooted in ceremonial cooking traditions',
    image: '/generated/portrait-olivia.webp',
    bio: 'Asri protects the local soul of the myCHEF menu. She leads Indonesian feasts, ceremonial dishes, and Asian fusion menus with a balance of authenticity, polish, and warmth that villa guests immediately feel.',
    achievements: ['Leads Indonesian feast menus', 'Balances tradition with modern plating', 'Trusted for family celebrations and cultural dinners'],
  },
]

const CHEF_PERSON_SCHEMAS = CHEFS.map((chef) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: chef.name,
  jobTitle: chef.role,
  description: chef.bio,
  image: `https://mychef.id${chef.image}`,
  url: `https://mychef.id/chefs/${chef.slug}`,
  worksFor: { '@id': 'https://mychef.id/#business' },
  knowsAbout: [chef.specialty, ...chef.achievements],
}))

const SECTIONS = [
  {
    id: 'team',
    type: 'content' as const,
    subtitle: 'Our Team',
    title: "The Culinary Team Behind Bali's Private Dining Favourite",
    body: `<p>myCHEF is led by Adriano and powered by a 50+ person hospitality team trained for villa service, not restaurant shortcuts. Every chef is taught how to cook beautifully in unfamiliar kitchens, adapt to dietary requests, and leave the space spotless before they go.</p>
    <p>That means better timing, calmer service, and food that still feels personal even when the event is large. From candlelit dinners to full villa celebrations, the chefs below set the standard.</p>`,
    image: '/generated/mychef-finedining-bali-chefs-hero.webp',
    imageAlt: 'myCHEF chefs preparing private dining service in Bali',
  },
  {
    id: 'profiles',
    type: 'profiles' as const,
    subtitle: 'Chef Profiles',
    title: 'Meet Adriano and the Lead Chefs Guests Ask For By Name',
    profiles: CHEFS,
  },
  {
    id: 'standards',
    type: 'features' as const,
    subtitle: 'Why It Works',
    title: 'How We Keep Every Chef Experience Consistent',
    features: [
      {
        icon: ChefHat,
        title: '6+ Months of Training',
        desc: 'Every lead chef is trained on myCHEF recipes, villa kitchen workflows, guest communication, and cleanup standards before leading a booking.',
      },
      {
        icon: Fish,
        title: 'Cuisine-Led Assignments',
        desc: 'Mediterranean menus go to Mediterranean specialists. BBQ nights go to grill chefs. We match the chef to the menu, not the other way around.',
      },
      {
        icon: Flame,
        title: 'Event-Tested Under Pressure',
        desc: 'Our chefs regularly execute romantic dinners, birthdays, retreats, and large group BBQs in villas across Seminyak, Canggu, Ubud, and Uluwatu.',
      },
      {
        icon: Sparkles,
        title: 'Service Beyond the Plate',
        desc: 'Presentation, pacing, table reset, and kitchen restoration are part of the job. The experience should feel effortless from the guest side.',
      },
    ],
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book a Chef',
    title: "Tell Us Your Dates and We'll Match the Right Chef",
    body: 'Share your villa location, guest count, and the kind of meal you want. We will recommend the best chef for that menu and help you lock in availability fast.',
  },
]

const FAQS = [
  {
    question: 'Can I request Adriano specifically?',
    answer: 'Yes — especially for tasting menus, VIP dinners, and milestone occasions. We will confirm his availability and, if he is booked, recommend the closest-fit lead chef from the same service style.',
  },
  {
    question: 'Do you only have Italian chefs?',
    answer: 'No. Adriano leads the standards, but myCHEF is built around Indonesian culinary talent. Our team includes specialists in Mediterranean, Balinese, Asian fusion, BBQ, pastry, and family-style villa dining.',
  },
  {
    question: 'How do you make sure quality stays high across different chefs?',
    answer: 'Recipes, plating standards, service checklists, and post-event reviews are standardized. Every chef is trained to the same myCHEF playbook before they run a service on their own.',
  },
  {
    question: 'Can chefs handle allergies, kids, halal, or vegetarian menus?',
    answer: 'Yes. We customize every booking around dietary restrictions, cultural needs, and age ranges so the menu feels considered rather than improvised.',
  },
  {
    question: 'What areas of Bali do your chefs cover?',
    answer: 'Our chefs regularly serve Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, and surrounding villa areas.',
  },
]

const RELATED_PAGES = [
  { label: 'About myCHEF', href: '/about', desc: 'Read the founder story and the standards behind the team.' },
  { label: 'Menus', href: '/menus', desc: 'See the menu styles each chef can execute in your villa.' },
  { label: 'Fine Dining', href: '/fine-dining', desc: 'Explore tasting menus and premium in-villa dining.' },
  { label: 'Catering', href: '/catering', desc: 'Planning a bigger group, BBQ, or buffet-style event?' },
  { label: 'Pricing', href: '/pricing', desc: 'Understand starting prices and what is included.' },
  { label: 'Book Now', href: '/book', desc: 'Reserve your date and tell us which chef style you want.' },
]

export default function ChefsPage() {
  return (
    <PremiumPage
      slug="chefs"
      title="Our Chefs"
      description="Meet Adriano and the lead chefs behind myCHEF — Michelin-trained leadership, villa-tested specialists, and a 50+ person team trusted across Bali."
      seoTitle="Michelin-Trained Private Chefs Bali | Meet the Team — myCHEF"
      seoDescription="Meet the myCHEF private chef team in Bali. Michelin-trained leadership, 50+ villa-tested chefs for fine dining, BBQs, retreats & events. Book via WhatsApp."
      canonicalUrl="https://mychef.id/chefs"
      h1="Meet the Chefs Behind Every myCHEF Experience"
      subtitle="From Adriano's Michelin-trained leadership to our Bali-based specialists in Mediterranean, Indonesian, and BBQ dining."
      heroImage="/generated/mychef-finedining-bali-chefs-hero.webp"
      heroImageAlt="myCHEF culinary team in Bali"
      ogImage="https://mychef.id/generated/mychef-finedining-bali-chefs-hero.webp"
      keywords={['private chef bali', 'mychef chefs', 'bali culinary team']}
      highlights={['Adriano + Lead Chef Profiles', '50+ Hospitality Professionals', '6+ Months of Training', 'Book a Chef via WhatsApp']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={CHEF_PERSON_SCHEMAS}
      ctaText="Book a Chef"
      ctaSubtext="Message us on WhatsApp and we will recommend the best chef for your villa, menu, and dates."
    />
  )
}
