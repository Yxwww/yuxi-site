import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../components/layouts/main'
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
          Website: https://yuxiwang.dev/resum
        </a>
      </div>
      <div className="hidden print:block">
        <a href="rel:1-403-560-6778">Phone: 403-560-67778</a>
      </div>
    </div>
  )
}

function Portfolio(props) {
  const { experience, education } = props
  return (
    <Page>
      <div className="font-resume flex flex-col">
        <h1 className="print:hidden">Resume</h1>
        <div className="flex justify-between flex-wrap">
          <div>
            <h2>Yuxi Wang</h2>
          </div>
          <div className="contact">
            <div className="social-icons print:hidden">
              <p>You may reach me through:</p>
              <SocialIcons className="text-right" />
            </div>
            <ContactInfo />
          </div>
        </div>
        <div className="title">
          <div className="text-left">
            <h2>Summary</h2>
            <p>
              Experienced Software Developer (5 years) with a demonstrated
              history of working in the computer software industry. Skilled in
              UI programming, graphic programming, and realtime application
              state management,. Strong engineering professional with a
              Bachelor&apos;s Degree focused in Computer Science from University
              of Calgary.
            </p>
          </div>
          <div className="right">
            <div className="contact" />
            {/* leave contact info here ? */}
          </div>
        </div>
        <div className="projects">
          <h2 className="font-medium">Projects</h2>
          <ExperienceContent experience={experience} />
        </div>
        <div>
          <h2 className="font-medium">Education</h2>
          <ExperienceSection experience={education} />
        </div>
      </div>
      {/* end of app */}
    </Page>
  )
}

Portfolio.getInitialProps = async function getInitialProps() {
  return {
    experience: getExperience(),
    education: createEducation(),
  }
}

export default Portfolio
