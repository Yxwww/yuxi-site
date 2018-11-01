import dynamic from 'next/dynamic'
import {
    map,
    objOf,
} from 'ramda';

const createNavItems = map(function([url, label]) {
  return {
    url,
    label,
  }
})

const Nav = dynamic(() =>
  import('../components/Nav'),
)

export default ({children}) => {
  const navItems = createNavItems([['/', 'home'], ['/portfolio','portfolio']]);
  return (
  <div>
    <Nav items={navItems}/>
    {children}
  </div>
  )
}
