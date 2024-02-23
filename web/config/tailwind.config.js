/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#E5D9B6',
          DEFAULT: '#A5AE8B',
          mid: '#677F5A',
          dark: '#285430',
        },
        text: {
          light: '#B4B4B4',
          DEFAULT: '#7f7f7f',
          dark: '#000000',
        },
        green: {
          DEFAULT: '#27b268',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
}
