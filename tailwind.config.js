module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.js',
    './pages/**/*.tsx',
    './components/**/*.js',
    './components/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
