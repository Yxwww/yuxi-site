import React from 'react'
import { Page } from 'components/layouts/main'
import { getExperience } from 'src/contents'
import { createEducation } from 'src/contents/education'
import ExperienceContent from 'components/ExperienceContent'
import ExperienceSection from 'components/ExperienceSection'
import SocialIcons from 'components/SocialIcons'

function ContactInfo() {
  return (
    <div className="text-sm">
      <div className="hidden print:block">
        <a href="mailto:yuxi.wang.dev@gmail.com">
          Email: yuxi.wang.dev@gmail.com
        </a>
      </div>
      <div className="hidden print:block">
        <a href="https://yuxiwang.dev/resume">
          Website: https://yuxiwang.dev/resume
        </a>
      </div>
      <div className="hidden print:block">
        <a href="rel:1-403-560-6778">Phone: 778-992-0773</a>
      </div>
    </div>
  )
}

function Portfolio() {
  const experience = getExperience()
  const education = createEducation()
  return (
    <Page className="">
      <div className="font-article flex flex-col mx-auto print:p-6">
        <div className="flex justify-between flex-wrap">
          <div>
            <h1>Yuxi Wang</h1>
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
            <h2 className="pt-4">Summary</h2>
            <p>
              Experienced developer with a passion for creating elegant
              solutions to complex problems. Skilled in state management,
              architecture design, and optimization, with over 7 years of
              experience building web applications. Proficient in JavaScript,
              React, and Node. Committed to delivering exceptional user
              experiences.
            </p>
          </div>
          <div className="right">
            <div className="contact" />
            {/* leave contact info here ? */}
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
  )
}

export default Portfolio
