/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {}, // Extend the theme if needed
  },
  plugins: [
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
};
