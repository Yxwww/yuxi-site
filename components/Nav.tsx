import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../constants'
import { NavItem, NavItems } from './layouts/main'

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
  return (
    <div
      className={`print:hidden mx-1 text-base nav-items capitalize inline-block border-b-2 border-solid hover:border-teal-600 ${
        isLabelOurCurrentHighlight(item.label, pathname)
          ? 'text-indigo-600 border-teal-500'
          : 'border-transparent'
      }`}
    >
      <Link href={url}>{label}</Link>
    </div>
  )
}

function Nav({ items }: { items: NavItems }) {
  const { pathname } = useRouter()
  return (
    <nav className="z-10 my-4">
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
