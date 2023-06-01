import { RefCallback, useCallback, useState } from 'react';

/**
 * useEl has full awareness of el lifecycle and triggers rerender according to it.
 * see: https://twitter.com/thissushiguy/status/1502375114721017856
 */
export default function useEl() {
  const [el, setEl] = useState(null);
  const ref: RefCallback<HTMLElement> = useCallback((n) => {
    setEl(n);
  }, []);
  return [el, ref];
}
