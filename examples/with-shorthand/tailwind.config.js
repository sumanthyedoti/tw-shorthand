/** @type {import('tailwindcss').Config} */
const shorthand = require('tw-shorthand')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [shorthand],
}
