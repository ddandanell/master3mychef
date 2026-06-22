export default function PressStrip({ className = '' }: { className?: string }) {
  const press = [
    { name: 'Honeycombers', subtitle: 'Bali' },
    { name: 'NOW! Bali', subtitle: 'Magazine' },
    { name: 'The Bali Bible', subtitle: 'Guide' },
    { name: 'Hello Bali', subtitle: 'Lifestyle' },
    { name: 'Tropical Life', subtitle: 'Magazine' },
  ]

  return (
    <section className={`py-12 px-6 bg-white border-y border-[#E8E6E3] ${className}`}>
      <div className="max-w-[1280px] mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#4A4745]/50 mb-8">
          As Featured In
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
          {press.map((p) => (
            <div key={p.name} className="text-center opacity-40 hover:opacity-70 transition-opacity">
              <p className="text-sm font-semibold tracking-wide text-[#1A1A1A]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {p.name}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-[#4A4745]">{p.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
