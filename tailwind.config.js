const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all components
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff", 
        lightText: "#2c003e",
        lightBorder: "#ccc",

        darkBg: "#121212",
        darkText: "#e5e5e5",
        darkBorder: "#444",

        softGray: "#e5e5e5",
        darkPurple: "#2c003e",
        lightPurple: "#ad82d7",
        blackSlider: "#000000",
      },
      fontFamily: {
        coolFont: ["'Poppins'", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};