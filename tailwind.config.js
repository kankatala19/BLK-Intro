/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050507',
          900: '#0A0A0D',
          850: '#101015',
          800: '#16161D',
          750: '#1D1D26',
          700: '#262633',
          600: '#38384A',
        },
        crimson: {
          DEFAULT: '#DC2626',
          glow: '#EF4444',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        muted: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-red-sm': '0 0 15px -3px rgba(220, 38, 38, 0.35)',
        'glow-red': '0 0 30px -5px rgba(220, 38, 38, 0.45)',
        'glow-red-lg': '0 0 60px -10px rgba(220, 38, 38, 0.55)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.7)',
        'inner-dark': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'crimson-gradient': 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
        'dark-glass': 'linear-gradient(135deg, rgba(22, 22, 29, 0.7) 0%, rgba(10, 10, 13, 0.8) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

