export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "black-primary": "#1D2023"
            },
            fontFamily: {
                pragmaticaLight: "pragmatica-light",
                pragmatica: "pragmatica",
                pragmaticaMedium: "pragmaticaMedium",
                pragmaticaBold: "pragmaticaBold",
                pragmaticaExtendedBold: "pragmaticaExtendedBold",
            },
        },
    },
    plugins: [],
}