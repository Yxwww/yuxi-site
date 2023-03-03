import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'

const Attributions = dynamic(() => import('../components/Attributions'))
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

export default function Home() {
  return (
    <Page>
      <div className="container pb-4">
        <div className="max-w-lg">
          <p className="m-1">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
            , my name is Yuxi. I&apos;m a software developer currently looking
            for new possibility and eager to find my next career opportunity.
          </p>
          <div className="text-left pt-8 pb-4">
            <SocialIcons />
          </div>
          <p className="m-1">
            Here are my <Link href="/projects">projects</Link>,{' '}
            <Link href="/blogs">blogs</Link>, and updated{' '}
            <Link href="/resume">resume</Link>.
          </p>
        </div>
        <Attributions />
      </div>
    </Page>
  )
}