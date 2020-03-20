import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Page from '../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../components/UnderConstruction'),
)

const PostLink = ({ id, imgUrl, title, description }) => (
  <div className="m-2 tablet:m-0 flex-1">
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
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

export default () => {
  return (
    <Page>
      <div className="container relative screen-nav">
        <h1>Projects</h1>
        <div className="mt-8">
          <div className="flex flex-wrap ">
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
          <UnderConstruction />
        </div>
      </div>
    </Page>
  )
}
