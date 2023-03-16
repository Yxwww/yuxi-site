import { PostItem } from 'src/types'

export function PostItem({ item }: { item: PostItem }) {
  const { frontmatter } = item
  const { title, description, date } = frontmatter

  return (
    <div className="flex flex-row">
      <div className="divider divider-horizontal text-zinc-400 ml-0 items-start"></div>
      <div className="p-4">
        <div className="flex items-start justify-center text-sm pr-16 pt-[2px]">
          <time className="text-zinc-400">{new Date(date).toDateString()}</time>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col items-start max-w-xl">
          <div className="font-bold px-4">{title}</div>
          <div className="px-4 py-2 text-sm">{description}</div>
        </div>
      </div>
    </div>
  )
}
