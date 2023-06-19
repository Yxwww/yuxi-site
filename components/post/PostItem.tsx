import Link from 'next/link';
import { PostItem } from '@/src/types';
import dayjs from 'dayjs';
import { getPostPath } from '@/src/utils';

export function PostItem({
  item,
  isFirstPostOfMonth: isFirst,
}: {
  item: PostItem;
  isFirstPostOfMonth?: boolean;
}) {
  const { frontmatter, filename, readingTime } = item;
  const { title, description, published, tags } = frontmatter;

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="divider divider-vertical sm:divider-horizontal text-zinc-400 mb-0 sm:ml-0 items-start shrink-0"></div>
      <div className="p-4">
        <div className="flex items-start justify-start sm:justify-center sm:w-40 text-sm pr-16 pt-[2px] min-w-">
          {isFirst && (
            <time className="text-zinc-400">
              {dayjs(published).format('YYYY, MMM')}
            </time>
          )}
        </div>
      </div>
      <div className="p-4 hover:bg-base-100 transition-colors cursor-pointer grow max-w-48">
        <Link href={`/post/${getPostPath(item)}`}>
          <div className="flex flex-col items-start max-w-xl px-4">
            <div className="font-bold">{title}</div>
            <p className="m-0 pt-2 text-sm font-mono text-base-content">
              🍜 {readingTime} mins
            </p>
            <div className="py-2 text-sm">{description}</div>
            {tags && (
              <div className="text-xs">
                {tags.split(',').map((t) => (
                  <span className="mr-1 badge badge-ghost" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
