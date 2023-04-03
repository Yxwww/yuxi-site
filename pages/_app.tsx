import React from 'react'
import App from 'next/app'
import '../styles/global.css'
import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="font-sans sm:px-2 body">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
