import { nanoid as generate } from 'nanoid';
import { createExperience } from './constructors';
import { ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT } from './constants';
import { createERWearExperience } from './erwear';

const contributions = [
  'Developed and maintained the SoD-Toolkit, a web-based toolkit for prototyping multi-sensor, multi-device environments.',
  'Designed and implemented 2D and 3D visualizer. Utilized html5 canvas and Unity to provide visual demonstration of server state in realtime.',
  'Developed and maintained client library in various platforms including C#, Obj-C, JavaScript, Android, and Unity.',
  'Designed server architecture for real-time state control and geometric computation.',
  'Integrated the toolkit with various hardware technologies, including MS Kinect, Google Tango, and Leap Motion.',
];

const description = [];

const time = 'June 2014 - June 2016';
const roles = [ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT];

export function createSodExperience() {
  return createExperience({
    company: 'Agile Surface Engineering Lab',
    productExperiences: [
      {
        product: 'SoD-Toolkit',
        description,
        contributions,
        time,
        projecturl: '/post/sod',
        roles,
      },
      createERWearExperience(),
    ],
  });
}
