import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const contributions = [
  'Researched and introduced emerging technologies and methodologies such as Flux(redux), rxjs, TypeScript, css grid system, and Functional Programming paradigm.',
  'Participated in design and implementation of all aspects of frontend stack including: UI programming, graphic programming, business logic implementation, and application data flow control.',
  'Maintained the project through critical development life cycle including ideation, research, proposal, development, and maintenance.',
  'Maximize productivity by balancing between various testing philosophies while maintaining over 95% test coverage.',
  'Designed architecture to handle large datasets within business logic and visualization components.',
  'Diagnosed and improved application performance from 10 fps to 50 fps by improving rendering process.',
  'Onboarded new team members by providing training materials, documentation, and mentorship.',
  'Researched and standardized industry coding style. Introduced and maintained linter, formatter into development workflow.',
]

const description = `
Frontend developer of 3D data visualization web application LFview. Led frontend stack redesign from ground up to the React/Redux/Rxjs/Polymer/ThreeJS based web app.
Project went from initial research, design and development, to delivery of an enterprise grade product in less than 12 months and has continued with continuous deployment.
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
