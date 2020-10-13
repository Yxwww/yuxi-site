import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'

const Attributions = dynamic(() => import('../components/Attributions'))
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

export default function Home() {
  return (
    <Page>
      <div className="container">
        <img
          className="pb-4"
          style={{ maxWidth: '12rem' }}
          src="/static/img/kinect-infra-red.jpeg"
          alt="profile-kinect-infra-red"
        />
        <SocialIcons className="text-left py-4" />
        <div>
          <p className="m-1">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
            , my name is Yuxi Wang.
          </p>
          <p className="m-1">
            I am a software developer currently working on{' '}
            <a href="https://views.seequent.com">Seequent View</a>.
          </p>
          <p className="m-1">
            Here are my{' '}
            <Link href="/projects">
              <a>projects</a>
            </Link>
            ,{' '}
            <Link href="/blogs">
              <a>blogs</a>
            </Link>
            , and updated{' '}
            <Link href="/resume">
              <a>resume</a>
            </Link>
            .
          </p>
        </div>
        <Attributions />
      </div>
    </Page>
  )
}
