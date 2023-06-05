---
title: Thoughts on Functional Programming
description: What I learned from applying functional programming paradigm.
tags: Functional Programming, JavaScript, Redux, Web Development
---

# Still working on it

## Imperative vs declarative

```ts
export function processFrontmatter(frontmatter: FrontmatterParsed) {
  const { published, updated, ...rest } = frontmatter;
  const result: FrontmatterSerialized = { ...rest, published: '' };
  result.published = published.toString();
  if (updated) {
    result.updated = updated.toString();
  }
  return result;
}
```

```ts
const processPublished = cond([
  [is(Date), toString],
  [T, always('')],
]);

const processFrontmatter = evolve({
  published: processPublished,
  updated: toString,
});
```
