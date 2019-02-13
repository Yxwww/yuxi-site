import React, { useEffect, useRef, useReducer, useState } from 'react'
import { fromEvent, pipe } from 'rxjs'
import { join, map, cloneDeep } from 'lodash/fp'
import {
  switchMap,
  tap,
  takeUntil,
  sampleTime,
  skipUntil,
  repeat,
} from 'rxjs/operators'
import '../sass/whiteboard.scss'

const arrToStr = join(', ')

const strokeStyle = { stroke: 'rgb(255,0,0)', strokeWidth: 2 }
const useMouseDrag = containerRef => {
  const [interaction, setInteraction] = useState('idle')
  const [startPos, setStartPos] = useState([0, 0])
  const [position, setPosition] = useState([0, 0])
  const [path, setDrawingPath] = useState([])
  const initialState = {
    path: [],
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'add_path':
        return { path: state.path.concat([action.pos]) }
      default:
        throw new Error()
    }
  }
  const [pathState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    document.title = map(arrToStr)(path)
    const canvas = containerRef.current
    const mu$ = fromEvent(canvas, 'mouseup').pipe(
      tap(() => setInteraction('up')),
    )
    const mv$ = fromEvent(canvas, 'mousemove')
    const md$ = fromEvent(canvas, 'mousedown').pipe(
      tap(e => {
        console.log('mousedown')
        const pos = [e.clientX, e.clientY]
        setInteraction('down')
        setStartPos(pos)
      }),
    )
    const drawing$ = mv$.pipe(
      skipUntil(md$),
      takeUntil(mu$),
      repeat(),
      pipe(
        sampleTime(16),
        tap(e => {
          setInteraction('dragging')
          const pos = [e.clientX, e.clientY]
          setPosition(pos)
          dispatch({ type: 'add_path', pos: cloneDeep(pos) })
          setDrawingPath(path.concat([cloneDeep(pos)]))
        }),
      ),
    )

    const sub = drawing$.subscribe({
      complete: data => {
        console.log('complete', data)
      },
    })

    return () => {
      console.log('clean up listeners ?')
      sub.unsubscribe()
    }
  }, [])

  return { interaction, position, startPos, path, pathState }
}

const Whiteboard = function Whiteboard() {
  const canvasRef = useRef()
  const [count, setCount] = useState([])
  const { interaction, position, startPos, path, pathState } = useMouseDrag(
    canvasRef,
    count,
  )
  const strToRender = (() => {
    const { path } = pathState
    if (path.length < 2) {
      return <path />
    }
    let str = `M${path[0]} ${path[1]} `
    const svgPathStr = pathState.path.map(([x, y]) => `L ${x} ${y}`)
    str += svgPathStr.join(' ')

    return <path d={str} />
  })()
  return (
    <>
      <canvas ref={canvasRef} />
      <div>
        Mouse:
        {interaction}
      </div>
      <div>{arrToStr(position)}</div>
      <div>{arrToStr(startPos)}</div>

      <svg height="400" width="400">
        {strToRender}
        {/* {pathState.path.map((pos, index) => {
          const nextSeg = pathState.path[index + 1]
          if (nextSeg)
            return (
              <line
                key={index}
                x1={pos[0]}
                y1={pos[1]}
                x2={nextSeg[0]}
                y2={nextSeg[1]}
                style={strokeStyle}
              />
            )
          return (
            <line
              key={index}
              x1={pos[0]}
              y1={pos[1]}
              x2={pos[0]}
              y2={pos[1]}
              style={strokeStyle}
            />
          )
        })} */}
      </svg>

      <hr />
      <button
        type="button"
        onClick={() => {
          setCount(count.concat([1]))
        }}
      >
        inc
      </button>
      <div>{count}</div>
    </>
  )
}

export default Whiteboard
