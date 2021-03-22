import React from 'react'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'
import { getExperience } from '../src/contents'
import { createEducation } from '../src/contents/education'

const ExperienceContent = dynamic(() =>
  import('../components/ExperienceContent'),
)

const ExperienceSection = dynamic(() =>
  import('../components/ExperienceSection'),
)
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

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
        <a href="rel:1-403-560-6778">Phone: 403-560-6778</a>
      </div>
    </div>
  )
}

function Portfolio() {
  const experience = getExperience()
  const education = createEducation()
  return (
    <Page className="mx-auto">
      <div className="font-article flex flex-col">
        <div className="flex justify-between flex-wrap">
          <div>
            <h1>Yuxi Wang</h1>
          </div>
          <div className="contact">
            <div className="social-icons print:hidden">
              <p className="my-0">You can reach me through:</p>
              <SocialIcons className="text-left tablet:text-right" />
            </div>
            <ContactInfo />
          </div>
        </div>
        <div className="title">
          <div className="text-left">
            <h2 className="pt-4">Summary</h2>
            <p>
              Experienced Software Developer who is passionate about solving
              problems. Skilled in UI programming, graphic programming, and real
              application state management. Strong engineering professional with
              a Bachelor&apos;s Degree focused in Computer Science from the
              University of Calgary.
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
