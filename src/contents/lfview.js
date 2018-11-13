import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = [
  'Provide expertise and incorporate best practices of frontend stack.',
  'Design, propose, and implement advanced state control system with Redux and Rxjs',
  'Participate in design and implementation of the full aspect of frontend stack includes 2D/3D visualization, UI components, and overall application state control.',
  'Diagnose and contribute on frontend stack performance optimization, greatly improve performance and reduce error occurrences. ',
  'Setup frontend test environment and encourage test driven development',
]

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]
const description = `Lead developer of frontend stack. Design and implement LeapFrog frontend stack from ground up, with test coverage of over 90%, to the Redux/Rxjs/Polymer/ThreeJS based 3D data visualization web application.\n
    Application went from initial research, design and development to production in less than 12 months and has continued with weekly deployment.`

const time = 'June 2016 - Now'

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
    )
  }
  return experience
}
