import { SENIOR_DEVELOPER_ROLE, STAFF_DEVELOPER_ROLE } from './constants';
import { createExperience } from './constructors';

const THUMBNAILS = [];

const blurb = [];

const contributions = [
  'Spearheaded complete redesign of V6 SDK rendering system, implementing state-driven declarative design, deterministic rendering pipeline, shader optimization for GPU-based operations, and high-performance Text3D API with SDF font rendering - delivering 70% performance improvement and enabling major enterprise deals',
  'Enabled multi-million dollar enterprise contracts through rapid delivery of mission-critical SDK solutions for major international airports and large commercial venues, ranging from emergency bug fixes to rebuilding entire React Native SDK from scratch with 88% test coverage within one-month deadline.',
  'Solved complex 3D spatial fitting problems achieving pixel-perfect geometry alignment, resolved depth buffer issues for transparent image rendering, implemented pan bounds calculation algorithms for dynamic map sizing, and optimized altitude offset calculations for stacked map visual separation - saving thousands of hours of customer support time',
  'Led and coached cross-functional engineering team while collaborating with product, sales, and engineering stakeholders to translate business requirements into technical solutions, fostering a supportive high-velocity culture that consistently exceeded delivery goals',
  'Established comprehensive testing for 3D visualization applications with 70%+ coverage, implementing development best practices that delivered enterprise-grade reliability and reduced production incidents while enabling confident feature delivery',
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
