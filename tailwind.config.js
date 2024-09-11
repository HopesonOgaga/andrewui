/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // This is the correct way to include the Flowbite plugin
  ],
};
