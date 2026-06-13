'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/config'
import { Menu, X, Search, User, ChevronDown, Bookmark } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const searchRef = useRef<HTMLInputElement>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMobileOpen(false)
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <header
        role="banner"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-travertine/95 backdrop-blur-md border-b border-obsidian/8 shadow-sm'
            : 'bg-travertine border-b border-obsidian/6'
        )}
      >
        <div className="content-container">
          <nav
            aria-label="Navegación principal"
            className="flex items-center justify-between h-14 lg:h-16"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1 shrink-0 focus-visible:outline-copper"
              aria-label="arquitectura.tv — inicio"
            >
              <span className="font-display text-lg lg:text-xl tracking-tight text-obsidian">
                arquitectura
              </span>
              <span className="font-display text-lg lg:text-xl tracking-tight text-copper">
                .tv
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => 'children' in item ? handleDropdownEnter(item.label) : undefined}
                  onMouseLeave={() => 'children' in item ? handleDropdownLeave() : undefined}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors',
                      pathname === item.href || pathname.startsWith(item.href + '/')
                        ? 'text-obsidian bg-obsidian/5'
                        : 'text-obsidian/70 hover:text-obsidian hover:bg-obsidian/5'
                    )}
                  >
                    {item.label}
                    {'badge' in item && item.badge && (
                      <span className="ml-1 text-[9px] font-bold tracking-wider uppercase bg-copper text-obsidian px-1.5 py-0.5 rounded-sm">
                        {item.badge}
                      </span>
                    )}
                    {'children' in item && (
                      <ChevronDown
                        size={13}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.label ? 'rotate-180' : ''
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {'children' in item && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 pt-1 min-w-[200px] z-50"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <ul
                        role="list"
                        className="bg-travertine border border-obsidian/10 rounded-lg shadow-lg overflow-hidden py-1"
                      >
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-obsidian/70 hover:text-obsidian hover:bg-obsidian/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Buscar (Ctrl+K)"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-obsidian/60 hover:text-obsidian hover:bg-obsidian/5 rounded-md transition-colors"
              >
                <Search size={16} />
                <span className="hidden xl:inline text-xs text-obsidian/40">⌘K</span>
              </button>

              {/* Bookmark (desktop) */}
              <button
                aria-label="Guardados"
                className="hidden lg:flex p-2 text-obsidian/60 hover:text-obsidian hover:bg-obsidian/5 rounded-md transition-colors"
              >
                <Bookmark size={16} />
              </button>

              {/* User / Login */}
              <Link
                href="/cuenta"
                className="hidden lg:flex items-center gap-2 ml-1 px-3 py-1.5 text-sm font-medium bg-obsidian text-travertine rounded-md hover:bg-obsidian/85 transition-colors"
              >
                <User size={14} />
                <span>Acceder</span>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={mobileOpen}
                className="lg:hidden p-2 text-obsidian/70 hover:text-obsidian rounded-md transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>

        {/* ─── Mobile Menu ─── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-obsidian/8 bg-travertine max-h-[calc(100vh-56px)] overflow-y-auto">
            <nav aria-label="Menú móvil" className="content-container py-4">
              <ul role="list" className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center justify-between w-full px-3 py-3 text-base font-medium rounded-lg transition-colors',
                        pathname === item.href
                          ? 'text-obsidian bg-obsidian/5'
                          : 'text-obsidian/70 hover:text-obsidian hover:bg-obsidian/5'
                      )}
                    >
                      {item.label}
                      {'badge' in item && item.badge && (
                        <span className="text-[9px] font-bold tracking-wider uppercase bg-copper text-obsidian px-1.5 py-0.5 rounded-sm">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                    {'children' in item && (
                      <ul role="list" className="ml-4 mt-1 space-y-0.5">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-3 py-2 text-sm text-obsidian/60 hover:text-obsidian rounded-md transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-obsidian/8 flex flex-col gap-2">
                <Link
                  href="/cuenta"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium bg-obsidian text-travertine rounded-lg"
                >
                  <User size={16} />
                  Iniciar sesión
                </Link>
                <Link
                  href="/cuenta/registro"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium border border-obsidian/20 text-obsidian rounded-lg"
                >
                  Crear cuenta gratis
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ─── Search Overlay ─── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-obsidian/50 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Buscador"
        >
          <div className="w-full max-w-2xl bg-travertine rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-obsidian/10">
              <Search size={18} className="text-obsidian/40 shrink-0" />
              <input
                ref={searchRef}
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar proyectos, artículos, arquitectos…"
                className="flex-1 bg-transparent text-obsidian placeholder:text-obsidian/35 text-base outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`
                  }
                }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs text-obsidian/40 px-2 py-1 border border-obsidian/15 rounded"
              >
                Esc
              </button>
            </div>
            <div className="px-4 py-3">
              <p className="text-xs text-obsidian/40 mb-3 font-medium uppercase tracking-wider">Búsquedas populares</p>
              <div className="flex flex-wrap gap-2">
                {['BIM', 'IA arquitectura', 'Zaha Hadid', 'Renders', 'Urbanismo', 'Revit'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      window.location.href = `/buscar?q=${encodeURIComponent(term)}`
                    }}
                    className="text-sm px-3 py-1.5 bg-obsidian/5 hover:bg-obsidian/10 text-obsidian/70 rounded-md transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-14 lg:h-16" aria-hidden="true" />
    </>
  )
}
