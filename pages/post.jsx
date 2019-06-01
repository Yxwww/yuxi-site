import React from 'react'
import { withRouter } from 'next/router'
import Page from '../layouts/main'

const Content = withRouter(({ router: { query: { title } } }) => (
  <div>
    <h1>{title}</h1>
    <p>This is the blog post content.</p>
  </div>
))

const Post = () => (
  <Page>
      <Content />
  </Page>
)

export default Post
