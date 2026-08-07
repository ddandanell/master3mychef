import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema } from '@/components/SeoHead'
import { Wine, ChefHat, UtensilsCrossed, PartyPopper, Shell, Heart } from 'lucide-react'
import type { PageSection } from '@/components/PremiumPage'
import { ArticleContentSection } from '@/components/shared'

const WA_LINK = 'https://wa.me/6289674072020?text=Hi%20myCHEF%2C%20I%27m%20interested%20in%20a%20private%20experience%20in%20Bali.%20Please%20help%20me%20choose%20the%20right%20one.'
const CANONICAL = 'https://mychef.id/experiences'

const EXPERIENCES = [
  {
    slug: 'private-cocktail-party',
    title: 'Private Cocktail Party',
    keyword: 'private cocktail party Bali',
    desc: 'Mobile cocktail bar at your Bali villa — complete packages from IDR 500,000++ per guest with team, four cocktails, glassware, ice, setup and cleanup. Stack catering or private chef for full F&B.',
    icon: Wine,
    href: '/experiences/private-cocktail-party',
    image: '/generated/mychef-cocktail-party-bartender-pour-bali-landscape.webp',
    imageAlt: 'Private cocktail party package with mobile bar at a Bali villa',
  },
  {
    slug: 'sushi-masterclass',
    title: 'Sushi Masterclass',
    keyword: 'sushi making class Bali',
    desc: 'Book a private sushi making class Bali experience at your villa. Learn maki, nigiri and hand rolls with a sushi chef, then enjoy the meal you created together.',
    icon: UtensilsCrossed,
    href: '/experiences/sushi-masterclass',
    image: '/generated/mychef-sushi-masterclass-chef-hands-bali-landscape.webp',
    imageAlt: 'Sushi making class Bali with a chef teaching in a private villa kitchen',
  },
  {
    slug: 'private-cooking-class',
    title: 'Private Cooking Class',
    keyword: 'private cooking class Bali',
    desc: 'Choose your cuisine and learn from a private chef in your own villa. Italian, Indonesian, Japanese, French, healthy or kids’ cooking classes with ingredients included.',
    icon: ChefHat,
    href: '/experiences/private-cooking-class',
    image: '/generated/mychef-cooking-class-chef-teaching-bali-landscape.webp',
    imageAlt: 'Private cooking class Bali at a villa with a chef teaching fresh recipes',
  },
  {
    slug: 'kids-birthday-chef-party',
    title: 'Kids Birthday Chef Party',
    keyword: 'kids birthday party Bali',
    desc: 'Turn your villa into a fully hosted children’s cooking party. Pizza making, cupcake decorating, kids’ sushi, mocktails, chef hats and cleanup handled by our team.',
    icon: PartyPopper,
    href: '/experiences/kids-birthday-chef-party',
    image: '/generated/mychef-kids-party-children-cooking-bali-landscape.webp',
    imageAlt: 'Kids birthday party Bali chef party with pizza making and cupcake decorating',
  },
  {
    slug: 'champagne-oyster-experience',
    title: 'Champagne & Oyster Experience',
    keyword: 'oyster bar Bali',
    desc: 'Book a private oyster bar Bali experience and champagne reception at your villa, wedding or event. Fresh oysters on ice, live shucking, premium glassware and professional service.',
    icon: Shell,
    href: '/experiences/champagne-oyster-experience',
    image: '/generated/mychef-oyster-champagne-station-pour-bali-landscape.webp',
    imageAlt: 'Oyster bar Bali with champagne service at an elegant private villa',
  },
  {
    slug: 'romantic-proposal-dinner',
    title: 'Romantic Proposal Dinner',
    keyword: 'proposal package Bali',
    desc: 'Plan a complete proposal package Bali experience with dinner, flowers, candles, styling, photographer and confidential coordination through one dedicated team.',
    icon: Heart,
    href: '/experiences/romantic-proposal-dinner',
    image: '/generated/mychef-proposal-dinner-table-setting-bali-landscape.webp',
    imageAlt: 'Proposal package Bali romantic dinner setup at a private villa',
  },
]

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Private Experiences Bali',
    title: 'Private Experiences in Bali — The Villa Is the Venue',
    image: '/generated/mychef-experiences-hub-hero-bali-landscape.webp',
    imageAlt: 'Private experiences Bali collection at a luxury villa by myCHEF',
    body: `<p>Some moments deserve more than a restaurant reservation. The myCHEF <strong>private experiences Bali</strong> collection brings chefs, bartenders, teachers and event specialists directly to your villa, turning a normal evening into something your guests will remember long after the holiday ends.</p>

    <p>Every experience is designed around the setting you already have: your villa, your pool, your kitchen, your view. You choose the occasion and the mood, and we build the rest — ingredients, equipment, service staff, styling and cleanup. The result feels personal, seamless and unmistakably Bali.</p>

    <p>Whether you want a hands-on sushi class with friends, a <strong>mobile cocktail bar</strong> by the pool, a stress-free kids’ cooking party, or a confidential proposal dinner planned down to the last candle, these experiences are built for guests who expect privacy, quality and attention to detail. Stack any experience with <a href="/catering" class="text-[#7E6410] hover:underline font-medium">villa catering</a> or multi-day <a href="/private-chef-bali" class="text-[#7E6410] hover:underline font-medium">private chef</a> service when the stay needs more than one night of production.</p>`,
  },
  {
    id: 'collection',
    type: 'custom' as const,
    subtitle: 'Explore the Collection',
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
                <p className="text-sm text-stone-400 leading-relaxed mb-4">{e.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-[#C5A028] group-hover:underline">
                  Explore {e.title}
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
    subtitle: 'Why Book a Private Experience',
    title: 'The Difference Between a Reservation and an Experience',
    body: `<p>Private experiences solve the problems that come with group travel and special occasions. There is no need to coordinate transport, no shared restaurant space, no fixed menu that does not suit everyone, and no pressure to leave when the evening is just getting started.</p>

    <p>When the experience comes to your villa, the schedule is yours. A proposal can be timed to sunset. A kids’ party can start after nap time. A cocktail class can flow into dinner. A sushi lesson can become the meal. Everything adapts to your group rather than the other way around.</p>

    <p>Our team handles the logistics that would normally fall to you: sourcing fresh ingredients, bringing equipment that villa kitchens may not have, setting up stations, managing dietary requirements, serving drinks and restoring the space afterwards. You are the host, but you are never the event manager.</p>`,
  },
  {
    id: 'how-it-works',
    type: 'content' as const,
    subtitle: 'How It Works',
    title: 'From Idea to Experience in Four Steps',
    body: `<p><strong>1. Choose your experience.</strong> Browse the <a href="/experiences" class="text-[#7E6410] hover:underline font-medium">private experiences Bali</a> collection and pick the activity or occasion that matches your group. Each page explains what is included, typical duration, group size and how it fits with other myCHEF services.</p>

    <p><strong>2. Send a brief.</strong> A short WhatsApp message is enough to begin. Include your preferred date, villa location, number of guests and any dietary requests or special occasion details.</p>

    <p><strong>3. Receive a tailored plan.</strong> We confirm availability, design the menu or activity, and send a written proposal with all inclusions, staffing and investment summary. Nothing is hidden.</p>

    <p><strong>4. Enjoy the experience.</strong> Our team arrives ahead of time with everything needed, runs the experience from start to finish, and leaves the villa tidy. You simply turn up.</p>`,
  },
  {
    id: 'who-for',
    type: 'content' as const,
    subtitle: 'Who Private Experiences Are For',
    title: 'Villa Holidays, Celebrations & Corporate Groups',
    body: `<p><strong>Families and friends on villa holidays</strong> use private experiences to turn a regular dinner into an event. A sushi class entertains teenagers. A cocktail party celebrates a birthday. A cooking class becomes the highlight of a reunion.</p>

    <p><strong>Couples</strong> book the proposal dinner and champagne experiences for moments that need to feel private and perfect. These are not add-ons; they are the memory itself.</p>

    <p><strong>Corporate groups and retreats</strong> use team-building cooking classes, cocktail competitions and oyster receptions to create shared experiences without leaving the villa.</p>

    <p><strong>Parents</strong> book kids’ chef parties because they want a structured, safe, fully hosted activity that leaves the villa clean and the children happy.</p>`,
  },
  {
    id: 'locations',
    type: 'content' as const,
    subtitle: 'Bali-Wide Service',
    title: 'Where We Host Private Experiences',
    body: `<p>We host private experiences across all major Bali villa regions. Most bookings take place in <a href="/private-chef/seminyak" class="text-[#7E6410] hover:underline font-medium">Seminyak</a>, <a href="/private-chef/canggu" class="text-[#7E6410] hover:underline font-medium">Canggu</a>, <a href="/private-chef/uluwatu" class="text-[#7E6410] hover:underline font-medium">Uluwatu</a>, <a href="/private-chef/ubud" class="text-[#7E6410] hover:underline font-medium">Ubud</a>, <a href="/private-chef/sanur" class="text-[#7E6410] hover:underline font-medium">Sanur</a>, <a href="/private-chef/nusa-dua" class="text-[#7E6410] hover:underline font-medium">Nusa Dua</a> and <a href="/private-chef/jimbaran" class="text-[#7E6410] hover:underline font-medium">Jimbaran</a>. If your villa has a suitable kitchen or pool area, we can usually make it work.</p>

    <p>For larger equipment such as mobile bars, oyster stations or proposal styling, we confirm logistics during the planning stage. Travel beyond the main villa areas may incur a transport fee, which we disclose upfront in the proposal.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
    subtitle: 'Common Questions',
    title: 'Private Experiences FAQ',
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Start Planning',
    title: 'Which Experience Are You Planning?',
    body: 'Tell us the experience, date, villa location and guest count — we will reply within the hour with availability and a tailored plan.',
    primaryAction: {
      label: 'Message Us on WhatsApp',
      href: WA_LINK,
      external: true,
    },
    secondaryAction: {
      label: 'View All Services',
      href: '/services',
    },
  },
]

const FAQS = [
  { question: 'What private experiences do you offer in Bali?', answer: 'Six curated villa experiences: <a href="/experiences/private-cocktail-party">Private Cocktail Party</a>, <a href="/experiences/sushi-masterclass">Sushi Masterclass</a>, <a href="/experiences/private-cooking-class">Private Cooking Class</a>, <a href="/experiences/kids-birthday-chef-party">Kids Birthday Chef Party</a>, <a href="/experiences/champagne-oyster-experience">Champagne &amp; Oyster</a>, and <a href="/experiences/romantic-proposal-dinner">Romantic Proposal Dinner</a>.' },
  { question: 'How much do private experiences cost in Bali?', answer: 'Pricing depends on experience, guest count and add-ons. You receive a fixed quote before deposit — never a vague range after the fact. Compare related dining on <a href="/pricing">pricing</a> and <a href="/dining-styles">dining styles</a>.' },
  { question: 'Can experiences be combined or customised?', answer: 'Yes. Popular stacks: cocktail party + canapés, sushi class + dinner, proposal dinner + champagne &amp; oysters. We design one run-of-show for the evening.' },
  { question: 'Do you bring all ingredients and equipment?', answer: 'Yes — ingredients, tools and station equipment. Cooking and sushi classes include aprons, knives, boards and teaching kit.' },
  { question: 'How many guests can join a private experience?', answer: 'Couples’ formats from two guests. Classes and cocktail parties often scale to 20+. Kids parties follow age group and villa space. Exact caps are on each experience page.' },
  { question: 'Can dietary requirements be accommodated?', answer: 'Yes — allergies, vegetarian, vegan, gluten-free, halal-friendly and religious needs, built in from the first plan. <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">Allergy guide →</a>' },
  { question: 'How far in advance should I book a private experience in Bali?', answer: '2–4 weeks is ideal. Proposals, peak season and large groups need earlier booking. Last-minute is sometimes possible.' },
  { question: 'Do you handle setup and cleanup?', answer: 'Yes. We set up, run the experience end to end and restore the villa. You host; we logistics.' },
  { question: 'Can you host experiences at hotels or event venues?', answer: 'Most bookings are private villas; hotels, retreats and venues work when facilities and permission allow — confirmed in planning.' },
  { question: 'Are private experiences only available in Bali?', answer: 'Yes — Bali villas and estates across major regions. <a href="/locations">Locations →</a>' },
  { question: 'What deposit and cancellation apply to experiences?', answer: '50% deposit to confirm; balance due the day before. Full refund 14+ days out, 50% at 7–13 days, none under 7. <a href="/cancellation">Policy →</a>' },
  { question: 'Is a private experience the same as hiring a daily private chef?', answer: 'No. Experiences are curated events (class, party, proposal). Multi-day meals use <a href="/private-chef-bali">private chef day rates</a>.' },
  { question: 'Can we add waiters or cocktail packages to an experience?', answer: 'Yes — especially cocktail parties and proposal dinners. Cocktail packages from IDR 500,000++ per guest (not hourly hire). <a href="/in-villa-service">In-villa service →</a> · <a href="/in-villa-service/bartenders">Cocktail packages →</a>' },
  { question: 'Do you clean the villa kitchen after a cooking class?', answer: 'Yes. Teaching mess is our problem — full cleanup is included.' },
  { question: 'Can kids join adult experiences?', answer: 'Depends on the format. Cooking classes can be family-friendly; cocktail and oyster bars are adult-led. For kids-first parties use <a href="/experiences/kids-birthday-chef-party">kids birthday chef party</a> or <a href="/kids-menus">kids menus</a>.' },
  { question: 'How do proposal dinners stay secret?', answer: 'We coordinate timing with you (and villa staff if needed), stage setup while the partner is out, and cue champagne/photographer moments. Details on <a href="/experiences/romantic-proposal-dinner">proposal dinner</a>.' },
  { question: 'What if it rains during an outdoor experience?', answer: 'We plan covered areas or indoor pivots with the villa layout. Weather is designed into the plan before the day.' },
  { question: 'How do I get a quote for a private experience?', answer: 'WhatsApp experience name, date, villa area and guest count. We reply within about an hour with availability and a tailored quote. <a href="/quote">Quote form →</a>' },
  { question: 'Can experiences include full dinner service afterwards?', answer: 'Yes — many clients book an experience then transition into <a href="/fine-dining">fine dining</a>, <a href="/three-course">three-course</a> or <a href="/bbq-grill">BBQ</a>.' },
  { question: 'What if a team member cannot make it on the day?', answer: 'We send a verified replacement or refund that role. <a href="/why-mychef">Why myCHEF →</a>' },
]

const RELATED_PAGES = [
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'Day rates, meal plans and how private chef hire works across Bali.' },
  { label: 'Villa Catering', href: '/catering/villa-catering', desc: 'Full-service catering for villa celebrations and group dining.' },
  { label: 'Event Catering', href: '/events', desc: 'Weddings, birthdays, corporate events and villa parties handled end-to-end.' },
  { label: 'Pricing', href: '/pricing', desc: 'Transparent pricing for all myCHEF packages and event types.' },
]

export default function ExperiencesHubPage() {
  return (
    <>
      <PremiumPage
        slug="experiences"
      title="Private Experiences Bali | Culinary & Celebration Experiences | myCHEF"
      description="Discover private culinary and celebration experiences in Bali. Cocktail parties, sushi classes, cooking classes, kids’ parties, oyster bars and proposal dinners at your villa."
      seoTitle="Private Experiences Bali | Culinary & Celebration Experiences | myCHEF"
      seoDescription="Discover private culinary and celebration experiences in Bali. Cocktail parties, sushi classes, cooking classes, kids’ parties, oyster bars and proposal dinners at your villa."
      canonicalUrl={CANONICAL}
      h1="Private Experiences in Bali"
      subtitle="Curated Culinary & Celebration Experiences at Your Villa"
      heroImage="/generated/mychef-experiences-hub-hero-bali-landscape.webp"
      heroImageAlt="Private experiences Bali collection at a luxury villa by myCHEF"
      ogImage="https://mychef.id/generated/mychef-experiences-hub-hero-bali-landscape.webp"
      keywords={[
        'private experiences Bali',
        'villa experiences Bali',
        'food experiences Bali',
        'private dining experiences Bali',
        'Bali culinary experiences',
        'things to do at your villa Bali',
        'private group activities Bali',
        'luxury experiences Bali',
        'Bali celebration experiences',
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
          '@type': 'ItemList',
          name: 'Private Experiences in Bali by myCHEF',
          itemListElement: EXPERIENCES.map((e, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: e.title,
            url: `https://mychef.id${e.href}`,
          })),
        },
      ]}
        ctaText="Plan Your Experience"
        ctaSubtext="Tell us which experience, your date and villa — we will reply within the hour."
      />
      <ArticleContentSection />
    </>
  )
}
