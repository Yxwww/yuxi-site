// next.config.js
const withSass = require('@zeit/next-sass')
const withMdx = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
})

module.exports = withMdx(
  withSass({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    cssModules: false,
  }),
)
