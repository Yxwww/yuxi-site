import React from 'react'
import Head from '../Head'
import Heading from '../heading/Heading'

const DEFAULT_FONTS = ['Inter']
export const Page = ({
  children = null,
  fonts = DEFAULT_FONTS,
  className = '',
}) => {
  return (
    <div id="app" className="bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-50">
      <Head fonts={fonts} />
      <div className="max-w-6xl mx-auto bg-white px-4 h-screen flex flex-col">
        <div className="px-16">
          <div>
            <Heading />
          </div>
          <div
            className={`container flex-grow mt-16 py-2 print:pt-2 px-1 table:px-2 ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
