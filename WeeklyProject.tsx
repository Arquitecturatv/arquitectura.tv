import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import type { Project } from '@/types'
import { MapPin, Ruler, Star, ArrowRight, ChevronRight } from 'lucide-react'

interface WeeklyProjectProps {
  project: Project
}

export function WeeklyProject({ project }: WeeklyProjectProps) {
  return (
    <section
      aria-labelledby="weekly-project-heading"
      className="relative overflow-hidden bg-obsidian"
    >
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[520px]">

          {/* ─── Info Column ─── */}
          <div className="flex flex-col justify-center py-16 lg:py-20 lg:pr-16 order-2 lg:order-1">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <Star size={14} className="text-copper fill-copper" />
              <span className="text-xs font-bold uppercase tracking-widest text-copper">
                Proyecto de la semana
              </span>
            </div>

            {/* Title */}
            <h2
              id="weekly-project-heading"
              className="font-display text-display-md text-travertine mb-6 leading-tight"
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-travertine/60 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              {project.description}
            </p>

            {/* Technical data */}
            <dl className="grid grid-cols-2 gap-4 mb-10">
              {[
                {
                  icon: <MapPin size={14} />,
                  label: 'Ubicación',
                  value: `${project.location.city}, ${project.location.country}`,
                },
                {
                  icon: <Ruler size={14} />,
                  label: 'Superficie',
                  value: project.area ? `${project.area.toLocaleString('es')} m²` : 'N/D',
                },
                {
                  icon: null,
                  label: 'Año',
                  value: project.year.toString(),
                },
                {
                  icon: null,
                  label: 'Estado',
                  value:
                    project.status === 'built'
                      ? 'Construido'
                      : project.status === 'under-construction'
                      ? 'En construcción'
                      : project.status === 'concept'
                      ? 'Concepto'
                      : 'Concurso',
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <dt className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-travertine/30">
                    {icon && <span className="text-copper">{icon}</span>}
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-travertine/80">{value}</dd>
                </div>
              ))}
            </dl>

            {/* Architects */}
            <div className="mb-10">
              <p className="text-[10px] font-medium uppercase tracking-widest text-travertine/30 mb-1">
                Arquitectos
              </p>
              <p className="text-sm font-medium text-travertine/80">
                {project.architects.join(' · ')}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-travertine/8 text-travertine/55 rounded-md border border-travertine/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href={`/proyectos/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-copper text-obsidian text-sm font-semibold rounded-lg hover:bg-copper-400 transition-colors group"
              >
                Ver proyecto completo
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/proyectos"
                className="inline-flex items-center gap-1 text-sm text-travertine/50 hover:text-travertine transition-colors"
              >
                Todos los proyectos
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          {/* ─── Image Column ─── */}
          <div className="relative order-1 lg:order-2 min-h-[300px] lg:min-h-0 group">
            {/* Main image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={project.featuredImage.url}
                alt={project.featuredImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Left fade to obsidian (desktop) */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent" />
              {/* Bottom fade (mobile) */}
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-obsidian to-transparent" />
            </div>

            {/* Views badge */}
            <div className="absolute top-4 right-4 bg-obsidian/70 backdrop-blur-sm text-travertine/80 text-xs px-3 py-1.5 rounded-full">
              {(project.views / 1000).toFixed(0)}K vistas
            </div>

            {/* Published date */}
            <div className="absolute bottom-4 right-4 text-travertine/40 text-xs">
              {formatDate(project.publishedAt)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
