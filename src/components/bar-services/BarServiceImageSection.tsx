import OptimizedImage from '@/components/OptimizedImage'

export interface BarServiceImageSectionProps {
  image: { src: string; alt: string }
  children: React.ReactNode
  imagePosition?: 'left' | 'right'
  bgColor?: 'white' | 'stone'
}

export function BarServiceImageSection({
  image,
  children,
  imagePosition = 'right',
  bgColor = 'white',
}: BarServiceImageSectionProps) {
  const bgClass = bgColor === 'stone' ? 'bg-stone-50' : 'bg-white'
  const imageOrder = imagePosition === 'left' ? 'md:order-1' : 'md:order-2'
  const contentOrder = imagePosition === 'left' ? 'md:order-2' : 'md:order-1'

  return (
    <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${bgClass}`}>
      <div className={`${contentOrder}`}>{children}</div>
      <div className={`${imageOrder}`}>
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  )
}
