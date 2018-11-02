import React from 'react'

export default function Nav(props) {
  const {items} = props
  const itemDivs = items.map(({label, uid, url}) => (
    <div key={uid} className="nav-items">
      <a href={url}>{label}</a>
    </div>
  ))
  return (
    <div className="nav">
      <div className="container nav-container">{itemDivs}</div>
    </div>
  )
}
