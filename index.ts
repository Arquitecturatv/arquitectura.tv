// types/index.ts — arquitectura.tv type definitions

export type Category =
  | 'arquitectura'
  | 'urbanismo'
  | 'interiorismo'
  | 'construccion'
  | 'diseno'
  | 'tecnologia'
  | 'ia'
  | 'visualizacion-3d'
  | 'bim'
  | 'ciudades-inteligentes'

export type ContentType = 'articulo' | 'proyecto' | 'video' | 'podcast' | 'evento' | 'curso'

export type MembershipTier = 'free' | 'pro' | 'studio' | 'enterprise'

// ─── Author ───────────────────────────────────────────────────────────────────

export interface Author {
  id: string
  name: string
  slug: string
  bio: string
  avatar: string
  role: string
  social: {
    twitter?: string
    instagram?: string
    linkedin?: string
    website?: string
  }
}

// ─── Media ────────────────────────────────────────────────────────────────────

export interface MediaImage {
  url: string
  alt: string
  caption?: string
  credit?: string
  width: number
  height: number
  blurDataURL?: string
}

// ─── Article / News ───────────────────────────────────────────────────────────

export interface Article {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string // HTML or MDX
  category: Category
  tags: string[]
  author: Author
  publishedAt: string
  updatedAt?: string
  featuredImage: MediaImage
  gallery?: MediaImage[]
  readingTime: number
  views: number
  featured: boolean
  sponsored: boolean
  sponsor?: Sponsor
  seo: SEOMeta
}

// ─── Project ──────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: Category
  year: number
  location: {
    city: string
    country: string
    coordinates?: [number, number]
  }
  architects: string[]
  client?: string
  area?: number // m²
  status: 'built' | 'under-construction' | 'competition' | 'concept'
  featuredImage: MediaImage
  gallery: MediaImage[]
  tags: string[]
  author: Author
  publishedAt: string
  views: number
  featured: boolean
  weeklyPick: boolean
  seo: SEOMeta
}

// ─── Video ────────────────────────────────────────────────────────────────────

export interface Video {
  id: string
  slug: string
  title: string
  description: string
  category: Category
  duration: number // seconds
  thumbnail: MediaImage
  videoUrl: string
  youtubeId?: string
  vimeoId?: string
  author: Author
  publishedAt: string
  views: number
  featured: boolean
  seo: SEOMeta
}

// ─── Podcast ──────────────────────────────────────────────────────────────────

export interface PodcastEpisode {
  id: string
  slug: string
  episodeNumber: number
  season: number
  title: string
  description: string
  duration: number
  audioUrl: string
  thumbnail: MediaImage
  guest?: {
    name: string
    role: string
    avatar?: string
  }
  topics: string[]
  publishedAt: string
  seo: SEOMeta
}

// ─── Event ────────────────────────────────────────────────────────────────────

export interface Event {
  id: string
  slug: string
  title: string
  description: string
  type: 'congreso' | 'exposicion' | 'feria' | 'taller' | 'conferencia' | 'concurso'
  startDate: string
  endDate: string
  location: {
    name: string
    city: string
    country: string
    address?: string
    online: boolean
  }
  organizer: string
  website?: string
  registrationUrl?: string
  price?: { amount: number; currency: string; free: boolean }
  featuredImage: MediaImage
  tags: string[]
  seo: SEOMeta
}

// ─── Course ───────────────────────────────────────────────────────────────────

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  instructor: Author
  category: Category
  level: 'principiante' | 'intermedio' | 'avanzado'
  duration: number // hours
  lessons: number
  price: { amount: number; currency: string }
  originalPrice?: { amount: number; currency: string }
  thumbnail: MediaImage
  curriculum: { chapter: string; lessons: string[] }[]
  skills: string[]
  certificate: boolean
  enrollments: number
  rating: { average: number; count: number }
  publishedAt: string
  seo: SEOMeta
}

// ─── Directory / Company ──────────────────────────────────────────────────────

export interface Company {
  id: string
  slug: string
  name: string
  description: string
  logo: MediaImage
  category: 'estudio' | 'constructora' | 'proveedor' | 'software' | 'consultora' | 'inmobiliaria'
  services: string[]
  location: { city: string; country: string }
  website: string
  contact: { email?: string; phone?: string }
  social: { instagram?: string; linkedin?: string }
  verified: boolean
  featured: boolean
  plan: 'free' | 'basic' | 'premium'
  founded?: number
  employees?: string
  projects?: number
}

// ─── Job / Employment ─────────────────────────────────────────────────────────

export interface Job {
  id: string
  slug: string
  title: string
  company: Company
  description: string
  requirements: string[]
  responsibilities: string[]
  type: 'tiempo-completo' | 'medio-tiempo' | 'freelance' | 'practicas' | 'remoto'
  location: { city: string; country: string; remote: boolean }
  salary?: { min: number; max: number; currency: string; period: 'mensual' | 'anual' }
  category: Category
  tags: string[]
  publishedAt: string
  expiresAt: string
  applicationUrl: string
  views: number
  applications: number
}

// ─── SEO ──────────────────────────────────────────────────────────────────────

export interface SEOMeta {
  title: string
  description: string
  keywords?: string[]
  ogImage?: MediaImage
  canonical?: string
  noIndex?: boolean
  jsonLd?: Record<string, unknown>
}

// ─── Newsletter ───────────────────────────────────────────────────────────────

export interface NewsletterSubscriber {
  email: string
  name?: string
  preferences: Category[]
  subscribedAt: string
  confirmed: boolean
}

// ─── Sponsorship / Advertising ────────────────────────────────────────────────

export interface Sponsor {
  id: string
  name: string
  logo: MediaImage
  website: string
  tagline?: string
  adLabel: string
}

export interface Advertisement {
  id: string
  sponsor: Sponsor
  type: 'banner-hero' | 'sidebar' | 'inline' | 'newsletter' | 'video-pre'
  imageUrl: string
  linkUrl: string
  impressions: number
  clicks: number
  startDate: string
  endDate: string
}

// ─── User ─────────────────────────────────────────────────────────────────────

export interface UserProfile {
  id: string
  email: string
  name: string
  avatar?: string
  bio?: string
  role: 'user' | 'author' | 'editor' | 'admin'
  membership: MembershipTier
  memberSince: string
  bookmarks: string[]
  following: string[]
  preferences: {
    categories: Category[]
    emailNotifications: boolean
    newsletterFrequency: 'diario' | 'semanal' | 'quincenal' | 'nunca'
  }
}

// ─── API Response ─────────────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    perPage: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  badge?: string
  featured?: boolean
}
