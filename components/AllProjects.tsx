import React from 'react';
import Link from 'next/link';
import Image from './Image';

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
      <div className="card-body font-mono">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end">
          {techStack.map((skill) => {
            return (
              <div key={`${id}-${skill}`} className="badge badge-outline">
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <PostLink
        id="curvenote"
        imgUrl="/static/img/projects/curvenote.jpeg"
        title="Curvenote"
        description="Curvenote is a web application aim to revolutionize technical writing. I worked on delivering innovative features and optimized architecture for efficient maintenance and functionality."
        techStack={['Rich Text Editing', 'React', 'Full Stack', 'Monorepo']}
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
        techStack={['D3.js', 'Data Visualization', 'Library Design']}
      ></PostLink>

      <PostLink
        id="erwear"
        imgUrl="/static/img/projects/erwear-map-bak.png"
        title="ERWear"
        description="
              ERWear is my undergraduate research project. My responsibility was to design a system leveraging glass and wrist-based wearable technology to enhance emergency responders' situational awareness.
            "
        techStack={[
          'Wearable Programming',
          'Dashboard UI',
          'Academic Research',
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
          'Canvas API',
          'C#',
          'MS Kinect',
          'Google Tango',
        ]}
      ></PostLink>
    </div>
  );
}
