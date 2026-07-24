import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { Wine, ChefHat, UtensilsCrossed, PartyPopper, Shell, Heart } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20experience%20in%20Bali.%20Please%20help%20me%20choose%20the%20right%20one.'
const CANONICAL = 'https://mychef.id/experiences'

const EXPERIENCES = [
  {
    slug: 'private-cocktail-party',
    title: 'Private Cocktail Party',
    hook: 'A full bar, professional bartenders and chef-made canapés at your villa.',
    price: 'IDR 700K–1.2M per person ++',
    linkText: 'Explore the private cocktail party at your villa',
    icon: Wine,
    href: '/experiences/private-cocktail-party',
    image: '/generated/bartender-hire-bali-cocktail-party.webp',
    imageAlt: 'Bartender hire Bali service with mobile cocktail bar at a private villa party',
  },
  {
    slug: 'sushi-masterclass',
    title: 'Sushi Masterclass',
    hook: 'Learn maki, nigiri and hand rolls with a private sushi chef, then eat everything you made.',
    price: 'From IDR 700K per person ++',
    linkText: 'Book a private sushi masterclass',
    icon: UtensilsCrossed,
    href: '/experiences/sushi-masterclass',
    image: '/generated/sushi-making-class-bali-masterclass.webp',
    imageAlt: 'Sushi making class Bali with a chef teaching in a private villa kitchen',
  },
  {
    slug: 'private-cooking-class',
    title: 'Private Cooking Class',
    hook: 'Your chef, your kitchen, your choice of cuisine — ingredients and recipes included.',
    price: 'From IDR 700K per person ++',
    linkText: 'Book a private cooking class in your villa',
    icon: ChefHat,
    href: '/experiences/private-cooking-class',
    image: '/generated/private-cooking-class-bali-villa.webp',
    imageAlt: 'Private cooking class Bali at a villa with a chef teaching fresh recipes',
  },
  {
    slug: 'kids-birthday-chef-party',
    title: 'Kids Birthday Chef Party',
    hook: 'The children cook, you relax. Six interactive menus, nut-free as standard.',
    price: 'IDR 250K–350K per child',
    linkText: 'Plan a kids birthday chef party',
    icon: PartyPopper,
    href: '/experiences/kids-birthday-chef-party',
    image: '/generated/kids-birthday-party-bali-chef.webp',
    imageAlt: 'Kids birthday party Bali chef party with pizza making and cupcake decorating',
  },
  {
    slug: 'champagne-oyster-experience',
    title: 'Champagne & Oyster Hour',
    hook: 'Fresh oysters shucked on-site and chilled champagne as the opening act to a private dinner.',
    price: 'Quoted individually',
    linkText: 'See the champagne & oyster experience',
    icon: Shell,
    href: '/experiences/champagne-oyster-experience',
    image: '/generated/oyster-bar-bali-champagne.webp',
    imageAlt: 'Oyster bar Bali with champagne service at an elegant private villa',
  },
  {
    slug: 'romantic-proposal-dinner',
    title: 'Proposal Experiences',
    hook: 'The chef-led proposal dinner or the full proposal package with styling, flowers and hidden photographer.',
    price: 'From IDR 3.5M++ per couple',
    linkText: 'See the full proposal package',
    icon: Heart,
    href: '/experiences/romantic-proposal-dinner',
    image: '/generated/proposal-package-bali-dinner.webp',
    imageAlt: 'Proposal package Bali romantic dinner setup at a private villa',
  },
]

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Experiences Bali',
    title: 'Private Experiences in Bali — The Villa Is the Venue',
    image: '/generated/private-experiences-bali-hub.webp',
    imageAlt: 'Private experiences Bali collection at a luxury villa by myCHEF',
    body: `<p>Some moments deserve more than a restaurant reservation. myCHEF private experiences bring chefs, sushi masters, mixologists and party teams directly to your Bali villa — so the occasion happens where you're actually staying, on your schedule, with nobody else's table six feet away.</p>

    <p>Every experience is built around the setting you already have: your pool, your kitchen, your view. You choose the occasion; we bring the ingredients, equipment, staff and styling — and leave the villa exactly as we found it.</p>

    <p><a href="${WA_LINK}" class="text-[#7E6410] hover:underline font-medium">Plan Your Experience — WhatsApp +62 896-7407-2020</a>. Tell us the experience, date, villa and guest count — we reply within the hour.</p>`,
  },
  {
    id: 'collection',
    type: 'custom' as const,
    subtitle: 'Explore the Experiences',
    title: 'Private Experiences in Bali by myCHEF',
    render: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {EXPERIENCES.map((e) => {
          const Icon = e.icon
          return (
            <a
              key={e.slug}
              href={e.href}
              className="group block rounded-xl overflow-hidden border border-stone-800 bg-[#0a0a0a] hover:border-[#C5A028]/50 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A028]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C5A028]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F5F1E8] group-hover:text-[#C5A028] transition-colors">{e.title}</h3>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed mb-2">{e.hook}</p>
                <p className="text-sm text-[#C5A028] font-medium mb-4">{e.price}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#C5A028] group-hover:underline">
                  {e.linkText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </a>
          )
        })}
      </div>
    ),
  },
  {
    id: 'why-private',
    type: 'content' as const,
    subtitle: 'Why an Experience Beats a Reservation',
    title: 'The Villa Is the Venue',
    body: `<p>Group travel has a logistics problem: coordinating transport for twelve, fixed menus nobody fully loves, shared space, and a bill that arrives just as the evening gets good. A private villa experience deletes all of it. A proposal can be timed to the sunset. A kids' party can start after nap time. A sushi class can <em>become</em> dinner. A cocktail party never has a closing time.</p>

    <p>And you're the host without being the event manager — we source, set up, serve and clean down. You've already found the best venue in Bali. You're sleeping in it.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'From Idea to Experience in Four Steps',
    body: `<p><strong>1. Choose your experience.</strong> Each page shows what's included, typical duration, group sizes and pricing anchors.</p>

    <p><strong>2. Send a short brief.</strong> One WhatsApp message: date, villa, guests, occasion, dietary needs.</p>

    <p><strong>3. Receive a tailored plan.</strong> Menu or activity design, staffing and an itemised investment summary — nothing hidden, all-in figures shown.</p>

    <p><strong>4. Just turn up.</strong> The team arrives early, runs everything, and restores the villa afterwards.</p>`,
  },
  {
    id: 'includes',
    type: 'content' as const,
    subtitle: 'What Every Experience Includes',
    title: 'Inclusions You Can Count On',
    body: `<ul style="list-style:disc;padding-left:1.5rem;margin-top:0.5rem;margin-bottom:0.5rem;">
      <li>Professional chef or specialist instructor, plus service staff scaled to your group</li>
      <li>All ingredients sourced fresh for your date, and all specialist equipment</li>
      <li>Setup, service and full clean-down of the space</li>
      <li>Dietary adaptations (vegetarian, vegan, gluten-free, halal-friendly, allergies) planned in advance</li>
      <li>Transparent quoting: prices shown ++ (11% government tax + 10% service charge), with the all-in total always confirmed before you commit</li>
    </ul>

    <p>myCHEF has served 12,000+ guests across 560+ Bali villas over 8+ years — these experiences are run by the same hospitality team behind our private chef and event services.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Where We Host',
    title: 'Bali-Wide Private Experiences',
    body: `<p>We host experiences across all major villa regions: Seminyak, Canggu, Uluwatu, Ubud, Sanur, Nusa Dua and Jimbaran. If your villa has a workable kitchen or pool area, we can almost always make it happen; larger setups (mobile bars, oyster stations, proposal styling) are confirmed during planning, and any travel fee for outlying areas is disclosed upfront.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Private Experiences Bali — FAQ',
    title: 'Common Questions',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Plan Your Experience',
    title: 'Which Experience Are You Planning?',
    body: 'Tell us which experience, your date, your villa and your group size — we will reply within the hour with availability and a tailored plan.',
    primaryAction: {
      label: 'Message Us on WhatsApp',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View Full Pricing Guide',
      href: '/pricing',
    },
  },
]

const FAQS = [
  { question: 'What private experiences does myCHEF offer in Bali?', answer: 'Six: private cocktail parties, a sushi masterclass, private in-villa cooking classes, kids birthday chef parties, champagne & oyster hours, and proposal experiences (dinner-led or full package).' },
  { question: 'How much do private experiences cost?', answer: 'Anchors: cooking classes from IDR 700K per person ++; cocktail parties typically IDR 700K–1.2M per person ++; kids chef party menus IDR 250K–350K per child (min. 6 children); additional staff from IDR 250K per hour. Every quote is itemised with the all-in total before you commit.' },
  { question: 'Can experiences be combined?', answer: 'Yes — a sushi class that becomes dinner, a champagne & oyster hour before a proposal, a cocktail party with canapé service. We design the flow around your occasion.' },
  { question: 'What group sizes work?', answer: 'Couples\' experiences start from two guests. Classes and cocktail parties scale to 20+; kids parties need a minimum of six children. Larger groups get additional chefs and staff.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes — allergies, vegetarian, vegan, gluten-free and halal-friendly requirements are built into the menu from the start. Mention them in your first message.' },
  { question: 'Do you bring everything?', answer: 'Yes — ingredients, tools, equipment, glassware and service staff. You provide the villa; we bring the rest and take it all away again.' },
  { question: 'How far in advance should I book?', answer: 'Two to four weeks is comfortable for most experiences; proposals and peak-season dates (July–August, December) benefit from earlier planning. Last-minute requests are often possible — ask.' },
  { question: 'What deposit is required?', answer: 'A deposit confirms your date and team [BUSINESS CONFIRMATION REQUIRED: deposit level — crawl for this URL is silent; live pages elsewhere show 50%]; the balance is due before the event.' },
]

const RELATED_PAGES = [
  { label: 'Private Cocktail Party', href: '/experiences/private-cocktail-party', desc: 'A full bar, bartenders and chef-made canapés at your villa.' },
  { label: 'Private Cooking Class', href: '/experiences/private-cooking-class', desc: 'Hands-on cooking classes in your Bali villa.' },
  { label: 'Sushi Masterclass', href: '/experiences/sushi-masterclass', desc: 'Private sushi rolling class at your villa.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF experiences and services.' },
]

export default function ExperiencesHubPage() {
  return (
    <PremiumPage
      slug="experiences"
      title="Private Experiences Bali | Culinary & Celebration | myCHEF"
      description="Private culinary & celebration experiences in Bali: cocktail parties, sushi classes, cooking classes, kids parties & proposal dinners at your villa."
      seoTitle="Private Experiences Bali | Culinary & Celebration | myCHEF"
      seoDescription="Private culinary & celebration experiences in Bali: cocktail parties, sushi classes, cooking classes, kids parties & proposal dinners at your villa."
      canonicalUrl={CANONICAL}
      h1="Private Experiences in Bali — The Villa Is the Venue"
      subtitle="Curated Culinary & Celebration Experiences at Your Villa"
      heroImage="/generated/private-experiences-bali-hub.webp"
      heroImageAlt="Private experiences Bali collection at a luxury villa by myCHEF"
      ogImage="https://mychef.id/generated/private-experiences-bali-hub.webp"
      keywords={[
        'private experiences bali',
        'culinary experiences bali',
        'villa experiences bali',
        'celebration experiences bali',
        'things to do in villa bali',
        'private dining experiences bali',
        'bali culinary experiences',
      ]}
      highlights={['At Your Villa', 'Chef-Led', 'All Equipment Included', 'Bali-Wide']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema(
          'Private Experiences in Bali',
          CANONICAL
        ),
        {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Private Experiences Bali',
              description: 'Private culinary and celebration experiences at your Bali villa: cocktail parties, sushi masterclasses, cooking classes, kids chef parties, champagne & oyster hours and proposal experiences.',
              url: CANONICAL,
              provider: {
                '@type': 'LocalBusiness',
                name: 'myCHEF',
                url: 'https://mychef.id',
                telephone: '+62 896-7407-2020',
                areaServed: { '@type': 'Place', name: 'Bali, Indonesia' },
              },
              hasPart: [
                { '@type': 'Service', name: 'Private Cocktail Party Bali', url: 'https://mychef.id/experiences/private-cocktail-party' },
                { '@type': 'Service', name: 'Sushi Masterclass Bali', url: 'https://mychef.id/experiences/sushi-masterclass' },
                { '@type': 'Service', name: 'Private Cooking Class Bali', url: 'https://mychef.id/experiences/private-cooking-class' },
                { '@type': 'Service', name: 'Kids Birthday Chef Party Bali', url: 'https://mychef.id/experiences/kids-birthday-chef-party' },
                { '@type': 'Service', name: 'Champagne & Oyster Experience Bali', url: 'https://mychef.id/experiences/champagne-oyster-experience' },
                { '@type': 'Service', name: 'Romantic Proposal Package Bali', url: 'https://mychef.id/experiences/romantic-proposal-dinner' },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: FAQS.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            },
          ],
        },
      ]}
      ctaText="Plan Your Experience"
      ctaSubtext="Tell us which experience, your date and villa — we will reply within the hour."
    />
  )
}
