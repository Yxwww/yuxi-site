import React from 'react'
import App from 'next/app'
import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="w-screen container font-mono mx-auto body">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
