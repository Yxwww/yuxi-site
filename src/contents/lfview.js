import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const contributions = [
  'Provide expertise and incorporate best practices of frontend stack.',
  'Design, propose, and implement state control system with Redux and Rxjs',
  'Participate in design and implementation of the full aspect of frontend stack includes visualization, UI components, and overall application business logic and state control.',
  'Diagnose and improve application performance. Mainly contributed in large datasets handling within business logic and visualization.',
  'Experienced as project maintainer of application life cycle includes ideation, research, proposal, development, and maintenance',
  'Onboarding new teammates. Provide training materials, documentation, and communication',
  'Design and contributed in setup and maintain frontend test environment, maximize productivity utilizing testing techniques',
]

const description = `
    Lead developer of 3D data visualization web application LFView frontend stack. Re-design and implement frontend stack from ground up, with test coverage of over 90%, to the Redux/Rxjs/Polymer/ThreeJS based web app.
    Project went from initial research, design and development to production in less than 12 months and has continued with weekly continuous deployment.
    `

const roles = [DEVELOPER_ROLE]
const time = 'June,2016 - Now'

const url = 'https://lfview.com'

let experience

export function createLfviewExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'seequent',
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
