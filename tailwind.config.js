/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    
    screens: {
      sm: '550px',
      md: '768px',
      lg: '976px',
      xlg: '1200px',
      xl: '1440px',
    },
    colors: {
      'black': '#000000',
      'dark-gray': '#7D7D7D',
      'white': '#FFFFFF',
      'medium-gray': '#E5E5E5',
      'light-gray': '#F3F3F3',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Libre Baskerville', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}

