import React, { useReducer, useState, useEffect, useCallback } from 'react'
import Image from './Image'
import HammerEmoji from '/public/static/img/icons/hammer.svg'

const hammerClass =
  'social-icon transform transition ease-in-out duration-200 hover:rotate-0'

function reducer(state = false, action) {
  switch (action.type) {
    case 'toggle':
      return !state
    default:
      throw new Error(`Unhandled actionType: ${action.type}`)
  }
}

export default function UnderConstruction() {
  const [hammer, setRef] = useState()
  const [hammerSwingRight, dispatch] = useReducer(reducer, false)
  useEffect(() => {
    if (!hammer) {
      return () => {}
    }
    const id = setInterval(() => {
      dispatch({ type: 'toggle' })
    }, 1500)
    return () => {
      clearInterval(id)
    }
  }, [hammer])
  return (
    <p>
      This page is under construction{' '}
      <Image
        inline
        className={
          hammerSwingRight
            ? `${hammerClass} -rotate-45`
            : `${hammerClass} rotate-0`
        }
        imageRef={useCallback((node) => {
          setRef(node)
        }, [])}
        src={HammerEmoji}
        alt="hammer-icon"
      />
    </p>
  )
}
