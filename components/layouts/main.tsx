import React, { useEffect } from 'react';
import useScrollPosition from '@/utils/hooks/useScrollPosition';
import { Footer } from '../footer';
import Head from '../Head';
import Heading from '../heading/Heading';

const DEFAULT_FONTS = ['Inter'];
export const Page = ({
  children = null,
  className = '',
  fonts = DEFAULT_FONTS,
}) => {
  const scroll = useScrollPosition();
  return (
    <div
      id="app"
      className="transition-colors bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-50 "
    >
      <Head fonts={fonts} />
      <div className="min-h-screen max-w-6xl transition-colors mx-auto bg-white dark:bg-zinc-800   flex flex-col">
        <main className="px-2 sm:px-4 pt-4 print:pt-0 flex-grow">
          <div>
            <Heading />
          </div>
          <div
            className={`px-2 py-1 bg-base-100 flex-grow text-base-content  ${
              scroll > 100
                ? 'fixed md:px-4 top-0 left-0 w-screen z-10'
                : 'hidden'
            }`}
          >
            <Heading />
          </div>
          <div
            className={`container flex-grow mt-8 sm:mt-12 py-2 print:pt-2 px-1 table:px-2 mx-auto max-w-2xl lg:max-w-5xl ${className}`}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};
