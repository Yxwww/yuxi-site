import React from 'react'
import {map} from 'ramda'

const createContributionList = map(data => (
  <li key={data.uid}>{data.contribution}</li>
))
const createThumbnailDivs = map(data => (
  <div
    key={data.uid}
    className="thumbnail"
    style={{backgroundImage: `url(${data.img})`}}
  />
))

function ExperienceContent(props) {
  const {experience} = props
  const experienceSections = experience.map((exp) => {
    const {thumbnails, description, contributions, product, uid} = exp
    const thumbnailsDivs = createThumbnailDivs(thumbnails)
    const contributionLists = createContributionList(contributions)

    return (
      <div key={uid} className="project-card collapsed">
        <div className="thumbnail-gallery">{thumbnailsDivs}</div>
        <div className="content">
          <div>
            <h3 className="text-center">{product}</h3>
            <p>{description}</p>
          </div>
          <div className="contributions">
            <ul>{contributionLists}</ul>
          </div>
        </div>
      </div>
    )
  })

  return <div className="container">{experienceSections}</div>
}

export default ExperienceContent
