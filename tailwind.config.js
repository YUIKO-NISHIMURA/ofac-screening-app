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
      }
    },
  },
  plugins: [],
}