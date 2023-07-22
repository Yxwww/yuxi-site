const IMAGE_ALIGNMENT = ['left', 'right', 'center'];
export const IMAGE_ALIGNMENT_READONLY = [...IMAGE_ALIGNMENT] as const; // for TSC
export type ImageAlignmentOptions = (typeof IMAGE_ALIGNMENT_READONLY)[number];

export const image = {
  render: 'Image',
  attributes: {
    src: { type: String, required: true, default: '' },
    width: { type: Number, default: 400 },
    height: { type: Number, default: 400 },
    align: { type: String, default: 'center', match: IMAGE_ALIGNMENT },
    alt: { type: String, required: false, default: '' },
    title: { type: String, required: false, default: '' },
  },
};
