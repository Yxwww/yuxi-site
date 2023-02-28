import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'
import ProfilePicture from '/public/static/img/kinect-infra-red.jpeg'
import Image from '@/components/Image'

const Attributions = dynamic(() => import('../components/Attributions'))
const SocialIcons = dynamic(() => import('../components/SocialIcons'))

export default function Home() {
  return (
    <Page>
      <div className="container pb-4">
        <Image
          src={ProfilePicture}
          alt="profile-kinect-infra-red"
          width={250}
        />
        <SocialIcons className="text-left pt-8 pb-4" />
        <div className="max-w-lg">
          <p className="m-1">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
            , my name is Yuxi(pronounced &apos;Yushi&apos;). I&apos;m a software
            developer currently looking for new possibility and eager to find my
            next career opportunity.
          </p>
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
