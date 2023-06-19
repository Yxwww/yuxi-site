import { useCallback, useEffect, useState } from 'react';

// source: https://usehooks.com/useLocalStorage/
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((value: T) => T)) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // setValue should have no side effects
  const setValue = useCallback((value: T | ((value: T) => void)) => {
    setStoredValue(value);
  }, []);

  useEffect(() => {
    try {
      const stringified = JSON.stringify(storedValue);
      if (
        typeof window !== 'undefined' &&
        window.localStorage.getItem(key) !== stringified
      ) {
        window.localStorage.setItem(key, stringified);
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// source: https://designcode.io/react-hooks-handbook-usescrollposition-hook
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
}

export default useScrollPosition;