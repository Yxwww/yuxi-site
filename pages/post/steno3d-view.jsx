import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)

export default function Steno3DProject() {
  return (
    <Page>
      <div className="container">
        <h1>Steno3D(LeapFrog View)</h1>
        <div className="py-4">
          <a href="https://view.seequent.com">
            <img
              className="max-w-full rounded-lg tablet:max-w-5xl"
              src="/static/img/projects/seequent-eagle.png"
              alt="steno3d-img"
            />
          </a>
          <a href="https://view.seequent.com" className="block my-2">
            link to project
          </a>
          <UnderConstruction />
        </div>
      </div>
    </Page>
  )
}
