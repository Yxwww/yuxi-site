import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../layouts/main';

const ExperienceContent = dynamic(() =>
  import('../components/ExperienceContent'),
)

export default class PortolioPage extends React.Component {
  render() {
    return (
      <Page>
      <div className="container">
        <div>
          <div>
            <h1 style={{display: 'inline-block'}}>Yuxi Wang</h1>
            <a
              target="_blank"
              href="https://github.com/Yxwww"
              style={{display: 'block'}}
            >
              <img height="32" width="32" src="static/img/github.png" alt="" />
            </a>
            <p>
              Hello traveller, welcome to my site ! <br />
            </p>
          </div>
          <section>
            <h2>Summary</h2>
            <p>
              Experienced Software Developer (5 years) with a demonstrated
              history of working in the computer software industry. Skilled in
              Javascript, web application development, application state control
              , and mobile development. Strong engineering professional with a
              Bachelor's Degree focused in Computer Science from University of
              Calgary.{' '}
            </p>
          </section>
          <section className="projects">
            <h2>Projects</h2>
            <ExperienceContent experience={this.props.experience} />
          </section>
        </div>
      </div> /* end of app */
    </Page>
    )
  }
}
