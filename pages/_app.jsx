import React from 'react'
import App from 'next/app'
import '../sass/index.scss'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="container">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
