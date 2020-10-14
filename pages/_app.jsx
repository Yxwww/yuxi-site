import React from 'react'
import App from 'next/app'
import '../styles/global.css'
import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="w-screen container font-sans mx-auto body">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
