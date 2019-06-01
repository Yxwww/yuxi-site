import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'

const PostLink = ({ id, title }) => (
  <li>
    <Link prefetch href={`/post/${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Page>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="lovelife" />
      </ul>
    </Page>
  )
}
