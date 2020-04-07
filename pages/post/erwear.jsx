import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../../components/layouts/main'
import { ERWearExperience } from '../../src/contents'

const ExperienceSection = dynamic(() =>
  import('../../components/ExperienceSection'),
)
const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)

export default function SoDProject() {
  return (
    <Page>
      <div className="container">
        <h1 className="my-4">ERWear</h1>
        <div className="p-2 tablet:p-8 border-solid border-4 border-gray-600">
          <ExperienceSection experience={ERWearExperience} />
        </div>
        <div className="my-4">
          <img
            className="w-full tablet:max-w-2xl"
            src="/static/img/projects/erwear-map-bak.png"
            alt="earwear-eoc-center"
          />
        </div>

        <UnderConstruction />
      </div>
    </Page>
  )
}
