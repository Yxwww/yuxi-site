import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = [
  // 'CPSC-449: Programing Paradigms',
  // 'CPSC-502: Research Project in Computer Science',
  // 'CPSC-599: Advanced iOS Programming',
  // 'CPSC-481: Human-Computer Interaction',
]

const description =
  'Graduated from University of Calgary Bachelor of Science in Computer Science Internship Program.'

const roles = ["Bachelor's Degree"]
const time = 'September 2012 - June 2016'

const url = ''
const thumbnails = ''

let experience

export function createEducation() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'University of Calgary',
      'Computer Science',
      thumbnails,
      description,
      contributions,
      time,
      url,
      roles,
    )
  }
  return experience
}
