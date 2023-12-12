/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#43a047",
      },
      // fontFamily: {
      //   orelega: ["Orelega One", "serif"],
      //   poppins: ["Poppins", "sans-serif"],
      //   inter: ["Inter", "sans-serif"],

      // },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

