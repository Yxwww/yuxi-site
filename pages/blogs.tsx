import React from 'react'
import { Page } from '../components/layouts/main'
import UnderConstruction from '../components/UnderConstruction'
import { promises as fs } from 'fs'
import Marcdoc from '@markdoc/markdoc'
import yaml from 'js-yaml' // or 'toml', etc.
import path from 'path'
import { PostList } from '@/components/post/PostList'
import { PostItemList } from 'src/types'

export async function getStaticProps(): Promise<{
  props: { posts: PostItemList }
}> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')

      // Generally you would parse/transform the contents
      // For example you can transform markdown to HTML here
      const ast = Marcdoc.parse(fileContents)
      const frontmatter = ast.attributes.frontmatter
        ? yaml.load(ast.attributes.frontmatter)
        : {}

      return {
        filename,
        frontmatter: { ...frontmatter, date: frontmatter.date.toString() },
        content: fileContents,
      }
    })
  )

  const sorted = posts.sort((a, b) => {
    return a.frontmatter.date - b.frontmatter.date
  })

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      // posts: await Promise.all(posts),
      posts: sorted,
    },
  }
}

export default function Blog({ posts }) {
  return (
    <Page className="mx-auto max-w-2xl lg:max-w-5xl">
      <h1>Blogs</h1>
      <p className="py-4 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        ipsum vel elit tincidunt malesuada. Proin porta eros non velit gravida,
        vel aliquam magna feugiat.
      </p>
      <PostList posts={posts} />
    </Page>
  )
}
