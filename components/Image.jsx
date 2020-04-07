import React from 'react'

export default function Image({ url, alt = '', style, onClick }) {
  return (
    <div onClick={onClick} role="button" tabIndex={0}>
      <img className="w-full" src={url} alt={alt} style={{ ...style }} />
    </div>
  )
}
