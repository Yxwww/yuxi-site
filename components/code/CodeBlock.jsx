import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

const CodeBlock = ({ value, language = null }) => (
  <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
)

CodeBlock.defaultProps = {
  language: null,
}

export default CodeBlock
