import { nanoid as generate } from 'nanoid';
import { createExperience } from './constructors';
import { createERWearExperience } from './erwear';

const contributions = [
  // 'CPSC-449: Programing Paradigms',
  // 'CPSC-502: Research Project in Computer Science',
  // 'CPSC-599: Advanced iOS Programming',
  // 'CPSC-481: Human-Computer Interaction',
];

const description = [
  'Graduated from University of Calgary Bachelor of Science in Computer Science Internship Program.',
];

const roles = ["Bachelor's Degree"];
const time = 'Sep 2012 - Jun 2016';

const url =
  'https://www.ucalgary.ca/future-students/undergraduate/explore-programs/computer-science';
const thumbnails = [];

export function createEducation() {
  return createExperience({
    company: 'Computer Science - University of Calgary',
    productExperiences: [
      {
        product: 'Computer Science',
        thumbnails,
        description,
        contributions,
        time,
        projecturl: url,
        roles,
      },
    ],
  });
}
