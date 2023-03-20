// import fetch from 'isomorphic-unfetch'
import Marcdoc, { Config } from '@markdoc/markdoc'
import React from 'react'
import path from 'path'
import yaml from 'js-yaml' // or 'toml', etc.
import { promises as fs } from 'fs'
import { Page } from '../../components/layouts/main'
import { heading } from '@/markdoc/schema/Heading'

const config: Config = {
  nodes: {
    heading,
  },
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)

  const paths = filenames.map((name) => ({
    params: { postid: name.split('.')[0] },
  }))

  return {
    paths,
    fallback: false,
  }
}

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, params.postid)
  const fileContents = await fs.readFile(`${filePath}.md`, 'utf8')
  const ast = Marcdoc.parse(fileContents)
  const frontmatter = ast.attributes.frontmatter
    ? yaml.load(ast.attributes.frontmatter)
    : {}

  return {
    props: {
      post: {
        frontmatter: { ...frontmatter, date: frontmatter.date.toString() },
        content: fileContents,
      },
    },
  }
}

const Post = ({ post }) => {
  const ast = Marcdoc.parse(post.content)
  const content = Marcdoc.transform(ast, config)
  const components = Marcdoc.renderers.react(content, React)
  return <Page>{components}</Page>
}

export default Post
