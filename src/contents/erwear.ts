import { nanoid as generate } from 'nanoid'
import { createExperience } from './constructors'
import { RESEARCHER_ROLE, DEVELOPER_ROLE } from './constants'

const contributions = [
  'Conducted interviews with first responders following IDEO methods. Analyzed and iterated design based on user feedback',
  'Designed and developed functional prototype with glass and wrist based wearable hardware.',
  'Integrated wearable application with internal spatial-aware communication system.',
]

const thumbnails = ['erwear-poster.png']

const descrption = [
  "ERWear is my undergraduate research project. My responsibility was to design a system leveraging glass and wrist-based wearable technology to enhance emergency responders' situational awareness.",
]
const roles = [RESEARCHER_ROLE, DEVELOPER_ROLE]
const time = 'September 2015 - June 2016'

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
      roles
    )
  }
  return experience
}
