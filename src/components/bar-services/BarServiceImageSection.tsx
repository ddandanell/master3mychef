import OptimizedImage from '@/components/OptimizedImage'

export interface BarServiceImageSectionProps {
  image: { src: string; alt: string }
  children: React.ReactNode
  imagePosition?: 'left' | 'right'
  bgColor?: 'white' | 'stone' | 'charcoal' | 'stoneDark'
}

export function BarServiceImageSection({
  image,
  children,
  imagePosition = 'right',
  bgColor = 'white',
}: BarServiceImageSectionProps) {
  const bgClasses: Record<string, string> = {
    white: 'bg-[#F5F2EB]',
    stone: 'bg-[#1A1A1A]',
    charcoal: 'bg-[#0A0A0A]',
    stoneDark: 'bg-[#0F0E0C]',
  }
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1'
  const contentPadding = imagePosition === 'left' ? 'md:pl-8 lg:pl-16' : 'md:pr-8 lg:pr-16'

  return (
    <div className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${bgClasses[bgColor]}`}>
      <div className={`${contentOrder} py-8 md:py-12 ${contentPadding}`}>{children}</div>
      <div className={`${imageOrder}`}>
        <div className="relative group overflow-hidden rounded-2xl md:rounded-[2rem]">
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/40 via-[#C5A028]/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay z-10 pointer-events-none" />
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            className="w-full h-72 sm:h-80 md:h-[28rem] lg:h-[32rem] object-cover rounded-2xl md:rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle gold border */}
          <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] ring-1 ring-inset ring-[#C5A028]/15 z-20 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
