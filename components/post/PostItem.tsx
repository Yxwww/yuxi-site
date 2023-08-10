import Link from 'next/link';
import { PostItem } from '@/src/types';
import dayjs from 'dayjs';
import { getPostPath } from '@/src/utils';
import Hammer from '../icons/Hammer';
import ReadingTime from '../ReadingTime';

export function PostItem({
  item,
  isFirstPostOfMonth: isFirst,
}: {
  item: PostItem;
  isFirstPostOfMonth?: boolean;
}) {
  const { frontmatter, filename, readingTime } = item;
  const { title, description, published, tags, incomplete } = frontmatter;

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="divider divider-vertical sm:divider-horizontal text-zinc-400 mb-0 sm:ml-0 items-start shrink-0"></div>
      <div className="p-4">
        <div className="flex items-start justify-start sm:justify-center lg:w-40 sm:w-20 sm:pt-6 pt-2 min-w-">
          {isFirst && (
            <time className="text-md font-mono">
              {dayjs(published).format('YYYY, MMM')}
            </time>
          )}
        </div>
      </div>
      <div className="hover:bg-base-100 transition-colors cursor-pointer grow flex">
        <Link href={`/post/${getPostPath(item)}`} className="flex grow">
          <div className="flex flex-col items-start sm:py-8 py-2 sm:px-6 px-4 sm:border-b grow font-mono">
            <div className="font-bold text-lg">{title}</div>
            <p className="m-0 pt-2  font-light text-sm text-slate-500 dark:text-slate-400 flex items-center">
              <ReadingTime readingTime={readingTime} />
              {incomplete && (
                <Hammer className="w-5 h-5" title="work in progress" />
              )}
            </p>
            <div className="pt-4 sm:pb-4 pb-2 font-light text-sm">
              {description}
            </div>
            {tags && (
              <div className="font-light">
                {tags.split(',').map((t) => (
                  <span className="mr-1 badge badge-ghost py-1 text-sm" key={t}>
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
