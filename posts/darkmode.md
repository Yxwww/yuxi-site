---
title: Web app problem solving - darkmode
description: Adding darkmode to this website. Documenting the issues I tackled.
published: 2023-07-06
tags: darkmode, nextjs, tailwindcss
image: capybara-darkmode.png
---

{% callout type="caution" title="Note" %}
This post is curently published as _dev notes_ format. Will turn it into a proper blog post at somepoint. 🤞
{% /callout %}

It's good solve problems by understanding the nature of the problem before dive into the solutions. I've aware there are adequate darkmode solutions out there. However, it always helps to tackle the problem first. Let's start with requirement gathering.

## Requirements

- Functional requirements
  - darkmode decides whether the application renders the light or dark theme
  - allows configuration, preference should be stored and persisted
- UX & Technical requirements
  - Darkmode should behave expectedly as how OS handles darkmode
  - renders system preference by default

## Importance

Understanding the how important the problem is to solve helps laying down the scope and expectation of the result. The expectation consists of the following:

- Solving darkmode well lays ground work for future user preference handling
- Make the loading experience seamless. First 3 seconds is important.
- Learning how to handle darkmode helps with future development.

## Process

Adding darkmode is a fairly straightforward process, it can be summerized as:

- Enable user to set theme preference with `<ThemePrefToggleBtn />`
- Store theme preferencee with `useLocalStorage`
- Render out darkmode based on user preference

Let's have a look at how to add the toggle button.

### A darkmode toggle button

{% image
  src="/static/img/posts/darkmode-toggle.png"
  height=500
  /%}

The current iteration of the darkmode button was inspired by tailwind documentation. It's a single action button to toggle theme from `dark => light` and from `light => dark`.

The drawback of this design is it only supports toggling from between "always dark" and "always light". Once the toggle is clicked, there's no way to go back to "using system preference" option. A better approach would be having a dropdown where user can select all three options. This is documented at [future plans](/post/darkmode#future-plan)

### Storing theme preference

I ended up choosing `localStorage` to store the user preference theme state due to:

- theme data being small
- easy to build
- browser environment dependent: the look of the browser can affect user preference

Came across `useLocalStorage` hook to easily abstract storing and syncing logic. Checkout the hook [here](https://github.com/Yxwww/yuxi-site/blob/main/utils/hooks/useLocalStorage.ts)

To use it:

```typescript
export type ThemePreference = 'light' | 'dark' | 'none';
const [theme, setTheme] = useLocalStorage<ThemePreference>('theme', 'none');
```

## Fixing issues

Although, adding darkmode button is faily staright forward. Devil's always in the detail. There are two technical challanges stood out to me when adding darkmode:

- Hydration issue: server side rendering does not have access to local storage causes hydration mismatch
- Theme preference render happens later than expected which causes an uncomfortable flash.

### The hydration issue

The problem: hydration content mismatch due to state difference

Very standard hydration issue when the source of state is not stored on server. This happens to the theme button due to the icon rendering state is dependent on the theme state:

- theme state is stored on the client `localStorage`
- server doesn't have access to the theme state
- renders the content that does not match with client leads to hydration error

{% callout type="check" title="Solution" %}
`useMounted` solves "all" hydration issue.
{% /callout %}

Checkout `useMounted` [here](https://github.com/Yxwww/yuxi-site/blob/main/utils/hooks/useMounted.ts). This simple hook utilized the nature of useEffect. useEffect with empty `[]` dependencies only gets called by the client when the component gets mounted.

To use useMounted hook:

```typescript
function Component() {
  const mounted = useMounted();
  return mounted ? <>Only rendered by client.</> : null;
}
```

Using useMounted hook makes the <ThemeToggleButton /> only rendered by client. This avoids hydration issue all together. Now, let's have a looking at how to fix the flash issue.

### The flash issue

While addressing the requirements, I've noticed an issue when the page renders the theme preference stored in `localStorage` later than expected causes the app to render "incorrect" theme first before rendering the prefered theme.

Assessing the current design:

- webpage flashes the light theme before render the darktheme after page gets loaded
- source of truth of theme state is stored in `localStorage`
- theme toggle effect is handled by <ThemePrefToggleBtn /> component

{% callout type="note" title="Hypothesis" %}
.theme class gets rendered by <ThemePrevToggle /> too late
{% /callout %}

- Observation
  - throttle CPU speed to 4X in chrome performance tab
  - notice the flash comes from the light theme gets rendered first
  - `theme` css class gets rendered too late
  - assumption: the theme button gets rendered too late due to theme toggle button is too nested in the render tree
- Approach
  - lift up the theme state so the theme state gets resolved at the root
  - <ThemePrefToggleBtn /> only handles toggling

Prototype: lifting theme state into app root see if flash persists:

![Images](/static/img/posts/lift-theme-effect-up.png)

Result in flash disappear sooner! Yet, it is still obvious. Rerender is the issue, can we handle darkmode even earlier?

{% callout type="note" title="Hypothesis" %}
lift darkmode logic all the way to the top of render tree makes rerender not observable
{% /callout %}

![Images](/static/img/posts/tailwind-darkmode-logic.png)

- Observation:
  - tailwind has inline script tag handles darkmode
  - lifing darkmode all the way into script tag will do the trick
- Consideration
  - flash can still happen depends on how fast rerender can happen
- Approach:
  - use `_document` for prerendered darkmode script
  - tryout tailwind darkmode script
  - `useDarkMode` recommendation script see: [docs page](https://github.com/donavon/use-dark-mode#that-flash)

Result, flash is gone! It looks like the script gets executed synchronously which immediately adds `.dark` class into document. The document renders theme right after. This is good enough for now.

{% callout type="note" title="Hypothesis" %}
render darkmode on the server solves rerender issue completely
{% /callout %}

![Images](/static/img/posts/prerenders_dark_mode.png)

- Observation:
  - Looks like tailwind dark mode came with the http request
  - What's an effecient way to render darkmode in SSR/SSG?
- Consideration:
  - Landing page should be static instead of server rendered
  - Could fix hydration issue if done correctly

## Future plan

- use a dropdown <select /> component to support user to select "system preference state", "always light", and "always dark".
  - sync "prefer system theme" state with toggle UI
- if user select system preferences, app should detect theme change when system theme is changed
  - long polling, check system theme pref every 5 mins
  - check system pref on window focused
- checkout the last hypothesis: rendering darkmode on server approach
  - is there a request header you can specify user theme preference?

## Resources:

- [Github thread](https://github.com/vercel/next.js/discussions/21982)
- [tailwindcsss](https://tailwindcss.com)
- [useDarkMode hook doc](https://github.com/donavon/use-dark-mode#that-flash)
