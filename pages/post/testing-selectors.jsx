// import fetch from 'isomorphic-unfetch'
import React from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Page from '../../layouts/main'

const Markdown = dynamic(() => import('../../components/code/Markdown.jsx'))

const Content = withRouter(({ router: { query: { title } }, markdown }) => {
  console.log('query', title)
  return (
    <div>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      <Markdown value={markdown} />
    </div>
  )
})

const Post = ({ markdown, title }) => {
  console.log('POST', title, markdown)
  return (
    <Page>
      <h1>{title}</h1>
      <p>{markdown}</p>
      {/* <Content markdown={markdown} title={title} /> */}
    </Page>
  )
}

Post.getInitialProps = async function getInitialProps({ query, req }) {
  return {
    markdown: `
  # CONTENT! in pages/post/
  `,
    title: query.title,
  }
}

export default Post
