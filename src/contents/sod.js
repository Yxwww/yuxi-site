import { generate } from 'shortid'
import { createExperience } from './constructors'
import { ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT } from './constants'

const contributions = [
  'Designed and developed node server with socket management, geometric computation, and real-time state control.',
  'Integrated toolkit with MS Kinect, Google Tango, Leap Motion, iBeacon, wearables, and mobile devices. Utilized client libraries and the hardware domain specific features.',
  'Developed and maintained client library in various platforms including C#, Obj-C, JavaScript, Android, and Unity.',
  'Designed and implemented 2D and 3D visualizer. Utilized html5 canvas and Unity to provide visual demonstration of server state in realtime.',
  'Designed and implemented multi-Kinect fusion technique which greatly expanded reach of spatial awareness tracking.',
]

const thumbnails = ['sod-cropped.png']

const description =
  'Developer and maintainer of SoD-Toolkit. A web based toolkit for interactively prototyping and developing multi-sensor, multi-device environments.'

const time = 'June 2014 - June 2016'
const roles = [ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT]
let experience

export function createSodExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering Lab',
      'SoD-Toolkit',
      thumbnails,
      description,
      contributions,
      time,
      '/post/sod',
      roles,
    )
  }
  return experience
}
