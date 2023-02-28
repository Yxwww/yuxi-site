import React from 'react'
import { map } from 'ramda'
import Head from '../Head'
import { HOME_LABEL } from '../../constants'
import Nav from '@/components/Nav'

export interface NavItem {
  url: string
  label: string
}
export type NavItems = ReadonlyArray<NavItem>

const createNavItems: (args: [string, string][]) => NavItems = map(
  ([url, label]) => ({
    url,
    label,
  })
)

const NAV_ITEMS_TUPLES: [string, string][] = [
  ['/', HOME_LABEL],
  ['/resume', 'resume'],
  ['/projects', 'projects'],
  ['/blogs', 'blog'],
]
const NAV_ITEMS: ReadonlyArray<NavItem> = createNavItems(NAV_ITEMS_TUPLES)

const DEFAULT_FONTS = ['Inter']
export const Page = ({
  children = null,
  fonts = DEFAULT_FONTS,
  className = '',
}) => {
  return (
    <div id="app" className="max-w-5xl mx-auto">
      <Head fonts={fonts} />
      <Nav items={NAV_ITEMS} />
      <div className={`container py-2 print:pt-2 px-1 table:px-2 ${className}`}>
        {children}
      </div>
    </div>
  )
}
