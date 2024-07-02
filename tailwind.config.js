/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: "url('/download.png')",
      },
      fontFamily: {
        blackOpsOne: ["Black Ops One", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        languageAnimation: "languageAnimation 1s linear",
      },
      keyframes: {
        languageAnimation: {
          "0%": {
            opacity: "1",
            width: "0",
          },
          "50%": {
            opacity: "1",
            content: "'こんにちは、世界！'",
          },
          "100%": {
            opacity: "1",
            content: "'Hello, World!'",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
});
