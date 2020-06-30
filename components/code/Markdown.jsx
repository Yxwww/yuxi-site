import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

function Markdown(props) {
  const { value } = props
  return (
    <ReactMarkdown
      source={value}
      renderers={{
        code: CodeBlock,
      }}
    />
  )
}

export default Markdown
