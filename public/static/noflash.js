/**
 * Direct copy from tailwindcss.com
 * iife
 */
const THEME_KEY = 'yuxi-site-theme'; // TODO: shared the values in constants/ somehow
function getThemeFromLocalStorage() {
  return JSON.parse(localStorage.getItem(THEME_KEY));
}

(function() {
  try {
    const theme = getThemeFromLocalStorage();
    if (
      theme === 'dark' ||
      (!(THEME_KEY in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'halloween'); // for daisy
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#0B1120');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'garden');
    }
  } catch (_) { }
})();
