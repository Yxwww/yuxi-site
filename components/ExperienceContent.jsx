import React from 'react'
import { map } from 'ramda'
import '../sass/layout.scss'
import ExperienceSection from './ExperienceSection'

const createThumbnailDivs = map(data => (
  <div
    key={data.uid}
    className="thumbnail"
    style={{ backgroundImage: `url(${data.img})` }}
  />
))

const createExpereienceSections = map(exp => (
  <ExperienceSection experience={exp} />
))

function ExperienceContent(props) {
  const { experience } = props
  const experienceSections = createExpereienceSections(experience)

  return <div className="project-container">{experienceSections}</div>
}

export default ExperienceContent
