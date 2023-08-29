---
title: Eject From React Redux with Grace
description: After using React and Redux for years, I want to take some time to reimagine web app developement with the learnings.
tags: Redux, React, Web Developemenmt
published: 2023-07-03
image: capybara-watch.png
incomplete: true
---

Although no tool is perfect, Redux [changed how I approach software development](/post/redux). Redux is designed with React ecosystem as its primary consumer. The three principles and concepts are powerful, and there are many ways to implement them? The way Redux approaches it is specifically tailored toward React. If you need to use Redux outside of React, you will need some kind of caching-capable adapter. Otherwise, there will be too much performance overhead.

{% callout %}
Though tools may adapt to circumstance, the essence of their purpose remains unaltered.
{% /callout %}

Instead of trying to make Redux work for various environments, we can adapt Redux principles and concepts to the new environment. But why do we want to bring Redux to a different environemnt in the first place ? Couldn't we just use React & Redux to build every single web app there is ? My answer to that is:

1. not all apps are built using React & Redux stack so learning how to adapt is important
2. React & Redux is not the best option for every application

Here are some issues I came across working with the stack:

## General issues with Redux library and React

Most complains I read about Redux is related to how much boilerplate code there is when programming Redux. I personally don't find that's an issue. Regardless if we are writing reducers, actions, or selectors, we are simply writing pure functions that can be easily composed. In fact, there are projects such as [redux toolkit](https://redux-toolkit.js.org/) aims to improve the quality of life when using Redux.

My concern with React Redux is:

{% callout type="warning" %}
React Redux ecosystem is not designed to allow maximum runtime performance.
{% /callout %}

Both technologies focus on building things `correctly`, but not building things run `fast`. While there can be an argument made that "if it's easier to built things right, then it's easier to make them fast". I agree with this notion. Being able to build things right is the must have. Although, depends on the type of application that's being developed, being able to build things that runs fast becomes a must have requirement as well. Many web apps now adays handles large amount of data while process many events and I/O at the same time. In my experience, if an architecture enables programming style to be slower here and there, then it will always add up which reduce the user experience and costs business unnecessary resources.

React developers come up with ways to make things `NOT slower than it should` using technology like memoization, [reselect](https://www.npmjs.com/package/reselect), and [virtual dom](https://www.npmjs.com/package/React-dom). Here are some pitfalls I've experienced while applying Redux concepts in a real world application:

### Issue with "single source of truth"

[Single source of truth with unidirectional data flow](</post/redux#single-source-of-truth-with-unidirectional-data-flow-(udf)>) is powerful for reasoning about state update; however, it leads to any state update will have to go through the entire store each time it updates.

- State update reaches every single reducer inorder to produce a new state
- Memoization to prevent the app from rerendering (selectors, v-dom, hooks)
- Unrelated functions gets called (including function components)
  - Developers hope they cache or memoize state object correctly to avoid a rerender.
  - Dealing with apps with large data, caching data alone can easily lead to memory overflow which easily blown up the browser tab

### Issue with "pure functions"

[Pure functions](/post/redux#pure-functions-with-kickass-compositions) does not make it easy to make the app performant.

- Mutation will always be faster than creating new data
- In-place operations is always more memory effecient; however, it goes against the whole point of writing pure functions.
- Fixated about writing pure functions may lead to heavy garbage collection (GC) work.
  - When the GC happens on the main thread, it will be very noticeable.

### Issue with "immutable data"

[Immutable data](/post/redux#readonly-state-with-immutable-data) is just a nightmare concept working with large data.

- Due to lack of native immutable data structure support in JS, we are using third party solutions
- Treating something immutable is way more effecient than actually making it immutable.
  - Even shallow clone can still be expensive depends on the data type
- Developer needs to know how to set purity boundary when working with large data set

If you've spent time working with React long enough, you will hear a lot about how to `prevent rerender`. The way to achieve it is not obvious. Working with React in combination with Redux does not make things easier either. To demonstrate this, please see the following example where I breakdown the architecture about what happens if there's state change:

### Example 1 - an architecture overview

Let's say we are building a color changer. There's a colorpicker that will update a square div `background-color`. You can play with the demo [here](/playground/colorchanger). The app looks like this:

{% image
  src="/static/img/posts/colorchanger-demo.png"
  height=500 /%}

Here is what happens (roughly) during runtime if the app is built using React Redux:

![Images](/static/img/posts/react-redux-dataflow.png)

As you can see, there's a lot going on to simply change a color of a box. In traditional programming, it should be simply handled in couple lines of code. Here is another example where React over renders.

### Example 2: everything gets rendered all the time

In react, any parents component rerenders, the child gets rerendered as well. Here is another example where we are building a simple form component:

```jsx
/**
 * When input changes list items rerenders
 */
function Form() {
  const [name, setName] = useState('');
  return (
    <form>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <UserName name={name} />
      <ListComponent list={someLargeArray} />
    </form>
  );
}

function UserName({ name }) {
  return <span>@{name}</span>;
}

function ListComponent({ list }) {
  return <table>{list.map(renderListItem)}</table>;
}
```

Can you believe that that `<ListComponent />` render function will always gets called on `<input />` change while having no direct connection between them. Even though virtual dom will eventually block rerendering to the dom nodes, we are still paying the CPU and memory costs for these unnecessary rerendering calls. What if the component render functions has expensive procedures. Memoize the heavy compute logic is required so that the application is not slowing down too much. The point is: any parent component causes all child component rerender by default is a design flaw. We have to worry about any component rerendering is cost on the developer and any machine the React engine runs on.

### Play the Cache game

The two example apps above demonstrate what I mean by React Redux stack is not designed for writing performant web apps. It's very easy to write correctly behaving yet "slow" applications. _Slow_ as in slower than it should be.

> Okay, this looks ridiculous. React Redux stack is overkill for such a simple application. But there is a reason it was designed this way so it can scale, I'm sure any modification of the current system is going to make it more difficult to scale right?

It's not necessary if we change how we apply Redux principle would make it way worse to maintain. I personally prefer to tackle a problem head on by exposing the problem and solve it from there. For example, if a codebase having problem with rendering performance, I'd wish I can directly look into the code where rendering happens and find out why instead of "playing a cache game". You see, one of the key knowledge to React performance is "managing when referencial equality check should pass". It's a bit overly counter intuitive imo. When we build applications, we just want to focus on building the app logic. Let's say, we are implementing the behavior where one element triggers the update of another. Instead of directly programming that procedure using handler and call an update function, we are playing this game around referencial equality to make sure the app is not too eager to rerender.

Then the question becomes: how can we design the app to be fast while adheres to React & Redux principles so that it can scale. It looks like it's time for us to do some soul searching. Let's unlearn what we have leanred.

## Unlearn what we have learned

[Redux principles and concepts transcends the library](</post/redux#single-source-of-truth-with-unidirectional-data-flow-(udf)>). I've had great success applying unidirectional data flow concept long before I started using Redux. This convinced me, we can apply the rest of the Redux concept to make our application more robust, easy to work with, and performant.

In that spirit, let's take an another look at [example 2 - the form element](/post/eject_from_redux#example-2:-everything-gets-rendered-all-the-time). Instead of wondering how to build a performant form in react, I'd sit back and ask: what's the most effecient way to build this regardless if you are using react? What do we know in terms of the underlying interactions:

- input changed
- `<UserName />` updates based on the name change

In plain HTML, this looks like:

```html
<script>
  function onInputChange(newName) {
    document.querySelector('#UserName')?.setText(newName);
  }
</script>

<form>
  <input on-change="onInputChange" />
  <span id="UserName"></span>
  <ul id="ListComponent">
    ...
  </ul>
</form>
```

Here you go, that's it. That's all there is. No rerendering from the `<ul>` component, we don't have to memoize anything. Something changed directly update the things needs to be updated. How come this is not the norm??

You might think it's unfair to use such a simple example. Which is kind of my point because it is supposed to be simple. However, to make React & Redux work exactly how the rawjs example works at run time, we are looking at:

- memoize the ListComponent, which memoizes the `list` prop
- shallow copy the `list` prop everytime we update even just one item from that array
- if the `list` prop is a large array, we can have two array exists at the same time in memory for referential equality

Even we do all that, virtual dom still needs resource for handling array rendering. In this experimentation, we ejected from the react ecosystem, we moved from using a `Framework` to directly dealing with `RawJS`. We are dealing with the lower level abstraction of the web app development:

{% image
  src="/static/img/posts/webapp-abstraction.png"
  height=300 /%}

A problem of this approach is of course it doesn't scale very well. We aren't thinking in components lifecycle, side effects management, or state management. Instead, we are thinking in managing and updating the dom nodes directly. We need to build some abstraction to allow us think app level instead of dom manipulation level. Before we move on I want to make the app more complete:

Now, let's add some more functions for a more feature complete demo

- input appends item to the list
- delete button for each list item

```html
<script>
  // handles when document ready
  const userNameInputEl = document.querySelector('#UserName');
  const listEl = document.querySelector('#ListComponent');

  userNameInputEl.addEventListener('keyboard', (e) => {
    if (isEnter(e)) {
      const newLi = document.createElement('li');
      newLi.innerText = e.target.value;
      listEl.appendChild(newLi);
    }
  });

  function onInputChange(newName) {
    userNameInputEl.setText(newName);
  }

  function onDeleteClicked(e) {
    e.target.remove();
  }
</script>

<form>
  <input on-change="onInputChange" />
  <span id="UserName"></span>
  <ul id="ListComponent">
    <li on-click="onDeleteClicked">...</li>
    <!-- render the rest renderList fn -->
  </ul>
</form>
```

Now, the app is complete, we can do some refactoring to raise the abstraction level back to the application level.

{% callout type="check" title="Keep in mind!" %}
Any modification from this point forward can potentially slow down the app and not make the app better for the user.
{% /callout %}

## [Insert updated example followed with Redux principle]

### TO BE CONTINUED...
