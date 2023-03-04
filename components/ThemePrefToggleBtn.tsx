import { useEffect } from 'react'
import { useLocalStorage } from 'utils/hooks'

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
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <button
      suppressHydrationWarning
      onClick={() => {
        console.log('button click')
        setTheme((theme) => {
          if (theme === 'dark') {
            return 'light'
          } else {
            return 'dark'
          }
        })
      }}
    >
      {theme === 'dark' ? 'dark' : 'light'}
    </button>
  )
}
