const combine = require('../../../packages/array/combine')

describe('combine', () => {
  test('should return array1 when array array2 is null', () => {
    const arr = [1, 2, 3, 4]; const arr2 = null
    const result = combine(arr, arr2)
    expect(result).toEqual([1, 2, 3, 4])
  })
  test('should return array1 when array array2 is empty', () => {
    const arr = [1, 2, 3, 4]; const arr2 = []
    const result = combine(arr, arr2)
    expect(result).toEqual([1, 2, 3, 4])
  })
  test('should append every value of the second array to the end of first array', () => {
    const arr = [1, 2, 3, 4]; const arr2 = [5, 6, 7]
    const result = combine(arr, arr2)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
  test('should append every value of the second array to the end of first array and remove the duplicates', () => {
    const arr = [1, 2, 3, 4, 5, 7]; const arr2 = [5, 6, 7]
    const result = combine(arr, arr2)
    expect(result).toEqual([1, 2, 3, 4, 5, 7, 6])
  })

  test('should append every value of the second array to the end of first array and combined array to be equal to array1', () => {
    const arr = [1, 2, 3, 4, 5, 7]; const arr2 = [5, 6, 7]
    combine(arr, arr2)
    expect(arr).toEqual([1, 2, 3, 4, 5, 7, 6])
  })
})
