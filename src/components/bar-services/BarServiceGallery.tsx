import OptimizedImage from '@/components/OptimizedImage'

interface Props {
  images: { src: string; alt: string }[]
}

export function BarServiceGallery({ images }: Props) {
  if (images.length === 0) return null

  return (
    <section className="py-20 md:py-28 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5A028] mb-4 block">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair text-[#F5F2EB]">
            See the service in action
          </h2>
        </div>

        {images.length === 1 ? (
          <div className="relative group overflow-hidden rounded-2xl md:rounded-[2rem]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/40 via-[#C5A028]/10 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay z-10 pointer-events-none" />
            <OptimizedImage
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-80 md:h-[32rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl md:rounded-[2rem] ring-1 ring-inset ring-[#C5A028]/15 z-20 pointer-events-none" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {images.map((image, i) => (
              <div
                key={i}
                className={`relative group overflow-hidden rounded-2xl ${
                  i === 0 && images.length % 2 === 1 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A]/40 via-[#C5A028]/10 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[#C5A028]/5 mix-blend-overlay z-10 pointer-events-none" />
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 && images.length % 2 === 1 ? 'h-80 md:h-[28rem]' : 'h-64 md:h-80'
                  }`}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#C5A028]/15 z-20 pointer-events-none" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
