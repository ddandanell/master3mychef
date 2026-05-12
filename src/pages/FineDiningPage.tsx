import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { Star, Send, ChevronDown, Quote } from 'lucide-react'
import GoldArc from '../components/GoldArc'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════
   FINE DINING PAGE — Italian Fine Dining Villa
   Rich content: Italian heritage, storytelling, process, FAQ,
   testimonials, trust signals. Dark, cinematic, emotional.
   ═══════════════════════════════════════════════════════════════ */

const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'] as const
type Season = (typeof seasons)[number]

const menuData: Record<Season, { name: string; desc: string }[]> = {
  Spring: [
    { name: 'Amuse-Bouche', desc: 'A single perfect bite to awaken the palate — perhaps a parmigiano crisp with aged balsamic' },
    { name: 'Crudo di Mare', desc: 'Fresh sashimi-grade seafood with Sicilian citrus, Sicilian olive oil, and sea salt' },
    { name: 'Handmade Pasta', desc: 'Tagliatelle or ravioli crafted fresh before your eyes, with seasonal truffle or herbs' },
    { name: 'Intermezzo', desc: 'A refreshing palate cleanser — limoncello sorbet with fresh mint from our garden' },
    { name: 'Secondo', desc: 'The centerpiece — perhaps a slow-braised osso buco or perfectly seared branzino' },
    { name: 'Formaggio', desc: 'A selection of artisanal Italian cheeses — pecorino, gorgonzola dolce, taleggio' },
    { name: 'Dolce', desc: 'An elegant finale — our signature tiramisu or warm chocolate fondant with gold leaf' },
  ],
  Summer: [
    { name: 'Amuse-Bouche', desc: 'Chilled gazpacho sphere with basil oil and micro herbs' },
    { name: 'Crudo di Mare', desc: 'Mediterranean octopus carpaccio with lemon zest, chili, and Sicilian capers' },
    { name: 'Handmade Pasta', desc: 'Lobster ravioli with saffron butter sauce and fresh dill' },
    { name: 'Intermezzo', desc: 'Limoncello sorbet with Amalfi lemon zest and fresh mint' },
    { name: 'Secondo', desc: 'Grilled whole branzino with roasted cherry tomatoes and Ligurian olive oil' },
    { name: 'Formaggio', desc: 'Aged pecorino Romano with Sardinian truffle honey' },
    { name: 'Dolce', desc: 'White peach panna cotta with amaretti crumble and prosecco gel' },
  ],
  Autumn: [
    { name: 'Amuse-Bouche', desc: 'Wild porcini mushroom crostini with roasted garlic and thyme' },
    { name: 'Crudo di Mare', desc: 'Bluefin tuna tartare with black truffle shavings and yuzu dressing' },
    { name: 'Handmade Pasta', desc: 'Pumpkin tortelloni with sage brown butter and aged parmesan' },
    { name: 'Intermezzo', desc: 'Apple granita with Calvados and a hint of cinnamon' },
    { name: 'Secondo', desc: 'Slow-braised lamb shank with creamy polenta and gremolata' },
    { name: 'Formaggio', desc: 'Gorgonzola dolce with caramelized walnuts and fig compote' },
    { name: 'Dolce', desc: 'Warm fig tart with mascarpone cream and honey drizzle' },
  ],
  Winter: [
    { name: 'Amuse-Bouche', desc: 'White bean veloute with rosemary oil and crispy pancetta' },
    { name: 'Crudo di Mare', desc: 'Hokkaido scallop crudo with blood orange and Sicilian pistachio' },
    { name: 'Handmade Pasta', desc: 'Black truffle risotto with parmesan crisp and truffle oil' },
    { name: 'Intermezzo', desc: 'Champagne granita with pomegranate seeds and elderflower' },
    { name: 'Secondo', desc: 'Wagyu beef tenderloin with bone marrow, roasted root vegetables' },
    { name: 'Formaggio', desc: 'Monte Veronese with 25-year aged balsamic from Modena' },
    { name: 'Dolce', desc: 'Dark chocolate fondant with gold leaf and vanilla bean gelato' },
  ],
}

