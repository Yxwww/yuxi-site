import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = [

]

const thumbnails = ['erwear-poster.png']

const descrption =
  'A wearable system to facilitate status monitoring, location tracking, real-time communications, and media transfer for emergency response.'

let experience

export function createERWearExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering',
      'ERWear',
      thumbnails,
      descrption,
      contributions,
    )
  }
  return experience
}
