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
        surface: '#111316',
        'surface-dim': '#111316',
        'surface-bright': '#37393d',
        'surface-container-lowest': '#0c0e11',
        'surface-container-low': '#1a1c1f',
        'surface-container': '#1e2023',
        'surface-container-high': '#282a2d',
        'surface-container-highest': '#333538',
        'on-surface': '#e2e2e6',
        'on-surface-variant': '#becab9',
        'surface-charcoal': '#1E2227',
        'border-subtle': '#2C323A',
        primary: '#78dc77',
        'on-primary': '#00390a',
        'primary-container': '#4caf50',
        secondary: '#a5c8ff',
        'secondary-container': '#006ec9',
        tertiary: '#ffb1c7',
        error: '#ffb4ab',
        'data-blue': '#0D47A1',
        'indicator-blue': '#2196F3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
      },
      spacing: {
        'sidebar-width': '260px',
      },
    },
  },
  plugins: [],
}
export default config
