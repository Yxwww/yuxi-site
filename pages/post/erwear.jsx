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
        <p>ERWear is my undergrad research project.</p>
        <h3>Contributions</h3>

        <ExperienceSection experience={ERWearExperience} />
        <ul>
          <li>Design and developed Emergency operation center UI and UX</li>
          <li>Designed project Poster and attend student conference</li>
        </ul>
        <img
          className="w-full tablet:max-w-2xl"
          src="/static/img/projects/erwear-map-bak.png"
          alt="earwear-eoc-center"
        />
        <UnderConstruction />
      </div>
    </Page>
  )
}
