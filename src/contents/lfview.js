import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const thumbnails = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const blurb = [
  'LeapFrog View is a 3D web data visualization application. My responsibility is to maintain 3D data visualization library. I also proposed and implemented frontend stack revamp to improve architecture, user experience, and performance.',
]

const contributions = [
  'Core maintainer of web visualization library. Improved state management, rendering performance and visual presentation.',
  'Proposed and implemented frontend UI application redesign. Improved state management, performance, and user experience',
  'Researched and introduced emerging technologies, design patterns and paradigms including sveltejs, reactjs (w/ hooks api), redux, rxjs, TypeScript, css-grid and Functional/Reactive Programming paradigm. The architecture has proven to be scalable as the team size significantly increased.',
  'Onboarded new team members by providing training materials, documentation, and mentorship.',
]

const description = blurb

const roles = [DEVELOPER_ROLE]
const time = 'June,2016 - Now'

const url = '/post/steno3d-view'

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
