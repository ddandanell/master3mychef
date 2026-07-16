import PremiumPage, { type PageSection } from '@/components/PremiumPage'
import { breadcrumbSchema, faqPageSchema } from '@/components/SeoHead'

const sections: PageSection[] = [
  {
    id: 'intro',
    type: 'content',
    title: 'Holiday Chef Bali -- Private Chef for Christmas, New Year, and Festive Season',
    body: `Spending the holidays in Bali is a particular kind of luxury. A private villa with a pool. Warm weather in December. The island at its most magical. The only thing that could make it better is not having to cook, source ingredients in an unfamiliar market, or compromise on what a proper festive dinner looks like.

myCHEF's holiday chef service gives Bali villa guests a complete festive dining experience -- from Christmas Eve canapes to New Year's Eve countdown dinners, from Boxing Day brunches to celebration lunches across the festive period. Our chefs bring the full scope of holiday cooking: roast turkey and all the trimmings, seafood feasts, Balinese festive spreads, or anything the occasion calls for.

We cover all major villa areas across Bali during the festive season. Book early -- Christmas and New Year bookings fill well in advance.`,
  },
  {
    id: 'what-included',
    type: 'content',
    title: 'What the Holiday Chef Service Covers',
    body: `**Christmas Eve Dinner** -- The evening before Christmas is one of the season's most significant meals. We deliver everything from intimate dinners for two to family feasts for 20: canapes and pre-dinner drinks, a structured multi-course meal, and dessert. Our chefs can produce a traditional European Christmas Eve seafood dinner, a classic roast, or a fusion menu that reflects where you are.

**Christmas Day Lunch or Dinner** -- The main event. Turkey or goose with all the trimmings -- roast potatoes, stuffing, glazed vegetables, gravy, cranberry sauce, bread sauce -- all executed properly, in your villa kitchen, served at your table. Alternatively, a modern Australian or European Christmas Day lunch (seafood, BBQ, lighter), a Balinese feast, or a fully custom menu. We adapt to what Christmas means to your family.

**New Year's Eve Celebration Dinner** -- A premium multi-course dinner timed to build through the evening, culminating before or at midnight. We design a menu that treats the occasion as what it is: the night of the year that most demands exceptional food. Champagne service, canapes on arrival, a progressive menu, and dessert at midnight.

**New Year's Day Recovery** -- Brunch service for New Year's Day: eggs every way, stacks of pancakes, fresh juice, restorative Indonesian noodle soups, healthy bowls. Our chefs are well practised at the NYD morning-after brunch.

**Festive Season Daily Service** -- For families spending the full festive period (December 20--January 5) in Bali, we offer daily chef service: breakfast and dinner every day, with a changing menu to reflect the festive mood. A live-in or recurring daily chef who becomes part of the household for the holiday.

**Festive Canapes and Cocktail Parties** -- For villa gatherings with friends, neighbours, or business contacts during the festive period: professional canapes served by our team, cocktail bartenders, and a grazing table or buffet.`,
  },
  {
    id: 'menus',
    type: 'content',
    title: 'Festive Menu Options',
    body: `**Traditional European Christmas** -- The menu your family has eaten for decades, executed properly in a Bali villa kitchen. Roast turkey (sourced and ordered in advance), stuffing, roast potatoes, braised red cabbage, Brussels sprouts, roasted parsnips, proper turkey gravy, and cranberry sauce. Christmas pudding or yule log for dessert.

**Modern Seafood Christmas** -- For families who prefer a seafood-forward Christmas: chilled prawn cocktails, freshly shucked oysters, whole baked fish, whole crab, grilled lobster tails. Australian, Scandinavian, or Mediterranean seafood feast formats.

**Balinese and Indonesian Festive Feast** -- A celebration menu built on the extraordinary produce and flavours of Bali. Babi guling (Balinese suckling pig), satay, soto, nasi campur, sambal selection, and a beautiful dessert spread of traditional Indonesian sweets. For families who want their Bali holiday to taste like Bali.

**BBQ and Outdoor Celebration** -- For villas with outdoor grill setups: a premium BBQ feast with whole sides of beef, fresh seafood, corn, roasted vegetables, and fire-cooked accompaniments. Perfect for Boxing Day, New Year's Day, or any celebration that calls for outdoor cooking.

**Fusion and Creative Festive Menu** -- For guests who want a chef's creative interpretation of the festive season using Bali's finest available ingredients. A menu that acknowledges Christmas and the season without being bound to a single culinary tradition.`,
  },
  {
    id: 'booking',
    type: 'content',
    title: 'When and How to Book Your Holiday Chef',
    body: `Festive season bookings in Bali are the most time-sensitive of the year. The best chefs are committed by mid-November. Specific ingredients -- turkey, imported meats, premium seafood -- need to be ordered weeks in advance.

**When to book:** We recommend confirming your festive chef booking by 30 November for Christmas period. For New Year's Eve specifically, October--November is the safest window for the best chef selection.

**What to tell us:** Your dates (including any additional meals outside the main event), your villa area, group size and composition (adults, children, dietary restrictions), and the type of menu you are looking for.

**Turkey ordering:** For traditional roast turkey, we coordinate sourcing from Bali's specialist suppliers and order your bird well in advance. Tell us your group size and we handle the rest.

**Daily service for the period:** If you want a chef for the full festive stay rather than individual meals, our festive package covers daily service with a rotating menu and the flexibility to adjust as the holiday unfolds.`,
  },
  {
    id: 'pricing',
    type: 'content',
    title: 'Holiday Chef Pricing',
    body: `Holiday chef pricing includes a seasonal surcharge that reflects demand during the peak festive period. All pricing is transparent and quoted before confirmation.

**Christmas Day traditional roast (up to 8 guests):** From IDR 4,000,000--8,000,000 inclusive of chef, service, and standard ingredients. Imported or specialty ingredients (premium turkey, lobster, specific wines) billed additionally.

**New Year's Eve multi-course dinner (4--6 guests):** From IDR 3,000,000--6,000,000 per booking for a 4--5 course celebration dinner with canapes. Champagne and beverages additional.

**Daily festive chef service (December 20--January 5):** Quoted as a complete package for the period. Generally 30--50% more efficient than booking individual meals separately.

**Canapes and cocktail party catering (20--50 guests):** From IDR 700,000 per person for canapé service, with separate bartender quote.

All festive bookings require a 50% deposit to confirm.`,
  },
  {
    id: 'areas',
    type: 'content',
    title: 'Bali Holiday Chef Coverage',
    body: `We cover the full range of Bali's villa areas during the festive season.

**Seminyak and Petitenget** -- Bali's most popular festive destination. Large villa compounds, family groups, sophisticated guests. Our most-requested area for Christmas and New Year bookings.

**Canggu and Pererenan** -- Popular with younger families, expat groups, and creative professionals spending the holidays in Bali. Our daily service offering is particularly well suited here.

**Uluwatu and Bukit** -- Cliff villas with extraordinary NYE settings. A myCHEF New Year's Eve dinner on an Uluwatu terrace, with the ocean below, is one of Bali's most memorable ways to welcome the new year.

**Ubud** -- For families who prefer a quieter, more spiritual festive experience. Jungle villas, traditional Balinese architecture, and a menu that draws on Ubud's excellent local produce.

**Jimbaran, Nusa Dua, and Sanur** -- Family-oriented villa areas with excellent domestic logistics. Good options for larger family groups who prioritise ease of access and family-friendly environments.`,
  },
]

