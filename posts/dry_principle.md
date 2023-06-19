---
title: My Approach to the DRY Principle
description: Document my thougths on DRY principle and how I achieve it
tags: DRY Principle, Abstraction, Product Driven Design
image: dry.png
published: 2023-05-25
updated: 2023-06-02
---

## Introduction

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system

This is the Don't Repeat Yourself (DRY) Principle highlighted in the book _The Pragmatic Programmer_. During development, DRY principle is implemented through `abstraction`, in forms such as components, functions, or scripts. However, the process requires understanding of its nuances. Otherwise, you might run into `Premature Abstraction`. Premature abstraction occurs when you abstract at the wrong place and the wrong time. To get it right, my strategy involves a blend of PDAD(Product Driven Architecture Design) principle, a term I use so 🐻 with me, and the WET(Write Everything Twice) principle.

The process includes:

1. Collaborating with product, UX and CS teams to devise sophisiticated solutions to user problems.
2. Designing the tech architecture based on principles such as DRY, and appropirate design patterns, along with product requirements
3. Apply WET principle during development. Abstract when you are confident the abstraction will be reused.
4. Test solution and iterate with product, UX, and CS teams

## The challenge

Abstraction, while beneficial, often prompts discussion on its application scope. Developers frequently debate what and when to abstract, not just how. From my experience, moving from eager abstraction to judicious use of WET principle made me realize the cost of abstraction.

Good abstraction can be refreshing and efficient, but it carries costs: it can separate logically connected parts of the program, demands careful design, and requires naming and placement, increasing cost.

It's essential to avoid pitfalls such as immediate abstraction at the sight of repetition, abstracting without considering the product roadmap, or abstracting merely for the sake of it.

## What worked for me 🔧

> Let's make it work, then we make it better!

My advice is to make it work first, then make it better! This approach depends on understanding the product's future, not afraid to write things more than once, and learning from battle-tested approaches. The opptimal approach is different for different development purpose such as developing a product vs developing a library.

### Developing a product

When developing a product, generally we want to make things flexible. When we discover a user problem, we aim to solve that problem and provide value to our user. The process looks like:

`Ideation => User Study => Product Requirements => Architecture Design => Implementation => Test and Iteration`.

During the ideation and user study process, it's key to be involved to understand the problem that's being solved. Keep in mind, it's the `problem` we are focosing on, not the solution. Solutions can change and adapt, the problem however stays as long as we care about it as a business. Once I collaborated with product and UX team, I quickly learn that a solution is something very _temporary_. This mindset frees me from committing to a certain structure of code. An architecture can be more nimble and is setup to be scalable is more desired than a structure that's rigid and promise infinite scalability. Abstraction makes code more defined and structured, but over abstraction makes it hard to change and adapt which go against the idea of exploration.

In addition, collaboration with various teams brings fresh perspectives to the problems we are trying to solve. Simply having a more comprehensive context enhances our understanding of the problem, allowing us to focus on the solution rather than getting lost in the fog of uncertainty.

## Reusability & Readability

When following DRY principle, we abstract for reusability. Sometimes, we abstract for readability to make our code easier to read. Some of my preference:

- minimize nested scope. This includes callbacks, for loops, nested component.
- using library like [ramda](https://ramdajs.com/). I can abstract out most of the commonly used utilities.
- avoid splitting files unless it makes sense

## Conclusion

This is my approach to implement DRY principle during software architecture design. It involves collaborating with various stakeholders to understand the problem correctly. Contributing to the conversation to explore various ways to solve the problem. Applying various principles and tools to design the software architecture, then testing and iterating on the solution.

## Glossaries

- `CS`: customer success
- `UX`: user experience
