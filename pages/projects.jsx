import React from 'react'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../components/UnderConstruction'),
)
const AllProjects = dynamic(() => import('../components/AllProjects'))

export default function Projects() {
  return (
    <Page>
      <div className="container relative screen-nav">
        <div className="py-8 text-center">
          <h1>Projects</h1>
          <div className="mt-8">
            I am passionate about solving problems in a simple, performant and
            sophisticated way.{' '}
          </div>
        </div>

        <AllProjects />
        <UnderConstruction />
      </div>
    </Page>
  )
}
