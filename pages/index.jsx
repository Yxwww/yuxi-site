import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'

export default () => (
  <Page>
    <div>
      <h1>Home</h1>
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
  </Page>
)
