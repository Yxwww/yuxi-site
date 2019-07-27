import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'

const PostLink = ({ title, url }) => {
  console.log(title)
  return (
    <li>
      <Link prefetch href={`/post?title=${url}`} as={`/post/${url}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

export default function Blog() {
  return (
    <Page>
      <h1>Blog</h1>
      <p>Under construction :)</p>
      <ul>
        <PostLink title="Testing Selectors" url="testing-selectors" />
      </ul>
    </Page>
  )
}