import React from 'react';
import Link from 'next/link';
import { Page } from '@/components/layouts/main';
import SocialIcons from '@/components/SocialIcons';
import Image from 'next/image';

export default function Home() {
  return (
    <Page>
      <div className="container pb-4">
        <div className="max-w-lg font-mono px-1 mx-auto">
          <div className="h-[400px] sm:h-[600px] w-full relative">
            <Image
              className="object-contain md:object-cover my-0"
              src="/static/img/capybara-landing.png"
              alt={`image of post`}
              fill
            />
          </div>

          <p className="sm:my-4 my-2">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
            , my name is Yuxi. I&apos;m a software developer currently looking
            for new possibility and eager to find my next career opportunity.
          </p>

          <div>
            Here are my{' '}
            <Link className="link" href="/projects">
              projects
            </Link>
            ,{' '}
            <Link className="link" href="/blogs">
              blogs
            </Link>
            , and updated{' '}
            <Link className="link" href="/resume">
              resume
            </Link>
            .
          </div>

          <div className="text-left pt-8 pb-4 px-1">
            <SocialIcons />
          </div>
        </div>
      </div>
    </Page>
  );
}
