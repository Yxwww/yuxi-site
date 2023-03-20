import { PostItemList } from 'src/types'
import { PostItem } from './PostItem'

export function PostList({ posts }: { posts: PostItemList }) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        return <PostItem item={post} key={post.filename} />
      })}
    </div>
  )
}
