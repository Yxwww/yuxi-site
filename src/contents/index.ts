import { createLfviewExperience } from './lfview';
import { createCurvenoteExperience } from './curvenote';
import { createSodExperience } from './sod';
import { Experience } from '../types';
import { createFreelancingExperience } from './freelancing';

export function getExperience(): Experience[] {
  return [
    createCurvenoteExperience(),
    createLfviewExperience(),
    createFreelancingExperience(),
    createSodExperience(),
  ];
}
