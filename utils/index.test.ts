import { allDefined, anyDefined, noneDefined } from './index'
import { test } from 'uvu'
import * as assert from 'uvu/assert'

test('allDefined', () => {
  assert.is(allDefined([1, 2]), true, 'should return true if all defined')
  assert.is(
    allDefined([undefined, 2]),
    false,
    'if there is an undefined should return false'
  )
})

test('anyDefined', () => {
  assert.is(anyDefined([1, 2]), true, 'should return true when all defined')
  assert.is(
    anyDefined([undefined, 2]),
    true,
    'should return true when there is at least one defined'
  )
  assert.is(
    anyDefined([undefined, undefined]),
    false,
    'should return false when there is none defined'
  )
})
test('noneDefined', () => {
  assert.is(
    noneDefined([undefined, 2]),
    false,
    'should return false when any of the values are defined'
  )
  assert.is(
    noneDefined([undefined, undefined]),
    true,
    'should return true when all are defined'
  )
})

test.run()
