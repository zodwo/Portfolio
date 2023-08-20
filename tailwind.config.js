/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        animation: {
            "spin-slow": "spin 5s linear infinite",
        },
        container: {
            screens: false,
        },
        extend: {
            colors: {
                mainBg: "#1F1F1F",
                primary: "#28E98C",
                secondary: "rgb(153, 153, 153)",
                border: "#565656",
            },
            fontFamily: {
                inter: "Inter, sans-serif",
            },
        },
    },
    plugins: [],
};
