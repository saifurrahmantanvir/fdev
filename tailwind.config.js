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
        'primary': '#3838CF',
        'primary-light': '#4267cf',
        'primary-dark': '#3a60c3',
      },
      fontFamily: {
        "kumbh-sans": '"Kumbh Sans", monospace',
        "josefin-sans": '"Josefin Sans", monospace',
        "lato": '"Lato", sans-serif',
        "alata": '"Alata", monospace',
        "cabin": '"Cabin", sans-serif',
        "mukta": '"Mukta", sans-serif'
      },
    },
  },
  plugins: [],
}
