import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Page from '../../components/layouts/main'
import { ERWearExperience } from '../../src/contents'

const ExperienceSection = dynamic(() =>
  import('../../components/ExperienceSection'),
)
const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)
const Image = dynamic(() => import('../../components/Image'))
const ImageModal = dynamic(() => import('../../components/modals/ImageModal'))

export default function SoDProject() {
  const [modelOpened, setModelOpened] = useState(false)
  function toggleModel() {
    setModelOpened(!modelOpened)
  }
  return (
    <Page>
      <div className="container">
        <h1 className="my-4">ERWear</h1>
        <div className="p-2 tablet:p-8 border-solid border-4 border-gray-600">
          <ExperienceSection experience={ERWearExperience} />
        </div>
        <div className="my-4">
          <ImageModal
            url="/static/img/projects/erwear-map-bak.png"
            title="earwear-eoc-center-img"
            style={{ minHeight: 230, minWidth: 300 }}
            isOpened={modelOpened}
            onCloseClicked={toggleModel}
          />
          <Image
            url="/static/img/projects/erwear-map-bak.png"
            title="earwear-eoc-center-img"
            style={{ minHeight: 230, minWidth: 300 }}
            onClick={toggleModel}
          />
        </div>

        <UnderConstruction />
      </div>
    </Page>
  )
}
