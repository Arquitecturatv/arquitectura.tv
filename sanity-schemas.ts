// sanity/schemas/index.ts
import { defineField, defineType } from 'sanity'

// ─── Author Schema ─────────────────────────────────────────────────────────────
export const authorSchema = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({ name: 'name', title: 'Nombre completo', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } }),
    defineField({ name: 'role', title: 'Rol / Cargo', type: 'string' }),
    defineField({ name: 'bio', title: 'Biografía', type: 'text', rows: 3 }),
    defineField({ name: 'avatar', title: 'Foto de perfil', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'social',
      title: 'Redes sociales',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'string', title: 'Twitter / X' },
        { name: 'instagram', type: 'string', title: 'Instagram' },
        { name: 'linkedin', type: 'string', title: 'LinkedIn' },
        { name: 'website', type: 'url', title: 'Sitio web' },
      ],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'avatar' } },
})

// ─── Article Schema ────────────────────────────────────────────────────────────
export const articleSchema = defineType({
  name: 'article',
  title: 'Artículo / Noticia',
  type: 'document',
  icon: () => '📰',
  groups: [
    { name: 'content', title: 'Contenido', default: true },
    { name: 'media', title: 'Medios' },
    { name: 'meta', title: 'Metadatos' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content',
      validation: r => r.required().max(100).warning('Ideal máximo 80 caracteres para SEO'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      group: 'meta',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: r => r.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      group: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Pie de foto' },
            { name: 'credit', type: 'string', title: 'Crédito fotográfico' },
          ],
        },
        {
          type: 'object',
          name: 'pullQuote',
          title: 'Cita destacada',
          fields: [
            { name: 'quote', type: 'text', title: 'Cita' },
            { name: 'attribution', type: 'string', title: 'Atribución' },
          ],
        },
        {
          type: 'object',
          name: 'projectSpecs',
          title: 'Ficha técnica',
          fields: [
            { name: 'architect', type: 'string', title: 'Arquitecto(s)' },
            { name: 'location', type: 'string', title: 'Ubicación' },
            { name: 'year', type: 'number', title: 'Año' },
            { name: 'area', type: 'number', title: 'Superficie (m²)' },
            { name: 'client', type: 'string', title: 'Cliente' },
          ],
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      group: 'meta',
      options: {
        list: [
          { title: 'Arquitectura', value: 'arquitectura' },
          { title: 'Urbanismo', value: 'urbanismo' },
          { title: 'Interiorismo', value: 'interiorismo' },
          { title: 'Construcción', value: 'construccion' },
          { title: 'Diseño', value: 'diseno' },
          { title: 'Tecnología', value: 'tecnologia' },
          { title: 'IA para Arquitectos', value: 'ia' },
          { title: 'Visualización 3D', value: 'visualizacion-3d' },
          { title: 'BIM', value: 'bim' },
          { title: 'Ciudades Inteligentes', value: 'ciudades-inteligentes' },
        ],
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      group: 'meta',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      group: 'meta',
      to: [{ type: 'author' }],
      validation: r => r.required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagen destacada',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Texto alternativo (SEO)', validation: r => r.required() },
        { name: 'caption', type: 'string', title: 'Pie de foto' },
        { name: 'credit', type: 'string', title: 'Crédito fotográfico' },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de imágenes',
      type: 'array',
      group: 'media',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'featured',
      title: 'Artículo destacado',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
    }),
    defineField({
      name: 'sponsored',
      title: 'Contenido patrocinado',
      type: 'boolean',
      group: 'meta',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'meta',
      validation: r => r.required(),
    }),
    // SEO fields
    defineField({
      name: 'seoTitle',
      title: 'Título SEO (override)',
      type: 'string',
      group: 'seo',
      validation: r => r.max(70).warning('Google muestra hasta 60-70 caracteres'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta descripción',
      type: 'text',
      group: 'seo',
      rows: 2,
      validation: r => r.max(160).warning('Google muestra hasta 155-160 caracteres'),
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Keywords SEO',
      type: 'array',
      group: 'seo',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      category: 'category',
    },
    prepare({ title, author, media, category }) {
      return {
        title,
        subtitle: `${category ?? ''} · ${author ?? 'Sin autor'}`,
        media,
      }
    },
  },
  orderings: [
    { title: 'Fecha: reciente', name: 'dateDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
    { title: 'Fecha: antigua', name: 'dateAsc', by: [{ field: 'publishedAt', direction: 'asc' }] },
  ],
})

// ─── Project Schema ────────────────────────────────────────────────────────────
export const projectSchema = defineType({
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  icon: () => '🏛️',
  fields: [
    defineField({ name: 'title', title: 'Nombre del proyecto', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 4, validation: r => r.required() }),
    defineField({
      name: 'architects',
      title: 'Arquitecto(s)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: r => r.required().min(1),
    }),
    defineField({ name: 'client', title: 'Cliente', type: 'string' }),
    defineField({
      name: 'year',
      title: 'Año de finalización',
      type: 'number',
      validation: r => r.required().min(1900).max(2100),
    }),
    defineField({ name: 'area', title: 'Superficie (m²)', type: 'number' }),
    defineField({
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'Construido', value: 'built' },
          { title: 'En construcción', value: 'under-construction' },
          { title: 'Concurso', value: 'competition' },
          { title: 'Concepto', value: 'concept' },
        ],
      },
      validation: r => r.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'object',
      fields: [
        { name: 'city', type: 'string', title: 'Ciudad', validation: r => r.required() },
        { name: 'country', type: 'string', title: 'País', validation: r => r.required() },
        { name: 'lat', type: 'number', title: 'Latitud' },
        { name: 'lng', type: 'number', title: 'Longitud' },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Categoría principal',
      type: 'string',
      options: {
        list: [
          { title: 'Arquitectura', value: 'arquitectura' },
          { title: 'Urbanismo', value: 'urbanismo' },
          { title: 'Interiorismo', value: 'interiorismo' },
          { title: 'Construcción', value: 'construccion' },
        ],
      },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Imagen principal',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text', validation: r => r.required() }],
      validation: r => r.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galería de imágenes',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [
          { name: 'alt', type: 'string', title: 'Alt text' },
          { name: 'caption', type: 'string', title: 'Pie de foto' },
        ],
      }],
    }),
    defineField({ name: 'tags', title: 'Etiquetas', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'featured', title: 'Proyecto destacado', type: 'boolean', initialValue: false }),
    defineField({ name: 'weeklyPick', title: 'Proyecto de la semana', type: 'boolean', initialValue: false }),
    defineField({ name: 'author', title: 'Editor', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime', validation: r => r.required() }),
    defineField({ name: 'seoTitle', title: 'Título SEO', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'Meta descripción', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', city: 'location.city', country: 'location.country', media: 'featuredImage' },
    prepare({ title, city, country, media }) {
      return { title, subtitle: `${city ?? ''}, ${country ?? ''}`, media }
    },
  },
})

// ─── Video Schema ──────────────────────────────────────────────────────────────
export const videoSchema = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: () => '🎬',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'videoType',
      title: 'Plataforma',
      type: 'string',
      options: { list: ['youtube', 'vimeo', 'cloudflare-stream', 'direct'] },
      validation: r => r.required(),
    }),
    defineField({ name: 'videoId', title: 'ID del video (YouTube/Vimeo)', type: 'string' }),
    defineField({ name: 'videoUrl', title: 'URL del video (directo)', type: 'url' }),
    defineField({ name: 'duration', title: 'Duración (segundos)', type: 'number' }),
    defineField({
      name: 'thumbnail',
      title: 'Miniatura',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt text', validation: r => r.required() }],
    }),
    defineField({ name: 'category', title: 'Categoría', type: 'string' }),
    defineField({ name: 'tags', title: 'Etiquetas', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'featured', title: 'Destacado', type: 'boolean', initialValue: false }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime', validation: r => r.required() }),
  ],
  preview: {
    select: { title: 'title', media: 'thumbnail', category: 'category' },
    prepare({ title, media, category }) {
      return { title, subtitle: category, media }
    },
  },
})

