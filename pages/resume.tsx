import { Page } from 'components/layouts/main';
import { getExperience } from 'src/contents';
import { createEducation } from 'src/contents/education';
import ExperienceContent from 'components/ExperienceContent';
import ExperienceSection from 'components/ExperienceSection';
import SocialIcons from 'components/SocialIcons';
import { DOMAIN, PHONE_NUMBER } from 'constants/index';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { SkillGroup, SkillYear } from '@/components/SkillGroup';

function ContactInfo() {
  return (
    <div className="text-sm">
      <div className="hidden print:block">
        <a href="mailto:yuxi.wang.dev@gmail.com">
          Email: yuxi.wang.dev@gmail.com
        </a>
      </div>
      <div className="hidden print:block">
        <a href={`${DOMAIN}/resume`}>Website: {DOMAIN}/resume</a>
      </div>
      <div className="hidden print:block">
        <a href={`rel:${PHONE_NUMBER}`}>Phone: {PHONE_NUMBER}</a>
      </div>
    </div>
  );
}

function Portfolio() {
  const experience = getExperience();
  const education = createEducation();
  return (
    <Page className="print:max-w-5xl">
      <div className="font-article flex flex-col mx-auto print:p-6">
        <div className="flex justify-between flex-wrap">
          <div>
            <h1 className="font-normal">
              Yuxi Wang{' '}
              <Link
                href="/static/contents/yuxi_resume_2023.pdf"
                title="Download Resume"
                className="text-slate-500 dark:text-slate-400"
                target="_blank"
                download
              >
                <ArrowDownTrayIcon className="w-6 h-6 inline-block" />
              </Link>
            </h1>
          </div>
          <div className="contact">
            <div className="social-icons print:hidden">
              <p className="my-0 pb-1">You can reach me through:</p>
              <SocialIcons className="" />
            </div>
            <ContactInfo />
          </div>
        </div>
        <div className="title">
          <div className="text-left">
            <h2 className="font-medium pt-4">Summary</h2>
            <p>
              Experienced developer with a passion for reasearching and creating
              elegant solutions to complex problems. Skilled in UI programming,
              data visualization, and performance optimization, with over 7
              years of experience building web applications. Proficient in
              JavaScript, React, and the Web platform. Committed to delivering
              exceptional user experiences.
            </p>
          </div>
        </div>
        <h2 className="font-medium pt-4">Skills</h2>
        <div className="grid grid-cols-1 tablet:grid-cols-3 pt-2 tablet:gap-8 gap-2">
          <SkillGroup title="Languages">
            <li className="my-1">
              JavaScript/TypeScript <SkillYear year="8" />
            </li>
            <li className="my-1">
              HTML & CSS <SkillYear year="8" />
            </li>
            <li className="my-1">
              C# <SkillYear year="2" />
            </li>
          </SkillGroup>

          <SkillGroup title="Frameworks & Libraries">
            <li className="my-1">
              React/Redux <SkillYear year={5} />, WebComponents{' '}
              <SkillYear year={2} />, Svelte <SkillYear year={1} />
            </li>
            <li className="my-1">
              Three.js <SkillYear year={3} />, d3.js <SkillYear year={1} />,
              prosemirror <SkillYear year={2} />
            </li>
            <li className="my-1">RxJS, SWR</li>
          </SkillGroup>

          <SkillGroup title="Tools">
            <li className="my-1">Git, Webpack, Rollup, Babel</li>
            <li className="my-1">Vercel, Node.js, Express, MongoDB</li>
            <li className="my-1">
              Jest, Cypress, React testing library, Github Actions
            </li>
          </SkillGroup>
        </div>
        <div className="projects">
          <h2 className="font-medium pt-4">Projects</h2>
          <ExperienceContent experience={experience} />
        </div>
        <div className="py-8">
          <h2 className="font-medium pt-4">Education</h2>
          <ExperienceSection experience={education} />
        </div>
      </div>
      {/* end of app */}
    </Page>
  );
}

export default Portfolio;
