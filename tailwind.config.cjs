/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        QuickSand: 'Quicksand, sans-serif'
      },
      colors: {
        bgDarkPrimary: "#1D2123",
        bgDarkSecondary: "#1A1E1F",
        heroBG: "#609EAF",
        textSideMenu: "#EFEEE040",
        textCategories: "#EFEEE0",
        inputText: "rgba(255, 255, 255, 0.25)",
        artistNameText: "rgba(255, 255, 255, 0.5)",
      },
      backgroundImage: {
        vector: "url(./src/assets/hero icons/Vector.svg)",
        vectormob: "url(./src/assets/hero icons/VectorMobile.svg)",
      },
    },
  },
  plugins: [],
};
