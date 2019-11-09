const { pipe } = require('ramda')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withMdx = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
})

const plugins = pipe(
  withSass,
  withCSS,
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
