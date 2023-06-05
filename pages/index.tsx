import React from 'react';
import Link from 'next/link';
import { Page } from '@/components/layouts/main';
import SocialIcons from '@/components/SocialIcons';

export default function Home() {
  return (
    <Page>
      <div className="container pb-4">
        <div className="max-w-lg font-mono">
          <p className="m-1">
            Hi{' '}
            <span role="img" aria-label="wave">
              👋
            </span>
            , my name is Yuxi. I&apos;m a software developer currently looking
            for new possibility and eager to find my next career opportunity.
          </p>
          <div className="text-left pt-8 pb-4 px-1">
            <SocialIcons />
          </div>
          <p className="m-1">
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
          </p>
        </div>
      </div>
    </Page>
  );
}
