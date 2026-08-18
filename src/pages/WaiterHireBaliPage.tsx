import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Waiter Hire in Bali -- Professional Service Staff for Villa Events',
    body: `The quality of service staff can define how a villa event is remembered. Food can be exceptional, but if plates arrive cold, glasses stay empty, or service is hesitant and disorganised, the experience falls short. Professional waiters bring the discipline that turns a private villa into a venue.

myCHEF provides vetted, experienced waiters and service staff for private villa events across Bali. Our team is trained in hospitality service standards, arrive in uniform, are briefed on your event's specific requirements, and can manage everything from relaxed family dinners to formal plated wedding receptions.

We supply service staff as a standalone hire or as part of a full catering package alongside a private chef and bar team. We cover all major Bali villa areas: Seminyak, Canggu, Uluwatu, Jimbaran, Sanur, Nusa Dua, Ubud, and Pererenan.`,
  },
  {
    id: 'what-waiters-do',
    type: 'content',
    title: 'What Villa Event Waiters Handle',
    body: `Professional event waiters do far more than carry plates. Our service staff are trained to:

**Pre-service setup** -- Set the table, arrange glassware, position condiments, and prepare the service station. For formal events, table settings are confirmed against the event brief.

**Drinks reception management** -- Pass canapés and welcome drinks, manage ice and refills, and create a welcoming atmosphere as guests arrive.

**Course service** -- Serve all courses, clear between each, and manage the pacing of the meal in coordination with the kitchen team and chef.

**Simultaneous plating** -- For plated dinners, waiters work as a coordinated team to deliver all plates to the table at the same moment. This requires rehearsal and timing -- our experienced staff do this seamlessly.

**Table replenishment** -- Water, bread, condiments, and side dishes are replenished throughout the meal without guests needing to ask.

**Guest needs** -- Dietary requirements, allergies, and special requests are noted before service begins. Any guest with a specific need is tracked by the service team throughout the event.

**Cleanup and breakdown** -- Clearing the table, washing up, bagging waste, and restoring the villa to its pre-event condition. Full cleanup is always included.`,
  },
  {
    id: 'staffing-guide',
    type: 'content',
    title: 'How Many Waiters Do You Need?',
    body: `Getting the staffing level right ensures service is smooth without being over-staffed. General guidelines:

**Up to 10 guests** -- 1 waiter. Suitable for intimate dinners where service is light and guests are relaxed.

**10--20 guests** -- 2 waiters. One manages food service, one manages drinks. This is the most common setup for villa dinner parties.

**20--40 guests** -- 3 waiters. Allows adequate coverage across a longer table or multiple tables without bottlenecks between courses.

**40--60 guests** -- 4--5 waiters + 1 senior service lead. The senior lead coordinates timing across the team and communicates with the kitchen.

**60--100 guests** -- 6--8 waiters + 1 event lead + optional separate bar staff. For weddings and large villa receptions, we always include a dedicated event lead who manages the service operation.

**100+ guests** -- Full event service team. Price and staffing plan on enquiry.

These numbers assume seated table service. For cocktail-style events where guests are standing and grazing, 1 waiter per 20--25 guests is generally adequate. We'll confirm the right team during your enquiry.`,
  },
  {
    id: 'service-levels',
    type: 'content',
    title: 'Levels of Service -- From Relaxed to Formal',
    body: `Not every event requires formal white-glove service. We match the service style to the event:

**Casual Service** -- Relaxed, friendly, family-style. Staff dress in smart casual, serve platters to the table, keep drinks topped up, and clear at natural pauses. Ideal for birthday parties, garden dinners, and family celebrations.

**Standard Table Service** -- Uniforms, coordinated course delivery, full table management. The default for most villa dinner parties and celebrations. Professional without being stiff.

**Formal Plated Service** -- Full European service standards: simultaneous plate delivery, left-hand service, formal clearing, and precise course timing. Required for wedding receptions and chef's table dinners. Staff receive a specific event briefing.

**Butler-Style Service** -- One or two dedicated service staff assigned to a small group (typically 6--12 guests), providing personalised, attentive service throughout the event. Premium option for very intimate occasions.

We confirm the service level during your booking and brief the team accordingly.`,
  },
  {
    id: 'rates',
    type: 'content',
    title: 'Waiter Hire Rates in Bali',
    body: `**Contact us for pricing** via WhatsApp. We do not publish a fixed waiter list rate while staffing packages are under review.

Share your event date, guest count, service style (plated, buffet, canapés) and villa area. We will recommend team size and send a written quote — usually the same day.

For full catering packages (chef + waiters + bar), the team is quoted together. A 50% deposit typically confirms your booking once you approve the proposal.`,
  },
  {
    id: 'cta',
    type: 'content',
    title: 'Book Waiters for Your Bali Villa Event',
    body: `Tell us your event date, location, guest count, and service style preference. We'll confirm availability and propose the right team size within a few hours.`,
  },
]

