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
  'Significantly enhanced rendering performance by increasing renderable model size capacity from hundreds of MB to several GB, quadrupling the frame rate for large data models from under 10 FPS to over 50 FPS, and reducing the First Input Delay of the 3D application from  minutes to just a few seconds.',
  'Maintained and developed new features for various data primitives including points, lines, and meshes. Pioneered innovative data representation techniques such as rendering points as disks for visualizing Structural Geology data.',
  'Led a redesign of the frontend UI application to improve user experience, performance, and architecture',
  'Designed and implemented collaboration features for 3D visualization, including annotation, slide creation, and commenting capabilities.',
  'Developed customized visualization widgets to enhance user exploration and interaction with visualizations.',
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
