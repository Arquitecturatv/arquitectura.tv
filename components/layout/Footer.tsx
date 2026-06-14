import Link from 'next/link'
import { Instagram, Twitter, Youtube, Linkedin, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/config'

const footerLinks = {
  contenido: [
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Revista', href: '/revista' },
    { label: 'Videos', href: '/videos' },
    { label: 'Podcast', href: '/podcast' },
    { label: 'Eventos', href: '/eventos' },
  ],
  comunidad: [
    { label: 'Directorio', href: '/directorio' },
    { label: 'Empleos', href: '/empleos' },
    { label: 'Cursos', href: '/cursos' },
    { label: 'Foro', href: '/foro' },
    { label: 'Newsletter', href: '/newsletter' },
  ],
  temas: [
    { label: 'Arquitectura', href: '/proyectos?categoria=arquitectura' },
    { label: 'Urbanismo', href: '/revista/urbanismo' },
    { label: 'Interiorismo', href: '/revista/interiorismo' },
    { label: 'BIM', href: '/revista/bim' },
    { label: 'IA para Arquitectos', href: '/revista/ia' },
    { label: 'Visualización 3D', href: '/revista/visualizacion-3d' },
    { label: 'Ciudades Inteligentes', href: '/revista/ciudades-inteligentes' },
  ],
  empresa: [
    { label: 'Acerca de', href: '/acerca' },
    { label: 'Equipo', href: '/equipo' },
    { label: 'Publicidad', href: '/publicidad' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'Membresías', href: '/membresias' },
    { label: 'Prensa', href: '/prensa' },
  ],
}

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/arquitecturatv', Icon: Instagram },
  { label: 'Twitter / X', href: 'https://twitter.com/arquitecturatv', Icon: Twitter },
  { label: 'YouTube', href: 'https://youtube.com/arquitecturatv', Icon: Youtube },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/arquitecturatv', Icon: Linkedin },
  { label: 'Facebook', href: 'https://facebook.com/arquitecturatv', Icon: Facebook },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="bg-obsidian text-travertine"
    >
      {/* ─── Main Footer Grid ─── */}
      <div className="content-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-0.5 mb-4">
              <span className="font-display text-2xl text-travertine tracking-tight">arquitectura</span>
              <span className="font-display text-2xl text-copper tracking-tight">.tv</span>
            </Link>
            <p className="text-sm text-travertine/55 leading-relaxed max-w-xs mb-6">
              El portal de referencia internacional de arquitectura, urbanismo, diseño e innovación.
              Para arquitectos y diseñadores del mundo.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-travertine/40 hover:text-travertine hover:bg-travertine/8 rounded-lg transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter compact */}
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-wider text-travertine/40 mb-3">
                Newsletter semanal
              </p>
             <form
  action="#"
  className="flex gap-2"
  aria-label="Suscribirse al newsletter"
>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="flex-1 min-w-0 px-3 py-2 text-sm bg-travertine/8 border border-travertine/15 rounded-md text-travertine placeholder:text-travertine/30 focus:outline-none focus:border-copper transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium bg-copper text-obsidian rounded-md hover:bg-copper-400 transition-colors whitespace-nowrap"
                >
                  Suscribir
                </button>
              </form>
              <p className="text-xs text-travertine/30 mt-2">
                +48,000 suscriptores · Sin spam
              </p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="lg:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-travertine/40 mb-4">
                {group.charAt(0).toUpperCase() + group.slice(1)}
              </h3>
              <ul role="list" className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-travertine/55 hover:text-travertine transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Stats Bar ─── */}
      <div className="border-t border-travertine/8">
        <div className="content-container py-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '48K+', label: 'Suscriptores' },
              { value: '12K+', label: 'Proyectos publicados' },
              { value: '180+', label: 'Países alcanzados' },
              { value: '2.4M', label: 'Visitas mensuales' },
            ].map(({ value, label }) => (
              <div key={label}>
                <dt className="text-xl font-display text-copper">{value}</dt>
                <dd className="text-xs text-travertine/40 mt-0.5 uppercase tracking-wide">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ─── Legal Bar ─── */}
      <div className="border-t border-travertine/8">
        <div className="content-container py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-travertine/35 text-center sm:text-left">
            © {year} arquitectura.tv · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: 'Privacidad', href: '/privacidad' },
              { label: 'Términos', href: '/terminos' },
              { label: 'Cookies', href: '/cookies' },
              { label: 'Accesibilidad', href: '/accesibilidad' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-xs text-travertine/35 hover:text-travertine/60 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-travertine/25">
            Hecho con ❤ para la arquitectura mundial
          </p>
        </div>
      </div>
    </footer>
  )
}
