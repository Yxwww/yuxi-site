import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../layouts/main'

const Markdown = dynamic(() => import('../components/code/Markdown.jsx'))

export default () => {
  const markdown = `
  # This is the first markdown page
  ### What is up?
  \`\`\`javascript
  const lovelife = 'test'
  function addLove(life) {
    return \`love $\{life}\`;
  }
  \`\`\`

  `
  return (
    <Page>
        <h1>Home</h1>
        <p>Hello traveller, welcome to my site testing react-markdown here!</p>
        <Markdown value={markdown} />
    </Page>
  )
}
