const typographyPlugin = require('@tailwindcss/typography')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {},
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '0.9rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      mono: ['Monolisa', ...defaultTheme.fontFamily.mono],
      sans: ['Helvetica', 'Open Sans', ...defaultTheme.fontFamily.sans],
      article: ['Lora', ...defaultTheme.fontFamily.serif],
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
  plugins: [typographyPlugin],
}
