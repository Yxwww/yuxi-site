import { RssIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function RssFeedBtn() {
  return (
    <Link href="/rss.xml">
      <RssIcon className="w-8 h-8" />
    </Link>
  );
}
