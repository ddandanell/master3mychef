export function BarServiceSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <span className="text-sm uppercase tracking-widest text-amber-600 mb-2 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
      )}
    </div>
  )
}
