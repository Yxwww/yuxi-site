import React from 'react'
import App, {Container} from 'next/app'
import '../sass/index.scss'
import {getExperience} from './contents'

export default class MyApp extends App {
        static async getInitialProps() {
    const pageProps = {experience: getExperience()}
    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
