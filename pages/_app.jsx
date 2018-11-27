import React from 'react'
import App, { Container } from 'next/app'
import '../sass/index.scss'
import { getExperience } from '../src/contents'
import { createEducation } from '../src/contents/education'

export default class MyApp extends App {
  static async getInitialProps() {
    const pageProps = {
      experience: getExperience(),
      education: createEducation(),
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
