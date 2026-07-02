import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Surface / Background ──
        background: '#f7fafd',
        foreground: '#0b1421',
        card: '#ffffff',
        surface: '#f0f5fa',

        // ── Primary ──
        primary: '#3264f2',
        'primary-foreground': '#ffffff',
        'primary-hover': '#1a4de6',
        'primary-cyan': '#00c3f3',
        'primary-dim': '#477dd8',

        // ── Sidebar ──
        sidebar: '#ffffff',
        'sidebar-accent': '#f0f5fa',
        'sidebar-foreground': '#5f6671',

        // ── Muted / Text ──
        muted: '#5f6671',
        'muted-light': '#94a3b8',

        // ── Borders ──
        border: '#dfe5eb',
        'border-washed': '#e2e8ee',

        // ── Semantic ──
        success: '#2bbb66',
        warning: '#f2a618',
        error: '#f52f38',
        purple: '#626fee',

        // ── Dark accent (landing page sections) ──
        navy: '#06112e',
        'navy-foreground': '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        heading: ['var(--font-heading)', 'Manrope', 'sans-serif'],
        mono: ['var(--font-mono)', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'headline-hero': ['68px', { lineHeight: '70px', fontWeight: '700', letterSpacing: '-0.025em' }],
        'headline-xl': ['36px', { lineHeight: '40px', fontWeight: '700', letterSpacing: '-0.025em' }],
        'headline-lg': ['30px', { lineHeight: '36px', fontWeight: '700', letterSpacing: '-0.025em' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '700', letterSpacing: '-0.025em' }],
        'headline-sm': ['18px', { lineHeight: '28px', fontWeight: '700' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        label: ['11px', { lineHeight: '16.5px', fontWeight: '600', letterSpacing: '0.05em' }],
        'label-sm': ['10px', { lineHeight: '15px', fontWeight: '600', letterSpacing: '0.1em' }],
        eyebrow: ['11px', { lineHeight: '16px', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      screens: {
        'desktop': '1440px',
      },
      borderRadius: {
        app: '0.875rem', // 14px — buttons, nav items, search bar
        logo: '1.125rem', // 18px — logo circle
        support: '1.375rem', // 22px — sidebar support card
      },
      boxShadow: {
        dropdown: '0 4px 12px rgba(0,0,0,0.08)',
        'btn-primary': '0 12px 32px -8px rgba(50,100,242,0.18), 0 4px 12px -2px rgba(50,100,242,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
