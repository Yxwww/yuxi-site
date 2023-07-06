---
title: You May Not Need Redux
description: How to utilize the power of Redux while not having to use it
tags: Redux, React, Web Developemenmt
published: 2023-07-03
image: capybara-watch.png
incomplete: true
---

Some tools brighten my day. Some tools transform my life. [Redux is one of those tools that changed how I approach software development](/post/redux), although no tool is perfect. Redux is designed with React ecosystem as it's primary consumer. The three principles and concepts are powerful, but there are many ways to implement them. The way Redux approaches it is specifically tailored toward React. If you need to use Redux outside of React, you will need some kind of caching-capable adapter. Otherwise, there will be too much performance overhead.

> Though tools may adapt to circumstance, the essence of their purpose remains unaltered.

Instead of trying to make the Redux library work for various environments, we can adapt Redux principles and concepts to the new environment.

## Issues with Redux library and React in general

Redux is not designed to maximize performance. Same can be said about React. Both technologies focus on building things `correctly` but not necessarily `quickly`. While there can be an argument made that if it's easier to built things right, then it's easier to make them fast. That's partially true, but it doesn't have a performance impact. Developer has to explore and come up with ways to make things _not_ slow using technology like memoization, [reselect](https://www.npmjs.com/package/reselect), and [virtual dom](https://www.npmjs.com/package/React-dom). Here are some potential pitfalls applying redux concepts:

- [Single source of truth with unidirectional data flow](</post/redux#single-source-of-truth-with-unidirectional-data-flow-(udf)>) is powerful for reasoning about state update; however, it leads to any state update will have to go through the entire store each time it updates. _Each time_ it updates.
  - reducer switch state blocks majority of the state update
  - memoization to prevent the app from rerendering (selectors, v-dom, hooks)
  - Unrelated functions gets run (or rendered), developers hope they cache or memoize state object correctly to avoid a rerender
- [Pure functions](/post/redux#pure-functions-with-kickass-compositions) does not make it easy to write performant code, other than memoization becomes easier
  - Mutation will always be faster than recreating large data for the sake of purity
  - In-place operations always is more memory effecient; however, it goes against the whole point of writing pure functions.
  - Fixated writing pure functions may lead to heavy garbage collection (GC) work. If the GC happens on the main thread, it will be very noticable
- `Immutable data` is just a nightmare concept working with large data.
  - Due to lack of native immutable data structure support in JS, we are using third party solutions
  - Treating something immutable is way more effecient than actually making it immutable.
  - Developer needs to know how to set purity boundary when working with large data set

This is what I mean by redux is not designed for writing performant web apps. It's very easy to writ correctly behaving yet slow applications if not careful. One of the most impactful process when it comes to performance management in React ecosystem is `managing when referencial equality check should pass`. It's a bit overly counter intuitive imo. When you build applications, you just want to focus on build the application. Lets say a change in one element leads to the need to update another. Instead of directly programming that procedure using handler and call an update function, we are playing this game around referencial equality to make sure the app is not overly eager to rerender.

I hope this is not just my personal experience. If you are new to React, you will hear a lot about how to `prevent rerender`. The way to achieve it is not obvious. Working with React in combination with Redux does not make things easier.

## Maybe there's another way

[Redux principles and concepts transcends the library and even react](<http://localhost:3000/post/redux#single-source-of-truth-with-unidirectional-data-flow-(udf)>). Personally, I've had great success applying unidirectional data flow Redux concept long before I started using Redux. This convinced me, we can apply the rest of the Redux concept to make our application more robust, easy to work with, and performant.
