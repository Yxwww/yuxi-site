import { SENIOR_DEVELOPER_ROLE, STAFF_DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [];

const blurb = [];

const contributions = [
  'Spearheaded V6 SDK rendering redesign with state-driven architecture, GPU shader optimization, and SDF-based Text3D API delivering significant performance gains',
  'Designed V6 React Native SDK with bridge architecture enabling cross-platform native SDK development, delivered within one-month deadline',
  'Developed optimized path geometry improving performance and visuals with billboarding and bordering support, and designed simplification algorithms balancing visual aesthetics with routing efficiency',
  'Served as team lead with direct reports, owning project timelines and delivery coordination that enabled consistent on-time delivery',
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
