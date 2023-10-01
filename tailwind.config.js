/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}