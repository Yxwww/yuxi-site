import React from 'react';
import { useScrollPosition } from '@/utils/hooks';
import { Footer } from '../footer';
import Head from '../Head';
import Heading from '../heading/Heading';

export const Page = ({ children = null, className = '' }) => {
  const scroll = useScrollPosition();
  const showFloatingHeader = scroll > 100;
  return (
    <div
      id="app"
      className="transition-colors bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-50 "
    >
      <Head />
      <div className="min-h-screen max-w-6xl mx-auto bg-white dark:bg-zinc-800  flex flex-col">
        <main className={`px-2 sm:px-4 sm:pt-4 pt-2 print:pt-0 flex-grow`}>
          <div>
            <Heading />
          </div>
          <div
            className={`fixed w-screen md:px-4  left-0  z-10 sm:px-2 sm:py-1 bg-base-200 flex-grow text-base-content  ${
              showFloatingHeader ? 'top-0' : '-top-[100px]'
            }`}
          >
            <Heading />
          </div>
          <div
            className={`container flex-grow pb-2 print:pt-2 sm:pt-10 pt-4 px-1 tablet:px-2 mx-auto max-w-2xl lg:max-w-5xl ${className}`}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
