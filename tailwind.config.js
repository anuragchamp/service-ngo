/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@my-company/tailwind-components/**/*.js',
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue': '#2F4659',
        'yellow': '#F2C12E',
        'dark-red': '#D9593D',
        'smoke-white': '#f2f2f2',
        'orange': '#FE8F1F',
        'grey': '#6A6A6A',
        'dark-blue': '#14162E',
        'light-red': '#F15B43;',
      },
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}