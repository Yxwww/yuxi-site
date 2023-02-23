import { nanoid as generate } from 'nanoid'
import { DEVELOPER_ROLE } from './constants'
import { createExperience } from './constructors'

const THUMBNAILS = []

const blurb = [
  'Core web developer delivering innovative features and optimized architecture for efficient maintenance and functionality.',
]

const contributions = [
  'Implemented full-stack features including authentication, user workflow, UI programming, and editor functionalities.',
  'Improved performance, enabling seamless usage of application with larger documents leading to expanded customer reach.',
  'Spearheaded E2E testing and assisted with monorepo migration for efficient code maintenance and testing.',
]

const description = blurb

const roles = [DEVELOPER_ROLE]
const time = 'June 2016 - May 2021'

const url = '/post/curvenote'

let experience

export function createCurvenoteExperience() {
  if (!experience) {
    const uid = generate()
    console.log('uid', uid)
    experience = createExperience(
      uid,
      'Curvenote',
      'Curvenote',
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
