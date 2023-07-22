const CALLOUT_TYPE = ['caution', 'check', 'note', 'warning'];
export const CALLOUT_TYPES_READONLY = [...CALLOUT_TYPE] as const; // for TSC

export const callout = {
  render: 'Callout',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: 'note',
      matches: CALLOUT_TYPE,
      errorLevel: 'critical' as const,
    },
    title: {
      type: String,
    },
  },
};
