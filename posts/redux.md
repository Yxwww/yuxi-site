---
title: What I learned from using redux
description: Redux transformed the way I build applications. Here is what I learned after using it for several years, and also why I think you don't need it.
tags: JavaScript, Redux, Learning
published: 2023-06-06
image: capybara_wood_working.png
incomplete: true
---

Alongside the Functional Programming (FP) Paradigm, Redux has significantly impacted my journey in programming. Around the year 2016, I was searching for an architecture to build web applications. React wasn't widely adopted at the time, and it mainly focuses on building components and rendering. I was seeking an architecture that could effectively manage the state of an application.

The primary challenge I was trying to solve back then was scaling a startup's frontend stack. I had issues maintaining and reasoning about the data flow and the state of the application. I reviewed a bunch of Object-Oriented design patterns, and picked up the JS design patterns book. Unfortunately, I didn't go with any of the design patterns as they all felt too anecdotal. That's when I discovered Redux.

The last time I delved into anything closely resembling FP was during a university course on Programming Paradigms, where I learned and came to appreciate Haskell. It felt mathematical and outlandish compared to Java or Python, mainly due to how logic is composed instead of being managed through inheritance. It's not the most intuitive solution you would find when designing software, but you can't argue with the results it produces. The learning curve is steep when getting started; however, the difficulty scales much better than traditional OO inheritance.

The FP flavor in Redux reminded me of Haskell. I was eager to put Redux to the test. Using an FP approach in solving a real-world problem was exciting. Going from prototype to production, following the Redux principle has led us to some great successes:

- Reduced the amount of time spent on maintaining code and building new features
- Understood the state of the application, which led to deterministic application behavior
- Established a standard in writing applications

## The three principles and the challenges

The best thing about learning Redux is learning the principles came with it. I've applied these three principles of Redux to solve various programming problems in different environments. Like any other technologies, knowing how to apply the principles into an application stack effectively remains challenging.

### Unidirectional data flow (UDF)

You know that joy of revelation when something has been working for you, though you haven't fully acknowledge its existence. Then, someone else named it and you are like "AHA! That's what it is!!". Throughout my career, I've came across maintaining several of complex system. I found success unknowingly applying UDF principle to solve the problem after many failure attempts. It yielded great result.

When I discovered redux along with UDF principle, it was that "AHA!" moment for me. When many changing states that affects each other. Sitting down and laying out all the data flows and moving states, design the central data flow to ensure all states are resolved to the right place at the correct order.

![realtime application data flow](/static/img/posts/realtime-application-data-flow.png)

Challenges to consider:

- It's easy to lose track of what the source of truth is.
- Effectively and properly synchronizing state.
- Communicating the state of the application to the user.

### Pure functions

This is the first step heading into FP. Learning about `pipe`/`compose`, `curry`/`partial`, with pointer free approach to compose logics. Somewhere along the way picked up [ramdajs](https://ramdajs.com/). A whole entire page of way to compose logic opened up.

Challenges to consider:

- Most of the application logic should be implemented as pure functions.
- Use FP techniques for composition.
- Handle side effects at the edge of the system.

### Immutable data

Dealing with immutable data is not the most intuitive in JS due to there's no built in immutable data types. There are various solutions to enable developers to work with actual immutable data structures in JS; however, the cost of doing so is expensive and unnecessary imo. We can be trained and diciplined knowing when to meddle with the data structures.

Challenges to consider:

- Treating data as if it's immutable versus actually making it immutable.
- Mutate for performance if needed but maintain the immutability at the correct boundaries.
- Understand the performance trade-off and how to minimize its impact.

No matter how hard we try, to make an application sing is it's side effects. Animations, saving data, rendering something to screen. Although, that will will go way beyound the topics of this post. I will leave a placeholder [here](/post/sideeffects) to talk about it.

## Yes, you may not need redux.

> Though tools may adapt to circumstance, the essence of their purpose remains unaltered.

Stepping outside of the react world, you might find applying redux is not as straightforward. However, the principle still stands. Knowing how to apply react principle in vairous environment is a fun and rewarding challenge. That might be a post for another time.
