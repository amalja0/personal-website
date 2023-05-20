/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#494949",
        "secondary-100": "#E85E56",
        "green-100": "#E4F2E8",
        "green-200": "#B2BFB6",
        "red-500": "#CD4631",
        "rose-200": "#F9E0DB",
        "rose-300": "#F9B7A9",
      },
      fontFamily: {
        libreBaskerville: ["Libre Baskerville", "serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}