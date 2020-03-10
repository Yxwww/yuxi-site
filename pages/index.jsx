import React from 'react'
import Link from 'next/link'
import Page from '../components/layouts/main'

export default () => (
  <Page>
    <div className="container absolute t-0 screen-nav">
      <div className="text-xl mx-auto vertical-align text-center left-0 right-0">
        <p>
          Hi, I am a software developer currently working on{' '}
          <a href="https://views.seequent.com">Seequent View</a>.
        </p>
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
