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
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
        "brand-gray-2": "#f9f8fa",
        "brand-gray-3": "#80868b",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60,64,67,.3)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"], // enables to apply a different margin class to the first element in an interation
    },
  },
  plugins: [],
};
