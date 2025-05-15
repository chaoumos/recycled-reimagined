/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'eco-green': '#82B366',
        'earth-brown': '#A67B5B',
        'light-beige': '#F5F5DC'
      },
      fontFamily: {
        'handwritten': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}