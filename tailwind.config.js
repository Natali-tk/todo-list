/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      openSans: [
        "Open Sans", "serif"
      ]
    },
    colors: {
      "black": "#232323",
      "white": "#fefefe",
      "orange": "#ff8c00",
      "green":"#32a8a6",
      "blue": "#17183B",
      "magenta": "#A11692",
      "gray": "#f9f9f9",
    }
  },
  darkMode:"class",
  plugins: [],
};
