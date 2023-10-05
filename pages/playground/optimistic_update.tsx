import { Page } from '@/components/layouts/main';
import { Item, ItemType } from '@/src/types/demo';
import { useCallback } from 'react';
import useSWR from 'swr';
import { updateObjectInArrayImmutable } from 'yuxi-utils';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

function Card({
  item,
  onMoveClicked,
}: {
  item: Item;
  onMoveClicked: (item: Item) => void;
}) {
  return (
    <div className={`card shadow-xl w-96 ${item.bgColor} card-bordered`}>
      <div className="card-body">
        <div className="card-title">{item.label}</div>
        <div
          className={`${
            item.type === 'left' ? 'justify-end' : 'justify-start'
          } card-actions`}
        >
          <button
            className="btn btn-primary"
            onClick={() => onMoveClicked(item)}
          >
            Move {item.type == 'left' ? 'right' : 'left'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OptimisticUpdate() {
  const { data, isLoading, error, mutate } = useSWR<{ items: Item[] }>(
    '/api/optimistic-update',
    fetcher
  );
  const onMoveClicked = useCallback(
    async (item: Item) => {
      if (!data) return;
      const updated = updateObjectInArrayImmutable(
        data.items,
        (t) => t.id === item.id,
        (t) => ({ ...t, type: item.type === 'left' ? 'right' : 'left' } as Item)
      );
      mutate(() => ({
        items: updated,
      }));
      fetch('/api/optimistic-update', {
        method: 'POST',
        body: JSON.stringify(updated),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      mutate();
      // mutate(({ items }) => {
      //   return {
      //     items,
      //   };
      // });
      // send a request to the API to update the data
      // await requestUpdateUsername(newName);
      // update the local data immediately and revalidate (refetch)
      // NOTE: key is not required when using useSWR's mutate as it's pre-bound
      // mutate({ ...data, name: newName });
    },
    [mutate, data]
  );

  if (isLoading) return 'loading';
  if (error) return 'error';

  const { items } = data;
  const { left, right } = items.reduce(
    (acc, cur) => {
      if (cur.type === 'left') {
        acc.left.push(cur);
      } else {
        acc.right.push(cur);
      }
      return acc;
    },
    { left: [] as Item[], right: [] as Item[] }
  );

  return (
    <Page>
      <div className="w-full flex flex-row">
        <div className="flex-1 flex flex-col mr-8">
          <h2>LEFT</h2>
          {left.map((item) => (
            <Card key={item.id} item={item} onMoveClicked={onMoveClicked} />
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          <h2>RIGHT</h2>
          {right.map((item) => (
            <Card key={item.id} item={item} onMoveClicked={onMoveClicked} />
          ))}
        </div>
      </div>
    </Page>
  );
}
