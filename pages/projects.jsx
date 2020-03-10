import React, { useEffect, useState, useReducer } from 'react'
import Link from 'next/link'
import Page from '../components/layouts/main'

const PostLink = ({ id, children }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{children || <a>{id}</a>}</a>
    </Link>
  </li>
)
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

export default () => {
  const [hammer, ref] = useState()
  const [hammerSwingRight, dispatch] = useReducer(reducer, false)
  useEffect(() => {
    if (!hammer) {
      return () => {}
    }
    const id = setInterval(() => {
      dispatch({ type: 'toggle' })
    }, 2000)
    return () => {
      clearInterval(id)
    }
  }, [hammer])

  return (
    <Page>
      <div className="container relative screen-nav">
        <h1>Projects</h1>
        <div className="mt-8">
          <div className="my-4">
            <ul className="m-2">
              <PostLink id="sod">SoD Toolkit</PostLink>
              <PostLink id="steno3d-view">Steno3D (Leapfrog View)</PostLink>
            </ul>
          </div>
          <p>
            Under construction{' '}
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
          <div className="absolute bottom-0">
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/nikita-golubev"
              title="Nikita Golubev"
            >
              Nikita Golubev
            </a>{' '}
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
      </div>
    </Page>
  )
}
