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
function doesUserPreferDarkmode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemePrefToggleBtn() {
  const mounted = useMounted();

  const [theme, setTheme] = useLocalStorage<ThemePreference>(
    SITE_LOCAL_SOTRAGE_KEY,
    'none'
  );

  useEffect(() => {
    if (theme === 'dark' || (theme === 'none' && doesUserPreferDarkmode())) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'halloween'); // for daisy
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'lofi');
    }
  }, [theme]);

  // localStorage state causes hydration miss match. Suppress warning for now.
  return mounted ? (
    <button
      className="btn btn-circle btn-outline btn-primary"
      onClick={() => {
        setTheme((theme) => {
          if (theme === 'none') {
            if (doesUserPreferDarkmode()) {
              return 'dark';
            } else {
              return 'light';
            }
          } else if (theme === 'dark') {
            return 'light';
          } else {
            return 'dark';
          }
        });
      }}
    >
      {theme === 'none' ? (
        doesUserPreferDarkmode() ? (
          <MoonIcon className="block h-5 w-5" />
        ) : (
          <SunIcon className="block h-5 w-5" />
        )
      ) : theme === 'dark' ? (
        <SunIcon className="block h-5 w-5" />
      ) : (
        <MoonIcon className="block h-5 w-5" />
      )}
    </button>
  ) : (
    <ToggleBtnPlaceholder />
  );
}
