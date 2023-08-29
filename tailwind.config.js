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

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /(border|text)-(warning|info|error|success)/,
    },
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

    fontFamily: {
      mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono],
      sans: [
        'Helvetica',
        'var(--font-open-sans)',
        ...defaultTheme.fontFamily.sans,
      ],
      article: ['var(--font-roboto-slab)', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      transitionProperty: {
        spacing: 'margin, padding',
      },
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
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['lofi', 'halloween'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};
