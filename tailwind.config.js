/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        foreground: "#f1f5f9",
        border: "#1e293b",
        "muted-foreground": "#94a3b8",
        card: "#1e293b",
        primary: "#06b6d4",
        "primary-foreground": "#0f172a",
        accent: "#1e293b",
        "accent-foreground": "#f1f5f9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
