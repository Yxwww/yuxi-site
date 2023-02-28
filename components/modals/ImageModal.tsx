import React from 'react'
import { titleToAlt, noop } from '../../src/utils/components'
import Image from '../Image'
import Modal from './Modal'

export default function ImageModal({
  url,
  title,
  alt = titleToAlt(title),
  style = {},
  description = '',
  isOpened = false,
  onCloseClicked = noop,
}) {
  return (
    <Modal title={title} isOpened={isOpened} onCloseClicked={onCloseClicked}>
      <Image src={url} alt={alt} className="h-[230px]" />
      {description && <div>Im the children!</div>}
    </Modal>
  )
}
