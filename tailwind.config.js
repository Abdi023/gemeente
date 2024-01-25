/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/*.pug", 
    "./views/pmb/*.pug", 
    "./views/pmb/viewpmv/*.pug",
  ],
  theme: {
    extend: {
      width: {
        "ExpertCard": "25rem",
      },
      height: {
        "slider": "40rem",
        "card_height":"34rem",
        "Pub_card_height":"26rem",
        "footer_height":"19.313rem",
        
      },
      fontSize: {
        "fontsizeNormal":"0.95rem",
        "line-height":"0.5rem"
      },
    },
  },
  plugins: [],
}