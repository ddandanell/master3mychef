import { useEffect, useRef, useState } from 'react'
import { Flame, Wine, Clock, Users, Star, Check, ChevronRight, MessageCircle, Phone, Sparkles, Truck } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BookingForm from '@/components/BookingForm'

gsap.registerPlugin(ScrollTrigger)

const MENUS = [
  {
    id: 'mediterranean',
    name: 'Mediterranean Sea Experience',
    price: 'IDR 2,200,000++',
    duration: 'Two and a half to three hours',
    desc: 'The coast Adriano grew up on, in five movements. The meal opens cold, sharp, and perfumed — the sea waking the palate. It moves through cream and pasta into the centre of the table: the lobster tagliatelle, rolled that afternoon in your kitchen. The main is fish, not meat — the menu\'s promise honoured. It closes on tiramisu, made the way it should be made, because by the time the dessert plate arrives the meal has earned the right to come home.',
    perfectFor: ['Private villa dinners', 'Celebrations', 'Romantic evenings', 'Luxury gatherings'],
    courses: {
      starter: [
        { name: 'Passione di Dentice', desc: 'Red snapper carpaccio, passion fruit sauce, basil gelato.' },
        { name: 'Burrata', desc: 'Burrata stuffed with prawn mousse, giardiniera.' },
      ],
      main: [
        { name: 'Lobster', desc: 'Handmade tagliatelle, lobster sauce, cherry tomatoes, fresh basil.' },
        { name: 'Barramundi and the Sea', desc: 'Barramundi roll, clams, Mediterranean sauce, green beans.' },
      ],
      dessert: [
        { name: 'Tiramisu', desc: 'House-made lady fingers, mascarpone cream, espresso.' },
      ],
    },
    wine: {
      white: 'Etna Bianco, Vermentino di Sardegna, or Sauvignon Blanc',
      red: 'Light Pinot Noir or elegant Nero d\'Avola',
      sparkling: 'Franciacorta or dry Prosecco for aperitif service',
    },
    accent: '#2C5F7C',
  },
  {
    id: 'wagyu',
    name: 'Wagyu Experience',
    price: 'IDR 2,400,000++',
    duration: 'Approximately three hours',
    desc: 'Wagyu Tokusen in three forms — raw, enveloped, and grilled. The opening is controlled: tartare, polenta chips, cured egg, basil oil. The middle slows the meal down: an oxtail ragout sealed inside a hand-rolled ravioli, finished with Grana Padano and a foam of kale — a long-cooked ingredient hidden in a delicate envelope, the kaiseki principle in Italian form. The climax is the ribeye, grilled hard and answered by three counterpoints: topinambur cream, blue cheese, walnuts. The meal closes on dark chocolate and salted caramel — bitter, restrained, deliberately not too sweet, so the room remembers what it just ate.',
    perfectFor: ['Luxury celebrations', 'Executive dinners', 'Premium villa experiences', 'Wine-focused evenings'],
    courses: {
      starter: [
        { name: 'My Beef Tartare', desc: 'Wagyu Tokusen chuck tender tartare, polenta chips, cured egg, rocket, basil oil.' },
        { name: 'Ravioli di Coda', desc: 'Oxtail ragout ravioli, Grana Padano cheese sauce, kale foam.' },
      ],
      main: [
        { name: 'Ribeye', desc: 'Grilled Wagyu Tokusen ribeye, topinambur cream, blue cheese sauce, walnuts.' },
      ],
      dessert: [
        { name: 'Tenerina Cake', desc: 'Dark chocolate Callebaut 56% cake, salted caramel gelato.' },
      ],
    },
    wine: {
      red: 'Barolo, Brunello di Montalcino, Amarone della Valpolicella, or Super Tuscan blends',
      white: 'Oaked Chardonnay for guests preferring white wine with richer dishes',
      sparkling: 'Franciacorta Rosé for aperitif and starter pairing',
    },
    accent: '#8B4513',
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Message Sofia on WhatsApp', desc: 'Share your date, villa location, and guest count. She replies within the hour.', icon: MessageCircle },
  { step: '02', title: 'Choose Your Menu', desc: 'Pick Mediterranean Sea or Wagyu. Add wine pairing. Dietary needs? We adjust everything.', icon: Wine },
  { step: '03', title: 'We Arrive & Transform', desc: 'Our team of 6–10 arrives 3 hours early. Table setting, kitchen prep, ambience — all handled.', icon: Truck },
  { step: '04', title: 'You Dine. We Disappear.', desc: 'Course after course, served at your villa. When you are done, we leave everything spotless.', icon: Sparkles },
]

const WHATS_INCLUDED = [
  'Michelin-trained executive chef',
  'Sous chef & kitchen team',
  'Professional service staff',
  'Sommelier wine pairing (optional)',
  'Premium ingredients & imports',
  'Table setting with linens & candles',
  'Full kitchen cleanup',
  'Dietary customization (no extra charge)',
]

const FAQS = [
  { q: 'What is the minimum number of guests?', a: 'Four guests minimum. We can accommodate up to 24 for the full fine dining experience.' },
  { q: 'Can I mix the two menus for my group?', a: 'Absolutely. Half your table can have Mediterranean Sea, half can have Wagyu. Just let Sofia know when booking.' },
  { q: 'What does "++" mean in the price?', a: 'Service charge and government tax are added. The final per-person price is approximately IDR 2.6M (Mediterranean) and IDR 2.85M (Wagyu).' },
  { q: 'How far in advance should I book?', a: '7+ days is ideal for peak season. We can sometimes accommodate 48-hour requests — message us and we will try.' },
  { q: 'Do you provide wine, or do I need to buy it?', a: 'We bring the wine. The pairing is IDR 850K per guest and includes 4–5 glasses matched to each course.' },
  { q: 'What if someone has allergies or dietary restrictions?', a: 'We adjust every course. Gluten-free, shellfish allergy, pregnancy-friendly, halal — just tell us. No extra charge.' },
  { q: 'Where do you cook? Do I need a big kitchen?', a: 'We cook in your villa kitchen. We bring any specialized equipment. We have worked in everything from pool villas to estates.' },
  { q: 'What time do you arrive?', a: 'Typically 3 hours before service for setup and prep. The tasting experience itself lasts 2.5–3 hours.' },
]

const TESTIMONIALS = [
  { name: 'James & Sarah', location: 'London', text: 'We expected good food. We got a memory we will talk about for the rest of our lives. The team in white, the village setting, the courses — pure magic.' },
  { name: 'The Harrisons', location: 'Sydney', text: 'Our anniversary dinner under the stars in a Balinese village. It felt like we had stepped into another world. Every course was a revelation.' },
]

const THE_FOUR = [
  {
    name: 'I Made Surya',
    role: 'Pasta. Mediterranean lead.',
    origin: 'Ubud, Bali',
    image: '/generated/chef-made-surya.png',
    bio: 'Born in a village outside Ubud, where his family ran a warung. He started as a kitchen hand at sixteen in a hotel in Seminyak, moved up to line cook, then to a small Italian restaurant in Canggu where he taught himself to make pasta. Adriano met him in 2021 — they were in the same kitchen for one service, covering for a mutual friend. Adriano watched him work for two hours and offered him an apprenticeship that night. Three months of the training were spent on pasta technique alone. His tagliatelle now travels with him to every Mediterranean evening, rolled in the villa where it will be eaten.',
  },
  {
    name: 'Bayu Pranata',
    role: 'Grill and protein. Wagyu lead.',
    origin: 'Yogyakarta, Java',
    image: '/generated/chef-bayu-pranata.png',
    bio: 'Born in Yogyakarta. Trained in five-star hotel kitchens in Jakarta before moving to Bali in 2019 looking for less industrial work. He specialised in grilled proteins at a steakhouse in Seminyak, where his ribeye became quietly known among local chefs. Adriano heard about him in 2022, took a meeting, watched him cook a single steak, and hired him the same week. He brings the patience of a man who has been at fire since he was nineteen — and the discipline the Wagyu menu requires.',
  },
  {
    name: 'Rizky Saputra',
    role: 'Sauces and technique. Cross-menu.',
    origin: 'Padang, West Sumatra',
    image: '/generated/chef-rizky-saputra.png',
    bio: 'Born in Padang, West Sumatra, into a family that has run restaurants for three generations. Minangkabau cooking is built on sauces that take a day — rendang reduced until the coconut milk has all but disappeared, gulai layered over hours, sambal pounded by hand. He grew up understanding that a sauce that takes ten minutes is not yet a sauce. He left Padang at twenty for Jakarta, then came to Bali in 2020 looking for a kitchen that would demand something different from him. He worked in two hotel kitchens before Adriano met him in 2023 at an industry tasting. The way he reduced a single sauce caught Adriano\'s eye — controlled, patient, almost reverent. Adriano hired him within a fortnight. He runs the sauce station on every evening, regardless of menu. The blue cheese sauce on the Wagyu ribeye and the lobster reduction for the tagliatelle are both his hands.',
  },
  {
    name: 'Ni Putu Asri',
    role: 'Pastry.',
    origin: 'North Bali',
    image: '/generated/chef-ni-putu-asri.png',
    bio: 'Born in a village in north Bali. Trained at a culinary school in Denpasar, then worked in pastry at a luxury resort in Nusa Dua, where she grew frustrated by the industrial scale of it — sheet trays of identical cakes for the breakfast buffet, made by a kitchen of fifteen. Adriano met her in 2023 at a wedding she had been hired to bake for. The dessert was the best thing on the table. He found her two days later. She left the resort the following month and trained with Adriano for nine months — the longest training any of the four has done. The lady fingers in the tiramisu are baked the morning of the dinner. The Tenerina cake is hers.',
  },
]

export default function LunaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.fromTo('.luna-hero-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
      tl.fromTo('.luna-hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
      tl.fromTo('.luna-hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      tl.fromTo('.luna-hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

      gsap.fromTo('.luna-reveal', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.luna-content', start: 'top 75%', once: true },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} data-universe="luna" className="min-h-screen" style={{ background: '#050505', color: '#F5F3EF' }}>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/generated/luna-hero-v2.jpg" alt="Fine dining in Balinese village" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="luna-hero-label inline-block text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6 px-4 py-2 rounded-full border border-[#D4AF37]/30" style={{ fontFamily: "'Cormorant Garamond', serif", background: 'rgba(0,0,0,0.4)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Fine Dining</p>
          <h1 className="luna-hero-title text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
            An Extraordinary<br /><span className="italic">Evening</span>
          </h1>
          <p className="luna-hero-sub text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Italian fine dining, outdoors in a traditional Balinese village. Two curated tasting experiences. A team of white-clad professionals in your villa.
          </p>
          <div className="luna-hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#menus" className="px-8 py-4 bg-[#D4AF37] text-black text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#E8C84B] transition-all">See the Menus</a>
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-full hover:bg-white/10 transition-all">
              <MessageCircle className="w-4 h-4" /> Message Sofia
            </a>
          </div>
        </div>
      </section>

      {/* The Four — Chapter Three */}
      <section id="the-four" className="py-24 md:py-32 px-6" style={{ background: '#080808' }}>
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Chapter Three</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The <span className="italic">Four</span></h2>
            <p className="text-xl md:text-2xl text-white/60 italic max-w-2xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Trained by Adriano. One of them is in your kitchen tonight.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
            <p className="text-white/50 leading-relaxed mb-6">
              Adriano did not build a team. He built a lineage.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              He arrived in Bali in 2019 with the standards of Modena and Tokyo in his hands. He chose not to import a kitchen from Europe. He chose instead to find local talent and teach them everything he knew.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              Four chefs, over five years. Each found in Indonesia. Each chosen on his terms. Each trained by him personally — six months beside him before they cook a single plate for a paying guest, another year beside him before they lead an evening alone. Every sauce, every pour, every minute of pacing tested and corrected until it is right.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              He found them across three islands and three culinary traditions — Bali, Java, and Sumatra. What they share is the kitchen they were trained in.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              The result is something neither Italian nor Indonesian, and at the same time both. It is what happens when a master from one tradition trains his hands in another country, and the country leaves its mark on the cooking.
            </p>
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
              These are the four.
            </p>
          </div>

          {/* Chef Portraits + Bios — Desktop 2×2, Mobile vertical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 max-w-[1080px] mx-auto">
            {THE_FOUR.map((chef) => (
              <div
                key={chef.name}
                className="group flex flex-col"
              >
                {/* Portrait — consistent treatment */}
                <div className="relative aspect-[3/4] max-h-[252px] overflow-hidden rounded-t-2xl">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />
                </div>

                {/* Bio card */}
                <div className="p-6 md:p-8 rounded-b-2xl border border-t-0 border-white/[0.08]" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="text-xl md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>{chef.name}</h3>
                    <span className="text-[10px] text-white/40 tracking-wider uppercase">{chef.origin}</span>
                  </div>
                  <p className="text-[#D4AF37] text-xs tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{chef.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <div className="text-center">
            <p className="text-[#D4AF37]/80 text-sm md:text-base italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              One of the four will be in your kitchen on the night.
            </p>
            <p className="text-white/30 text-xs mt-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Which one depends on the menu, the date, and what arrived on the morning boat.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Intro — Chapter Four */}
      <section className="luna-content py-24 md:py-32 px-6" style={{ background: '#F5F3EF' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="luna-reveal">
              <img src="/generated/luna-experience-collage.png" alt="Fine dining experience" className="rounded-2xl w-full aspect-[4/3] object-cover" />
            </div>
            <div className="luna-reveal">
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Chapter Four — The Experience</p>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>One Night.<br />Two Journeys.</h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-[#1A1A1A]/70 mb-6 leading-relaxed">
                We arrive as a team of white-clad professionals. We transform your villa garden or a Balinese village courtyard into an open-air Michelin-inspired dining room.
              </p>
              <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
                Every course is prepared in front of your guests. Every wine is paired. Every detail — from the hand-pressed linen to the gold-rimmed plates — is considered. Choose between two curated tasting experiences.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Flame, label: 'Open-Flame Cooking' },
                  { icon: Wine, label: 'Sommelier Pairing' },
                  { icon: Clock, label: '2.5–3 Hour Journey' },
                  { icon: Users, label: '4–24 Guests' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm text-[#1A1A1A]/80">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — Cinematic Luxury */}
      <section id="how-it-works" className="relative py-32 md:py-40 px-6 overflow-hidden">
        {/* Cinematic background layers */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(139,69,19,0.06) 0%, transparent 50%), #080808' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(8,8,8,0) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0) 100%)' }} />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          {/* Header — asymmetrical, large */}
          <div className="mb-20 md:mb-28">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#D4AF37]/60" />
              <p className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Process</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05]" style={{ fontFamily: "'Playfair Display', serif" }}>
                How It<br /><span className="italic">Works</span>
              </h2>
              <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md lg:ml-auto lg:text-right">
                Four deliberate steps from first message to final course. Each handled with the precision of a Michelin kitchen.
              </p>
            </div>
            <div className="mt-8 w-full h-[1px] bg-white/10" />
          </div>

          {/* Steps — asymmetrical grid with glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 mb-16">
            {HOW_IT_WORKS.map((item, i) => (
              <div
                key={item.step}
                className="group relative"
                style={{ marginTop: i % 2 === 1 ? '2rem' : '0' }}
              >
                {/* Card with glassmorphism */}
                <div className="relative p-8 md:p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-700 hover:border-[#D4AF37]/20 hover:bg-white/[0.04] hover:shadow-[0_0_60px_-15px_rgba(212,175,55,0.15)]">
                  {/* Step number — large, faded */}
                  <span className="absolute top-4 right-4 text-6xl font-light text-white/[0.03] leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.step}
                  </span>

                  {/* Icon — glassmorphism circle with gold glow on hover */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:border-[#D4AF37]/30 group-hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.25)] group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-[#D4AF37]/80 transition-all duration-500 group-hover:text-[#D4AF37]" strokeWidth={1} />
                    </div>
                    {/* Subtle glow ring on hover */}
                    <div className="absolute inset-0 w-16 h-16 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: '0 0 40px 8px rgba(212,175,55,0.15)' }} />
                  </div>

                  {/* Title — larger, elegant */}
                  <h3 className="text-xl md:text-lg lg:text-xl text-white mb-3 leading-snug transition-colors duration-500 group-hover:text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {item.title}
                  </h3>

                  {/* Description — smaller, lighter, almost disappearing */}
                  <p className="text-xs text-white/35 leading-relaxed transition-colors duration-500 group-hover:text-white/50">
                    {item.desc}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 w-8 h-[1px] bg-white/10 transition-all duration-700 group-hover:w-16 group-hover:bg-[#D4AF37]/40" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA — centered with ornament */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-16 h-[1px] bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
              <div className="w-16 h-[1px] bg-white/10" />
            </div>
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 border border-[#D4AF37]/30 text-[#D4AF37] text-sm tracking-[0.2em] uppercase rounded-full transition-all duration-500 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.2)]">
              <Phone className="w-4 h-4" strokeWidth={1.5} /> Start on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="menus" className="py-24 md:py-32 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Menus</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Two Experiences. One Extraordinary Evening.</h2>
            <p className="text-white/50">Every course is prepared in your villa. Every wine is paired by our sommelier.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MENUS.map((menu) => (
              <div key={menu.id} className="luna-reveal rounded-2xl border border-white/10 overflow-hidden">
                {/* Menu image — 40% smaller */}
                <div className="p-6 pb-0">
                  <div className="max-w-[60%] mx-auto aspect-[4/3] overflow-hidden rounded-xl">
                    <img
                      src={menu.id === 'mediterranean' ? '/generated/menu-mediterranean.png' : '/generated/menu-wagyu.png'}
                      alt={menu.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.name}</h3>
                    <p className="text-sm text-white/50">{menu.duration}</p>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">{menu.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {menu.perfectFor.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/60">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10 border-t border-white/10">
                  <div className="mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Starter</p>
                    {menu.courses.starter.map((c) => (
                      <div key={c.name} className="mb-4 last:mb-0">
                        <h4 className="text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                        <p className="text-white/50 text-sm">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Main Course</p>
                    {menu.courses.main.map((c) => (
                      <div key={c.name} className="mb-4 last:mb-0">
                        <h4 className="text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                        <p className="text-white/50 text-sm">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Dessert</p>
                    {menu.courses.dessert.map((c) => (
                      <div key={c.name} className="mb-4 last:mb-0">
                        <h4 className="text-white font-medium mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{c.name}</h4>
                        <p className="text-white/50 text-sm">{c.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/10 mb-8">
                    <p className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Recommended Wine Pairing</p>
                    <div className="space-y-2 text-sm text-white/50">
                      {menu.wine.red && <p><span className="text-white/70">Red:</span> {menu.wine.red}</p>}
                      {menu.wine.white && <p><span className="text-white/70">White:</span> {menu.wine.white}</p>}
                      {menu.wine.sparkling && <p><span className="text-white/70">Sparkling:</span> {menu.wine.sparkling}</p>}
                    </div>
                  </div>
                  {/* Price at bottom */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Per Person</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-medium text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>{menu.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Menu closing line */}
          <div className="mt-12 text-center">
            <p className="text-[#D4AF37]/70 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Custom menus, dietary adjustments, and bespoke evenings arranged on request.
            </p>
            <p className="text-white/30 text-xs mt-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              All prices subject to government tax and service.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Everything Included</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What You Get</h2>
            <p className="text-white/50">No hidden fees. No surprises. One price, one extraordinary evening.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHATS_INCLUDED.map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-white/10">
                <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <Phone className="w-4 h-4" /> Book This Experience
            </a>
          </div>
        </div>
      </section>

      {/* Experience Gallery */}
      <section id="captured" className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Evening</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>How It Looks</h2>
            <p className="text-white/50">Candlelight. Crystal. White-clad professionals. Your villa, transformed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/luna-gallery-1.png" alt="Sommelier presenting wine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/luna-gallery-2.png" alt="Chef flambe at open kitchen" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/luna-gallery-3.png" alt="Chef plating with guest" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src="/generated/luna-gallery-4.png" alt="Group dining at sunset" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Words From Guests</p>
            <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "'Playfair Display', serif" }}>They Came for Dinner.<br />They Left with Memories.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />)}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">"{t.text}"</p>
                <p className="text-sm text-white/50">{t.name}, {t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Questions</p>
            <h2 className="text-4xl md:text-5xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked</h2>
            <p className="text-white/50">Still have questions? Message Sofia on WhatsApp — she responds within the hour.</p>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="text-white font-medium pr-4" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-[#D4AF37] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
              <MessageCircle className="w-4 h-4" /> Ask Sofia on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-24 md:py-32 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <p className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Reserve</p>
              <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Book Your<br />Extraordinary Evening</h2>
              <div className="w-12 h-[2px] bg-[#D4AF37] mb-8" />
              <p className="text-white/60 mb-8 leading-relaxed">
                Sofia, our fine dining concierge, will confirm your date and menu within the hour. We recommend booking 7+ days in advance for peak season.
              </p>
              <div className="space-y-4 mb-8">
                {MENUS.map((menu) => (
                  <div key={menu.id} className="flex items-center justify-between py-4 border-b border-white/10 group cursor-pointer">
                    <div>
                      <p className="text-white/80 font-medium">{menu.name}</p>
                      <p className="text-sm text-white/40">{menu.duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[#D4AF37] font-medium">{menu.price}</span>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#D4AF37] transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /><span className="text-sm text-white/80">Wine pairing available — IDR 850K per guest</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /><span className="text-sm text-white/80">Minimum 4 guests</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /><span className="text-sm text-white/80">Service charge and government tax included</span></div>
              </div>
              <a href="https://wa.me/6282237565997?text=Hi%20Sofia%2C%20I%27d%20like%20to%20book%20a%20fine%20dining%20experience." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-[#1ea855] transition-all">
                <Phone className="w-4 h-4" /> Book via WhatsApp
              </a>
            </div>
            <div className="p-8 rounded-2xl border border-white/10">
              <BookingForm universe="luna" compact />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