const menuOptions = [
  {
    name: '5-Course Discovery',
    desc: 'A curated journey through five exquisite courses. Perfect for those seeking a refined yet concise Italian dining experience that captures the essence of our kitchen.',
    price: 'IDR 2.2M',
    unit: 'per guest',
  },
  {
    name: '7-Course Journey',
    desc: 'The complete tasting experience. Seven courses of culinary artistry, each designed to build upon the last. This is how our chef tells a story through food.',
    price: 'IDR 2.5M',
    unit: 'per guest',
  },
  {
    name: 'Premium Bespoke',
    desc: 'Fully customized menu designed around your preferences, dietary requirements, and occasion. Our chef visits your villa beforehand to understand your vision.',
    price: 'Custom',
    unit: 'pricing',
  },
]

const occasions = [
  { title: 'Romantic Dinners', desc: 'An evening designed for two, with candlelight, wine, and an intimate atmosphere that makes every moment special.' },
  { title: 'Birthdays', desc: 'A celebration menu with a personal touch, a custom cake, and something sparkling to mark the occasion.' },
  { title: 'Family Celebrations', desc: 'Multi-generational dining that brings everyone together around a table of extraordinary Italian food.' },
  { title: 'Luxury Villa Experiences', desc: 'The full myCHEF treatment for your villa stay — an evening that becomes the highlight of your Bali trip.' },
]

const testimonials = [
  {
    quote: 'We have eaten at Michelin-starred restaurants across Europe. The dinner myCHEF prepared in our villa was better than any of them. The pasta was handmade in front of us. The storytelling made every course feel like a journey through Italy.',
    name: 'Marco & Isabella',
    detail: 'Anniversary Dinner, Uluwatu',
    rating: 5,
  },
  {
    quote: 'Chef Antonio arrived early, checked our kitchen, and explained every step. The way he described each dish — where the truffle came from, how the pasta was rolled by hand — it was not just dinner. It was theater. The best night of our Bali trip.',
    name: 'The Richardson Family',
    detail: 'Family Celebration, Canggu',
    rating: 5,
  },
  {
    quote: 'For my 50th birthday, my wife arranged a surprise dinner. Seven courses. Italian wine pairings. The chef told us the story of each dish — the grandmother who taught him, the region it came from. I have never felt so cared for.',
    name: 'David Chen',
    detail: 'Milestone Birthday, Seminyak',
    rating: 5,
  },
  {
    quote: 'We were a group of 12 friends. The chef set up the whole terrace like a restaurant. Candles, flowers, white tablecloths. Every course was better than the last. The handmade ravioli was the best pasta I have ever tasted.',
    name: 'Sarah Mitchell',
    detail: 'Group Dinner, Ubud',
    rating: 5,
  },
]

