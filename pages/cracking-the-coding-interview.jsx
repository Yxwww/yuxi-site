import React from 'react'
import Page from '../layouts/main'
import Notes from './notes.md'

export default () => (
  <Page>
    <div>
      <div className="container">
        <Notes />
      </div>
    </div>
  </Page>
)
