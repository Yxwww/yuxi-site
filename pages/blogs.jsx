import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Page } from '../components/layouts/main'
import { getBlogDir, getBlogMetaInfo, trimMdx } from '@/lib/mdx'

import fs from 'fs'

const UnderConstruction = dynamic(() =>
  import('../components/UnderConstruction'),
)

function PostLinks({ posts }) {
  return (<div>{
    posts.map((post) => {
      return (<Link key={posts} as={`/post/${post.frontMatter.slug}`} href={`/post/${post.frontMatter.slug}`}><a>{post.frontMatter.title}</a></Link>)
    })
  }</div>)
}

export default function Blog({ posts }) {
  return (
    <Page>
      <h1>Blog</h1>
      <UnderConstruction />
      <ul className="">
        <PostLinks posts={posts} />
      </ul>
    </Page>
  )
}

export async function getStaticProps(context) {
  // MDX text - can be from a local file, database, anywhere
  const files = fs.readdirSync(getBlogDir(), 'utf8');
  const postsInfo = await Promise.all(files.map((fileName) => {
    return getBlogMetaInfo(trimMdx(fileName));
  }))

  return { props: { posts: postsInfo } }
}
