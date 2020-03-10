import React from 'react'
import Link from 'next/link'
import Page from '../components/layouts/main'

export default () => (
  <Page>
    <div className="container relative screen-nav">
      <div className="text-xl mx-auto vertical-align text-center left-0 right-0">
        <h2>Under construction</h2>
        <p>
          Here are my{' '}
          <Link href="/blogs">
            <a>blogs</a>
          </Link>
          , and (hopefully) updated{' '}
          <Link href="/portfolio">
            <a>portfolio</a>
          </Link>
          .
        </p>
      </div>
    </div>
  </Page>
)
