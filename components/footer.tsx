import Link from 'next/link'

export function Footer() {
  return (
    <footer className="footer print:hidden border-t pb-16 pt-10 lg:pl-12 sm:px-8 px-4 dark:bg-base-200 text-base-content flex gap-6 font-light">
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
    </footer>
  )
}
