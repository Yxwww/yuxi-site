import React from 'react'
import { withRouter } from 'next/router'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../constants'

function isLabelOurCurrentHighlight(label, highlight) {
  if (highlight === '/' && label === HOME_LABEL) {
    return true
  }
  return removeFirstChar(highlight).startsWith(label)
}

function Nav(props) {
  const {
    items,
    router: { asPath },
  } = props
  const itemDivs = items.map(({ label, uid, url }) => (
    <div
      key={uid}
      className={`print:hidden m-3 text-lg nav-items capitalize inline-block text-gray-800 m-1 first:ml-0 hover:text-indigo-800 border-b-2 border-transparent border-solid hover:border-gray-500 ${
        isLabelOurCurrentHighlight(label, asPath)
          ? 'text-indigo-600 border-gray-700'
          : ''
      }`}
    >
      <a href={url}>{label}</a>
    </div>
  ))
  return <nav className="container z-10 mx-1 tablet:mx-4">{itemDivs}</nav>
}

const NavWithRouter = withRouter(Nav)
export default NavWithRouter
