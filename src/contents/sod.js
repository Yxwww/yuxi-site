import { generate } from 'shortid'
import { createExperience } from './constructors'
import { ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT } from './constants'

const contributions = [
  'Design and develop node server with socket management, geometric computation, and real time state control.',
  'Develop and maintain client library in various platforms including C#, Obj-C, JavaScript, Android, and Unity. ',
  'Design and implement 2D and 3D visualizer utilizes html5 canvas and Unity to provide visual demonstration of server state in realtime.',
  'Intergrate toolkit with Google Tango, Leap Motion, iBeacon, wearables, and mobile devices utilize client libraries and the hardware domain specific features',
  'Design and implement multi-Kinect fusion technique which greatly improves spatial awareness tracking area.',
]

const thumbnails = ['sod-cropped.png']

const description =
  'Developer and maintainer of project SoD-Toolkit. A toolkit utilizes realtime communciation technology, adopts MS Kinect, Google Tango, iBeacons, Leap Motion, and mobile devices to provide spatial awareness for interactively prototyping and developing Multi-Sensor, multi-Device Environments.'

const time = 'June, 2014 - June, 2016'
const roles = [ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT]
let experience

export function createSodExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering Lab',
      'SoD Toolkit',
      thumbnails,
      description,
      contributions,
      time,
      '',
      roles,
    )
  }
  return experience
}
