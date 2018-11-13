import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../layouts/main'

const ExperienceContent = dynamic(() =>
  import('../components/ExperienceContent'),
)

export default function(props) {
  const { experience } = props
  return (
    <Page>
      <div className="container">
        <div>
          <div>
            <h1 style={{ display: 'inline-block' }}>Yuxi Wang</h1>
          </div>
          {/* <div className="social-icons">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Yxwww"
            >
              <img src="static/img/github.png" alt="" />
            </a>
          </div>
          */ }
          <section className="title">
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
          </section>
          <section className="projects">
            <h2>Projects</h2>
            <ExperienceContent experience={experience} />
          </section>
        </div>
      </div>
      {/* end of app */}
    </Page>
  )
}
