import React from 'react'
import { noop } from '../src/utils/components'
import Image from './Image'

export default function ImageGallery({
  items = [],
  onClick = noop as (arg: any) => void,
}) {
  const images = items.map(({ url, title }) => {
    return (
      <Image
        src={url}
        alt={title}
        className="h-[230px]"
        fill
        onClick={() => onClick({ url, title })}
        key={url}
      />
    )
  })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images}
    </div>
  )
}
