module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
