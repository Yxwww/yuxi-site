import React from 'react';
import App from 'next/app';
import '../styles/global.css';
import '../styles/index.css';
import { Open_Sans, Roboto_Slab, Roboto_Mono } from '@next/font/google';

const opensansFont = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
});
const robotoMonoFont = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div
        className={`${robotoSlab.variable} ${robotoMonoFont.variable} ${opensansFont.variable} font-sans sm:px-2 body`}
      >
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
