import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'

const PostLink = ({ id, title }) => (
  <li>
    <Link prefetch href="/post">
      <a>{title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Page>
      <h1>Blog</h1>
      <p>Under construction :)</p>
      <ul>{/* <PostLink id="hello-nextjs" title="Testing Selectors" /> */}</ul>
    </Page>
  )
}
