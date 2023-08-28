import React, { FC, ReactNode } from 'react';

const SkillGroup: FC<{ children?: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className="py-2">
      <h3 className="">{title}</h3>
      <ul className="px-4 sm:px-4 list-disc mt-2">{children}</ul>
    </div>
  );
};

const SkillYear: FC<{ year: string | number }> = ({ year }) => {
  return (
    <span className="text-sm text-slate-500 dark:text-slate-400">
      ({year} {year === 1 ? 'yr' : 'yrs'})
    </span>
  );
};

export { SkillGroup, SkillYear };
