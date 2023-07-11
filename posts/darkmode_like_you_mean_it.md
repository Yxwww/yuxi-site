---
title: Darkmode like you mean it
description: improving darkmode with nextjs and tailwindcss.
published: 2023-07-06
tags: darkmode, nextjs, tailwindcss
incomplete: true
image: capybara-darkmode.png
---

## Requirements

- Functional requirements
  - read system preference by default
  - allows configuration, preference should be stored and persisted
- UX & Technical requirements
  - no flash(light => dark) during first render
  - resolve hydration issue with localStorage

## Importance

- Solving darkmode well lays ground work for future user preference handling
- Make the loading experience seamless. First 3 seconds is important.
- Learning how to handle darkmode helps future development

## Process

- Enable user to set theme preference with `<ThemePrefToggleBtn />`
- Store theme preferencee with `useLocalStorage`
- resolve hydration issue with `useMounted`

While addressing the requirements, I've noticed the flashing issue when page is refreshed.

## Handle flash - understanding the issue

- webpage flashes the light theme before render the darktheme after page reload
- theme state source of truth resides in `localStorage`
- theme toggle effect is handled by `<ThemePrefToggleBtn />`

### Hypothesis: .theme class gets rendered by `<ThemePrevToggle />` too late

- Observation
  - throttle CPU speed to 4X in chrome performance tab
  - notice the flash comes from the light theme gets rendered first
  - `theme` css class gets rendered too late
  - recall theme toggle logic lives with the `<ThemePrefToggleBtn />`
  - assumption: the theme button gets rendered too late
- Approach
  - lift up the theme state so the theme state gets resolved at the root
  - `<ThemePrefToggleBtn />` only handles toggling

Prototype: lifting theme state into app root see if flash persists:

![Images](/static/img/posts/lift-theme-effect-up.png)

Result in flash disappear sooner! Yet, it is still obvious. Rerender is the issue, can we handle darkmode even earlier?

### Hypothesis: can we lift up darkmode logic all the way to the top makes rerender not observable

![Images](/static/img/posts/tailwind-darkmode-logic.png)

- Observation:
  - tailwind has inline script tag handles darkmode
  - lifing darkmode all the way into script tag will do the trick
- consideration
  - flash can still happen depends on how fast rerender can happen
- Approach:
  - use `_document` for prerendered darkmode script
  - tryout tailwind darkmode script
  - useDarkMode recommendation to achieve this in nextjs https://github.com/donavon/use-dark-mode#that-flash

Result, flash is gone! It looks like the script is loaded synchronously which immediately add `.dark` class into document. The document renders theme right after.

### Hypothesis: render darkmode class on the server

![Images](/static/img/posts/prerenders_dark_mode.png)

- Looks like tailwind dark mode came with the http request
- What's an effecient way to render darkmode?

#### Resources:

- [Github thread](https://github.com/vercel/next.js/discussions/21982)
- [tailwindcsss](https://tailwindcss.com)
- [useDarkMode hook doc](https://github.com/donavon/use-dark-mode#that-flash)
