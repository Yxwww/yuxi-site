import { RESEARCHER_ROLE, DEVELOPER_ROLE } from './constants';
import { ProductExperience } from '../types';

const contributions = [
  "Conducted undergraduate research on enhancing emergency responders' situational awareness through wearable technology.",
  'Utilized IDEO methods for design refinement and user feedback analysis.',
  'Developed a functional prototype integrating glass and wrist-based wearable hardware.',
];

const thumbnails = ['erwear-poster.png'];

const description = [];
const roles = [RESEARCHER_ROLE, DEVELOPER_ROLE];
const time = 'Sep 2015 - Jun 2016';

export function createERWearExperience(): ProductExperience {
  return {
    product: 'ERWear',
    thumbnails,
    description,
    contributions,
    time,
    projecturl: '/posts/erwear',
    roles,
  };
}
