/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      'josefin': ['Josefin Sans', 'sans-serif'],
      'k2d': ['K2D', 'sans-serif'],
      'bebasNeue': ['Bebas Neue', 'cursive']
    },
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1025px',
      xl: '1440px'
    },
    extend: {
      colors: {
        yellow: '#FAFF05',
        red: '#C4140F',
        blackBlue: '#100E18'
      },
      backgroundImage:{
        rectangle: "url('/images/rectangleBg.png')"
      },
    },
  },
  plugins: [],
}
