const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Scan all relevant files
  theme: {
    extend: {
      colors: {
        lightBg: "#ffffff", // Background for light mode
        lightText: "#2c003e", // Text color for light mode
        lightBorder: "#ccc", // Border color for light mode

        darkBg: "#121212", // Background for dark mode
        darkText: "#e5e5e5", // Text color for dark mode
        darkBorder: "#444", // Border color for dark mode

        softGray: "#e5e5e5", // Shared gray color
        darkPurple: "#2c003e", // Custom purple for accents
        blackSlider: "#000000", // Custom black for slider
      },
      fontFamily: {
        coolFont: ["'Poppins'", ...fontFamily.sans], // Custom font
      },
    },
  },
  plugins: [],
};