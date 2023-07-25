---
title: Darkmode - doing it right
description: Adding darkmode to this website. Documenting the things learned.
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

Adding darkmode is fairly straightforward process, it can be mainly summerized as:

- Enable user to set theme preference with `<ThemePrefToggleBtn />`
- Store theme preferencee with `useLocalStorage`
- render out darkmode based on user preference or system preference

There are two issues that I ran into makes it a bit tricky:

- resolve hydration issue with `useMounted`
- resolve "flash" issue where light always gets rendered first for a short period before rendering darkmode

### A darkmode toggle button

{% image
  src="/static/img/posts/darkmode-toggle.png"
  height=500
  /%}

This was inspired by tailwind documentation theme toggle button. Its a single action button to toggle theme from `dark => light` and from `light => dark`.

Currently, the draw back of this design is it only supports toggling from between "always dark" and "always light". Once, the toggle is used there's no way to go back to "using system preference". A better approach would be having a dropdown where user can select all three options.

### Storing theme preference

I ended up choosing `localStorage` to store the user preference theme state due to:

- theme data is small
- browser environment dependent: some browser as darker theme some don't
- easy to build

Came across `useLocalStorage` hook to easily abstract storing and syncing logic. Checkout the hook [here](https://github.com/Yxwww/yuxi-site/blob/main/utils/hooks/useLocalStorage.ts)

To use it:

```typescript
export type ThemePreference = 'light' | 'dark' | 'none';
const [theme, setTheme] = useLocalStorage<ThemePreference>('theme', 'none');
```

## Fix hydration issue

### The problem: hydration content mismatch due to state difference

Very standard hydration issue when the source of state is not stored on server. This happens to the theme button due to the icon rendering state is dependent on the theme state.

- theme state is stored on the client `localStorage`
- server doesn't have access to the theme state
- renders the content that does not match with client

### The solution: useMounted

Checkout `useMounted` [here](https://github.com/Yxwww/yuxi-site/blob/main/utils/hooks/useMounted.ts). It makes the ThemeToggleButton only rendered by client.

## Fix flash issue

While addressing the requirements, I've noticed the flashing issue when page is refreshed.

Assessing the current design:

- webpage flashes the light theme before render the darktheme after page reload
- source of truth of theme state is stored in `localStorage`
- theme toggle effect is handled by <ThemePrefToggleBtn /> component

### Hypothesis: .theme class gets rendered by <ThemePrevToggle /> too late

- Observation
  - throttle CPU speed to 4X in chrome performance tab
  - notice the flash comes from the light theme gets rendered first
  - `theme` css class gets rendered too late
  - assumption: the theme button gets rendered too late
- Approach
  - lift up the theme state so the theme state gets resolved at the root
  - <ThemePrefToggleBtn /> only handles toggling

Prototype: lifting theme state into app root see if flash persists:

![Images](/static/img/posts/lift-theme-effect-up.png)

Result in flash disappear sooner! Yet, it is still obvious. Rerender is the issue, can we handle darkmode even earlier?

### Hypothesis: can we lift up darkmode logic all the way to the top makes rerender not observable

![Images](/static/img/posts/tailwind-darkmode-logic.png)

- Observation:
  - tailwind has inline script tag handles darkmode
  - lifing darkmode all the way into script tag will do the trick
- Consideration
  - flash can still happen depends on how fast rerender can happen
- Approach:
  - use `_document` for prerendered darkmode script
  - tryout tailwind darkmode script
  - useDarkMode recommendation to achieve this in nextjs https://github.com/donavon/use-dark-mode#that-flash

Result, flash is gone! It looks like the script is loaded synchronously which immediately add `.dark` class into document. The document renders theme right after.

### Hypothesis: render darkmode on the server solves rerender issue completely

![Images](/static/img/posts/prerenders_dark_mode.png)

- Observation:
  - Looks like tailwind dark mode came with the http request
  - What's an effecient way to render darkmode in SSG?
- Consideration:
  - Landing page should be static instead of server rendered
  - Could fix hydration issue if done correctly

## Future plan

- use a dropdown select component to support user to select system preference state
- if user select system preferences, app should detect theme change when system theme is changed
  - long polling, check system darkmode every 5 mins ?
  - checkout on window focused?
- checkout the last hypothesis: rendering darkmode on server approach
  - is there a request header you can specify user theme preference?

### Resources:

- [Github thread](https://github.com/vercel/next.js/discussions/21982)
- [tailwindcsss](https://tailwindcss.com)
- [useDarkMode hook doc](https://github.com/donavon/use-dark-mode#that-flash)
