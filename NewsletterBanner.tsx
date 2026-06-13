'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Mail, CheckCircle, Loader2 } from 'lucide-react'

interface NewsletterBannerProps {
  variant?: 'compact' | 'full'
}

export function NewsletterBanner({ variant = 'full' }: NewsletterBannerProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Simulate API call — replace with actual Mailchimp / Resend / ConvertKit integration
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
  }

  if (variant === 'compact') {
    return (
      <section
        aria-labelledby="newsletter-compact-heading"
        className="py-12 bg-obsidian/5 border-y border-obsidian/8"
      >
        <div className="content-container">
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="text-center sm:text-left">
              <h2
                id="newsletter-compact-heading"
                className="font-display text-heading-lg text-obsidian"
              >
                El resumen semanal de arquitectura mundial
              </h2>
              <p className="text-sm text-obsidian/55 mt-1">
                +48,000 profesionales ya lo reciben · Sin spam, siempre relevante
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 w-full sm:w-auto min-w-[340px]"
              aria-label="Suscribirse al newsletter"
            >
              {status === 'success' ? (
                <div className="flex items-center gap-2 text-sage font-medium text-sm">
                  <CheckCircle size={18} />
                  ¡Suscrito! Revisa tu email para confirmar.
                </div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    required
                    className="flex-1 min-w-0 px-4 py-2.5 text-sm bg-travertine border border-obsidian/20 rounded-lg text-obsidian placeholder:text-obsidian/35 focus:outline-none focus:border-copper transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-5 py-2.5 bg-copper text-obsidian text-sm font-semibold rounded-lg hover:bg-copper-400 disabled:opacity-70 transition-colors flex items-center gap-2 whitespace-nowrap"
                  >
                    {status === 'loading' ? (
                      <Loader2 size={15} className="animate-spin" />
                    ) : (
                      'Suscribirme'
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>
    )
  }

  // Full variant
  return (
    <section
      aria-labelledby="newsletter-full-heading"
      className="py-24 bg-obsidian relative overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-grid-pattern"
        style={{ backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      <div className="content-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-copper/15 rounded-full mb-6">
            <Mail size={24} className="text-copper" />
          </div>

          {/* Heading */}
          <h2
            id="newsletter-full-heading"
            className="font-display text-display-sm text-travertine mb-4"
          >
            Arquitectura que inspira,{' '}
            <span className="text-copper italic">directamente en tu bandeja</span>
          </h2>

          <p className="text-travertine/55 text-base lg:text-lg leading-relaxed mb-8">
            Cada semana, los proyectos más impactantes, las noticias más relevantes
            y las herramientas que todo arquitecto necesita conocer.
            Gratis, siempre.
          </p>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {[
              { value: '48K+', label: 'suscriptores' },
              { value: '4.9★', label: 'valoración media' },
              { value: '0', label: 'spam' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-lg font-display text-copper">{value}</div>
                <div className="text-xs text-travertine/35 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <CheckCircle size={32} className="text-sage" />
              <p className="text-travertine font-medium">
                ¡Bienvenido a la comunidad de arquitectura.tv!
              </p>
              <p className="text-sm text-travertine/50">
                Revisa tu email para confirmar la suscripción.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Suscribirse al newsletter completo"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-4 py-3.5 text-sm bg-travertine/8 border border-travertine/20 rounded-xl text-travertine placeholder:text-travertine/30 focus:outline-none focus:border-copper transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3.5 bg-copper text-obsidian text-sm font-bold rounded-xl hover:bg-copper-400 disabled:opacity-70 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    Procesando…
                  </>
                ) : (
                  'Quiero suscribirme'
                )}
              </button>
            </form>
          )}

          <p className="text-xs text-travertine/25 mt-4">
            Al suscribirte aceptas nuestra{' '}
            <a href="/privacidad" className="underline hover:text-travertine/50 transition-colors">
              política de privacidad
            </a>
            . Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
