module.exports = (req, res) => {
  res.end(
    JSON.stringify({
      content: `
    # This is the first markdown page
    ### What is up?
    \`\`\`javascript
    const lovelife = 'test'
    function addLove(life) {
      return \`love $\{life}\`;
    }
    \`\`\`
  `,
    }),
  )
}
