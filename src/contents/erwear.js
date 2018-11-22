import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = [
  'Conduct interview with first responders following IDEO methods. Analyze and incorporate design based on user feedback',
  'Design and develop functional protpotype utilizes glass and writst based wearable hardware, and websocket based real time communication technology',
  'Conduct research on usability study of a wearable computing solution for first responders',
]

const thumbnails = ['erwear-poster.png']

const descrption =
  'Research, design and developed wearable system, utilizes on glass and wrist based wearable technology ,to enhance emergency responders situational awarenes.'
const roles = ['Researcher', 'Software Developer']
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
