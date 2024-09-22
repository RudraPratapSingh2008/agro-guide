/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans serif",
      },
    },
  },
  plugins: [],
};
