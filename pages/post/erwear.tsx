import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Page } from '../../components/layouts/main';
import { createSodExperience } from '@/src/contents/sod';

const ExperienceSection = dynamic(
  () => import('../../components/ExperienceSection')
);
const UnderConstruction = dynamic(
  () => import('../../components/UnderConstruction')
);
const ImageModal = dynamic(() => import('../../components/modals/ImageModal'));
const ImageGallery = dynamic(() => import('../../components/ImageGallery'));

export default function SoDProject() {
  const [modelOpened, setModelOpened] = useState(false);
  const [imageModelState, setImageModelState] = useState({
    url: '',
    title: '',
  });
  function toggleModel() {
    setModelOpened(!modelOpened);
  }
  function onImageClicked({ url, title }) {
    setImageModelState({ url, title });
    toggleModel();
  }
  return (
    <Page>
      <div className="container">
        <h1 className="my-4">ERWear</h1>
        <div className="tablet:p-8">
          <ExperienceSection experience={createSodExperience()} />
        </div>
        <div className="my-4">
          <ImageGallery
            items={[
              {
                url: '/static/img/projects/watchUI.png',
                title: 'ERWear Watch UI',
              },
              {
                url: '/static/img/projects/erwear-map-bak.png',
                title: 'ERWear EoC Center Prototype',
              },
              {
                url: '/static/img/projects/GlassView.png',
                title: 'erwear google glass app',
              },
              {
                url: '/static/img/projects/erwear-poster-bak.png',
                title: 'earwear eoc center',
              },
            ]}
            onClick={onImageClicked}
          />
          <ImageModal
            url={imageModelState.url}
            title={imageModelState.title}
            isOpened={modelOpened}
            onCloseClicked={toggleModel}
          />
        </div>

        <UnderConstruction />
      </div>
    </Page>
  );
}
