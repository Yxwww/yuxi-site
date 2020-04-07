import { createLfviewExperience } from './lfview'
import { createERWearExperience } from './erwear'
// import { createEocfExperience } from './eocf'
import { createSodExperience } from './sod'
// import { createMediaBroExperience } from './media-bro'

export const ERWearExperience = createERWearExperience()
export const LfviewExperience = createLfviewExperience()
export function getExperience() {
  return [
    LfviewExperience,
    ERWearExperience,
    createSodExperience(),
    // createMediaBroExperience(),
  ]
}
