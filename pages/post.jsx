import fetch from 'isomorphic-unfetch'
import React from 'react'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Page from '../layouts/main'

const Markdown = dynamic(() => import('../components/code/Markdown.jsx'))

const Content = withRouter(({ router: { query: { title } }, markdown }) => {
  return (
    <div>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      <Markdown value={markdown} />
    </div>
  )
})

const Post = ({ markdown }) => {
  return (
    <Page>
      <Content markdown={markdown} />
    </Page>
  )
}

Post.getInitialProps = async function getInitialProps({ req }) {
  const baseUrl = req
    ? `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
    : ''
  const response = await fetch(`${baseUrl}/api`)
  const { content } = await response.json()
  return { markdown: content }
}

export default Post
