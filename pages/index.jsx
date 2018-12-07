import React from 'react'
import ReactMarkdown from 'react-markdown'
import Page from '../layouts/main'

export default props => {
  const markdown = '## HELLO there'
  return (
    <Page>
      <div>
        <div className="container">
          <h1>Home</h1>
          <p>Hello traveller, welcome to my site !</p>
          <ReactMarkdown source={markdown} />
          <p>
            All written content on this site is provided under a Creative
            Commons ShareAlike license. All code is provided under a MIT license
            unless otherwise stated.
          </p>
        </div>
      </div>
    </Page>
  )
}
