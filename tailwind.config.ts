/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#C73B0F',
        },
        rose: {
          50: '#FCF8F6',
          100: '#F5EEEC',
          300: '#CAAFA7',
          400: '#ADA885',
          500: '#87635A',
          900: '#260F08',
        },
      },
      fontFamily: {
        'red-hat': ['Red Hat Text', 'sans-serif'],
      },
      fontSize: {
        'preset-1': ['3.5rem', { lineHeight: '120%' }],
        'preset-2': ['1.5rem', { lineHeight: '125%' }],
        'preset-3': ['1rem', { lineHeight: '150%' }],
        'preset-4': ['0.875rem', { lineHeight: '150%' }],
      },
      fontWeight: {
        'bold': 700,
        'semibold': 600,
        'regular': 400,
      },
      screens: {
        'tablet': '7680px',
        'desktop': '1440px',
      },
      plugins: [],
    },
  },
}

