import { createLfviewExperience } from './lfview'
import { createERWearExperience } from './erwear'
// import { createEocfExperience } from './eocf'
import { createSodExperience } from './sod'
import { createMediaBroExperience } from './media-bro'

export function getExperience() {
  return [
    createLfviewExperience(),
    createERWearExperience(),
    createSodExperience(),
    createMediaBroExperience(),
  ]
}
