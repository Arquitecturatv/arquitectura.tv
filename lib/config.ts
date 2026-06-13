// lib/config.ts — arquitectura.tv site configuration

export const siteConfig = {
  name: 'arquitectura.tv',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arquitectura.tv',
  description:
    'El portal de referencia internacional de arquitectura, urbanismo, interiorismo, BIM, inteligencia artificial y diseño. Para arquitectos, diseñadores y estudiantes.',
  social: {
    twitter: '@arquitecturatv',
    instagram: 'arquitecturatv',
    youtube: 'arquitecturatv',
    linkedin: 'arquitecturatv',
    facebook: 'arquitecturatv',
  },
  newsletter: {
    provider: 'mailchimp', // or 'convertkit' | 'resend'
    subscribersCount: '48,000+',
    frequencyLabel: 'Cada semana, lo mejor de la arquitectura mundial',
  },
  analytics: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID,
    gtm: process.env.NEXT_PUBLIC_GTM_ID,
    plausible: 'arquitectura.tv',
  },
  ads: {
    enabled: true,
    googleAdSense: process.env.NEXT_PUBLIC_ADSENSE_ID,
  },
  cms: {
    provider: 'sanity',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
  },
  pagination: {
    articlesPerPage: 12,
    projectsPerPage: 9,
    videosPerPage: 12,
  },
  membership: {
    plans: [
      {
        id: 'free',
        name: 'Libre',
        price: 0,
        features: [
          'Acceso a noticias',
          'Newsletter semanal',
          '5 proyectos/mes',
        ],
      },
      {
        id: 'pro',
        name: 'Profesional',
        price: 9.99,
        currency: 'USD',
        period: 'mes',
        features: [
          'Contenido ilimitado',
          'Archivo completo',
          'Descargas en alta resolución',
          'Sin publicidad',
          'Acceso anticipado',
        ],
      },
      {
        id: 'studio',
        name: 'Estudio',
        price: 29.99,
        currency: 'USD',
        period: 'mes',
        features: [
          'Todo Pro',
          'Perfil de estudio en directorio',
          'Publicar proyectos',
          'Estadísticas avanzadas',
          '3 cuentas de equipo',
        ],
      },
    ],
  },
} as const

export const navItems = [
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Noticias', href: '/noticias' },
  {
    label: 'Revista',
    href: '/revista',
    children: [
      { label: 'Arquitectura', href: '/revista/arquitectura' },
      { label: 'Urbanismo', href: '/revista/urbanismo' },
      { label: 'Interiorismo', href: '/revista/interiorismo' },
      { label: 'Tecnología', href: '/revista/tecnologia' },
      { label: 'IA para Arquitectos', href: '/revista/ia' },
    ],
  },
  { label: 'Videos', href: '/videos' },
  { label: 'Podcast', href: '/podcast' },
  {
    label: 'Comunidad',
    href: '/comunidad',
    children: [
      { label: 'Directorio', href: '/directorio' },
      { label: 'Eventos', href: '/eventos' },
      { label: 'Empleos', href: '/empleos' },
    ],
  },
  { label: 'Cursos', href: '/cursos', badge: 'NUEVO' },
] as const

export const categories = [
  {
    id: 'arquitectura',
    label: 'Arquitectura',
    icon: 'building',
    color: 'bg-obsidian text-travertine',
    href: '/proyectos?categoria=arquitectura',
  },
  {
    id: 'urbanismo',
    label: 'Urbanismo',
    icon: 'city',
    color: 'bg-sage text-travertine',
    href: '/proyectos?categoria=urbanismo',
  },
  {
    id: 'interiorismo',
    label: 'Interiorismo',
    icon: 'home',
    color: 'bg-copper-100 text-copper-800',
    href: '/proyectos?categoria=interiorismo',
  },
  {
    id: 'bim',
    label: 'BIM',
    icon: 'cube',
    color: 'bg-bim-blue/20 text-blue-800',
    href: '/revista/bim',
  },
  {
    id: 'ia',
    label: 'IA para Arqs.',
    icon: 'brain',
    color: 'bg-obsidian-800 text-travertine',
    href: '/revista/ia',
  },
  {
    id: 'visualizacion-3d',
    label: 'Visualización 3D',
    icon: 'vector-triangle',
    color: 'bg-cement/20 text-cement',
    href: '/revista/visualizacion-3d',
  },
  {
    id: 'ciudades-inteligentes',
    label: 'Smart Cities',
    icon: 'topology-star',
    color: 'bg-sage/20 text-sage',
    href: '/revista/ciudades-inteligentes',
  },
  {
    id: 'construccion',
    label: 'Construcción',
    icon: 'tool',
    color: 'bg-copper-50 text-copper-700',
    href: '/revista/construccion',
  },
] as const
