import OptimizedImage from '@/components/OptimizedImage'

interface Props {
  images: { src: string; alt: string }[]
}

export function BarServiceGallery({ images }: Props) {
  if (images.length === 1) {
    return (
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <OptimizedImage
            src={images[0].src}
            alt={images[0].alt}
            className="w-full rounded-lg object-cover"
          />
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, i) => (
            <OptimizedImage
              key={i}
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
