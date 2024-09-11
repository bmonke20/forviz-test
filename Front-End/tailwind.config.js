/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        clearWhite: "rgba(255, 255, 255, 0.5)",
        black: "#000",
        clearBlack: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
