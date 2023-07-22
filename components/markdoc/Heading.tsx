import { generateID } from '@/src/utils';
import { useCallback } from 'react';

function getHeadingUrl(id: string) {
  return `${window.location.origin}${window.location.pathname}#${id}`;
}

// get heading component based on level
function getHeadingLevel(level: number) {
  if (level < 1 || level > 6) {
    throw new Error(`Invalid heading level ${level}`);
  }

  return `h${level}`;
}

function ClickToCopy({ id }) {
  const handleClick = useCallback(() => {
    window.location.hash = id;
    navigator.clipboard.writeText(getHeadingUrl(id));
  }, [id]);

  return (
    <button
      className="group-hover:opacity-100 transition-opacity opacity-10 inline text-md hover:underline ml-2 text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
      onClick={handleClick}
    >
      #
    </button>
  );
}

export function Heading({ children, level }) {
  const HeadingLevel = getHeadingLevel(level) as keyof JSX.IntrinsicElements;
  const id = generateID([children]);

  return (
    <HeadingLevel id={id} className="font-bold group">
      {children}
      <ClickToCopy id={id} />
    </HeadingLevel>
  );
}
