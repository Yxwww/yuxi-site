import { SENIOR_DEVELOPER_ROLE, STAFF_DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [];

const blurb = [];

const contributions = [
  'Spearheaded V6 SDK redesign with high-throughput rendering architecture and GPU shader optimization, then sole-developed React Native SDK that secured multi-million dollar enterprise contracts with major airports and venues',
  'Developed SDF-based Text3D rendering API delivering crisp visuals across zoom levels, widely adopted by mall customers',
  'Designed 3D models SDK API with environment map reflections, collaborating with 3D artists on lighting; adopted by venues for custom model integration',
  'Designed and built path visualization system end-to-end, including billboarded geometry and simplification algorithms balancing aesthetics with performance',
  'Implemented spatial fitting algorithms that eliminated thousands of support hours for venue setup',
  'Stepped into team lead role for 4-engineer team, driving V6 SDK to completion and coordinating delivery of final major features',
  'Established testing infrastructure including end-to-end visual regression pipeline for 3D applications',
];

const description = blurb;

const roles = [STAFF_DEVELOPER_ROLE];
const time = 'Oct 2023 - Now';

const url = '/post/mappedin';

export function createMappedInExperience() {
  return createExperience({
    company: 'Mappedin',
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
