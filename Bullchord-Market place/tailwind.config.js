const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        neueMachina: "Neue Machina, sans-serif",
      },
    },
  },
  important: true,
  variants: {
    extend: {},
  },
  plugins: [],
};
