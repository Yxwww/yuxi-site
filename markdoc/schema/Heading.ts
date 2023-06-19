// ./schema/Heading.markdoc.js

import { Tag } from '@markdoc/markdoc';

export const heading = {
  children: ['inline'],
  render: 'Heading',
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
  },
};
