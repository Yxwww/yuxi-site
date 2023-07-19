// ./schema/Heading.markdoc.js

export const heading = {
  children: ['inline'],
  render: 'Heading',
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
  },
};
