import { SENIOR_DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [];

const blurb = [];

const contributions = [
  'Entrusted with building the core product as the first hire, defining frontend standards and best practices.',
  'Utilized TypeScript, React, and ProseMirror for development.',
  'Delivered innovative features and optimizing architecture for effective maintenance and functionality.',
  'Implemented full-stack features including OAuth integration, UI programming, and rich text editor functionalities.',
  'Boosted application performance, facilitating seamless usage with larger documents and broadening customer reach.',
  'Led end-to-end testing initiatives and contributed to monorepo migration for streamlined code maintenance and testing.',
];

const description = blurb;

const roles = [SENIOR_DEVELOPER_ROLE];
const time = 'May 2021 - Sep 2022';

const url = '/post/curvenote';

export function createCurvenoteExperience() {
  return createExperience({
    company: 'Curvenote(YC)',
    productExperiences: [
      {
        thumbnails: THUMBNAILS,
        description,
        contributions,
        time,
        projecturl: url,
        roles,
      },
    ],
  });
}