const faqs = [
  {
    question: 'How far in advance should I book a fine dining experience?',
    answer: 'We recommend booking at least 2 weeks in advance, especially during peak season (June-September and December-January). For bespoke menus, 3-4 weeks allows our chef to design something truly special for you. Last-minute bookings are sometimes possible — contact us on WhatsApp and we will do our best to accommodate.',
  },
  {
    question: 'What is included in the price?',
    answer: 'The price covers the complete fine dining experience: a personal consultation with our chef, menu design, all ingredients (sourced fresh that morning from premium local and imported suppliers), chef service, professional table setup with premium linens and glassware, plating and storytelling for each course, and complete cleanup afterward. Wine pairing is available as an optional add-on.',
  },
  {
    question: 'Can the chef accommodate dietary restrictions?',
    answer: 'Absolutely. Our chefs are experienced in handling all dietary requirements — vegetarian, vegan, gluten-free, dairy-free, nut allergies, religious restrictions, and more. During your pre-dinner consultation, we discuss every detail to ensure every guest can enjoy the full experience safely and deliciously.',
  },
  {
    question: 'How does the storytelling part work?',
    answer: 'Storytelling is at the heart of our fine dining experience. Between each course, your chef shares the story behind the dish — the Italian region it originates from, the technique used, the ingredients and where they were sourced, and the personal inspiration behind the creation. It transforms dinner into a cultural journey through Italy.',
  },
  {
    question: 'Do you provide wine pairing?',
    answer: 'Yes. We offer curated Italian wine pairings selected to complement each course of your menu. Our sommelier sources premium Italian wines — from crisp Pinot Grigio to bold Barolo and elegant Brunello. We can also create a bespoke pairing based on your preferences. Non-alcoholic pairing options are available too.',
  },
  {
    question: 'What happens during the villa visit before the dinner?',
    answer: 'For bespoke experiences, our chef visits your villa 1-2 days before to assess the kitchen, discuss your vision, understand dietary needs, and plan the setup. This ensures everything runs perfectly on the night. For standard menus, this consultation happens via WhatsApp or video call.',
  },
  {
    question: 'How many guests can you accommodate?',
    answer: 'Our fine dining experiences cater from intimate dinners for 2 guests up to larger celebrations for 30 guests. For groups larger than 12, we bring additional service staff to ensure every guest receives the same attentive, white-glove experience.',
  },
  {
    question: 'What areas of Bali do you serve?',
    answer: 'We serve all major villa areas across Bali including Seminyak, Canggu, Uluwatu, Jimbaran, Nusa Dua, Sanur, Ubud, and Tabanan. Our team travels to your villa with all necessary equipment and ingredients.',
  },
  {
    question: 'Can I request a specific Italian dish?',
    answer: 'Of course. Our chefs specialize in authentic Italian cuisine and love creating specific dishes our guests dream of. Whether it is your grandmother\'s favorite recipe, a dish you fell in love with in Rome, or something completely new — we make it happen.',
  },
  {
    question: 'What makes myCHEF different from a restaurant?',
    answer: 'A restaurant serves hundreds of guests a night. We serve only you. Every menu is designed specifically for your occasion. Our chef arrives at your villa with ingredients sourced that morning. The pasta is rolled by hand in your kitchen. The stories are told just for your table. It is not just dinner — it is your dinner, in your villa, with people you love.',
  },
]

const experienceSteps = [
  {
    title: 'The Consultation',
    desc: 'We begin with a personal conversation — via WhatsApp, video call, or an in-person visit to your villa. Our chef learns about your occasion, your tastes, your dietary needs, and your vision for the evening.',
  },
  {
    title: 'The Villa Visit',
    desc: 'For bespoke experiences, our chef visits your villa 1-2 days ahead to assess the kitchen, plan the table setup, and finalize every detail. This is how we ensure perfection.',
  },
  {
    title: 'Menu Creation',
    desc: 'Our chef designs a seasonal Italian menu specifically for you — every ingredient sourced fresh that morning from premium local markets and trusted Italian suppliers.',
  },
  {
    title: 'The Arrival',
    desc: 'On the evening, our team arrives 2 hours before service with everything needed — ingredients, equipment, tableware, candles, flowers. We transform your villa into a private Italian restaurant.',
  },
  {
    title: 'The Experience',
    desc: 'Course after course, our chef presents each dish with its story — the Italian region, the inspiration, the technique. Every bite is a journey through Italy.',
  },
  {
    title: 'The Memory',
    desc: 'We leave your villa spotless and your guests speechless. This is not just dinner — it is the night everyone talks about for years.',
  },
]

