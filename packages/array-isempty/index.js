module.exports = isEmpty

function isEmpty (arr) {
  if (arr === null) {
    return true
  } else if (typeof arr === 'string' || Array.isArray(arr)) {
    return !arr.length
  } else if (typeof arr === 'object') {
    if (Object.keys(arr).length === 0 && arr.constructor === Object) {
      return true
    } else if (Object.keys(arr).length > 0 && arr.constructor === Object) {
      return false
    }
  } else {
    return true
  }
}
