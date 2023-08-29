import { nanoid as generate } from 'nanoid';
import { SENIOR_DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [];

const blurb = [
  'As the first hire at Curvenote, I was entrusted with the task of building the core product from the ground up. I not only laid down frontend standards and best practices but also ventured into backend development. I successfully navigated development challenges in an ambiguous environment. Primarily, I honed my craft using TypeScript, React, and ProseMirror.',
];

const contributions = [
  'Delivering innovative features and optimizing architecture for effective maintenance and functionality.',
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
