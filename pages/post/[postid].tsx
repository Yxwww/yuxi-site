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
import { Fence } from '@/components/markdoc/Fence'
import { fence } from '@/markdoc/schema/Fence'
import Head from 'next/head'
import Link from 'next/link'
import { InferGetStaticPropsType } from 'next'
import { FrontmatterSerialized } from 'src/types'
import { AUTHOR_NAME, PROFILE_IMAGE_URL } from 'src/contents/constants'
import dayjs from 'dayjs'


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
    params: { postid: name.split('.')[0], name },
  }))

  return {
    paths,
    fallback: false,
  }
}

const postsDirectory = path.join(process.cwd(), 'posts')

interface PostPagePropType {
  frontmatter: FrontmatterSerialized
  content: string
}

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
        frontmatter: { ...frontmatter, published: frontmatter.published.toString(), updated: frontmatter.updated.toString(), },
        content: fileContents,
      } as PostPagePropType,
    },
  }
}

function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  const ast = Markdoc.parse(post.content)
  const content = Markdoc.transform(ast, config)
  const components = Markdoc.renderers.react(content, React, {
    components: {
      Fence,
    },
  })

  const {
    title, description
  } = post.frontmatter;

  return (
    <Page>
      <Head>
        <title>{`${title} |  Yuxi's Blog`}</title>
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={PROFILE_IMAGE_URL}
        />
      </Head>
      <div className="text-sm breadcrumbs pb-4 sm:pb-8">
        <ul>
          <li>
            <Link href="/blogs" className="link link-hover">
              Blogs
            </Link>
          </li>
          <li>{title}</li>
        </ul>
      </div>
      <article className={`font-article prose prose-slate mx-auto max-w-2xl lg:max-w-5xl md:prose-lg dark:prose-invert`}>
        <>
          <h1>{post.frontmatter.title}</h1>
          <div className="flex justify-between text-md text-slate-500 dark:text-slate-400 sm:mb-8 mb-4">
            <time>Published: {dayjs(post.frontmatter.published).format('MMM DD, YYYY')}</time>
            <span className="italic">written by: {AUTHOR_NAME}</span>
          </div>

        </>

        {components}
      </article>
    </Page>
  )
}

export default Post
