const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      main: ['Monolisa', ...defaultTheme.fontFamily.sans],
      resume: ['Monolisa', ...defaultTheme.fontFamily.sans],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
  variants: {
    margin: ['first'],
    rotate: ['hover'],
  },
  plugins: [],
}
