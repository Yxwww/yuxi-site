import { generate } from 'shortid'
import { createExperience } from './constructors'
import { RESEARCHER_ROLE, DEVELOPER_ROLE } from './constants'

const contributions = [
  'Conduct interview with first responders following IDEO methods. Analyze and incorporate design based on user feedback',
  'Design and develop functional prototype utilizes glass and writst based wearable hardware',
  'Integrate wearable application with SoD-Toolkit to enable spatial awareness',
]

const thumbnails = ['erwear-poster.png']

const descrption =
  'Research, design and developed wearable system, utilizes glass and wrist based wearable technology ,to enhance emergency responders situational awarenes.'
const roles = [RESEARCHER_ROLE, DEVELOPER_ROLE]
const time = 'September, 2015 - June, 2016'

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
      time,
      '',
      roles,
    )
  }
  return experience
}
