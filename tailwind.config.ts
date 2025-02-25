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
        foreground: "#D44199",
        cake: {
          pink: "#FFE4E6",
          rose: "#D44199",
          burgundy: "#D44199",
          cream: "#FEF9D7",
          peach: "#FDE1D3",
          lavender: "#E5DEFF",
          sage: "#F2FCE2",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "#D44199",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "#D44199",
        },
        destructive: {
          DEFAULT: "#D44199",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "#D44199",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "#D44199",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "#D44199",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "#D44199",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        seasons: ["the-seasons", "serif"]
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;