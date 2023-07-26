import { nanoid as generate } from 'nanoid';
import { createExperience } from './constructors';
import { RESEARCHER_ROLE, DEVELOPER_ROLE } from './constants';

const contributions = [
  'Utilized IDEO methods for user feedback analysis and design refinement of a wearable tech-based emergency response system.',
  'Designed and developed functional prototype with glass and wrist based wearable hardware.',
  'Integrated wearable application with spatial-aware communication system.',
];

const thumbnails = ['erwear-poster.png'];

const descrption = [
  "ERWear is my undergraduate research project. My responsibility was to design a system leveraging glass and wrist-based wearable technology to enhance emergency responders' situational awareness.",
];
const roles = [RESEARCHER_ROLE, DEVELOPER_ROLE];
const time = 'September 2015 - June 2016';

let experience;
export function createERWearExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering Lab',
      'ERWear',
      thumbnails,
      descrption,
      contributions,
      time,
      '',
      roles
    );
  }
  return experience;
}
