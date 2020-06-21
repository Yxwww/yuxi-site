import React from 'react'
import dynamic from 'next/dynamic'
import { Page } from '../components/layouts/main'

const UnderConstruction = dynamic(() =>
  import('../components/UnderConstruction'),
)

export default function Blog() {
  return (
    <Page>
      <h1>Blog</h1>
      <UnderConstruction />
      <ul className="">
        {/* <PostLink title="Testing Selectors" url="testing-selectors" /> */}
      </ul>
    </Page>
  )
}
