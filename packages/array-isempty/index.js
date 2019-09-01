module.exports = isEmpty

function isEmpty (arr) {
  if (arr == null) {
    return true
  } else if (typeof arr === 'string' || Array.isArray(arr)) {
    return !arr.length
  } else {
    return true
  }
}
