import React from 'react'

export default function Nav(props) {
  const {items} = props
  const itemDivs = items.map(({label, url}) => <a href={url}>{label}</a>)
  return <div>{itemDivs}</div>
}
