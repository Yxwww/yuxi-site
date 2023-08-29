import { Page } from 'components/layouts/main';
import { getExperience } from 'src/contents';
import { createEducation } from 'src/contents/education';
import ExperienceContent from 'components/ExperienceContent';
import ExperienceSection from 'components/ExperienceSection';
import SocialIcons from 'components/SocialIcons';
import { DOMAIN, PHONE_NUMBER } from 'constants/index';
import Link from 'next/link';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import {
  EnvelopeIcon,
  GlobeAltIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { SkillGroup, SkillYear } from '@/components/SkillGroup';

function ContactInfo() {
  return (
    <div className="text-sm">
      <div className="hidden print:block flex justify-middle">
        <a href="mailto:yuxi.wang.dev@gmail.com">
          <EnvelopeIcon className="contact-icons" /> yuxi.wang.dev@gmail.com
        </a>
      </div>
      <div className="hidden print:block flex justify-middle">
        <a href={`${DOMAIN}/resume`}>
          <GlobeAltIcon className="contact-icons" /> {DOMAIN}/resume
        </a>
      </div>
      <div className="hidden print:block">
        <a href={`rel:${PHONE_NUMBER}`}>
          <PhoneIcon className="contact-icons" />
          {PHONE_NUMBER}
        </a>
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
            <h1 className="font-normal text-">Yuxi Wang </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Frontend Developer
            </p>
          </div>
          <div className="contact">
            <div className="social-icons print:hidden pb-1 pt-2">
              <Link
                href="/static/contents/yuxi_resume.pdf"
                title="Download Resume"
                className="text-slate-800 dark:text-slate-400 inline-flex justify-end items-end dark:mr-2"
                target="_blank"
                download
              >
                <ArrowDownTrayIcon className="w-6 h-6 inline-block" />{' '}
                <span className="text-sm"></span>
              </Link>
              <SocialIcons className="" />
            </div>
            <ContactInfo />
          </div>
        </div>
        <div className="title">
          <div className="text-left">
            <h2 className="pt-4">Profile</h2>
            <p>
              Experienced developer with a passion for researching and creating
              elegant solutions to complex problems. Skilled in UI programming,
              data visualization, and performance optimization, with over 7
              years of experience building web applications. Proficient in
              JavaScript, React, and the Web platform. Committed to delivering
              exceptional user experiences.
            </p>
          </div>
        </div>
        <h2 className="pt-4">Skills</h2>
        <div className="grid grid-cols-1 print:grid-cols-3 tablet:grid-cols-3 pt-2 tablet:gap-8 gap-2">
          <SkillGroup title="Frameworks & Libraries">
            <li className="my-1">
              React/Redux <SkillYear year={5} />, WebComponents{' '}
              <SkillYear year={2} />, Svelte <SkillYear year={1} />
            </li>
            <li className="my-1">
              Three.js <SkillYear year={3} />, d3.js <SkillYear year={1} />,
              prosemirror <SkillYear year={2} />
            </li>
            <li className="my-1">RxJS, SWR, Tailwindcss</li>
          </SkillGroup>

          <SkillGroup title="Tools">
            <li className="my-1">Git, Webpack, Rollup, Babel</li>
            <li className="my-1">Vercel, Node.js, Express, MongoDB</li>
            <li className="my-1">
              Jest, Cypress, React testing library, Github Actions
            </li>
          </SkillGroup>
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
        </div>
        <div className="projects">
          <h2 className="pt-4">Experience</h2>
          <ExperienceContent experience={experience} />
        </div>
        <div className="py-4">
          <h2 className="font-medium pt-4">Education</h2>
          <ExperienceSection experience={education} />
        </div>
      </div>
      {/* end of app */}
    </Page>
  );
}

export default Portfolio;
