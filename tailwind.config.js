/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':"0 10px 50px 0px rgba(0,0,0,0.15)"
      }
    },
  },
  plugins: [],
}

