/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          100:'#660099',
          200: "#0F0B0B"
          },

        secondary:{
        100: "#9E9898"
        }

      }
    },
  },
  plugins: [],
}

