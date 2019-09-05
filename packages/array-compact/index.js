module.exports = compact

function compact (arr) {
  const results = arr.filter(val => val != null)

  return results
}
