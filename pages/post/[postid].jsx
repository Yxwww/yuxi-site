// import fetch from 'isomorphic-unfetch'
import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Page } from '../../components/layouts/main'

const Markdown = dynamic(() => import('../../components/code/Markdown.jsx'))

function Content({ markdown, title }) {
  return (
    <div>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      <Markdown value={markdown} />
    </div>
  )
}

const Post = ({ markdown }) => {
  const {
    query: { postid: title },
  } = useRouter()
  return (
    <Page>
      <Content markdown={markdown} title={title} />
    </Page>
  )
}

Post.getInitialProps = async function getInitialProps() {
  return {
    markdown: `
  To be continued ...
  `,
  }
}

export default Post
