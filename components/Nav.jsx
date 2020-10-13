import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../constants'

function isLabelOurCurrentHighlight(label, highlight) {
  if (highlight === '/' && label === HOME_LABEL) {
    return true
  }
  return removeFirstChar(highlight).startsWith(label)
}

function Nav({ items }) {
  const { asPath } = useRouter()
  const itemDivs = items.map(({ label, uid, url }) => (
    <div
      key={uid}
      className={`print:hidden mx-1 text-base nav-items capitalize inline-block border-b-2 border-transparent border-solid hover:border-teal-600 ${
        isLabelOurCurrentHighlight(label, asPath)
          ? 'text-indigo-600 border-teal-500'
          : ''
      }`}
    >
      <Link href={url}>
        <a>{label}</a>
      </Link>
    </div>
  ))
  return <nav className="z-10 my-4">{itemDivs}</nav>
}

export default Nav
