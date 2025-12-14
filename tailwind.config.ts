import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6366f1",
                    light: "#818cf8",
                    dark: "#4f46e5",
                },
                secondary: {
                    DEFAULT: "#8b5cf6",
                    light: "#a78bfa",
                    dark: "#7c3aed",
                },
                accent: {
                    DEFAULT: "#ec4899",
                    light: "#f472b6",
                    dark: "#db2777",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-up": "slideUp 0.8s ease-out",
                "float": "float 6s ease-in-out infinite",
                "gradient": "gradient 8s ease infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
