import type { Article, Project, Video } from '@/types'

const authors = [
  { id: 'a1', name: 'Carlos Mendoza', slug: 'carlos-mendoza', bio: 'Arquitecto y periodista especializado en arquitectura contemporánea.', avatar: '/avatars/carlos.jpg', role: 'Editor Principal', social: { twitter: '@cmendoza_arq' } },
  { id: 'a2', name: 'Ana Sofía Rivera', slug: 'ana-sofia-rivera', bio: 'Doctora en Urbanismo. Especialista en ciudades inteligentes.', avatar: '/avatars/ana.jpg', role: 'Editora Urbanismo', social: {} },
  { id: 'a3', name: 'Miguel Ángel Torres', slug: 'miguel-angel-torres', bio: 'Arquitecto BIM Manager certificado.', avatar: '/avatars/miguel.jpg', role: 'Especialista BIM', social: {} },
]

export const allArticles: Article[] = [
  {
    id: 'art-001', slug: 'herzog-de-meuron-estadio-atletismo-paris',
    title: 'Herzog & de Meuron completa el estadio de atletismo de París',
    excerpt: 'El icónico estudio suizo presenta su obra más audaz en Francia: una estructura que redefine la relación entre el deporte y el paisaje urbano parisiense.',
    content: '<p>Contenido del artículo...</p>',
    category: 'arquitectura', tags: ['Herzog de Meuron', 'Paris', 'estadio'],
    author: authors[0],
    publishedAt: '2024-12-28T10:00:00Z',
    featuredImage: { url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop&auto=format', alt: 'Estadio arquitectura moderna', width: 1200, height: 800 },
    readingTime: 6, views: 48320, featured: true, sponsored: false,
    seo: { title: 'Herzog & de Meuron: Estadio París', description: 'El icónico estudio suizo presenta su obra más audaz en Francia.' },
  },
  {
    id: 'art-002', slug: 'ia-generativa-arquitectura-zaha-hadid',
    title: 'Zaha Hadid Architects usa IA generativa para diseño paramétrico avanzado',
    excerpt: 'El estudio londinense revela cómo la inteligencia artificial está transformando su proceso creativo, reduciendo tiempos de diseño en un 40%.',
    content: '<p>Contenido del artículo...</p>',
    category: 'ia', tags: ['IA', 'Zaha Hadid', 'paramétrico'],
    author: authors[2],
    publishedAt: '2024-12-27T08:30:00Z',
    featuredImage: { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop&auto=format', alt: 'Diseño paramétrico IA', width: 1200, height: 800 },
    readingTime: 8, views: 32150, featured: true, sponsored: false,
    seo: { title: 'Zaha Hadid Architects y la IA generativa', description: 'Cómo la IA transforma el diseño paramétrico.' },
  },
  {
    id: 'art-003', slug: 'bjarke-ingels-oceanix-ciudad-flotante',
    title: 'BIG presenta Oceanix City: la primera ciudad flotante sostenible',
    excerpt: 'Bjarke Ingels Group y OCEANIX revelan los detalles de la primera ciudad marina autosuficiente con capacidad para 10,000 habitantes.',
    content: '<p>Contenido del artículo...</p>',
    category: 'urbanismo', tags: ['BIG', 'Bjarke Ingels', 'ciudad flotante'],
    author: authors[1],
    publishedAt: '2024-12-26T12:00:00Z',
    featuredImage: { url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1200&h=800&fit=crop&auto=format', alt: 'Ciudad flotante Oceanix', width: 1200, height: 800 },
    readingTime: 10, views: 67200, featured: true, sponsored: false,
    seo: { title: 'BIG Oceanix City: Ciudad flotante', description: 'Primera ciudad flotante sostenible.' },
  },
  {
    id: 'art-004', slug: 'revit-2025-novedades-bim',
    title: 'Revit 2025: todas las novedades para profesionales BIM',
    excerpt: 'Autodesk lanza la versión más revolucionaria con integración nativa de IA, nuevas capacidades de renderizado y colaboración en nube.',
    content: '<p>Contenido del artículo...</p>',
    category: 'bim', tags: ['Revit', 'BIM', 'Autodesk'],
    author: authors[2],
    publishedAt: '2024-12-25T09:00:00Z',
    featuredImage: { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop&auto=format', alt: 'Revit 2025 BIM', width: 1200, height: 800 },
    readingTime: 7, views: 28900, featured: false, sponsored: false,
    seo: { title: 'Revit 2025 novedades BIM', description: 'Novedades de Autodesk Revit 2025.' },
  },
  {
    id: 'art-005', slug: 'tadao-ando-roca-gallery-barcelona',
    title: 'Tadao Ando diseña la nueva Roca Gallery en Barcelona',
    excerpt: 'El arquitecto japonés firma su primera obra en España: un espacio expositivo que dialoga con el Ensanche barcelonés.',
    content: '<p>Contenido del artículo...</p>',
    category: 'arquitectura', tags: ['Tadao Ando', 'Barcelona', 'hormigón'],
    author: authors[0],
    publishedAt: '2024-12-24T14:00:00Z',
    featuredImage: { url: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=1200&h=800&fit=crop&auto=format', alt: 'Roca Gallery Barcelona', width: 1200, height: 800 },
    readingTime: 5, views: 19800, featured: false, sponsored: false,
    seo: { title: 'Tadao Ando Roca Gallery Barcelona', description: 'Primera obra española de Tadao Ando.' },
  },
  {
    id: 'art-006', slug: 'midjourney-renders-arquitectonicos-guia',
    title: 'Guía definitiva: Midjourney para renders arquitectónicos',
    excerpt: 'De cero a profesional: cómo dominar Midjourney para crear visualizaciones arquitectónicas fotorrealistas.',
    content: '<p>Contenido del artículo...</p>',
    category: 'visualizacion-3d', tags: ['Midjourney', 'render', 'IA'],
    author: authors[2],
    publishedAt: '2024-12-23T11:00:00Z',
    featuredImage: { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&fit=crop&auto=format', alt: 'Render arquitectónico IA', width: 1200, height: 800 },
    readingTime: 12, views: 54300, featured: true, sponsored: false,
    seo: { title: 'Guía Midjourney Renders Arquitectónicos', description: 'Cómo usar Midjourney para renders profesionales.' },
  },
]

export const allProjects: Project[] = [
  {
    id: 'proj-001', slug: 'serpentine-pavilion-2024-minsuk-cho',
    title: 'Serpentine Pavilion 2024 — Minsuk Cho',
    description: 'El pabellón temporal de Minsuk Cho para la Serpentine Gallery explora la multiplicidad de perspectivas a través de volúmenes interconectados.',
    category: 'arquitectura', year: 2024,
    location: { city: 'Londres', country: 'Reino Unido' },
    architects: ['Minsuk Cho', 'Mass Studies'], area: 450, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&h=700&fit=crop&auto=format', alt: 'Serpentine Pavilion 2024', width: 900, height: 700 },
    gallery: [], tags: ['pabellón', 'Londres', 'temporal'],
    author: authors[0], publishedAt: '2024-06-07T10:00:00Z',
    views: 89400, featured: true, weeklyPick: true,
    seo: { title: 'Serpentine Pavilion 2024', description: 'Pabellón 2024 de la Serpentine Gallery.' },
  },
  {
    id: 'proj-002', slug: 'museum-of-the-future-dubai',
    title: 'Museum of the Future — Dubái',
    description: 'El icónico edificio ovalado de Killa Design con su fachada de acero inoxidable calado redefine la arquitectura del siglo XXI.',
    category: 'arquitectura', year: 2022,
    location: { city: 'Dubái', country: 'Emiratos Árabes' },
    architects: ['Killa Design', 'Shaun Killa'], area: 30000, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=700&fit=crop&auto=format', alt: 'Museum of the Future Dubai', width: 900, height: 700 },
    gallery: [], tags: ['museum', 'Dubai', 'futurista'],
    author: authors[0], publishedAt: '2024-05-15T10:00:00Z',
    views: 124800, featured: true, weeklyPick: false,
    seo: { title: 'Museum of the Future Dubai', description: 'Museo futurista de Dubái.' },
  },
  {
    id: 'proj-003', slug: 'casa-wabi-tadao-ando-puerto-escondido',
    title: 'Casa Wabi — Tadao Ando, Puerto Escondido',
    description: 'Fundación cultural con talleres de artistas en la costa oaxaqueña de México, donde el hormigón abraza el paisaje tropical.',
    category: 'arquitectura', year: 2014,
    location: { city: 'Puerto Escondido', country: 'México' },
    architects: ['Tadao Ando'], area: 8400, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=900&h=1100&fit=crop&auto=format', alt: 'Casa Wabi México', width: 900, height: 1100 },
    gallery: [], tags: ['Tadao Ando', 'México', 'hormigón', 'fundación'],
    author: authors[0], publishedAt: '2024-04-10T10:00:00Z',
    views: 76200, featured: false, weeklyPick: false,
    seo: { title: 'Casa Wabi Tadao Ando', description: 'Fundación cultural de Tadao Ando en México.' },
  },
  {
    id: 'proj-004', slug: 'bosco-verticale-milan-boeri',
    title: 'Bosco Verticale — Stefano Boeri, Milán',
    description: 'Los icónicos rascacielos con vegetación en sus fachadas que reimaginaron la integración entre arquitectura y naturaleza en el entorno urbano.',
    category: 'urbanismo', year: 2014,
    location: { city: 'Milán', country: 'Italia' },
    architects: ['Stefano Boeri Architetti'], area: 40000, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&h=1100&fit=crop&auto=format', alt: 'Bosco Verticale Milán', width: 900, height: 1100 },
    gallery: [], tags: ['Boeri', 'Milán', 'vegetación', 'rascacielos'],
    author: authors[1], publishedAt: '2024-03-20T10:00:00Z',
    views: 98500, featured: true, weeklyPick: false,
    seo: { title: 'Bosco Verticale Milán', description: 'Los rascacielos verdes de Stefano Boeri.' },
  },
  {
    id: 'proj-005', slug: 'teshima-art-museum-ryue-nishizawa',
    title: 'Teshima Art Museum — Ryue Nishizawa',
    description: 'Estructura orgánica de hormigón blanco en la isla de Teshima que alberga una sola instalación de agua, creando una experiencia sensorial única.',
    category: 'arquitectura', year: 2010,
    location: { city: 'Teshima', country: 'Japón' },
    architects: ['Ryue Nishizawa', 'SANAA'], area: 2500, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=900&h=700&fit=crop&auto=format', alt: 'Teshima Art Museum', width: 900, height: 700 },
    gallery: [], tags: ['SANAA', 'Japón', 'museo', 'hormigón'],
    author: authors[0], publishedAt: '2024-02-14T10:00:00Z',
    views: 65400, featured: false, weeklyPick: false,
    seo: { title: 'Teshima Art Museum', description: 'Museo de arte en la isla japonesa de Teshima.' },
  },
  {
    id: 'proj-006', slug: 'the-shed-diller-scofidio-new-york',
    title: 'The Shed — Diller Scofidio + Renfro, Nueva York',
    description: 'Centro cultural con cubierta telescópica deslizante en Hudson Yards que puede duplicar su espacio interior para acoger grandes producciones.',
    category: 'arquitectura', year: 2019,
    location: { city: 'Nueva York', country: 'EEUU' },
    architects: ['Diller Scofidio + Renfro', 'Rockwell Group'], area: 18600, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=700&fit=crop&auto=format', alt: 'The Shed Nueva York', width: 900, height: 700 },
    gallery: [], tags: ['DS+R', 'Nueva York', 'centro cultural', 'móvil'],
    author: authors[0], publishedAt: '2024-01-28T10:00:00Z',
    views: 55100, featured: false, weeklyPick: false,
    seo: { title: 'The Shed Nueva York', description: 'Centro cultural con cubierta deslizante en Hudson Yards.' },
  },
  {
    id: 'proj-007', slug: 'louvre-abu-dhabi-jean-nouvel',
    title: 'Louvre Abu Dhabi — Jean Nouvel',
    description: 'Museo universal bajo una cúpula de acero calado que filtra la luz solar creando una lluvia de estrellas sobre el agua del golfo Pérsico.',
    category: 'arquitectura', year: 2017,
    location: { city: 'Abu Dhabi', country: 'Emiratos Árabes' },
    architects: ['Jean Nouvel', 'Ateliers Jean Nouvel'], area: 24000, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=900&h=700&fit=crop&auto=format', alt: 'Louvre Abu Dhabi cúpula', width: 900, height: 700 },
    gallery: [], tags: ['Jean Nouvel', 'Abu Dhabi', 'museo', 'cúpula'],
    author: authors[0], publishedAt: '2023-12-10T10:00:00Z',
    views: 110300, featured: true, weeklyPick: false,
    seo: { title: 'Louvre Abu Dhabi Jean Nouvel', description: 'Museo universal bajo cúpula de acero calado.' },
  },
  {
    id: 'proj-008', slug: 'centro-de-arte-guggenheim-bilbao-gehry',
    title: 'Guggenheim Bilbao — Frank Gehry',
    description: 'El museo que transformó Bilbao y creó el efecto Guggenheim: titanio curvilíneo que brilla sobre la ría y revolucionó el concepto del museo contemporáneo.',
    category: 'arquitectura', year: 1997,
    location: { city: 'Bilbao', country: 'España' },
    architects: ['Frank Gehry'], area: 24000, status: 'built',
    featuredImage: { url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=900&h=700&fit=crop&auto=format', alt: 'Guggenheim Bilbao Gehry', width: 900, height: 700 },
    gallery: [], tags: ['Gehry', 'Bilbao', 'titanio', 'museo'],
    author: authors[0], publishedAt: '2023-11-15T10:00:00Z',
    views: 187600, featured: true, weeklyPick: false,
    seo: { title: 'Guggenheim Bilbao Frank Gehry', description: 'El museo que transformó Bilbao.' },
  },
]

export const allVideos: Video[] = [
  {
    id: 'vid-001', slug: 'bim-revit-workflow-2024',
    title: 'Workflow BIM profesional en Revit 2024: De la idea al proyecto ejecutivo',
    description: 'Tutorial completo para dominar el workflow BIM más eficiente.',
    category: 'bim', duration: 2847,
    thumbnail: { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=640&h=360&fit=crop&auto=format', alt: 'Tutorial BIM Revit', width: 640, height: 360 },
    videoUrl: 'https://youtube.com/watch?v=example', youtubeId: 'example1',
    author: authors[2], publishedAt: '2024-12-20T10:00:00Z',
    views: 23400, featured: true,
    seo: { title: 'Workflow BIM Revit 2024', description: 'Tutorial BIM Revit 2024.' },
  },
  {
    id: 'vid-002', slug: 'parametrico-grasshopper-rhino',
    title: 'Diseño paramétrico estilo Zaha Hadid en Grasshopper + Rhino',
    description: 'Aprende a crear geometrías complejas con algoritmos generativos.',
    category: 'visualizacion-3d', duration: 3612,
    thumbnail: { url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=640&h=360&fit=crop&auto=format', alt: 'Grasshopper Rhino tutorial', width: 640, height: 360 },
    videoUrl: 'https://youtube.com/watch?v=example2', youtubeId: 'example2',
    author: authors[2], publishedAt: '2024-12-15T14:00:00Z',
    views: 41200, featured: false,
    seo: { title: 'Diseño Paramétrico Grasshopper', description: 'Tutorial Grasshopper y Rhino.' },
  },
  {
    id: 'vid-003', slug: 'ia-arquitectura-2024-tools',
    title: 'IA en Arquitectura 2024: Los 10 mejores tools para estudios',
    description: 'Análisis de las mejores herramientas de IA para despachos de arquitectura.',
    category: 'ia', duration: 1820,
    thumbnail: { url: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=640&h=360&fit=crop&auto=format', alt: 'IA arquitectura tools', width: 640, height: 360 },
    videoUrl: 'https://youtube.com/watch?v=example3', youtubeId: 'example3',
    author: authors[0], publishedAt: '2024-12-10T09:00:00Z',
    views: 67800, featured: true,
    seo: { title: 'IA Arquitectura 2024: 10 Herramientas', description: 'Los mejores tools de IA para arquitectos.' },
  },
  {
    id: 'vid-004', slug: 'tour-virtual-housing-experiment-viena',
    title: 'Tour virtual: The Housing Experiment — Viena 2024',
    description: 'Recorremos uno de los proyectos de vivienda social más innovadores de Europa.',
    category: 'arquitectura', duration: 1200,
    thumbnail: { url: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=640&h=360&fit=crop&auto=format', alt: 'Housing Experiment Viena', width: 640, height: 360 },
    videoUrl: 'https://youtube.com/watch?v=example4', youtubeId: 'example4',
    author: authors[1], publishedAt: '2024-12-05T16:00:00Z',
    views: 18900, featured: false,
    seo: { title: 'Tour Housing Experiment Viena', description: 'Vivienda social innovadora en Viena.' },
  },
]

export function getMockArticles(options?: { featured?: boolean; limit?: number; category?: string }): Article[] {
  let articles = [...allArticles]
  if (options?.featured !== undefined) articles = articles.filter(a => a.featured === options.featured)
  if (options?.category) articles = articles.filter(a => a.category === options.category)
  if (options?.limit) articles = articles.slice(0, options.limit)
  return articles
}

export function getMockProjects(options?: { featured?: boolean; limit?: number }): Project[] {
  let projects = [...allProjects]
  if (options?.featured !== undefined) projects = projects.filter(p => p.featured === options.featured)
  if (options?.limit) projects = projects.slice(0, options.limit)
  return projects
}

export function getMockWeeklyProject(): Project {
  return allProjects[0]
}

export function getMockVideos(options?: { limit?: number }): Video[] {
  let videos = [...allVideos]
  if (options?.limit) videos = videos.slice(0, options.limit)
  return videos
}
