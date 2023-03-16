import { PostItemList as PostItemListType } from 'src/types'
import { PostItem } from './PostItem'

const PROTO_LIST_DATA: PostItemListType = [
  {
    filename: 'test-1',
    frontmatter: {
      title: 'title 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis tincidunt orci, ut pretium metus posuere in. ',
      date: '2022-04-01',
    },
    content: 'test content',
  },
  {
    filename: 'test-2',
    frontmatter: {
      title: 'title 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ipsum vel elit tincidunt malesuada. Proin porta eros non velit gravida, vel aliquam magna feugiat. Donec sit amet nibh a mi eleifend vulputate. Nulla facilisi. Aenean consequat nisl non ante molestie, vel convallis enim faucibus. ',
      date: '2022-04-01',
    },
    content: 'test content',
  },
]

export function PostList({ posts }: { posts: PostItemList }) {
  return (
    <div className="flex flex-col">
      {PROTO_LIST_DATA.map((post) => {
        return <PostItem item={post} key={post.filename} />
      })}
    </div>
  )
}
