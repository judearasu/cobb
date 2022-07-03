module.exports = append

function append(arr1, arr2) {
  arr1 = arr1 || []
  arr2 = arr2 || []
  const result = []
  let idx
  const len1 = arr1.length
  const len2 = arr2.length
  idx = 0
  while (idx < len1) {
    if (arr1[idx]) {
      result[result.length] = arr1[idx]
    }
    idx += 1
  }
  idx = 0
  while (idx < len2) {
    if (arr2[idx]) {
      result[result.length] = arr2[idx]
    }
    idx += 1
  }

  return result
}
