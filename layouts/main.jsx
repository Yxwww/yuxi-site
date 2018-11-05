import React from 'react';
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { map } from 'ramda'
import { generate } from 'shortid'

const createNavItems = map(([url, label]) => ({
  uid: generate(),
  url,
  label,
}))

const Nav = dynamic(() => import('../components/Nav'))
export const HOME_LABEL = 'home';
const navItemData = [['/', HOME_LABEL], ['/portfolio', 'portfolio']];

const page = ({ children, router }) => {
  const navItems = createNavItems(navItemData)
  const { pathname } = router
  return (
    <div id="app">
      <Nav items={navItems} highlight={pathname} />
      {children}
    </div>
  )
}

export default withRouter(page)
