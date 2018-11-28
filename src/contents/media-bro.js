import { generate } from 'shortid'
import { createExperience } from './constructors'

const contributions = [
  'Developed and maintained media website for local community in Calgary using CMS.',
  'Designed and developed web application to ease up vehicle service reservation process using Google Map API and jQuery-Mobile.',
  'Polished website front end using jQuery and HTML/CSS. We managed to increase the visitor session number from 20 to 150 per day. Each session contains at least 5 visited pages.',
]

const thumbnails = []

const descrption =
  'Designed, developed and maintained community website. Coordinated design and development process. Researched and implemented software solution for various feature requests.'
const roles = ['Web Developer']
const time = 'October, 2013 - May, 2015'

let experience
export function createMediaBroExperience() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'Uni Brothers Media Ltd',
      'Community Website',
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
