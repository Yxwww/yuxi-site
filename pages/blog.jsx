import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'

const PostLink = ({ title }) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Page>
      <div className="container">
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
      </div>
    </Page>
  )
}
