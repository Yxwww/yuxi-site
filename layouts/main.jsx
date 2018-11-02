import dynamic from 'next/dynamic'
import {map, objOf} from 'ramda'
import {generate} from 'shortid'

const createNavItems = map(([url, label]) => ({
  uid: generate(),
  url,
  label,
}))

const Nav = dynamic(
  () => import('../components/Nav'),
)

export default ({children}) => {
  const navItems = createNavItems([['/', 'home'], ['/portfolio', 'portfolio']])
  return (
    <div id="app">
      <Nav items={navItems} />
      {children}
    </div>
  )
}
