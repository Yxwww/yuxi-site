---
title: What I Learned From Using Redux
description: Redux transformed the way I build applications. Here is what I learned after using it for several years.
tags: JavaScript, Redux, Learning
published: 2023-06-06
updated: 2023-07-09
image: capybara_wood_working.png
---

Alongside the Functional Programming (FP) Paradigm, Redux has significantly impacted my journey in programming. Around the year 2016, I was searching for an architecture to build web applications. React wasn't widely adopted at the time and its main focus was on building components and rendering. I was seeking an architecture that could effectively manage the state of an application.

The primary challenge I faced was scaling a startup's frontend stack. I had issues maintaining and reasoning about the data flow and the state of the existing stack. After reviewing a bunch of Object-Oriented design patterns, none of the design patterns resonated with me as they all felt anecdotal. That's when I discovered Redux.

The last time I delved into anything closely resembling FP was during a university course on Programming Paradigms, where I learned and came to appreciate Haskell. It felt mathematical and unfamiliar compared to Java or Python. Having only written Java, Haskell was not the most intuitive language to grasp, but you can't argue with the results it produces. The learning curve is steep when getting started; however, the difficulty of maintenance scales better.

The FP flavor in Redux reminded me of Haskell. I was eager to put Redux to the test. Using an FP approach in solving a real-world problem was exciting. Going from prototype to production, following Redux principles and concepts has led us to great successes:

- Reduced the amount of time spent on maintaining code and building new features
- The state of the application is much easier to reason about directly led to deterministic application behavior
- Established architecture standard. Having a structure is always better than not having one.

## The principles, the challenges, and how to get there

The best thing about learning Redux is grasping its principles and concepts that come with it. I've applied Redux concepts to solve various programming problems in different environments. Like any other technologies, knowing how to apply the concepts into an application stack effectively remains challenging.

### Single source of truth with unidirectional data flow (UDF)

You know that joy of revelation when something has been working for you, though you haven't fully acknowledged its existence. Then, someone else names it, and you're like "AHA! That's what it is!!". Throughout my career, I've maintained several complex systems. I found success in unknowingly applying the UDF concept to solve problems after many failed attempts.

![realtime application data flow](/static/img/posts/realtime-application-data-flow.png)

Challenges to consider:

- It's easy to lose track of what the source of truth is.
- Effectively and properly synchronizing state.
- Communicating the state of the application to the user.

How to migrate to using pure functions:

...

### Pure functions with kickass compositions

Functions are like vessels and organs carries and process "blood" in your system - Event data, state data or network data. Foundational functions such as `pipe`/`compose` and `curry`/`partial` opens up foundamental ways to compose functions, much like body's circulatory system.
Once accustomed to using pure functions, it opens up many possibilities such as memoization, easier to test, easier to share the logic even between threads, and easier to compose. You can harness the power of [ramdajs](https://ramdajs.com/). This library brings in rich suite of capabilities to your programming toolbox.

Challenges to consider:

- Most of the business logic can be implemented as pure functions.
- Use FP techniques for composition.
- Handle side effects at the edge.

How to migrate to using pure functions:

- seperate the state update computation from the side effects
- parameterize any data that's not created by the function
- try out utility funcitons like `curry` `compose` ;P

Once you dicipline yourself to write pure functions, the functions become idempotent:

```javascript
var a = subtract(2, 1);
// is the same as
var a = 2 - 1;
// is the same as
var a = 1;
```

It makes your functions more trustworthy. You can trust that under any circumstances, your code will always produce the same output given the same imput. There's no hidden state.

### Readonly state with immutable data

Dealing with immutable data is not the most intuitive in JS due to there's no built in immutable data types. There are various solutions to enable developers to work with actual immutable data structures in JS; however, the cost of doing so is expensive and unnecessary. We can be trained and diciplined knowing when to meddle with the data structures.

Challenges to consider:

- Treating data as if it's immutable versus actually making it
- Mutate for performance if needed but maintain the immutability at the correct boundaries.
- Understand the performance trade-off and how to minimize its impact.

How to migrate to using immutable data:

- do not mutate any array or object data
- create new array when any update is needed
- cache against the referencial equality to check whether the array value is updated

## Conclusion

Redux has helped me immensely to develop reliable software. It makes the application much easier to reason about and easy to maintain. However, while beneficial, it's not without its limitations. No tool is perfect. While redux is powerful, I've documented my observations on its drawbacks on another blog [You may not need Redux](/post/you_may_not_need_redux), and discussed ways to leverage its power without having to pay the Redux tax.
