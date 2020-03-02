import React from 'react'
import App from 'next/app'
// import '../sass/index.scss'
import '../styles/index.css'

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