const faqs = [
  { question: 'How much do waiters and bartenders cost in Bali?', answer: 'Waiters and butlers priced on request. Cocktail packages from IDR 500,000++ per guest (min 10). <a href="/in-villa-service">In-villa service</a>.' },
  { question: 'Minimum booking?', answer: 'Hourly roles usually 3-hour minimum; waiter bookings often start at two waiters.' },
  { question: 'Can we hire staff without food?', answer: 'Yes — self-catered or third-party caterer support is normal.' },
  { question: 'What do staff wear?', answer: 'Professional uniforms matched to event formality.' },
  { question: 'Alcohol included?', answer: 'No — BYO or sourced at cost; hire covers the professional.' },
  { question: 'Waiter ratio?', answer: 'About one waiter per 10 guests for formal service.' },
  { question: 'Butler service?', answer: 'Yes — <a href="/in-villa-service/butlers">butlers</a>.' },
  { question: 'Mixology and signature cocktails?', answer: 'Yes — <a href="/in-villa-service/mixology">mixology</a>.' },
  { question: 'Areas covered?', answer: 'Island-wide. <a href="/locations">Locations</a>.' },
  { question: 'Combine with private chef?', answer: 'Yes — most common luxury setup.' },
  { question: 'Vetted staff?', answer: 'Employed/supervised teams with replacement-or-refund cover.' },
  { question: 'How to book staff?', answer: 'WhatsApp date, area, headcount and roles needed.' },
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
]

const relatedPages = [
  { label: 'Event Staff Bali', href: '/in-villa-service', desc: 'Full event crew hire including setup and breakdown' },
  { label: 'Cocktail Packages Bali', href: '/in-villa-service/bartenders', desc: 'Complete cocktail packages (not hourly hire)' },
  { label: 'Villa Party Catering', href: '/events/villa-parties', desc: 'End-to-end villa party catering' },
  { label: 'Private Chef Bali', href: '/private-chef-bali', desc: 'In-villa private chef service' },
  { label: 'Plated Dinner Catering', href: '/catering/plated-catering', desc: 'Formal multi-course dinner service' },
  { label: 'Large Group Catering', href: '/group-villa-dinner-packages-bali', desc: 'Catering for 30+ guests' },
]

export default function WaiterHireBaliPage() {
  return (
    <PremiumPage
      slug="blog/waiter-hire-bali"
      title="Waiter Hire Bali -- Professional Service Staff for Villa Events & Dinners"
      seoTitle="Waiter Hire Bali -- Table Service Staff | myCHEF"
      description="Hire professional waiters and service staff for villa events in Bali. Trained hospitality staff for dinner parties, wedding receptions, and private."
      seoDescription="Waiter hire in Bali for villa events. Trained hospitality staff for dinner parties, weddings and private celebrations. Contact us for pricing via WhatsApp."
      h1="Waiter Hire Bali -- Professional Service Staff for Villa Events & Dinners"
      subtitle="Trained hospitality waiters for villa dinner parties, weddings, and private celebrations -- from casual garden dinners to formal plated receptions. Contact us for pricing."
      heroImage="/images/blog/waiter-hire-bali.jpg"
      heroImageAlt="Uniformed professional Balinese waiter serving a course at an elegant villa dinner event in Bali"
      ogImage="/images/blog/waiter-hire-bali.jpg"
      canonicalUrl="https://mychef.id/blog/waiter-hire-bali"
      keywords={[
        'waiter hire bali',
        'hire waiters bali',
        'service staff bali',
        'event waiters bali',
        'villa waiter bali',
        'waiter service bali event',
        'private event waiters bali',
        'table service staff bali',
        'event staff hire bali',
        'hospitality staff bali',
      ]}
      highlights={['Trained Hospitality Staff', 'All Service Styles', 'Same-Day Replacement', 'Pricing on request']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book Service Staff"
      ctaSubtext="Tell us your event date, guest count, and service style -- we'll confirm availability within a few hours."
      extraJsonLd={[
        breadcrumbSchema('Waiter Hire Bali', 'https://mychef.id/blog/waiter-hire-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Waiter Hire Bali -- Professional Service Staff for Villa Events & Dinners',
          description:
            'Hire professional waiters for villa events in Bali. Trained hospitality service staff for dinner parties, wedding receptions, and private celebrations. Same-day replacement guarantee.',
          url: 'https://mychef.id/blog/waiter-hire-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/waiter-hire-bali.jpg',
        },
      ]}
    />
  )
}
