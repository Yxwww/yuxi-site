import React from 'react'
import { Page } from '../components/layouts/main'
import AllProjects from 'components/AllProjects'

export default function Projects() {
  return (
    <Page className="mx-auto max-w-2xl lg:max-w-5xl">
      <h1>Projects</h1>
      <p className="pb-4 pt-2 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        ipsum vel elit tincidunt malesuada. Proin porta eros non velit gravida,
        vel aliquam magna feugiat.
      </p>

      <AllProjects />
    </Page>
  )
}
