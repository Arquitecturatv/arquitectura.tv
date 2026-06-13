import Image from 'next/image'
import Link from 'next/link'
import { cn, formatDuration, formatNumber, formatDate } from '@/lib/utils'
import type { Video, Project } from '@/types'
import { Play, ExternalLink, Mic, Calendar, GraduationCap, Building2, Star, Users, Clock } from 'lucide-react'

// ─── Latest Videos ────────────────────────────────────────────────────────────
interface LatestVideosProps {
  videos: Video[]
}

export function LatestVideos({ videos }: LatestVideosProps) {
  const [featured, ...rest] = videos

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Featured video */}
      {featured && (
        <article className="lg:col-span-6 group">
          <Link href={`/videos/${featured.slug}`} className="block">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-obsidian/20">
              <Image
                src={featured.thumbnail.url}
                alt={featured.thumbnail.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-travertine/15 backdrop-blur-sm border border-travertine/30 rounded-full flex items-center justify-center group-hover:bg-copper transition-colors duration-300">
                  <Play size={22} className="text-travertine fill-travertine ml-1" />
                </div>
              </div>
              {/* Duration */}
              <div className="absolute bottom-3 right-3 bg-obsidian/80 text-travertine text-xs px-2 py-1 rounded font-mono">
                {formatDuration(featured.duration)}
              </div>
            </div>
            <h3 className="font-display text-heading-lg text-obsidian group-hover:text-copper transition-colors leading-snug mb-2">
              {featured.title}
            </h3>
            <p className="text-sm text-obsidian/55 line-clamp-2 mb-3">{featured.description}</p>
            <div className="flex items-center gap-3 text-xs text-obsidian/40">
              <span>{featured.author.name}</span>
              <span>·</span>
              <span>{formatNumber(featured.views)} vistas</span>
            </div>
          </Link>
        </article>
      )}

      {/* Secondary videos */}
      <div className="lg:col-span-6 flex flex-col gap-4">
        {rest.map((video) => (
          <article key={video.id} className="flex gap-4 group">
            <Link
              href={`/videos/${video.slug}`}
              className="relative shrink-0 w-36 h-24 rounded-lg overflow-hidden bg-obsidian/10"
            >
              <Image
                src={video.thumbnail.url}
                alt={video.thumbnail.alt}
                fill
                sizes="144px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-obsidian/60 rounded-full flex items-center justify-center group-hover:bg-copper transition-colors">
                  <Play size={12} className="text-travertine fill-travertine ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-1.5 right-1.5 bg-obsidian/80 text-travertine text-[10px] px-1.5 py-0.5 rounded font-mono">
                {formatDuration(video.duration)}
              </div>
            </Link>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="text-sm font-semibold text-obsidian group-hover:text-copper transition-colors leading-snug line-clamp-2 mb-2">
                <Link href={`/videos/${video.slug}`}>{video.title}</Link>
              </h3>
              <div className="flex items-center gap-2 text-xs text-obsidian/40">
                <span>{video.author.name}</span>
                <span>·</span>
                <span>{formatNumber(video.views)} vistas</span>
              </div>
            </div>
          </article>
        ))}

        <Link
          href="/videos"
          className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-medium text-obsidian/60 hover:text-obsidian border border-obsidian/15 hover:border-obsidian/30 rounded-lg transition-colors"
        >
          Ver todos los videos
          <ExternalLink size={13} />
        </Link>
      </div>
    </div>
  )
}

// ─── Visual Gallery (Projects) ─────────────────────────────────────────────────
interface VisualGalleryProps {
  projects: Project[]
}

export function VisualGallery({ projects }: VisualGalleryProps) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
      {projects.map((project, i) => (
        <article
          key={project.id}
          className={cn(
            'break-inside-avoid mb-3 group relative overflow-hidden rounded-xl',
            i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
          )}
        >
          <Link href={`/proyectos/${project.slug}`} className="block h-full">
            <Image
              src={project.featuredImage.url}
              alt={project.featuredImage.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-[10px] font-bold uppercase tracking-wider text-copper mb-1">
                {project.location.city}, {project.location.country}
              </p>
              <h3 className="text-xs font-medium text-travertine leading-tight line-clamp-2">
                {project.title}
              </h3>
            </div>
            {/* Weekly pick badge */}
            {project.weeklyPick && (
              <div className="absolute top-2 left-2">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-copper text-obsidian px-1.5 py-0.5 rounded">
                  ★ Semana
                </span>
              </div>
            )}
          </Link>
        </article>
      ))}
    </div>
  )
}

