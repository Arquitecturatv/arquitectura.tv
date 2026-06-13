/**
 * FASE 7 — CMS: SANITY
 *
 * JUSTIFICACIÓN DE LA ELECCIÓN:
 * ─────────────────────────────
 * Sanity es la opción óptima para arquitectura.tv por:
 *
 * 1. CONTENT LAKE (API real-time) → Ideal para un portal de noticias
 *    que publica contenido frecuente y necesita updates instantáneos.
 *
 * 2. GROQ (lenguaje de query propio) → Mucho más expresivo que GraphQL
 *    para queries complejas tipo "artículos de BIM escritos en los
 *    últimos 30 días con más de 1000 vistas, ordenados por relevancia".
 *
 * 3. SANITY STUDIO CUSTOMIZABLE → Podemos crear un editorial dashboard
 *    visualmente alineado con la identidad de arquitectura.tv.
 *
 * 4. PORTABLE TEXT → Sistema de rich text extensible para artículos
 *    con bloques custom (galerías, citas destacadas, specs técnicas).
 *
 * 5. IMAGE PIPELINE (Sanity CDN) → Transformaciones on-the-fly,
 *    WebP/AVIF automático, hotspot/crop inteligente.
 *
 * 6. FREE TIER GENEROSO → 200K API requests/mes, 20GB bandwidth.
 *
 * vs. ALTERNATIVAS:
 * - Strapi: Auto-hosted, más mantenimiento, GraphQL bueno pero no GROQ.
 * - Directus: Excelente para datos estructurados, UI menos editorial.
 * - Payload CMS: Muy bueno, pero más nuevo y ecosistema más pequeño.
 * - Contentful: Más caro, menos flexible para schemas custom.
 *
 * VEREDICTO: Sanity > Payload > Directus > Strapi para este caso.
 *
 * INSTALACIÓN:
 * npm install next-sanity @sanity/image-url @sanity/vision
 * npx sanity@latest init --env
 */

// ─── sanity.config.ts ──────────────────────────────────────────────────────
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { media } from 'sanity-plugin-media'
import { schemas } from './schemas'
import { deskStructure } from './desk-structure'

export default defineConfig({
  name: 'arquitectura-tv',
  title: 'arquitectura.tv CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  basePath: '/studio',
  plugins: [
    deskTool({ structure: deskStructure }),
    visionTool(),
    media(),
  ],
  schema: { types: schemas },
})
