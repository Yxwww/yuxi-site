import { generate } from 'shortid'
import { pipe, map, objOf, assoc, partial, concat } from 'ramda'

/**
 * Have I gone too far ?
 */
export const associateUidWithGeneratedUid = pipe(
  generate,
  partial(assoc, ['uid']),
)

const addUid = obj => associateUidWithGeneratedUid()(obj)

function transformIntoObjectWithUid(key) {
  return pipe(
    objOf(key),
    addUid,
  )
}
const appendProjectImageUrl = concat('/static/img/projects/')

const transformThumbnails = map(
  pipe(
    appendProjectImageUrl,
    transformIntoObjectWithUid('img'),
  ),
)
const transformContributions = map(transformIntoObjectWithUid('contribution'))

export function createExperience(
  uid,
  company,
  product,
  thumbnails,
  description,
  contributions,
  time = '',
  projecturl = '',
  roles=[],
) {
  return {
    uid,
    company,
    product,
    thumbnails: transformThumbnails(thumbnails),
    description,
    contributions: transformContributions(contributions),
    time,
    projecturl,
    roles,
  }
}
