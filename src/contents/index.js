import { createLfviewExperience } from './lfview'
import { createERWearExperience } from './erwear'
import { createEocfExperience } from './eocf'
import { createSodExperience } from './sod'

export function getExperience() {
  return [
    createLfviewExperience(),
    createERWearExperience(),
    createEocfExperience(),
    createSodExperience(),
  ]
}
