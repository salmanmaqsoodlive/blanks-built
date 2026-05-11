/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        concrete: {
          DEFAULT: '#111111',
          900: '#111111',
          800: '#1a1a1a',
          700: '#222222',
          600: '#2d2d2d',
          500: '#3d3d3d',
        },
        gold: {
          DEFAULT: '#c8a96e',
          light: '#d4b97e',
          dark: '#a8843e',
          muted: '#9a7a50',
        },
        cream: '#f0ece4',
        charcoal: '#333333',
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'line-grow': 'lineGrow 1.5s ease-out forwards',
      },
      keyframes: {
        revealUp: {
          from: { opacity: '0', transform: 'translateY(60px)', clipPath: 'inset(0 0 100% 0)' },
          to: { opacity: '1', transform: 'translateY(0)', clipPath: 'inset(0 0 0% 0)' },
        },
        lineGrow: {
          from: { scaleX: 0 },
          to: { scaleX: 1 },
        },
      },
      backgroundImage: {
        'concrete-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23111'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23161616'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
