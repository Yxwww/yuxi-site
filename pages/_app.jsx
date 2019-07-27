import React from 'react'
import App, { Container } from 'next/app'
import '../sass/index.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </Container>
    )
  }
}

export default MyApp
