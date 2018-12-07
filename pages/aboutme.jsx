import React from 'react'
import ReactMarkdown from 'react-markdown'
import Page from '../layouts/main'

export default props => {
  const markdown = `
  # This is the first markdown page
  ### What is up?
  \`\`\`javascript
  const lovelife = 'test'
  \`\`\`

  `
  return (
    <Page>
      <div>
        <div className="container">
          <h1>Home</h1>
          <p>
            Hello traveller, welcome to my site testing react-markdown here!
          </p>
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    </Page>
  )
}
