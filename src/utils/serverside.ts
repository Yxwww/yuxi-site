import { promises as fs } from 'fs'
import Markdoc from '@markdoc/markdoc'
import yaml from 'js-yaml' // or 'toml', etc.
import path from 'path'
import { PostItemList } from 'src/types'

export async function getAllPosts(): Promise<PostItemList> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')

      // Generally you would parse/transform the contents
      // For example you can transform markdown to HTML here
      const ast = Markdoc.parse(fileContents)
      const frontmatter = ast.attributes.frontmatter
        ? yaml.load(ast.attributes.frontmatter)
        : {}

      const { title, description, published, date } = frontmatter;

      return {
        filename,
        frontmatter: { title, description, published: published?.toString() || date?.toString() },
        content: fileContents,
      }
    })
  )
  return posts
}
