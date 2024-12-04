/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto",'sans-serif'],
        delius:["Delius", "cursive"],
        atma:["Atma",'system-ui']
      },
      screens:{
        "tablet":"896px",
        "big":"1608px"
      },
      colors:{
        blackBLue:"#0e1a34"
      }
    },
  },
  plugins: [require('daisyui'),],
}