export default function FineDiningPage() {
  const [activeSeason, setActiveSeason] = useState<Season>('Spring')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Hero entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.fd-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
    tl.fromTo('.fd-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4')
    tl.fromTo('.fd-hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    tl.fromTo('.fd-hero-line', { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    tl.fromTo('.fd-hero-desc', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    tl.fromTo('.fd-hero-cta', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2')
  }, [])

  // Scroll animations
  useGSAP(() => {
    const items = document.querySelectorAll('.fd-scroll-reveal')
    items.forEach((el) => {
      gsap.fromTo(el, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      })
    })
  }, { scope: heroRef })

  return (
    <div ref={heroRef} className="bg-[#050505]">
      {/* ═══ HERO ═══ */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-fine-dining.jpg" alt="Italian fine dining" className="w-full h-full object-cover" style={{ opacity: 0.5 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.3) 50%, rgba(5,5,5,0.5) 100%)' }} />
        </div>
        <div className="relative z-10 text-center px-6 max-w-[800px]">
          <p className="fd-hero-label font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4" style={{ opacity: 0 }}>Italian Fine Dining</p>
          <h1 className="fd-hero-title font-playfair font-bold text-[#F5F3EF] text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4" style={{ opacity: 0 }}>
            An Evening in Italy,<br />in Your Villa
          </h1>
          <div className="fd-hero-line w-16 h-[1px] bg-[#D4AF37] mx-auto mb-4" style={{ transformOrigin: 'center', transform: 'scaleX(0)' }} />
          <p className="fd-hero-subtitle font-cormorant text-[#F5F3EF]/70 text-lg md:text-xl italic mb-6" style={{ opacity: 0 }}>
            Michelin-inspired Italian cuisine. Handcrafted in your kitchen. Served with stories.
          </p>
          <p className="fd-hero-desc font-inter text-[#9A9590] text-sm max-w-[500px] mx-auto mb-8" style={{ opacity: 0 }}>
            Our executive chefs bring decades of Italian culinary mastery to your private villa. 
            Every menu is designed around your occasion. Every dish tells a story.
          </p>
          <div className="fd-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
            <a href="#reserve" className="bg-[#D4AF37] text-[#050505] font-inter font-semibold text-xs uppercase tracking-[2px] px-8 py-4 hover:bg-[#E8C84B] transition-all duration-300">
              Reserve Your Experience
            </a>
            <Link to="/contact" className="border border-[#F5F3EF]/20 text-[#F5F3EF]/60 font-inter text-xs uppercase tracking-[2px] px-8 py-[14px] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
              Enquire First
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ THE ITALIAN STORY ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 lg:py-32 px-6" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2">
              <img src="/pasta-making.jpg" alt="Handmade pasta" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
            <div className="md:w-1/2">
              <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">The Italian Story</p>
              <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.1]">
                Born in Italy.<br />Perfected in Bali.
              </h2>
              <GoldArc className="mb-6" />
              <div className="space-y-4 font-inter text-[#9A9590] text-sm leading-relaxed">
                <p>Our head chef trained for over 15 years in some of Italy&apos;s most celebrated kitchens — from Michelin-starred restaurants in Milan to family trattorias in Tuscany. He brought that mastery to Bali, where he has spent the last 8 years creating extraordinary dining experiences in the island&apos;s most beautiful villas.</p>
                <p>Italian cooking is not about complexity. It is about respect — for the ingredient, for the technique, for the tradition passed down through generations. Our pasta is rolled by hand, not machine. Our sauces simmer for hours. Our ingredients are sourced fresh every morning from trusted suppliers who understand what quality means.</p>
                <p>When you book a myCHEF fine dining experience, you are not just getting a private chef. You are getting an evening of Italian culinary storytelling — where every course carries the memory of the Italian grandmother who taught us, the region that inspired it, and the passion that drives our kitchen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE EXPERIENCE ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ backgroundColor: '#0A0A0A', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-16">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">The Experience</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl lg:text-5xl mb-4">
              From First Contact to Final Bite
            </h2>
            <p className="font-inter text-[#9A9590] text-sm max-w-[550px] mx-auto">
              Every fine dining experience follows a carefully designed journey. Here is what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceSteps.map((step, i) => (
              <div key={step.title} className="group">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-playfair text-[#D4AF37] text-3xl font-bold opacity-30">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4 className="font-playfair font-semibold text-[#F5F3EF] text-lg mb-2">{step.title}</h4>
                    <p className="font-inter text-[#9A9590] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {i < experienceSteps.length - 1 && <div className="h-[1px] bg-[#F5F3EF]/10 mt-4 md:hidden" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MENUS ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Seasonal Menus</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl lg:text-5xl mb-4">
              Curated by Our Chef.<br />Inspired by Italy.
            </h2>
            <p className="font-inter text-[#9A9590] text-sm max-w-[500px] mx-auto mb-8">
              Our menus change every second month to reflect the finest seasonal ingredients available in Bali.
            </p>
            <GoldArc className="mx-auto mb-8" />
          </div>

          {/* Season tabs */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            {seasons.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSeason(s)}
                className={`font-cormorant text-sm uppercase tracking-[3px] pb-2 border-b transition-all duration-300 ${
                  activeSeason === s ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-[#9A9590] border-transparent hover:text-[#F5F3EF]'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Menu courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
            {menuData[activeSeason].map((course, i) => (
              <div key={i} className="flex gap-4">
                <span className="font-playfair text-[#D4AF37] text-sm font-bold mt-1">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4 className="font-playfair font-semibold text-[#F5F3EF] text-base mb-1">{course.name}</h4>
                  <p className="font-inter text-[#9A9590] text-sm leading-relaxed">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Menu options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menuOptions.map((opt) => (
              <div key={opt.name} className="border border-[#F5F3EF]/10 p-6 md:p-8 hover:border-[#D4AF37]/40 transition-all duration-300">
                <h3 className="font-playfair font-semibold text-[#F5F3EF] text-xl mb-2">{opt.name}</h3>
                <p className="font-inter text-[#9A9590] text-sm leading-relaxed mb-4">{opt.desc}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-playfair font-bold text-[#D4AF37] text-2xl">{opt.price}</span>
                  <span className="font-inter text-[#9A9590] text-xs">{opt.unit}</span>
                </div>
                <a href="#reserve" className="font-inter text-xs uppercase tracking-[2px] text-[#D4AF37] hover:text-[#E8C84B] transition-colors">
                  Reserve This Menu
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRIVATE DINING / OCCASIONS ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ backgroundColor: '#0A0A0A', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Private Dining</p>
              <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.1]">
                Every Occasion Deserves an Extraordinary Table
              </h2>
              <GoldArc className="mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {occasions.map((occ) => (
                  <div key={occ.title}>
                    <h4 className="font-playfair font-semibold text-[#F5F3EF] text-base mb-1">{occ.title}</h4>
                    <p className="font-inter text-[#9A9590] text-sm leading-relaxed">{occ.desc}</p>
                  </div>
                ))}
              </div>
              <p className="font-inter text-[#9A9590] text-sm">
                Whether you are celebrating with 4 guests or 30, our team designs an evening 
                that matches the significance of your occasion.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img src="/dining-table.jpg" alt="Private dining setup" className="w-full aspect-[4/3] object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WINE PAIRING ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto text-center">
          <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Wine Pairing</p>
          <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl mb-4">
            Italian Wines, Curated for Your Menu
          </h2>
          <p className="font-inter text-[#9A9590] text-sm max-w-[550px] mx-auto mb-8">
            Our sommelier selects premium Italian wines to complement each course of your dining experience. 
            From crisp whites of Veneto to bold reds of Tuscany, every pairing is designed to elevate your meal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[700px] mx-auto mb-8">
            <div className="border border-[#F5F3EF]/10 p-6">
              <h4 className="font-playfair font-semibold text-[#F5F3EF] mb-2">Classic Pairing</h4>
              <p className="font-inter text-[#9A9590] text-xs mb-2">3 Italian wines paired to your menu</p>
              <p className="font-playfair text-[#D4AF37] text-lg">IDR 450K <span className="text-xs text-[#9A9590]">/guest</span></p>
            </div>
            <div className="border border-[#D4AF37]/40 p-6">
              <h4 className="font-playfair font-semibold text-[#F5F3EF] mb-2">Premium Pairing</h4>
              <p className="font-inter text-[#9A9590] text-xs mb-2">5 premium Italian wines including Barolo</p>
              <p className="font-playfair text-[#D4AF37] text-lg">IDR 850K <span className="text-xs text-[#9A9590]">/guest</span></p>
            </div>
            <div className="border border-[#F5F3EF]/10 p-6">
              <h4 className="font-playfair font-semibold text-[#F5F3EF] mb-2">Champagne Welcome</h4>
              <p className="font-inter text-[#9A9590] text-xs mb-2">Italian prosecco or champagne on arrival</p>
              <p className="font-playfair text-[#D4AF37] text-lg">IDR 250K <span className="text-xs text-[#9A9590]">/guest</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST SIGNALS ═══ */}
      <section className="fd-scroll-reveal py-16 px-6 border-y border-[#F5F3EF]/5" style={{ opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-playfair font-bold text-[#D4AF37] text-3xl md:text-4xl mb-2">8+</p>
              <p className="font-inter text-[#9A9590] text-xs uppercase tracking-[2px]">Years in Bali</p>
            </div>
            <div>
              <p className="font-playfair font-bold text-[#D4AF37] text-3xl md:text-4xl mb-2">50+</p>
              <p className="font-inter text-[#9A9590] text-xs uppercase tracking-[2px]">Team Members</p>
            </div>
            <div>
              <p className="font-playfair font-bold text-[#D4AF37] text-3xl md:text-4xl mb-2">500+</p>
              <p className="font-inter text-[#9A9590] text-xs uppercase tracking-[2px]">Villas Served</p>
            </div>
            <div>
              <p className="font-playfair font-bold text-[#D4AF37] text-3xl md:text-4xl mb-2">4.9</p>
              <p className="font-inter text-[#9A9590] text-xs uppercase tracking-[2px]">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ backgroundColor: '#0A0A0A', opacity: 0 }}>
        <div className="max-w-container-lg mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Guest Experiences</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-[#F5F3EF]/10 p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <Quote size={20} className="text-[#D4AF37] mb-3" />
                <p className="font-playfair italic text-[#F5F3EF] text-base leading-relaxed mb-4">{t.quote}</p>
                <p className="font-inter text-[#F5F3EF] text-sm font-medium">{t.name}</p>
                <p className="font-inter text-[#9A9590] text-xs">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ opacity: 0 }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Questions</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl">
              Frequently Asked
            </h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#F5F3EF]/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-inter text-[#F5F3EF] text-sm pr-4 group-hover:text-[#D4AF37] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown size={16} className={`text-[#9A9590] flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
                  <p className="font-inter text-[#9A9590] text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESERVE FORM ═══ */}
      <section id="reserve" className="fd-scroll-reveal py-20 md:py-28 px-6" style={{ backgroundColor: '#0A0A0A', opacity: 0 }}>
        <div className="max-w-[600px] mx-auto">
          <div className="text-center mb-10">
            <p className="font-cormorant text-[#D4AF37] text-sm uppercase tracking-[4px] mb-4">Reserve</p>
            <h2 className="font-playfair font-bold text-[#F5F3EF] text-3xl md:text-4xl mb-4">
              Begin Your Experience
            </h2>
            <p className="font-inter text-[#9A9590] text-sm">
              Tell us about your occasion and we will design an evening you will never forget.
            </p>
          </div>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="text" placeholder="Your Name *" className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#F5F3EF] placeholder:text-[#9A9590]/50 focus:border-[#D4AF37] focus:outline-none transition-colors" />
              <input type="email" placeholder="Email *" className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#F5F3EF] placeholder:text-[#9A9590]/50 focus:border-[#D4AF37] focus:outline-none transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input type="tel" placeholder="Phone / WhatsApp" className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#F5F3EF] placeholder:text-[#9A9590]/50 focus:border-[#D4AF37] focus:outline-none transition-colors" />
              <input type="text" placeholder="Preferred Date" className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#F5F3EF] placeholder:text-[#9A9590]/50 focus:border-[#D4AF37] focus:outline-none transition-colors" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <select className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#9A9590] focus:border-[#D4AF37] focus:outline-none transition-colors">
                <option value="">Number of Guests</option>
                <option value="2">2 guests</option>
                <option value="3-6">3-6 guests</option>
                <option value="7-12">7-12 guests</option>
                <option value="13-20">13-20 guests</option>
                <option value="21-30">21-30 guests</option>
              </select>
              <select className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#9A9590] focus:border-[#D4AF37] focus:outline-none transition-colors">
                <option value="">Menu Preference</option>
                <option value="5-course">5-Course Discovery</option>
                <option value="7-course">7-Course Journey</option>
                <option value="bespoke">Premium Bespoke</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>
            <input type="text" placeholder="Villa Location" className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#F5F3EF] placeholder:text-[#9A9590]/50 focus:border-[#D4AF37] focus:outline-none transition-colors" />
            <textarea placeholder="Tell us about your occasion, dietary requirements, or any special requests..." rows={4} className="w-full bg-transparent border border-[#F5F3EF]/15 px-4 py-3 font-inter text-sm text-[#F5F3EF] placeholder:text-[#9A9590]/50 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none" />
            <button type="submit" className="w-full bg-[#D4AF37] text-[#050505] font-inter font-semibold text-xs uppercase tracking-[2px] py-4 hover:bg-[#E8C84B] transition-all duration-300 flex items-center justify-center gap-2">
              <Send size={14} /> Send My Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
