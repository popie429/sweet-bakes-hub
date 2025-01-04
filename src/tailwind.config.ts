import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "#B76E79",
        cake: {
          pink: "#FFE4E6",
          rose: "#B76E79",
          burgundy: "#B76E79",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "#B76E79",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "#B76E79",
        },
        destructive: {
          DEFAULT: "#B76E79",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "#B76E79",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "#B76E79",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "#B76E79",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "#B76E79",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;