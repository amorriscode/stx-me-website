module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'stx-blue': '#5546ff',
        'stx-gray': '#f7f7f8',
        'code-blue': '#06d2ea',
        'code-pink': '#cd5ec0',
      },
      fontFamily: {
        stx: ['Opensauceone', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