const faqs = [
  {
    question: 'How far in advance should I book a holiday chef for Christmas or New Year?',
    answer:
      'We recommend booking by 30 November at the latest for Christmas bookings, and October--November for New Year\'s Eve. The best chefs commit early during the festive season, and specific ingredients (especially imported turkey or specialty seafood) need to be ordered well in advance.',
  },
  {
    question: 'Can you source a proper roast turkey in Bali?',
    answer:
      'Yes. We work with specialist suppliers who stock imported and locally raised turkeys for the festive season. We manage the sourcing entirely -- you tell us your group size and preferred size of bird, and we handle the rest. Order as early as possible to guarantee availability.',
  },
  {
    question: 'Do you provide Christmas Day service for large families (15+ guests)?',
    answer:
      'Yes. Large group festive catering is a core service. For groups of 15 or more, we typically bring two chefs and additional service staff to ensure the timing and quality of a large roast dinner is managed properly. Tell us your group size when enquiring.',
  },
  {
    question: 'Can we book the chef for daily service across the full holiday period?',
    answer:
      "Yes. Daily festive chef service -- breakfast and dinner every day across December 20--January 5, or any subset of that period -- is one of our most popular offerings. The chef builds a rotating seasonal menu, adapts to what the group wants each day, and becomes part of the household for the holiday. This is often more economical than booking individual meals separately.",
  },
  {
    question: 'Is there a New Year\'s Eve surcharge?',
    answer:
      "Yes. New Year's Eve is the single highest-demand night of the year in Bali, and our pricing reflects that. All festive pricing includes a seasonal surcharge. We are transparent about this from the first quote -- you will always know the full cost before confirming.",
  },
  {
    question: 'Can you provide bartenders and cocktail service for a festive party at the villa?',
    answer:
      "Yes. We can arrange bartenders, mixologists, and canape service teams for festive villa parties and cocktail hours. Our [Bartender Hire Bali](/blog/bartender-hire-bali) and [Mixologist Hire Bali](/blog/mixologist-hire-bali) pages cover this in more detail.",
  },
]

