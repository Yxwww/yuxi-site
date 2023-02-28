import { nanoid as generate } from 'nanoid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'
import EAGLE_IMG from '/static/img/projects/seequent-eagle.png'
import WING_IMG from '/static/img/projects/lfview-look-at-wing.png'
import SLIDES_IMG from '/static/img/projects/seequent-eagle-slides.png'

const THUMBNAILS = [
  'seequent-eagle.png',
  'lfview-look-at-wing.png',
  'seequent-eagle-slides.png',
]

const blurb = [
  'LeapFrog View is a 3D web data visualization application. My responsibility is to maintain 3D data visualization library. I also proposed and implemented frontend stack revamp to improve architecture, user experience, and performance.',
]

const contributions = [
  'Maintained and improved 3D data visualization library, enhancing rendering performance and visual presentation',
  'Led a redesign of the frontend UI application to improve user experience, performance, and architecture',
  'Researched and integrated emerging technologies such as SvelteJS, ReactJS, Redux, RxJS, TypeScript, CSS Grid, and Functional/Reactive Programming paradigm, enabling the architecture to scale with team growth',
  'Trained and mentored new team members with onboarding materials and documentation',
]

const description = blurb

const roles = [DEVELOPER_ROLE]
const time = 'June 2016 - May 2021'

const url = '/post/steno3d-view'

let experience

export function createLfviewExperience() {
  if (!experience) {
    const uid = generate()
    console.log('uid', uid)
    experience = createExperience(
      uid,
      'Seequent',
      'LeapFrog View',
      THUMBNAILS,
      description,
      contributions,
      time,
      url,
      roles
      // blurb,
    )
  }
  return experience
}
