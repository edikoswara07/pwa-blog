// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      bluegray: colors.blueGray,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
    },
    fontFamily: {
      Nunito: ["Nunito"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
