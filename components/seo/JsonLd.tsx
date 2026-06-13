import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// ─── Breadcrumbs ──────────────────────────────────────────────────────────────
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ label: 'Inicio', href: '/' }, ...items]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://arquitectura.tv${item.href}`
        : undefined,
    })),
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav
        aria-label="Ruta de navegación"
        className={className}
      >
        <ol
          role="list"
          className="flex flex-wrap items-center gap-1 text-xs text-obsidian/45"
        >
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            return (
              <li key={index} className="flex items-center gap-1">
                {index === 0 && (
                  <Home size={12} className="shrink-0" aria-hidden="true" />
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-obsidian transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? 'page' : undefined}
                    className={isLast ? 'text-obsidian/70 font-medium' : ''}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={12}
                    className="shrink-0 text-obsidian/25"
                    aria-hidden="true"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

// ─── Article Meta (Schema.org inline) ────────────────────────────────────────
interface ArticleMetaProps {
  author: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  category: string
}

export function ArticleMeta({
  author,
  publishedAt,
  updatedAt,
  readingTime,
  category,
}: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-obsidian/50">
      <span>
        Por <strong className="font-medium text-obsidian/80">{author}</strong>
      </span>
      <time
        dateTime={publishedAt}
        itemProp="datePublished"
        className="flex items-center gap-1"
      >
        {new Intl.DateTimeFormat('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(publishedAt))}
      </time>
      {updatedAt && updatedAt !== publishedAt && (
        <time
          dateTime={updatedAt}
          itemProp="dateModified"
          className="text-obsidian/35 text-xs"
        >
          (actualizado{' '}
          {new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'short',
          }).format(new Date(updatedAt))}
          )
        </time>
      )}
      <span>{readingTime} min de lectura</span>
      <span
        className="text-xs font-medium uppercase tracking-wider text-copper"
        itemProp="articleSection"
      >
        {category}
      </span>
    </div>
  )
}
