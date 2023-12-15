/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'y-gray': '#EBEDF2',
        'y-green': '#008000',
        'y-hit': '#EF0107',
        'y-clear': '#CFF2D7',
      }
    },
  },
  plugins: [],
}