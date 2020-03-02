// const tailwindcss = require('tailwindcss')
// const postcss = require('postcss-preset-env')
/* eslint-disable */

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: [
              './components/**/*.js',
              './pages/**/*.js',
              './layouts/**/*.js',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          }),
        ]
      : []),
  ],
}
