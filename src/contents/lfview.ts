import { nanoid as generate } from 'nanoid';
import { DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
];

const blurb = [
  `As an early team member, I initially focused on frontend UI development using WebComponents. Recognizing opportunities for improvement, I spearheaded a transition to a more robust React & Redux architecture. Subsequently, I joined the visualization team, where I was instrumental in overhauling the existing visualization library using TypeScript and Three.js. Throughout my tenure, I established coding standards for frontend development and served as a mentor to junior team members.`,
];

const contributions = [
  'Oversaw the maintenance and enhancement of a 3D data visualization library, improving rendering performance and visual presentation.',
  'Achieved significant performance increase by expanding renderable model size capacity, quadrupling frame rate for large data models, and reducing the First Input Delay.',
  'Developed and maintained features for data primitives including points, lines, and meshes.',
  'Led a comprehensive redesign of the frontend UI application, enhancing user experience, performance, and architecture.',
  'Engineered collaboration features and customized visualization widgets for an enhanced interactive user experience.',
  'Integrated various emerging technologies to enable architectural scalability alongside team growth.',
  'Provided mentorship and training to new team members.',
];

const description = blurb;

const roles = [DEVELOPER_ROLE];
const time = 'June 2016 - May 2021';

const url = '/post/steno3d-view';

let experience;

export function createLfviewExperience() {
  if (!experience) {
    const uid = generate();
    experience = createExperience(
      uid,
      'Seequent',
      '',
      THUMBNAILS,
      description,
      contributions,
      time,
      url,
      roles
      // blurb,
    );
  }
  return experience;
}
