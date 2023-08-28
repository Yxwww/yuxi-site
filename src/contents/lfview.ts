import { nanoid as generate } from 'nanoid';
import { DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';
import EAGLE_IMG from '/static/img/projects/seequent-eagle.png';
import WING_IMG from '/static/img/projects/lfview-look-at-wing.png';
import SLIDES_IMG from '/static/img/projects/seequent-eagle-slides.png';

const THUMBNAILS = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
];

const blurb = [
  `As one of the first hires at 3ptscience, I started my career working on frontend UI using WebComponents. Then, I proposed and led frontend architecture revamp to React & Redux architecture. After that, I joined the visualization team as a key contributor to revamping the visualization library with TypeScript and Three.js. During the time I worked there, I set standards for frontend code quality and mentored team members.`,
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
