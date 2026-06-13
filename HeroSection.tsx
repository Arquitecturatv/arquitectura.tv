'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { categoryLabels } from '@/lib/utils'
import { formatRelativeDate } from '@/lib/utils'
import type { Article } from '@/types'
import { Clock, Eye, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  articles: Article[]
}

export function HeroSection({ articles }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const main = articles[0]
  const secondary = articles.slice(1, 4)

  if (!main) return null

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-obsidian overflow-hidden"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] lg:min-h-[75vh]">

          {/* ─── Main Featured Article ─── */}
          <article className="lg:col-span-8 relative flex flex-col justify-end group">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={main.featuredImage.url}
                alt={main.featuredImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 lg:p-12">
              {/* Category + Meta */}
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/revista/${main.category}`}
                  className="text-[10px] font-bold uppercase tracking-widest bg-copper text-obsidian px-2.5 py-1 rounded-sm hover:bg-copper-400 transition-colors"
                >
                  {categoryLabels[main.category]}
                </Link>
                {main.featured && (
                  <span className="text-[10px] font-medium uppercase tracking-wider text-travertine/60">
                    Destacado
                  </span>
                )}
              </div>

              {/* Title */}
              <h1
                id="hero-heading"
                className="font-display text-display-md lg:text-display-lg text-travertine mb-4 max-w-2xl leading-tight"
              >
                <Link
                  href={`/noticias/${main.slug}`}
                  className="hover:text-copper transition-colors duration-200"
                >
                  {main.title}
                </Link>
              </h1>

              {/* Excerpt */}
              <p className="text-travertine/65 text-base lg:text-lg max-w-xl leading-relaxed mb-6 hidden sm:block">
                {main.excerpt}
              </p>

              {/* Author + Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center text-copper text-xs font-bold shrink-0">
                    {main.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-travertine/90">{main.author.name}</p>
                    <div className="flex items-center gap-3 text-xs text-travertine/45">
                      <span>{formatRelativeDate(main.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {main.readingTime} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={11} />
                        {(main.views / 1000).toFixed(1)}K
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/noticias/${main.slug}`}
                  className="hidden sm:flex items-center gap-2 text-sm font-medium text-travertine/80 hover:text-travertine transition-colors group/link"
                  aria-label={`Leer: ${main.title}`}
                >
                  Leer artículo
                  <ArrowRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Pagination dots (mobile) */}
            <div className="absolute bottom-4 right-4 lg:hidden flex gap-1.5 z-10">
              {articles.slice(0, 4).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Artículo ${i + 1}`}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === activeIndex ? 'w-6 bg-copper' : 'w-1.5 bg-travertine/40'
                  )}
                />
              ))}
            </div>
          </article>

          {/* ─── Secondary Articles ─── */}
          <aside
            className="lg:col-span-4 border-l border-travertine/8 flex flex-col hidden lg:flex"
            aria-label="Artículos relacionados"
          >
            {secondary.map((article, index) => (
              <article
                key={article.id}
                className={cn(
                  'flex-1 relative group flex flex-col justify-end p-6 overflow-hidden',
                  index < secondary.length - 1 && 'border-b border-travertine/8'
                )}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <Image
                    src={article.featuredImage.url}
                    alt={article.featuredImage.alt}
                    fill
                    sizes="25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/50 to-obsidian/10" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <Link
                    href={`/revista/${article.category}`}
                    className="text-[9px] font-bold uppercase tracking-widest text-copper/90 hover:text-copper transition-colors"
                  >
                    {categoryLabels[article.category]}
                  </Link>
                  <h2 className="mt-1.5 text-sm font-medium text-travertine leading-snug line-clamp-2">
                    <Link
                      href={`/noticias/${article.slug}`}
                      className="hover:text-copper transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-1.5 text-xs text-travertine/45">
                    {formatRelativeDate(article.publishedAt)} ·{' '}
                    {article.readingTime} min
                  </p>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
