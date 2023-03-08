import React, { useEffect } from 'react'
import useScrollPosition from 'utils/hooks'
import Head from '../Head'
import Heading from '../heading/Heading'

const DEFAULT_FONTS = ['Inter']
export const Page = ({
  children = null,
  fonts = DEFAULT_FONTS,
  className = '',
}) => {
  const scroll = useScrollPosition()
  return (
    <div
      id="app"
      className="transition-colors bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-50"
    >
      <Head fonts={fonts} />
      <div className="max-w-6xl transition-colors mx-auto bg-white dark:bg-zinc-800 md:px-4 min-h-screen flex flex-col">
        <div className="px-2 sm:px-4 md:px-16 pt-4 print:pt-0">
          <div>
            <Heading />
          </div>
          <div
            className={`px-2 py-1 bg-base-100 text-base-content  ${
              scroll > 300
                ? 'fixed md:px-4 top-0 left-0 w-screen z-10'
                : 'hidden'
            }`}
          >
            <Heading />
          </div>
          <div
            className={`container flex-grow mt-8 sm:mt-16 py-2 print:pt-2 px-1 table:px-2 ${className}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
