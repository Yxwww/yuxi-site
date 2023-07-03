---
title: What I learned from using redux
description: Redux transformed the way I build applications. Here is what I learned after using it for several years.
tags: JavaScript, Redux, Learning
published: 2023-06-06
image: capybara_wood_working.png
incomplete: true
---

Alongside the Functional Programming (FP) Paradigm, Redux has significantly impacted my journey in programming. Around the year 2016, I was searching for an architecture to build web applications. React wasn't widely adopted at the time and its main focus was on building components and rendering. I was seeking an architecture that could effectively manage the state of an application.

The primary challenge I faced was scaling a startup's frontend stack. I had issues maintaining and reasoning about the data flow and the state of the existing stack. I reviewed a bunch of Object-Oriented design patterns and picked up the JS design patterns book. Unfortunately, none of the design patterns resonated with me as they all felt too anecdotal. That's when I discovered Redux.

The last time I delved into anything closely resembling FP was during a university course on Programming Paradigms, where I learned and came to appreciate Haskell. It felt mathematical and outlandish compared to Java or Python, mainly due to how logic is composed instead of being managed through inheritance. It's not the most intuitive solution you would find when designing software, but you can't argue with the results it produces. The learning curve is steep when getting started; however, the difficulty scales much better than traditional OO inheritance.

The FP flavor in Redux reminded me of Haskell. I was eager to put Redux to the test. Using an FP approach in solving a real-world problem was exciting. Going from prototype to production, following the Redux principle has led us to some great successes:

- Reduced the amount of time spent on maintaining code and building new features
- Understood the state of the application, which led to deterministic application behavior
- Established a standard in writing applications

## The three principles and the challenges

The best thing about learning Redux is grasping the principles that come with it. I've applied these three principles of Redux to solve various programming problems in different environments. Like any other technologies, knowing how to apply the principles into an application stack effectively remains challenging.

### Unidirectional data flow (UDF)

You know that joy of revelation when something has been working for you, though you haven't fully acknowledged its existence. Then, someone else names it, and you're like "AHA! That's what it is!!". Throughout my career, I've maintained several complex systems. I found success in unknowingly applying the UDF principle to solve problems after many failed attempts. It yielded great results.

When I discovered Redux along with its UDF principle, it was that "AHA!" moment for me. When many changing states affect each other, sitting down and laying out all the data flows and moving states, designing the central data flow to ensure all states are resolved to the right place at the correct order is crucial.

![realtime application data flow](/static/img/posts/realtime-application-data-flow.png)

Challenges to consider:

- It's easy to lose track of what the source of truth is.
- Effectively and properly synchronizing state.
- Communicating the state of the application to the user.

### Pure functions

Functions are like blood vessels and organs carries and process "blood" in your system - Event data, state data or network data. Foundational functions such as `pipe`/`compose` and `curry`/`partial` opens up foundamental ways to compose functions, much like body's circulatory system. Once you get used to using pure functions, you can harness the power of [ramdajs](https://ramdajs.com/). This library brings in rich suite of capabilities to your programming toolbox.

Challenges to consider:

- Most of the application logic should be implemented as pure functions.
- Use FP techniques for composition.
- Handle side effects at the edge of the system.

### Immutable data

Dealing with immutable data is not the most intuitive in JS due to there's no built in immutable data types. There are various solutions to enable developers to work with actual immutable data structures in JS; however, the cost of doing so is expensive and unnecessary. We can be trained and diciplined knowing when to meddle with the data structures.

Challenges to consider:

- Treating data as if it's immutable versus actually making it
- Mutate for performance if needed but maintain the immutability at the correct boundaries.
- Understand the performance trade-off and how to minimize its impact.

To make an application sing is it's side effects such as network, rendering, and user interactions. Although, sideeffects management is a beast, I will leave a placeholder [here](/post/sideeffects) to discuss it further.
