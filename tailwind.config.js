/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        formula: ['"Formula Condensed"', 'sans-serif'],
        neue: ['NHaasGroteskTXPro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