// ─── Latest Podcast ────────────────────────────────────────────────────────────
export function LatestPodcast() {
  const episode = {
    number: 142,
    title: 'El futuro de la vivienda social: tecnología, dignidad y escala',
    description:
      'Conversamos con la arquitecta Elena Pardo sobre cómo los nuevos materiales y la prefabricación avanzada están democratizando el acceso a vivienda digna en Latinoamérica.',
    duration: '1h 24min',
    guest: 'Elena Pardo, Arq. — UNAM',
    date: '2024-12-20',
    platforms: [
      { name: 'Spotify', href: '#', color: '#1DB954' },
      { name: 'Apple Podcasts', href: '#', color: '#B150E7' },
      { name: 'YouTube', href: '#', color: '#FF0000' },
    ],
  }

  return (
    <section
      aria-labelledby="podcast-heading"
      className="py-16 bg-travertine"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Podcast visual */}
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 lg:w-40 lg:h-40 shrink-0 rounded-2xl bg-obsidian flex items-center justify-center shadow-xl">
              <div className="text-center">
                <Mic size={32} className="text-copper mx-auto mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-travertine/60">
                  Podcast
                </span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-copper mb-2">
                Episodio #{episode.number}
              </div>
              <h2
                id="podcast-heading"
                className="font-display text-heading-xl text-obsidian leading-tight mb-3"
              >
                {episode.title}
              </h2>
              <p className="text-sm text-obsidian/60 mb-4">{episode.guest}</p>
              <div className="flex items-center gap-3 text-xs text-obsidian/40">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {episode.duration}
                </span>
                <span>·</span>
                <span>{formatDate(episode.date, { day: 'numeric', month: 'long' })}</span>
              </div>
            </div>
          </div>

          {/* Episode info + platforms */}
          <div>
            <p className="text-obsidian/65 leading-relaxed mb-6">{episode.description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {episode.platforms.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-obsidian/15 rounded-lg text-sm font-medium text-obsidian hover:bg-obsidian hover:text-travertine hover:border-obsidian transition-colors"
                >
                  {p.name}
                </a>
              ))}
            </div>
            <Link
              href="/podcast"
              className="text-sm font-medium text-copper hover:text-copper-dark transition-colors flex items-center gap-1"
            >
              Ver todos los episodios →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Upcoming Events ──────────────────────────────────────────────────────────
