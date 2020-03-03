import React from 'react'
import Link from 'next/link'
import Page from '../components/layouts/main'

const PostLink = ({ title, url }) => {
  return (
    <li>
      <Link href="/post/[postid]" as={`/post/${url}`}>
        <a>{title}</a>
      </Link>
    </li>
  )
}

export default function Blog() {
  return (
    <Page>
      <div className="container">
        <h1>Blog</h1>
        <ul className="">
          <PostLink title="Testing Selectors" url="testing-selectors" />
        </ul>
      </div>
    </Page>
  )
}
