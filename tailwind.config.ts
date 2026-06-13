import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // arquitectura.tv brand palette
        obsidian: {
          DEFAULT: '#0A0A0A',
          50: '#F5F3EE',
          100: '#E8E4DC',
          200: '#D0C9BC',
          300: '#B8AE9D',
          400: '#8C7355',
          500: '#5A4A35',
          600: '#3A2E22',
          700: '#1C1C1C',
          800: '#141414',
          900: '#0A0A0A',
        },
        copper: {
          DEFAULT: '#C2952A',
          50: '#FDF5E0',
          100: '#F9E7B0',
          200: '#F5D680',
          300: '#EBBF50',
          400: '#D4A82A',
          500: '#C2952A',
          600: '#A67D20',
          700: '#8A6518',
          800: '#6E4E10',
          900: '#523808',
        },
        travertine: {
          DEFAULT: '#F5F3EE',
          dark: '#E8E4DC',
        },
        cement: '#8C7355',
        sage: '#3A4A3A',
        'bim-blue': '#6B8CAE',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.04em', fontWeight: '400' }],
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: '400' }],
        'display-md': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '400' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '400' }],
        'heading-xl': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.018em' }],
        'heading-md': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.015em' }],
        'heading-sm': ['1.125rem', { lineHeight: '1.35', letterSpacing: '-0.01em' }],
        'ui-label': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      maxWidth: {
        'site': '1440px',
        'content': '1280px',
        'prose': '72ch',
        'prose-wide': '84ch',
      },
      borderRadius: {
        '4': '4px',
        '6': '6px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'ticker': 'ticker 40s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(16px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        'noise': `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}

export default config
