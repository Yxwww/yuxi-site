import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../components/UnderConstruction'),
)

const PostLink = ({ id, imgUrl, title, description, techStack }) => (
  <div className="m-2 tablet:m-0 flex-1">
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <Link href={`/post/${id}`} as={`/post/${id}`}>
        <a>
          <img
            className="w-full object-contain my-0"
            style={{ minHeight: 230, minWidth: 300 }}
            src={imgUrl}
            alt={`${title}-img`}
          />
        </a>
      </Link>
      <div className="px-6 pt-0 pb-4">
        <Link href={`/post/${id}`} as={`/post/${id}`}>
          <a>
            <div className="font-medium text-xl mb-2">{title}</div>
          </a>
        </Link>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="text-gray-500 text-sm py-2 font-bold">
          <span className="inline">Skills</span>
          <span className="text-gray-600">
            {techStack.map(skill => (
              <span
                key={`${id}-${skill}`}
                className="inline-block rounded m-1 p-1 bg-indigo-400 text-white"
              >
                {skill}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default function Projects() {
  return (
    <Page>
      <div className="container relative screen-nav">
        <h1>Projects</h1>
        <div className="mt-8">
          I am passionate about solving problems in a simple, performant and
          sophisticated way.{' '}
        </div>
        <div className="flex flex-wrap">
          <PostLink
            id="steno3d-view"
            imgUrl="/static/img/projects/seequent-eagle.png"
            title="Seequent View"
            description="
            Seequent View is a 3D web data visualization application. My responsibility is to maintain 3D data visualization library. I also proposed and implemented frontend stack revamp to improve architecture, user experience, and performance. 
            "
            techStack={['JS/TS', 'WebGL', 'Three', 'React', 'Redux', 'Svelte']}
          ></PostLink>

          <PostLink
            id="lfr"
            imgUrl="/static/img/projects/lfr.png"
            title="LFR - Li's Food Revolution"
            description="
              LFR is a Vancouver based healthy meal delivery business. My responsibility is to ideate, design, plan, and implement a full-stack application to fit the business needs. 
            "
            techStack={[
              'nextjs',
              'tailwindcss',
              'Mongodb',
              'Project Planning',
              'UX Design',
            ]}
          ></PostLink>

          <PostLink
            id="rdsdataviz"
            imgUrl="/static/img/projects/rdsviz.png"
            title="rds-dataviz"
            description="
            rds-dataviz is a 2D data visualization library for visualizing map-based data. My responsibility was to design and implement the library to satisfy the performance and versatility requirements.            "
            techStack={['TS', 'd3', 'Library Management']}
          ></PostLink>

          <PostLink
            id="erwear"
            imgUrl="/static/img/projects/erwear-map-bak.png"
            title="ERWear"
            description="
              ERWear is my undergraduate research project. My responsibility was to design a system leveraging glass and wrist-based wearable technology to enhance emergency responders' situational awareness.
            "
            techStack={[
              'Wearable Programing',
              'Google Glass',
              'ReconJet',
              'Android Watch',
              'academic Research & writing',
            ]}
          ></PostLink>

          <PostLink
            id="sod"
            imgUrl="/static/img/projects/sod-cropped.png"
            title="SoD Toolkit"
            description="
            SoD is a web based toolkit for interactively prototyping and developing multi-sensor, multi-device environments. My primary responsibility was to build and maintain the node server and clients on various platforms and hardware.
            "
            techStack={[
              'Node',
              'Socket.IO',
              'JS',
              'C#',
              'MS Kinect',
              'Google Tango',
            ]}
          ></PostLink>
        </div>
        <UnderConstruction />
      </div>
    </Page>
  )
}
