import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'
import { UtensilsCrossed, Briefcase, Users, Star } from 'lucide-react'

const SECTIONS = [
  {
    id: 'intro',
    type: 'content' as const,
    subtitle: 'Jakarta Private Dining',
    title: 'Why Jakarta Is the Next Frontier for Private Chef Service',
    body: `<p>Jakarta is home to more than 33 million people across its greater metropolitan area — one of the densest concentrations of high-net-worth households, expat executives, and multinational corporate clients in Southeast Asia. The city has one of the most sophisticated restaurant cultures in the region, yet demand for private chef service at home, in apartments, and in corporate settings is expanding rapidly. Busy executives who spend 90 minutes in traffic each direction are choosing to bring the restaurant experience inside. Expat families settled in Kemang and Pondok Indah want weekly in-home dining that fits their dietary standards. Corporations in SCBD are discovering that private client entertainment in a serviced residence beats any restaurant for confidentiality, atmosphere, and impression.</p>

    <p>myCHEF has built its reputation in Bali serving exactly this client profile — luxury villa residents, expat households, and corporate groups who expect five-star hospitality delivered privately. Jakarta is a natural expansion because the client is the same person: they came through Bali, used myCHEF for a villa dinner or company retreat, and now they want the same standard at home in Jakarta. Our <a href="/fine-dining/private-chef-bali" class="text-[#C5A028] hover:underline font-medium">Bali private chef service</a> gave us the foundation; Jakarta is where we deploy it in a new urban context.</p>

    <p>What makes Jakarta operationally different from Bali is worth understanding before you book. First, kitchen infrastructure varies significantly: a landed house in Kemang may have a full professional kitchen, while a luxury apartment in SCBD may have a compact galley layout that limits what can be produced simultaneously. We ask every Jakarta client about their kitchen configuration during the booking inquiry — this shapes the menu design before anything else. Second, Jakarta's traffic is a genuine logistical variable. Our Jakarta-based chefs build two to three hours of travel buffer into their arrival planning; a last-minute same-day booking that works easily in Seminyak may need more lead time in South Jakarta during peak hours. Third, ingredient sourcing in Jakarta is excellent — Grand Lucky, AEON, Ranch Market, and specialty wet markets give our chefs access to the same quality imported proteins, fresh seafood, and seasonal produce available in Bali. There is no compromise on ingredient quality between the two cities.</p>

    <p>The result is that Jakarta private dining with myCHEF delivers the same menu quality, presentation standard, and hospitality level you would expect from a Bali engagement — adapted to an urban environment where logistics require a bit more advance coordination but the dining experience itself is identical.</p>`,
  },
  {
    id: 'areas',
    type: 'content' as const,
    subtitle: 'Jakarta Service Areas',
    title: 'Where myCHEF Operates in Jakarta',
    body: `<p>Jakarta is a city of distinct neighbourhoods, each with its own residential character and client profile. Our coverage is currently strongest in the southern and central corridors, with selective coverage elsewhere.</p>

    <p><strong>South Jakarta — Kebayoran Baru, Pondok Indah, Kemang</strong><br/>
    This is our highest-demand zone in Jakarta, and for good reason. South Jakarta houses the majority of the city's expat community, a dense concentration of embassies and diplomatic residences, and some of the largest private compounds in the city. Landed houses here typically have proper kitchen infrastructure — full-size professional ranges, adequate prep space, and the physical room for a chef's full mise en place. Client profiles: expat families seeking weekly or monthly household chef arrangements, ambassador residences requiring formal dinner service, and wealthy local families entertaining at home. Kemang in particular has a strong international food culture and clients who understand quality.</p>

    <p><strong>SCBD / Sudirman — Central Business District</strong><br/>
    SCBD is Jakarta's financial and corporate nerve centre. Private chef demand here is primarily corporate: executive household dinners in serviced residences, client entertainment for senior deal teams, and boardroom lunches in private apartments or office suites. The buildings are luxurious, the kitchens can be compact, and the clients are pressed for time. This is the area where our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#C5A028] hover:underline font-medium">corporate catering</a> expertise translates most directly — efficient, professional, executive-grade service in a compressed format.</p>

    <p><strong>Menteng / Central Jakarta</strong><br/>
    Menteng is one of the oldest prestige residential areas in Jakarta — wide tree-lined streets, colonial-era architecture, and large family compounds that have been owned by the same prominent Indonesian families for generations. Demand here is less expat-driven and more oriented toward established local high-net-worth families entertaining in a traditional style, government officials hosting private dinners, and multi-generational family celebrations. Our Indonesian and fusion menu options are particularly well-suited to Menteng clients.</p>

    <p><strong>BSD / Tangerang — Bumi Serpong Damai and surrounding suburbs</strong><br/>
    BSD is the fastest-growing expat residential satellite outside Jakarta proper — large modern houses, international schools, and a growing community of young professional expat families. The houses tend to be newer and better-equipped for cooking than older city apartments. This area suits our expat household chef and weekly meal service arrangements well. Slightly longer chef travel times from central Jakarta apply, but are factored into our pricing transparently.</p>

    <p><strong>Bekasi / East Jakarta</strong><br/>
    We offer limited coverage in East Jakarta and Bekasi. If you are in this area, please enquire directly via WhatsApp with your specific location — we will confirm availability and may arrange a local chef partner for your event.</p>`,
  },
  {
    id: 'services',
    type: 'features' as const,
    subtitle: 'Our Services in Jakarta',
    title: 'What myCHEF Offers in Jakarta',
    features: [
      {
        icon: UtensilsCrossed,
        title: 'Private Dinner Parties',
        desc: 'Intimate plated dinners from 2 guests to seated occasions of 30+. Whether it is a couples tasting menu in Pondok Indah or a formal dinner party for 20 in Menteng, we design and execute the menu end-to-end. See our full <a href="/fine-dining/private-chef-bali" class="text-[#C5A028] hover:underline font-medium">private dining approach</a>.',
      },
      {
        icon: Briefcase,
        title: 'Corporate & Executive',
        desc: 'Boardroom lunches, client entertainment in serviced residences, and executive household dining. Designed for SCBD and Sudirman clients where discretion, punctuality, and presentation quality are non-negotiable. Aligned with our <a href="/blog/corporate-events-catering-bali-team-dining" class="text-[#C5A028] hover:underline font-medium">corporate catering standards</a>.',
      },
      {
        icon: Users,
        title: 'Expat Household Chef',
        desc: 'Weekly or daily meal service for expat families in Kemang, Pondok Indah, and BSD. Minimum one-month arrangement. The chef works within your kitchen, sources ingredients per your dietary requirements, and prepares family meals on a set schedule. Equivalent to our <a href="/blog/live-in-chef-bali-hiring-guide" class="text-[#C5A028] hover:underline font-medium">live-in chef service</a> in Bali.',
      },
      {
        icon: Star,
        title: 'Special Occasions',
        desc: 'Birthdays, anniversaries, engagement celebrations, and milestone dinners. Full event menu design, multi-course plated service, and professional presentation. We also handle international cuisine requests — Japanese omakase, French tasting menu, Mediterranean sharing — depending on your preference.',
      },
    ],
  },
  {
    id: 'costs',
    type: 'content' as const,
    subtitle: 'Jakarta Pricing',
    title: 'Private Chef Jakarta: What Does It Cost?',
    body: `<p>Jakarta private chef pricing reflects the city's operating environment — specifically, the logistics of urban traffic, the cost of ingredient sourcing from premium Jakarta retailers, and the generally higher overhead of operating in one of Southeast Asia's most expensive cities for professional services. As a benchmark, Jakarta pricing runs approximately 10–15% above comparable Bali service levels.</p>

    <p><strong>Private dinner (per occasion):</strong> IDR 500,000–900,000 per person, depending on menu tier. A casual 3-course dinner for 4–6 guests in a South Jakarta home sits at the lower end. A 6-course tasting menu with imported protein (wagyu, langoustine, truffle elements) for a corporate client entertainment dinner sits at the upper end. The per-person price includes chef fee, ingredients, setup, and service.</p>

    <p><strong>Corporate lunch (per person):</strong> IDR 400,000–600,000 per person for a 2–3 course working lunch or boardroom meal. Designed for 6–20 guests. Efficient format, professional presentation, dietary accommodations included.</p>

    <p><strong>Weekly household chef arrangement:</strong> IDR 6,000,000–12,000,000 per month. The range reflects number of service days per week (typically 3–5), number of household members, and complexity of dietary requirements. This covers chef time, standard ingredients, and basic kitchen supplies. Specialty or imported ingredients are charged separately at cost.</p>

    <p><strong>Live-in or daily household chef:</strong> IDR 9,000,000–20,000,000 per month. The upper end applies to large households with complex multi-dietary needs, or where the chef is managing significant entertaining obligations in addition to daily household meals. Jakarta commands a higher live-in premium than Bali due to the cost of living differential for professional chefs in the city.</p>

    <p>All pricing is confirmed after an initial WhatsApp consultation where we understand your specific requirements. Final quotes are fixed — no hidden additions on the day of service. See our full <a href="/pricing" class="text-[#C5A028] hover:underline font-medium">pricing guide</a> for base rate reference.</p>`,
  },
  {
    id: 'vs-bali',
    type: 'content' as const,
    subtitle: 'Jakarta vs Bali',
    title: 'How Jakarta Private Chef Service Differs from Bali',
    body: `<p>If you have used myCHEF in Bali and are now in Jakarta, here is what changes — and what stays the same.</p>

    <p><strong>Setting:</strong> In Bali, private dinners typically happen in villa outdoor living areas, by pool decks, or in open-plan indoor-outdoor spaces. In Jakarta, the setting is almost always fully indoor — an apartment dining room, a landed house dining area, or a corporate meeting room configured for dinner. We adapt plating and presentation accordingly; the elegance is the same, the setting is more urban and intimate.</p>

    <p><strong>Traffic and timing:</strong> Jakarta chefs build 2–3 hours of traffic buffer into their arrival planning, particularly for evening events in peak hours. We ask clients for a confirmed setup window, not just a dinner time. A 7pm dinner typically requires chef arrival by 4pm in South Jakarta.</p>

    <p><strong>Ingredient quality:</strong> Comparable to Bali. Grand Lucky, AEON, and Ranch Market in Jakarta carry the same range of imported proteins, fresh produce, and specialty items available at hardys or Pepito in Bali. Wet market sourcing for fresh fish and vegetables is excellent throughout the city.</p>

    <p><strong>Client expectations:</strong> Jakarta clients tend to be more corporate-formal in their expectations than Bali villa guests. Punctuality, professional dress, and structured service timings matter more. Our Jakarta service level is calibrated accordingly.</p>

    <p><strong>Year-round availability:</strong> Unlike Bali's outdoor dining, which is affected by the wet season and occasional heavy rain, Jakarta indoor dining runs year-round without weather interruption.</p>

    <p><strong>Language:</strong> Most of our Jakarta chefs have strong English communication skills — more so than the average in Bali, where the expat-facing chef pool is smaller. Communication during the booking process and on the day is in English throughout.</p>`,
  },
  {
    id: 'faq',
    type: 'faq' as const,
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Book Your Jakarta Chef',
    title: 'Ready to Book a Private Chef in Jakarta?',
    body: "Message us with your address, date, and group size — we'll confirm availability and send a menu within 2 hours.",
    primaryAction: {
      label: 'Book Your Jakarta Chef',
      href: 'https://wa.me/4915234561712?text=Hi%20myCHEF%2C%20I%27m%20in%20Jakarta%20and%20looking%20for%20a%20private%20chef.',
    },
    secondaryAction: { label: 'View Pricing', href: '/pricing' },
  },
]

