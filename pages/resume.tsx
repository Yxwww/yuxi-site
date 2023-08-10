import React from 'react';
import { Page } from 'components/layouts/main';
import { getExperience } from 'src/contents';
import { createEducation } from 'src/contents/education';
import ExperienceContent from 'components/ExperienceContent';
import ExperienceSection from 'components/ExperienceSection';
import SocialIcons from 'components/SocialIcons';
import ProfilePicture from '/public/static/img/icons/download.png';
import { DOMAIN, PHONE_NUMBER } from 'constants/index';
import Link from 'next/link';
import Image from '@/components/Image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

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
  const experience = getExperience(); // TODO: move to SSG
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
                className="text-slate-500"
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
              Experienced developer with a passion for creating elegant
              solutions to complex problems. Skilled in state management,
              architecture design, and optimization, with over 7 years of
              experience building web applications. Proficient in JavaScript,
              React, and Node. Committed to delivering exceptional user
              experiences.
            </p>
          </div>
        </div>
        <div className="projects">
          <h2 className="font-medium pt-6">Projects</h2>
          <ExperienceContent experience={experience} />
        </div>
        <div className="py-8">
          <h2 className="font-medium pt-6">Education</h2>
          <ExperienceSection experience={education} />
        </div>
      </div>
      {/* end of app */}
    </Page>
  );
}

export default Portfolio;
