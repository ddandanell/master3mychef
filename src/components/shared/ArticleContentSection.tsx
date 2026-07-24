import { useLocation } from 'react-router-dom'
import { ARTICLE_CONTENT } from '@/data/content/articleContent'

interface Props {
  className?: string
  invert?: boolean
}

export function ArticleContentSection({ className = '', invert = false }: Props) {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '') || '/'
  const html = ARTICLE_CONTENT[path] || ARTICLE_CONTENT[`${path}/`]

  if (!html) return null

  const baseClasses = invert
    ? 'prose prose-invert prose-stone max-w-none text-[#F5F2EB]/80 prose-headings:font-playfair prose-headings:text-[#F5F2EB] prose-strong:text-[#F5F2EB] prose-a:text-[#C5A028] prose-blockquote:bg-[#1A1A1A]/60 prose-blockquote:border-l-[#C5A028]'
    : 'prose prose-stone max-w-none text-[#4A4745] prose-headings:font-playfair prose-headings:text-[#1A1A1A] prose-strong:text-[#1A1A1A] prose-a:text-[#7E6410] prose-blockquote:bg-[#FAFAF8] prose-blockquote:border-l-[#C5A028]'

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div
          className={`${baseClasses} prose-h2:mb-6 prose-h2:mt-14 prose-h2:text-3xl prose-h3:mt-10 prose-h3:text-2xl prose-p:mb-6 prose-p:text-lg prose-p:leading-relaxed prose-li:text-lg prose-li:leading-relaxed prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-blockquote:rounded-r-2xl prose-blockquote:p-6 [&_h2]:scroll-mt-28 [&_h3]:scroll-mt-28`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </section>
  )
}
