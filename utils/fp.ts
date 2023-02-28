export const track = (tag) => (data) => {
  console.log(`TAG: ${tag}\n${data}`)
  return data
}
