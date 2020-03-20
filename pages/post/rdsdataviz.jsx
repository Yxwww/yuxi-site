import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)

export default function SoDProject() {
  return (
    <Page>
      <div className="container">
        <h1>rds-dataviz</h1>
        <img
          className="w-full tablet:max-w-5xl mx-auto"
          src="/static/img/projects/rdsviz.png"
          alt="earwear-eoc-center"
        />
        <UnderConstruction />
      </div>
    </Page>
  )
}
