import React, { useEffect, useState, useRef } from 'react'
import { fromEvent } from 'rxjs'
import { tap, sampleTime, switchMap, takeUntil } from 'rxjs/operators'
import { join, map, cloneDeep } from 'lodash/fp'
import { useMouseDrag, arrToStr } from '../pages/whiteboard';

const barStyle = {
  width: `200px`,
  height: `5px`,
  background: `grey`,
}

const dragNodeStyle = {
  display: `inline-block`,
  width: `10px`,
  height: `30px`,
  background: `black`,
}

const containerStyle = {
  display: `grid`,
  // justifyItems: `center`,
  // alignItems: `center`,
}

export default function Dragbar() {
  const dragNodeRef = useRef(null)
  const containerRef = useRef(null)
  const { interaction, position, startPos, path, pathState } = useMouseDrag(
    containerRef,
  )
  return (
    <>
      <div style={containerStyle} ref={containerRef}>
        <div style={dragNodeStyle} ref={dragNodeRef} />
        <div style={barStyle} />
      </div>

      <div>
        Mouse:
        {interaction}
      </div>
      <div>position: {arrToStr(position)}</div>
      <div>startpos: {arrToStr(startPos)}</div>
      <div>path: {map(arrToStr)(path)}</div>
    </>
  )
}
