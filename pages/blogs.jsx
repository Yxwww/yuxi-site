import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getBlogDir, getBlogMetaInfo, trimMdx } from '@/lib/mdx'

import fs from 'fs'
import { Page } from '../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../components/UnderConstruction'),
)

function PostLinks({ posts }) {
  return (
    <div>
      {posts.map(post => {
        return (
          <div>
            <Link
              key={posts}
              as={`/post/${post.frontMatter.slug}`}
              href={`/post/${post.frontMatter.slug}`}
            >
              <a className="text-lg capitalize">{post.frontMatter.title}</a>
            </Link>
            <p className="text-sm text-gray-700 font-bold">
              {post.frontMatter.readingTime.text}
            </p>
            <p className="truncate max-w-xl max-h-sm">
              {post.frontMatter.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default function Blog({ posts }) {
  return (
    <Page>
      <h1 className="mb-16">Blogs</h1>
      <ul className="mb-16">
        <PostLinks posts={posts} />
      </ul>
      <UnderConstruction />
    </Page>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const files = fs.readdirSync(getBlogDir(), 'utf8')
  const postsInfo = await Promise.all(
    files.map(fileName => {
      return getBlogMetaInfo(trimMdx(fileName))
    }),
  )
  return { props: { posts: postsInfo } }
}
