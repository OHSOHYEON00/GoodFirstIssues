/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,jsx,js,html}"],
  theme: {
    extend: {
      colors: {
        "basic-white": "#F4F6FA",
        "button-bg": "#2E3239",
        "button-text": "#8C8E93",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
