import Markdoc from '@markdoc/markdoc'
import React from 'react'

export default function MarkdocPage() {
  const source = `
  ## Hello from markdoc
  `
  const ast = Markdoc.parse(source)
  console.log('ast', ast)
  const content = Markdoc.transform(ast /* config */)
  return Markdoc.renderers.react(content, React)
}
