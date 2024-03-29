/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b3c5b",
          dark: ""
        },
        secondary: {
          DEFAULT: "#1fefd2",
          dark: "#1b8c8d"
        },
        info: {
          DEFAULT: "#f2f4f5",
          dark: "#787f8e"
        },
      },},
  },
  plugins: [],
}
