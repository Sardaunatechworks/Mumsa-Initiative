/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0faf4',
          100: '#dcf4e6',
          200: '#bbe9cf',
          300: '#88d6ae',
          400: '#4fbc85',
          500: '#29a066',
          600: '#16653a', // Main brand green
          700: '#145732',
          800: '#12472a',
          900: '#103b23',
          950: '#072114',
        },
        secondary: {
          50:  '#eff3fb',
          100: '#dce5f6',
          200: '#c0ceee',
          300: '#96afe3',
          400: '#6688d4',
          500: '#4568c6',
          600: '#3350b0',
          700: '#2b4090',
          800: '#273775',
          900: '#1a2c5b', // Main brand deep blue
          950: '#111a38',
        },
        accent: {
          50:  '#fdf9ee',
          100: '#faf1d0',
          200: '#f4e09c',
          300: '#eeca60',
          400: '#e8b535',
          500: '#c9a84c', // Soft gold
          600: '#b8872a',
          700: '#956824',
          800: '#7b5424',
          900: '#664523',
          950: '#3a240f',
        },
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans:  ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        88: '22rem',
        112: '28rem',
        128: '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in':      'fadeIn 0.6s ease-out forwards',
        'slide-up':     'slideUp 0.6s ease-out forwards',
        'slide-in-left':'slideInLeft 0.6s ease-out forwards',
        'counter':      'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #16653a 0%, #1a2c5b 100%)',
        'gradient-hero':    'linear-gradient(160deg, #16653a 0%, #1a2c5b 60%, #103b23 100%)',
        'gradient-accent':  'linear-gradient(135deg, #c9a84c 0%, #e8b535 100%)',
      },
      boxShadow: {
        'card':  '0 2px 16px 0 rgba(22, 101, 58, 0.08)',
        'card-hover': '0 8px 32px 0 rgba(22, 101, 58, 0.18)',
        'glow':  '0 0 40px rgba(22, 101, 58, 0.25)',
      },
    },
  },
  plugins: [],
}
