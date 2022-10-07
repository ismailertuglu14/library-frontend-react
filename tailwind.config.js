/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-right-bg": "url('../public/assets/old-library-book.jpeg')",
      },
    },
  },
  plugins: [],
};
