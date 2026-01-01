/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },
      colors: {
        primary: { 
    50:  "#fbf6f7",
    100: "#f4eaed",
    200: "#ead2d8",
    300: "#e0bbc2",
    400: "#d4a3ab",
    500: "#c97f8a", 
    600: "#b56f79",
    700: "#9f5f69",
    800: "#8a4f59",
    900: "#74404a",
            },
        secondary: { 
  50:  "#f7f9fb",
  100: "#edf2f7",
  200: "#d3dde9",
  300: "#bac7da",
  400: "#a1b2cb",
  500: "#7f9fc0", 
  600: "#6f8fb0",
  700: "#5f7896",
  800: "#4f6178",
  900: "#3f4b5f",
            },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#030712",
        },
      },
    },
  },
  plugins: [],
};
