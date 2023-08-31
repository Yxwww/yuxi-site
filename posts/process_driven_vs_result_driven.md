---
title: Process Driven vs Result Driven
description: Personal experience shifting between process driven and result drive programming mindset. How I approach finding the happy medium.
tags: Software Development, Programming mindset
published: 2023-08-30
image: capybara-digging.png
---

{% callout title="Takeaway" %}
Being fixated on results can lead to repetitive issue-solving, while an obsession with process can result in fear of missing out (FOMO) and detachment from the product. Achieving balance often entails making informed trade-offs based on experience.
{% /callout %}

## Being Result Driven

I pride myself being the person for building things quickly and efficiently. I was heavily `result driven`. Most of the projects assigned to me were either completely greenfield or brand-new initiatives. I thrived in this fast-paced environment, even working extra hours to maintain speed and efficiency. While this approach served me well initially, things changed when I transitioned to an existing project with an established architecture.

Eager and excited, I quickly learned the ropes, mastering the system and team dynamics. Before long, I became a productive member of the team. However, one day, I found myself fixing the same bug for the tenth time. Though I was fast, I realized that my speed was channeled into resolving the same issues repeatedly. It prompted me to question the effectiveness of my result-driven approach. "There has to be a better way to do this," I told myself.

{% callout title="Learnings" %}
Being focused on speedy and effective results is commendable but unsustainable if the architecture itself is flawed and requires improvement.
{% /callout %}

## Process Driven

That was the day I realized that being result-driven wasn't the end-all. Building quality software efficiently required more than just coding skills—it needed a well-thought-out process. I began seeking guidance from established architectures, design patterns, and successful case studies. My exploration led me to React & Redux and their underlying principles. I documented my learnings [here](/posts/redux)

The transition to a new architectural paradigm wasn't all sunshine and rainbows; it was both exhilarating and daunting. Nonetheless, the investment paid off. However, once the architecture was revamped, I found myself becoming too absorbed in the process. My focus shifted to constantly seeking improvements—better testing frameworks, more effective side-effect handling, superior build tools, and so on. In hindsight, I was somewhat distracted, perhaps due to a fear of missing out on some groundbreaking solution to problems we might encounter.

{% callout title="Learnings" %}
Continuous improvement is essential, but not every problem necessitates an architectural overhaul.
{% /callout %}

## The Balance

As I became more mature and understanding how various framework and libraries work. I began to develop my own approach to solving problems. I learned that [React & Redux just doesn't cut it at that point](/post/eject_from_redux#general-issues-with-redux-library-and-react). My strategies for tackling intricate, high-performance applications became increasingly lightweight and custom. My guiding principles for finding the right balance include:

- **Apply the right tool for the right job.** Don't be afraid to experiment. You will make mistakes. Be brave to admit them, be ready to rectify them and move on.
- **Start small and add things if necessary.** There are less necessary tools than you might think.
- **Take control over the runtime.** Whether it's frontend or backend, it's crucial to understand every call stack. Be picky about what goes into it.
- **Learn the Basics, Dig Deeper.** A solid understanding of the underlying technology will empower you to make more informed decisions. Don't hesitate to dig a couple of layers deeper into the tech stack.
- **Prototype Real-World Scenarios** Build prototypes and analyze results carefully and safely.
- **Be prepared to discard inadequate solutions.** Some tools or methods may seem attractive due to flashy features or promises, but it's essential to consider their actual utility and effectiveness.
- **Document the journey and findings** Keep a record of what you’ve learned, what worked, and what didn’t. Documentation is a treasure trove for future problem-solving.
- **Influence the Team with Your Principles** Share these principles with your team to cultivate a collective approach to balancing speed and quality.
- **Talk Over Noodles 🍜** Sometimes, the best conversations and revelations happen informally. Treat your teammates to some pho or ramen as you discuss your findings and insights.

In summary, striking a balance between being result-driven and process-driven requires an adaptable mindset, bolstered by experience and ongoing learning.
