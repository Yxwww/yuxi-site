import { useEffect, useState } from 'react';

function createIdGenerator() {
  let counter = 0;
  return function next() {
    counter++;
    return `fancyid-${counter}`;
  };
}

const uuid = createIdGenerator();
type Statuses = 'pending' | 'waiting' | 'complete' | 'error';
interface Task<T = unknown> {
  id: string;
  status: Statuses;
  task: () => Promise<T>;
}
function createTask<T>(id: string, fn: () => Promise<T>): Task<T> {
  return {
    id,
    status: 'waiting',
    task: () => {
      return fn();
    },
  };
}

async function delay(duration = 0) {
  return new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, duration);
  });
}

function computeState(tasks: Task[]): {
  isLocked: boolean;
  nextToRun: null | Task;
  isEmpty: boolean;
} {
  if (tasks.length === 0) {
    return {
      isEmpty: true,
      isLocked: false,
      nextToRun: null,
    };
  }
  const state = {
    isEmpty: false,
    isLocked: false,
    nextToRun: null,
  };
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === 'pending') {
      return { isLocked: true, nextToRun: null, isEmpty: false };
    }
    if (tasks[i].status === 'waiting' && !state.nextToRun) {
      state.nextToRun = tasks[i];
    }
  }
  return state;
}

export default function QueuePlayground() {
  const [tasks, setState] = useState<Task[]>([]);
  console.log({ tasks });

  useEffect(() => {
    let discarded = false;
    let t;
    async function processNext() {
      // const
      const { isEmpty, isLocked, nextToRun } = computeState(tasks);
      if (isEmpty) return;
      if (isLocked) return;
      if (!nextToRun) return;
      console.log('process', nextToRun.id);

      setState((ts) => {
        const toUpdateIdx = ts.findIndex((v) => nextToRun.id === v.id);
        const shallowCopy = ts.slice();
        shallowCopy[toUpdateIdx] = { ...ts[toUpdateIdx], status: 'pending' };
        return shallowCopy;
      });

      await nextToRun.task();

      setState((ts) => {
        const toUpdateIdx = ts.findIndex((v) => nextToRun.id === v.id);
        const shallowCopy = ts.slice();
        shallowCopy[toUpdateIdx] = { ...ts[toUpdateIdx], status: 'complete' };
        return shallowCopy;
      });
    }
    processNext();

    return () => {
      console.log('discard', t?.id);
      discarded = true;
    };
  }, [tasks]);
  return (
    <div>
      <button
        onClick={() => {
          setState((arr) => [
            ...arr,
            createTask(uuid(), () =>
              delay(5000).then((v) => {
                console.log('task:', v);
              })
            ),
          ]);
        }}
      >
        add task
      </button>

      <ul>
        {tasks
          .filter((v) => v.status === 'waiting' || v.status === 'pending')
          .map((t, i) => {
            return <div key={t.id}>{t.id} </div>;
          })}
      </ul>
    </div>
  );
}
