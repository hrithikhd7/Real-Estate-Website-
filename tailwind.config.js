/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { primary: ["Teko"], secondary: ["Manrope"] },

      colors: {
        colors: {
          text: "#040316",
          background: "#EFEFEF",
          primary: "#381ded",
          secondary: "#aeadc5",
          accent: "#8c8ab5",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
