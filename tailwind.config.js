/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#0070f3",
          secondary: "#6c757d",
          dark: "#1f2937",
          light: "#f8f9fa"
        },
        animation: {
          blink: 'blink 1s step-end infinite',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0 },
          },
        },
      },
    },
    plugins: [],
    darkMode: 'class',
  }