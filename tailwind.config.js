/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          50:"#F8FAFC",
          100:"#F1F5F9",
          200:"#E2E8F8",
          300:"#CBD5E1",
          400:"#94A3B8",
          500:"#64748B"
        },
        purple:{
          400:"#9F67FF",
          500:"#7C3AED"
        },
        white:{}
      },
      fontFamily:{
        sans:["Titillium Web","sans-serif"],
      },
      backgroundImage:{
        "img-purple":"url('/src/assets/capa.svg')",
      }
    },
  },
  plugins: [],
}

