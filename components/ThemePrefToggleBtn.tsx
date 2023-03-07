import { useEffect } from 'react'
import { useLocalStorage } from 'utils/hooks'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export type ThemePreference = 'light' | 'dark' | 'none'
const SITE_LOCAL_SOTRAGE_KEY = 'yuxi-site-theme' //

export function ThemePrefToggleBtn() {
  const [theme, setTheme] = useLocalStorage<ThemePreference>(
    SITE_LOCAL_SOTRAGE_KEY,
    'none'
  )

  useEffect(() => {
    if (
      theme === 'dark' ||
      (!(SITE_LOCAL_SOTRAGE_KEY in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'halloween') // for daisy
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'garden')
    }
  }, [theme])

  // localStorage state causes hydration miss match. Suppress warning for now.
  return (
    <button
      className="btn btn-circle btn-outline btn-primary"
      suppressHydrationWarning
      onClick={() => {
        setTheme((theme) => {
          if (theme === 'dark') {
            return 'light'
          } else {
            return 'dark'
          }
        })
      }}
    >
      {theme === 'dark' ? (
        <MoonIcon className="block h-5 w-5" />
      ) : (
        <SunIcon className="block h-5 w-5" />
      )}
    </button>
  )
}
