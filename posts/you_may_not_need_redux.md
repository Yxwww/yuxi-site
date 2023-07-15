---
title: Eject From React Redux with Grace
description: After learning and using React and Redux for years, I want to take some time sit back and brainstorm how would I build a web app from scratch.
tags: Redux, React, Web Developemenmt
published: 2023-07-03
image: capybara-watch.png
incomplete: true
---

Some tools brighten my day. Some tools transform my life. Redux [changed how I approach software development](/post/redux), although no tool is perfect. Redux is designed with React ecosystem as it's primary consumer. The three principles and concepts are powerful, but there are many ways to implement them. The way Redux approaches it is specifically tailored toward React. If you need to use Redux outside of React, you will need some kind of caching-capable adapter. Otherwise, there will be too much performance overhead.

> Though tools may adapt to circumstance, the essence of their purpose remains unaltered.

Instead of trying to make the Redux work for various environments, we can adapt Redux principles and concepts to the new environment. First, I want to bring up some performance concerns I've had with React(React) ecosystem as whole.

## Issues with Redux library and React in general

Redux is not designed to maximize performance. Same can be said about React. Both technologies focus on building things `correctly` but not building things run `fast`. While there can be an argument made that if it's easier to built things right, then it's easier to make them fast. I partially agree with this notion. Although, unfortunately in my experience, if an architecture allows things to be slower here and there, then it will always add up. _Always_. Making a system easy to reason about does not directly make code fast, it is merely a beneficial side effect.

React developers explore and come up with ways to make things _not_ `slower than it should` using technology like memoization, [reselect](https://www.npmjs.com/package/reselect), and [virtual dom](https://www.npmjs.com/package/React-dom). Here are some potential pitfalls applying redux concepts:

### Issue with single source of truth

[Single source of truth with unidirectional data flow](</post/redux#single-source-of-truth-with-unidirectional-data-flow-(udf)>) is powerful for reasoning about state update; however, it leads to any state update will have to go through the entire store each time it updates. _Each time_ it updates.

- reducer switch statement process all actions
- memoization to prevent the app from rerendering (selectors, v-dom, hooks)
- Unrelated functions gets run (or rendered), developers hope they cache or memoize state object correctly to avoid a rerender

### Issue with pure functions

[Pure functions](/post/redux#pure-functions-with-kickass-compositions) does not make it easy to write performant code, other than memoization becomes easier

- Mutation will always be faster than recreating large data for the sake of purity
- In-place operations always is more memory effecient; however, it goes against the whole point of writing pure functions.
- Fixated writing pure functions may lead to heavy garbage collection (GC) work. If the GC happens on the main thread, it will be very noticable

### Issue with immutable data

`Immutable data` is just a nightmare concept working with large data.

- Due to lack of native immutable data structure support in JS, we are using third party solutions
- Treating something immutable is way more effecient than actually making it immutable.
- Developer needs to know how to set purity boundary when working with large data set

If you've been in the React world long enough, you will hear a lot about how to `prevent rerender`. The way to achieve it is not obvious. Working with React in combination with Redux does not make things easier either. Here are some examples of rerendering people deal with on daily basis.

### Everything gets rendered all the time

In react, any parents component rerenders, the child gets rerendered as well. In the following example, `<ListComponent />` will always gets rendered on input change. Even though, there's no direct logic connection between the `<ListComponent />` and the `<input />` state

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

This is an issue, it's not obvious why `name` state changes, it rerenders all list component. Even though virtual dom will eventually block rerendering to the dom nodes themselves, we are still paying the CPU and memory costs for these unnecessary rerendering.

> Children rendering deeply coupled with parents rendering is a design flaw

What if the component render functions has expensive procedures. Memoize the heavy compute logic you say ? The point is: the fact that any parent component causes all child component rerender by default is a design flaw. We have to always worry about any component rerendering is cost on the developer and the machine react engine runs on.

### Play the the Cache game

This is what I mean by redux is not designed for writing performant web apps. It's very easy to write correctly behaving yet slow applications. The key knowledge to React performance is `managing when referencial equality check should pass`. It's a bit overly counter intuitive imo. When we build applications, we just want to focus on building the app logic. Lets say, we are implementing the behavior where one element triggers the update of another. Instead of directly programming that procedure using handler and call an update function, we are playing this game around referencial equality to make sure the app is not overly eager to rerender.

## Back to the basics

[Redux principles and concepts transcends the library](</post/redux#single-source-of-truth-with-unidirectional-data-flow-(udf)>). I've had great success applying unidirectional data flow concept long before I started using Redux. This convinced me, we can apply the rest of the Redux concept to make our application more robust, easy to work with, and performant.

In that spirit, let's take an another look at this form element. Instead of wondering "what's the react way to handle this?", I'm suggestting to sit back and ask: what's the most effecient way to do this regardless if you are using react? Refering to the Form example above, what do we know in terms of the underlying interactions:

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

Here you go, that's it. That's all there is. Do you feel the sense of tranquility? Do you feel like your soul has been cleansed? No rerendering from the `<ul>` component, we don't have to memoize anything. Something changed directly update the things needs to be updated. It's like WUUUUT? How come this is not the norm??

We ejected from the react ecosystem, we moved from using a `Framework` to directly dealing with `HTML, CSS, JS`. We are dealing with the lower level abstraction of the web app development:

![Images](/static/img/posts/web-app-abstraction.png)

The problem with this approach is it doesn't scale very well if not careful. We aren't thinking in components lifecycle, side effects management, or state management. Instead, we are thinking in managing and updating the dom nodes directly.

Now, starting from here if you are building an app from scratch. Can possibly avoid all the footguns listed above. How would you build it?

Here is how I'd approach it:

#### TO BE CONTINUED...
