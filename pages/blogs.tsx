import React from 'react'
import { Page } from '../components/layouts/main'
import UnderConstruction from '../components/UnderConstruction'

export default function Blog() {
  return (
    <Page>
      <h1>Blogs</h1>
      <UnderConstruction />
      <ul className="">
        {/* <PostLink title="Testing Selectors" url="testing-selectors" /> */}
      </ul>
    </Page>
  )
}
