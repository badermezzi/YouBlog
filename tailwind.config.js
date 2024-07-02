/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'glow': '0 0 10px rgba(0, 183, 255, 0.7)',
      },
    },
  },
  plugins: [],
}