/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#282219",
        secondary: "#503007",
        brown: " #2c1818",
        chocolate: "#80461c",
        opaqueBlack:'#221f1f99',
        beige:'#e5cda9',
        opaqueGray:'#b7a6897a',
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
      boxShadow:{
        custom:"-2px 8px 20px 11px #4a46465b"
      },
      backgroundImage:{
        texture:"url(./assets/beigeBG.jpg)",
      }

    },
  },
  plugins: [],
};
