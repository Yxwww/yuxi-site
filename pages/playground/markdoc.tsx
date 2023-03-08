import Markdoc, { Config } from '@markdoc/markdoc'
import React from 'react'
import { Page } from '@/components/layouts/main'
import { heading } from '@/markdoc/schema/Heading'

const config: Config = {
  nodes: {
    heading,
  },
}

export default function MarkdocPage() {
  const source = `
  ## Hello from markdoc
  `
  const ast = Markdoc.parse(source)
  const content = Markdoc.transform(ast, config)
  // console.log('ast', { ast, content })
  const components = Markdoc.renderers.react(content, React)
  return <Page>{components}</Page>
}
