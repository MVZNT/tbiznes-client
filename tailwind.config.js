export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-primary":"#1D2023"
      },
      fontFamily: {
        pragmatica: ['Pragmatica', 'sans-serif'],
        pragmaticaBold: ['PragmaticaExtendedBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}