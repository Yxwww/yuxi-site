export const CALLOUT_TYPES = ['caution', 'check', 'note', 'warning'] as const;
export const callout = {
  render: 'Callout',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: 'note',
      matches: CALLOUT_TYPES,
      errorLevel: 'critical' as const, // this is strange
    },
    title: {
      type: String,
    },
  },
};
