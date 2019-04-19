import React from 'react'
import Page from '../layouts/main'
import dynamic from 'next/dynamic'

const Dragbar = dynamic(() => import('../components/Dragbar'))

export default function() {
  return (
    <Page>
      <div className="container">
        <h1>hooks viz playground</h1>
        <Dragbar />
      </div>
    </Page>
  )
}
