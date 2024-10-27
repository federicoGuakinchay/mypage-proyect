/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',               // Include your HTML entry file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JavaScript, TypeScript, and JSX/TSX files
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
    },
  },
  plugins: [],
}