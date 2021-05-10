import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getFile } from '@/lib/mdx'

// import Test from '../components/test'

// const components = { Test }

export default function TestPage({ source }) {
  return (
    <div className="prose lg:prose-xl">
      <MDXRemote {...source} />
    </div>
  )
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = await getFile('test.mdx')
  console.log('source', source)
  const mdxSource = await serialize(source)
  return { props: { source: mdxSource } }
}
