// const { pipe } = require('ramda')
// const withMdx = require('@zeit/next-mdx')({
//   extension: /.mdx?$/,
// })

// const plugins = pipe(withMdx)

// next.config.js
module.exports = () => ({
  // ...plugins({
  //   pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  //   cssModules: false,
  // }),
  target: 'serverless',
  crossOrigin: 'anonymous',
})
