const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Wich tailwind properties we wanna extend. In this case we want to add a font.
      // Tailwind has a font's array with fallthru so we want to include ours at the beginning of the font array
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        //? Adding new colors to be referenced in tailwind classes
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1968d2",
        "brand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
