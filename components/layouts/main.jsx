import React from 'react'
import dynamic from 'next/dynamic'
import { map } from 'ramda'
import { nanoid as generate } from 'nanoid'
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

export const Page = ({
  children = null,
  fonts = ['Inter'],
  className = '',
}) => {
  const navItems = createNavItems(navItemData)
  return (
    <div id="app" className="max-w-5xl mx-auto">
      <Head fonts={fonts} />
      <Nav items={navItems} />
      <div className={`container py-2 print:pt-2 px-1 table:px-2 ${className}`}>
        {children}
      </div>
    </div>
  )
}
