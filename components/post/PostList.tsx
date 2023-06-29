import { PostItemList } from 'src/types';
import { PostItem } from './PostItem';

function getMonth(date: string) {
  return new Date(date).getMonth();
}

export function PostList({ posts }: { posts: PostItemList }) {
  return (
    <div className="flex flex-col">
      {posts.map((post, i) => {
        return (
          <PostItem
            key={post.filename}
            item={post}
            isFirstPostOfMonth={
              i === 0 ||
              getMonth(posts[i - 1].frontmatter.published) !==
                getMonth(post.frontmatter.published)
            }
          />
        );
      })}
    </div>
  );
}
