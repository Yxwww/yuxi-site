import fs from 'fs';
import { Feed, FeedOptions } from 'feed';
import { getAllPosts } from '@/src/utils/serverside';
import { getPostPath } from '@/src/utils';
import { DOMAIN } from '@/constants';
import { mdRenderToHtml } from '@/markdoc/config';
const site_url = DOMAIN;

export default async function generateRssFeed() {
  const allPosts = await getAllPosts();

  const feedOptions: FeedOptions = {
    // ...
    title: "Yuxi's blogs",
    description: "Welcome to Yuxi's blog posts!",
    id: site_url,
    link: site_url,
    copyright: 'All rights reserved 2023, Yuxi Wang',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/rss.json`,
      atom: `${site_url}/atom.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  allPosts
    .filter((p) => !!p.frontmatter.published)
    .map((post) => {
      feed.addItem({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        link: `${DOMAIN}/post/${getPostPath(post)}`,
        date: new Date(post.frontmatter.published),
        content: mdRenderToHtml(post.content),
      });
    });

  feed.addCategory('Technologie');
  feed.addContributor({
    name: 'Yuxi Wang',
    email: 'yuxi.wang.dev@gmail.com',
    link: DOMAIN,
  });
  fs.writeFileSync('./public/rss.xml', feed.rss2());
  fs.writeFileSync('./public/rss.json', feed.json1());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
}
