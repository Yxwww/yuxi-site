import path from 'path'
import fs from 'fs'
// import matter from 'gray-matter'
// import readingTime from 'reading-time'
// import renderToString from 'next-mdx-remote/render-to-string'

const root = process.cwd()

export async function getFile(type) {
  return fs.readFileSync(path.join(root, 'data', type), 'utf8')
}

// export async function getFileBySlug(type, slug) {
//   const source = slug ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8') : fs.readFileSync(path.join(root, 'data', type, `${type}.mdx`), 'utf8');
//   const { data, context } = matter(source);
//   // const mdxSource = await renderToString(context);
//   return {
//     mdxSource,
//     frontMatter: {
//       wordCount: context.split(/\s+/gu).length,
//       readingTime: readingTime(context),
//       slug: slug || null,
//       ...data,
//     }
//   }
// }
