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
    <p><strong>40-80 guests (wedding or large corporate):</strong> Full event team — event coordinator, head waiter, 6-8 servers, 2 kitchen crew, 2 bartenders. This requires advance planning and a site visit to plan the service flow. Contact us at least 2 weeks in advance for events of this size. See our <a href="/blog/bali-wedding-catering-budget-guide" class="text-[#7E6410] hover:underline font-medium">wedding catering guide</a>.</p>`,
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
    secondaryAction: { label: 'View Large Group Catering', href: '/blog/large-group-catering-bali' },
  },
]

const FAQS = [
  {
    question: "How many waitstaff do I need for a dinner party of 14 people at a Bali villa?",
    answer: "For 14 guests with plated service, we recommend 1 head waiter + 2 servers + 1 kitchen runner, plus a bartender if you're serving cocktails or wine throughout. This ensures simultaneous service without delay and lets the chef focus on cooking. For sharing-style service, 1 head waiter + 1 server is often sufficient.",
  },
  {
    question: "Can myCHEF provide both a private chef and event waitstaff for the same event?",
    answer: "Yes. myCHEF provides the complete team — private chef, waitstaff, bartender, and kitchen crew — for villa events of any size. Booking everything through us ensures coordination between kitchen and floor, which produces significantly better service than sourcing the chef and waitstaff separately.",
  },
  {
    question: "What does event waitstaff in Bali cost?",
    answer: "Standard server rates are IDR 200,000–300,000 per person per event (5-6 hour service). A head waiter is IDR 350,000–500,000. A bartender is IDR 300,000–450,000. For a dinner party of 12 guests, a typical front-of-house team (head waiter + 2 servers + bartender) costs approximately IDR 1,000,000–1,300,000 total.",
  },
  {
    question: "Does myCHEF provide event staff for corporate events and large receptions in Bali?",
    answer: "Yes. For corporate team dinners, official receptions, and large villa events (20-80 guests), we provide full event teams including a floor coordinator, multiple servers, bartenders, and kitchen crew. Advance booking of at least 1 week is required for large events.",
  },
  {
    question: "What is the difference between a head waiter and an event coordinator for Bali events?",
    answer: "A head waiter manages service during the meal — timing courses, coordinating with the kitchen, managing the servers. An event coordinator has a broader role: managing the full event timeline from arrival through to close, coordinating all vendors, handling logistics, and acting as the point of contact between the client and all service teams. For events of 30+ guests, both roles are recommended.",
  },
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
      keywords={['event staff bali', 'hire waiters bali', 'event waitstaff bali', 'villa event staff bali', 'bartender hire bali']}
      highlights={['Full Event Teams', 'All Villa Areas', 'From 6 to 80 Guests', 'Briefed & Uniformed']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={[
        { label: 'Large Group Catering Bali', href: '/blog/large-group-catering-bali', desc: 'Private chef catering for groups of 20+ guests in Bali.' },
        { label: 'Corporate Catering Bali', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Full catering and staffing for corporate events in Bali.' },
        { label: 'Villa Staff Bali Guide', href: '/blog/villa-staff-bali-hiring-guide', desc: 'Hiring all villa staff categories in Bali.' },
        { label: 'Wedding Catering Bali', href: '/blog/bali-wedding-catering-budget-guide', desc: 'Full catering and staffing for Bali weddings.' },
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
