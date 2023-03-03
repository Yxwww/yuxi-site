import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../constants'
import { NavItem, NavItems } from './heading/Heading'

function isLabelOurCurrentHighlight(label: string, highlight: string) {
  if (highlight === '/' && label === HOME_LABEL) {
    return true
  }
  return removeFirstChar(highlight).startsWith(label)
}

function NavItemComponent({
  item,
  pathname,
}: {
  item: NavItem
  pathname: string
}) {
  const { url, label } = item
  const isHighlighted = isLabelOurCurrentHighlight(item.label, pathname)
  return (
    <div className={`text-base capitalize inline-block`}>
      <Link
        className={`relative text-zinc-800 dark:text-zinc-50 py-4 px-4  ${
          isHighlighted &&
          'text-indigo-600 hover:text-indigo:500 dark:text-indigo-400'
        }`}
        href={url}
      >
        {label}
        <span
          className={`${
            isHighlighted &&
            'absolute inset-x-1 -bottom-px h-px bg-indigo-600 dark:bg-indigo-400'
          }`}
        ></span>
      </Link>
    </div>
  )
}

function Nav({ items }: { items: NavItems }) {
  const { pathname } = useRouter()
  return (
    <nav className="print:hidden z-10 py-4 max-w-md pt-6">
      {items.map((item) => {
        return (
          <NavItemComponent
            key={`nav-item-id-${item.url}`}
            item={item}
            pathname={pathname}
          />
        )
      })}
    </nav>
  )
}

export default Nav
