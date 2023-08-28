import React, { FC, ReactNode } from 'react';

const SkillGroup: FC<{ children?: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className="py-2 pl-1">
      <h3 className="">{title}</h3>
      <ul className="px-4 list-disc mt-2">{children}</ul>
    </div>
  );
};

const SkillYear: FC<{ year: string | number }> = ({ year }) => {
  return (
    <span className="text-sm">
      ({year} {year === 1 ? 'yr' : 'yrs'})
    </span>
  );
};

export { SkillGroup, SkillYear };
