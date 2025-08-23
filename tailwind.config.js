/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        ubantu: ['Ubantu', 'sans-serif'], 
         sans: ["Poppins","sans-serif"],
        handWritten: ["Merienda", 'sans-serif']
      },
      colors:{
        primary: '#f97316'
      },
      // fontFamily: {
       
      // },
      container: {
        center : true,
        padding: {
          DEFAULT:  '1rem',
          // sm : "2rem",
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem'
        }
      }
    },
  },
  plugins: [],
}