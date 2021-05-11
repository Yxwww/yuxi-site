import { MDXRemote } from 'next-mdx-remote'
import { getFiles, getFileBySlug } from '@/lib/mdx'
import { Page } from '@/components/layouts/main'

function Content({ source, title }) {
  return (
    <div className="prose lg:prose-xl">
      <h2>{title}</h2>
      <MDXRemote {...source} />
    </div>
  )
}

function Post({ source, title = '' }) {
  return (
    <Page>
      <Content source={source} title={title} />
    </Page>
  )
}

export async function getStaticProps({ params: { postid } }) {
  // MDX text - can be from a local file, database, anywhere
  const { mdxSource, frontMatter } = await getFileBySlug('blog', postid)
  // return { props: { source: mdxSource } }
  return { props: { source: mdxSource, frontMatter, } }
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');
  return {
    paths: posts.map((p) => {
      return {
        params: {
          postid: p.replace(/\.mdx/, '')
        },
      }
    }),
    fallback: false
  }
}

export default Post
