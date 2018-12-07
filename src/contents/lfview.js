import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const contributions = [
  'Researched and recommended emerging technologies and best practices to improve frontend stack such as redux, rxjs, TypeScript, and functional programming paradigm',
  'Collaborated with product stakeholders and dev team, participated in design and implementation of all aspects of frontend stack including visualization, UI components, business logic and state control.',
  'Diagnosed and improved application performance from 10 fps to 50 fps by improving rendering process. Designed architecture to handle large datasets within business logic and visualization components.',
  'Maintained the project through entire development life cycle including ideation, research, proposal, development, and maintenance.',
  'Onboarded new team members by providing training materials, documentation, and mentorship.',
  'Researched and standardized industry coding style. Introduced and maintained linter, formatter into development workflow.',
  'Designed and contributed in setup and maintainance of frontend test environment. Maximized productivity utilizing automated testing techniques.',
]

const description = `
    Lead developer of 3D data visualization web application. Re-designed and implemented frontend stack from ground up, with test coverage of over 90%, to the Redux/Rxjs/Polymer/ThreeJS based web app.
    Project went from initial research, design and development, to delivery of an enterprise grade product in less than 12 months and has continued with weekly continuous deployment.
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
