/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'y-gray': '#EBEDF2',
        'y-blue': '#007FFF',
        'y-red': '#EF0107',
        'y-hit': '#FFDCE5',
        'y-clear': '#B9D9EB',
      }
    },
  },
  plugins: [],
}