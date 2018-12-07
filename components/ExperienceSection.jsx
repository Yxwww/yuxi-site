import React from 'react'
import { map, join } from 'ramda'

const generateRolesString = join(', ')

const createContributionList = map(data => (
  <li key={data.uid}>{data.contribution}</li>
))

export default props => {
  const {
    experience: {
      // thumbnails,
      description,
      contributions,
      product,
      company,
      uid,
      time,
      roles,
      projecturl,
    },
  } = props
  // const thumbnailsDivs = createThumbnailDivs(thumbnails)
  const contributionLists = createContributionList(contributions)
  const imgStyle = {
    maxHeight: '15px',
  }

  return (
    <div key={uid} className="project-card-container">
      <div className="project-card collapsed">
        {/* <div className="thumbnail-gallery">{thumbnailsDivs}</div> */}
        <div className="content">
          <div>
            <h3 className="text-left">
              {`${product} - `}
              <span className="captalized">{company}</span>
              <span className="project-url">
                {projecturl && (
                  <a
                    rel="noopener noreferrer"
                    href={projecturl}
                    target="_blank"
                  >
                    <img
                      style={imgStyle}
                      src="/static/img/icons/url.svg"
                      alt="url"
                    />
                  </a>
                )}
              </span>
            </h3>

            <div className="flex space-between flex-end flex-wrap-wrap">
              <div>
                <i className="text-left experience-time">{time}</i>
              </div>
              <div>
                <i className="text-left medium-weight experience-roles">
                  {generateRolesString(roles)}
                </i>
              </div>
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
}
