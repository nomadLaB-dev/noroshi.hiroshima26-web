import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Sanfrecce & Digital Colors
        sanfrecce: {
          purple: "#522D80", // Official-ish Dark Purple
          gold: "#D4AF37",   // Official-ish Gold
        },
        digital: {
          purple: "#8A4FFF", // Vivid Purple for UI
          gold: "#FFD700",   // Vivid Gold for Text/Icons
          black: "#0D0714",  // Deepest Purple/Black for BG
        }
      },
      fontFamily: {
        heading: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
