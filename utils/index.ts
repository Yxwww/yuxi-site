import { complement } from 'ramda'

export function removeFirstChar(str: string) {
  return str.slice(1, str.length)
}

export function captalizeFirstChar(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const UNDEFINED = 'undefined'
export function allDefined(vArray: any[]): boolean {
  return vArray.findIndex((v) => typeof v === UNDEFINED) === -1
}
export function anyDefined(arr: any[]): boolean {
  return arr.findIndex((v) => typeof v !== UNDEFINED) !== -1
}

export const noneDefined = complement(anyDefined)
