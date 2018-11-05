import React from 'react'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../layouts/main'

function isLabelOurCurrentHighlight(label, highlight) {
  if (highlight === '/' && label === HOME_LABEL) {
    return true
  }
  return label === removeFirstChar(highlight)
}

export default function Nav(props) {
  const { items, highlight } = props
  const itemDivs = items.map(({ label, uid, url }) => (
    <div
      key={uid}
      className={`nav-items ${
        isLabelOurCurrentHighlight(label, highlight) ? 'selected' : ''
      }`}
    >
      <a href={url}>{label}</a>
    </div>
  ))
  return (
    <div className="nav">
      <div className="container nav-container">{itemDivs}</div>
    </div>
  )
}
