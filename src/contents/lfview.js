import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const blurb = [
  'Frontend developer of 3D data visualization web application LFView. Proposed and implemented web frontend visualization and UI application redesign from ground up. Project went from initial research, design and development, to delivery of an enterprise grade product in less than 12 months and has continued with weekly continuous deployment.',
  'Co-designed and implemented web visualization, pushing the boundaries of web application capability. Greatly improved performance and visual presentation.',
  'Researched and introduced emerging technologies, design patterns and paradigms including sveltejs, reactjs (w/ hooks api), Flux(redux), rxjs, TypeScript, css-grid and Functional/Reactive Programming paradigm. The architecture has proven to be scalable as the team size significantly increased.',
  'Participated in design and implementation of all aspects of web frontend stack including: visualization library, UI programming, and general application dataflow state control.',
]

const contributions = [
  'Researched and introduced emerging technologies, design patterns and programming paradigms.',
  'Participated in design and implementation of all aspects of frontend including: visualization library, UI programming, and application dataflow control.',
  'Maintained projects through critical life cycle including ideation, research, proposal, development, maintenance and sunset.',
  'Researched and improved application rendering and memory performance.',
  'Maximize productivity by balancing between various testing philosophies while maintaining over 95% test coverage.',
  'Onboarded new team members by providing training materials, documentation, and mentorship.',
]

const description = blurb

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
      blurb,
    )
  }
  return experience
}
