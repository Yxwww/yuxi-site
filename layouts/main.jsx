import React from 'react'
import dynamic from 'next/dynamic'
import { map } from 'ramda'
import { generate } from 'shortid'
import Head from '../components/Head'

const createNavItems = map(([url, label]) => ({
  uid: generate(),
  url,
  label,
}))

const Nav = dynamic(() => import('../components/Nav'))
export const HOME_LABEL = 'home'
const navItemData = [['/', HOME_LABEL], ['/portfolio', 'portfolio'], ['/blog', 'blog']]

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
