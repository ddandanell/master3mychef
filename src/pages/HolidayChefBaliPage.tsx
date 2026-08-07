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
  { question: 'How do I book this with myCHEF in Bali?', answer: 'WhatsApp date, guest count, villa area and your goal. Or use <a href="/book">book</a> / <a href="/quote">quote</a>.' },
  { question: 'Where can I see prices?', answer: 'Published tables on <a href="/pricing">pricing</a> and <a href="/private-chef-bali">private chef</a> day rates.' },
  { question: 'Is service available island-wide?', answer: 'Yes across major villa regions. <a href="/locations">Locations</a>.' },
  { question: 'Can you handle dietary requirements?', answer: 'Yes when briefed early — no extra charge for standard adaptations.' },
  { question: 'What is included vs extra?', answer: 'Quotes list inclusions; premium ingredients, alcohol and extra staff are itemised when needed.' },
  { question: 'Deposit and cancellation?', answer: 'Usually 50% deposit; refund tiers on <a href="/cancellation">cancellation</a>.' },
  { question: 'How fast is a proposal?', answer: 'Often within 2–24 hours of a complete brief.' },
  { question: 'Can this combine with other services?', answer: 'Yes — private chef, catering and a mobile cocktail bar stack in one plan. <a href="/in-villa-service/bartenders">Mobile bar →</a> · <a href="/catering">Catering →</a> · <a href="/private-chef-bali">Private chef →</a>' },
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

const relatedPages = [
  { label: 'Christmas Dinner Bali', href: '/blog/holiday-chef-bali', desc: 'Christmas dinner at your Bali villa' },
  { label: 'New Year\'s Eve Bali Private Chef', href: '/blog/holiday-chef-bali', desc: 'NYE celebration dinner and catering' },
  { label: 'Villa Party Catering Bali', href: '/events/villa-parties', desc: 'Full villa party catering service' },
  { label: 'Cocktail Packages Bali', href: '/in-villa-service/bartenders', desc: 'Complete cocktail packages for villa events' },
  { label: 'Large Group Catering Bali', href: '/group-villa-dinner-packages-bali', desc: 'Catering for 30+ guests' },
  { label: 'Private Chef Cost Bali', href: '/blog/private-chef-cost-bali', desc: 'Complete pricing guide' },
]

export default function HolidayChefBaliPage() {
  return (
    <PremiumPage
      slug="blog/holiday-chef-bali"
      title="Holiday Chef Bali -- Christmas, New Year & Festive Season | myCHEF | myCHEF"
      seoTitle="Holiday Chef Bali -- Christmas, New Year & Festive Season | myCHEF"
      description="Holiday chef service in Bali for Christmas, New Year, and the festive season. Traditional roast, seafood feast, Balinese spread, or bespoke."
      seoDescription="Holiday chef Bali. Private chef for Christmas dinner, New Year's Eve and festive season catering. Traditional roast, seafood, Balinese feasts. Book early."
      h1="Holiday Chef Bali -- Christmas, New Year & Festive Season  myCHEF"
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
          headline: 'Holiday Chef Bali -- Christmas, New Year & Festive Season | myCHEF',
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
