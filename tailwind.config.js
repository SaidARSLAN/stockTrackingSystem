/** @type {import('tailwindcss').Config} */
import heroImage from './src/assets/herobackground.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        white : "#F1F1F1"
      },
      fontFamily : {
        sans : ['AR One Sans', 'sans-serif'],
        roboto : ['Roboto', 'sans-serif']
      },
      backgroundImage : {
        'hero-pattern' : "url('./src/assets/herobackground.jpg')"
      }
    },
  },
  plugins: [],
}