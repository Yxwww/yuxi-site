import { createLfviewExperience } from './lfview';
import { createCurvenoteExperience } from './curvenote';
import { createSodExperience } from './sod';
import { Experience } from '../types';
import { createFreelancingExperience } from './freelancing';
import { createMappedInExperience } from './mappedin';

export function getExperience(): Experience[] {
  return [
    createMappedInExperience(),
    createCurvenoteExperience(),
    createLfviewExperience(),
    createFreelancingExperience(),
    createSodExperience(),
  ];
}
