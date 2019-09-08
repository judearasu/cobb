module.exports = combine

function combine (arr1, arr2) {
  if (arr2 == null) {
    return arr1
  }
  if (arr2.length === 0) {
    return arr1
  }
  let idx
  idx = 0
  const len2 = arr2.length
  while (idx < len2) {
    if (arr2[idx] && !arr1.includes(arr2[idx])) {
      arr1.push(arr2[idx])
    }
    idx += 1
  }

  return arr1
}
