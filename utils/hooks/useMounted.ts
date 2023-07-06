import { useEffect, useState } from 'react';

/**
 * useMounted provides state for whether the component is mounted
 * It is be used to distinguish the SSR rendering vs frontend rendering with client
 */
export default function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
