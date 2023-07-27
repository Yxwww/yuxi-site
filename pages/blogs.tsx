import React from 'react';
import { Page } from '../components/layouts/main';
import { PostList } from '@/components/post/PostList';
import { PostItemList } from 'src/types';
import { getAllPosts } from 'src/utils/serverside';

export async function getStaticProps(): Promise<{
  props: { posts: PostItemList };
}> {
  const posts = await getAllPosts();
  const sorted = posts.slice().sort((a, b) => {
    return (
      new Date(b.frontmatter.published).getTime() -
      new Date(a.frontmatter.published).getTime()
    );
  });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: sorted,
    },
  };
}

export default function Blogs({ posts }) {
  return (
    <Page className="mx-auto max-w-2xl lg:max-w-5xl">
      <h1>Blogs</h1>
      <p className="py-4 max-w-2xl">
        Each blog is a living document, evolving over time. It begins as a
        Twitter-style summary, which is gradually refined and expanded. Stay
        tuned to witness and be a part of this exciting growth journey!
      </p>
      <PostList posts={posts} />
    </Page>
  );
}
