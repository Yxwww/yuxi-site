import React, { useEffect } from 'react';
import App from 'next/app';
import '../styles/global.css';
import '../styles/index.css';
import { Open_Sans, Roboto_Slab, Martian_Mono } from 'next/font/google';
import { PageProvider } from '@/components/contexts/page';

const opensansFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  adjustFontFallback: false,
  preload: true,
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap',
  adjustFontFallback: false,
  preload: true,
});
const robotoMonoFont = Martian_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
  adjustFontFallback: false,
  preload: true,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <PageProvider>
      <div
        className={`${robotoSlab.variable} ${robotoMonoFont.variable} ${opensansFont.variable} font-sans sm:px-2 body`}
      >
        <Component {...pageProps} />
      </div>
    </PageProvider>
  );
};

export default MyApp;
