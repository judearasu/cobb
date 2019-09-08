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
})
