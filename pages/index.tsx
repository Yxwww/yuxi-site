import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'
import ProfilePicture from '/public/static/img/kinect-infra-red.jpeg'
import Image from '../components/Image'

const Attributions = dynamic(() => import('../components/Attributions'))
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

export default function Home() {
  return (
    <Page>
      <div className="container pb-4">
        <Image
          src={ProfilePicture}
          alt="profile-kinect-infra-red"
          width={100}
        />
        <SocialIcons className="text-left py-4" />
        <div>
          <p className="m-1">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
            , my name is Yuxi(pronounced &apos;Yushi&apos;) I often use a playful approach when introducing myself, telling people they can call me &quot;Sushi&quot; with a Y instead.
          </p>
          <p className="m-1">
            I&apos;m a software developer currently looking for new possibility and eager to find my next career opportunity.
          </p>
          <p className="m-1">
            Here are my{' '}
            <Link href="/projects">
              projects
            </Link>
            ,{' '}
            <Link href="/blogs">
              blogs
            </Link>
            , and updated{' '}
            <Link href="/resume">
              resume
            </Link>
            .
          </p>
        </div>
        <Attributions />
      </div>
    </Page>
  )
}
