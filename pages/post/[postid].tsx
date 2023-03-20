// import fetch from 'isomorphic-unfetch'
import Markdoc, { Config } from '@markdoc/markdoc'
import React from 'react'
import path from 'path'
import yaml from 'js-yaml' // or 'toml', etc.
import { promises as fs } from 'fs'
import { Page } from '../../components/layouts/main'
import { heading } from '@/markdoc/schema/Heading'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'

import Prism from 'react-prism'

export function Fence({ children, language }) {
  return (
    <Prism key={language} component="pre" className={`language-${language}`}>
      {children}
    </Prism>
  )
}

const fence = {
  render: 'Fence',
  attributes: {
    language: {
      type: String,
    },
  },
}
const config: Config = {
  nodes: {
    heading,
    fence,
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
  const ast = Markdoc.parse(fileContents)
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
  const ast = Markdoc.parse(post.content)
  const content = Markdoc.transform(ast, config)
  const components = Markdoc.renderers.react(content, React, {
    components: {
      Fence,
    },
  })

  return (
    <Page>
      <div className="prose">{components}</div>
    </Page>
  )
}

export default Post
