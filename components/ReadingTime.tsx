import CoffeeIcon from './icons/Coffee';

export default function ReadingTime({ readingTime }: { readingTime: number }) {
  return (
    <span className="inline-flex items-end" title="reading time">
      <CoffeeIcon className="inline-block w-5 h-5 mr-2" />{' '}
      <span className="leading-tight mr-6">{readingTime} mins </span>
    </span>
  );
}
