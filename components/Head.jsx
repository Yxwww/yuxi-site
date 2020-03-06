import React from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import { pipe, T, identity, equals, cond, always, memoizeWith } from 'ramda'
import { removeFirstChar, captalizeFirstChar } from '../utils/index'

const processPathNameHomeCase = cond([
  [equals('/'), always('/home')],
  [T, identity],
])
const processPathNameToTitle = pipe(
  processPathNameHomeCase,
  removeFirstChar,
  captalizeFirstChar,
)
const fontsConfig = {
  Lora: '400,700',
  Inter: '400,500,700',
}

const computeFonts = memoizeWith(identity, function computeFonts(fonts) {
  return fonts
    .map(font => {
      return `${font}:${fontsConfig[font]}`
    })
    .join('|')
})
function Header(props) {
  const {
    router: { pathname },
    fonts = ['Lato'],
  } = props
  const fontsString = computeFonts(fonts)
  return (
    <div>
      <Head>
        <title>Yuxi Wang |{` ${processPathNameToTitle(pathname)}`}</title>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/static/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/static/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href={`https://fonts.googleapis.com/css?family=${fontsString}:&display=swap`}
          rel="stylesheet"
        />
        )
      </Head>
    </div>
  )
}
export default withRouter(Header)
