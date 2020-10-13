import React, { useReducer, useState, useEffect } from 'react'

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
  const [hammer, ref] = useState()
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
      <img
        className={
          hammerSwingRight
            ? `${hammerClass} -rotate-45`
            : `${hammerClass} rotate-0`
        }
        ref={ref}
        src="/static/img/icons/hammer.svg"
        alt="hammer-icon"
      />
    </p>
  )
}
