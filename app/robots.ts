import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/cuenta/', '/admin/', '/panel/'] },
      { userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'], disallow: '/' },
    ],
    sitemap: 'https://arquitectura.tv/sitemap.xml',
  }
}
