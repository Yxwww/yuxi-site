---
title: Darkmode like you mean it
description: improving darkmode using nextjs and tailwindcss
published: 2023-07-06
tags: darkmode, nextjs, tailwindcss
incomplete: true
image: capybara-darkmode.png
---

## Requirements

### Functional Requirements

- read system preference by default
- allows configuration, preference should be stored and persisted

### Technical Requirements

- no initial flash(white => black) at the beginning of a darkmode
- resolve hydration issue. `useMounted`, placeholder div
- use [tailwindcss.com](https://tailwindcss.com/) as a goal

## Importance

- solving this issue lays ground work for future user preference handling
- make the loading experience seamless. first 3 seconds is important. get rid of flash headache
- understanding how to handle darkmode

## Process

### Enable user to set theme preference

#### UX consideration

### Store the theme preference with `useLocalStorage`

### Removing flash

- webpage flashes the light theme before render the darktheme after page reload
- theme state source of truth resides in `localStorage`
- theme toggle effect is handled by `<ThemePrefToggleBtn />`

#### Hypothesis: .theme class gets rendered by `<ThemePrevToggle />` which is too deep into render tree

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

Result, flash disappear sooner! Yet, it is still obvious. Rerender is the issue, can we handle darkmode even earlier?

### Hypothesis: can we lift up darkmode all the way to the top?

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

### Hypothesis: prerender darkmode

![Images](/static/img/posts/prerenders_dark_mode.png)

- Looks like tailwind dark mode came with the http request
- What's an effecient way to render darkmode?

#### Resources:

- [Github thread](https://github.com/vercel/next.js/discussions/21982)
- [tailwindcsss](https://tailwindcss.com)
- [useDarkMode hook doc](https://github.com/donavon/use-dark-mode#that-flash)
