import React from 'react';
import { map } from 'ramda';
import ExperienceSection from './ExperienceSection';
import { Experience } from '@/src/types';

const createExpereienceSections = map((exp: Experience) => (
  <ExperienceSection key={exp.uid} experience={exp} />
));

function ExperienceContent({ experience }: { experience: Experience[] }) {
  const experienceSections = createExpereienceSections(experience);

  return <div className="mx-auto">{experienceSections}</div>;
}

export default ExperienceContent;
