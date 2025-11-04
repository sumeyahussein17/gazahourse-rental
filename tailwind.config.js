/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // <- Tailwind will scan these files for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
