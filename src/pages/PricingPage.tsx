import { Tag } from 'lucide-react'
import PremiumPage from '@/components/PremiumPage'
import { breadcrumbSchema, aggregateRatingSchema, serviceWithOfferSchema } from '@/components/SeoHead'
import PricingCalculator from '@/components/PricingCalculator'
import EmailCaptureBar from '@/components/EmailCaptureBar'

const PRICING_OFFER_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  name: 'myCHEF Bali services from IDR 250,000',
  description: 'Two-tier fine dining pricing (Kitchen-Service and Full-Service), plus catering, event, and villa staffing services in Bali.',
  price: '250000',
  priceCurrency: 'IDR',
  availability: 'https://schema.org/InStock',
  url: 'https://mychef.id/pricing',
  seller: { '@id': 'https://mychef.id/#business' },
  itemOffered: {
    '@type': 'Service',
    name: 'myCHEF pricing',
    description: 'Two-tier fine dining pricing (Kitchen-Service and Full-Service), plus catering, events, and hospitality staffing in Bali.',
  },
}

const PRICE_SPECIFICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'myCHEF Bali Service Pricing',
  description: 'Transparent pricing for private chef, catering, events, and staffing services in Bali.',
  url: 'https://mychef.id/pricing',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — Mediterranean Sea Experience',
        description: '5-course Italian seafood tasting menu. Full-Service includes all ingredients, table setting, service staff, and cleanup.',
        priceSpecification: { '@type': 'PriceSpecification', price: '2200000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — Wagyu Experience',
        description: '4-course Wagyu-focused menu with handmade pasta and grilled ribeye. Full-Service includes all ingredients and service.',
        priceSpecification: { '@type': 'PriceSpecification', price: '2400000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Offer',
        name: 'Private Villa Chef — Hourly Rate',
        description: 'Private chef for breakfast, lunch, or dinner in your villa. Minimum 4 hours. Groceries at cost.',
        priceSpecification: { '@type': 'PriceSpecification', price: '600000', priceCurrency: 'IDR', unitText: 'HOUR' },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Offer',
        name: 'BBQ Catering',
        description: 'BBQ catering for villa parties. Includes grill setup, meats, sides, sauces, and service staff.',
        priceSpecification: { '@type': 'PriceSpecification', price: '450000', priceCurrency: 'IDR', unitText: 'PERSON' },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Offer',
        name: 'Drop-Off Catering',
        description: 'Pre-plated meals delivered to your villa. Minimum 4 guests.',
        priceSpecification: { '@type': 'PriceSpecification', price: '350000', priceCurrency: 'IDR', unitText: 'PERSON' },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Offer',
        name: 'Wait Staff & Servers',
        description: 'Professional table service staff for villa dinners and events. Minimum 4 hours.',
        priceSpecification: { '@type': 'PriceSpecification', price: '250000', priceCurrency: 'IDR', unitText: 'HOUR' },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — Italian Experience',
        description: 'Classic Italian fine dining with handmade pasta and fresh seafood. Full-Service includes all ingredients, table setting, service staff, and cleanup.',
        priceSpecification: { '@type': 'PriceSpecification', price: '2200000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — French Experience',
        description: 'Refined French technique with wine sauces and premium ingredients. Full-Service includes all ingredients and service.',
        priceSpecification: { '@type': 'PriceSpecification', price: '2400000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — Custom Menu',
        description: 'Bespoke menu designed for your evening. Full-Service from IDR 2,000,000++ per person.',
        priceSpecification: { '@type': 'PriceSpecification', price: '2000000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 10,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — Chef\'s Table',
        description: 'Interactive 6-guest cooking experience at your table. Always Full-Service with complete table setting and all equipment.',
        priceSpecification: { '@type': 'PriceSpecification', price: '3500000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
    {
      '@type': 'ListItem',
      position: 11,
      item: {
        '@type': 'Offer',
        name: 'Fine Dining — Romantic Dinner for Two',
        description: 'Private candlelit dinner for couples. Full-Service includes customized menu, table setting, and service.',
        priceSpecification: { '@type': 'PriceSpecification', price: '3500000', priceCurrency: 'IDR', valueAddedTaxIncluded: false },
        availability: 'https://schema.org/InStock',
        seller: { '@id': 'https://mychef.id/#business' },
      },
    },
  ],
}

const FineDiningPricingTable = () => (
  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-stone-100 border-b border-stone-200">
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Menu</th>
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Kitchen-Service</th>
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Full-Service</th>
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Cuisine Style</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Italian Experience</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 1,750,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 2,200,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">Pasta, seafood, classic Italian</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">French Experience</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 1,900,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 2,400,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">Refined technique, wine sauces</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Mediterranean Sea</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 1,750,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 2,200,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">Coastal flavours, our signature</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Wagyu Experience</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 1,950,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 2,400,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">Premium beef, grill-focused</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Custom Menu</td>
          <td className="px-4 py-3 text-sm text-stone-600">From IDR 1,600,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">From IDR 2,000,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">Your vision, our execution</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Chef's Table (6 guests)</td>
          <td className="px-4 py-3 text-sm text-stone-600">Not available</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 3,500,000++</td>
          <td className="px-4 py-3 text-sm text-stone-600">Interactive, always full-service</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Romantic Dinner (couple)</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 2,800,000/couple</td>
          <td className="px-4 py-3 text-sm text-stone-600">IDR 3,500,000/couple</td>
          <td className="px-4 py-3 text-sm text-stone-600">2 guests by arrangement</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-6 space-y-2 text-sm text-stone-600">
      <p>Wine pairing: +IDR 850,000 per guest (optional)</p>
      <p>Advance notice: Custom menus require 7 days. All others available with same-day confirmation.</p>
      <p>All prices are per person and subject to 10% service charge and 11% government tax.</p>
    </div>
  </div>
)

const ExperienceComparisonTable = () => (
  <div className="w-full overflow-x-auto">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-stone-100 border-b border-stone-200">
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Feature</th>
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Full-Service</th>
          <th className="px-4 py-3 text-sm font-semibold text-stone-700 uppercase tracking-wide">Kitchen-Service</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Plates & glassware</td>
          <td className="px-4 py-3 text-sm text-stone-600">We bring premium set</td>
          <td className="px-4 py-3 text-sm text-stone-600">Your villa's items</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Cutlery & linen</td>
          <td className="px-4 py-3 text-sm text-stone-600">Designer set included</td>
          <td className="px-4 py-3 text-sm text-stone-600">Your villa's items</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Table decoration</td>
          <td className="px-4 py-3 text-sm text-stone-600">Full floral/design setup</td>
          <td className="px-4 py-3 text-sm text-stone-600">Simple, elegant setup</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Service staff</td>
          <td className="px-4 py-3 text-sm text-stone-600">Chef + dedicated server</td>
          <td className="px-4 py-3 text-sm text-stone-600">Chef only</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Equipment</td>
          <td className="px-4 py-3 text-sm text-stone-600">All cooking equipment brought</td>
          <td className="px-4 py-3 text-sm text-stone-600">Uses villa kitchen</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Cleanup</td>
          <td className="px-4 py-3 text-sm text-stone-600">Complete pack-down</td>
          <td className="px-4 py-3 text-sm text-stone-600">Kitchen only</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Atmosphere</td>
          <td className="px-4 py-3 text-sm text-stone-600">Restaurant-standard</td>
          <td className="px-4 py-3 text-sm text-stone-600">Intimate, home-style</td>
        </tr>
        <tr className="border-b border-stone-100 bg-stone-50">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Price</td>
          <td className="px-4 py-3 text-sm text-stone-600">Premium</td>
          <td className="px-4 py-3 text-sm text-stone-600">~20% less</td>
        </tr>
        <tr className="border-b border-stone-100">
          <td className="px-4 py-3 text-sm font-medium text-stone-800">Best for</td>
          <td className="px-4 py-3 text-sm text-stone-600">Special celebrations, villas without full kitchens</td>
          <td className="px-4 py-3 text-sm text-stone-600">Well-equipped villas, repeat guests, casual elegance</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-6 text-sm text-stone-600">
      <p>Both experiences include the same Michelin-trained chef, the same premium ingredients, and the same multi-course menu. The only difference is tableware, service level, and presentation.</p>
    </div>
  </div>
)

const SECTIONS = [
  {
    id: 'transparency',
    type: 'content' as const,
    subtitle: 'Our Promise',
    title: 'Transparent Pricing. No Hidden Fees. No Markup on Groceries.',
    body: `<p>We believe pricing should be clear before you commit. No surprises, no hidden charges, no inflated grocery bills. Here is exactly how our pricing works:</p>
    <p><strong>Fine Dining (6+ guests):</strong> Per-person menu pricing with ingredients included. Choose between two experience levels:</p>
    <p><strong>Full-Service Experience:</strong> We bring all plates, glassware, cutlery, linen, and decorations. Complete table setting and service staff included. From IDR 2,200,000++ per guest.</p>
    <p><strong>Kitchen-Service Experience:</strong> Our chef uses your villa's kitchen, plates, and glassware. Same food, same chef, more intimate atmosphere. From IDR 1,750,000++ per guest.</p>
    <p>Service charge (10%) and government tax (11%) are added to all prices. Wine pairing is optional at IDR 850,000 per guest.</p>
    <p><strong>Villa Chef / Catering (5+ guests):</strong> Chef hourly rate plus groceries at cost. You see every receipt. We do not markup ingredients. Pricing depends on service style — from IDR 350,000 per person for drop-off catering to IDR 800,000 per person for plated service.</p>
    <p><strong>Events:</strong> Custom quotes based on guest count, menu complexity, staffing needs, and equipment. We deliver a detailed proposal within 24 hours.</p>
    <p><strong>In-Villa Staffing:</strong> Per-shift pricing from IDR 250,000/hour. Waiters, butlers, bartenders, mixologists, and sommeliers available.</p>
    <p><strong>Staffing & Placement:</strong> 48-hour placement for private chefs and villa staff. 30-day replacement guarantee. Contact us for pricing.</p>`,
    image: '/generated/mychef-catering-bali-catering-hero.webp',
    imageAlt: 'Elegant fine dining plate',
  },
  {
    id: 'pricing-calculator',
    type: 'custom' as const,
    subtitle: 'Quick Estimate',
    title: 'Build Your Estimate in Seconds',
    body: 'Choose a service type, guest range, duration and any add-ons to see a live starting price before you message us on WhatsApp.',
    bg: 'accent' as const,
    render: <PricingCalculator hideHeader />,
  },
  {
    id: 'what-affects-quote',
    type: 'features' as const,
    subtitle: 'Why Prices Vary',
    title: 'What Affects Your Quote',
    features: [
      { icon: Tag, title: 'Guest count', desc: 'Most pricing is per person or scales with group size — more guests means more food, prep, and service staff.' },
      { icon: Tag, title: 'Menu & ingredients', desc: 'Fine dining, premium cuts, seafood, and special dietary menus cost more than everyday catering. For villa chefs, groceries are billed at cost — never marked up.' },
      { icon: Tag, title: 'Service & staff', desc: 'Waiters, bartenders, butlers, and sommeliers are added based on your guest count and the experience you want.' },
      { icon: Tag, title: 'Area & travel', desc: 'Your villa’s location affects logistics. Most major Bali areas are standard; remote areas may add a small travel cost.' },
      { icon: Tag, title: 'Kitchen & setup', desc: 'Villa kitchen access, equipment or grill rentals, floating-breakfast setup, and event decor can change the total.' },
      { icon: Tag, title: 'Date & notice', desc: 'Peak dates and short-notice bookings affect availability. Last-minute bookings are confirmed differently — just ask on WhatsApp.' },
    ],
  },
  {
    id: 'price-guide-cta',
    type: 'custom' as const,
    subtitle: '',
    title: '',
    body: '',
    render: <EmailCaptureBar />,
  },
  {
    id: 'fine-dining-pricing',
    type: 'features' as const,
    subtitle: 'Fine Dining',
    title: 'In-Villa Tasting Menu Pricing',
    features: [
      { icon: Tag, title: 'Mediterranean Sea Experience', desc: 'Kitchen-Service IDR 1,750,000++ / Full-Service IDR 2,200,000++ per person. 5-course Italian seafood tasting menu. Includes all ingredients, table setting, service staff, and cleanup.' },
      { icon: Tag, title: 'Wagyu Experience', desc: 'Kitchen-Service IDR 1,950,000++ / Full-Service IDR 2,400,000++ per person. 4-course Wagyu-focused menu with handmade pasta and grilled ribeye. Includes all ingredients and service.' },
      { icon: Tag, title: 'Italian Experience', desc: 'Kitchen-Service IDR 1,750,000++ / Full-Service IDR 2,200,000++ per person. Classic Italian fine dining with handmade pasta and fresh seafood.' },
      { icon: Tag, title: 'French Experience', desc: 'Kitchen-Service IDR 1,900,000++ / Full-Service IDR 2,400,000++ per person. Refined French technique with wine sauces and premium ingredients.' },
      { icon: Tag, title: 'Custom Menu', desc: 'Kitchen-Service From IDR 1,600,000++ / Full-Service From IDR 2,000,000++ per person. Your vision, our execution. Bespoke menu designed for your evening.' },
      { icon: Tag, title: 'Wine Pairing', desc: 'IDR 850,000 per person. 4–5 glasses matched to each course. Includes Franciacorta, Etna Bianco, Barolo, and more.' },
      { icon: Tag, title: 'Romantic Dinner for Two', desc: 'Kitchen-Service IDR 2,800,000/couple / Full-Service IDR 3,500,000/couple. Private candlelit dinner with customized menu. Perfect for proposals, anniversaries, and honeymoons.' },
      { icon: Tag, title: 'Chef\'s Table', desc: 'Not available (Kitchen-Service) / IDR 3,500,000++ (Full-Service) per person. Interactive 6-guest cooking experience at your table. Always full-service with complete table setting.' },
    ],
  },
  {
    id: 'fine-dining-pricing-table',
    type: 'custom' as const,
    subtitle: 'Fine Dining',
    title: 'Fine Dining Menu Pricing',
    body: '',
    render: <FineDiningPricingTable />,
  },
  {
    id: 'experience-comparison',
    type: 'custom' as const,
    subtitle: 'Compare',
    title: 'Full-Service vs Kitchen-Service — What\'s the Difference?',
    body: '',
    render: <ExperienceComparisonTable />,
  },
  {
    id: 'catering-pricing',
    type: 'features' as const,
    subtitle: 'Catering',
    title: 'Villa Chef & Catering Rates',
    features: [
      { icon: Tag, title: 'Private Villa Chef', desc: 'From IDR 600,000 per hour. Minimum 4 hours. Groceries billed at cost with receipts provided. Breakfast, lunch, dinner, or full-board available.' },
      { icon: Tag, title: 'BBQ Catering', desc: 'From IDR 550,000 per person. Minimum 10 guests. Includes grill setup, meats, sides, sauces, and service staff.' },
      { icon: Tag, title: 'Buffet Catering', desc: 'From IDR 450,000 per person. Minimum 30 guests. Multiple stations, hot and cold options, full service team.' },
      { icon: Tag, title: 'Drop-Off Catering', desc: 'From IDR 350,000 per person. Minimum 4 guests. Pre-plated meals delivered to your villa. No service staff included.' },
      { icon: Tag, title: 'Floating Breakfast', desc: 'From IDR 950,000 per couple. Minimum 2 guests. Delivered to your pool at your chosen time. Also available as an add-on: +IDR 350,000 per person on any catering package.' },
      { icon: Tag, title: 'Grazing Table', desc: 'From IDR 4,500,000 total. Artisan cheeses, cured meats, fresh fruits, and accompaniments. Serves 10–15 guests.' },
    ],
  },
  {
    id: 'events-pricing',
    type: 'features' as const,
    subtitle: 'Events',
    title: 'Event & Wedding Pricing',
    features: [
      { icon: Tag, title: 'Wedding Catering', desc: 'From IDR 450,000 per person. Custom menus, full service team, bar setup, and coordination. Quotes tailored to guest count and complexity.' },
      { icon: Tag, title: 'Corporate Events', desc: 'From IDR 15,000,000 total. Executive dinners, team-building meals, and corporate retreats. Full proposal within 24 hours.' },
      { icon: Tag, title: 'Birthday Celebrations', desc: 'From IDR 8,000,000 total. Custom cake, themed menu, decorations, and service. Scales from intimate dinners to 50-guest parties.' },
      { icon: Tag, title: 'Retreat Catering', desc: 'From IDR 350,000 per person per day. Multi-day full-board packages for yoga and wellness retreats. Dietary flexibility included.' },
    ],
  },
  {
    id: 'staffing-pricing',
    type: 'features' as const,
    subtitle: 'Staffing',
    title: 'In-Villa Service & Staffing Rates',
    features: [
      { icon: Tag, title: 'Waiters / Servers', desc: 'From IDR 250,000 per hour. Minimum 3 hours. Professional table service for villa dinners and events.' },
      { icon: Tag, title: 'Bartenders', desc: 'From IDR 350,000 per hour. Minimum 3 hours. Cocktail preparation, bar setup, and drink service.' },
      { icon: Tag, title: 'Butlers', desc: 'From IDR 400,000 per hour. Minimum 4 hours. Discreet, professional villa service for private estates.' },
      { icon: Tag, title: 'Private Chef Placement', desc: 'From IDR 15,000,000 placement fee. Full-time live-in or live-out chef placement for villas and residences.' },
    ],
  },
  {
    id: 'what-included',
    type: 'content' as const,
    subtitle: 'What You Get',
    title: 'Every Booking Includes',
    body: `<ul>
      <li>✓ Vetted, background-checked chef and staff</li>
      <li>✓ Menu planning and customization</li>
      <li>✓ Grocery shopping (fresh, local ingredients)</li>
      <li>✓ Cooking and plating in your villa</li>
      <li>✓ Professional table service</li>
      <li>✓ Full kitchen cleanup</li>
      <li>✓ Dietary accommodation at no extra cost</li>
      <li>✓ WhatsApp concierge support</li>
    </ul>
    <p><strong>Not included:</strong> Alcohol (except wine pairing), specialty equipment rentals, venue decorations, and transport outside standard service areas.</p>`,
    image: '/generated/luna-table.webp',
    imageAlt: 'Elegant villa dining table setup',
  },
  {
    id: 'fast-quote',
    type: 'features' as const,
    subtitle: 'Fast & Easy',
    title: 'How to Get Your Exact Quote in Minutes',
    features: [
      { icon: Tag, title: '1. Send 4 details', desc: 'On WhatsApp, tell us the service, your date, your area, and guest count — plus any notes (allergies, kids, occasion, villa kitchen). The calculator above pre-fills this for you.' },
      { icon: Tag, title: '2. We reply fast', desc: 'A real person replies on WhatsApp — usually within a few hours — with a tailored quote. Events and catering get a detailed proposal within 24 hours.' },
      { icon: Tag, title: '3. Adjust freely', desc: 'Change the menu, guest count, or add staff and we’ll update the quote. No obligation and no pressure — you only book when it feels right.' },
      { icon: Tag, title: 'Not sure what you need?', desc: 'Just message us and we’ll help you choose the right service for your group, budget, and occasion. WhatsApp is the fastest way to a clear answer.' },
    ],
  },
  {
    id: 'cta',
    type: 'cta' as const,
    subtitle: 'Get a Custom Quote',
    title: 'Every Event Gets a Custom Quote',
    body: 'Send us your dates, guest count, and vision. You will receive a detailed proposal within 24 hours. No obligation to book.',
  },
]

const FAQS = [
  { question: 'What does "++" mean in your pricing?', answer: '"++" means service charge (typically 10%) and government tax (11%) are added to the base price. For example, IDR 2,200,000++ becomes approximately IDR 2,662,000 per person.' },
  { question: 'Are groceries included in the price?', answer: 'For fine dining and events, ingredients are included in the per-person price. For villa chef catering, groceries are billed at cost with receipts — we do not markup ingredients.' },
  { question: 'Do you require a deposit?', answer: 'Yes. A 50% deposit locks your date. Balance is due 3 days before the event. We accept bank transfer (IDR or USD), Wise, and credit card via secure link.' },
  { question: 'What is your cancellation policy?', answer: 'Full refund if cancelled 14+ days ahead. 50% refund 7–14 days. Within 7 days, we apply the deposit to a rescheduled date. No-shows forfeit the deposit.' },
  { question: 'Do you charge extra for dietary restrictions?', answer: 'No. Gluten-free, vegan, halal, nut allergies, pregnancy-friendly — we accommodate all dietary needs at no extra cost. Just tell us when booking.' },
  { question: 'Is there a minimum guest count?', answer: 'Fine dining: 6 guests minimum (2 for romantic dinners by special arrangement). BBQ: 10 guests. Buffet: 30 guests. Villa chef: no minimum, 4-hour minimum booking.' },
  { question: 'Can I get a quote before committing?', answer: 'Absolutely. Use our quote form or message us on WhatsApp. We deliver detailed proposals within 24 hours with full pricing breakdowns.' },
]

const RELATED_PAGES = [
  { label: 'Fine Dining', href: '/fine-dining', desc: 'In-villa tasting menus and private chef experiences.' },
  { label: 'Catering', href: '/catering', desc: 'Full-service villa catering for any occasion.' },
  { label: 'Events', href: '/events', desc: 'Weddings, retreats, and celebrations across Bali.' },
  { label: 'In-Villa Service', href: '/in-villa-service', desc: 'Waiters, butlers, bartenders, and sommeliers per shift.' },
  { label: 'How to Hire a Private Chef', href: '/blog/how-to-hire-private-chef', desc: 'Step-by-step guide to finding, vetting, and booking a chef.' },
  { label: 'Get a Quote', href: '/quote', desc: 'Receive a detailed proposal within 24 hours.' },
]

export default function PricingPage() {
  return (
    <PremiumPage
      slug="pricing"
      title="Pricing"
      description="Transparent pricing for private chef services in Bali — hourly rates, menu pricing, and full-event packages. No hidden fees. No markup on groceries."
      seoTitle="Private Chef Pricing Bali | Transparent Rates | myCHEF.id"
      seoDescription="Transparent pricing for private chef, catering & event services in Bali. Hourly rates, per-person menus, event packages & staffing. No hidden fees. Get a custom quote."
      canonicalUrl="https://mychef.id/pricing"
      h1="Transparent Pricing for Every Experience"
      subtitle="You see every cost before you book. No hidden fees. No grocery markup."
      heroImage="/generated/mychef-catering-bali-catering-hero.webp"
      heroImageAlt="Elegant fine dining dish"
      ogImage="https://mychef.id/generated/mychef-catering-bali-catering-hero.webp"
      keywords={['private chef bali price', 'bali catering cost', 'villa chef rates bali']}
      highlights={['No Hidden Fees', 'Grocery Receipts Provided', '50% Deposit to Book', '24-Hour Quote Delivery']}
      sections={SECTIONS}
      faqs={FAQS}
      relatedPages={RELATED_PAGES}
      extraJsonLd={[
        breadcrumbSchema('Pricing', 'https://mychef.id/pricing'),
        PRICING_OFFER_SCHEMA,
        PRICE_SPECIFICATION_SCHEMA,
        aggregateRatingSchema(4.9, 320),
        serviceWithOfferSchema({
          name: 'Private Chef & Catering Bali',
          description: 'Transparent pricing for private chef, villa catering, events, and hospitality staffing in Bali. Two-tier fine dining, BBQ, drop-off, and wedding catering.',
          url: 'https://mychef.id/pricing',
          price: '350000',
          unitText: 'per person',
        }),
      ]}
      ctaText="Get a Custom Quote"
      ctaSubtext="Detailed proposal within 24 hours. No obligation."
    />
  )
}
