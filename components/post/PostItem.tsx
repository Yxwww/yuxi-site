import Link from 'next/link'
import { PostItem } from 'src/types'
import { getPostPath } from 'src/utils'

export function PostItem({ item }: { item: PostItem }) {
  const { frontmatter, filename } = item
  const { title, description, date } = frontmatter

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="divider divider-vertical sm:divider-horizontal text-zinc-400 mb-0 sm:ml-0 items-start shrink-0"></div>
      <div className="p-4">
        <div className="flex items-start justify-start sm:justify-center sm:w-40 text-sm pr-16 pt-[2px] min-w-">
          <time className="text-zinc-400">
            {new Date(date).toDateString()}
          </time>
        </div>
      </div>
      <div className="p-4 hover:bg-base-100 transition-colors cursor-pointer grow max-w-48">
        <Link href={`/post/${getPostPath(item)}`}>
          <div className="flex flex-col items-start max-w-xl">
            <div className="font-bold px-4">{title}</div>
            <div className="px-4 py-2 text-sm">{description}</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
