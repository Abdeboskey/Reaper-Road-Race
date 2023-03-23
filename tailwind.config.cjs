/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      logo: ['"Potta One"'],
      heading: ['"Bebas Neue"', 'sans-serif'],
      body: ['"Jost"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