const FAQS = [
  {
    question: 'Do you serve all areas of Jakarta?',
    answer:
      'We primarily serve South Jakarta (Kebayoran Baru, Pondok Indah, Kemang), SCBD/Sudirman, Menteng, and BSD/Tangerang. For other areas including East Jakarta and Bekasi, please enquire directly — coverage depends on chef availability in your area.',
  },
  {
    question: 'Is a private chef in Jakarta more expensive than in Bali?',
    answer:
      'Slightly — typically 10–15% higher. Jakarta pricing reflects higher logistics costs due to traffic, slightly higher ingredient sourcing costs from premium urban retailers, and the general cost differential of operating in a major metropolitan city compared to Bali.',
  },
  {
    question: 'Can you do weekly or monthly household chef arrangements?',
    answer:
      "Yes. We offer ongoing household chef arrangements from a minimum of one month. These cover 3–5 service days per week depending on your requirements. The arrangement includes the chef fee and standard ingredients; specialty or imported items are charged at cost. Contact us via WhatsApp to discuss your household's specific needs.",
  },
  {
    question: 'How do you handle Jakarta traffic for chef logistics?',
    answer:
      'Our Jakarta chefs are Jakarta-based and build traffic into their arrival timing as a matter of standard practice. For evening events, we typically ask for a 3-hour setup window before the first course — so a 7pm dinner means chef arrival by 4pm. We confirm this timing during the booking process.',
  },
  {
    question: 'Can you cater for apartment buildings in SCBD?',
    answer:
      'Yes, we regularly work in apartments and serviced residences in SCBD and Sudirman. For larger events (10+ guests), we ask about kitchen layout in advance so we can plan the production flow. Most SCBD apartments have workable kitchen setups for private dinners of up to 12; larger groups may require menu adaptation.',
  },
  {
    question: 'Do you have chefs who speak English?',
    answer:
      'Yes — most of our Jakarta chefs have strong English communication skills. All client communication during the booking process, menu planning, and on the day of service is conducted in English. This is a standard expectation for our expat and corporate client base in Jakarta.',
  },
]

