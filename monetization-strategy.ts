/**
 * ════════════════════════════════════════════════════════════════
 * FASE 8 — ESTRATEGIA DE MONETIZACIÓN · arquitectura.tv
 * ════════════════════════════════════════════════════════════════
 *
 * PROYECCIÓN DE INGRESOS (Año 1 conservador):
 * ─────────────────────────────────────────────
 * Membresías Pro (500 usuarios × $9.99/mes)     = $4,995/mes
 * Membresías Studio (50 estudios × $29.99/mes)  = $1,499/mes
 * Publicidad Premium (3 marcas × $800/mes)      = $2,400/mes
 * Directorio (20 premium × $99/mes)             = $1,980/mes
 * Cursos (20 ventas/mes × $70 promedio)         = $1,400/mes
 * Newsletter Patrocinios (2 × $500/mes)         = $1,000/mes
 * ─────────────────────────────────────────────────────────────
 * TOTAL ESTIMADO AÑO 1                          = ~$13,274/mes
 *                                               = ~$159,288/año
 *
 * ════════════════════════════════════════════════════════════════
 */

export const monetizationStrategy = {

  // ─── 1. MEMBRESÍAS (Recurring Revenue) ────────────────────────
  memberships: {
    description: 'Sistema freemium con 3 tiers. La base gratuita construye audiencia; Pro y Studio generan MRR predecible.',
    tiers: {
      free: {
        price: 0,
        features: [
          'Acceso a las últimas 30 noticias',
          'Newsletter semanal',
          '5 proyectos/mes en galería',
          'Perfil básico de usuario',
        ],
        limit: 'unlimited',
        goal: 'Crecer la audiencia base. Meta: 100K usuarios gratuitos en 24 meses.',
      },
      pro: {
        price_monthly: 9.99,
        price_annual: 89.99, // 2 meses gratis
        currency: 'USD',
        features: [
          'Contenido ilimitado sin restricciones',
          'Archivo completo (10+ años de contenido)',
          'Descargas en alta resolución (proyectos)',
          'Sin publicidad',
          'Acceso anticipado (24h antes de publicación)',
          'Newsletter exclusivo Pro: "Proyecto de la semana"',
          'Soporte por email prioritario',
        ],
        target: 'Arquitectos independientes, diseñadores freelance, estudiantes avanzados',
        conversion: '2-3% de usuarios gratuitos → Pro (industria promedio)',
      },
      studio: {
        price_monthly: 29.99,
        price_annual: 269.99,
        currency: 'USD',
        seats: 3,
        features: [
          'Todo lo de Pro (hasta 3 miembros del equipo)',
          'Perfil verificado del estudio en Directorio',
          'Publicar hasta 5 proyectos propios/mes',
          'Badge "Estudio Verificado" en todos sus proyectos',
          'Estadísticas avanzadas (vistas, clicks, audiencia)',
          'Mención mensual en newsletter (48K+ suscriptores)',
          'Acceso a bolsa de empleo con descuento',
        ],
        target: 'Estudios de arquitectura pequeños y medianos (5-50 personas)',
      },
      enterprise: {
        price: 'Cotización personalizada',
        minimumCommitment: '$500/mes',
        features: [
          'Todo Studio (asientos ilimitados)',
          'Página de marca dedicada en el portal',
          'Artículos patrocinados (hasta 4/mes)',
          'Webinars de marca exclusivos',
          'Acceso a datos de audiencia anonimizados',
          'Account manager dedicado',
          'Presencia en eventos de arquitectura.tv',
        ],
        target: 'Grandes constructoras, proveedores de materiales, softwareras (Autodesk, Trimble, Bentley)',
      },
    },
    implementation: {
      provider: 'Stripe',
      portal: 'Stripe Customer Portal (manejo de suscripciones self-service)',
      trials: '14 días gratis para Pro',
      dunning: 'Smart Retry de Stripe para pagos fallidos',
    },
  },

  // ─── 2. PUBLICIDAD PREMIUM ─────────────────────────────────────
  advertising: {
    description: 'Publicidad contextual y de alta calidad. Ningún banner intrusivo. Solo formatos que respetan la experiencia editorial.',
    formats: {
      heroSponsor: {
        name: 'Sponsor principal',
        placement: 'Debajo del hero en homepage',
        size: '1440×180px',
        price: '$1,200/mes',
        exclusivity: true,
        maxBrands: 1,
      },
      inlineNative: {
        name: 'Artículo patrocinado',
        placement: 'Dentro del feed de noticias (marcado claramente como "Publicidad")',
        price: '$800/artículo',
        frequency: 'Máximo 1 por 6 artículos orgánicos',
      },
      newsletterSpot: {
        name: 'Patrocinio de newsletter',
        placement: 'Bloque único en la newsletter semanal (48K suscriptores)',
        price: '$650/edición',
        format: '300 palabras + logo + CTA link',
      },
      categoryOwnership: {
        name: 'Dueño de categoría',
        placement: 'Banner sticky lateral en toda la sección BIM, IA, etc.',
        price: '$400/mes por categoría',
        maxBrands: 1,
      },
      videoPreRoll: {
        name: 'Pre-roll de video',
        placement: '15s antes de cada video (saltable después de 5s)',
        price: '$15 CPM (costo por mil impresiones)',
        note: 'No disponible para usuarios Pro/Studio (sin ads)',
      },
    },
    standards: [
      'Todas las marcas deben ser relevantes para el sector (arquitectura, construcción, software, materiales)',
      'Etiqueta clara "Publicidad" o "Patrocinado" en todos los formatos',
      'Sin rastreadores de terceros invasivos',
      'Usuarios Pro no ven ningún tipo de publicidad',
      'CPM objetivo: $8-15 (premium vs $2-3 de AdSense genérico)',
    ],
  },

  // ─── 3. DIRECTORIO PROFESIONAL ─────────────────────────────────
  directory: {
    description: 'Directorio B2B de estudios, constructoras, proveedores y software. Ingresos recurrentes con alta retención.',
    tiers: {
      basic: {
        price: 0,
        features: ['Perfil básico', 'Categoría', 'Ubicación', '1 foto'],
        limit: 'Requiere registro manual + aprobación',
      },
      standard: {
        price_monthly: 49,
        price_annual: 449,
        features: ['Perfil completo', 'Galería 10 fotos', 'Link web', 'Email de contacto', 'Badge "Directorio"'],
      },
      premium: {
        price_monthly: 99,
        price_annual: 899,
        features: [
          'Todo Standard',
          'Badge "Premium" y verificación',
          'Aparición en buscador por primero',
          'Publicar 2 proyectos/mes en galería',
          'Mención en newsletter trimestral',
          'Acceso a estadísticas de perfil',
        ],
      },
    },
    additionalRevenue: [
      { service: 'Perfil destacado en homepage', price: '$199/mes' },
      { service: 'Email de captación a suscriptores relevantes (GDPR compliant)', price: '$299/campaña' },
      { service: 'Review verificada de producto/servicio', price: '$149/review' },
    ],
  },

  // ─── 4. CURSOS Y EDUCACIÓN ─────────────────────────────────────
  courses: {
    description: 'Plataforma de educación integrada. Revenue-sharing con instructores (70/30).',
    models: {
      selfPaced: {
        price: '$49-$149 por curso',
        access: 'Acceso de por vida',
        certificate: true,
        revenueShare: { instructor: '70%', platform: '30%' },
      },
      bootcamp: {
        price: '$299-$699',
        duration: '4-8 semanas',
        liveClasses: true,
        certificate: true,
        revenueShare: { instructor: '60%', platform: '40%' },
      },
      subscription: {
        price: '$29/mes',
        access: 'Todos los cursos ilimitados',
        note: 'Add-on sobre membresía Pro',
        revenueShare: { instructor: 'Pool pro-rata', platform: '35%' },
      },
    },
    topics: [
      'BIM y Revit', 'SketchUp', 'Rhino + Grasshopper', 'Renders (V-Ray, Enscape, Lumion)',
      'IA para Arquitectos (Midjourney, Stable Diffusion)', 'AutoCAD', 'Gestión de proyectos',
      'Fotografía de arquitectura', 'Presentaciones y pitches', 'Normativa y permisos (por país)',
    ],
    targetInstructors: 'Arquitectos con 5+ años de experiencia y presencia digital. Meta: 20 instructores en año 1.',
  },

  // ─── 5. MARKETPLACE ────────────────────────────────────────────
  marketplace: {
    description: 'Plataforma de activos digitales para la comunidad. Comisión del 15-25%.',
    products: [
      { type: 'Plantillas de proyectos (CAD/BIM)', avgPrice: '$25-$99', commission: '20%' },
      { type: 'Texturas y materiales 3D', avgPrice: '$5-$49', commission: '25%' },
      { type: 'Componentes Revit (familias)', avgPrice: '$10-$79', commission: '20%' },
      { type: 'Presets de render (Enscape, Lumion)', avgPrice: '$15-$59', commission: '25%' },
      { type: 'Plantillas de propuesta comercial', avgPrice: '$20-$69', commission: '20%' },
      { type: 'Scripts de Grasshopper', avgPrice: '$30-$199', commission: '15%' },
    ],
    implementation: 'Gumroad o Lemon Squeezy como procesador (0 setup cost). Fase 2 del proyecto.',
  },

  // ─── 6. AFILIADOS ──────────────────────────────────────────────
  affiliates: {
    description: 'Programas de afiliados para software y herramientas del sector.',
    partners: [
      { brand: 'Autodesk', commission: '15-20% del primer año', product: 'Revit, AutoCAD, 3ds Max' },
      { brand: 'Chaos Group', commission: '10-15%', product: 'V-Ray' },
      { brand: 'McNeel (Rhino)', commission: '10%', product: 'Rhinoceros + Grasshopper' },
      { brand: 'Trimble', commission: '8-12%', product: 'SketchUp Pro' },
      { brand: 'Enscape', commission: '20%', product: 'Enscape Render' },
      { brand: 'Bookingkit / Eventbrite', commission: '5%', product: 'Tickets de eventos' },
      { brand: 'Hostinger / Cloudflare', commission: '25-35%', product: 'Hosting para estudios' },
    ],
    implementation: 'Impact.com o ShareASale como plataforma de tracking.',
  },

  // ─── 7. EVENTOS ────────────────────────────────────────────────
  events: {
    description: 'Revenue de eventos propios + comisión de eventos externos.',
    ownEvents: [
      { name: 'arquitectura.tv Summit (anual)', format: 'Presencial + streaming', price: '$99-$299', capacity: 500 },
      { name: 'Webinars mensuales', format: 'Online', price: 'Gratis (Pro) / $15 (público)', frequency: '2/mes' },
      { name: 'Workshop intensivo BIM', format: 'Presencial', price: '$199-$399', capacity: 25 },
    ],
    thirdPartyComission: '5-10% de tickets vendidos a través de arquitectura.tv',
  },

  // ─── ROADMAP DE MONETIZACIÓN ──────────────────────────────────
  roadmap: {
    month1_3: ['Lanzar membresías Pro/Studio con Stripe', 'Directorio básico', 'Primeros 3 anunciantes premium'],
    month4_6: ['Lanzar primeros 5 cursos', 'Newsletter sponsorships', 'Programa de afiliados (Autodesk + Enscape)'],
    month7_12: ['Marketplace (v1)', 'Primer evento/summit propio', 'Enterprise accounts (2-3 grandes marcas)'],
    year2: ['Expansión a inglés y portugués', 'Licencias de contenido B2B', 'App mobile con contenido premium'],
  },
}
