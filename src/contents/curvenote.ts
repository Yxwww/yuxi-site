import { nanoid as generate } from 'nanoid';
import { SENIOR_DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [];

const blurb = [
  'First hire at Curvenote, I am responsible for building the core product. ',
];

const contributions = [
  'Delivering innovative features and optimizing architecture for effective maintenance and functionality.',
  'Implemented full-stack features including authentication, user workflow, UI programming, and rich text editor functionalities.',
  'Boosted application performance, facilitating seamless usage with larger documents and broadening customer reach.',
  'Led end-to-end testing initiatives and contributed to monorepo migration for streamlined code maintenance and testing.',
];

const description = blurb;

const roles = [SENIOR_DEVELOPER_ROLE];
const time = 'May 2021 - Sep 2022';

const url = '/post/curvenote';

let experience;

export function createCurvenoteExperience() {
  if (!experience) {
    const uid = generate();
    experience = createExperience(
      uid,
      'Curvenote(YC)',
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