const relatedPages = [
  { label: 'Christmas Dinner Bali', href: '/blog/christmas-dinner-bali-villa', desc: 'Christmas dinner at your Bali villa' },
  { label: 'New Year\'s Eve Bali Private Chef', href: '/blog/new-years-eve-bali-private-chef', desc: 'NYE celebration dinner and catering' },
  { label: 'Villa Party Catering Bali', href: '/blog/villa-party-catering-bali', desc: 'Full villa party catering service' },
  { label: 'Bartender Hire Bali', href: '/blog/bartender-hire-bali', desc: 'Professional bartender service for events' },
  { label: 'Large Group Catering Bali', href: '/blog/large-group-catering-bali', desc: 'Catering for 30+ guests' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Complete pricing guide' },
]

export default function HolidayChefBaliPage() {
  return (
    <PremiumPage
      slug="blog/holiday-chef-bali"
      title="Holiday Chef Bali -- Private Chef for Christmas, New Year and Festive Season | myCHEF"
      seoTitle="Holiday Chef Bali -- Private Chef for Christmas, New Year and Festive Season"
      description="Holiday chef service in Bali for Christmas, New Year, and the festive season. Traditional roast, seafood feast, Balinese spread, or bespoke. All villa areas covered. Book early."
      seoDescription="Holiday chef Bali. Private chef for Christmas dinner, New Year's Eve, and festive season catering in Bali villas. Traditional roast, seafood, Balinese feasts. Book early -- fills fast."
      h1="Holiday Chef Bali -- Private Chef for Christmas, New Year and Festive Season"
      subtitle="Festive dinners. Christmas roasts. New Year's Eve countdowns. All at your villa."
      heroImage="/images/blog/holiday-chef-bali.jpg"
      heroImageAlt="Indonesian private chef preparing a festive Christmas dinner spread in a Bali villa kitchen"
      ogImage="/images/blog/holiday-chef-bali.jpg"
      canonicalUrl="https://mychef.id/blog/holiday-chef-bali"
      keywords={[
        'holiday chef bali',
        'christmas chef bali',
        'new year private chef bali',
        'festive catering bali',
        'christmas dinner bali villa',
        'new years eve chef bali',
        'christmas day chef bali',
        'festive season chef bali',
        'holiday catering bali',
        'christmas private chef bali',
      ]}
      highlights={['Christmas and New Year', 'Traditional Roast Available', 'Daily Festive Service', 'All Areas Covered']}
      sections={sections}
      faqs={faqs}
      relatedPages={relatedPages}
      ctaText="Book Your Holiday Chef"
      ctaSubtext="Tell us your dates, villa area, group size, and whether you have a specific menu in mind. Festive season bookings fill early -- contact us as soon as your dates are confirmed."
      extraJsonLd={[
        breadcrumbSchema('Holiday Chef Bali', 'https://mychef.id/blog/holiday-chef-bali', 'Blog', 'https://mychef.id/journal'),
        faqPageSchema(faqs),
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Holiday Chef Bali -- Private Chef for Christmas, New Year and Festive Season',
          description: 'Holiday chef service in Bali for Christmas, New Year, and the festive season. All villa areas.',
          url: 'https://mychef.id/blog/holiday-chef-bali',
          datePublished: '2026-06-30',
          dateModified: '2026-06-30',
          author: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          publisher: { '@type': 'Organization', name: 'myCHEF Bali', url: 'https://mychef.id' },
          image: 'https://mychef.id/images/blog/holiday-chef-bali.jpg',
        },
      ]}
    />
  )
}
