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
    100: "#f4e7eb",
    200: "#e9ccd3",
    300: "#deb2bb",
    400: "#d39aa4",
    500: "#cf7683",
    600: "#bb6673",
    700: "#a45663",
    800: "#8e4754",
    900: "#773843",
            },
        secondary: { 
  50:  "#f7f9fb",
  100: "#edf2f7",
  200: "#d2ddeb",
  300: "#b8c9df",
  400: "#9fb5d3",
  500: "#7597c6", 
  600: "#6788b6",
  700: "#58729c",
  800: "#495c7f",
  900: "#3b4664",
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
