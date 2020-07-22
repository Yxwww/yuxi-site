import React, { useState, memo } from 'react'

const content1 = { id: '1', content: 'content 1' }
const content2 = { id: '2', content: 'content 2' }
const ContentDisplayMemo = memo(function ContentDisplay({ content }) {
  return <pre>{JSON.stringify(content)}</pre>
})

function ReRenderList({ contents }) {
  return (
    <div>
      {contents.map(content => {
        return <ContentDisplayMemo key={content.id} content={content} />
      })}
    </div>
  )
}

export default function TestPage() {
  const [contents, updateContents] = useState([content1, content2])
  return (
    <div className="absolute h-full grid">
      <div className="self-center">
        <ReRenderList contents={contents} />
        <div>
          <button
            type="button"
            onClick={() => {
              updateContents([content1, content2])
            }}
          >
            Update contents
          </button>
        </div>
      </div>
    </div>
  )
}
