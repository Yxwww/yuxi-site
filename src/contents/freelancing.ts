import { DATA_VIZ_DEV, FULLSTACK_DEV } from './constants';
import { createExperience } from './constructors';

export function createFreelancingExperience() {
  return createExperience({
    company: 'Freelance Developer',
    productExperiences: [
      {
        product: 'RDS DataViz',
        contributions: [
          'Expanded technical skills by independently creating a robust data visualization library using TypeScript and d3.js to meet stringent feature and performance specifications.',
        ],
        time: 'Sep 2019 - Jun 2020',
        projecturl: '/post/freelancing',
        roles: [DATA_VIZ_DEV],
      },
      // {
      //   product: "Li's Food Revolution",
      //   thumbnails: [],
      //   contributions: [
      //     'Served as Lead Developer, guiding clients through the digital transformation of their commercial kitchen management system.',
      //     'Implemented secure authentication via Magic Auth and spearheaded full-stack development using Vercel, Tailwind CSS, and MongoDB.',
      //   ],
      //   time: 'Jul, 2020 - Feb, 2022',
      //   projecturl: '/post/lfr',
      //   roles: [FULLSTACK_DEV],
      // },
    ],
  });
}
