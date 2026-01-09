import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070B14",
          900: "#0A1628",
          800: "#0F2342",
          700: "#162D50",
          600: "#1E3A5F",
          500: "#2563EB",
          400: "#3B82F6",
        },
        accent: {
          cyan: "#00CED1",
          teal: "#14B8A6",
          orange: "#FF6B35",
          gold: "#D4A843",
          coral: "#F97316",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
