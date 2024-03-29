import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Page } from '../../components/layouts/main';
import { createLfviewExperience } from '../../src/contents/lfview';
import ImageModal from '../../components/modals/ImageModal';
import ImageGallery from '../../components/ImageGallery';

const UnderConstruction = dynamic(
  () => import('../../components/UnderConstruction')
);
const ExperienceSection = dynamic(
  () => import('../../components/ExperienceSection')
);

export default function Steno3DProject() {
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
        <div className="py-2">
          <ExperienceSection experience={createLfviewExperience()} />
        </div>
        <div className="w-full tablet:max-w-5xl mx-auto rounded-lg tablet:max-w-5xl">
          <a
            href="https://view.seequent.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/static/img/projects/seequent-eagle.png"
              alt="steno3d-img"
              width={700}
              height={400}
            />
          </a>
        </div>
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
            onClick={onImageClicked}
          />
          <ImageModal
            url={imageModelState.url}
            title={imageModelState.title}
            isOpened={modelOpened}
            onCloseClicked={toggleModel}
          />

          <UnderConstruction />
        </div>
      </div>
    </Page>
  );
}