// ─── GROQ Queries ─────────────────────────────────────────────────────────────
export const GROQ = {
  featuredArticles: `
    *[_type == "article" && featured == true && publishedAt < now()]
    | order(publishedAt desc) [0..4] {
      _id,
      title,
      slug,
      excerpt,
      category,
      tags,
      featuredImage { ..., asset-> },
      author-> { name, slug, avatar },
      publishedAt,
      featured,
      sponsored
    }
  `,
  latestArticles: `
    *[_type == "article" && publishedAt < now()]
    | order(publishedAt desc) [0..11] {
      _id,
      title,
      slug,
      excerpt,
      category,
      featuredImage { ..., asset-> },
      author-> { name },
      publishedAt
    }
  `,
  weeklyProject: `
    *[_type == "project" && weeklyPick == true]
    | order(publishedAt desc) [0] {
      _id,
      title,
      slug,
      description,
      architects,
      year,
      area,
      status,
      location,
      featuredImage { ..., asset-> },
      tags
    }
  `,
  articleBySlug: `
    *[_type == "article" && slug.current == $slug][0] {
      ...,
      featuredImage { ..., asset-> },
      author-> { name, slug, bio, avatar, role, social },
      "relatedArticles": *[_type == "article" && category == ^.category && slug.current != $slug][0..2] {
        title, slug, featuredImage { ..., asset-> }, publishedAt
      }
    }
  `,
  projectBySlug: `
    *[_type == "project" && slug.current == $slug][0] {
      ...,
      featuredImage { ..., asset-> },
      gallery[] { ..., asset-> },
      author-> { name, slug }
    }
  `,
  searchResults: `
    *[_type in ["article", "project", "video"] &&
      (title match $query || excerpt match $query || tags[] match $query)
    ] | order(_score desc) [0..19] {
      _type,
      title,
      slug,
      "image": coalesce(featuredImage, thumbnail) { ..., asset-> },
      category,
      publishedAt
    }
  `,
}

// ─── Exports ───────────────────────────────────────────────────────────────────
export const schemas = [authorSchema, articleSchema, projectSchema, videoSchema]
