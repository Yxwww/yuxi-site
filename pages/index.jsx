import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Page from '../components/layouts/main'

const Attributions = dynamic(() => import('../components/Attributions'))
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

export default () => (
  <Page>
    <div className="container screen-nav">
      <div className="text-xl mx-auto vertical-align text-center left-0 right-0">
        <p>
          Hi, I am a software developer currently working on{' '}
          <a href="https://views.seequent.com">Seequent View</a>.
        </p>
        <p>
          Here are my{' '}
          <Link href="/projects">
            <a>projects</a>
          </Link>
          ,
          <Link href="/blogs">
            <a>blogs</a>
          </Link>
          , and updated{' '}
          <Link href="/portfolio">
            <a>portfolio</a>
          </Link>
          .
        </p>
        <SocialIcons className="text-center" />
      </div>
      <Attributions />
    </div>
  </Page>
)
