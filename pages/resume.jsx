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

function Portfolio(props) {
  const { experience, education } = props
  return (
    <Page>
      <div className="container flex flex-col">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h1>Yuxi Wang</h1>
          </div>
          <div className="contact">
            <div className="social-icons print:hidden">
              You may reach me through:
              <div className="text-right">
                <a
                  title="print"
                  href="#"
                  onClick={e => {
                    e.preventDefault()
                    window.print()
                  }}
                >
                  <img
                    className="social-icon"
                    src="/static/img/icons/download.png"
                    alt=""
                  />
                </a>

                <a
                  title="open twitter"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/thissushiguy"
                >
                  <img
                    className="social-icon"
                    src="/static/img/logos/twitter-icon-4.png"
                    alt=""
                  />
                </a>
                <a
                  title="open LinkedIn"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/yuxiwang/"
                >
                  <img
                    className="social-icon"
                    src="/static/img/logos/in-black-28px.png"
                    alt=""
                  />
                </a>
                <a title="Email" href="mailto:yuxi.wang.dev@gmail.com">
                  <img
                    className="social-icon"
                    src="/static/img/icons/email.png"
                    alt=""
                  />
                </a>
                <a title="Phone" href="rel:1-403-560-6778">
                  <img
                    className="social-icon"
                    src="/static/img/icons/phone.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="hidden print:block">
              <a href="mailto:yuxi.wang.dev@gmail.com">
                Email: yuxi.wang.dev@gmail.com
              </a>
            </div>
            <div className="hidden print:block">
              <a href="https://yuxiwang.me/portfolio">
                Website: https://yuxiwang.me/portfolio
              </a>
            </div>
            <div className="hidden print:block">
              <a href="rel:1-403-560-6778">Phone: 403-560-67778</a>
            </div>
          </div>
        </div>
        <div className="title">
          <div className="left">
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
          <h2>Projects</h2>
          <ExperienceContent experience={experience} />
        </div>
        <div>
          <h2>Education</h2>
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
