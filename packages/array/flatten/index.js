module.exports = flatten

function flatten (arr) {
  let collection = []
  if (!Array.isArray(arr)) {
    throw new Error('expected an array')
  }
  collection = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const elem = arr[i]
    if (Array.isArray(elem)) {
      collection.push(...(collection, flatten(elem)))
    } else {
      collection.push(elem)
    }
  }

  return collection
}
