import { useEffect } from 'react';
import { useLocalStorage } from '@/utils/hooks';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import useMounted from '@/utils/hooks/useMounted';
import { SITE_LOCAL_SOTRAGE_KEY } from '@/constants';

export type ThemePreference = 'light' | 'dark' | 'none';

/**
 * Placeholder component to act and occupy the space as a toggle icon button.
 * Prevents layoutshift client side only
 */
function ToggleBtnPlaceholder() {
  return (
    <div className="btn btn-circle">
      <div className="h-5 w-5"></div>
    </div>
  );
}

export function ThemePrefToggleBtn() {
  const mounted = useMounted();

  const [theme, setTheme] = useLocalStorage<ThemePreference>(
    SITE_LOCAL_SOTRAGE_KEY,
    'none'
  );

  useEffect(() => {
    if (
      theme === 'dark' ||
      (theme === 'none' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'halloween'); // for daisy
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'garden');
    }
  }, [theme]);

  // localStorage state causes hydration miss match. Suppress warning for now.
  return mounted ? (
    <button
      className="btn btn-circle btn-outline btn-primary"
      onClick={() => {
        setTheme((theme) => {
          if (theme === 'dark') {
            return 'light';
          } else {
            return 'dark';
          }
        });
      }}
    >
      {theme === 'dark' ? (
        <SunIcon className="block h-5 w-5" />
      ) : (
        <MoonIcon className="block h-5 w-5" />
      )}
    </button>
  ) : (
    <ToggleBtnPlaceholder />
  );
}
