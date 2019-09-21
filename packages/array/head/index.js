module.exports = head

function head (arr, limit) {
  let result = []

  if (!Array.isArray(arr)) {
    throw new Error('expected an array')
  }

  if (arguments.length === 1) {
    return arr
  }

  if (limit === null && typeof limit !== 'number') {
    return arr
  }

  if (limit < 0) limit = 0

  result = arr.slice(0, limit)

  return result
}
