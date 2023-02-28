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
  const shouldFill = fill && noneDefined([width, height])
  console.log({ shouldFill, width, height })
  return (
    <div
      className={`${inline && 'inline'} relative outline-none ${className}`}
      role={onClick && 'button'}
      onClick={onClick}
    >
      <NextImage
        ref={imageRef}
        className="object-cover"
        src={src}
        alt={alt}
        fill={shouldFill}
        width={width}
        height={height}
      />
    </div>
  )
}
