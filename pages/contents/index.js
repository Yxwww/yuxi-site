import { createLfviewExperience } from './lfview';
import { createERWearExperience } from './erwear';
export function getExperience() {
    return [
        createLfviewExperience(),
        createERWearExperience(),
    ];
}
