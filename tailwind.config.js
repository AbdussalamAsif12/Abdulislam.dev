/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Google_Delius : ["Delius Swash Caps"],
        Google_Chivo : ["Chivo"],
        Google_Roboto : ["Robot"],
        Google_Open : ["Open Sans"],
        Google_Sour : ["Sour Gummy"],
      }
    },
  },
  plugins: [],
}

