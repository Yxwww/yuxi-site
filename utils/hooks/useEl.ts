import { useCallback, useState } from "react";

/**
 * useEl has full awareness of el lifecycle and triggers rerender according to it.
 * see: https://twitter.com/thissushiguy/status/1502375114721017856
 */
export default function useEl<T extends HTMLElement>() {
  const [el, setEl] = useState<T | null>(null);
  const ref = useCallback((n: T | null) => {
    setEl(n);
  }, []);
  return [el, ref] as const;
}
