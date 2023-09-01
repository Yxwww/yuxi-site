import fs from 'fs';
import RSS from 'rss';
import { getAllPosts } from '@/src/utils/serverside';
import { getPostPath } from '@/src/utils';
import { DOMAIN } from '@/constants';
const site_url = DOMAIN;

export default async function generateRssFeed() {
  const allPosts = await getAllPosts();

  const feedOptions = {
    // ...
    title: "Yuxi's blogs",
    description: "Welcome to Yuxi's blog posts!",
    id: site_url,
    link: site_url,
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new RSS(feedOptions);

  allPosts
    .filter((p) => !!p.frontmatter.published)
    .map((post) => {
      feed.item({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        url: `${DOMAIN}/post/${getPostPath(post)}`,
        date: post.frontmatter.published,
      });
    });

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
  // fs.writeFileSync('./public/rss.json', feed.json());
  // fs.writeFileSync('./public/atom.xml', feed.atom());
}
