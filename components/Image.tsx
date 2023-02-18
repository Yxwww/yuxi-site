import React, { Ref } from 'react'
import NextImage from 'next/image'
import { noneDefined } from 'utils';

export default function Image({ src, imageRef, alt = '', className, width, height, fill }: {fill?: boolean, src: any; alt?: string; className?: string, width?: number, height?: number, imageRef?:Ref<HTMLImageElement>}) {
  return (
    <div className={`relative outline-none w-4 h-4 ${className}`} role="button" >
      <NextImage ref={imageRef} className="object-cover" src={src} alt={alt} fill={fill && noneDefined([width, height])} width={width} height={height} />
    </div>
  )
}
