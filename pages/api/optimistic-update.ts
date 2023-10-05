import { createItem } from '@/src/types/demo';
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

const storage = {
  items: [
    createItem({
      id: randomUUID(),
      type: 'left',
      label: 'Get dopamine from exercises',
      bgColor: 'bg-green-400',
    }),
    createItem({
      id: randomUUID(),
      type: 'right',
      label: 'You will be fine.',
      bgColor: 'bg-pink-400',
    }),
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200);
    res.json(storage);
    return;
  }
  if (req.method === 'POST') {
    const update = req.body;
    storage.items = update;
    Object.assign(storage, update);
    const toUpdate = structuredClone(storage);
    setTimeout(() => {
      res.status(200);
      res.json(toUpdate);
    }, 2000);
    return;
  }
}
