const content = `
# Testing Selectors
\`\`\`javascript
const lovelife = 'test'
function addLove(life) {
  return \`love $\{life}\`;
}
\`\`\`
`

module.exports = (req, res) => {
  res.end(
    JSON.stringify({
      content,
    }),
  )
}
