import React, { useEffect, useState, useReducer } from 'react'
import Link from 'next/link'
import Page from '../components/layouts/main'

const PostLink = ({ id, imgUrl, title, description }) => (
  <div className="flex-1 flex-wrap">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link href="/post/[id]" as={`/post/${id}`}>
        <a>
          <img
            className="w-full"
            style={{ minHeight: 230 }}
            src={imgUrl}
            alt={`${title}-img`}
          />
        </a>
      </Link>
      <div className="px-6 py-4">
        <Link href="/post/[id]" as={`/post/${id}`}>
          <a>
            <div className="font-bold text-xl mb-2">{title}</div>
          </a>
        </Link>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  </div>
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
          <div className="flex">
            <PostLink
              id="steno3d-view"
              imgUrl="/static/img/projects/seequent-eagle.png"
              title="Steno3D (Leapfrog View)"
              description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              "
            ></PostLink>

            <PostLink
              id="sod"
              imgUrl="/static/img/projects/SoD-cropped.png"
              title="SoD Toolkit"
              description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              "
            ></PostLink>

            <PostLink
              id="erwear"
              imgUrl="/static/img/projects/erwear-map-bak.png"
              title="ERWear"
              description="
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              "
            ></PostLink>
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
        </div>
      </div>
    </Page>
  )
}
