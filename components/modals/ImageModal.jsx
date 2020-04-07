import React from 'react'
import dynamic from 'next/dynamic'
import { titleToAlt, noop } from '../../src/utils/components'

const Modal = dynamic(() => import('./Modal'))
const Image = dynamic(() => import('../Image'))

export default function ImageModal({
  url,
  title,
  alt = titleToAlt(title),
  style,
  description = '',
  isOpened = false,
  onCloseClicked = noop,
}) {
  return (
    <Modal title={title} isOpened={isOpened} onCloseClicked={onCloseClicked}>
      <Image url={url} alt={alt} style={style} />
      {description && <div>Im the children!</div>}
    </Modal>
  )
}
