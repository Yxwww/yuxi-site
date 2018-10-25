import { generate } from 'shortid';
import { createExperience } from './constructors';

const contributions =  [
];

const thumbnails = [
];

const descrption = '';

let experience;

export function createERWearExperience() {
    if (!experience) {
        experience = createExperience(
            generate(),
            'Agile Surface Engineering',
            'ERWear',
            thumbnails,
            descrption,
            contributions,
        );
    }
    return experience;
}
