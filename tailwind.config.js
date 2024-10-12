const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
        },
        '.scrollbar-thumb-gray': {
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '3px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        },
        '.scrollbar-track-gray-lighter': {
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}