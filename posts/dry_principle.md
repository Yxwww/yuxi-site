---
title: DRY Principle and Product Driven Architecture Design
description: Document my thougths on DRY principle and how I achieve it
published: 2023-05-25
updated: 2023-05-31
---

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system

This is the DRY(Don't Repeat Yourself) Principle highlighted in the book _The Pragmatic Programmer_. In my day to day programming, I implement DRY principle through `abstraction`, in forms such as components, functions, or scripts. However, the process requires understanding of its nuances. My strategy involves a blend of PDAD(Product Driven Architecture Design) principle, a term I use so 🐻 with me, and the WET(Write Everything Twice) principle.

The process includes:

1. Collaborating with product, UX and CS teams to devise sophisiticated solutions to user problems
2. Designing the tech architecture based on principles such as DRY, and appropirate design patterns, along with product requirements
3. Apply WET principle during development. Abstract when you are confident the abstraction will be reused.
4. Test solution and iterate with product, UX, and CS teams

## The challenge

Abstraction, while beneficial, often prompts discussion on its application scope. Developers frequently debate what and when to abstract, not just how. From my experience, moving from eager abstraction to judicious use of WET principle made me realize the cost of abstraction.

Good abstraction can be refreshing and efficient, but it carries costs: it can separate logically connected parts of the program, demands careful design, and requires naming and placement, increasing cost.

It's essential to avoid pitfalls such as immediate abstraction at the sight of repetition, abstracting without considering the product roadmap, or abstracting merely for the sake of it.

## My solution

> Let's make it work, then we make it better!

My advice is to make it work first, then make it better! This approach depends on understanding the product's future, not afraid to write things more than once, and learning from battle-tested approaches. The model looks like:

`Ideation => User Study => Product Requirements => Tech Architecture => Test and Iteration`.

Moreover, collaboration with various teams brings fresh perspectives to the problems we are trying to solve. Simply having a more comprehensive context enhances our understanding of the problem, allowing us to focus on the solution rather than getting lost in the fog of uncertainty.

## Conclusion

This is my approach to software architecture design. It involves collaborating with various stakeholders to understand the problem correctly. Contributing to the conversation to explore various ways to solve the problem. Applying various principles and tools to design the software architecture, then testing and iterating on the solution.

## Glossaries

- `CS`: customer success
- `UX`: user experience
