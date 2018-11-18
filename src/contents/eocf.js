import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = []

const thumbnails = ['erwear-map.png']

const descrption =
  'Participated in design and development for project Emergency Operations Centre of The Future(EOCF), a strategic command and control facility for emergency management in response to disasters. It was written in C# and uses ArcGIS server for GEO data. Integrated SoD-Toolkit project into EOCF to provide real-time communication and spatial awareness among devices to help emergency management.'

let experience

export function createEocfExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Agile Surface Engineering',
      'EoCF',
      thumbnails,
      descrption,
      contributions,
    )
  }
  return experience
}
