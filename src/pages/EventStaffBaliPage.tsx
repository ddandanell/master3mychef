import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const SECTIONS: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    subtitle: 'Event Staff Bali',
    title: 'Event Staff Bali: Hiring Waiters, Bartenders & Kitchen Crew for Villa Events',
    body: `<p>A private chef is the foundation of a great villa event — but for anything beyond a simple dinner for six, you need event staff alongside the kitchen. Waiters to serve courses and manage the table. A bartender for the cocktail hour. Kitchen crew to assist the chef with prep and cleanup. Without the right supporting team, even the best chef is stretched too thin and the service quality suffers.</p>
    <p>myCHEF provides complete event staffing for Bali villa events: trained waitstaff, professional bartenders, kitchen crew and commis chefs, and event managers for larger functions. This guide covers what each role does, how many staff you need for different event sizes, what professional event staff in Bali costs, and how to brief them effectively.</p>`,
  },
  {
    id: 'roles',
    type: 'content',
    subtitle: 'Staff Roles',
    title: 'Event Staff Roles Explained',
    body: `<p>Understanding what each role does helps you determine what you actually need for your event:</p>
    <p><strong>Head Waiter / Event Supervisor:</strong> The senior front-of-house person who coordinates all service during the event. Manages plate delivery timing with the kitchen, coordinates wine service, handles guest-facing interactions, and ensures the evening runs to schedule. For any event of 10+ guests, a head waiter is essential — this is the person who prevents service chaos when the kitchen sends out three courses simultaneously.</p>
    <p><strong>Waitstaff (servers):</strong> The staff who carry plates, top up drinks, clear courses, and provide attentive table service throughout the meal. The number of servers needed depends on the event format (see the staffing ratios section below). For plated fine dining service, you need more servers than for sharing-style family dinners.</p>
    <p><strong>Bartender:</strong> Handles the full bar during cocktail hour and the meal — mixing cocktails, opening and pouring wine, managing a drinks station, tracking consumption. A dedicated bartender lets the kitchen focus entirely on food without managing drinks. For any event where guests will be drinking throughout (wine with dinner, cocktails before), a bartender is strongly recommended.</p>
    <p><strong>Kitchen Runner / Commis:</strong> Assists the chef in the kitchen — carrying completed plates to the service pass, washing up during service so the kitchen stays manageable, handling small prep tasks. For larger events (12+ guests), a kitchen runner makes the difference between a smooth service and a chaotic one.</p>
    <p><strong>Event Coordinator / Floor Manager:</strong> For very large events (30+ guests, weddings, corporate galas), a dedicated floor manager coordinates all staff, communicates with the host and kitchen, manages the timeline, and handles any issues that arise. This role becomes essential at scale.</p>`,
  },
  {
    id: 'ratios',
    type: 'content',
    subtitle: 'Staffing Ratios',
    title: 'How Many Staff Do You Need? Ratios by Event Size',
    body: `<p>These are standard staffing ratios for different event formats. Use them as a starting guide — specific events may need adjustment based on the venue layout, service style, and complexity:</p>
    <p><strong>2-6 guests (intimate dinner):</strong> The private chef typically handles service as well as cooking — bringing courses from kitchen to table, managing wine top-ups. A dedicated waiter is optional but transforms the experience for 4+ guests wanting genuinely attentive service.</p>
    <p><strong>8-12 guests (dinner party):</strong> 1 head waiter + 1 server + kitchen runner. The chef focuses on cooking, the head waiter manages all front-of-house, the server carries plates and tops up drinks, the runner manages kitchen flow. Add a bartender if a cocktail hour is included.</p>
    <p><strong>14-20 guests (large villa dinner):</strong> 1 head waiter + 2 servers + 1 kitchen runner + 1 bartender. This size requires the chef to have genuine kitchen support — the runner is essential. The second server allows simultaneous service of all tables without delay.</p>
    <p><strong>20-40 guests (corporate or celebration event):</strong> 1 event coordinator + 1 head waiter + 3-4 servers + 1-2 kitchen crew + 1-2 bartenders. At this scale, coordination between kitchen and floor becomes complex. An event coordinator is strongly recommended.</p>
    <p><strong>40-80 guests (wedding or large corporate):</strong> Full event team — event coordinator, head waiter, 6-8 servers, 2 kitchen crew, 2 bartenders. This requires advance planning and a site visit to plan the service flow. Contact us at least 2 weeks in advance for events of this size. See our <a href="/bali-wedding-catering-packages" class="text-[#7E6410] hover:underline font-medium">wedding catering guide</a>.</p>`,
  },
  {
    id: 'costs',
    type: 'content',
    subtitle: 'Staff Costs',
    title: 'Event Staff Costs in Bali',
    body: `<p>Event staff costs in Bali vary by role and experience level:</p>
    <ul style="list-style:disc;padding-left:1.5rem;margin-top:0.75rem;display:flex;flex-direction:column;gap:0.5rem;">
      <li><strong>Head Waiter / Event Supervisor:</strong> IDR 350,000 – 500,000 per event (typically 5-6 hours service). Higher for longer events or formal functions.</li>
      <li><strong>Waitstaff (server):</strong> IDR 200,000 – 300,000 per person per event.</li>
      <li><strong>Bartender:</strong> IDR 300,000 – 450,000 per event. Higher for cocktail-heavy programs.</li>
      <li><strong>Kitchen Runner / Commis:</strong> IDR 200,000 – 280,000 per event.</li>
      <li><strong>Event Coordinator / Floor Manager:</strong> IDR 600,000 – 1,000,000 per event depending on scale and complexity.</li>
    </ul>
    <p style="margin-top:0.75rem;">All staff arrive uniform-ready and briefed on the event format. Overtime rates apply for events running beyond the agreed service period. For the full cost picture including chef and food see our <a href="/blog/private-chef-cost-bali" class="text-[#7E6410] hover:underline font-medium">private chef cost guide</a>.</p>`,
  },
  {
    id: 'briefing',
    type: 'content',
    subtitle: 'Briefing Staff',
    title: 'How to Brief Event Staff for a Bali Villa Event',
    body: `<p>Well-briefed staff deliver noticeably better service. Key information to provide in advance:</p>
    <p><strong>Guest count and seating layout:</strong> How many guests, how tables are arranged, whether guests are assigned seats or self-seating. The head waiter uses this to plan service flow.</p>
    <p><strong>Service style:</strong> Formal plated service (each course served individually from kitchen)? Sharing platters (communal dishes)? Buffet? Canapes and standing service? Each format has different staffing requirements and the team needs to know which they are executing.</p>
    <p><strong>Menu and dietary requirements:</strong> Staff should know every dish and every dietary restriction at the table. A server who doesn't know which dish contains nuts is a liability for allergic guests.</p>
    <p><strong>Timeline:</strong> Guest arrival time, cocktail hour duration, dinner start, expected end time. The head waiter coordinates the kitchen with this timeline.</p>
    <p><strong>Special moments:</strong> Cake presentation, toasts, surprise moments, gift presentation. Event staff can support or step back as needed — but they need to know in advance.</p>`,
  },
  {
    id: 'cta',
    type: 'cta',
    subtitle: 'Book Event Staff',
    title: 'Book Event Staff for Your Bali Villa Event',
    body: 'Tell us your event date, guest count, service format, and whether you also need a private chef. We build the right team for your event.',
    primaryAction: { label: 'Chat on WhatsApp', href: 'https://wa.me/6289674072020' },
    secondaryAction: { label: 'View Large Group Catering', href: '/group-villa-dinner-packages-bali' },
  },
]

