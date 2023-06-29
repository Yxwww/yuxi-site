import React from 'react';
import { Page } from '../components/layouts/main';
import AllProjects from 'components/AllProjects';
import Image from 'next/image';

export default function Projects() {
  return (
    <Page className="mx-auto max-w-2xl lg:max-w-5xl">
      <h1>Projects</h1>
      <p className="pb-4 pt-2 max-w-2xl"></p>

      <AllProjects />
    </Page>
  );
}
