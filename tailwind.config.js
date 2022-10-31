/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "sections/**/*.{js,ts,jsx,tsx}",
    "widgets/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      borderWidth: {
        'br-1': '1.5px'
      },
      colors: {
        'primary-light': '#4267cf',
        'primary-dark': '#3a60c3',
        'primary-shadow': '#d5dbec',
      },
      fontFamily: {
        "kumbh-sans": '"Kumbh Sans", Consolas, monospace',
        "cabin": '"Cabin", Consolas, monospace',
        "josefin-sans": '"Josefin Sans", Consolas, monospace',
      },
    },
  },
  plugins: [],
}
