import Link from 'next/link';
import RssIcon from '@heroicons/react/24/solid/RssIcon';

export function Footer() {
  return (
    <footer className="footer print:hidden border-t pb-16 pt-10 lg:px-12 sm:px-8 px-4 dark:bg-base-200 text-base-content font-light flex justify-between">
      <div className="inline flex gap-6 ">
        <Link href="/" className="hover:text-primary-focus">
          About
        </Link>
        <Link href="/projects" className="hover:text-primary-focus">
          Projects
        </Link>
        <Link href="/resume" className="hover:text-primary-focus">
          Resume
        </Link>
        <Link href="/blogs" className="hover:text-primary-focus">
          Blogs
        </Link>
      </div>
      <Link href="/rss.xml" className="hover:text-primary-focus">
        <RssIcon className="w-8 h-8" />
      </Link>
    </footer>
  );
}
