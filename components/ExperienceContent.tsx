import React from 'react'
import { map } from 'ramda'
import ExperienceSection from './ExperienceSection'

// const createThumbnailDivs = map(data => (
//   <div
//     key={data.uid}
//     className="thumbnail"
//     style={{ backgroundImage: `url(${data.img})` }}
//   />
// ))

const createExpereienceSections = map(exp => (
  <ExperienceSection key={exp.uid} experience={exp} linkTitle />
))

function ExperienceContent(props) {
  const { experience } = props
  const experienceSections = createExpereienceSections(experience)

  return (
    <>
      <div className="mx-auto">{experienceSections}</div>
    </>
  )
}

export default ExperienceContent
