import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedNewsGrid } from '@/components/sections/FeaturedNewsGrid'
import { CategoryStrip } from '@/components/sections/CategoryStrip'
import { WeeklyProject } from '@/components/sections/WeeklyProject'
import { LatestVideos } from '@/components/sections/LatestVideos'
import { VisualGallery } from '@/components/sections/VisualGallery'
import { NewsletterBanner } from '@/components/sections/NewsletterBanner'
import { LatestPodcast } from '@/components/sections/LatestPodcast'
import { UpcomingEvents } from '@/components/sections/UpcomingEvents'
import { FeaturedCourses } from '@/components/sections/FeaturedCourses'
import { FeaturedDirectory } from '@/components/sections/FeaturedDirectory'
import { getMockArticles, getMockProjects, getMockVideos, getMockWeeklyProject } from '@/lib/mock-data'

export const metadata: Metadata = {
  title: 'arquitectura.tv — Arquitectura, Urbanismo y Diseño Internacional',
  description: 'El portal de referencia de arquitectura internacional. Proyectos, noticias, videos, BIM, IA y mucho más para arquitectos y diseñadores del mundo.',
}

export default function HomePage() {
  const featuredArticles = getMockArticles({ featured: true, limit: 5 })
  const latestArticles = getMockArticles({ limit: 6 })
  const weeklyProject = getMockWeeklyProject()
  const latestVideos = getMockVideos({ limit: 4 })
  const latestProjects = getMockProjects({ limit: 8 })

  return (
    <>
      <HeroSection articles={featuredArticles} />
      <CategoryStrip />

      <section aria-labelledby="news-heading" className="py-16 bg-[#F5F3EE]">
        <div className="max-w-[1280px] mx-auto px-6 xl:px-20">
          <div className="flex items-center justify-between mb-8">
            <h2 id="news-heading" className="font-serif text-3xl tracking-tight text-[#0A0A0A]">Últimas noticias</h2>
            <a href="/noticias" className="text-sm font-medium text-[#8C7355] hover:text-[#0A0A0A] transition-colors">Ver todas →</a>
          </div>
          <FeaturedNewsGrid articles={latestArticles} />
        </div>
      </section>

      <WeeklyProject project={weeklyProject} />
      <NewsletterBanner variant="compact" />

      <section aria-labelledby="videos-heading" className="py-16 bg-[#E8E4DC]/40">
        <div className="max-w-[1280px] mx-auto px-6 xl:px-20">
          <div className="flex items-center justify-between mb-8">
            <h2 id="videos-heading" className="font-serif text-3xl tracking-tight text-[#0A0A0A]">Videos recientes</h2>
            <a href="/videos" className="text-sm font-medium text-[#8C7355] hover:text-[#0A0A0A] transition-colors">Ver todos →</a>
          </div>
          <LatestVideos videos={latestVideos} />
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="py-16 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto px-6 xl:px-20">
          <div className="flex items-center justify-between mb-8">
            <h2 id="projects-heading" className="font-serif text-3xl tracking-tight text-[#F5F3EE]">Galería de proyectos</h2>
            <a href="/proyectos" className="text-sm font-medium text-[#C2952A] hover:text-[#E8C76A] transition-colors">Explorar proyectos →</a>
          </div>
          <VisualGallery projects={latestProjects} />
        </div>
      </section>

      <LatestPodcast />
      <UpcomingEvents />
      <FeaturedCourses />
      <FeaturedDirectory />
      <NewsletterBanner variant="full" />
    </>
  )
}
