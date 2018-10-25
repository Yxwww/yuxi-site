import { createExperience } from './constructors';
import { generate } from 'shortid';

const contributions =  [
    'lead development of fronted stack',
    'Provide expertise and incorporate best practices of frontend stack.',
    'Design, propose, and implement advanced state control system with Redux and Rxjs',
    'Participate in design and implementation of the full aspect of frontend stack includes 2D/3D visualization, UI components, and overall application state control.',
    'Diagnose and contribute on frontend stack performance optimization, greatly improve performance and reduce error occurrences. ',
    'Setup frontend test environment and encourage test driven development',
];

const thumbnails = [
    'seequent-eagle.png',
    'lfview-look-at-wing.png',
    'seequent-eagle-slides.png',
]
const description = 'Frontend software developer of 3D data visualization application Lfview.  Mainly contribute in state control design, business logic implementation, data structure design, cross-platform performance monitoring,  algorithm optimization, visualization feature implementation, UI design and implementation.';

let experience;

export function createLfviewExperience() {
    if (!experience) {
        experience = createExperience(
            generate(),
            'seequent',
            'LeapFrog View',
            thumbnails,
            description,
            contributions,
        );
    }
    return experience;
}

