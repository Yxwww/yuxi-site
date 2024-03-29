import React from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';
import { PROFILE_IMAGE_URL } from 'src/contents/constants';
import {
  META_OG_DESCRIPTION_KEY,
  META_OG_IMAGE_KEY,
  META_OG_TITLE_KEY,
  META_TITLE_KEY,
} from '@/constants';
import { usePage } from '@/components/contexts/page';

function Header() {
  const {
    pageContext: { title, description, image, tags },
  } = usePage();

  return (
    <div>
      <Head>
        <title key={META_TITLE_KEY}>{title}</title>
        <meta property="og:title" content={title} key={META_OG_TITLE_KEY} />
        <meta name="description" content={description} />
        <meta
          property="og:description"
          content={description}
          key={META_OG_DESCRIPTION_KEY}
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content={image || PROFILE_IMAGE_URL}
          key={META_OG_IMAGE_KEY}
        />
        <meta name="keywords" content={tags.join(',')} />
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        )
      </Head>
    </div>
  );
}
export default withRouter(Header);
