import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Category } from '@/types'

// ─── Class names ──────────────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ─── Date formatting ──────────────────────────────────────────────────────────
export function formatDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
): string {
  return new Intl.DateTimeFormat('es-ES', options).format(new Date(dateStr))
}

export function formatRelativeDate(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)

  if (diffMins < 60) return `hace ${diffMins} min`
  if (diffHours < 24) return `hace ${diffHours}h`
  if (diffDays < 7) return `hace ${diffDays} días`
  if (diffWeeks < 4) return `hace ${diffWeeks} semanas`
  if (diffMonths < 12) return `hace ${diffMonths} meses`
  return formatDate(dateStr, { year: 'numeric', month: 'short' })
}

// ─── Number formatting ────────────────────────────────────────────────────────
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toString()
}

export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale = 'es-MX'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount)
}

// ─── Duration formatting ──────────────────────────────────────────────────────
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function formatDurationHuman(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)} min`
  if (hours === 1) return '1 hora'
  return `${hours} horas`
}

// ─── Reading time ─────────────────────────────────────────────────────────────
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// ─── Slugify ──────────────────────────────────────────────────────────────────
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// ─── Truncate ─────────────────────────────────────────────────────────────────
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).replace(/\s+\S*$/, '') + '…'
}

// ─── Category helpers ─────────────────────────────────────────────────────────
export const categoryLabels: Record<Category, string> = {
  arquitectura: 'Arquitectura',
  urbanismo: 'Urbanismo',
  interiorismo: 'Interiorismo',
  construccion: 'Construcción',
  diseno: 'Diseño',
  tecnologia: 'Tecnología',
  ia: 'IA para Arquitectos',
  'visualizacion-3d': 'Visualización 3D',
  bim: 'BIM',
  'ciudades-inteligentes': 'Ciudades Inteligentes',
}

export const categoryColors: Record<Category, string> = {
  arquitectura: 'bg-obsidian-900/10 text-obsidian-900',
  urbanismo: 'bg-sage/15 text-sage',
  interiorismo: 'bg-copper-100 text-copper-700',
  construccion: 'bg-copper-50 text-copper-600',
  diseno: 'bg-travertine-dark text-cement',
  tecnologia: 'bg-bim-blue/15 text-blue-700',
  ia: 'bg-obsidian-800 text-travertine',
  'visualizacion-3d': 'bg-cement/15 text-cement',
  bim: 'bg-bim-blue/15 text-blue-800',
  'ciudades-inteligentes': 'bg-sage/20 text-sage',
}

// ─── SEO helpers ──────────────────────────────────────────────────────────────
export function buildOgImageUrl(params: {
  title: string
  category?: string
  author?: string
}): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://arquitectura.tv'
  const sp = new URLSearchParams({
    title: params.title,
    ...(params.category && { category: params.category }),
    ...(params.author && { author: params.author }),
  })
  return `${base}/api/og?${sp.toString()}`
}

export function buildArticleJsonLd(article: {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: { name: string; url?: string }
  image: { url: string; width: number; height: number }
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      url: article.author.url,
    },
    image: {
      '@type': 'ImageObject',
      url: article.image.url,
      width: article.image.width,
      height: article.image.height,
    },
    url: article.url,
    publisher: {
      '@type': 'Organization',
      name: 'arquitectura.tv',
      logo: {
        '@type': 'ImageObject',
        url: 'https://arquitectura.tv/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function buildBreadcrumbJsonLd(
  crumbs: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}
