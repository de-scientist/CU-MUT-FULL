import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mutcu-navy": "#04003d",
        "mutcu-orange": "#ff9700",
        "mutcu-red": "#ff1229",
        "mutcu-teal": "#30d5c8",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      boxShadow: {
        "mutcu-card": "0 8px 20px rgba(0, 0, 0, 0.12)",
        "mutcu-card-lg": "0 15px 30px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
