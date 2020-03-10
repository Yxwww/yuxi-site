import React from 'react'
import dynamic from 'next/dynamic'
import { map } from 'ramda'
import { generate } from 'shortid'
import Head from '../Head'
import { HOME_LABEL } from '../../constants'

const createNavItems = map(([url, label]) => ({
  uid: generate(),
  url,
  label,
}))

const Nav = dynamic(() => import('../Nav'))
const navItemData = [
  ['/', HOME_LABEL],
  ['/resume', 'resume'],
  ['/projects', 'projects'],
  ['/blogs', 'blog'],
]

const page = ({ children, fonts = ['Inter'] }) => {
  const navItems = createNavItems(navItemData)
  return (
    <div id="app" className="relative w-full">
      <Head fonts={fonts} />
      <Nav items={navItems} />
      <div className="relative container pt-16 print:pt-2 px-1 table:px-2">
        {children}
      </div>
    </div>
  )
}

export default page
