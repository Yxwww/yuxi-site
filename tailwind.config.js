const typographyPlugin = require('@tailwindcss/typography')

module.exports = {
  theme: {
    extend: {
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
        mono: ['Monolisa'],
        sans: ['Helvetica'],
        article: ['Lora'],
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
  },
  variants: {
    extend: {
      rotate: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [typographyPlugin],
  purge: [
    'pages/**/*.jsx',
    'pages/**/*.tsx',
    'components/**/*.jsx',
    'components/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
}
