import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../layouts/main'
import '../sass/page-portfolio.scss'

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
      <div className="container">
        <div>
          <div className="flex space-between flex-end flex-wrap-wrap">
            <div>
              <h1>Yuxi Wang</h1>
            </div>
            <div className="contact">
              <div className="social-icons hide-on-print">
                You may reach me through:
                <div className="text-right">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/yuxiwang/"
                  >
                    <img src="/static/img/logos/in-black-28px.png" alt="" />
                  </a>
                  <a href="mailto:yuxi.wangcd@gmail.com">
                    <img src="/static/img/icons/email.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="show-on-print">
                <a href="mailto:yuxi.wangcd@gmail.com">
                  Email: yuxi.wangcd@gmail.com
                </a>
              </div>
              <div className="show-on-print">
                <a href="https://yuxiwang.me/portfolio">
                  Website: https://yuxiwang.me/portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="title">
            <div className="left">
              <h2>Summary</h2>
              <p>
                Experienced Software Developer (5 years) with a demonstrated
                history of working in the computer software industry. Skilled in
                Javascript, web application development, and realtime
                application state control. Strong engineering professional with
                a Bachelor&apos;s Degree focused in Computer Science from
                University of Calgary.
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
      </div>
      {/* end of app */}
    </Page>
  )
}

export default Portfolio
