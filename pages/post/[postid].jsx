// import fetch from 'isomorphic-unfetch'
import React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Page } from '../../components/layouts/main'

const Post = ({ markdown }) => {
  const {
    query: { postid: title },
  } = useRouter()
  return (
    <Page>
      <div>POST</div>
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
