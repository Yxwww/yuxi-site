import { generate } from 'shortid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const contributions = []

const description =
  'Graduated from University of Calgary Bachelor of Science in Computer Science Internship Program.'

const roles = ['Undergraduate']
const time = 'September, 2012 - June, 2016'

const url = ''
const thumbnails = ''

let experience

export function createEducation() {
  if (!experience) {
    experience = createExperience(
      generate(),
      'University of Calgary',
      'Computer Science',
      thumbnails,
      description,
      contributions,
      time,
      url,
      roles,
    )
  }
  return experience
}
