/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: {
        DEFAULT: "hsl(var(--background))",
        dark: "hsl(var(--background-dark))",
      },
      foreground: {
        DEFAULT: "hsl(var(--foreground))",
        dark: "hsl(var(--foreground-dark))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        dark: "hsl(var(--card-dark))",
      },
      "card-foreground": {
        DEFAULT: "hsl(var(--card-foreground))",
        dark: "hsl(var(--card-foreground-dark))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        dark: "hsl(var(--popover-dark))",
      },
      "popover-foreground": {
        DEFAULT: "hsl(var(--popover-foreground))",
        dark: "hsl(var(--popover-foreground-dark))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        dark: "hsl(var(--primary-dark))",
      },
      "primary-foreground": {
        DEFAULT: "hsl(var(--primary-foreground))",
        dark: "hsl(var(--primary-foreground-dark))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        dark: "hsl(var(--secondary-dark))",
      },
      "secondary-foreground": {
        DEFAULT: "hsl(var(--secondary-foreground))",
        dark: "hsl(var(--secondary-foreground-dark))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        dark: "hsl(var(--muted-dark))",
      },
      "muted-foreground": {
        DEFAULT: "hsl(var(--muted-foreground))",
        dark: "hsl(var(--muted-foreground-dark))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        dark: "hsl(var(--accent-dark))",
      },
      "accent-foreground": {
        DEFAULT: "hsl(var(--accent-foreground))",
        dark: "hsl(var(--accent-foreground-dark))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        dark: "hsl(var(--destructive-dark))",
      },
      "destructive-foreground": {
        DEFAULT: "hsl(var(--destructive-foreground))",
        dark: "hsl(var(--destructive-foreground-dark))",
      },
      border: {
        DEFAULT: "hsl(var(--border))",
        dark: "hsl(var(--border-dark))",
      },
      input: {
        DEFAULT: "hsl(var(--input))",
        dark: "hsl(var(--input-dark))",
      },
      ring: {
        DEFAULT: "hsl(var(--ring))",
        dark: "hsl(var(--ring-dark))",
      },
      radius: {
        DEFAULT: "hsl(var(--radius))",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
