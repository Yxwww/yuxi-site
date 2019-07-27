const { pipe } = require('ramda')
const withSass = require('@zeit/next-sass')
const withMdx = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
})

const plugins = pipe(
  withSass,
  withMdx,
)

// next.config.js
module.exports = () => ({
  ...plugins({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    cssModules: false,
  }),
  target: 'serverless',
  crossOrigin: 'anonymous',
})
