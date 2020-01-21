import React from 'react'
import dynamic from 'next/dynamic'
import { map } from 'ramda'
import { generate } from 'shortid'
import Head from '../components/Head'
import { HOME_LABEL } from '../constants'

const createNavItems = map(([url, label]) => ({
  uid: generate(),
  url,
  label,
}))

const Nav = dynamic(() => import('../components/Nav'))
const navItemData = [
  ['/', HOME_LABEL],
  ['/portfolio', 'portfolio'],
  ['/blogs', 'blog'],
]

const page = ({ children }) => {
  const navItems = createNavItems(navItemData)
  return (
    <div id="app">
      <Head />
      <Nav items={navItems} />
      {children}
    </div>
  )
}

export default page
