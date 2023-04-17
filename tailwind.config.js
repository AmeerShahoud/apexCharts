/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005088',
        accent: '#00365D',
        warn: '#E9BD5A',

      }
    },
  },
  plugins: [],
}

