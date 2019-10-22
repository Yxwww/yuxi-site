import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const contributions = [
  'Researched and introduced emerging technologies, design patterns and programming paradigms.',
  'Participated in design and implementation of all aspects of frontend including: visualization library, UI programming, and application dataflow control.',
  'Maintained projects through critical life cycle including ideation, research, proposal, development, maintenance and sunset.',
  'Researched and improved application rendering and memory performance.',
  'Onboarded new team members by providing training materials, documentation, and mentorship.',
]

const description = `
Frontend developer of 3D data visualization web application LFView. Reserached and developed frontend UI and visualization redesign from ground up with technologies such as Redux/React(Hooks API), Rxjs, Svelte, and TypeScript etc. Project went from initial research, design and development, to delivery of an enterprise grade product in less than 12 months and has continued with weekly continuous deployment.
`

const roles = [DEVELOPER_ROLE]
const time = 'June,2016 - Now'

const url = 'https://lfview.com'

let experience

export function createLfviewExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Seequent',
      'LeapFrog View',
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