const FAQS = [
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — chef, catering, staff and transport can stack in one plan.' },
  { question: 'Do you clean up?', answer: 'Yes on serviced formats.' },
  { question: 'Kids welcome?', answer: 'Yes with adapted menus when needed. <a href="/kids-menus">Kids menus</a>.' },
  { question: 'Who is myCHEF?', answer: 'Bali villa hospitality company — chefs, catering, events and staffing. <a href="/about">About</a> · <a href="/why-mychef">Why myCHEF</a>.' },
  { question: 'More questions?', answer: 'See the central <a href="/faq">FAQ</a>.' },
  { question: 'What deposit do you require?', answer: 'A 50% deposit confirms your booking and locks the date. The balance is typically due the day before service. Full terms: <a href="/cancellation">cancellation policy</a>.' },
  { question: 'What does "++" mean on prices?', answer: '"++" means 11% government tax and 10% service charge are added to the listed price. Written quotes show the all-in total before you pay.' },
  { question: 'Which areas of Bali do you cover?', answer: 'Island-wide villa coverage including Seminyak, Canggu, Ubud, Uluwatu, Nusa Dua, Jimbaran, Sanur, Berawa and Pererenan. Browse <a href="/locations">locations</a>.' },
  { question: 'How far in advance should I book?', answer: 'A few days for most dinners; one to two weeks for larger events; longer for peak season and weddings. Last-minute is often possible — ask on WhatsApp.' },
  { question: 'Can you accommodate allergies and special diets?', answer: 'Yes — vegan, vegetarian, gluten-free, nut-free, shellfish allergy, pregnancy-safe and halal-sensitive menus when briefed in advance, at no extra charge. Guide: <a href="/blog/food-allergies-dietary-requirements-private-chef-bali">food allergies</a>.' },
  { question: 'Do you clean up after service?', answer: 'Yes on serviced chef, catering and fine-dining formats — kitchen and service areas restored before we leave.' },
  { question: 'How do I get a quote?', answer: 'WhatsApp date, guest count, villa area and what you want. Or use <a href="/quote">quote</a> / <a href="/book">book</a> / <a href="/faq">FAQ</a>.' },
  { question: 'What if a chef or staff member cannot make it?', answer: 'We send a verified replacement of equivalent role or refund that service. Details: <a href="/why-mychef">why myCHEF</a>.' },
]

