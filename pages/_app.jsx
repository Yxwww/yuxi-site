import React from 'react'
import App from 'next/app'
// import '../sass/index.scss'
import '../styles/index.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="w-screen container font-sans mx-auto">
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
