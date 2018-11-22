import React from 'react'
import { map, join } from 'ramda'
import '../sass/layout.scss'

const createContributionList = map(data => (
  <li key={data.uid}>{data.contribution}</li>
))
const createThumbnailDivs = map(data => (
  <div
    key={data.uid}
    className="thumbnail"
    style={{ backgroundImage: `url(${data.img})` }}
  />
))
const generateRolesString = join(', ')

const createExpereienceSections = map(exp => {
  const {
    // thumbnails,
    description,
    contributions,
    product,
    uid,
    time,
    roles,
    projecturl,
  } = exp
  // const thumbnailsDivs = createThumbnailDivs(thumbnails)
  const contributionLists = createContributionList(contributions)

  return (
    <div key={uid} className="project-card-container">
      <div className="project-card collapsed">
        {/* <div className="thumbnail-gallery">{thumbnailsDivs}</div> */}
        <div className="content">
          <div>
            <h3 className="text-left">
              {product}
              <span className="project-url">
                {projecturl && (
                  <a
                    rel="noopener noreferrer"
                    href={projecturl}
                    target="_blank"
                  >
                    <img src="/static/img/icons/url.svg" alt="url" />
                  </a>
                )}
              </span>
            </h3>
            <div className="flex space-between flex-end flex-wrap-wrap">
              <i className="text-left experience-time">{time}</i>
              <i className="text-left medium-weight experience-roles">
                {generateRolesString(roles)}
              </i>
            </div>
            <p>{description}</p>
          </div>
          <div className="contributions">
            <ul>{contributionLists}</ul>
          </div>
        </div>
      </div>
      <span className="right-bottom-corner" />
    </div>
  )
})

function ExperienceContent(props) {
  const { experience } = props
  const experienceSections = createExpereienceSections(experience)

  return <div className="project-container">{experienceSections}</div>
}

export default ExperienceContent
