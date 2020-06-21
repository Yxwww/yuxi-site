import React from 'react'
import dynamic from 'next/dynamic'
import { Page } from '../../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)

export default function SoDProject() {
  return (
    <Page>
      <div className="container">
        <img
          className="w-full tablet:max-w-5xl mx-auto"
          src="/static/img/projects/sod-cropped.png"
          alt="sod-2d-visualizer"
        />
        <UnderConstruction />
      </div>
    </Page>
  )
}
