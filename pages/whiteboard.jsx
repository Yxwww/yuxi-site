import React, { useEffect, useRef, useState } from 'react'
import { fromEvent } from 'rxjs'
import { switchMap, tap, takeUntil } from 'rxjs/operators'
import '../sass/whiteboard.scss'

const useMouseDrag = containerRef => {
  const [interaction, setInteraction] = useState('idle')
  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    const canvas = containerRef.current
    const mu$ = fromEvent(canvas, 'mouseup').pipe(
      tap(() => setInteraction('up')),
    )
    const mv$ = fromEvent(canvas, 'mousemove').pipe(
      tap(e => {
        setPosition([e.clientX, e.clientY])
      }),
    )
    const md$ = fromEvent(canvas, 'mousedown')
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

  return [interaction, position]
}

const Whiteboard = function Whiteboard() {
  const canvasRef = useRef()
  const [mouseState, position] = useMouseDrag(canvasRef)
  return (
    <>
      <canvas ref={canvasRef} />
      <div>{mouseState}</div>
      <div>{position}</div>
    </>
  )
}

export default Whiteboard
