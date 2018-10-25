import { generate } from 'shortid';
import {
    pipe,
    map,
    objOf,
    assoc,
    partial,
    concat,
} from 'ramda';

/**
 * Have I gone too far ?
 */
const associateUidWithGeneratedUid = pipe(
    generate,
    partial(assoc, ['uid']),
)

const addUid = (obj) => {
    return associateUidWithGeneratedUid()(obj);
};

function transformIntoObjectWithUid(key) {
    return pipe(
        objOf(key),
        addUid,
    );
}
const appendProjectImageUrl = concat('/static/img/projects/');

const transformThumbnails = map(pipe(
    appendProjectImageUrl,
    transformIntoObjectWithUid('img')
));
const transformContributions = map(transformIntoObjectWithUid('contribution'));

export function createExperience(uid, company, product, thumbnails, description, contributions) {
    return {
        uid,
        company,
        product,
        thumbnails: transformThumbnails(thumbnails),
        description,
        contributions: transformContributions(contributions),
    };
}

