import { promises as fs } from 'fs';
import Markdoc from '@markdoc/markdoc';
import yaml from 'js-yaml'; // or 'toml', etc.
import path from 'path';
import {
  FrontmatterParsed,
  FrontmatterSerialized,
  PostItem,
  PostItemList,
} from 'src/types';
import { T, always, cond, evolve, is } from 'ramda';

export async function getAllPosts(): Promise<PostItemList> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDirectory);

  const posts = (
    await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = await fs.readFile(filePath, 'utf8');

        // Generally you would parse/transform the contents
        // For example you can transform markdown to HTML here
        const ast = Markdoc.parse(fileContents);
        const frontmatter = ast.attributes.frontmatter
          ? yaml.load(ast.attributes.frontmatter)
          : {};

        return {
          filename,
          frontmatter: processFM(frontmatter),
          content: fileContents,
        } as PostItem;
      })
    )
  ).filter((p) => !!p.frontmatter.published);
  return posts;
}

function processDate(date: Date) {
  return date.toDateString();
}
const processPublished = cond([
  [is(Object), processDate],
  [T, always('')],
]);

const processFM = evolve({
  published: processPublished,
  updated: processDate,
});

export function processFrontmatter(frontmatter: FrontmatterParsed) {
  return processFM(frontmatter) as FrontmatterSerialized;
}
