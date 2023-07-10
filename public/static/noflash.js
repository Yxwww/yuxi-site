/**
 * Direct copy from tailwindcss.com
 * iife
 */
(function () {
  try {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
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
  } catch (_) {}
})();