const RELATED_PAGES = [
  { label: 'Jakarta Page', href: '/jakarta', desc: 'myCHEF Jakarta service overview.' },
  { label: 'Private Chef Bali', href: '/fine-dining/private-chef-bali', desc: 'Our flagship Bali private chef service.' },
  { label: 'Corporate Catering', href: '/blog/corporate-events-catering-bali-team-dining', desc: 'Corporate and team dining guide.' },
  { label: 'Live-In Chef Guide', href: '/blog/live-in-chef-bali-hiring-guide', desc: 'How to hire a live-in or household chef.' },
  { label: 'Private Chef for Expats', href: '/blog/private-chef-bali-expats', desc: 'Private chef guide for long-term residents.' },
  { label: 'Pricing', href: '/pricing', desc: 'Full pricing guide for all myCHEF services.' },
]

export default function PrivateChefJakartaGuidePage() {
  return (
    <PremiumPage
      slug="blog/private-chef-jakarta-complete-guide"
      title="Private Chef Jakarta: The Complete Guide"
      description="Everything you need to know about hiring a private chef in Jakarta — areas, costs, services, and how to book."
      seoTitle="Private Chef Jakarta | Hire a Private Chef in Jakarta | myCHEF"
      seoDescription="Hire a private chef in Jakarta for dinner parties, corporate events, and in-home dining. South Jakarta, SCBD, Kemang, Menteng. From IDR 500,000/person. Same-day WhatsApp."
      canonicalUrl="https://mychef.id/blog/private-chef-jakarta-complete-guide"
      h1="Private Chef Jakarta: The Complete Guide"
      subtitle="Everything You Need to Know About Hiring a Private Chef in Jakarta"
      heroImage="/generated/mychef-experience-bali-luna-gallery-1.webp"
      heroImageAlt="Private chef serving an elegant dinner in a Jakarta home — myCHEF service"
      ogImage="https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp"
      keywords={['private chef jakarta', 'hire private chef jakarta', 'personal chef jakarta', 'private chef jakarta cost', 'private dining jakarta']}
      highlights={['Jakarta Areas', 'Services', 'Costs', 'FAQ']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Private Chef Jakarta Guide', 'https://mychef.id/blog/private-chef-jakarta-complete-guide', 'Blog', 'https://mychef.id/blog'),
        faqPageSchema(FAQS.map(f => ({ question: f.question, answer: f.answer }))),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Private Chef Jakarta: The Complete Guide',
          description: 'Everything you need to know about hiring a private chef in Jakarta — areas served, costs, services, and how to book.',
          author: { '@type': 'Organization', name: 'myCHEF.id', url: 'https://mychef.id' },
          publisher: {
            '@type': 'Organization',
            name: 'myCHEF.id',
            logo: { '@type': 'ImageObject', url: 'https://mychef.id/og-image.webp' },
          },
          datePublished: '2026-06-29',
          dateModified: '2026-06-29',
          image: 'https://mychef.id/generated/mychef-experience-bali-luna-gallery-1.webp',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://mychef.id/blog/private-chef-jakarta-complete-guide' },
          url: 'https://mychef.id/blog/private-chef-jakarta-complete-guide',
          wordCount: 1500,
          keywords: 'private chef jakarta, hire private chef jakarta, personal chef jakarta, private chef jakarta cost, private dining jakarta',
        },
      ]}
      ctaText="Book Your Jakarta Chef"
      ctaSubtext="Message us with your address, date, and group size — we'll confirm availability and send a menu within 2 hours."
    />
  )
}
