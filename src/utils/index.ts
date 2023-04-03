import { PostItem } from 'src/types'

export function getPostPath(post: PostItem): string {
  return post.filename.split('.')[0]
}
