import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* RGB + alpha channel so `bg-fp-copper/10` etc. work with CSS variables */
        fp: {
          black: 'rgb(13 13 13 / <alpha-value>)',
          'nav-solid': 'rgb(26 15 7 / <alpha-value>)',
          'brown-dark': 'rgb(44 26 14 / <alpha-value>)',
          copper: 'rgb(176 125 74 / <alpha-value>)',
          'copper-light': 'rgb(201 154 107 / <alpha-value>)',
          'copper-dark': 'rgb(138 94 48 / <alpha-value>)',
          cream: 'rgb(250 244 236 / <alpha-value>)',
          'cream-dark': 'rgb(240 232 216 / <alpha-value>)',
          white: 'rgb(255 255 255 / <alpha-value>)',
          'text-primary': 'rgb(26 16 8 / <alpha-value>)',
          'text-body': 'rgb(61 43 26 / <alpha-value>)',
          'text-muted': 'rgb(122 101 80 / <alpha-value>)',
          border: 'rgb(224 212 192 / <alpha-value>)',
          success: 'rgb(45 122 79 / <alpha-value>)',
        },
        /* Semantic aliases — map legacy class names to Fair Path tokens */
        mahogany: 'var(--fp-brown-dark)',
        sienna: 'var(--fp-copper-dark)',
        roseGold: 'var(--fp-copper)',
        blush: 'var(--fp-copper-light)',
        cream: 'var(--fp-cream)',
        charcoal: 'var(--fp-text-primary)',
        slate: 'var(--fp-text-muted)',
        sage: 'var(--fp-success)',
        brand: {
          50: 'var(--fp-cream)',
          100: 'var(--fp-cream-dark)',
          200: 'var(--fp-copper-light)',
          300: 'var(--fp-copper)',
          400: 'var(--fp-brown-dark)',
          900: 'var(--fp-black)',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      fontSize: {
        hero: ['clamp(42px,5.5vw,76px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h1: ['clamp(34px,4vw,52px)', { lineHeight: '1.15' }],
        h2: ['clamp(26px,3vw,38px)', { lineHeight: '1.2' }],
        h3: ['clamp(20px,2vw,26px)', { lineHeight: '1.3' }],
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
      borderRadius: {
        card: '1rem',
        pill: '100px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(44, 26, 14, 0.08)',
        'card-hover': '0 20px 48px rgba(44, 26, 14, 0.12)',
        glow: '0 0 32px rgba(176, 125, 74, 0.22)',
        nav: '0 1px 0 rgba(224, 212, 192, 0.6)',
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to bottom, rgba(13,13,13,0.35) 0%, rgba(13,13,13,0.55) 55%, rgba(13,13,13,0.72) 100%)',
        'mahogany-fade': 'linear-gradient(135deg, var(--fp-brown-dark) 0%, var(--fp-copper-dark) 100%)',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'about-hero-line': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'ken-burns': 'kenBurns 10s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'about-hero-line': 'about-hero-line 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
