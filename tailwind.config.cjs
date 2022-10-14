/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        QuickSand: "Quicksand, sans-serif",
      },
      colors: {
        bgDarkPrimary: "#1D2123",
        bgDarkSecondary: "#1A1E1F",
        heroBG: "#609EAF",
        textSideMenu: "#EFEEE040",
        textCategories: "#EFEEE0",
        inputText: "rgba(255, 255, 255, 0.25)",
        artistNameText: "rgba(255, 255, 255, 0.5)",
        actionsBg: "rgba(255, 255, 255, 0.07)",
        tunesBg: " rgba(51, 55, 59, 0.37)",
      },
      backgroundImage: {
        vector: "url(./src/assets/hero icons/Vector.svg)",
        vectormob: "url(./src/assets/hero icons/VectorMobile.svg)",
        tunes:
          "url(./src/components/pages/assets/tunes asssets/Lead-image.svg)",
      },
    },
  },
  plugins: [],
};
