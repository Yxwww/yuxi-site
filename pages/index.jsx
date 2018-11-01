import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>Yuxi Wang</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <div className="container">
      <h1>Home</h1>
      <Link prefetch href="/portfolio">
        <a href="/portfolio">Portfolio</a>
      </Link>
    </div>
  </div>
)
