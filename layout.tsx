import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { BreakingNewsTicker } from '@/components/sections/BreakingNewsTicker'
import { JsonLd } from '@/components/seo/JsonLd'

const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://arquitectura.tv'),
  title: {
    default: 'arquitectura.tv',
    template: '%s · arquitectura.tv',
  },
  description:
    'El portal de referencia internacional de arquitectura, urbanismo, interiorismo, BIM, inteligencia artificial y diseño.',
  keywords: ['arquitectura', 'urbanismo', 'BIM', 'diseño', 'interiorismo', 'IA arquitectura'],
  authors: [{ name: 'arquitectura.tv', url: 'https://arquitectura.tv' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://arquitectura.tv',
    siteName: 'arquitectura.tv',
    title: 'arquitectura.tv — Arquitectura, Urbanismo y Diseño Internacional',
    description: 'El portal de referencia internacional de arquitectura, urbanismo y diseño.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'arquitectura.tv' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arquitecturatv',
    title: 'arquitectura.tv',
    description: 'El portal de referencia internacional de arquitectura y diseño.',
    images: ['/og-default.jpg'],
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'arquitectura.tv',
  url: 'https://arquitectura.tv',
  description: 'El portal de referencia internacional de arquitectura, urbanismo y diseño.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://arquitectura.tv/buscar?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className="bg-[#F5F3EE] text-[#0A0A0A] antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C2952A] focus:text-white focus:rounded">
          Ir al contenido principal
        </a>
        <BreakingNewsTicker />
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
