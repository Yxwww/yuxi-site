import React, { Ref } from 'react'
import NextImage from 'next/image'
import { noneDefined } from 'utils'

export default function Image({
  inline,
  src,
  imageRef,
  onClick,
  alt = '',
  className,
  width,
  height,
  fill,
}: {
  fill?: boolean
  src: any
  alt?: string
  className?: string
  width?: number
  height?: number
  imageRef?: Ref<HTMLImageElement>
  onClick?: () => void
  inline?: boolean
}) {
  return (
    <div
      className={`${
        inline && 'inline'
      } relative outline-none w-4 h-4 ${className}`}
      role="button"
      onClick={onClick}
    >
      <NextImage
        ref={imageRef}
        className="object-cover"
        src={src}
        alt={alt}
        fill={fill && noneDefined([width, height])}
        width={width}
        height={height}
      />
    </div>
  )
}
