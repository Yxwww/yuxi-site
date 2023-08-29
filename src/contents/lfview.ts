import { DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
];

const blurb = [];

const contributions = [
  'Led the transition from WebComponents to a more robust React & Redux architecture.',
  'Appointed to the visualization team and spearheaded the revamp of the existing visualization library using TypeScript and Three.js.',
  "Achieved a 4x frame rate increase for large data models, significantly improving the application's performance and capabilities.",
  "Integrated various emerging technologies to ensure architectural scalability, accommodating the company's growth and evolving needs.",
  'Mentored junior team members and established coding standards for frontend development.',
];

const description = blurb;

const roles = [DEVELOPER_ROLE];
const time = 'June 2016 - May 2021';

const url = '/post/steno3d-view';

export function createLfviewExperience() {
  return createExperience({
    company: 'Seequent',
    productExperiences: [
      {
        description,
        contributions,
        time,
        projecturl: url,
        roles,
      },
    ],
  });
}
