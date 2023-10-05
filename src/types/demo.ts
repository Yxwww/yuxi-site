export type ItemType = 'left' | 'right';
export interface Item {
  id: string;
  type: ItemType;
  bgColor: string;
  label: string;
}

export function createItem({ id, label, type, bgColor }: Item): Item {
  return { id, type, label, bgColor };
}
