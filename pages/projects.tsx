import React from 'react'
import { Page } from '../components/layouts/main'
import UnderConstruction from 'components/UnderConstruction'
import AllProjects from 'components/AllProjects'

export default function Projects() {
  return (
    <Page>
      <div className="container relative screen-nav">
        <div className="py-8 text-center">
          <h1>Projects</h1>
        </div>

        <AllProjects />
        <UnderConstruction />
      </div>
    </Page>
  )
}
