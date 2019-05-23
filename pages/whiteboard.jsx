import React, { useEffect, useRef, useReducer, useState } from 'react'
import { fromEvent } from 'rxjs'
import { join, map, cloneDeep } from 'lodash/fp'
import { switchMap, tap, takeUntil, sampleTime } from 'rxjs/operators'
import '../sass/whiteboard.scss'

export const arrToStr = join(', ')

export const strokeStyle = { stroke: 'rgb(255,0,0)', strokeWidth: 2 }
const UPDATE_STARTPOS = 'update_startPos';
const UPDATE_MOVEDELTA = 'update_movedelta';
const UPDATE_POS = 'update_pos';
const subVec = (vec1,vec2) => [(vec1[0] - vec2[0]), (vec1[1] - vec2[1])]
export const useMouseDrag = containerRef => {
  const [interaction, setInteraction] = useState('idle')
  const [startPos, setStartPos] = useState([0, 0])
  const [position, setPosition] = useState([0, 0])
  const [moveDelta, setMoveDelta] = useState([0, 0])
  const [path, setDrawingPath] = useState([])
  const initialState = {
    startPos: [],
    pos: [],
    path: [],
    moveDelta: [],
  }
  function reducer(state, action) {
    switch (action.type) {
      case 'add_path':{
        return { ...state, path: state.path.concat([action.pos]) }
      }
      case UPDATE_STARTPOS: {
        return {
          ...state,
          startPos: action.startPos,
        }
      }
      case UPDATE_MOVEDELTA: {
        return {
          ...state,
          moveDelta: subVec(state.pos, state.startPos),
        }
      }
      case UPDATE_POS: {
        return {
          ...state,
          pos: action.pos,
        }
      }
      default:
        throw new Error()
    }
  }

  const [dragState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log('useMouseDrag')
    const container = containerRef.current
    const mu$ = fromEvent(container, 'mouseup').pipe(
      tap(() => setInteraction('up')),
    )
    const mv$ = fromEvent(container, 'mousemove').pipe(
      sampleTime(100),
      tap(e => {
        const pos = [e.clientX, e.clientY]
        dispatch({ type: UPDATE_POS, pos })
        dispatch({ type: 'add_path', pos: cloneDeep(pos) })
        setDrawingPath(path.concat([cloneDeep(pos)]))
        console.log(pos, startPos, pos[0] - startPos[0])
        dispatch({ type: UPDATE_MOVEDELTA })
      }),
    )
    const md$ = fromEvent(container, 'mousedown').pipe(
      tap(e => {
        const pos = [e.clientX, e.clientY]
        dispatch({ type: UPDATE_STARTPOS, startPos: pos })
      }),
    )
    const drawing$ = md$.pipe(
      tap(() => setInteraction('down')),
      switchMap(() =>
        mv$.pipe(
          tap(() => setInteraction('dragging')),
          takeUntil(mu$),
        ),
      ),
    )

    const sub = drawing$.subscribe({
      complete: data => {
        console.log('complete', data)
      },
    })

    return () => {
      sub.unsubscribe()
      drawing$.complete()
      mu$.complete()
      mv$.complete()
      md$.complete()
    }
  }, [])

  return { interaction, position, startPos, path, dragState, moveDelta}
}

const Whiteboard = function Whiteboard() {
  const canvasRef = useRef()
  const { interaction, position, startPos, path, dragState } = useMouseDrag(
    canvasRef,
  )
  const [count, setCount] = useState([])
  return (
    <>
      <canvas ref={canvasRef} />
      <div>
        Mouse:
        {interaction}
      </div>
      <div>{arrToStr(position)}</div>
      <div>{arrToStr(startPos)}</div>
      <div>{map(arrToStr)(path)}</div>

      <svg height="210" width="500">
        {dragState.path.map((pos, index) => {
          const nextSeg = dragState.path[index + 1]
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
        })}
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
