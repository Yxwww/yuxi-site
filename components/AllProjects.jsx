import React from 'react'
import Link from 'next/link'

const PostLink = ({ id, imgUrl, title, description, techStack }) => (
  <div className="inline-block m-2 tablet:m-0 align-top">
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <Link href={`/post/${id}`} as={`/post/${id}`}>
        <img
          className="w-full object-contain my-0"
          style={{ minHeight: 230, minWidth: 300 }}
          src={imgUrl}
          alt={`${title}-img`}
        />
      </Link>
      <div className="px-6 pt-0 pb-4 bg-white">
        <Link href={`/post/${id}`} as={`/post/${id}`}>
          <div className="font-medium text-xl py-2 font-bold">{title}</div>
        </Link>
        <p className="text-gray-700 text-base py-2 my-0">{description}</p>
        <span className="text-gray-600">
          {techStack.map(skill => (
            <span
              key={`${id}-${skill}`}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {skill}
            </span>
          ))}
        </span>
      </div>
    </div>
  </div>
)

export default function AllProjects() {
  return (
    <div className="max-w-6xl flex flex-wrap justify-center">
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
  )
}