export default function EventStaffBaliPage() {
  return (
    <PremiumPage
      slug="blog/event-staff-bali"
      title="Event Staff Bali: Hiring Waiters, Bartenders & Kitchen Crew for Villa Events"
      description="How to hire event staff for Bali villa events — waiters, bartenders, kitchen crew, and event coordinators. Staffing ratios, costs and briefing tips."
      h1="Event Staff Bali — Hiring Waiters, Bartenders & Kitchen Crew for Villa Events"
      subtitle="The complete guide to event staffing for Bali villa dinners, celebrations, and corporate events"
      heroImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80"
      heroImageAlt="Professional event waitstaff serving guests at an elegant Bali villa dinner party"
      ogImage="https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80"
      keywords={['event staff bali', 'hire waiters bali', 'event waitstaff bali', 'villa event staff bali', 'cocktail packages bali']}
      highlights={['Full Event Teams', 'All Villa Areas', 'From 6 to 80 Guests', 'Briefed & Uniformed']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Large Group Catering Bali', href: '/group-villa-dinner-packages-bali', desc: 'Private chef catering for groups of 20+ guests in Bali.' },
        { label: 'Corporate Catering Bali', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Full catering and staffing for corporate events in Bali.' },
        { label: 'Villa Staff Bali Guide', href: '/staffing/villa-staff', desc: 'Hiring all villa staff categories in Bali.' },
        { label: 'Wedding Catering Bali', href: '/bali-wedding-catering-packages', desc: 'Full catering and staffing for Bali weddings.' },
        { label: 'Pricing Guide', href: '/pricing', desc: 'Full cost breakdown for private chefs and event staffing.' },
        { label: 'Book Event Staff', href: '/contact', desc: 'Get a quote for your event.' },
      ]}
      extraJsonLd={[
        breadcrumbSchema('Event Staff Bali', 'https://mychef.id/blog/event-staff-bali', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Event Staff Bali: Hiring Waiters, Bartenders & Kitchen Crew for Villa Events',
          description: 'How to hire event staff for Bali villa events — waiters, bartenders, kitchen crew, and event coordinators. Staffing ratios and costs for events of 6 to 80 guests.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF.id', logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' } },
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/event-staff-bali' },
          url: 'https://mychef.id/blog/event-staff-bali',
        },
      ]}
      ctaText="Book Event Staff for Your Bali Villa Event"
      ctaSubtext="Private chef, waitstaff, bartender, kitchen crew — we build the right team for your event size and service style."
    />
  )
}
