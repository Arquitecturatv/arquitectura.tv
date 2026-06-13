'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn, categoryLabels, categoryColors, formatRelativeDate } from '@/lib/utils'
import { categories } from '@/lib/config'
import type { Article } from '@/types'
import {
  Building2,
  MapPin,
  Home,
  Box,
  Brain,
  Triangle,
  Wifi,
  Hammer,
  Clock,
  Eye,
  ArrowRight,
} from 'lucide-react'

const categoryIconMap: Record<string, React.ReactNode> = {
  building: <Building2 size={22} />,
  city: <MapPin size={22} />,
  home: <Home size={22} />,
  cube: <Box size={22} />,
  brain: <Brain size={22} />,
  'vector-triangle': <Triangle size={22} />,
  'topology-star': <Wifi size={22} />,
  tool: <Hammer size={22} />,
}

// ─── Breaking News Ticker ─────────────────────────────────────────────────────
const breakingItems = [
  '🔴 EN VIVO: Pritzker Prize 2025 anunciado — Conoce al ganador',
  '📐 BIG presenta el mayor proyecto de madera CLT en Europa',
  '🤖 ChatGPT-5 integrado en Revit: así cambia el diseño BIM',
  '🌆 Smart City Barcelona: nuevo master plan para 2030',
  '🏆 Nuevos ganadores del concurso internacional de vivienda social',
  '📺 Nueva temporada de Arquitectura Viva disponible en arquitectura.tv',
]

export function BreakingNewsTicker() {
  const doubled = [...breakingItems, ...breakingItems]

  return (
    <div
      role="marquee"
      aria-label="Últimas noticias"
      className="bg-obsidian-900 border-b border-travertine/8 overflow-hidden"
    >
      <div className="flex items-center">
        <div className="shrink-0 px-4 py-2 bg-copper">
          <span className="text-[10px] font-bold uppercase tracking-widest text-obsidian whitespace-nowrap">
            Última hora
          </span>
        </div>
        <div className="ticker-wrapper flex-1 py-2">
          <div className="ticker-content">
            {doubled.map((item, i) => (
              <span
                key={i}
                className="inline-block px-8 text-xs text-travertine/70 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Category Strip ────────────────────────────────────────────────────────────
export function CategoryStrip() {
  return (
    <nav
      aria-label="Categorías temáticas"
      className="bg-travertine border-b border-obsidian/8 py-3"
    >
      <div className="content-container">
        <ul
          role="list"
          className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1"
        >
          {categories.map((cat) => (
            <li key={cat.id} className="shrink-0">
              <Link
                href={cat.href}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
                  cat.color
                )}
              >
                <span aria-hidden="true" className="shrink-0">
                  {categoryIconMap[cat.icon]}
                </span>
                <span className="whitespace-nowrap">{cat.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

// ─── Featured News Grid ────────────────────────────────────────────────────────
interface FeaturedNewsGridProps {
  articles: Article[]
}

export function FeaturedNewsGrid({ articles }: FeaturedNewsGridProps) {
  if (!articles.length) return null

  const [main, ...rest] = articles

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Large main card */}
      <article className="lg:col-span-7 group">
        <Link href={`/noticias/${main.slug}`} className="block">
          <div className="img-zoom rounded-xl overflow-hidden aspect-[16/10] mb-4">
            <Image
              src={main.featuredImage.url}
              alt={main.featuredImage.alt}
              width={main.featuredImage.width}
              height={main.featuredImage.height}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={cn(
                  'text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded',
                  categoryColors[main.category]
                )}
              >
                {categoryLabels[main.category]}
              </span>
              {main.featured && (
                <span className="text-[10px] font-medium text-copper uppercase tracking-wider">
                  Destacado
                </span>
              )}
            </div>
            <h3 className="font-display text-heading-xl text-obsidian group-hover:text-copper transition-colors leading-tight mb-2">
              {main.title}
            </h3>
            <p className="text-obsidian/60 text-sm leading-relaxed line-clamp-2 mb-3">
              {main.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-obsidian/40">
              <span className="font-medium text-obsidian/60">{main.author.name}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={11} />
                {main.readingTime} min
              </span>
              <span className="flex items-center gap-1">
                <Eye size={11} />
                {(main.views / 1000).toFixed(1)}K
              </span>
              <span>{formatRelativeDate(main.publishedAt)}</span>
            </div>
          </div>
        </Link>
      </article>

      {/* Smaller cards column */}
      <div className="lg:col-span-5 flex flex-col gap-5">
        {rest.slice(0, 4).map((article) => (
          <article
            key={article.id}
            className="flex gap-4 group pb-5 border-b border-obsidian/8 last:border-0 last:pb-0"
          >
            <Link
              href={`/noticias/${article.slug}`}
              className="shrink-0 img-zoom rounded-lg overflow-hidden w-24 h-24 sm:w-28 sm:h-28"
            >
              <Image
                src={article.featuredImage.url}
                alt={article.featuredImage.alt}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <span
                className={cn(
                  'text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded inline-block mb-1.5 w-fit',
                  categoryColors[article.category]
                )}
              >
                {categoryLabels[article.category]}
              </span>
              <h3 className="text-sm font-semibold text-obsidian group-hover:text-copper transition-colors leading-snug line-clamp-2 mb-2">
                <Link href={`/noticias/${article.slug}`}>{article.title}</Link>
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-obsidian/40">
                <span>{formatRelativeDate(article.publishedAt)}</span>
                <span>·</span>
                <span className="flex items-center gap-0.5">
                  <Clock size={10} />
                  {article.readingTime} min
                </span>
              </div>
            </div>
          </article>
        ))}

        {/* View all link */}
        <Link
          href="/noticias"
          className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-obsidian/60 hover:text-obsidian border border-obsidian/15 hover:border-obsidian/30 rounded-lg transition-colors group/link"
        >
          Ver todas las noticias
          <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
