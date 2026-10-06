/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1A1A1A',
          200: '#222222',
          300: '#2D2D2D',
          400: '#3A3A3A',
        },
        sky: '#38bdf8',
      },
    },
  },
  plugins: [],
}
