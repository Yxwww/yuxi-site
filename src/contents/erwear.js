import { generate } from 'shortid'
import { createExperience } from './constructors'
import { RESEARCHER_ROLE, DEVELOPER_ROLE } from './constants'

const contributions = [
  'Conducted interviews with first responders following IDEO methods. Analyzed and iterated design based on user feedback',
  'Designed and developed functional prototype with glass and wrist based wearable hardware.',
  'Integrated wearable application with internal spatial-aware communication system.',
]

const thumbnails = ['erwear-poster.png']

const descrption =
  'Researched, designed and developed a wearable system leveraging glass and wrist based wearable technology to enhance situational awareness of emergency responders.'
const roles = [RESEARCHER_ROLE, DEVELOPER_ROLE]
const time = 'September, 2015 - June, 2016'

let experience
export function createERWearExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering Lab',
      'ERWear',
      thumbnails,
      descrption,
      contributions,
      time,
      '',
      roles,
    )
  }
  return experience
}
