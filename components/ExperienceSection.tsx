import Link from 'next/link'
import React from 'react'
import { map, join, all } from 'ramda'
import { nanoid as generate } from 'nanoid'

// TODO: all generate uid stuff going on here is messy

const generateRolesString = join(', ')

const createContributionList = map((data: any) => (
  <li className="my-1" key={data.uid}>
    {data.contribution}
  </li>
))
// const NUMBER_OF_CONTRIBUTION_TOSHOW_ON_LOAD = 3
const toArrayOfP = map((o: any) => <p key={generate()}>{o}</p>)
function renderDescription(description: string[]) {
  if (Array.isArray(description)) {
    return toArrayOfP(description)
  }
  return <p>{description}</p>
}

export default function ExperienceSection(props) {
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
      linkTitle,
    },
  } = props
  // const [showMore, setShowMore] = useState(false)
  // const thumbnailsDivs = createThumbnailDivs(thumbnails)
  const contributionLists = createContributionList(contributions)

  const CompanyInfo = (
    <>
      {all((v: string) => !!v && v.length > 0)([company, product]) && ' - '}
      <span className="captalize">{company}</span>
    </>
  )
  return (
    <div className="py-2 tablet:py-4 relative" key={uid}>
      {/* <div className="thumbnail-gallery">{thumbnailsDivs}</div> */}
      <div>
        {linkTitle ? (
          <Link href={projecturl}>
            <a rel="noopener noreferrer">
              <h3 className="my-2 text-left">
                {`${product}`}
                {CompanyInfo}
              </h3>
            </a>
          </Link>
        ) : (
          <h3 className="my-2 text-left">
            {`${product}`}
            {CompanyInfo}
          </h3>
        )}

        <div className="flex justify-between align-end my-3">
          <div>
            <i className="text-left experience-time">{time}</i>
          </div>
          <div>
            <i className="text-left experience-roles">
              {generateRolesString(roles)}
            </i>
          </div>
        </div>
        {renderDescription(description)}
      </div>
      <div className="px-2 tablet:px-4">
        <ul className="px-4 list-disc">{contributionLists}</ul>
        {/* {showMore && <ul>{hiddenContributions}</ul>}
            {contributions.length > NUMBER_OF_CONTRIBUTION_TOSHOW_ON_LOAD ? (
              <button
                type="button"
                onClick={() => {
                  setShowMore(!showMore)
                }}
              >
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            ) : (
              <></>
            )} */}
      </div>
      <span className="right-bottom-corner" />
    </div>
  )
}
