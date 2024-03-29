---
title: Fast by Default ⚡️
description: Explore ways to develop frontend fast by default.
published: 2023-07-04
tags: Performance, Web Development, JavaScript
incomplete: true
image: capybara-jetpack.png
---

The goal is to reduce:

- unnecessary calls
- memory leak
- long running main thread procedures
- long GC calls

## Performance Foundamentals

Before we dive into various ways to improve the performance of the application, we should first establish some foundamental knowledge of the existing stack. Often times, we look elsewhere to find a solution we can add to our application and hope for a optimistic result. In reality, I've found most of the biggest performance gain is fixing or replacing something we've alreadiy have. The answer usually lies right in front of us.

{% callout %}
Take full control over the event loop.
{% /callout %}

- Minimize third party dependencies
- Understand exactly what's happening in CPU and memory at any given time and procedure
- Understand how event loop works such as microtask/macrotasks, frame, and timeout,
- Understand how to use browser dev tools. Such as CPU monitoring, memory monitoring, frame inspection

## Performance Improvement

Now, we've established a good understanding of what's happening at runtime. We can look for ways to improve our application foundamentally. Here's some simple ways to speed up our application or at least make it feels like the application is faster. Introducing `imaginaryUtilities`:

### Chunking down heavy work

Powerful utils enables processing large data by chunks asynchronously. Such as extends Array methods to process certain amount of array items per frame, so it doesn't introduce jank.

```javascript
const { filter } = imaginaryUtilities;

const filteredArr = filter(arr, (v) => v + 1, { chunkSize: 1000 });
```

### Parallel by default

Any non main-thread dependent operation should be delegated to web workers. For example:

```javascript
const { createWorkerUtil } = imaginaryUtilities;
const { filter } = createWorkerUtil();

const filteredArr = await filter(arr, (v) => v + 1); // not sure how to make this happen with worker ? Maybe some kind of eval ?
```

### All operations must be cancellable

Once the heavy work is chunked, the thread has room to breath in between heavy works. We can introduce mechanism such as cancellation.

- Any loops are built with a kill switch
- Extend Array methods to accept cancellation mechanism
- Any fetch (promise based async) procedures are design with `AbortSignal` handling

```javascript
const { createWorkerUtil } = imaginaryUtilities;
const { filter } = createWorkerUtil();

const controller = new AbortController();
const abortSignal = controller.signal;

const filteredArr = await filter(arr, (v) => v + 1, {
  abortSignal,
});

// anytime later
controller.abort();
```

### All creations must be destroyed

Any entity generated by the application, whether it's an element, event handler, state, or loaded data, must be properly disposed of when no longer needed.

- Release resource that's held by an entity (app, closure, promise).
- Release the reference to the entities themselves.
- Monitor memory see if it gets cleaned up.

```javascript
function createController(id, initialState) {
  const cachedListeners = [];
  return {
    getState,
    dispose() {
      cachedListeners.forEach((e) => {
        el.removeEventListener('click', e);
      });
      cachedListeners.length = 0;
    },
  };
}

let entity = createController();

// onDestroy
entity.dipose();
entity = null;
```
