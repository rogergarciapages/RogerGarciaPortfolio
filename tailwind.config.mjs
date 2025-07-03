/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['8rem', { lineHeight: '1' }],
        'huge': ['5rem', { lineHeight: '1.1' }],
        'statement': ['3rem', { lineHeight: '1.2' }],
      },
      spacing: {
        'section': '10rem',
      },
    },
  },
  plugins: [],
} 