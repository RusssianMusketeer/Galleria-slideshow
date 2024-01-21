/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,svg}'],
  theme: {
    screens: {
      extraSm: '375px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xlg: '1200px',
      xl: '1440px'
    },
    colors: {
      black: '#000000',
      'dark-gray': '#0000008C',
      white: '#FFFFFF',
      'text-gray': '#d3d3d3',
      'medium-gray': '#E5E5E5',
      'light-gray': '#F3F3F3',
      'black-gray': '#D8D8D8',
      red: colors.red,
      green: colors.green
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif']
    },
    extend: {}
  },
  plugins: []
}
