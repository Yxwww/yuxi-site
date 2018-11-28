export function removeFirstChar(str) {
  return str.slice(1, str.length)
}


export function captalizeFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
