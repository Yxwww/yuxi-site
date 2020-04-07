import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Page from '../../components/layouts/main'
import { LfviewExperience } from '../../src/contents'

const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)
const ExperienceSection = dynamic(() =>
  import('../../components/ExperienceSection'),
)
const ImageModal = dynamic(() => import('../../components/modals/ImageModal'))
const ImageGallery = dynamic(() => import('../../components/ImageGallery'))

export default function Steno3DProject() {
  const [modelOpened, setModelOpened] = useState(false)
  const [imageModelState, setImageModelState] = useState({ url: '', title: '' })
  function toggleModel() {
    setModelOpened(!modelOpened)
  }
  function onImageClicked({ url, title }) {
    setImageModelState({ url, title })
    toggleModel()
  }
  return (
    <Page>
      <div className="container">
        <h1>Steno3D(LeapFrog View)</h1>
        <div className="p-2 tablet:p-8 border-solid border-4 border-gray-600">
          <ExperienceSection experience={LfviewExperience} />
        </div>
        <a href="https://view.seequent.com">
          <img
            className="w-full tablet:max-w-5xl mx-auto rounded-lg tablet:max-w-5xl"
            src="/static/img/projects/seequent-eagle.png"
            alt="steno3d-img"
          />
        </a>
        <a href="https://view.seequent.com" className="block my-2">
          link to project
        </a>
        <div className="py-4">
          <ImageGallery
            items={[
              {
                url: '/static/img/projects/seequent-eagle-slides.png',
                title: 'Eagle Geometry with Data',
              },
              {
                url: '/static/img/projects/steno3d/lfview-leda.png',
                title: 'LEDA View',
              },
              {
                url: '/static/img/projects/steno3d/lfview-motion.gif',
                title: 'Motion Control',
              },
              {
                url: '/static/img/projects/steno3d/steno3d-landing.png',
                title: 'landing page',
              },
            ]}
            imageStyle={{ minHeight: 230, minWidth: 300 }}
            onClick={onImageClicked}
          />
          <ImageModal
            url={imageModelState.url}
            title={imageModelState.title}
            style={{ minHeight: 230, minWidth: 300 }}
            isOpened={modelOpened}
            onCloseClicked={toggleModel}
          />

          <UnderConstruction />
        </div>
      </div>
    </Page>
  )
}
