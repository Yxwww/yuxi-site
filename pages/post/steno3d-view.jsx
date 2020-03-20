import React from 'react'
import Link from 'next/link'
// import Link from 'next/link'
import Page from '../../components/layouts/main'

export default function Steno3DProject() {
  return (
    <Page>
      <div className="container">
        <h1>Steno3D(LeapFrog View)</h1>
        <div className="py-4">
          <Link href="https://view.seequent.com">
            <a className="block my-2">link to project</a>
          </Link>
          <img
            className="max-w-full rounded-lg tablet:max-w-5xl"
            src="/static/img/projects/seequent-eagle.png"
            alt="earwear-eoc-center"
          />
          <p>to be continued ...</p>
        </div>
      </div>
    </Page>
  )
}
