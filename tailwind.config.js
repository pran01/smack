/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#19171d",
        "bg-light": "#1a1d21",
        "fg-gray": "#222529",
        borderclr: "#565856",
      },
    },
  },
  plugins: [],
};
