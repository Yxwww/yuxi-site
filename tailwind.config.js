// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
      0: '0',
      2: '2px',
      4: '4px',
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
