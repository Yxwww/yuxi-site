import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = []

const thumbnails = ['sod-cropped.png']

const descrption =
  'Designed and developed project SoD-Toolkit : A Toolkit for Interactively Prototyping and Developing Multi-Sensor, Multi-Device Environments. SoD uses Nodejs as server, SocketIO for communication, and adopts MS Kinect, Google Tango for providing spatial awareness.'

const time = 'June, 2014 - June, 2016'
const roles = ['Software Developer Intern', 'Research Assistent']
let experience

export function createSodExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering',
      'Society of Devices',
      thumbnails,
      descrption,
      contributions,
      time,
      '',
      roles,
    )
  }
  return experience
}
