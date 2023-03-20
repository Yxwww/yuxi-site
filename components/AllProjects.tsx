import React from 'react'
import Link from 'next/link'
import Image from './Image'

function PostLink({ id, imgUrl, title, description = '', techStack = [] }) {
  return (
    <div className="card bg-base-50 card-bordered dark:border-zinc-700 shadow-lg transition-shadow">
      <figure>
        <Image
          className="block w-full my-0 h-[200px]"
          src={imgUrl}
          alt={`${title}-img`}
          fill
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {techStack.map((skill) => {
            return (
              <div key={`${id}-${skill}`} className="badge badge-outline">
                {skill}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
// const PostLink = ({ id, imgUrl, title, description = '', techStack = [] }) => (
//   <div className="inline-block p-2 tablet:m-0 align-top">
//     <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl hover:bg-zinc-400 dark:hover:bg-zinc-800 transition-shadow duration-200">
//       <Link href={`/post/${id}`} as={`/post/${id}`}>
//         <Image
//           className="block w-full my-0 h-[200px]"
//           src={imgUrl}
//           alt={`${title}-img`}
//           fill
//         />
//       </Link>
//       <div className="p-2">
//         <Link href={`/post/${id}`} as={`/post/${id}`}>
//           <div className="font-medium text-xl py-2 font-bold">{title}</div>
//         </Link>
//         <p className=" text-base py-2 my-0">{description}</p>
//         <span className="">
//           {techStack.map((skill) => (
//             <span
//               key={`${id}-${skill}`}
//               className="inline-block rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2"
//             >
//               {skill}
//             </span>
//           ))}
//         </span>
//       </div>
//     </div>
//   </div>
// )

export default function AllProjects() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PostLink
        id="curvenote"
        imgUrl="/static/img/projects/curvenote.jpeg"
        title="Curvenote"
        description="Curvenote is a web application focued on revolutionizing technical writing. I worked on delivering innovative features and optimized architecture for efficient maintenance and functionality."
        techStack={['ProseMirror', 'React', 'Full Stack', 'Monorepo']}
      ></PostLink>

      <PostLink
        id="steno3d-view"
        imgUrl="/static/img/projects/seequent-eagle.png"
        title="Seequent View"
        description="Seequent View is a 3D web data visualization application. I proposed and implemented frontend stack revamp to improve architecture, user experience, and performance. I was also the core maintainer for the 3D data visualization library."
        techStack={['JS/TS', 'WebGL', 'Three', 'React', 'Redux', 'Svelte']}
      ></PostLink>

      <PostLink
        id="rdsdataviz"
        imgUrl="/static/img/projects/rdsviz.png"
        title="rds-dataviz"
        description="
            rds-dataviz is a 2D data visualization library for visualizing map-based data. My responsibility was to design and implement the library to satisfy the performance and versatility requirements.            "
        techStack={['d3', 'Data Visualization', 'Library Design']}
      ></PostLink>

      <PostLink
        id="erwear"
        imgUrl="/static/img/projects/erwear-map-bak.png"
        title="ERWear"
        description="
              ERWear is my undergraduate research project. My responsibility was to design a system leveraging glass and wrist-based wearable technology to enhance emergency responders' situational awareness.
            "
        techStack={['Wearable', 'Dashboard', 'Academic']}
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