export function UpcomingEvents() {
  const events = [
    {
      id: 'e1',
      title: 'ArchiVision Congress 2025',
      type: 'Congreso',
      date: '15 Ene 2025',
      location: 'Ciudad de México, México',
      online: false,
      free: false,
      href: '/eventos/archivision-2025',
    },
    {
      id: 'e2',
      title: 'BIM World LATAM',
      type: 'Feria',
      date: '22 Ene 2025',
      location: 'Bogotá, Colombia',
      online: false,
      free: false,
      href: '/eventos/bim-world-latam',
    },
    {
      id: 'e3',
      title: 'Webinar: IA en Arquitectura',
      type: 'Webinar',
      date: '28 Ene 2025',
      location: 'Online',
      online: true,
      free: true,
      href: '/eventos/webinar-ia-arquitectura',
    },
    {
      id: 'e4',
      title: 'Concurso Vivienda Sostenible 2025',
      type: 'Concurso',
      date: '1 Feb 2025',
      location: 'Internacional',
      online: false,
      free: false,
      href: '/eventos/concurso-vivienda-2025',
    },
  ]

  return (
    <section aria-labelledby="events-heading" className="py-16 bg-travertine-dark/40">
      <div className="content-container">
        <div className="flex items-center justify-between mb-8">
          <h2 id="events-heading" className="font-display text-display-sm text-obsidian">
            Próximos eventos
          </h2>
          <Link
            href="/eventos"
            className="text-sm font-medium text-cement hover:text-obsidian transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {events.map((event) => (
            <article key={event.id}>
              <Link
                href={event.href}
                className="block p-5 bg-travertine border border-obsidian/10 rounded-xl hover:border-copper/30 hover:shadow-md transition-all duration-200 h-full group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cement">
                    {event.type}
                  </span>
                  {event.free && (
                    <span className="text-[9px] font-bold uppercase tracking-wider bg-sage/15 text-sage px-2 py-0.5 rounded">
                      Gratis
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-obsidian group-hover:text-copper transition-colors leading-snug mb-3">
                  {event.title}
                </h3>
                <div className="space-y-1.5 text-xs text-obsidian/50">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={11} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={11} />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// helper re-import
function MapPin({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// ─── Featured Courses ─────────────────────────────────────────────────────────
export function FeaturedCourses() {
  const courses = [
    {
      id: 'c1',
      title: 'BIM Profesional con Revit 2024',
      instructor: 'Miguel Ángel Torres',
      level: 'Intermedio',
      duration: '24h',
      lessons: 48,
      price: 89,
      rating: 4.9,
      students: 3420,
      thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
      href: '/cursos/bim-profesional-revit-2024',
      badge: 'Más vendido',
    },
    {
      id: 'c2',
      title: 'IA Generativa para Arquitectos',
      instructor: 'Carlos Mendoza',
      level: 'Principiante',
      duration: '12h',
      lessons: 24,
      price: 59,
      rating: 4.8,
      students: 5100,
      thumbnail: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&h=250&fit=crop',
      href: '/cursos/ia-generativa-arquitectos',
      badge: 'Nuevo',
    },
    {
      id: 'c3',
      title: 'Renders Fotorrealistas con V-Ray 6',
      instructor: 'Laura Sánchez',
      level: 'Avanzado',
      duration: '18h',
      lessons: 36,
      price: 79,
      rating: 4.7,
      students: 2180,
      thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=250&fit=crop',
      href: '/cursos/renders-vray-6',
      badge: null,
    },
  ]

  return (
    <section aria-labelledby="courses-heading" className="py-16 bg-travertine">
      <div className="content-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 id="courses-heading" className="font-display text-display-sm text-obsidian">
              Cursos destacados
            </h2>
            <p className="text-sm text-obsidian/50 mt-1">
              Aprende de los mejores profesionales del sector
            </p>
          </div>
          <Link
            href="/cursos"
            className="text-sm font-medium text-cement hover:text-obsidian transition-colors"
          >
            Ver catálogo →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <article key={course.id} className="group">
              <Link href={course.href} className="block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {course.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-copper text-obsidian px-2 py-1 rounded-sm">
                        {course.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-cement">{course.level}</span>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-copper fill-copper" />
                      <span className="text-xs font-medium text-obsidian">{course.rating}</span>
                      <span className="text-xs text-obsidian/40">({course.students.toLocaleString('es')})</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-obsidian group-hover:text-copper transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-obsidian/50">{course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-obsidian/40">
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap size={11} /> {course.lessons} lecciones
                      </span>
                    </div>
                    <span className="text-base font-bold text-obsidian">
                      ${course.price} USD
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Featured Directory ───────────────────────────────────────────────────────
export function FeaturedDirectory() {
  const companies = [
    { id: 'd1', name: 'Foster + Partners', category: 'Estudio Internacional', country: 'Reino Unido', verified: true },
    { id: 'd2', name: 'ARUP México', category: 'Consultoría Estructural', country: 'México', verified: true },
    { id: 'd3', name: 'Autodesk LATAM', category: 'Software BIM', country: 'LATAM', verified: true },
    { id: 'd4', name: 'Saint-Gobain MX', category: 'Materiales Premium', country: 'México', verified: false },
    { id: 'd5', name: 'Fibra Uno', category: 'Desarrollo Inmobiliario', country: 'México', verified: true },
    { id: 'd6', name: 'Studio Mk27', category: 'Estudio de Diseño', country: 'Brasil', verified: true },
  ]

  return (
    <section aria-labelledby="directory-heading" className="py-16 bg-travertine-dark/30">
      <div className="content-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 id="directory-heading" className="font-display text-display-sm text-obsidian">
              Directorio profesional
            </h2>
            <p className="text-sm text-obsidian/50 mt-1">
              Estudios, empresas y marcas verificadas
            </p>
          </div>
          <Link href="/directorio" className="text-sm font-medium text-cement hover:text-obsidian transition-colors">
            Ver directorio →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((co) => (
            <div
              key={co.id}
              className="flex items-center gap-4 p-4 bg-travertine border border-obsidian/10 rounded-xl hover:border-copper/25 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-obsidian/8 flex items-center justify-center">
                <Building2 size={22} className="text-obsidian/40" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-obsidian truncate">{co.name}</span>
                  {co.verified && (
                    <span title="Verificado" className="shrink-0 text-bim-blue">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="text-xs text-obsidian/50 truncate">{co.category}</p>
                <p className="text-xs text-obsidian/35 mt-0.5">{co.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/directorio/registrar"
            className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-travertine text-sm font-medium rounded-lg hover:bg-obsidian/85 transition-colors"
          >
            Registrar tu empresa
          </Link>
        </div>
      </div>
    </section>
  )
}
