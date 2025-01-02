/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind processes all files in the src folder
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Roboto", "sans-serif"],
        sans: ["Helvetica", "Arial", "sans-serif"], // Custom font family
      },
      colors: {
        yellowCustom: "#FFD700", // Custom yellow color
        lightOrange: "#FFA500", // Custom light orange color
      },
    },
  },
  plugins: [], // Add any plugins here if needed
};
