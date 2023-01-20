/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--sans-font)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
