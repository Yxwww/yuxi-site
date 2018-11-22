import { generate } from 'shortid'
import { createExperience } from './constructors'
import { ROLE_DEVELOPER_INTERN, ROLE_RESEARCH_ASSISTANT } from './constants'

const contributions = [
  'Design and implemented multi-Kinect feature technique which greatly improves spatial awareness tracking area.',
  'Intergrate with Google Tango, Leap Motion, iBeacon and mobile devices by building and maintaining clients for various platform and their domain specific features',
  'Design and implemented SoD server with realtime communication technology.',
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
      'Society of Devices',
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
