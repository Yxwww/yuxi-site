import React, { FC } from 'react';
import { map, join } from 'ramda';
import { nanoid as generate } from 'nanoid';
import { Experience, ProductExperience } from '@/src/types';

const generateRolesString = join(', ');

const createContributionList = map((data: any) => (
  <li className="my-1" key={data}>
    {data}
  </li>
));
// const NUMBER_OF_CONTRIBUTION_TOSHOW_ON_LOAD = 3
const toArrayOfP = map((o: any) => (
  <p className="my-1" key={generate()}>
    {o}
  </p>
));
function renderDescription(description: string[] | string) {
  if (Array.isArray(description)) {
    return toArrayOfP(description);
  }
  return description ? <p>{description}</p> : null;
}

const ProjectExperience: FC<{ productExp: ProductExperience }> = ({
  productExp: { contributions, product, time, roles, description },
}) => {
  const contributionLists = createContributionList(contributions);
  return (
    <div className="py-1">
      {product ? <div className="mt-1 text-lg">{product}</div> : null}
      <div className="text-slate-500 flex justify-between align-end">
        <div>
          <i className="text-left experience-roles">
            {generateRolesString(roles)}
          </i>
        </div>
        <div>
          <i className="text-left experience-time">{time}</i>
        </div>
      </div>
      {renderDescription(description)}
      <div className="px-2 tablet:px-4 pt-1">
        <ul className="px-4 list-disc">{contributionLists}</ul>
      </div>
    </div>
  );
};

const ExperienceSection: FC<{ experience: Experience }> = ({ experience }) => {
  const { productExperiences, company, uid } = experience;

  const CompanyInfo = (
    <>
      <span className="captalize">{company}</span>
    </>
  );
  return (
    <div className="py-1 tablet:py-2 relative" key={uid}>
      <h3 className="my-2 text-left">{CompanyInfo}</h3>
      {productExperiences.map((exp) => {
        return <ProjectExperience key={exp.projecturl} productExp={exp} />;
      })}
      <span className="right-bottom-corner" />
    </div>
  );
};

export default ExperienceSection;
