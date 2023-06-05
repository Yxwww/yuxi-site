---
title: What I learned from using redux
description: Redux transformed the way I build applications. Here is what I learned after using it for several years.
tags: JavaScript, Redux, Learning
published: 2023-06-06
---

`under construction...`

Since I started my career in JS programming, Redux has been the technology that impacted me the most. Coming in second is probably promise, but that will be a topic for another day.

In the year of 2016, I was searching for an architecture to build applications. React wasn't widely adopted at the time, and to be frank, I didn't like JSX -- and I still don't.

One of the problems I encountered was scaling startup code. I had issues maintaining and reasoning about the data flow and the state of the application.

I looked around, reviewed design patterns learned from school, and picked up the JS design patterns book. Unfortunately, I didn't like any of the design patterns as they all felt too anecdotal. That's when I found Redux.

The functional programming (FP) flavor caught my eye. I loved Haskell during my undergrad studies. I gave Redux a shot and had some good results. It helped me:

- Reduce the amount of time spent on maintaining code and building new features
- Understand the state of the application, which led to deterministic application behavior
- Establish a standard in writing applications

## The three principle

> Though tools may adapt to circumstance, the essence of their purpose remains unaltered.

The best thing about learning Redux was understanding the principles that came with it. I've applied these three principles of Redux to solve various programming problems in different environments.

### Single data flow

This principle single-handedly helped me get some complex logic right, especially when maintaining relationships across different parts of my code.

### Pure functions

- Most of the application logic should be implemented as pure functions.
- Functional programming practices should be used to weave them together.
- Handle side effects at the edge of the system.

### Immutable data

- Consider treating data as if it's immutable versus actually making it immutable.
- Understand the performance trade-off and how to minimize its impact.
- Eliminate an entire category of bugs.

## Redux & React

### Context vs Reducers

```jsx
const [pageContext, setPageContext] =
  useState <
  PostContext >
  {
    title: '',
    description: '',
    image: '',
  };
const [postContext, setPostContext] = useState < PostContext > null; // set by meta data on a blog post for example

useEffect(() => {
  setPageContext((context) => ({
    ...context,
    title: `Yuxi | ${processTitle(pathname, postContext)}`,
  }));
}, [pathname, postContext]);
```

## TO Be Continued...
