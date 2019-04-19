import React from 'react'
import dynamic from 'next/dynamic'
import Page from '../layouts/main'

const Dragbar = dynamic(() => import('../components/Dragbar'))

export default function() {
  return (
    <Page>
      <div className="container">
        <h1>hooks viz playground</h1>
        <div
          style={{
            height: `300px`,
            display: `grid`,
            justifyItems: `center`,
            alignItems: `center`,
          }}
        >
          <Dragbar />
        </div>
      </div>
    </Page>
  )
}
