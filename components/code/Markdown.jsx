import React from 'react'
import PropTypes from 'prop-types'
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

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Markdown
