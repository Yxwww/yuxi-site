import React, { useState, memo } from 'react'

const content1 = { id: '1', content: 'content 1' }
const content2 = { id: '2', content: 'content 2' }
function ContentDisplay({ content, tag }) {
  console.log('rendered content for id: ', content.id, ` as ${tag}`)
  return <pre>{JSON.stringify(content)}</pre>
}

const ContentDisplayMemo = memo(ContentDisplay)

function ReRenderList({ contents }) {
  return (
    <div>
      {contents.map(content => {
        return (
          <ContentDisplay
            key={content.id}
            content={content}
            tag="Non memo component"
          />
        )
      })}
    </div>
  )
}

function ReactMemoDisplay({ contents }) {
  return (
    <div>
      {contents.map(content => {
        return (
          <ContentDisplayMemo
            key={content.id}
            content={content}
            tag="Memoized component"
          />
        )
      })}
    </div>
  )
}

export default function TestPage() {
  const [contents, updateContents] = useState([content1, content2])
  console.log('contents updated', contents)
  return (
    <div className="absolute h-full grid">
      <div className="self-center">
        <p>List always renders</p>
        <ReRenderList contents={contents} />
        <hr />
        <p>List only renders when content changed</p>
        <ReactMemoDisplay contents={contents} />
        <div className="mt-4">
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
