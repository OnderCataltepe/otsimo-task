/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '900px',
      lg: '1440px'
    },
    extend: {
      colors: {
        brownPrimary: '#943A28',
        bluePrimary: '#1E3A8A',
        yellowPrimary: '#EAB308',
        orangePrimary: '#EEAF4B'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        bgDark:
          'linear-gradient(to right top, #000000, #060104, #0a0309, #0b0510, #090815, #090815, #090815, #090815, #0b0510, #0a0309, #060104, #000000)',
        bgLight:
          'linear-gradient(to right top, #f9ffde, #fff9e3, #fff7f1, #fff9fc, #fffcff, #fffcff, #fffcff, #fffcff, #fff9fc, #fff7f1, #fff9e3, #f9ffde)',
        customImg: 'url("/src/assets/banner/custom.jpg")'
      },
      keyframes: {
        topToBottom: {
          from: { top: '-500px' },
          to: { top: '0px' }
        },
        leftToRight: {
          from: { left: '-500px' },
          to: { left: '-42px' }
        }
      },
      animation: {
        topToBottom: 'topToBottom 0.5s',
        leftToRight: 'leftToRight 0.25s'
      }
    }
  },
  plugins: []
};
