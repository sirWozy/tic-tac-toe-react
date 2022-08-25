/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'min': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'max': '766px'},
      'xs': {'max': '539px'}
    }
  },
  plugins: [],
}
