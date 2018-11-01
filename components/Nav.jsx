import React from 'react'

export default function Nav(props) {
  const {items} = props
  const itemDivs = items.map(({label, url}) => (
    <div className="nav-items">
      <a href={url}>{label}</a>
    </div>
  ))
  return (
    <div className="nav">
      <div className="container nav-container">{itemDivs}</div>
    </div>
  )
}
